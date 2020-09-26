/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/widget.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/widget.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Montserrat:400&display=swap);"]);
// Module
exports.push([module.i, ".DEV-WIDGET-OPEN {\n  height: 15vw;\n  width: 15vw; }\n  .DEV-WIDGET-OPEN .DEV-WIDGET-PLAYOUT-CONTROLS {\n    flex-wrap: wrap; }\n    .DEV-WIDGET-OPEN .DEV-WIDGET-PLAYOUT-CONTROLS button {\n      flex-basis: 30%;\n      font-size: 1.25em;\n      margin: .5vh 0; }\n    .DEV-WIDGET-OPEN .DEV-WIDGET-PLAYOUT-CONTROLS button.DEV-WIDGET-UPDATE, .DEV-WIDGET-OPEN .DEV-WIDGET-PLAYOUT-CONTROLS button.DEV-WIDGET-DATA {\n      flex-basis: 48%; }\n  .DEV-WIDGET-OPEN button.DEV-WIDGET-HIDE::after {\n    content: 'Hide'; }\n  .DEV-WIDGET-OPEN button.DEV-WIDGET-SHRINK::after {\n    content: 'Shrink'; }\n  .DEV-WIDGET-OPEN button.DEV-WIDGET-INVIS::after {\n    content: 'Invis'; }\n  .DEV-WIDGET-OPEN button.DEV-WIDGET-PLAY::after {\n    content: 'Play'; }\n  .DEV-WIDGET-OPEN button.DEV-WIDGET-NEXT::after {\n    content: 'Next'; }\n  .DEV-WIDGET-OPEN button.DEV-WIDGET-STOP::after {\n    content: 'Stop'; }\n  .DEV-WIDGET-OPEN button.DEV-WIDGET-UPDATE::after {\n    content: 'Update'; }\n  .DEV-WIDGET-OPEN button.DEV-WIDGET-DATA::after {\n    content: 'Data'; }\n\n.DEV-WIDGET-SHRUNKEN .DEV-WIDGET-SECTION {\n  flex-direction: column; }\n  .DEV-WIDGET-SHRUNKEN .DEV-WIDGET-SECTION button {\n    margin: .5vh 0; }\n\n.DEV-WIDGET-SHRUNKEN > div:not(.DEV-WIDGET-DISPLAY):not(.DEV-WIDGET-PLAYOUT-CONTROLS):not(.DEV-WIDGET-POPUP) {\n  display: none; }\n\n.DEV-WIDGET-SHRUNKEN button.DEV-WIDGET-HIDE::after {\n  content: 'H'; }\n\n.DEV-WIDGET-SHRUNKEN button.DEV-WIDGET-SHRINK::after {\n  content: 'S'; }\n\n.DEV-WIDGET-SHRUNKEN button.DEV-WIDGET-INVIS::after {\n  content: 'I'; }\n\n.DEV-WIDGET-SHRUNKEN button.DEV-WIDGET-PLAY::after {\n  content: 'P'; }\n\n.DEV-WIDGET-SHRUNKEN button.DEV-WIDGET-NEXT::after {\n  content: 'N'; }\n\n.DEV-WIDGET-SHRUNKEN button.DEV-WIDGET-STOP::after {\n  content: 'S'; }\n\n.DEV-WIDGET-SHRUNKEN button.DEV-WIDGET-UPDATE::after {\n  content: 'U'; }\n\n.DEV-WIDGET-SHRUNKEN button.DEV-WIDGET-DATA::after {\n  content: 'D'; }\n\n.DEV-WIDGET-HIDDEN button:not(.DEV-WIDGET-HIDE), .DEV-WIDGET-HIDDEN div:not(.DEV-WIDGET-DISPLAY) {\n  display: none; }\n\n.DEV-WIDGET-HIDDEN button.DEV-WIDGET-HIDE::after {\n  content: 'H'; }\n\n.DEV-WIDGET {\n  background-color: #282828;\n  border: .2vw solid transparent;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  padding: .5vw;\n  position: absolute;\n  z-index: 5; }\n  .DEV-WIDGET * {\n    font-weight: 400;\n    font-size: 1vw;\n    font-family: \"Montserrat\", sans-serif; }\n  .DEV-WIDGET button {\n    background-color: transparent;\n    border: none;\n    border-radius: 5px;\n    color: white; }\n  .DEV-WIDGET input {\n    background-color: white;\n    border: .1vw solid transparent;\n    border-radius: 5px;\n    margin: .25em 0;\n    padding: .15em; }\n  .DEV-WIDGET svg {\n    width: 50%; }\n\n.DEV-WIDGET .DEV-WIDGET-POPUP {\n  display: none;\n  position: absolute;\n  height: 100vh;\n  width: 100vw;\n  top: 0;\n  left: 0; }\n  .DEV-WIDGET .DEV-WIDGET-POPUP > div {\n    display: inherit;\n    flex-direction: inherit; }\n  .DEV-WIDGET .DEV-WIDGET-POPUP h2, .DEV-WIDGET .DEV-WIDGET-POPUP label, .DEV-WIDGET .DEV-WIDGET-POPUP p {\n    color: white;\n    margin: 0; }\n  .DEV-WIDGET .DEV-WIDGET-POPUP h2 {\n    font-size: 1.5em;\n    grid-column: span 2;\n    margin: .25em 0 .5em 0; }\n    .DEV-WIDGET .DEV-WIDGET-POPUP h2 button {\n      font-size: .75em;\n      float: right; }\n  .DEV-WIDGET .DEV-WIDGET-POPUP svg {\n    width: 2vw; }\n  .DEV-WIDGET .DEV-WIDGET-POPUP button {\n    font-size: 1.5em; }\n  .DEV-WIDGET .DEV-WIDGET-POPUP .DEV-WIDGET-CLOSE-BUTTON {\n    margin-left: auto;\n    width: min-content; }\n  .DEV-WIDGET .DEV-WIDGET-POPUP .DEV-WIDGET-POPUP-BACKGROUND {\n    background-color: #282828;\n    border-radius: 10px;\n    display: inherit;\n    flex-direction: inherit;\n    min-width: 25vw;\n    padding: .5vh .5vw; }\n    .DEV-WIDGET .DEV-WIDGET-POPUP .DEV-WIDGET-POPUP-BACKGROUND .DEV-WIDGET-TEMPLATE-DATA-CONTROLLER {\n      flex: 1;\n      display: inherit;\n      justify-content: space-around;\n      margin: 1vh 0; }\n\n.DEV-WIDGET .DEV-WIDGET-POPUP-OPEN {\n  align-items: center;\n  display: inherit;\n  flex-direction: column;\n  justify-content: center; }\n\n.DEV-WIDGET .DEV-WIDGET-TEMPLATE-DATA > div {\n  margin: 1vh 0; }\n\n.DEV-WIDGET .DEV-WIDGET-TEMPLATE-DATA .DEV-WIDGET-POPUP-BACKGROUND {\n  display: grid; }\n  .DEV-WIDGET .DEV-WIDGET-TEMPLATE-DATA .DEV-WIDGET-POPUP-BACKGROUND > div:last-of-type {\n    grid-column: span 2;\n    height: 40vh;\n    overflow: auto;\n    padding: 0 .5em;\n    position: relative; }\n  .DEV-WIDGET .DEV-WIDGET-TEMPLATE-DATA .DEV-WIDGET-POPUP-BACKGROUND > button {\n    margin: 1vh 0; }\n  .DEV-WIDGET .DEV-WIDGET-TEMPLATE-DATA .DEV-WIDGET-POPUP-BACKGROUND > .DEV-WIDGET-SELECT {\n    grid-column: span 2;\n    margin-bottom: 1em; }\n\n.DEV-WIDGET .DEV-WIDGET-TEMPLATE-DATA > .DEV-WIDGET-POPUP-BACKGROUND {\n  grid-auto-flow: column; }\n\n.DEV-WIDGET .DEV-WIDGET-TEMPLATE-DATA .DEV-WIDGET-TEMPLATE-DATA-CON {\n  border: 1.5px solid #1177B7;\n  display: inherit;\n  flex-direction: inherit;\n  margin: 0 auto; }\n  .DEV-WIDGET .DEV-WIDGET-TEMPLATE-DATA .DEV-WIDGET-TEMPLATE-DATA-CON .DEV-WIDGET-TEMPLATE-DATA-CON {\n    width: 95%;\n    margin: .5vh auto; }\n\n.DEV-WIDGET .DEV-WIDGET-TEMPLATE-DATA .DEV-WIDGET-TEMPLATE-DATA-CON-ASSOCIATED {\n  border: 1.5px solid #EB261F; }\n  .DEV-WIDGET .DEV-WIDGET-TEMPLATE-DATA .DEV-WIDGET-TEMPLATE-DATA-CON-ASSOCIATED .DEV-WIDGET-TEMPLATE-DATA-CON {\n    border: 1.5px solid #EB261F; }\n\n.DEV-WIDGET .DEV-WIDGET-TEMPLATE-DATA .DEV-WIDGET-TEMPLATE-DATA-ITEM {\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  justify-content: unset;\n  padding: .25em .5em; }\n  .DEV-WIDGET .DEV-WIDGET-TEMPLATE-DATA .DEV-WIDGET-TEMPLATE-DATA-ITEM > *:not(button) {\n    margin: 0 .5em; }\n  .DEV-WIDGET .DEV-WIDGET-TEMPLATE-DATA .DEV-WIDGET-TEMPLATE-DATA-ITEM input {\n    width: 100%; }\n  .DEV-WIDGET .DEV-WIDGET-TEMPLATE-DATA .DEV-WIDGET-TEMPLATE-DATA-ITEM button {\n    display: flex; }\n  .DEV-WIDGET .DEV-WIDGET-TEMPLATE-DATA .DEV-WIDGET-TEMPLATE-DATA-ITEM button[style] {\n    margin-left: auto; }\n  .DEV-WIDGET .DEV-WIDGET-TEMPLATE-DATA .DEV-WIDGET-TEMPLATE-DATA-ITEM .DEV-WIDGET-CHECKBOX {\n    flex: 1;\n    min-width: 3vw; }\n  .DEV-WIDGET .DEV-WIDGET-TEMPLATE-DATA .DEV-WIDGET-TEMPLATE-DATA-ITEM svg {\n    width: 1.5vw; }\n\n.DEV-WIDGET .DEV-WIDGET-USER-SETTINGS button:not(.DEV-WIDGET-CLOSE-BUTTON) {\n  margin: 1vh 0; }\n\n.DEV-WIDGET .DEV-WIDGET-USER-SETTINGS input {\n  margin: 0 auto;\n  text-align: center;\n  width: 3vw; }\n\n.DEV-WIDGET .DEV-WIDGET-USER-SETTINGS .DEV-WIDGET-POPUP-FORM {\n  border-bottom: 2px solid white;\n  display: grid;\n  grid-template-columns: 3fr 1fr;\n  grid-row-gap: .25em;\n  padding-bottom: 1em; }\n\n.DEV-WIDGET .DEV-WIDGET-HELP .DEV-WIDGET-POPUP-BACKGROUND {\n  display: grid;\n  grid-template-columns: min-content 1fr;\n  grid-row-gap: .5em;\n  max-width: 40vw;\n  padding: .5em; }\n\n.DEV-WIDGET .DEV-WIDGET-HELP label {\n  white-space: nowrap;\n  margin-right: 1em; }\n\n.DEV-WIDGET .DEV-WIDGET-HELP label:not(:last-of-type) {\n  margin-bottom: 2.5em; }\n\n.DEV-WIDGET .DEV-WIDGET-HELP p {\n  grid-column: 2; }\n\n.DEV-WIDGET .DEV-WIDGET-SECTION {\n  display: inherit;\n  justify-content: space-between; }\n\n.DEV-WIDGET .DEV-WIDGET-CONTROLS {\n  flex-wrap: wrap; }\n  .DEV-WIDGET .DEV-WIDGET-CONTROLS button {\n    margin: 0 auto;\n    text-align: center; }\n  .DEV-WIDGET .DEV-WIDGET-CONTROLS input {\n    flex-basis: 100%;\n    width: 100%; }\n  .DEV-WIDGET .DEV-WIDGET-CONTROLS input:first-of-type, .DEV-WIDGET .DEV-WIDGET-CONTROLS input:last-of-type {\n    flex-basis: 58%; }\n\n.DEV-WIDGET .DEV-WIDGET-PLAY {\n  background-color: #29AF1D; }\n\n.DEV-WIDGET .DEV-WIDGET-NEXT {\n  background-color: #F7B92B; }\n\n.DEV-WIDGET .DEV-WIDGET-STOP {\n  background-color: #EB261F; }\n\n.DEV-WIDGET .DEV-WIDGET-UPDATE {\n  background-color: #1177B7; }\n\n.DEV-WIDGET .DEV-WIDGET-DATA {\n  background-color: white;\n  color: black; }\n\n.DEV-WIDGET .DEV-WIDGET-SETTINGS {\n  margin-top: auto; }\n\n.DEV-WIDGET .DEV-WIDGET-LOGGER {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  opacity: 0;\n  z-index: -10;\n  transition-property: bottom, opacity;\n  transition-duration: 1s, 1s;\n  text-align: center;\n  width: 100%; }\n  .DEV-WIDGET .DEV-WIDGET-LOGGER p {\n    margin: 0;\n    word-break: break-all; }\n\n.DEV-WIDGET .DEV-WIDGET-SLIDE-DOWN {\n  bottom: -3em;\n  opacity: 1; }\n\n.DEV-WIDGET .DEV-WIDGET-LABEL {\n  user-select: none; }\n\n.DEV-WIDGET .DEV-WIDGET-SELECT .DEV-WIDGET-SELECTED {\n  border: .1vw solid white;\n  border-radius: .3vw;\n  display: flex;\n  padding-left: 1em; }\n\n.DEV-WIDGET .DEV-WIDGET-SELECT label {\n  user-select: none;\n  margin: 0 1em 0 0; }\n\n.DEV-WIDGET .DEV-WIDGET-SELECT ul {\n  background-color: #282828;\n  border: .1vw solid black;\n  display: none;\n  position: absolute;\n  margin: -.15rem 0 0 0;\n  padding: .25em .5em;\n  width: auto;\n  z-index: -1; }\n  .DEV-WIDGET .DEV-WIDGET-SELECT ul li {\n    color: white;\n    list-style: none;\n    padding: 10px 5px;\n    user-select: none; }\n\n.DEV-WIDGET .DEV-WIDGET-SELECT svg {\n  height: 1.5vw;\n  width: 1.5vw;\n  margin-left: auto; }\n  .DEV-WIDGET .DEV-WIDGET-SELECT svg rect {\n    fill: white; }\n  .DEV-WIDGET .DEV-WIDGET-SELECT svg path {\n    fill: #282828; }\n\n.DEV-WIDGET .DEV-WIDGET-SELECT-OPEN ul {\n  display: block;\n  z-index: 10; }\n\n.DEV-WIDGET .DEV-WIDGET-SELECT-OPEN svg {\n  transform: rotate(180deg); }\n\n.DEV-WIDGET .DEV-WIDGET-CHECKBOX {\n  border: .15vw solid white;\n  color: white;\n  font-size: 1.25em;\n  margin: 0 auto;\n  height: 1.5vw;\n  width: 1.5vw; }\n\n.DEV-WIDGET .DEV-WIDGET-CHECKED::after {\n  display: block;\n  content: \"\\2713\";\n  margin: -.25vw auto 0 auto;\n  text-align: center; }\n\n.DEV-WIDGET .DEV-WIDGET-BUTTON-INACTIVE {\n  color: #B5B5B5; }\n\n.DEV-WIDGET .DEV-WIDGET-DANGER-BUTTON {\n  background-color: #EB261F; }\n\n.DEV-WIDGET .DEV-WIDGET-GITHUB-ICON, .DEV-WIDGET .DEV-WIDGET-SETTINGS-ICON {\n  fill: white; }\n\n.DEV-WIDGET .DEV-WIDGET-HELP-ICON circle {\n  fill: none;\n  stroke: white;\n  stroke-width: .3vw; }\n\n.DEV-WIDGET .DEV-WIDGET-HELP-ICON path {\n  fill: white; }\n\n.DEV-WIDGET .DEV-WIDGET-PLUS-ICON, .DEV-WIDGET .DEV-WIDGET-MINUS-ICON, .DEV-WIDGET .DEV-WIDGET-CLOSE-ICON {\n  stroke: white; }\n  .DEV-WIDGET .DEV-WIDGET-PLUS-ICON circle, .DEV-WIDGET .DEV-WIDGET-MINUS-ICON circle, .DEV-WIDGET .DEV-WIDGET-CLOSE-ICON circle {\n    fill: none;\n    stroke-width: .3vw; }\n  .DEV-WIDGET .DEV-WIDGET-PLUS-ICON line, .DEV-WIDGET .DEV-WIDGET-MINUS-ICON line, .DEV-WIDGET .DEV-WIDGET-CLOSE-ICON line {\n    stroke-width: .2vw; }\n\n.DEV-WIDGET .DEV-WIDGET-CLOSE-ICON {\n  transform: rotate(45deg); }\n\n.DEV-WIDGET:not(.DEV-WIDGET-OPEN) {\n  border-radius: 5px;\n  padding: .5vw;\n  height: min-content;\n  width: min-content; }\n\n.DEV-WIDGET-INVIS {\n  background-color: transparent;\n  border: 0.2vw solid #282828; }\n  .DEV-WIDGET-INVIS input {\n    border: .1vw solid black; }\n  .DEV-WIDGET-INVIS button, .DEV-WIDGET-INVIS .DEV-WIDGET-PLAYOUT-CONTROLS button {\n    background-color: transparent; }\n\n.DEV-WIDGET-TITLE-SAFE {\n  border: 2px solid black;\n  position: absolute;\n  top: 5vh;\n  right: 5vw;\n  height: 90vh;\n  width: 90vw; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/components/Controls.ts":
/*!************************************!*\
  !*** ./src/components/Controls.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Element_1 = __webpack_require__(/*! ./ui/Element */ "./src/components/ui/Element.ts");
const Button_1 = __webpack_require__(/*! ./form/Button */ "./src/components/form/Button.ts");
const Input_1 = __webpack_require__(/*! ./form/Input */ "./src/components/form/Input.ts");
const ColorFunctions_1 = __webpack_require__(/*! ../helpers/ColorFunctions */ "./src/helpers/ColorFunctions.ts");
// The position, background color, and cosutom command controls for the widget
class Controls extends Element_1.default {
    constructor(props) {
        super({ type: 'div' });
        this.dragging = false;
        this.mouseDown = false;
        // The widget's size relative to the current viewport
        this.widgetSize = { x: 0, y: 0 };
        this.position = { x: 0, y: 0 };
        this.modifyClass(['DEV-WIDGET-SECTION', 'DEV-WIDGET-CONTROLS']);
        // Create required components
        const dragButton = new Button_1.default({ text: 'Drag Me' }).modifyClass('DEV-WIDGET-DRAG-BUTTON');
        const positionInput = new Input_1.default({ placeholder: 'Position ( y, x )' });
        const backgroundColorInput = new Input_1.default({ placeholder: 'Bkg Color as Hex / RGB' });
        const customCommandInput = new Input_1.default({ placeholder: 'Custom Cmd' });
        const runCustomCommandButton = new Button_1.default({ text: 'Run' });
        // Start dragging event listener
        props.Widget.modifyEventListener('mousedown', (event) => {
            // Start dragging logic
            const target = event.target;
            this.mouseDown = true;
            if (target.classList.contains('DEV-WIDGET-DRAG-BUTTON')) {
                this.ToggleDraggingWidget(true);
            }
            else if (!props.Widget.hasClass('DEV-WIDGET-OPEN')) {
                setTimeout(() => {
                    if (this.mouseDown)
                        this.ToggleDraggingWidget(true);
                }, 100);
            }
        });
        // End dragging event listener
        window.addEventListener('mouseup', () => this.ToggleDraggingWidget(false));
        // Dragging event listener
        window.addEventListener('mousemove', (event) => this.HandleDragWidget(event));
        // Blur event listener to set the widget's position on screen
        positionInput.modifyEventListener('blur', (event) => this.HandleMoveWidget(event.currentTarget));
        // Blur event listener to update the background color
        backgroundColorInput.modifyEventListener('blur', (event) => this.HandleBackgroundColor(event.target));
        // Blur event listener to update set and save the custom command
        customCommandInput.modifyEventListener('blur', event => this.HandleSetCustomCommand(event.target));
        // Click event listener for running the custom command
        runCustomCommandButton.modifyEventListener('click', event => this.HandleCustomCommand(event.target));
        // Inputs used by the Controller class
        this.Inputs = {
            pos: positionInput.elem,
            bkg: backgroundColorInput.elem,
            cc: customCommandInput.elem
        };
        // Append componenets
        this.append(dragButton.elem);
        this.append(positionInput.elem);
        this.append(backgroundColorInput.elem);
        this.append(customCommandInput.elem);
        this.append(runCustomCommandButton.elem);
        // Save references to required function
        this.logMessage = props.logger;
        this.InvertWidgetColor = props.invertWidgetColorFn;
        this.ExecutePlayoutCommand = props.playoutCommandFn;
        this.SetWidgetSetting = props.setWidgetSetting;
        this.GetDisplaySetting = props.getWidgetDisplay;
        this.widget = props.Widget.elem;
        window.addEventListener('resize', () => {
            // Recalculate the widget size and move it to an on screen location
            this.SetWidgetSize(this.GetDisplaySetting());
            this.MoveWidget({ x: 10, y: 10 });
            this.Inputs.pos.value = '10, 10';
        });
        this.SetWidgetSize();
    }
    // Sets the widget's size based on the current screen size
    SetWidgetSize(display) {
        switch (display) {
            case 'shrink':
                this.widgetSize.x = window.screen.width * .03;
                this.widgetSize.y = window.screen.width * .15;
                break;
            case 'hide':
                this.widgetSize.x = window.screen.width * .03;
                this.widgetSize.y = window.screen.width * .03;
                break;
            default:
                this.widgetSize.x = window.screen.width * .15;
                this.widgetSize.y = window.screen.width * .15;
                break;
        }
    }
    ValidatePosition(pos, inner, size) {
        if (pos <= 0) {
            return 10;
        }
        else if (pos >= inner - size - (size * .15)) {
            return inner - size - (size * .15);
        }
        else {
            return pos;
        }
    }
    // Moves the widget somewhere on screen
    MoveWidget(position) {
        this.position.x = this.ValidatePosition(position.x, window.innerWidth, this.widgetSize.x);
        this.position.y = this.ValidatePosition(position.y, window.innerHeight, this.widgetSize.y);
        this.widget.style.left = this.position.x + 'px';
        this.widget.style.top = this.position.y + 'px';
        this.Inputs.pos.value = this.position.y + ', ' + this.position.x;
        if (!this.dragging)
            this.SetWidgetSetting('position', { x: this.position.x, y: this.position.y });
    }
    // Convert's the position from a keyword or string to a number
    ConvertPosition(pos) {
        if (pos.indexOf('px') > -1)
            pos = pos.replace(/[px]/g, '');
        if (isNaN(Number(pos))) {
            pos = pos.toLowerCase();
            switch (pos) {
                case 'top':
                case 'left':
                    return 5;
                case 'bottom':
                    return Math.floor(window.innerHeight - this.widgetSize.y);
                case 'right':
                    return Math.floor(window.innerWidth - this.widgetSize.x);
                default:
                    this.logMessage(pos + ' is an invalid position');
                    return 10;
            }
        }
        else {
            return Number(pos);
        }
    }
    // Begins or stops dragging the widget
    ToggleDraggingWidget(val) {
        if (!val)
            this.mouseDown = false;
        this.dragging = val;
        if (!this.dragging)
            this.SetWidgetSetting('position', { x: this.position.x, y: this.position.y });
    }
    // Method to apply the new position to the widget
    HandleDragWidget(event) {
        if (this.dragging) {
            const input = document.querySelector('.DEV-WIDGET-CONTROLS input:first-of-type');
            const position = {
                x: event.clientX,
                y: event.clientY
            };
            this.MoveWidget(position);
            input.value = this.position.y + ', ' + this.position.x;
        }
    }
    // Method to handle user input and set the widget's position
    HandleMoveWidget(event) {
        // Cast the input event target to an HTML Input Type
        const input = event;
        const value = input.value.replace(/,/g, ' ');
        let values;
        const raw = value.split(' ').map(i => i.trim()).filter(i => i.length);
        if (!raw.length) {
            this.logMessage('Invalid position');
            input.value = '';
            return;
        }
        else if (raw.length === 1) {
            raw[1] = raw[0];
        }
        values = [this.ConvertPosition(raw[0]), this.ConvertPosition(raw[1])];
        this.MoveWidget({ y: values[0], x: values[1] });
    }
    // Handles a user entered background color
    HandleBackgroundColor(event) {
        const input = event;
        let value = input.value.length ? input.value : '255,255,255';
        let raw;
        let final;
        if (value.indexOf('http') !== -1) {
            final = value;
        }
        else {
            if (value.indexOf(' ') !== -1 || value.indexOf(',') !== -1) {
                raw = ColorFunctions_1.CheckRGBValue(value);
            }
            else {
                raw = ColorFunctions_1.ConvertHEXtoRGB(value);
            }
            if (!raw.length) {
                this.logMessage('Invalid Background Color');
                input.value = '';
                return;
            }
            final = 'rgba(' + raw.join(',') + ')';
        }
        this.ChangeBackgroundColor(final);
    }
    // Changes the background color and adjust the widget's color
    ChangeBackgroundColor(color) {
        const body = document.querySelector('body');
        this.backgroundColor = color;
        this.SetWidgetSetting('backgroundColor', this.backgroundColor);
        this.Inputs.bkg.value = this.backgroundColor;
        if (color.indexOf('http') !== -1) {
            body.style.backgroundImage = 'url(' + this.backgroundColor + ')';
            body.style.backgroundSize = 'cover';
        }
        else {
            const invert = 'rgb(' + ColorFunctions_1.ClampRGB(ColorFunctions_1.InvertColor(ColorFunctions_1.CheckRGBValue(color))).join(',') + ')';
            const titleSafe = document.querySelector('.DEV-WIDGET-TITLE-SAFE');
            titleSafe.style.borderColor = invert;
            body.style.backgroundImage = '';
            body.style.backgroundColor = this.backgroundColor;
        }
        this.InvertWidgetColor();
    }
    // Attempts to execute a custom command
    HandleCustomCommand(event) {
        const button = event;
        const input = button.previousElementSibling;
        if (input.value.length) {
            this.ExecutePlayoutCommand(input.value);
        }
        else {
            this.logMessage('Invalid Custom Command');
        }
    }
    // Handles the blur event from the custom command input
    HandleSetCustomCommand(event) {
        const input = event;
        this.SetCustomCommand(input.value);
    }
    // Set's the custom command current being used
    SetCustomCommand(cmd) {
        this.customCommand = cmd;
        this.Inputs.cc.value = this.customCommand;
        this.SetWidgetSetting('customCommand', this.customCommand);
    }
}
exports.default = Controls;


/***/ }),

