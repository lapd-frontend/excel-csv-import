import * as React from 'react';
import * as Parser from './Parser';
import * as ExcelAPI from './ExcelAPI';
import {Logger} from './Logger';
import {CsvStringAndName} from './Parser';
import {version} from './version.json';
import {AbortFlagArray} from './AbortFlag';

export interface Progress {
    show: boolean;
    aborting: boolean;
    percent: number; // 1.0 === 100%
}

export interface State {
    initialized: boolean;
    version: string;
    largeFile: boolean;
    parserOutput: ParserOutput;
    progress: Progress;
}

export enum OutputType {hidden, info, error}

export interface ParserOutput {
    type: OutputType;
    output: string;
}

export type ProgressCallback = (progress: number) => void

export const Context = React.createContext(undefined);

export class Store extends React.Component<{}, State> {
    public constructor(props: {}) {
        super(props);
        this.state = {
            version: version,
            initialized: false,
            parserOutput: {
                type: OutputType.hidden,
                output: '',
            },
            largeFile: false,
            progress: {show: false, aborting: false, percent: 0.0},
        };

        this._log = new Logger();
        this._log.push('version', {version});

        this._abortFlags = new AbortFlagArray();
    }

    public render(): React.ReactNode {
        /* eslint-disable @typescript-eslint/no-explicit-any */
        const value: {[key: string]: any} = {};
        for (const method of Object.getOwnPropertyNames(this)) {
            if (typeof (this as any)[method] === 'function') {
                value[method] = (this as any)[method];
            }
        }
        /* eslint-enable @typescript-eslint/no-explicit-any */

        value.state = this.state;

        return (
            <Context.Provider value={value}>
                {this.props.children}
            </Context.Provider>
        );
    }

    public async componentDidMount(): Promise<void> {
        await this.initAPI();
    }

    public log = () => this._log.log()

    public initAPI = async (): Promise<void> => {
        try {
            const environmentInfo = await Parser.init();
            this.setState({initialized: true});
            this._log.push('environmentInfo', environmentInfo)
        } catch (err) {
            this.setParserError(new Error(Store.getErrorMessage(err)));
        }
        this._log.push('initAPI');
        await this.checkLargeFile();
    }

    public checkLargeFile = async (): Promise<void> => {
        // 1 GB file / 20 bytes per cell
        const aLargeExcelWorksheetProbablyHasThisManyCells = 1_000_000_000 / 20;
        const largeFile = await this.worksheetArea() > aLargeExcelWorksheetProbablyHasThisManyCells;
        this.setState({largeFile});
        this._log.push('checkLargeFile');
    }

    public setParserOutput = (parserOutput: ParserOutput) => {
        this.setState({parserOutput});
        this._log.push('setParserOutput', {parserOutput});
    }

    public setParserError = (err: Error) => {
        // Action is logged inside setParserOutput()
        this.setParserOutput({type: OutputType.error, output: Store.getErrorMessage(err)});
    }

    // Aborts all import and export processes that are currently running.
    public abort = () => {
        this._abortFlags.abort();
        this.setState(state => ({
            progress: {show: state.progress.show, aborting: true, percent: state.progress.percent},
        }));
        this._log.push('abort');
    }

    public import = async (options: Parser.ImportOptions): Promise<void> => {
        this.setState(
            state => ({progress: {show: !state.progress.show, aborting: false, percent: 0.0}}),
        );

        try {
            const errors = await Parser.importCSV(
                options,
                this.setProgress,
                this._abortFlags.newFlag(),
            );
            if (errors.length > 0) {
                this.setParserOutput({type: OutputType.info, output: JSON.stringify(errors)});
            }
        } catch (err) {
            this.setParserError(new Error(Store.getErrorMessage(err)));
        }
        this.setState(
            state => ({progress: {show: !state.progress.show, aborting: false, percent: 1.0}})
        );

        this._log.push('import', {options});
    }

    public worksheetArea = async (): Promise<number> => {
        let result = 0;
        try {
            result = await ExcelAPI.worksheetArea();
        } catch (err) {
            this.setParserError(new Error(Store.getErrorMessage(err)));
        }
        this._log.push('worksheetArea');
        return result;
    }

    // Returns null if error occurred.
    public csvStringAndName = async (
        options: Parser.ExportOptions
    ): Promise<CsvStringAndName|null> => {
        this.setState(
            state => ({progress: {show: !state.progress.show, aborting: false, percent: 0.0}}),
        );

        let result: CsvStringAndName = null;
        try {
            result = await Parser.csvStringAndName(
                options,
                this.setProgress,
                this._abortFlags.newFlag(),
            );
        } catch (err) {
            this.setParserError(new Error(Store.getErrorMessage(err)));
        }
        this.setState(
            state => ({progress: {show: !state.progress.show, aborting: false, percent: 1.0}}),
        );

        this._log.push('csvStringAndName', {options});
        return result;
    }

    private static getErrorMessage(err: Error): string {
        return err.toString() + '\n' + err.stack
    }

    private readonly _log: Logger;
    private readonly _abortFlags: AbortFlagArray;

    // percent of 1.0 === 100%
    private setProgress: ProgressCallback = (percent: number) => {
        this.setState(state => ({
            progress: {show: state.progress.show, aborting: state.progress.aborting, percent},
        }));
    }
}