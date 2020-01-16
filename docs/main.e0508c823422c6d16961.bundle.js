(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../home/gitpod/.nvm/versions/node/v10.18.0/lib/node_modules/mhy/node_modules/css-loader/dist/cjs.js?!../../home/gitpod/.nvm/versions/node/v10.18.0/lib/node_modules/mhy/node_modules/postcss-loader/src/index.js?!../../home/gitpod/.nvm/versions/node/v10.18.0/lib/node_modules/mhy/node_modules/sass-loader/dist/cjs.js?!./src/story.css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/gitpod/.nvm/versions/node/v10.18.0/lib/node_modules/mhy/node_modules/css-loader/dist/cjs.js??ref--7-1!/home/gitpod/.nvm/versions/node/v10.18.0/lib/node_modules/mhy/node_modules/postcss-loader/src??ref--7-2!/home/gitpod/.nvm/versions/node/v10.18.0/lib/node_modules/mhy/node_modules/sass-loader/dist/cjs.js??ref--7-3!./src/story.css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../home/gitpod/.nvm/versions/node/v10.18.0/lib/node_modules/mhy/node_modules/css-loader/dist/runtime/api.js */ "../../home/gitpod/.nvm/versions/node/v10.18.0/lib/node_modules/mhy/node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "body {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n", "",{"version":3,"sources":["/workspace/use-breakpoint/src/story.css"],"names":[],"mappings":"AAAA;EACC,8BAAsB;UAAtB,sBAAsB;EACtB,SAAS;EACT,oBAAa;EAAb,oBAAa;EAAb,aAAa;EACb,yBAAmB;MAAnB,sBAAmB;UAAnB,mBAAmB;EACnB,wBAAuB;MAAvB,qBAAuB;UAAvB,uBAAuB,EAAA","file":"story.css","sourcesContent":["body {\n\tbox-sizing: border-box;\n\tmargin: 0;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src sync recursive \\.?(story|stories|book)\\.[jt]sx?$":
/*!****************************************************!*\
  !*** ./src sync \.?(story|stories|book)\.[jt]sx?$ ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./story.tsx": "./src/story.tsx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src sync recursive \\.?(story|stories|book)\\.[jt]sx?$";

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: UP, DOWN, LANDSCAPE, PORTRAIT, options, setup, breakpoints, default, useResize, mediaQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UP", function() { return UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOWN", function() { return DOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANDSCAPE", function() { return LANDSCAPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PORTRAIT", function() { return PORTRAIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setup", function() { return setup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "breakpoints", function() { return breakpoints; });
/* harmony import */ var _useBreakpoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useBreakpoint */ "./src/useBreakpoint.ts");
/* harmony import */ var _useResize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useResize */ "./src/useResize.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useResize", function() { return _useResize__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _mediaQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mediaQuery */ "./src/mediaQuery.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mediaQuery", function() { return _mediaQuery__WEBPACK_IMPORTED_MODULE_2__["default"]; });

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};




const UP = '+';
const DOWN = '-';
const LANDSCAPE = '-';
const PORTRAIT = '|';
let options;
const setup = function setup(opts) {
  Object.entries(opts.breakpoints).forEach((_ref) => {
    let [name, [from, to]] = _ref;
    return [['', [from, to]], [UP, [from, 10000]], [DOWN, [0, to]]].forEach((_ref2) => {
      let [symbol, fromTo] = _ref2;
      return ['', LANDSCAPE, PORTRAIT].forEach(orientation => {
        // eslint-disable-next-line
        opts.breakpoints[`${orientation}${name}${symbol}`] = fromTo;
      });
    });
  });
  options = opts;
};
const breakpoints = {
  micro: [0, 375],
  mobile: [376, 639],
  tablet: [640, 1023],
  small: [1024, 1439],
  medium: [1440, 1919],
  large: [1920, 10000]
};
setup({
  breakpoints
});
const _default = _useBreakpoint__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ __webpack_exports__["default"] = (_default);

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(UP, "UP", "/workspace/use-breakpoint/src/index.ts");
  reactHotLoader.register(DOWN, "DOWN", "/workspace/use-breakpoint/src/index.ts");
  reactHotLoader.register(LANDSCAPE, "LANDSCAPE", "/workspace/use-breakpoint/src/index.ts");
  reactHotLoader.register(PORTRAIT, "PORTRAIT", "/workspace/use-breakpoint/src/index.ts");
  reactHotLoader.register(options, "options", "/workspace/use-breakpoint/src/index.ts");
  reactHotLoader.register(setup, "setup", "/workspace/use-breakpoint/src/index.ts");
  reactHotLoader.register(breakpoints, "breakpoints", "/workspace/use-breakpoint/src/index.ts");
  reactHotLoader.register(_default, "default", "/workspace/use-breakpoint/src/index.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../home/gitpod/.nvm/versions/node/v10.18.0/lib/node_modules/mhy/node_modules/webpack/buildin/harmony-module.js */ "../../home/gitpod/.nvm/versions/node/v10.18.0/lib/node_modules/mhy/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/mediaQuery.ts":
/*!***************************!*\
  !*** ./src/mediaQuery.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.ts");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};



const mediaQuery = input => {
  let generated = '';

  if (typeof input[0] === 'string') {
    input = [input];
  }

  for (const value of input) {
    const bp = ___WEBPACK_IMPORTED_MODULE_0__["options"].breakpoints[value[0]];
    if (!bp) continue;
    const key = value[0];
    const first = key[0];
    const last = key[key.length - 1];
    generated += `@media screen `;

    if (last === ___WEBPACK_IMPORTED_MODULE_0__["UP"]) {
      generated += `and (min-width: ${bp[0]}) `;
    } else if (last === ___WEBPACK_IMPORTED_MODULE_0__["DOWN"]) {
      generated += `and (max-width: ${bp[1]}) `;
    } else {
      generated += `and (min-width: ${bp[0]}) and (max-width: ${bp[1]}) `;
    }

    if (first === ___WEBPACK_IMPORTED_MODULE_0__["PORTRAIT"]) {
      generated += `and (orientation: portrait) `;
    } else if (first === ___WEBPACK_IMPORTED_MODULE_0__["LANDSCAPE"]) {
      generated += `and (orientation: landscape) `;
    }

    return generated += `{ ${value[1]} }`;
  }
};

const _default = mediaQuery;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mediaQuery, "mediaQuery", "/workspace/use-breakpoint/src/mediaQuery.ts");
  reactHotLoader.register(_default, "default", "/workspace/use-breakpoint/src/mediaQuery.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../home/gitpod/.nvm/versions/node/v10.18.0/lib/node_modules/mhy/node_modules/webpack/buildin/harmony-module.js */ "../../home/gitpod/.nvm/versions/node/v10.18.0/lib/node_modules/mhy/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/readme.raw.md":
/*!***************************!*\
  !*** ./src/readme.raw.md ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("# Intro\n\nReact `useBreakpoint` hook to have different values for a variable\nbased on a breakpoints.\n\n# Setup\n\nBy default you don't need to do anything. The following default values\nare being used.\n\n```js\nconst breakpoints = {\n    micro: [0, 375],\n    mobile: [376, 639],\n    tablet: [640, 1023],\n    small: [1024, 1439],\n    medium: [1440, 1919],\n    large: [1920, 10000]\n}\n```\n\n## Override default settings\n\n```js\nimport { setup, breakpoints } from '@w11r/use-breakpoint'\n\nsetup({\n    breakpoints: {\n        // Extend default values\n        ...breakpoints,\n        alienDevice: [342, 43534] // from, to\n    }\n})\n```\n\n# Usage\n\n```js\nuseBreakpoint(defaultValue, breakpointValues)\n\n// breakpointValues: array of breakpoint based values\n[\n  ['mobile', 300],\n  ['tablet', 400]\n]\n\n// In case you have a single breakpoint value, `['mobile', 300]`\nis enough instead of `[['mobile', 300]]`\n```\n\nComponent example\n\n```jsx\nimport useBreakpoint from '@w11r/use-breakpoint'\n\nconst MyCmp = () => {\n    const columns = useBreakpoint([1,2], ['mobile', [2,1]])\n    \n    return <Grid cols={columns} />\n}\n\n// Or using inline\nconst MyCmp = () => {\n    return <Grid cols={useBreakpoint([1,2], ['mobile', [2,1]])} />\n}\n```\n\n> _Rules-of-Hooks_ are still true in this case as well. Make sure\n> your component will __ALWAYS__ run it without any condition!\n\n## Modifiers\n\nAll breakpoint names coming with modifiers included.\n\n### Orientation prefix\n\n- `` (none): all\n- `-`: Landscape\n- `|`: Portrait\n\n### Range suffix\n\nYou can also control your value to behave as `and up` and `and down`.\n\n- `` (none): all\n- `+`: `and up`\n- `-`: `and down`\n\n### Examples\n\n- `['|mobile', 300]`: on mobile, on portrait\n- `['|mobile+', 300]`: on mobile and up, on portrait\n- `['mobile+', 300]`: on mobile and up, both portrait and landscape\n- `['mobile', 300]`: on mobile, both portrait and landscape\n- `['tablet-', 300]`: on tablet and below, both portrait and landscape\n- `['mobile-', 300]`: on mobile and down, both portrait and landscape\n\n# FAQ\n\n## Which rule is being prioritized\n\nThe hook uses _eager_ evaluation, so the first truthy breakpoint value\ngets returned.\n");

/***/ }),