/***/ "./src/components/Display.ts":
/*!***********************************!*\
  !*** ./src/components/Display.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Element_1 = __webpack_require__(/*! ./ui/Element */ "./src/components/ui/Element.ts");
const Button_1 = __webpack_require__(/*! ./form/Button */ "./src/components/form/Button.ts");
const ColorFunctions_1 = __webpack_require__(/*! ../helpers/ColorFunctions */ "./src/helpers/ColorFunctions.ts");
// Class that controls the widgets visual display
class Display extends Element_1.default {
    constructor(props) {
        super({ type: 'div' });
        // Hides the widget
        this.HideWidget = () => {
            if (this.Widget.elem.classList.contains('DEV-WIDGET-SHRUNKEN')) {
                this.Widget.modifyClass(['DEV-WIDGET-SHRUNKEN', 'DEV-WIDGET-HIDDEN']);
            }
            else {
                this.Widget.modifyClass(['DEV-WIDGET-OPEN', 'DEV-WIDGET-HIDDEN']);
            }
            this.GetWidgetDisplay();
            this.SetWidgetSize();
        };
        // Shrinks the widget
        this.ShrinkWiget = () => {
            if (this.Widget.elem.classList.contains('DEV-WIDGET-HIDDEN')) {
                this.Widget.modifyClass(['DEV-WIDGET-HIDDEN', 'DEV-WIDGET-SHRUNKEN']);
            }
            else {
                this.Widget.modifyClass(['DEV-WIDGET-OPEN', 'DEV-WIDGET-SHRUNKEN']);
            }
            this.GetWidgetDisplay();
            this.SetWidgetSize();
        };
        // Toggle the widget's invisible look
        this.InvisWidget = () => {
            this.Widget.modifyClass('DEV-WIDGET-INVIS');
            this.Widget.elem.classList.contains('DEV-WIDGET-INVIS')
                ? this.SetWidgetSetting('invis', true)
                : this.SetWidgetSetting('invis', false);
            this.InvertWidgetColor();
        };
        this.Widget = props.widget;
        this.SetWidgetSetting = props.setWidgetSetting;
        this.modifyClass(['DEV-WIDGET-SECTION', 'DEV-WIDGET-DISPLAY']);
        // Create buttons that control the widget's display
        const hideButton = new Button_1.default()
            .modifyClass('DEV-WIDGET-HIDE')
            .modifyEventListener('click', this.HideWidget);
        const shrinkButton = new Button_1.default()
            .modifyClass('DEV-WIDGET-SHRINK')
            .modifyEventListener('click', this.ShrinkWiget);
        const invisButton = new Button_1.default()
            .modifyClass('DEV-WIDGET-INVIS')
            // Toggles the widget invisible display
            .modifyEventListener('click', this.InvisWidget);
        this.append(hideButton.elem);
        this.append(shrinkButton.elem);
        this.append(invisButton.elem);
        this.SetWidgetSize = props.setWidgetSize;
        this.InvertWidgetColor = this.InvertWidgetColor.bind(this);
    }
    // Determines and set's the widget's display mode
    GetWidgetDisplay() {
        if (this.Widget.hasClass('DEV-WIDGET-HIDDEN')) {
            this.widgetDisplay = 'hide';
        }
        else if (this.Widget.hasClass('DEV-WIDGET-SHRUNKEN')) {
            this.widgetDisplay = 'shrink';
        }
        else {
            this.widgetDisplay = 'open';
        }
        this.SetWidgetSetting('display', this.widgetDisplay);
        this.SetWidgetSize();
    }
    // Changes the wigdet's display type
    ChangeWidgetDisplay(dsp) {
        switch (dsp) {
            case 'hide':
                this.HideWidget();
                break;
            case 'shrink':
                this.ShrinkWiget();
                break;
            case 'invis':
                this.InvisWidget();
                break;
        }
    }
    // Applys the widget's new color the all the reuired components
    ApplyWidgetColor(color) {
        const elements = Array.from(this.Widget.elem.querySelectorAll('.DEV-WIDGET-SECTION button, .DEV-WIDGET-CONTROLS input'));
        elements.forEach(e => {
            // Has an SVG as a child
            if (e.childNodes.length && e.childNodes[0].nodeName === 'svg') {
                let SVGNodes = e.childNodes[0].childNodes;
                SVGNodes.forEach(elem => {
                    if (elem.nodeName !== '#text') {
                        elem.nodeName === 'path'
                            ? elem.style.fill = color
                            : elem.style.stroke = color;
                    }
                });
                // Is a normal text button or input
            }
            else {
                if (e.nodeName === 'INPUT') {
                    e.style.borderColor = color;
                }
                else {
                    e.style.color = color;
                }
            }
        });
        this.Widget.elem.style.borderColor = color;
        const logger = this.Widget.elem.querySelector('.DEV-WIDGET-LOGGER p');
        logger.style.color = color;
    }
    // Sets or removes the widget's color
    InvertWidgetColor() {
        if (this.Widget.elem.classList.contains('DEV-WIDGET-INVIS')) {
            const color = document.querySelector('body').style.backgroundColor;
            let rgb = ColorFunctions_1.ClampRGB(ColorFunctions_1.InvertColor(ColorFunctions_1.CheckRGBValue(color)));
            const invert = 'rgb(' + rgb.join(',') + ')';
            this.ApplyWidgetColor(invert);
        }
        else {
            // Removes the color
            this.ApplyWidgetColor('');
        }
    }
}
exports.default = Display;


