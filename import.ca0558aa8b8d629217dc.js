(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{387:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n(1),o=n(117);function i(e){return function(t){return r.createElement(o.a.Consumer,null,function(n){return r.createElement(e,Object.assign({},t,{store:n}))})}}},418:function(e,t,n){"use strict";n.d(t,"a",function(){return d});var r,o=n(1),i=n(505),a=n(496),u=n(85),c=n(386),s=n(57);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}!function(e){e[e.autoDetect=0]="autoDetect",e[e.comma=1]="comma",e[e.space=2]="space",e[e.tab=3]="tab",e[e.other=4]="other"}(r||(r={}));var m=function(e){function t(e){var n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=y(this,b(t).call(this,e))).dropdownOnChange=function(e,t){var o,i=(p(o={},r.autoDetect,""),p(o,r.comma,","),p(o,r.space," "),p(o,r.tab,"\t"),p(o,r.other,""),o);n.setState({otherSelected:t.key===r.other}),n.props.onChange(i[t.key])},n.getErrorMessage=function(e){return n.props.showLengthError&&e.length>1?n.props.t("Delimiter length must be 0 or 1"):""},n.state={otherSelected:!1},n._stringToDropdownKey={",":r.comma," ":r.space,"\t":r.tab};var o=[{key:r.comma,text:"Comma (U+002C)"},{key:r.space,text:"Space (U+0020)"},{key:r.tab,text:"Tab (U+0009)"},{key:r.other,text:e.t("Other")}],i={key:r.autoDetect,text:e.t("Auto-detect")};return e.showAutoDetect?(n._stringToDropdownKey[""]=r.autoDetect,n._dropdownOptions=[i].concat(o)):n._dropdownOptions=o,n}var n,s,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,o["Component"]),n=t,l=[{key:"description",value:function(e){return 1==e.length?t.codePoint(e):""}},{key:"codePoint",value:function(e){return"U+"+e[0].charCodeAt(0).toString(16).toUpperCase().padStart(4,"0")}}],(s=[{key:"render",value:function(){var e=this,n=this.props.t,r=o.createElement("div",{className:u.smallDivider},o.createElement(i.a,{className:u.monospace,value:this.props.value,onChange:function(t,n){return e.props.onChange(n)},description:t.description(this.props.value),onGetErrorMessage:this.getErrorMessage,deferredValidationTime:1,placeholder:n("Enter custom delimiter")}));return o.createElement(o.Fragment,null,o.createElement(a.a,{label:n("Delimiter"),options:this._dropdownOptions,responsiveMode:c.ResponsiveMode.large,selectedKey:this.selectedKey(),onChange:this.dropdownOnChange}),this.showCustomInput()?r:null)}},{key:"showCustomInput",value:function(){if(this.state.otherSelected)return!0;var e=[","," ","\t"];return this.props.showAutoDetect&&e.push(""),!e.includes(this.props.value)}},{key:"selectedKey",value:function(){return this.state.otherSelected?r.other:this.props.value in this._stringToDropdownKey?this._stringToDropdownKey[this.props.value]:r.other}}])&&f(n.prototype,s),l&&f(n,l),t}(),d=Object(s.e)("importExport")(m)},419:function(e,t,n){"use strict";n.d(t,"a",function(){return b});var r=n(1),o=n(386),i=n(496),a=n(71),u=n(57);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=function(e){function t(e){var n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=l(this,p(t).call(this,e));var r={key:a.b.AutoDetect,text:e.t("Auto-detect")},o=[{key:a.b.CRLF,text:"CRLF"},{key:a.b.CR,text:"CR"},{key:a.b.LF,text:"LF"}];return e.showAutoDetect?n._options=[r].concat(o):n._options=o,n}var n,u,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,r["Component"]),n=t,(u=[{key:"render",value:function(){var e=this,t=this.props.t;return r.createElement(i.a,{label:t("Newline sequence"),responsiveMode:o.ResponsiveMode.large,selectedKey:this.props.value,options:this._options,onChange:function(t,n){return e.props.onChange(n.key)}})}}])&&s(n.prototype,u),c&&s(n,c),t}(),b=Object(u.e)("importExport")(y)},420:function(e,t,n){"use strict";n.d(t,"a",function(){return h});var r=n(1),o=n(501),i=n(507),a=n(473),u=n(85),c=n(57);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,f(t).apply(this,arguments))}var n,c,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,r["Component"]),n=t,(c=[{key:"render",value:function(){return r.createElement("div",{className:u.smallDivider},this.contents())}},{key:"contents",value:function(){return this.props.progress.show?r.createElement(r.Fragment,null,r.createElement(o.a,{variant:"small"},this.stopLink()),r.createElement(i.a,{percentComplete:this.props.progress.percent})):r.createElement(o.a,{variant:"small"}," ")}},{key:"stopLink",value:function(){return this.props.progress.aborting?this.props.t("Stopping"):r.createElement(a.a,{onClick:this.props.onClick},this.props.t("Stop"))}}])&&l(n.prototype,c),s&&l(n,s),t}(),h=Object(c.e)("importExport")(b)},421:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var r=n(85),o=n(501),i=n(473),a=n(1),u=n(400),c=n(53),s=n(57);function l(){var e=Object(s.d)("importExport").t;return a.createElement("div",{className:r.bottomBar},a.createElement(o.a,{variant:"medium"},a.createElement(u.a,{to:c.a.about,className:r.removeUnderline},a.createElement(i.a,null,e("About")))))}},422:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var r=n(117),o=n(505),i=n(1),a=n(85);function u(e){switch(e.parserOutput.type){case r.b.hidden:return null;case r.b.info:return i.createElement(o.a,{className:a.monospace,value:e.parserOutput.output,rows:20,multiline:!0,spellCheck:!1,readOnly:!0});case r.b.error:return i.createElement(o.a,{className:a.monospace+" "+a.redText,value:e.parserOutput.output,rows:20,multiline:!0,spellCheck:!1,readOnly:!0})}}},423:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var r=n(1);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e,t,n){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=c(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var l=function(e){function t(e,n,r,o){var i;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(i=a(this,c(t).call(this,e)))._namespace=n,i._saveKeys=o,i._initialSave=localStorage&&'"true"'===localStorage["StoredComponent-save"],i._save=i._initialSave;var u={};return i._save&&(u=t.loadState(n,o)),i.state=Object.assign({},r,u),i}var n,l,p;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,r["Component"]),n=t,p=[{key:"loadState",value:function(e,t){for(var n={},r=Object.entries(localStorage),o=0;o<r.length;o++){var i=r[o];i[0].substring(0,e.length+1)===e+"-"&&t.includes(i[0].substring(e.length+1))&&(n[i[0].substring(e.length+1)]=JSON.parse(i[1]))}return n}}],(l=[{key:"render",value:function(){return this.props.children}},{key:"setState",value:function(e){u(c(t.prototype),"setState",this).call(this,e),this._save&&"object"===o(e)&&this.saveState(e)}},{key:"initialSaveStatus",value:function(){return this._initialSave}},{key:"setSaveStatus",value:function(e){this._save=e,e?(localStorage.setItem("StoredComponent-save",'"true"'),this.saveState(this.state)):localStorage.clear()}},{key:"saveState",value:function(e){for(var t=Object.entries(e),n=0;n<t.length;n++){var r=t[n];if(this._saveKeys.includes(r[0])){var o=this._namespace+"-"+r[0];localStorage.setItem(o,JSON.stringify(r[1]))}}}}])&&i(n.prototype,l),p&&i(n,p),t}()},427:function(e,t,n){"use strict";var r=n(1),o=n(496),i=[{key:"Big5",text:"Big5"},{key:"EUC-JP",text:"EUC-JP"},{key:"EUC-KR",text:"EUC-KR"},{key:"GBK",text:"GBK"},{key:"IBM866",text:"IBM866 (Cyrillic)"},{key:"ISO-2022-JP",text:"ISO-2022-JP (JIS)"},{key:"ISO-8859-10",text:"ISO-8859-10 (Latin-6)"},{key:"ISO-8859-13",text:"ISO-8859-13 (Latin-7)"},{key:"ISO-8859-14",text:"ISO-8859-14 (Latin-8)"},{key:"ISO-8859-15",text:"ISO-8859-15 (Latin-9)"},{key:"ISO-8859-16",text:"ISO-8859-16 (Latin-10)"},{key:"ISO-8859-2",text:"ISO-8859-2 (Central European)"},{key:"ISO-8859-3",text:"ISO-8859-3 (Latin 3)"},{key:"ISO-8859-4",text:"ISO-8859-4 (Latin-4)"},{key:"ISO-8859-5",text:"ISO-8859-5 (Cryillic)"},{key:"ISO-8859-6",text:"ISO-8859-6 (Arabic)"},{key:"ISO-8859-7",text:"ISO-8859-7 (Greek)"},{key:"ISO-8859-8",text:"ISO-8859-8 (Hebrew)"},{key:"ISO-8859-8-I",text:"ISO-8859-8-I (Hebrew)"},{key:"KOI8-R",text:"KOI8-R"},{key:"KOI8-U",text:"KOI8-U"},{key:"Shift_JIS",text:"Shift_JIS"},{key:"UTF-16BE",text:"UTF-16BE"},{key:"UTF-16LE",text:"UTF-16LE"},{key:"UTF-8",text:"UTF-8"},{key:"gb18030",text:"gb18030"},{key:"macintosh",text:"macintosh"},{key:"replacement",text:"replacement"},{key:"windows-1250",text:"windows-1250 (Central European)"},{key:"windows-1251",text:"windows-1251 (Cyrillic)"},{key:"windows-1252",text:"windows-1252 (Western European)"},{key:"windows-1253",text:"windows-1253 (Greek)"},{key:"windows-1254",text:"windows-1254 (Turkish)"},{key:"windows-1255",text:"windows-1255 (Hebrew)"},{key:"windows-1256",text:"windows-1256 (Arabic)"},{key:"windows-1257",text:"windows-1257 (Baltic)"},{key:"windows-1258",text:"windows-1258 (Vietnamese)"},{key:"windows-874",text:"windows-874 (Thai)"},{key:"x-mac-cyrillic",text:"x-mac-cyrillic"},{key:"x-user-defined",text:"x-user-defined"}],a=n(57);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"a",function(){return b});var y=function(e){function t(e){var n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=l(this,p(t).call(this,e));var r={key:"",text:e.t("Auto-detect")};return e.showAutoDetect?n._dropdownOptions=[r].concat(c(i)):n._dropdownOptions=i,n}var n,a,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,r["Component"]),n=t,(a=[{key:"render",value:function(){var e=this,t=this.props.t;return this.props.hidden?null:r.createElement(r.Fragment,null,r.createElement(o.a,{label:t("Encoding"),selectedKey:this.props.value,options:this._dropdownOptions,onChange:function(t,n){return e.props.onChange(n.key)}}),r.createElement("br",null))}}])&&s(n.prototype,a),u&&s(n,u),t}(),b=Object(a.e)("importExport")(y)},509:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n(387),i=n(501),a=n(499),u=n(424),c=n(494),s=n(508),l=n(71),p=n(85),f=n(505),y=n(496),b=n(386),h=n(57);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var S=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=w(this,O(t).apply(this,arguments))).dropdownOnChange=function(t,n){e.props.onChange({inputType:n.key,file:null,text:""})},e.fileOnChange=function(t){e.props.onChange({inputType:l.a.file,file:t.target.files[0],text:""})},e}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,r["Component"]),n=t,(o=[{key:"render",value:function(){var e,t=this,n=this.props.t,o=[{key:l.a.file,text:n("File")},{key:l.a.text,text:n("Text input")}],i=(d(e={},l.a.file,r.createElement(r.Fragment,null,r.createElement("input",{className:p.fullWidth,type:"file",accept:"text/csv",onChange:this.fileOnChange,id:"SourceInput-FileInput"}),r.createElement("br",null))),d(e,l.a.text,r.createElement(f.a,{className:p.monospace,multiline:!0,rows:10,wrap:"off",onChange:function(e,n){return t.props.onChange({inputType:l.a.text,text:n})},value:this.props.value.text,id:"SourceInput-TextInput"})),e);return r.createElement(r.Fragment,null,r.createElement(y.a,{label:n("Import type"),options:o,responsiveMode:b.ResponsiveMode.large,selectedKey:this.props.value.inputType,onChange:this.dropdownOnChange,id:"SourceInput-Dropdown"}),r.createElement("div",{className:p.smallDivider}),i[this.props.value.inputType])}}])&&v(n.prototype,o),i&&v(n,i),t}(),k=Object(h.e)("importExport")(S),E=n(418),x=n(419),_=n(427),C=n(420),j=n(421),I=n(422),P=n(423);function T(e){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function D(e,t,n,r,o,i,a){try{var u=e[i](a),c=u.value}catch(e){return void n(e)}u.done?t(c):Promise.resolve(c).then(r,o)}function R(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){var i=e.apply(t,n);function a(e){D(i,r,o,a,u,"next",e)}function u(e){D(i,r,o,a,u,"throw",e)}a(void 0)})}}function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function K(e,t){return!t||"object"!==T(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function L(e){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function U(e,t){return(U=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"ImportComponent",function(){return F});var F=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=K(this,L(t).call(this,e,"import",{source:{inputType:l.a.file,file:null,text:""},delimiter:"",newline:l.b.AutoDetect,encoding:""},["delimiter","newline","encoding"]))).buttonOnClick=R(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.props.store.import(n.state);case 2:case"end":return e.stop()}},e)})),n}var n,o,f;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&U(e,t)}(t,P["a"]),n=t,(o=[{key:"render",value:function(){var e=this,t=this.props.t;return r.createElement("div",{className:p.pageMargin},r.createElement(i.a,{variant:"xLarge"},r.createElement("strong",null,t("Import CSV"))),r.createElement(k,{value:this.state.source,onChange:function(t){return e.setState({source:t})}}),r.createElement("br",null),r.createElement(_.a,{value:this.state.encoding,onChange:function(t){return e.setState({encoding:t})},hidden:this.state.source.inputType===l.a.text,showAutoDetect:!0}),r.createElement(E.a,{value:this.state.delimiter,onChange:function(t){return e.setState({delimiter:t})},showAutoDetect:!0,showLengthError:!0}),r.createElement("br",null),r.createElement(x.a,{value:this.state.newline,onChange:function(t){return e.setState({newline:t})},showAutoDetect:!0}),r.createElement("br",null),r.createElement(a.a,{styles:{root:{display:"inline-block"}},content:this.buttonTooltipContent(),delay:u.a.zero},r.createElement(c.a,{disabled:""!==this.buttonTooltipContent(),onClick:this.buttonOnClick,text:t("Import CSV")})),r.createElement("br",null),r.createElement(C.a,{onClick:this.props.store.abort,progress:this.props.store.state.progress}),r.createElement(s.a,{inlineLabel:!0,label:t("Save options"),defaultChecked:this.initialSaveStatus(),onChange:function(t,n){return e.setSaveStatus(n)}}),r.createElement(I.a,{parserOutput:this.props.store.state.parserOutput}),r.createElement(j.a,null))}},{key:"buttonTooltipContent",value:function(){var e=this.props.t;return this.state.source.inputType==l.a.file&&null==this.state.source.file?e("Import source is not selected"):this.state.delimiter.length>1?e("Delimiter is invalid"):this.props.store.state.initialized?"":e("Excel API is not initialized")}}])&&A(n.prototype,o),f&&A(n,f),t}();t.default=Object(h.e)("importExport")(Object(o.a)(F))}}]);
//# sourceMappingURL=import.ca0558aa8b8d629217dc.js.map