/***/ "./src/story.css":
/*!***********************!*\
  !*** ./src/story.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../home/gitpod/.nvm/versions/node/v10.18.0/lib/node_modules/mhy/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../home/gitpod/.nvm/versions/node/v10.18.0/lib/node_modules/mhy/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../home/gitpod/.nvm/versions/node/v10.18.0/lib/node_modules/mhy/node_modules/css-loader/dist/cjs.js??ref--7-1!../../../home/gitpod/.nvm/versions/node/v10.18.0/lib/node_modules/mhy/node_modules/postcss-loader/src??ref--7-2!../../../home/gitpod/.nvm/versions/node/v10.18.0/lib/node_modules/mhy/node_modules/sass-loader/dist/cjs.js??ref--7-3!./story.css */ "../../home/gitpod/.nvm/versions/node/v10.18.0/lib/node_modules/mhy/node_modules/css-loader/dist/cjs.js?!../../home/gitpod/.nvm/versions/node/v10.18.0/lib/node_modules/mhy/node_modules/postcss-loader/src/index.js?!../../home/gitpod/.nvm/versions/node/v10.18.0/lib/node_modules/mhy/node_modules/sass-loader/dist/cjs.js?!./src/story.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(module.i, content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/story.tsx":
/*!***********************!*\
  !*** ./src/story.tsx ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../home/gitpod/.nvm/versions/node/v10.18.0/lib/node_modules/mhy/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @storybook/react */ "../../home/gitpod/.nvm/versions/node/v10.18.0/lib/node_modules/mhy/node_modules/@storybook/react/dist/client/index.js");
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_storybook_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useBreakpoint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useBreakpoint */ "./src/useBreakpoint.ts");
/* harmony import */ var _readme_raw_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./readme.raw.md */ "./src/readme.raw.md");
/* harmony import */ var _story_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./story.css */ "./src/story.css");
/* harmony import */ var _story_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_story_css__WEBPACK_IMPORTED_MODULE_4__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};