/***/ }),

/***/ "./src/components/HelpWindow.ts":
/*!**************************************!*\
  !*** ./src/components/HelpWindow.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Popup_1 = __webpack_require__(/*! ./ui/Popup */ "./src/components/ui/Popup.ts");
const Paragraph_1 = __webpack_require__(/*! ./ui/Paragraph */ "./src/components/ui/Paragraph.ts");
const Label_1 = __webpack_require__(/*! ./form/Label */ "./src/components/form/Label.ts");
class Help extends Popup_1.default {
    constructor() {
        super();
        this.modifyClass('DEV-WIDGET-HELP');
        this.body.appendChild(new Label_1.default({ text: 'Position:' }).elem);
        this.body.appendChild(new Paragraph_1.default({
            text: 'Can be a Keyword (Top, Bottom, Left, Right) or a pixel value (200px 200px)'
        }).elem);
        this.body.appendChild(new Label_1.default({ text: 'Background Color:' }).elem);
        this.body.appendChild(new Paragraph_1.default({
            text: 'Can be either a rgb value (0,0,0), rgba value (0,0,0,1), or a 3 or 6 digit hex value (#123 or #123123)'
        }).elem);
        this.body.appendChild(new Label_1.default({ text: 'Custom Command:' }).elem);
        this.body.appendChild(new Paragraph_1.default({
            text: 'Any function defined on the window object (global function)'
        }).elem);
        this.body.appendChild(new Label_1.default({ text: 'Custom Data:' }).elem);
        this.body.appendChild(new Paragraph_1.default({
            text: 'Use the left side drop down menues to create a data type'
        }).elem);
        this.body.appendChild(new Paragraph_1.default({
            text: 'Then add an key / value'
        }).elem);
        this.body.appendChild(new Paragraph_1.default({
            text: 'Arrays will be auto indexed and cannot have custom keys'
        }).elem);
        this.body.appendChild(new Paragraph_1.default({
            text: 'Use the "Associate" button and drop down to mirror data from another template'
        }).elem);
        this.body.appendChild(new Paragraph_1.default({
            text: 'Associated data can only be updated from the associated template itself'
        }).elem);
    }
}
exports.default = Help;


/***/ }),

/***/ "./src/components/Logger.ts":
/*!**********************************!*\
  !*** ./src/components/Logger.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Element_1 = __webpack_require__(/*! ./ui/Element */ "./src/components/ui/Element.ts");
// Class that logs a message for the User
class Logger extends Element_1.default {
    constructor() {
        super({ type: 'div' });
        // Timeout to determine how long to display the message for
        this.messageTimeout = null;
        this.modifyClass('DEV-WIDGET-LOGGER');
        // Create a paragraph element to hold the message
        this.message = new Element_1.default({ type: 'p' });
        this.append(this.message.elem);
        this.displayMessage = this.displayMessage.bind(this);
    }
    // Clears the current timeout and sets this.messageTimeout to null
    clearTimer() {
        clearTimeout(this.messageTimeout);
        this.messageTimeout = null;
    }
    // Displays a message
    displayMessage(msg) {
        if (msg) {
            if (this.messageTimeout)
                this.clearTimer(); // Restart the timeout
            this.messageTimeout = setTimeout(this.displayMessage, 5000);
            this.message.elem.textContent = msg;
            // Only toggle the class if it is not present
            if (!this.elem.classList.contains('DEV-WIDGET-SLIDE-DOWN'))
                this.modifyClass('DEV-WIDGET-SLIDE-DOWN');
        }
        else {
            this.clearTimer();
            this.modifyClass('DEV-WIDGET-SLIDE-DOWN');
        }
    }
}
exports.default = Logger;


/***/ }),

/***/ "./src/components/PlayoutControls.ts":
/*!*******************************************!*\
  !*** ./src/components/PlayoutControls.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const TemplateData_1 = __webpack_require__(/*! ./TemplateData */ "./src/components/TemplateData.ts");
const Element_1 = __webpack_require__(/*! ./ui/Element */ "./src/components/ui/Element.ts");
const Button_1 = __webpack_require__(/*! ./form/Button */ "./src/components/form/Button.ts");
// Class that plays global casparcg commands
class PlayoutControls extends Element_1.default {
    constructor(props) {
        super({ type: 'div' });
        this.SetAutoSave = (val) => this.TempalteData.SetAutoSave(val);
        this.modifyClass(['DEV-WIDGET-SECTION', 'DEV-WIDGET-PLAYOUT-CONTROLS']);
        this.TempalteData = new TemplateData_1.default({
            autoSave: props.userSettings.autoSave,
            associations: props.associations,
            setWidgetSetting: props.setWidgetSetting
        });
        // Create the playout controls
        const playButton = new Button_1.default()
            .modifyClass('DEV-WIDGET-PLAY')
            .modifyEventListener('click', () => this.ExecutePlayoutCommand('play'));
        const nextButton = new Button_1.default()
            .modifyClass('DEV-WIDGET-NEXT')
            .modifyEventListener('click', () => this.ExecutePlayoutCommand('next'));
        const stopButton = new Button_1.default()
            .modifyClass('DEV-WIDGET-STOP')
            .modifyEventListener('click', () => this.ExecutePlayoutCommand('stop'));
        const updateButton = new Button_1.default()
            .modifyClass('DEV-WIDGET-UPDATE')
            .modifyEventListener('click', () => this.ExecutePlayoutCommand('update'));
        const dataButton = new Button_1.default()
            .modifyClass('DEV-WIDGET-DATA')
            .modifyEventListener('click', this.TempalteData.Open);
        this.append(playButton.elem);
        this.append(nextButton.elem);
        this.append(stopButton.elem);
        this.append(updateButton.elem);
        this.append(dataButton.elem);
        // Set the logger function
        this.logMessage = props.logger;
        props.widget.appendChild(this.TempalteData.elem);
        if (props.userSettings.runUpdate && window.location.search.indexOf('debug=true') !== -1) {
            window.addEventListener('load', () => {
                this.ExecutePlayoutCommand('update');
            });
        }
    }
    // Attempt to execute a playout command
    ExecutePlayoutCommand(cmd) {
        if (typeof window[cmd] !== 'function'
            || (/\{\s*\[native code\]\s*\}/).test('' + window[cmd])) {
            // Display an error message for undefined commands
            this.logMessage(cmd + ' is not defined');
        }
        else {
            cmd === 'update'
                ? window[cmd](JSON.stringify(this.TempalteData.GetData()))
                : window[cmd]();
        }
    }
}
exports.default = PlayoutControls;


/***/ }),

/***/ "./src/components/Settings.ts":
/*!************************************!*\
  !*** ./src/components/Settings.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Element_1 = __webpack_require__(/*! ./ui/Element */ "./src/components/ui/Element.ts");
const Button_1 = __webpack_require__(/*! ./form/Button */ "./src/components/form/Button.ts");
const GitHubIcon_1 = __webpack_require__(/*! ./icons/GitHubIcon */ "./src/components/icons/GitHubIcon.ts");
const SettingsIcon_1 = __webpack_require__(/*! ./icons/SettingsIcon */ "./src/components/icons/SettingsIcon.ts");
const HelpIcon_1 = __webpack_require__(/*! ./icons/HelpIcon */ "./src/components/icons/HelpIcon.ts");
const UserSettings_1 = __webpack_require__(/*! ./UserSettings */ "./src/components/UserSettings.ts");
const HelpWindow_1 = __webpack_require__(/*! ./HelpWindow */ "./src/components/HelpWindow.ts");
const WidgetStorage_1 = __webpack_require__(/*! ./storage/WidgetStorage */ "./src/components/storage/WidgetStorage.ts");
// On screen settings for the widget
class Settings extends Element_1.default {
    constructor(props) {
        super({ type: 'div' });
        this.ToggleUserSettings = (state) => {
            state ? this.UserSettings.Open() : this.UserSettings.Close();
        };
        this.ToggleHelpWindow = (state) => {
            state ? this.Help.Open() : this.Help.Close();
        };
        this.modifyClass(['DEV-WIDGET-SECTION', 'DEV-WIDGET-SETTINGS']);
        // Create setting buttons
        const githubButton = new Button_1.default();
        const settingsButton = new Button_1.default();
        const helpButton = new Button_1.default();
        // Append the icons
        githubButton.elem.appendChild(GitHubIcon_1.default());
        settingsButton.elem.appendChild(SettingsIcon_1.default());
        helpButton.elem.appendChild(HelpIcon_1.default());
        githubButton.modifyEventListener('click', () => this.DisplayGitHubMessage());
        settingsButton.modifyEventListener('click', () => this.ToggleUserSettings(true));
        helpButton.modifyEventListener('click', () => this.ToggleHelpWindow(true));
        this.elem.appendChild(githubButton.elem);
        this.elem.appendChild(settingsButton.elem);
        this.elem.append(helpButton.elem);
        // Set the logger function
        this.logMessage = props.logger;
        const settings = WidgetStorage_1.WidgetStorage.GetWidgetSettings();
        this.UserSettings = new UserSettings_1.default({
            userSettings: settings.user,
            setWidgetSetting: props.setWidgetSetting,
            setAutoSave: props.setAutoSave,
            resetWidgetSetting: props.resetAllWidgetData
        });
        this.Help = new HelpWindow_1.default();
        props.widget.appendChild(this.UserSettings.elem);
        props.widget.appendChild(this.Help.elem);
    }
    DisplayGitHubMessage() {
        this.logMessage('github.com/chrisryanouellette/CasparCG_HTML_Widget');
    }
}
exports.default = Settings;


/***/ }),

/***/ "./src/components/TemplateData.ts":
/*!****************************************!*\
  !*** ./src/components/TemplateData.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const CreateDataSection_1 = __webpack_require__(/*! ./data/CreateDataSection */ "./src/components/data/CreateDataSection.ts");
const ChangeDataSection_1 = __webpack_require__(/*! ./data/ChangeDataSection */ "./src/components/data/ChangeDataSection.ts");
const RemoveDataSection_1 = __webpack_require__(/*! ./data/RemoveDataSection */ "./src/components/data/RemoveDataSection.ts");
const Element_1 = __webpack_require__(/*! ./ui/Element */ "./src/components/ui/Element.ts");
const Popup_1 = __webpack_require__(/*! ./ui/Popup */ "./src/components/ui/Popup.ts");
const Select_1 = __webpack_require__(/*! ./form/Select */ "./src/components/form/Select.ts");
const Button_1 = __webpack_require__(/*! ./form/Button */ "./src/components/form/Button.ts");
const TemplateStorage_1 = __webpack_require__(/*! ./storage/TemplateStorage */ "./src/components/storage/TemplateStorage.ts");
class TemplateData extends Popup_1.default {
    constructor(props) {
        super();
        this.associated = -1;
        this.Storage = new TemplateStorage_1.default();
        this.CreateDataSection = (type, k, v) => {
            const container = CreateDataSection_1.default(type, k, v);
            const children = container.childNodes;
            children[0].addEventListener('change', (e) => this.HandleSectionChange(e));
            children[0].addEventListener('click', (e) => {
                if (this.associated === -1)
                    children[0].classList.toggle('DEV-WIDGET-SELECT-OPEN');
            });
            children[4].addEventListener('click', () => this.HandleAddSection(container));
            children[5].addEventListener('click', () => this.HandleRemoveSection(container));
            return container;
        };
        this.HandleAddSection = (item) => {
            if (this.associated !== -1)
                return;
            const select = item.childNodes[0];
            const container = item.parentElement;
            const index = Array.prototype.indexOf.call(container.children, item);
            const nextElem = container.children[index + 1];
            let section;
            if (nextElem && nextElem.classList.contains('DEV-WIDGET-TEMPLATE-DATA-CON')) {
                const select = nextElem.childNodes[0].childNodes[0];
                section = this.CreateDataSection(select.getAttribute('value'));
                nextElem.appendChild(section);
            }
            else {
                const itemContainer = this.CreateDataContainer();
                section = this.CreateDataSection('text');
                itemContainer.appendChild(section);
                nextElem ? container.insertBefore(itemContainer, nextElem) : container.appendChild(itemContainer);
            }
            if (select.getAttribute('value') === 'arr') {
                const key = section.childNodes[1];
                key.style.display = 'none';
            }
        };
        this.HandleSectionChange = (e) => {
            if (this.associated !== -1)
                return;
            const select = e.target;
            const [id, name] = e.detail.selected();
            ChangeDataSection_1.default(select, id);
        };
        this.HandleRemoveSection = (e) => {
            if (this.associated !== -1)
                return;
            RemoveDataSection_1.default(e);
        };
        this.HandleDataType = (parent, type, nodes) => {
            let val;
            if (type === 'bool') {
                val = nodes[3].classList.contains('DEV-WIDGET-CHECKED')
                    ? true : false;
            }
            else {
                type === 'num'
                    ? val = Number(nodes[2].value)
                    : val = nodes[2].value;
            }
            if (!val && !parent[nodes[1].value])
                return;
            Array.isArray(parent) ? parent.push(val) : parent[nodes[1].value] = val;
        };
        this.HandleDataObject = (obj, con) => {
            con.childNodes.forEach((node, index) => {
                const child = node;
                const nodes = child.childNodes;
                const type = nodes[0].getAttribute('value');
                // Return (Skip) the container if a sub container is found
                if (child.classList.contains('DEV-WIDGET-TEMPLATE-DATA-CON'))
                    return obj;
                // Arrays and object are broken down further
                if (type === 'arr' || type === 'obj') {
                    const section = child.nextElementSibling;
                    const parent = type === 'arr' ? [] : {};
                    const key = nodes[1].value;
                    if (section) {
                        Array.isArray(obj)
                            ? obj.push(this.HandleDataObject(parent, section))
                            : obj[key] = this.HandleDataObject(parent, section);
                    }
                    else {
                        Array.isArray(obj) ? obj.push(parent) : obj[key] = parent;
                    }
                    // Booleans, numbers, and text are added to the current object
                }
                else {
                    this.HandleDataType(obj, type, nodes);
                }
            });
            return obj;
        };
        this.AssociateData = (selected) => {
            this.associated = this.associations.findIndex(a => a[0] === selected[0]);
            const association = this.associated === -1
                ? this.Storage.templateName
                : this.associations[this.associated];
            this.associatedData = this.Storage.GetAssocationData(association[0]);
            const dataContainer = this.body.querySelector('.DEV-WIDGET-POPUP-BACKGROUND > div:last-of-type');
            dataContainer.childNodes.forEach(c => dataContainer.removeChild(c));
            if (this.associatedData.association)
                delete this.associatedData.association;
            dataContainer.appendChild(this.LoadTemplateData(this.associatedData));
            // If the associated data is the graphics data
            if (association[0] === this.Storage.templateName[0]) {
                dataContainer.firstElementChild.classList.remove('DEV-WIDGET-TEMPLATE-DATA-CON-ASSOCIATED');
                this.associated = -1;
                delete this.templateData.association;
                // Else the data is from another graphic
            }
            else {
                dataContainer.firstElementChild.classList.add('DEV-WIDGET-TEMPLATE-DATA-CON-ASSOCIATED');
                this.templateData.association = association[0];
                this.Storage.SaveTemplateData(this.templateData);
            }
        };
        this.SaveTemplateData = () => {
            if (this.associated !== -1)
                return;
            const dataContainer = this.body.querySelector('.DEV-WIDGET-TEMPLATE-DATA-CON');
            this.templateData = this.HandleDataObject({}, dataContainer);
            this.Storage.SaveTemplateData(this.templateData);
            const index = this.associations.findIndex(a => a[0] === this.Storage.templateName[0]);
            if (index === -1 && Object.keys(this.templateData).length) {
                this.associations.push(this.Storage.templateName);
                const assocationsIds = this.associations.map((a) => a[0]);
                this.SetWidgetSetting('associations', assocationsIds);
            }
        };
        this.ResetTemplateData = () => {
            this.templateData = { new: 'data' };
            this.Storage.SaveTemplateData(this.templateData);
        };
        this.ToggleDataMode = (state) => {
            const buttons = this.body.querySelectorAll('.DEV-WIDGET-POPUP-BACKGROUND > button');
            const style = this.select.elem.style;
            if (!this.associations.length)
                return;
            if (state && style.display.length) {
                style.display = '';
                buttons[0].classList.add('DEV-WIDGET-BUTTON-INACTIVE');
                buttons[1].classList.remove('DEV-WIDGET-BUTTON-INACTIVE');
                try {
                    this.select.SelectOption(this.Storage.templateName[0]);
                }
                catch (error) {
                    console.warn('');
                }
            }
            else if (!state && !style.display.length) {
                style.display = 'none';
                buttons[0].classList.remove('DEV-WIDGET-BUTTON-INACTIVE');
                buttons[1].classList.add('DEV-WIDGET-BUTTON-INACTIVE');
                this.AssociateData(this.Storage.templateName);
            }
        };
        this.SetAutoSave = (val) => {
            this.autoSave = val;
            const container = this.elem.querySelector('.DEV-WIDGET-TEMPLATE-DATA-CONTROLS');
            const buttons = container.querySelectorAll('button');
            const closeButton = this.elem.querySelector('.DEV-WIDGET-CLOSE-BUTTON');
            if (this.autoSave) {
                buttons[0].textContent = 'Auto Save & Close';
                buttons[1].style.display = 'none';
                closeButton.addEventListener('mousedown', this.SaveTemplateData);
            }
            else {
                buttons[0].textContent = 'Update & Save';
                buttons[1].style.display = '';
                closeButton.removeEventListener('mousedown', this.SaveTemplateData);
            }
        };
        this.GetData = () => {
            if (this.templateData.association) {
                return this.associatedData;
            }
            else {
                return this.templateData;
            }
        };
        this.modifyClass('DEV-WIDGET-TEMPLATE-DATA');
        // Get and check for excisting template data
        this.templateData = this.Storage.GetTemplateData();
        this.SetWidgetSetting = props.setWidgetSetting;
        this.associations = props.associations
            .map(a => {
            let val = a.substring(17)
                .replace(/-/g, ' ').trim().split(' ')
                .map(i => i.substring(0, 1).toUpperCase() + i.substring(1))
                .join(' ');
            if (a === this.Storage.templateName[0])
                val = 'Current';
            return [a, val];
        });
        if (!this.templateData)
            this.ResetTemplateData();
        if (this.templateData.association) {
            this.associated = this.associations.findIndex(a => a[0] === this.templateData.association);
            this.associatedData = this.Storage.GetAssocationData(this.associations[this.associated][0]);
        }
        // Create template data container
        const title = Element_1.default.Create('h2');
        this.select = new Select_1.default({
            options: this.associations.length ? this.associations : [this.Storage.templateName]
        });
        const dataContainer = Element_1.default.Create('div');
        const addButton = new Button_1.default({ text: 'Add New Data' });
        title.textContent = 'Template Data';
        title.appendChild(addButton.elem);
        this.select.modifyEventListener('change', (e) => {
            this.AssociateData(e.detail.selected());
        });
        if (this.associated === -1) {
            this.select.elem.style.display = 'none';
            if (Object.keys(this.templateData).length)
                this.select.SelectOption(this.Storage.templateName[0]);
        }
        else {
            this.select.SelectOption(this.associations[this.associated][0]);
        }
        addButton.modifyEventListener('click', () => {
            if (this.associated !== -1)
                return;
            const section = this.CreateDataSection('text');
            this.body.querySelector('div .DEV-WIDGET-TEMPLATE-DATA-CON').appendChild(section);
        });
        // Custom or associate data buttons
        const customDataButton = new Button_1.default({ text: 'Custom Data' });
        const associateDataButton = new Button_1.default({ text: 'Associate Data' });
        // If we are associated, show the association
        this.templateData.association
            ? customDataButton.modifyClass('DEV-WIDGET-BUTTON-INACTIVE')
            : associateDataButton.modifyClass('DEV-WIDGET-BUTTON-INACTIVE');
        customDataButton.modifyEventListener('click', () => this.ToggleDataMode(false));
        associateDataButton.modifyEventListener('click', () => this.ToggleDataMode(true));
        if (!this.associations.length)
            associateDataButton.elem.classList.add('DEV-WIDGET-BUTTON-INACTIVE');
        const buttonCon = new Element_1.default({ type: 'div' });
        const updateButton = new Button_1.default({ text: 'Update & Save' });
        const cancelButton = new Button_1.default({ text: 'Do Not Save' });
        updateButton.modifyEventListener('click', () => {
            this.SaveTemplateData();
            this.Close();
        });
        cancelButton.modifyEventListener('click', this.Close);
        this.body.appendChild(title);
        this.body.appendChild(this.select.elem);
        this.body.appendChild(dataContainer);
        this.body.appendChild(customDataButton.elem);
        this.body.appendChild(associateDataButton.elem);
        buttonCon.modifyClass(['DEV-WIDGET-POPUP-BACKGROUND', 'DEV-WIDGET-TEMPLATE-DATA-CONTROLS']);
        buttonCon.append(updateButton.elem);
        if (!this.autoSave)
            buttonCon.append(cancelButton.elem);
        this.append(buttonCon.elem);
        this.SetAutoSave(props.autoSave);
    }
    CreateDataContainer() {
        const container = Element_1.default.Create('div');
        container.classList.add('DEV-WIDGET-TEMPLATE-DATA-CON');
        return container;
    }
    LoadTemplateData(obj) {
        const container = this.CreateDataContainer();
        Object.entries(obj).forEach(([key, val]) => {
            let elem;
            let children;
            // Handle Array
            if (Array.isArray(val)) {
                elem = this.CreateDataSection('arr', key);
                children = this.LoadTemplateData(val);
                children.childNodes.forEach(c => {
                    const con = c;
                    if (con.classList.contains('DEV-WIDGET-TEMPLATE-DATA-ITEM')) {
                        const input = con.childNodes[1];
                        input.style.display = 'none';
                    }
                });
                // Handle Object
            }
            else if (typeof val === 'object') {
                elem = this.CreateDataSection('obj', key);
                children = this.LoadTemplateData(val);
            }
            else {
                // Handle Booleans
                if (typeof val === 'boolean') {
                    elem = this.CreateDataSection('bool', key, String(val));
                }
                else {
                    // Handle Text and Numbers
                    elem = isNaN(Number(val))
                        ? this.CreateDataSection('text', key, val)
                        : this.CreateDataSection('num', key, String(val));
                }
            }
            container.appendChild(elem);
            if (children)
                container.appendChild(children);
        });
        return container;
    }
    Open() {
        super.Open();
        const dataContainer = this.body.querySelector('.DEV-WIDGET-POPUP-BACKGROUND > div:last-of-type');
        if (this.associated !== -1) {
            dataContainer.appendChild(this.LoadTemplateData(this.associatedData));
            dataContainer.firstElementChild.classList.add('DEV-WIDGET-TEMPLATE-DATA-CON-ASSOCIATED');
        }
        else {
            dataContainer.appendChild(this.LoadTemplateData(this.templateData));
        }
    }
    Close() {
        super.Close();
        const dataContainer = this.body.querySelector('.DEV-WIDGET-POPUP-BACKGROUND > div:last-of-type');
        dataContainer.childNodes.forEach(c => dataContainer.removeChild(c));
    }
}
exports.default = TemplateData;


/***/ }),

/***/ "./src/components/UserSettings.ts":
/*!****************************************!*\
  !*** ./src/components/UserSettings.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Popup_1 = __webpack_require__(/*! ./ui/Popup */ "./src/components/ui/Popup.ts");