const opts = {
  notes: {
    markdown: _readme_raw_md__WEBPACK_IMPORTED_MODULE_3__["default"]
  }
};
Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__["storiesOf"])('Hooks|useBreakpoint', module).add('Default', __signature__(() => {
  const value = Object(_useBreakpoint__WEBPACK_IMPORTED_MODULE_2__["default"])('none', [['micro', 'is micro'], ['mobile', 'is mobile'], ['tablet', 'is tablet'], ['small', 'is small'], ['medium', 'is medium'], ['large', 'is large']]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Example code", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pre", null, `const value = useBreakpoint('none', [
    ['micro', 'is micro'],
    ['mobile', 'is mobile'],
    ['tablet', 'is tablet'],
    ['small', 'is small'],
    ['medium', 'is medium'],
    ['large', 'is large']
])`), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "`", value, "` is the current value. Resize to change."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "For more info please see ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Notes"), " tab."));
}, "useBreakpoint{value}", () => [_useBreakpoint__WEBPACK_IMPORTED_MODULE_2__["default"]]), opts);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(opts, "opts", "/workspace/use-breakpoint/src/story.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../home/gitpod/.nvm/versions/node/v10.18.0/lib/node_modules/mhy/node_modules/webpack/buildin/harmony-module.js */ "../../home/gitpod/.nvm/versions/node/v10.18.0/lib/node_modules/mhy/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/useBreakpoint.ts":
/*!******************************!*\
  !*** ./src/useBreakpoint.ts ***!
  \******************************/
/*! exports provided: calculateValue, useBreakpoint, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateValue", function() { return calculateValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useBreakpoint", function() { return useBreakpoint; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../home/gitpod/.nvm/versions/node/v10.18.0/lib/node_modules/mhy/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./src/index.ts");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};




const getIsLandscape = function getIsLandscape() {
  const s = window.screen; // @ts-ignore

  const orientation = (s.mozOrientation || s.orientation || {
    type: 'portrait'
  }).type || s.msOrientation;
  return orientation && orientation.includes('landscape');
};

// We will save the calculated value until innerWidth changes
let cachedProplessValue = {};

const calculateProplessValue = function calculateProplessValue(iw) {
  if (cachedProplessValue[iw]) return cachedProplessValue[iw];
  const isLandscape = getIsLandscape();
  const proplessValue = {
    isLandscape,
    isPortrait: !isLandscape,
    isHDPI: window.devicePixelRatio > 1
  }; // @ts-ignore

  for (const [[firstLetter, secondLetter, ...restLetter], [from, to]] of Object.entries(___WEBPACK_IMPORTED_MODULE_1__["options"].breakpoints)) {
    const isOrientedLandscape = ___WEBPACK_IMPORTED_MODULE_1__["LANDSCAPE"] === firstLetter;
    const isOrientedPortrait = ___WEBPACK_IMPORTED_MODULE_1__["PORTRAIT"] === firstLetter;
    const isOriented = isOrientedLandscape || isOrientedPortrait;
    const key = isOriented ? `${firstLetter}${secondLetter.toUpperCase()}${restLetter.join('')}` : `${firstLetter.toUpperCase()}${secondLetter}${restLetter.join('')}`;
    proplessValue[`is${key}`] = iw > from && iw <= to && (!isOriented || isOrientedLandscape && isLandscape || isOrientedPortrait && !isLandscape);
  }

  cachedProplessValue = {
    [iw]: proplessValue
  };
  return proplessValue;
};
/* eslint-disable no-continue */


const calculateValue = function calculateValue(defaultValue) {
  let breakpointValues = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  let iw = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : window.innerWidth;

  if (defaultValue === undefined && !breakpointValues.length) {
    return calculateProplessValue(iw);
  }

  const isLandscape = getIsLandscape();

  if (!breakpointValues || !breakpointValues.length) {
    return defaultValue;
  }

  if (typeof breakpointValues[0] === 'string') {
    // @ts-ignore
    breakpointValues = [breakpointValues]; // eslint-disable-line
  }

  for (const [key, value] of breakpointValues) {
    if (!___WEBPACK_IMPORTED_MODULE_1__["options"].breakpoints[key]) continue;
    const bp = ___WEBPACK_IMPORTED_MODULE_1__["options"].breakpoints[key];
    if (isLandscape && key[0] === ___WEBPACK_IMPORTED_MODULE_1__["PORTRAIT"]) continue;
    if (!isLandscape && key[0] === ___WEBPACK_IMPORTED_MODULE_1__["LANDSCAPE"]) continue;
    if (iw > bp[0] && iw <= bp[1]) return value;
  }

  return defaultValue;
};
let cachedIw = window.innerWidth;
function useBreakpoint(defaultValue, breakpointValues) {
  const [innerWidth, setInnerWidth] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(cachedIw);
  Object(___WEBPACK_IMPORTED_MODULE_1__["useResize"])(() => {
    cachedIw = window.innerWidth;
    setInnerWidth(cachedIw);
  });
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => calculateValue(defaultValue, breakpointValues, innerWidth), [innerWidth, defaultValue]);
}