const Element_1 = __webpack_require__(/*! ./ui/Element */ "./src/components/ui/Element.ts");
const Label_1 = __webpack_require__(/*! ./form/Label */ "./src/components/form/Label.ts");
const Input_1 = __webpack_require__(/*! ./form/Input */ "./src/components/form/Input.ts");
const Checkbox_1 = __webpack_require__(/*! ./form/Checkbox */ "./src/components/form/Checkbox.ts");
const Button_1 = __webpack_require__(/*! ./form/Button */ "./src/components/form/Button.ts");
class UserSettings extends Popup_1.default {
    constructor(props) {
        super();
        this.AdjustTitleSafe = (percentage) => {
            const border = window.innerWidth * .002;
            const height = window.innerHeight - (window.innerHeight * percentage) - (border / 2);
            const topPadding = (window.innerHeight - height) / 2 - (border / 2);
            const width = window.innerWidth - (window.innerWidth * percentage) - (border / 2);
            const rightPadding = (window.innerWidth - width) / 2 - (border / 2);
            const style = this.TitleSafe.style;
            if (percentage <= 0) {
                style.display = 'none';
            }
            else {
                style.display = 'block';
                style.height = height + 'px';
                style.width = width + 'px';
                style.top = topPadding + 'px';
                style.right = rightPadding + 'px';
            }
            style.borderWidth = border + 'px';
            this.titleSafe = percentage;
        };
        this.ResetWidgetData = () => {
            this.runUpdate = false;
            this.autoSave = false;
            const checkboxes = this.elem.querySelectorAll('.DEV-WIDGET-CHECKBOX');
            const input = this.body.querySelector('input');
            checkboxes.forEach(e => e.classList.remove('DEV-WIDGET-CHECKED'));
            input.value = '';
            this.ResetWidgetSetting();
            this.Close();
        };
        this.runUpdate = props.userSettings.runUpdate;
        this.autoSave = props.userSettings.autoSave;
        this.titleSafe = props.userSettings.titleSafe;
        this.SetWidgetSetting = props.setWidgetSetting;
        this.ResetWidgetSetting = props.resetWidgetSetting;
        this.modifyClass('DEV-WIDGET-USER-SETTINGS');
        const header = new Element_1.default({ type: 'h2' }).elem;
        header.textContent = 'Widget Settings';
        const form = new Element_1.default({ type: 'form' }).modifyClass('DEV-WIDGET-POPUP-FORM');
        const runUpdateLabel = new Label_1.default({
            text: 'Run Update Command on Page Load'
        });
        const runUpdateButton = new Checkbox_1.default();
        runUpdateButton.CheckCallback((res) => this.runUpdate = res);
        runUpdateLabel.SetCustomElement(runUpdateButton.elem);
        const autoSaveLabel = new Label_1.default({
            text: 'Auto Save Template Data'
        });
        const autoSaveButton = new Checkbox_1.default();
        autoSaveButton.CheckCallback(res => {
            this.autoSave = res;
            props.setAutoSave(this.autoSave);
        });
        autoSaveLabel.SetCustomElement(autoSaveButton.elem);
        const titleSafeLabel = new Label_1.default({
            text: 'Title Safe Area'
        });
        const titleSafeInput = new Input_1.default({ defualtValue: this.titleSafe * 100 + '%' });
        titleSafeLabel.SetCustomElement(titleSafeInput.elem);
        titleSafeInput.modifyEventListener('input', (e) => this.CheckTitleSafe(e.target));
        titleSafeInput.modifyEventListener('blur', (e) => this.CheckTitleSafe(e.target));
        this.TitleSafe = new Element_1.default({ type: 'div' }).elem;
        this.TitleSafe.classList.add('DEV-WIDGET-TITLE-SAFE');
        if (this.titleSafe === 0) {
            this.TitleSafe.style.display = 'none';
        }
        else {
            this.AdjustTitleSafe(this.titleSafe);
        }
        const optionsContainer = new Element_1.default({ type: 'div' });
        optionsContainer.modifyClass('DEV-WIDGET-TEMPLATE-DATA-CONTROLLER');
        const saveButton = new Button_1.default({ text: 'Save' });
        saveButton.modifyEventListener('click', () => this.HandleSaveData());
        const doNotSaveButton = new Button_1.default({ text: 'Do Not Save' });
        doNotSaveButton.modifyEventListener('click', () => this.Close());
        const clearDataButton = new Button_1.default({ text: 'Reset Widget Settings' });
        clearDataButton.modifyClass('DEV-WIDGET-DANGER-BUTTON');
        clearDataButton.modifyEventListener('click', () => this.ResetWidgetData());
        if (this.runUpdate)
            runUpdateButton.check();
        if (this.autoSave)
            autoSaveButton.check();
        this.body.appendChild(header);
        this.body.appendChild(form.elem);
        form.append(runUpdateLabel.elem);
        form.append(runUpdateButton.elem);
        form.append(autoSaveLabel.elem);
        form.append(autoSaveButton.elem);
        form.append(titleSafeLabel.elem);
        form.append(titleSafeInput.elem);
        this.body.appendChild(optionsContainer.elem);
        optionsContainer.append(saveButton.elem);
        optionsContainer.append(doNotSaveButton.elem);
        this.elem.firstElementChild.appendChild(clearDataButton.elem);
        document.querySelector('body').appendChild(this.TitleSafe);
        window.addEventListener('resize', () => this.AdjustTitleSafe(this.titleSafe));
    }
    CheckTitleSafe(e) {
        const target = e;
        let val = target.value;
        if (val.indexOf('%') !== 1)
            val = val.split('').filter(v => v !== "%").join('');
        if (isNaN(Number(val)))
            target.value = '';
        let percentage = Number(val) / 100;
        if (percentage >= 1) {
            target.value = '100%';
            percentage = .99;
        }
        this.AdjustTitleSafe(percentage);
    }
    HandleSaveData() {
        this.SetWidgetSetting('user', {
            runUpdate: this.runUpdate,
            autoSave: this.autoSave,
            titleSafe: this.titleSafe
        });
        this.Close();
    }
}
exports.default = UserSettings;


/***/ }),

/***/ "./src/components/Widget.ts":
/*!**********************************!*\
  !*** ./src/components/Widget.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const WidgetStorage_1 = __webpack_require__(/*! ./storage/WidgetStorage */ "./src/components/storage/WidgetStorage.ts");
const Element_1 = __webpack_require__(/*! ./ui/Element */ "./src/components/ui/Element.ts");
const Display_1 = __webpack_require__(/*! ./Display */ "./src/components/Display.ts");
const Controls_1 = __webpack_require__(/*! ./Controls */ "./src/components/Controls.ts");
const PlayoutControls_1 = __webpack_require__(/*! ./PlayoutControls */ "./src/components/PlayoutControls.ts");
const Settings_1 = __webpack_require__(/*! ./Settings */ "./src/components/Settings.ts");
const Logger_1 = __webpack_require__(/*! ./Logger */ "./src/components/Logger.ts");
__webpack_require__(/*! ../scss/widget.scss */ "./src/scss/widget.scss");
// Widget class that controls most action of the widget
class Widget extends Element_1.default {
    constructor() {
        // Create a new div element
        super({ type: 'div' });
        // Widget's log class to log message to the user
        this.Logger = new Logger_1.default();
        // Widget's Storage
        this.Storage = new WidgetStorage_1.WidgetStorage();
        this.GetWidgetDisplay = () => {
            return this.Display.widgetDisplay;
        };
        this.InvertWidgetColor = () => {
            this.Display.InvertWidgetColor();
        };
        this.ExecutePlayoutCommand = (cmd) => {
            this.PlayoutControls.ExecutePlayoutCommand(cmd);
        };
        this.SetWidgetSize = () => {
            this.Controls.SetWidgetSize(this.Display.widgetDisplay);
            this.Controls.MoveWidget(this.Controls.position);
        };
        this.ResetAllWidgetData = () => {
            this.Storage.ResetWidgetData();
            this.ApplyWidgetSettings(this.Storage.widgetSettings);
        };
        this.ApplyWidgetSettings = ({ display, invis, position, backgroundColor, customCommand }) => {
            if (invis)
                this.Display.ChangeWidgetDisplay('invis');
            this.Controls.ChangeBackgroundColor(backgroundColor);
            this.Controls.SetCustomCommand(customCommand);
            this.Display.ChangeWidgetDisplay(display);
            this.Controls.MoveWidget(position);
        };
        // Add classes
        this.modifyClass(['DEV-WIDGET', 'DEV-WIDGET-OPEN']);
        this.Display = new Display_1.default({
            widget: this,
            setWidgetSize: this.SetWidgetSize,
            setWidgetSetting: this.Storage.SetWidgetSetting
        });
        this.Controls = new Controls_1.default({
            logger: this.Logger.displayMessage,
            invertWidgetColorFn: this.InvertWidgetColor,
            playoutCommandFn: this.ExecutePlayoutCommand,
            setWidgetSetting: this.Storage.SetWidgetSetting,
            getWidgetDisplay: this.GetWidgetDisplay,
            Widget: this
        });
        this.PlayoutControls = new PlayoutControls_1.default({
            userSettings: this.Storage.widgetSettings.user,
            associations: this.Storage.widgetSettings.associations,
            widget: this.elem,
            setWidgetSetting: this.Storage.SetWidgetSetting,
            logger: this.Logger.displayMessage
        });
        this.Settings = new Settings_1.default({
            widget: this.elem,
            logger: this.Logger.displayMessage,
            setWidgetSetting: this.Storage.SetWidgetSetting,
            setAutoSave: this.PlayoutControls.SetAutoSave,
            resetAllWidgetData: this.ResetAllWidgetData,
        });
        // Append Widget Componets to DOM
        this.append(this.Display.elem);
        this.append(this.Controls.elem);
        this.append(this.PlayoutControls.elem);
        this.append(this.Settings.elem);
        this.append(this.Logger.elem);
        // Apply all the saved settings
        this.ApplyWidgetSettings(this.Storage.widgetSettings);
    }
}
exports.default = Widget;


/***/ }),

/***/ "./src/components/data/ChangeDataSection.ts":
/*!**************************************************!*\
  !*** ./src/components/data/ChangeDataSection.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function ChangeDataSection(select, id) {
    const oldType = select.getAttribute('value');
    const container = select.parentElement;
    // Previous / parent data set
    const previous = container.parentElement.previousElementSibling;
    const previousType = previous ? previous.childNodes[0] : null;
    const children = [...container.childNodes];
    // Reset elements for change
    children.slice(2, -1).map(e => e.style.display = 'none');
    children[2].value = '';
    // Remove array or object data
    if ((oldType === 'arr' || oldType === 'obj') && container.nextElementSibling) {
        container.parentElement.removeChild(container.nextElementSibling);
    }
    // Check if we are within an array type
    if (previousType) {
        if (previousType.getAttribute('value') === 'arr') {
            children[1].style.display = 'none';
        }
    }
    else if (!previousType) {
        children[1].style.display = 'flex';
    }
    // Handle displaying required elements
    switch (id) {
        case 'obj':
        case 'arr':
            children[4].style.display = 'flex';
            break;
        case 'bool':
            children[3].style.display = 'flex';
            break;
        default:
            children[2].style.display = 'block';
            break;
    }
}
exports.default = ChangeDataSection;


/***/ }),

/***/ "./src/components/data/CreateDataSection.ts":
/*!**************************************************!*\
  !*** ./src/components/data/CreateDataSection.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Element_1 = __webpack_require__(/*! ../ui/Element */ "./src/components/ui/Element.ts");
const Select_1 = __webpack_require__(/*! ../form/Select */ "./src/components/form/Select.ts");
const Input_1 = __webpack_require__(/*! ../form/Input */ "./src/components/form/Input.ts");
const Checkbox_1 = __webpack_require__(/*! ../form/Checkbox */ "./src/components/form/Checkbox.ts");
const Button_1 = __webpack_require__(/*! ../form/Button */ "./src/components/form/Button.ts");
const PlusIcon_1 = __webpack_require__(/*! ../icons/PlusIcon */ "./src/components/icons/PlusIcon.ts");
const MinusIcon_1 = __webpack_require__(/*! ../icons/MinusIcon */ "./src/components/icons/MinusIcon.ts");
function CreateDataSection(type, k, v) {
    const container = new Element_1.default({ type: 'div' });
    container.modifyClass('DEV-WIDGET-TEMPLATE-DATA-ITEM');
    const select = new Select_1.default({
        options: [
            ['text', 'Text'],
            ['num', 'Number'],
            ['bool', 'True/False'],
            ['arr', 'Array'],
            ['obj', 'Object']
        ]
    });
    select.SelectOption(type);
    select.elem.addEventListener('click', () => select.modifyClass('DEV-WIDGET-SELECT-OPEN'));
    const key = new Input_1.default({ placeholder: 'Key' });
    const value = new Input_1.default({ placeholder: 'Value' });
    const checkbox = new Checkbox_1.default();
    const addButton = new Button_1.default();
    addButton.elem.appendChild(PlusIcon_1.default());
    const removeButton = new Button_1.default();
    removeButton.elem.appendChild(MinusIcon_1.default());
    switch (type) {
        case 'bool':
            value.ToggleHide();
            addButton.ToggleHide();
            if (v === 'true')
                checkbox.check();
            break;
        case 'arr':
        case 'obj':
            checkbox.ToggleHide();
            value.ToggleHide();
            break;
        case 'text':
        case 'number':
        default:
            checkbox.ToggleHide();
            addButton.ToggleHide();
            break;
    }
    if (type === 'num') {
        value.modifyEventListener('blur', (e) => {
            const target = e.target;
            if (isNaN(Number(target.value))) {
                target.value = '';
            }
        });
    }
    if (k !== undefined)
        key.elem.value = k;
    if (v !== undefined)
        value.elem.value = v;
    container.append([
        select.elem,
        key.elem,
        value.elem,
        checkbox.elem,
        addButton.elem,
        removeButton.elem
    ]);
    return container.elem;
}
exports.default = CreateDataSection;


/***/ }),

/***/ "./src/components/data/RemoveDataSection.ts":
/*!**************************************************!*\
  !*** ./src/components/data/RemoveDataSection.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function RemoveDataSection(e) {
    const dataCon = this.body.querySelector('div');
    const parent = e.parentElement;
    const select = e.childNodes[0];
    const type = select.getAttribute('value');
    if (this.body.querySelectorAll('.DEV-WIDGET-TEMPLATE-DATA-ITEM').length <= 1)
        return;
    if (type === 'obj' || type === 'arr') {
        const next = e.nextElementSibling;
        if (next && next.classList.contains('DEV-WIDGET-TEMPLATE-DATA-CON'))
            parent.removeChild(next);
    }
    parent.removeChild(e);
    if (parent.childElementCount === 0) {
        parent.parentElement.removeChild(parent);
        if (dataCon.childElementCount === 0)
            dataCon.appendChild(this.CreateDataContainer());
    }
}
exports.default = RemoveDataSection;


/***/ }),

/***/ "./src/components/form/Button.ts":
/*!***************************************!*\
  !*** ./src/components/form/Button.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Element_1 = __webpack_require__(/*! ../ui/Element */ "./src/components/ui/Element.ts");
class Button extends Element_1.default {
    constructor(props) {
        super(Object.assign(Object.assign({}, props), { type: 'button' }));
        if (props)
            this.elem.textContent = props.text;
    }
}
exports.default = Button;


/***/ }),

/***/ "./src/components/form/Checkbox.ts":
/*!*****************************************!*\
  !*** ./src/components/form/Checkbox.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Element_1 = __webpack_require__(/*! ../ui/Element */ "./src/components/ui/Element.ts");
class Checkbox extends Element_1.default {
    constructor() {
        super({ type: 'div' });
        this.checked = false;
        this.changeCheck = () => {
            this.modifyClass('DEV-WIDGET-CHECKED');
            this.elem.classList.contains('DEV-WIDGET-CHECKED')
                ? this.checked = true
                : this.checked = false;
            if (this.CheckCallbackFn)
                this.CheckCallbackFn(this.checked);
        };
        this.check = () => {
            this.checked = true;
            this.elem.classList.add('DEV-WIDGET-CHECKED');
        };
        this.uncheck = () => {
            this.checked = false;
            this.elem.classList.remove('DEV-WIDGET-CHECKED');
        };
        this.CheckCallback = (fn) => {
            this.CheckCallbackFn = fn;
        };
        this.modifyClass('DEV-WIDGET-CHECKBOX');
        this.modifyEventListener('click', () => this.changeCheck());
    }
}
exports.default = Checkbox;


/***/ }),

/***/ "./src/components/form/Input.ts":
/*!**************************************!*\
  !*** ./src/components/form/Input.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Element_1 = __webpack_require__(/*! ../ui/Element */ "./src/components/ui/Element.ts");