__signature__(useBreakpoint, "useState{[innerWidth, setInnerWidth](cachedIw)}\nuseResize{}\nuseMemo{}", () => [___WEBPACK_IMPORTED_MODULE_1__["useResize"]]);

const _default = useBreakpoint;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(getIsLandscape, "getIsLandscape", "/workspace/use-breakpoint/src/useBreakpoint.ts");
  reactHotLoader.register(cachedProplessValue, "cachedProplessValue", "/workspace/use-breakpoint/src/useBreakpoint.ts");
  reactHotLoader.register(calculateProplessValue, "calculateProplessValue", "/workspace/use-breakpoint/src/useBreakpoint.ts");
  reactHotLoader.register(calculateValue, "calculateValue", "/workspace/use-breakpoint/src/useBreakpoint.ts");
  reactHotLoader.register(cachedIw, "cachedIw", "/workspace/use-breakpoint/src/useBreakpoint.ts");
  reactHotLoader.register(useBreakpoint, "useBreakpoint", "/workspace/use-breakpoint/src/useBreakpoint.ts");
  reactHotLoader.register(_default, "default", "/workspace/use-breakpoint/src/useBreakpoint.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../home/gitpod/.nvm/versions/node/v10.18.0/lib/node_modules/mhy/node_modules/webpack/buildin/harmony-module.js */ "../../home/gitpod/.nvm/versions/node/v10.18.0/lib/node_modules/mhy/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/useResize.ts":
/*!**************************!*\
  !*** ./src/useResize.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useResize; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../home/gitpod/.nvm/versions/node/v10.18.0/lib/node_modules/mhy/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};


function useResize(callback) {
  let throttle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    let timeout;

    const handleResize = () => {
      clearTimeout(timeout);
      timeout = setTimeout(callback, throttle);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
}

__signature__(useResize, "useEffect{}");

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(useResize, "useResize", "/workspace/use-breakpoint/src/useResize.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../home/gitpod/.nvm/versions/node/v10.18.0/lib/node_modules/mhy/node_modules/webpack/buildin/harmony-module.js */ "../../home/gitpod/.nvm/versions/node/v10.18.0/lib/node_modules/mhy/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 0:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi /home/gitpod/.nvm/versions/node/v10.18.0/lib/node_modules/mhy/node_modules/@storybook/core/dist/server/common/polyfills.js /home/gitpod/.nvm/versions/node/v10.18.0/lib/node_modules/mhy/node_modules/@storybook/core/dist/server/preview/globals.js /home/gitpod/.nvm/versions/node/v10.18.0/lib/node_modules/mhy/dist/configs/storybook/.storybook/config.js ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/gitpod/.nvm/versions/node/v10.18.0/lib/node_modules/mhy/node_modules/@storybook/core/dist/server/common/polyfills.js */"../../home/gitpod/.nvm/versions/node/v10.18.0/lib/node_modules/mhy/node_modules/@storybook/core/dist/server/common/polyfills.js");
__webpack_require__(/*! /home/gitpod/.nvm/versions/node/v10.18.0/lib/node_modules/mhy/node_modules/@storybook/core/dist/server/preview/globals.js */"../../home/gitpod/.nvm/versions/node/v10.18.0/lib/node_modules/mhy/node_modules/@storybook/core/dist/server/preview/globals.js");
module.exports = __webpack_require__(/*! /home/gitpod/.nvm/versions/node/v10.18.0/lib/node_modules/mhy/dist/configs/storybook/.storybook/config.js */"../../home/gitpod/.nvm/versions/node/v10.18.0/lib/node_modules/mhy/dist/configs/storybook/.storybook/config.js");


/***/ }),

/***/ 1:
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime~main","vendors~main"]]]);
//# sourceMappingURL=main.e0508c823422c6d16961.bundle.js.map