class Input extends Element_1.default {
    constructor(props) {
        super({ type: 'input' });
        if (props) {
            if (props.placeholder)
                this.elem.setAttribute('placeholder', props.placeholder);
            if (props.defualtValue)
                this.elem.value = props.defualtValue;
            if (props.id)
                this.elem.id = props.id;
        }
    }
}
exports.default = Input;


/***/ }),

/***/ "./src/components/form/Label.ts":
/*!**************************************!*\
  !*** ./src/components/form/Label.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Element_1 = __webpack_require__(/*! ../ui/Element */ "./src/components/ui/Element.ts");
class Label extends Element_1.default {
    constructor(props) {
        super({ type: 'label' });
        this.CustomLabelElement = () => this.customElement.click();
        this.SetCustomElement = (elem) => {
            this.modifyEventListener('click', () => this.CustomLabelElement());
            this.customElement = elem;
        };
        this.modifyClass('DEV-WIDGET-LABEL');
        const label = this.elem;
        label.textContent = props.text;
        if (props.htmlFor)
            label.htmlFor = props.htmlFor;
    }
}
exports.default = Label;


/***/ }),

/***/ "./src/components/form/Select.ts":
/*!***************************************!*\
  !*** ./src/components/form/Select.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Element_1 = __webpack_require__(/*! ../ui/Element */ "./src/components/ui/Element.ts");
const ArrowIcon_1 = __webpack_require__(/*! ../icons/ArrowIcon */ "./src/components/icons/ArrowIcon.ts");
class Select extends Element_1.default {
    constructor(props) {
        super({ type: 'div' });
        this.ChangeSelected = (target) => {
            const li = target;
            if (li.nodeName !== 'LI')
                return;
            this.selected = [li.getAttribute('value'), li.textContent];
            this.elem.querySelector('label').innerText = li.textContent;
            this.elem.dispatchEvent(this.change);
            this.elem.setAttribute('value', this.selected[0]);
            this.modifyClass('DEV-WIDGET-SELECT-OPEN');
        };
        this.modifyClass('DEV-WIDGET-SELECT');
        this.modifyEventListener('mouseleave', () => this.elem.classList.remove('DEV-WIDGET-SELECT-OPEN'));
        this.change = new CustomEvent('change', { detail: { selected: () => this.selected } });
        const selected = new Element_1.default({ type: 'div' });
        selected.modifyClass('DEV-WIDGET-SELECTED');
        this.selected = props.defualt ? props.defualt : props.options[0];
        selected.append(Element_1.default.Create('label'));
        selected.elem.childNodes[0].textContent = this.selected[1];
        this.elem.setAttribute('value', this.selected[0]);
        selected.elem.appendChild(ArrowIcon_1.default());
        selected.modifyEventListener('click', () => this.modifyClass('DEV-WIDGET-SELECT-OPEN'));
        const optionsCon = new Element_1.default({ type: 'ul' });
        optionsCon.modifyEventListener('click', (event) => this.ChangeSelected(event.target));
        this.options = props.options;
        this.options.forEach(item => {
            const opt = new Element_1.default({ type: 'li' });
            opt.elem.setAttribute('value', item[0]);
            opt.elem.textContent = item[1];
            optionsCon.append(opt.elem);
        });
        this.append(selected.elem);
        this.append(optionsCon.elem);
    }
    SelectOption(opt) {
        const val = this.options.find(o => o[0] === opt);
        if (!val)
            throw new Error('Value Not Found');
        this.selected = val;
        this.elem.querySelector('label').innerText = this.selected[1];
        this.elem.setAttribute('value', this.selected[0]);
    }
}
exports.default = Select;


/***/ }),

/***/ "./src/components/icons/ArrowIcon.ts":
/*!*******************************************!*\
  !*** ./src/components/icons/ArrowIcon.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function CreateArrowIcon() {
    const parser = new DOMParser();
    return parser.parseFromString(`<svg class="DEV-WIDGET-ARROW-ICON" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="100" height="100" rx="10" ry="10"/>
<path d="M25 25 H75 L50 75 Z" />
</svg>`, 'text/html').querySelector('svg');
}
exports.default = CreateArrowIcon;


/***/ }),

/***/ "./src/components/icons/GitHubIcon.ts":
/*!********************************************!*\
  !*** ./src/components/icons/GitHubIcon.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function CreateGitHubIcon() {
    const parser = new DOMParser();
    return parser.parseFromString(`<svg class="DEV-WIDGET-GITHUB-ICON" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M49.9998 7.88391C26.142 7.88391 6.81836 27.2076 6.81836 51.0653C6.81836 70.1731 19.179 86.3122 36.3437 92.0337C38.5027 92.4115 39.3124 91.1161 39.3124 89.9826C39.3124 88.957 39.2584 85.5565 39.2584 81.94C28.4091 83.9372 25.6023 79.2952 24.7386 76.8662C24.2529 75.6248 22.1478 71.7924 20.3126 70.7669C18.8012 69.9572 16.6421 67.9601 20.2586 67.9061C23.6591 67.8521 26.0881 71.0367 26.8977 72.3322C30.784 78.8634 36.9914 77.0282 39.4743 75.8946C39.8521 73.0879 40.9857 71.1987 42.2271 70.1191C32.6193 69.0396 22.5796 65.3152 22.5796 48.7983C22.5796 44.1023 24.2529 40.216 27.0057 37.1933C26.5739 36.1138 25.0625 31.6877 27.4375 25.7502C27.4375 25.7502 31.0539 24.6167 39.3124 30.1763C42.7669 29.2047 46.4373 28.7189 50.1077 28.7189C53.7782 28.7189 57.4486 29.2047 60.9031 30.1763C69.1615 24.5627 72.778 25.7502 72.778 25.7502C75.153 31.6877 73.6416 36.1138 73.2098 37.1933C75.9626 40.216 77.6359 44.0483 77.6359 48.7983C77.6359 65.3692 67.5422 69.0396 57.9344 70.1191C59.4997 71.4685 60.8491 74.0594 60.8491 78.1077C60.8491 83.8832 60.7951 88.5252 60.7951 89.9826C60.7951 91.1161 61.6048 92.4655 63.7639 92.0337C80.8205 86.3122 93.1812 70.1191 93.1812 51.0653C93.1812 27.2076 73.8575 7.88391 49.9998 7.88391Z"/>
</svg>`, 'text/html').querySelector('svg');
}
exports.default = CreateGitHubIcon;


/***/ }),

/***/ "./src/components/icons/HelpIcon.ts":
/*!******************************************!*\
  !*** ./src/components/icons/HelpIcon.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function CreateHelpIcon() {
    const parser = new DOMParser();
    return parser.parseFromString(`<svg class="DEV-WIDGET-HELP-ICON" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
<circle r="45" cx="50" cy="50"/>
<path d="M45.547 60.4363C45.5939 57.6466 45.9104 55.4429 46.4965 53.8252C47.0826 52.2076 48.2782 50.4142 50.0834 48.4449L54.6901 43.6976C56.6593 41.4704 57.644 39.0792 57.644 36.5238C57.644 34.0622 56.9993 32.1399 55.7099 30.7567C54.4205 29.3501 52.545 28.6468 50.0834 28.6468C47.6921 28.6468 45.7698 29.2797 44.3162 30.5457C42.8627 31.8117 42.136 33.5113 42.136 35.6447H35.6304C35.6773 31.8468 37.0253 28.7874 39.6744 26.4665C42.347 24.1221 45.8166 22.95 50.0834 22.95C54.5142 22.95 57.9605 24.1456 60.422 26.5368C62.9071 28.9046 64.1496 32.1633 64.1496 36.3128C64.1496 40.4155 62.2506 44.4595 58.4528 48.4449L54.6197 52.2428C52.9083 54.1417 52.0526 56.8729 52.0526 60.4363H45.547ZM45.2657 71.5838C45.2657 70.5288 45.5822 69.6497 46.2152 68.9464C46.8716 68.2196 47.8328 67.8563 49.0987 67.8563C50.3647 67.8563 51.3259 68.2196 51.9823 68.9464C52.6387 69.6497 52.967 70.5288 52.967 71.5838C52.967 72.6388 52.6387 73.5179 51.9823 74.2212C51.3259 74.9011 50.3647 75.241 49.0987 75.241C47.8328 75.241 46.8716 74.9011 46.2152 74.2212C45.5822 73.5179 45.2657 72.6388 45.2657 71.5838Z"/>
</svg>`, 'text/html').querySelector('svg');
}
exports.default = CreateHelpIcon;


/***/ }),

/***/ "./src/components/icons/MinusIcon.ts":
/*!*******************************************!*\
  !*** ./src/components/icons/MinusIcon.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function CreateMinusIcon() {
    const parser = new DOMParser();
    return parser.parseFromString(`<svg class="DEV-WIDGET-MINUS-ICON" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="45"/>
    <line x1="25" y1="50" x2="75" y2="50"/>
</svg>`, 'text/html').querySelector('svg');
}
exports.default = CreateMinusIcon;


/***/ }),

/***/ "./src/components/icons/PlusIcon.ts":
/*!******************************************!*\
  !*** ./src/components/icons/PlusIcon.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function CreatePlusIcon() {
    const parser = new DOMParser();
    return parser.parseFromString(`<svg class="DEV-WIDGET-PLUS-ICON" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="45"/>
    <line x1="50" y1="25" x2="50" y2="75"/>
    <line x1="25" y1="50" x2="75" y2="50"/>
</svg>`, 'text/html').querySelector('svg');
}
exports.default = CreatePlusIcon;


/***/ }),

/***/ "./src/components/icons/SettingsIcon.ts":
/*!**********************************************!*\
  !*** ./src/components/icons/SettingsIcon.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function CreateSettingsIcon() {
    const parser = new DOMParser();
    return parser.parseFromString(`<svg class="DEV-WIDGET-SETTINGS-ICON" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
<path d="M57.5606 39.5256L58.2225 33.1978C58.2392 33.0407 58.2247 32.8818 58.1799 32.7302C58.1352 32.5786 58.0609 32.4374 57.9615 32.3145C57.862 32.1917 57.7393 32.0897 57.6004 32.0144C57.4615 31.939 57.309 31.8918 57.1518 31.8755L53.4805 31.4861C53.2211 31.4593 52.9775 31.3486 52.7867 31.1709C52.5958 30.9932 52.4681 30.758 52.4229 30.5012C52.1682 29.0534 51.7471 27.6399 51.168 26.2887C51.0647 26.0487 51.0427 25.7815 51.1052 25.5278C51.1678 25.2741 51.3115 25.0478 51.5145 24.8833L54.3838 22.5578C54.6304 22.3571 54.7874 22.0669 54.8205 21.7507C54.8536 21.4345 54.76 21.1181 54.5603 20.8707L50.5568 15.9225C50.3563 15.6757 50.0662 15.5184 49.75 15.4851C49.4338 15.4517 49.1172 15.5451 48.8697 15.7447L45.9952 18.0702C45.7925 18.2347 45.5418 18.3286 45.2809 18.3377C45.02 18.3469 44.7633 18.2707 44.5496 18.1208C43.3444 17.2727 42.0449 16.5672 40.6771 16.0185C40.4353 15.9208 40.2318 15.747 40.0974 15.5234C39.9631 15.2998 39.9051 15.0386 39.9322 14.7792L40.3216 11.1079C40.3546 10.7905 40.2602 10.4731 40.0592 10.2253C39.8582 9.97759 39.567 9.81984 39.2496 9.78679L32.918 9.12365C32.6003 9.09062 32.2826 9.18513 32.0346 9.3864C31.7866 9.58766 31.6287 9.8792 31.5956 10.1969L31.2063 13.8682C31.1796 14.1258 31.0702 14.3679 30.8946 14.5583C30.7189 14.7487 30.4864 14.8772 30.2317 14.9245C28.7793 15.1775 27.3613 15.5987 26.0063 16.1794C25.7661 16.2816 25.4991 16.3029 25.2458 16.2399C24.9925 16.1769 24.7665 16.0331 24.6022 15.8303L22.2727 12.9597C22.0717 12.7137 21.7815 12.5571 21.4656 12.5241C21.1496 12.491 20.8333 12.5842 20.5857 12.7832L15.6374 16.7893C15.3908 16.99 15.2338 17.2802 15.2007 17.5964C15.1676 17.9126 15.2612 18.229 15.4609 18.4764L17.7865 21.3574C17.9508 21.5601 18.0445 21.8109 18.0537 22.0717C18.0628 22.3325 17.9868 22.5892 17.8371 22.803C16.9878 24.0082 16.2818 25.3082 15.7335 26.6767C15.6359 26.9186 15.4621 27.1221 15.2384 27.2562C15.0148 27.3904 14.7535 27.448 14.4941 27.4203L10.8229 27.031C10.6655 27.0145 10.5064 27.0292 10.3548 27.0743C10.2031 27.1194 10.0619 27.1941 9.93914 27.2939C9.81639 27.3937 9.71457 27.5168 9.63952 27.6561C9.56446 27.7954 9.51765 27.9481 9.50177 28.1055L8.83863 34.4333C8.82209 34.5905 8.83671 34.7495 8.88164 34.901C8.92657 35.0526 9.00094 35.1938 9.1005 35.3167C9.20005 35.4395 9.32283 35.5415 9.46183 35.6168C9.60083 35.6921 9.75331 35.7393 9.91056 35.7557L13.5818 36.145C13.8413 36.1718 14.0849 36.2825 14.2757 36.4602C14.4666 36.638 14.5943 36.8731 14.6395 37.13C14.8936 38.5779 15.3147 39.9915 15.8944 41.3424C15.997 41.5825 16.0185 41.8496 15.9555 42.1031C15.8925 42.3565 15.7485 42.5824 15.5453 42.7465L12.676 45.0721C12.4295 45.2727 12.2725 45.5628 12.2391 45.8789C12.2058 46.195 12.299 46.5115 12.4982 46.7591L16.5043 51.7022C16.705 51.9487 16.9951 52.1057 17.3112 52.1391C17.6273 52.1724 17.9437 52.0792 18.1914 51.88L21.0607 49.5544C21.2634 49.39 21.5141 49.296 21.775 49.2869C22.0359 49.2778 22.2926 49.3539 22.5063 49.5038C23.712 50.3519 25.0119 51.0574 26.3801 51.6061C26.6218 51.7039 26.8251 51.8778 26.9593 52.1014C27.0934 52.325 27.1511 52.5862 27.1237 52.8455L26.7343 56.5168C26.7178 56.6738 26.7324 56.8326 26.7772 56.984C26.8221 57.1354 26.8964 57.2765 26.9958 57.3992C27.0952 57.5219 27.2179 57.6238 27.3567 57.6991C27.4956 57.7743 27.6479 57.8215 27.805 57.8378L34.134 58.501C34.2916 58.519 34.4511 58.5057 34.6035 58.4617C34.7559 58.4177 34.8981 58.3441 35.0219 58.2449C35.1456 58.1457 35.2486 58.0231 35.3247 57.8839C35.4008 57.7448 35.4487 57.592 35.4655 57.4343L35.8548 53.763C35.8812 53.5034 35.9917 53.2596 36.1695 53.0686C36.3474 52.8777 36.5827 52.7501 36.8398 52.7053C38.292 52.4513 39.71 52.0297 41.0652 51.4491C41.3054 51.3469 41.5723 51.3257 41.8257 51.3887C42.079 51.4516 42.3049 51.5954 42.4693 51.7982L44.7948 54.6688C44.9957 54.9151 45.2859 55.0719 45.602 55.105C45.9181 55.138 46.2344 55.0447 46.4819 54.8453L51.4262 50.8392C51.6723 50.6381 51.8288 50.348 51.8619 50.032C51.895 49.716 51.8018 49.3998 51.6027 49.1521L49.2772 46.2829C49.1127 46.0802 49.0188 45.8294 49.0097 45.5685C49.0005 45.3076 49.0767 45.0509 49.2266 44.8372C50.0749 43.6314 50.7808 42.3315 51.3302 40.9635C51.4276 40.7217 51.6011 40.5183 51.8246 40.3841C52.048 40.2499 52.3091 40.1922 52.5682 40.2199L56.2395 40.6092C56.3975 40.6255 56.5572 40.6103 56.7094 40.5646C56.8615 40.5188 57.003 40.4434 57.1259 40.3427C57.2487 40.2419 57.3503 40.1178 57.425 39.9776C57.4996 39.8374 57.5457 39.6837 57.5606 39.5256V39.5256ZM32.6974 41.82C31.115 41.6538 29.6173 41.0221 28.3938 40.0049C27.1703 38.9876 26.2759 37.6305 25.8237 36.105C25.3714 34.5794 25.3816 32.9541 25.853 31.4344C26.3244 29.9146 27.2358 28.5688 28.472 27.567C29.7082 26.5652 31.2136 25.9525 32.798 25.8062C34.3824 25.6599 35.9746 25.9867 37.3733 26.7452C38.7721 27.5037 39.9145 28.6599 40.6561 30.0676C41.3978 31.4753 41.7054 33.0714 41.5401 34.6539C41.4303 35.7052 41.1145 36.7245 40.6106 37.6536C40.1067 38.5828 39.4247 39.4036 38.6035 40.069C37.7823 40.7345 36.838 41.2317 35.8247 41.5321C34.8113 41.8325 33.7486 41.9304 32.6974 41.82V41.82Z"/>
<path d="M91.1339 50.3487L89.4469 44.8151C89.4168 44.7159 89.3674 44.6236 89.3016 44.5435C89.2358 44.4634 89.1548 44.397 89.0633 44.3482C88.9719 44.2994 88.8717 44.2691 88.7685 44.259C88.6653 44.249 88.5611 44.2593 88.4619 44.2896L85.1254 45.3057C84.9596 45.3556 84.782 45.3498 84.6198 45.2891C84.4575 45.2284 84.3197 45.1161 84.2274 44.9696C83.5121 43.8362 82.6571 42.7972 81.6826 41.8771C81.5561 41.7585 81.4722 41.6017 81.4438 41.4307C81.4154 41.2597 81.4442 41.0841 81.5255 40.931L83.1672 37.8515C83.216 37.7599 83.2463 37.6596 83.2564 37.5563C83.2665 37.453 83.2561 37.3487 83.2258 37.2494C83.1956 37.1501 83.1461 37.0577 83.0801 36.9776C83.0141 36.8974 82.9331 36.831 82.8414 36.7822L77.7375 34.057C77.5524 33.9587 77.3359 33.9378 77.1355 33.9988C76.935 34.0599 76.767 34.1979 76.6681 34.3827L75.0265 37.4622C74.9448 37.6152 74.815 37.737 74.6571 37.8088C74.4992 37.8805 74.3221 37.8983 74.1531 37.8593C72.8461 37.5638 71.5073 37.433 70.1678 37.47C69.9948 37.4753 69.8248 37.4235 69.6841 37.3227C69.5434 37.2218 69.4398 37.0775 69.3892 36.912L68.373 33.5755C68.3119 33.375 68.1737 33.207 67.9887 33.1085C67.8038 33.0099 67.5873 32.9889 67.3868 33.0499L61.8532 34.737C61.6528 34.7981 61.4848 34.9363 61.3862 35.1213C61.2877 35.3062 61.2666 35.5228 61.3277 35.7232L62.3438 39.0597C62.3942 39.2255 62.3885 39.4033 62.3278 39.5656C62.267 39.728 62.1545 39.8657 62.0077 39.9577C60.8728 40.6756 59.8325 41.5332 58.9113 42.5104C58.7925 42.6369 58.6354 42.7209 58.4642 42.7493C58.293 42.7776 58.1172 42.7489 57.9639 42.6674L54.8883 41.0193C54.7968 40.9705 54.6966 40.9402 54.5934 40.9301C54.4902 40.9201 54.386 40.9305 54.2868 40.9607C54.1876 40.991 54.0953 41.0405 54.0153 41.1064C53.9352 41.1724 53.869 41.2534 53.8203 41.345L51.0951 46.4503C51.0462 46.5418 51.016 46.642 51.0059 46.7452C50.9959 46.8484 51.0063 46.9526 51.0365 47.0518C51.0668 47.151 51.1163 47.2433 51.1822 47.3233C51.2482 47.4034 51.3292 47.4696 51.4208 47.5183L54.499 49.1599C54.6535 49.2412 54.7768 49.3713 54.8496 49.53C54.9224 49.6887 54.9406 49.8671 54.9013 50.0372C54.6052 51.3446 54.4744 52.6839 54.512 54.0238C54.5175 54.1969 54.4658 54.367 54.3649 54.5077C54.2641 54.6485 54.1196 54.7521 53.954 54.8025L50.6175 55.8186C50.417 55.8797 50.249 56.0179 50.1505 56.2029C50.0519 56.3879 50.0308 56.6044 50.0919 56.8049L51.779 62.3384C51.8091 62.4376 51.8585 62.5299 51.9243 62.61C51.9901 62.6902 52.071 62.7565 52.1625 62.8053C52.254 62.8541 52.3542 62.8845 52.4574 62.8945C52.5606 62.9046 52.6648 62.8942 52.7639 62.864L56.0978 61.8466C56.2638 61.7965 56.4417 61.8023 56.6041 61.863C56.7666 61.9237 56.9046 62.036 56.9971 62.1827C57.7122 63.3159 58.5672 64.3545 59.542 65.2739C59.6684 65.3927 59.7522 65.5498 59.7805 65.721C59.8089 65.8922 59.7803 66.0679 59.699 66.2212L58.0574 69.3007C58.0085 69.3923 57.9782 69.4926 57.9682 69.596C57.9581 69.6993 57.9685 69.8036 57.9987 69.9029C58.029 70.0022 58.0785 70.0945 58.1445 70.1747C58.2104 70.2549 58.2915 70.3212 58.3831 70.37L63.4871 73.0953C63.6719 73.194 63.8884 73.2153 64.0889 73.1545C64.2895 73.0936 64.4576 72.9556 64.5564 72.7709L66.198 69.6913C66.2799 69.5384 66.4097 69.4166 66.5675 69.3446C66.7252 69.2727 66.9023 69.2545 67.0714 69.2929C68.3783 69.5891 69.7172 69.7199 71.0568 69.6823C71.2298 69.677 71.3997 69.7287 71.5404 69.8296C71.6812 69.9304 71.7848 70.0747 71.8354 70.2403L72.8515 73.5767C72.9137 73.7759 73.0522 73.9424 73.2368 74.0396C73.4214 74.1369 73.637 74.1571 73.8365 74.0958L79.3713 72.4088C79.5706 72.3463 79.737 72.2075 79.8343 72.0227C79.9316 71.8379 79.9517 71.6221 79.8904 71.4225L78.8743 68.086C78.8241 67.9202 78.8298 67.7425 78.8906 67.5802C78.9513 67.418 79.0637 67.2802 79.2104 67.188C80.3438 66.4721 81.3827 65.6167 82.3029 64.6419C82.4218 64.5155 82.5789 64.4317 82.75 64.4033C82.9212 64.3749 83.0969 64.4036 83.2502 64.4848L86.3362 66.1291C86.4276 66.1779 86.5278 66.2083 86.631 66.2184C86.7341 66.2286 86.8383 66.2183 86.9375 66.1882C87.0366 66.158 87.1289 66.1086 87.209 66.0428C87.2891 65.977 87.3555 65.8961 87.4043 65.8046L90.1295 60.6994C90.1783 60.6079 90.2086 60.5076 90.2186 60.4044C90.2287 60.3012 90.2183 60.197 90.188 60.0978C90.1578 59.9986 90.1083 59.9064 90.0423 59.8263C89.9764 59.7463 89.8953 59.68 89.8038 59.6313L86.7242 57.9897C86.5713 57.908 86.4495 57.7782 86.3777 57.6203C86.3059 57.4624 86.2881 57.2853 86.3271 57.1163C86.6239 55.8091 86.7547 54.4697 86.7165 53.1297C86.7121 52.9567 86.7644 52.787 86.8654 52.6465C86.9663 52.5059 87.1105 52.4022 87.2758 52.3511L90.6084 51.3349C90.8088 51.2738 90.9768 51.1356 91.0754 50.9506C91.1739 50.7657 91.195 50.5492 91.1339 50.3487V50.3487ZM72.797 59.9726C71.5139 60.4096 70.129 60.4507 68.8222 60.0904C67.5155 59.7302 66.3472 58.9854 65.4692 57.9527C64.5912 56.92 64.044 55.6472 63.8986 54.2995C63.7533 52.9518 64.0166 51.5916 64.6542 50.3954C65.2919 49.1993 66.2745 48.2225 67.4744 47.592C68.6743 46.9615 70.0361 46.7063 71.3829 46.8597C72.7297 47.013 73.9993 47.5678 75.0267 48.452C76.0541 49.3361 76.792 50.5088 77.1444 51.8177C77.5903 53.4749 77.3892 55.2397 76.5818 56.7541C75.7745 58.2685 74.4214 59.4191 72.797 59.9726V59.9726Z"/>
<path d="M59.8618 78.6547L60.3082 74.393C60.3275 74.2092 60.2729 74.0253 60.1566 73.8817C60.0403 73.7381 59.8717 73.6466 59.6879 73.6273L57.1651 73.3678C57.0138 73.3517 56.8718 73.2866 56.761 73.1823C56.6502 73.078 56.5765 72.9403 56.5513 72.7903C56.3856 71.8128 56.1023 70.859 55.7078 69.9495C55.6469 69.8101 55.6334 69.6546 55.6693 69.5067C55.7051 69.3588 55.7884 69.2268 55.9063 69.1307L57.8737 67.528C58.0174 67.4116 58.1091 67.2428 58.1285 67.0589C58.148 66.875 58.0937 66.6908 57.9775 66.5469L55.2782 63.2182C55.2207 63.147 55.1497 63.0879 55.0693 63.0442C54.9889 63.0005 54.9006 62.9731 54.8096 62.9636C54.7186 62.9541 54.6266 62.9626 54.5389 62.9887C54.4511 63.0148 54.3694 63.058 54.2984 63.1157L52.3272 64.7132C52.2086 64.809 52.0619 64.8633 51.9096 64.8677C51.7572 64.8722 51.6076 64.8266 51.4836 64.7379C50.6761 64.1632 49.802 63.6882 48.8804 63.3233C48.7386 63.2681 48.6189 63.1679 48.5396 63.038C48.4604 62.9081 48.426 62.7557 48.4418 62.6044L48.7013 60.0816C48.7202 59.8977 48.6653 59.7138 48.5488 59.5702C48.4323 59.4267 48.2636 59.3352 48.0797 59.3159L43.8179 58.8695C43.6342 58.8503 43.4503 58.9048 43.3067 59.0211C43.1631 59.1375 43.0716 59.306 43.0523 59.4898L42.7927 62.0126C42.7767 62.164 42.7116 62.3059 42.6073 62.4167C42.503 62.5276 42.3653 62.6012 42.2153 62.6264C41.2382 62.792 40.2848 63.0752 39.3758 63.47C39.2361 63.531 39.0802 63.5445 38.932 63.5084C38.7839 63.4723 38.6517 63.3886 38.5557 63.2701L36.9581 61.2989C36.8416 61.1557 36.673 61.0645 36.4894 61.0453C36.3058 61.0261 36.122 61.0804 35.9784 61.1963L32.6484 63.8956C32.5772 63.9531 32.5181 64.0241 32.4744 64.1046C32.4307 64.185 32.4033 64.2732 32.3938 64.3642C32.3843 64.4553 32.3928 64.5473 32.4189 64.635C32.445 64.7227 32.4881 64.8044 32.5459 64.8754L34.1434 66.8467C34.2392 66.9652 34.2934 67.1119 34.2979 67.2643C34.3023 67.4166 34.2567 67.5662 34.168 67.6902C33.5938 68.4981 33.1189 69.3721 32.7535 70.2934C32.6981 70.4351 32.5978 70.5547 32.468 70.6339C32.3381 70.7131 32.1859 70.7476 32.0346 70.7321L29.5118 70.4725C29.328 70.4533 29.1441 70.5078 29.0005 70.6241C28.8569 70.7405 28.7654 70.9091 28.7461 71.0928L28.2997 75.3559C28.2804 75.5397 28.335 75.7236 28.4513 75.8672C28.5676 76.0107 28.7362 76.1022 28.92 76.1215L31.4428 76.3811C31.5942 76.3976 31.736 76.4631 31.8468 76.5675C31.9576 76.672 32.0312 76.8097 32.0566 76.9599C32.2223 77.9369 32.5056 78.8903 32.9001 79.7993C32.9611 79.939 32.9746 80.0947 32.9388 80.2428C32.9029 80.3909 32.8196 80.5232 32.7016 80.6195L30.7342 82.2209C30.5906 82.3371 30.4989 82.5055 30.4795 82.6893C30.46 82.873 30.5143 83.0569 30.6304 83.2007L33.3297 86.5306C33.4461 86.6741 33.6146 86.7655 33.7984 86.7847C33.9821 86.8039 34.1659 86.7494 34.3095 86.6332L36.2807 85.0357C36.3993 84.9399 36.546 84.8856 36.6983 84.8811C36.8507 84.8767 37.0003 84.9223 37.1243 85.011C37.9319 85.5853 38.806 86.0598 39.7275 86.4242C39.8691 86.48 39.9887 86.5806 40.0678 86.7106C40.147 86.8407 40.1815 86.993 40.1661 87.1445L39.9066 89.6673C39.8873 89.851 39.9419 90.0349 40.0582 90.1785C40.1745 90.3221 40.3431 90.4136 40.5269 90.4329L44.7899 90.8793C44.9739 90.8982 45.1578 90.8434 45.3013 90.7268C45.4448 90.6103 45.5363 90.4416 45.5556 90.2577L45.8152 87.7362C45.831 87.5848 45.896 87.4428 46.0004 87.3319C46.1047 87.221 46.2425 87.1474 46.3926 87.1224C47.3696 86.9563 48.3229 86.673 49.2321 86.2789C49.3717 86.218 49.5275 86.2044 49.6756 86.2402C49.8236 86.2761 49.9559 86.3594 50.0522 86.4774L51.6446 88.45C51.7021 88.5212 51.7731 88.5803 51.8535 88.624C51.9339 88.6677 52.0222 88.6951 52.1132 88.7046C52.2042 88.7141 52.2962 88.7056 52.3839 88.6795C52.4716 88.6534 52.5533 88.6102 52.6243 88.5525L55.9595 85.8545C56.0307 85.797 56.0898 85.726 56.1335 85.6456C56.1772 85.5652 56.2046 85.4769 56.2141 85.3859C56.2236 85.2949 56.2151 85.2029 56.189 85.1152C56.1629 85.0274 56.1198 84.9457 56.062 84.8747L54.4645 82.9035C54.3687 82.7849 54.3145 82.6382 54.31 82.4859C54.3056 82.3335 54.3512 82.1839 54.4399 82.06C55.0139 81.2522 55.4884 80.3781 55.8531 79.4567C55.9087 79.3149 56.0093 79.1953 56.1393 79.1161C56.2694 79.0369 56.4219 79.0024 56.5733 79.0181L59.0961 79.2776C59.1873 79.2871 59.2795 79.2786 59.3674 79.2524C59.4553 79.2262 59.5371 79.183 59.6082 79.1251C59.6794 79.0672 59.7384 78.9959 59.7819 78.9152C59.8254 78.8344 59.8526 78.7459 59.8618 78.6547ZM44.0295 80.0822C42.9768 80.0271 41.9655 79.6541 41.1291 79.0125C40.2927 78.3709 39.6705 77.4909 39.3445 76.4884C39.0186 75.4859 39.0042 74.4082 39.3032 73.3973C39.6023 72.3865 40.2008 71.4901 41.0198 70.8264C41.8387 70.1627 42.8397 69.7629 43.8905 69.6796C44.9414 69.5964 45.9928 69.8338 46.906 70.3603C47.8192 70.8869 48.5513 71.6779 49.0057 72.6291C49.4601 73.5802 49.6155 74.6468 49.4514 75.6881C49.2496 76.9596 48.5845 78.1114 47.5842 78.9217C46.5838 79.732 45.319 80.1436 44.0334 80.077L44.0295 80.0822Z"/>
</svg>`, 'text/html').querySelector('svg');
}
exports.default = CreateSettingsIcon;


/***/ }),

/***/ "./src/components/storage/Storage.ts":
/*!*******************************************!*\
  !*** ./src/components/storage/Storage.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Storage {
    constructor() {
        this.SaveData = (name, data) => {
            localStorage.setItem(name, JSON.stringify(data));
        };
    }
    // Get's data by name from localstorage
    GetData(i) {
        return localStorage.getItem(i);
    }
}
exports.default = Storage;


/***/ }),

/***/ "./src/components/storage/TemplateStorage.ts":
/*!***************************************************!*\
  !*** ./src/components/storage/TemplateStorage.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Storage_1 = __webpack_require__(/*! ./Storage */ "./src/components/storage/Storage.ts");
class TemplateStorage extends Storage_1.default {
    constructor() {
        super();
        this.templateName = ['DEV-TEMPLATE-DATA' + window.location.pathname.replace(/\//g, '-'), window.location.pathname.replace(/\//g, ' ')];
        // Attempt to load the storage data
        try {
            const templateData = this.GetData(this.templateName[0]);
            if (!templateData)
                throw new Error();
        }
        catch (error) {
            this.SaveData(this.templateName[0], {});
        }
    }
    GetTemplateData() {
        return JSON.parse(localStorage.getItem(this.templateName[0]));
    }
    GetAssocationData(val) {
        return JSON.parse(localStorage.getItem(val));
    }
    SaveTemplateData(data) {
        this.SaveData(this.templateName[0], data);
    }
}
exports.default = TemplateStorage;


/***/ }),

/***/ "./src/components/storage/WidgetStorage.ts":
/*!*************************************************!*\
  !*** ./src/components/storage/WidgetStorage.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Storage_1 = __webpack_require__(/*! ./Storage */ "./src/components/storage/Storage.ts");
class WidgetStorage extends Storage_1.default {
    constructor() {
        super();
        this.defaultData = {
            display: 'open',
            invis: false,
            position: { x: 10, y: 10 },
            backgroundColor: 'rgba(255,255,255,1)',
            customCommand: '',
            user: { runUpdate: false, autoSave: false, titleSafe: 0 },
            associations: []
        };
        // Saves a change to the widget's settings
        this.SetWidgetSetting = (key, value) => {
            if (this.widgetSettings[key] === undefined) {
                return;
            }
            this.widgetSettings[key] = value;
            this.SaveWidgetData();
        };
        this.ResetWidgetData = () => {
            this.widgetSettings = this.defaultData;
            this.SaveWidgetData();
        };
        try {
            this.widgetSettings = JSON.parse(this.GetData('DEV-WIDGET-SETTINGS'));
            console.log(this.widgetSettings);
            if (!this.widgetSettings)
                throw new Error();
        }
        catch (error) {
            this.widgetSettings = this.defaultData;
            if (!window.caspar) {
                this.SaveWidgetData();
            }
        }
    }
    static GetWidgetSettings() {
        return JSON.parse(localStorage.getItem('DEV-WIDGET-SETTINGS'));
    }
    // Saves data to localstorage
    SaveWidgetData() {
        this.SaveData('DEV-WIDGET-SETTINGS', this.widgetSettings);
    }
}
exports.WidgetStorage = WidgetStorage;


/***/ }),

/***/ "./src/components/ui/Element.ts":
/*!**************************************!*\
  !*** ./src/components/ui/Element.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Create a new DOM element with a few helper funtions
class CustomElement {
    constructor(props) {
        // List of events on the element
        this.eventListeners = [];
        // Create the element
        this.elem = document.createElement(props.type);
    }
    static Create(e) {
        return document.createElement(e);
    }
    ToggleHide(dsp) {
        if (this.elem.style.display === 'none') {
            dsp ? this.elem.style.display = dsp : this.elem.style.display = 'block';
        }
        else {
            this.elem.style.display = 'none';
        }
    }
    // Toggles the elements class
    // @param {string || string[]} classes - The classes to toggle 
    // @returns {Element} The element class
    modifyClass(classes) {
        typeof classes === 'string'
            ? this.elem.classList.toggle(classes)
            : classes.forEach(cls => this.elem.classList.toggle(cls));
        return this;
    }
    hasClass(cls) {
        return this.elem.classList.contains(cls);
    }
    // Adds or removes an event listener
    // @param {string} type - The event type
    // @param {function} fn - The function to attach to the event
    // @returns {Element} The element class
    modifyEventListener(type, fn) {
        if (this.eventListeners.includes(type)) {
            this.elem.removeEventListener(type, fn);
            this.eventListeners.splice(this.eventListeners.findIndex((t) => t === type), 1);
        }
        else {
            this.elem.addEventListener(type, fn);
            this.eventListeners.push(type);
        }
        return this;
    }
    // Appends a new HTML Element to the element
    // @todo - Figure out how to make this anonymous to all HTML elements
    append(elem) {
        if (Array.isArray(elem)) {
            elem.forEach(e => this.elem.appendChild(e));
        }
        else {
            this.elem.appendChild(elem);
        }
    }
}
exports.default = CustomElement;


/***/ }),

/***/ "./src/components/ui/Paragraph.ts":
/*!****************************************!*\
  !*** ./src/components/ui/Paragraph.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Element_1 = __webpack_require__(/*! ./Element */ "./src/components/ui/Element.ts");
class Paragraph extends Element_1.default {
    constructor(props) {
        super({ type: 'p' });
        this.elem.textContent = props.text;
    }
}
exports.default = Paragraph;


/***/ }),

/***/ "./src/components/ui/Popup.ts":
/*!************************************!*\
  !*** ./src/components/ui/Popup.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Element_1 = __webpack_require__(/*! ./Element */ "./src/components/ui/Element.ts");
const Button_1 = __webpack_require__(/*! ../form/Button */ "./src/components/form/Button.ts");
const PlusIcon_1 = __webpack_require__(/*! ../icons/PlusIcon */ "./src/components/icons/PlusIcon.ts");
const ColorFunctions_1 = __webpack_require__(/*! ../../helpers/ColorFunctions */ "./src/helpers/ColorFunctions.ts");
class Popup extends Element_1.default {
    constructor() {
        super({ type: 'div' });
        this.modifyClass('DEV-WIDGET-POPUP');
        const minusIcon = PlusIcon_1.default();
        const closeButton = new Button_1.default();
        minusIcon.classList.remove('DEV-WIDGET-PLUS-ICON');
        minusIcon.classList.add('DEV-WIDGET-CLOSE-ICON');
        closeButton.modifyClass('DEV-WIDGET-CLOSE-BUTTON');
        closeButton.elem.appendChild(minusIcon);
        closeButton.modifyEventListener('click', () => this.Close());
        this.body = new Element_1.default({ type: 'div' })
            .modifyClass('DEV-WIDGET-POPUP-BACKGROUND').elem;
        const wrapper = new Element_1.default({ type: 'div' });
        this.elem.appendChild(wrapper.elem);
        wrapper.elem.appendChild(closeButton.elem);
        wrapper.elem.appendChild(this.body);
        this.Open = this.Open.bind(this);
        this.Close = this.Close.bind(this);
    }
    Open() {
        this.modifyClass('DEV-WIDGET-POPUP-OPEN');
        const widget = document.querySelector('.DEV-WIDGET');
        const color = document.querySelector('body').style.backgroundColor;
        const logger = widget.querySelector('.DEV-WIDGET-LOGGER p');
        const bkgColor = ColorFunctions_1.ClampRGB(ColorFunctions_1.InvertColor(ColorFunctions_1.CheckRGBValue(color))).join(',');
        const elems = this.elem.querySelectorAll('.DEV-WIDGET-CLOSE-ICON circle, .DEV-WIDGET-CLOSE-ICON line');
        widget.style.position = 'unset';
        logger.style.display = 'none';
        elems.forEach(e => e.style.stroke = 'rgb(' + bkgColor + ')');
    }
    Close() {
        this.modifyClass('DEV-WIDGET-POPUP-OPEN');
        const widget = document.querySelector('.DEV-WIDGET');
        const logger = widget.querySelector('.DEV-WIDGET-LOGGER p');
        widget.style.position = '';
        logger.style.display = '';
    }
}
exports.default = Popup;


/***/ }),

/***/ "./src/helpers/ColorFunctions.ts":
/*!***************************************!*\
  !*** ./src/helpers/ColorFunctions.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function ClampRGB(rgb) {
    if (rgb.length > 3)
        rgb = [rgb[0], rgb[1], rgb[2]];
    const sum = rgb.reduce((acc, i) => {
        acc += (255 - i) > (255 / 2) ? 0 : 255;
        return acc;
    }, 0);
    return sum < (255 * 3) / 2 ? [0, 0, 0] : [255, 255, 255];
}
exports.ClampRGB = ClampRGB;
function CheckRGBValue(value) {
    const seperator = value.indexOf(',') !== -1 ? ',' : ' ';
    const raw = value.replace(/[rgb]|a|[\(\)]/gi, '')
        .split(seperator)
        .map(i => i.trim())
        .map(i => Number(i))
        .filter(i => !isNaN(i));
    if (raw.length < 3) {
        return [];
    }
    else if (raw.length === 3) {
        raw[3] = 1;
    }
    return raw;
}
exports.CheckRGBValue = CheckRGBValue;
function ConvertHEXtoRGB(value) {
    let raw;
    if (value.indexOf('#') === 0)
        value = value.substring(1);
    if (value.length === 3) {
        raw = value.split('').map(i => i + i).map(i => parseInt(i, 16));
    }
    else if (value.length === 6) {
        raw = value.match(/.{1,2}/g).map(i => parseInt(i, 16));
    }
    else {
        return [];
    }
    raw[3] = 1;
    return raw;
}
exports.ConvertHEXtoRGB = ConvertHEXtoRGB;
function InvertColor(color) {
    if (color.length > 3) {
        if (color[3] < .5)
            return [0, 0, 0];
        color = [color[0], color[1], color[2]];
    }
    let rgb = color.map(i => 255 - Number(i));
    if (!rgb.length)
        rgb = [255, 255, 255];
    return rgb;
}
exports.InvertColor = InvertColor;


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Widget_1 = __webpack_require__(/*! ./components/Widget */ "./src/components/Widget.ts");
const TemplateStorage_1 = __webpack_require__(/*! ./components/storage/TemplateStorage */ "./src/components/storage/TemplateStorage.ts");
// Main Widget Object to be used in external scripts
const _widget = (function () {
    const widget = new Widget_1.default();
    const storage = new TemplateStorage_1.default();
    const env = window.location.search.indexOf('debug=true') !== -1 ? true : false;
    if (!env) {
        const titleSafe = document.querySelector('.DEV-WIDGET-TITLE-SAFE');
        titleSafe.style.display = 'none';
        widget.ToggleHide();
    }
    document.querySelector('body').appendChild(widget.elem);
    return {
        applySettings: (obj) => widget.ApplyWidgetSettings(obj),
        storeTemplateData: (data) => {
            storage.SaveTemplateData(JSON.parse(data));
            window.location.reload();
        },
        getTemplateData: () => JSON.stringify(storage.GetTemplateData())
    };
})();
window._widget = _widget;


/***/ }),

/***/ "./src/scss/widget.scss":
/*!******************************!*\
  !*** ./src/scss/widget.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./widget.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/widget.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ })

/******/ });
//# sourceMappingURL=dev.js.map