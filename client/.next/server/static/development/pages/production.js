module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/delete.png":
/*!***************************!*\
  !*** ./assets/delete.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./assets/hamburger.png":
/*!******************************!*\
  !*** ./assets/hamburger.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./assets/images/logo.png":
/*!********************************!*\
  !*** ./assets/images/logo.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo-ffdbac7b96746c094cae5ea95d8642e3.png";

/***/ }),

/***/ "./assets/images/poland.png":
/*!**********************************!*\
  !*** ./assets/images/poland.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAALVBMVEUAAADw8PDXACDkeYzw8PDw8PDYAijaDjLw8PDw8vLtz9XbIULYACXYACf///++EbpZAAAACHRSTlMAAAAAYvr6YtN0kmwAAAABYktHRA5vvTBPAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAB3RJTUUH5AITCyo1TOC/zwAAAE9JREFUSMdjYBgFYCBIABBW4EIAMIQSAAwdBMCoglEFpCmYSQAwrCIAGHYTAAxnCACGuwTAqIJRBaQpSCMAGMoJAAYlAoDBmAAY6OpqsAAAv7u6TsMRylQAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDItMTlUMTE6NDI6NTMrMDA6MDCvSCorAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTAyLTE5VDExOjQyOjUzKzAwOjAw3hWSlwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII="

/***/ }),

/***/ "./assets/images/production/bt_tes sync \\.(png|jpe?g|svg)$":
/*!******************************************************************************!*\
  !*** ./assets/images/production/bt_tes sync nonrecursive \.(png|jpe?g|svg)$ ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./20161221_152308.jpg": "./assets/images/production/bt_tes/20161221_152308.jpg",
	"./20161221_152450.jpg": "./assets/images/production/bt_tes/20161221_152450.jpg",
	"./20170119_145630.jpg": "./assets/images/production/bt_tes/20170119_145630.jpg",
	"./20170119_145652.jpg": "./assets/images/production/bt_tes/20170119_145652.jpg",
	"./20170120_141338.jpg": "./assets/images/production/bt_tes/20170120_141338.jpg",
	"./20170120_141427.jpg": "./assets/images/production/bt_tes/20170120_141427.jpg",
	"./20170411_113316.jpg": "./assets/images/production/bt_tes/20170411_113316.jpg",
	"./20180507_123208.jpg": "./assets/images/production/bt_tes/20180507_123208.jpg"
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
webpackContext.id = "./assets/images/production/bt_tes sync \\.(png|jpe?g|svg)$";

/***/ }),

/***/ "./assets/images/production/bt_tes/20161221_152308.jpg":
/*!*************************************************************!*\
  !*** ./assets/images/production/bt_tes/20161221_152308.jpg ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/20161221_152308-5525ad6f316d7e09d857f4548e672891.jpg";

/***/ }),

/***/ "./assets/images/production/bt_tes/20161221_152450.jpg":
/*!*************************************************************!*\
  !*** ./assets/images/production/bt_tes/20161221_152450.jpg ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/20161221_152450-bea25b242a114540c5e553f1a881dcf2.jpg";

/***/ }),

/***/ "./assets/images/production/bt_tes/20170119_145630.jpg":
/*!*************************************************************!*\
  !*** ./assets/images/production/bt_tes/20170119_145630.jpg ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/20170119_145630-10000b33a805d4cdbe22b9f30a6e0761.jpg";

/***/ }),

/***/ "./assets/images/production/bt_tes/20170119_145652.jpg":
/*!*************************************************************!*\
  !*** ./assets/images/production/bt_tes/20170119_145652.jpg ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/20170119_145652-3fb8c1367ac81d655b6990978a6a4967.jpg";

/***/ }),

/***/ "./assets/images/production/bt_tes/20170120_141338.jpg":
/*!*************************************************************!*\
  !*** ./assets/images/production/bt_tes/20170120_141338.jpg ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/20170120_141338-69a8ab90b45030d23772a70af8792b7e.jpg";

/***/ }),

/***/ "./assets/images/production/bt_tes/20170120_141427.jpg":
/*!*************************************************************!*\
  !*** ./assets/images/production/bt_tes/20170120_141427.jpg ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/20170120_141427-1b27279ce808312b87562687f01d7fc9.jpg";

/***/ }),

/***/ "./assets/images/production/bt_tes/20170411_113316.jpg":
/*!*************************************************************!*\
  !*** ./assets/images/production/bt_tes/20170411_113316.jpg ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/20170411_113316-b70e2e0e535136e8f5b8d5db29c150f5.jpg";

/***/ }),

/***/ "./assets/images/production/bt_tes/20180507_123208.jpg":
/*!*************************************************************!*\
  !*** ./assets/images/production/bt_tes/20180507_123208.jpg ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/20180507_123208-681feadea82689cf2bff2f86ba079460.jpg";

/***/ }),

/***/ "./assets/images/production/diffrent sync \\.(png|jpe?g|svg)$":
/*!********************************************************************************!*\
  !*** ./assets/images/production/diffrent sync nonrecursive \.(png|jpe?g|svg)$ ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./20160502_094848.jpg": "./assets/images/production/diffrent/20160502_094848.jpg",
	"./20170601_152039.jpg": "./assets/images/production/diffrent/20170601_152039.jpg",
	"./20170601_152057.jpg": "./assets/images/production/diffrent/20170601_152057.jpg",
	"./20170601_201236.jpg": "./assets/images/production/diffrent/20170601_201236.jpg",
	"./20170601_201608.jpg": "./assets/images/production/diffrent/20170601_201608.jpg",
	"./20190301_150630.jpg": "./assets/images/production/diffrent/20190301_150630.jpg",
	"./20190301_150643.jpg": "./assets/images/production/diffrent/20190301_150643.jpg",
	"./20190301_150711.jpg": "./assets/images/production/diffrent/20190301_150711.jpg",
	"./20190802_195503.jpg": "./assets/images/production/diffrent/20190802_195503.jpg",
	"./20190802_195535.jpg": "./assets/images/production/diffrent/20190802_195535.jpg",
	"./20190802_195603.jpg": "./assets/images/production/diffrent/20190802_195603.jpg",
	"./20190802_195733.jpg": "./assets/images/production/diffrent/20190802_195733.jpg",
	"./20190802_195750.jpg": "./assets/images/production/diffrent/20190802_195750.jpg",
	"./20191017_133701.jpg": "./assets/images/production/diffrent/20191017_133701.jpg",
	"./20191017_162733.jpg": "./assets/images/production/diffrent/20191017_162733.jpg"
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
webpackContext.id = "./assets/images/production/diffrent sync \\.(png|jpe?g|svg)$";

/***/ }),

/***/ "./assets/images/production/diffrent/20160502_094848.jpg":
/*!***************************************************************!*\
  !*** ./assets/images/production/diffrent/20160502_094848.jpg ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/20160502_094848-6ad3e5fb2a89aaa01a9334073e580ca3.jpg";

/***/ }),

/***/ "./assets/images/production/diffrent/20170601_152039.jpg":
/*!***************************************************************!*\
  !*** ./assets/images/production/diffrent/20170601_152039.jpg ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/20170601_152039-9870a168c2d0ba8a8255bb86689d0870.jpg";

/***/ }),

/***/ "./assets/images/production/diffrent/20170601_152057.jpg":
/*!***************************************************************!*\
  !*** ./assets/images/production/diffrent/20170601_152057.jpg ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/20170601_152057-e1be96588d6c29e65d04323a18e5b6a3.jpg";

/***/ }),

/***/ "./assets/images/production/diffrent/20170601_201236.jpg":
/*!***************************************************************!*\
  !*** ./assets/images/production/diffrent/20170601_201236.jpg ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/20170601_201236-541ce9df5907478b67bde8caa54bfc1e.jpg";

/***/ }),

/***/ "./assets/images/production/diffrent/20170601_201608.jpg":
/*!***************************************************************!*\
  !*** ./assets/images/production/diffrent/20170601_201608.jpg ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/20170601_201608-b76ff3b2d8faaf8fae19a202dd97b5cc.jpg";

/***/ }),

/***/ "./assets/images/production/diffrent/20190301_150630.jpg":
/*!***************************************************************!*\
  !*** ./assets/images/production/diffrent/20190301_150630.jpg ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/20190301_150630-fb1b87ad323c6a4920321da6de61c074.jpg";

/***/ }),

/***/ "./assets/images/production/diffrent/20190301_150643.jpg":
/*!***************************************************************!*\
  !*** ./assets/images/production/diffrent/20190301_150643.jpg ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/20190301_150643-59297e2c2fee7b64183d9b168206d676.jpg";

/***/ }),

/***/ "./assets/images/production/diffrent/20190301_150711.jpg":
/*!***************************************************************!*\
  !*** ./assets/images/production/diffrent/20190301_150711.jpg ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/20190301_150711-22e67145a9cdecfc28de0488e750923b.jpg";

/***/ }),

/***/ "./assets/images/production/diffrent/20190802_195503.jpg":
/*!***************************************************************!*\
  !*** ./assets/images/production/diffrent/20190802_195503.jpg ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/20190802_195503-fdb641fac0b24b5b4b93933e44322595.jpg";

/***/ }),

/***/ "./assets/images/production/diffrent/20190802_195535.jpg":
/*!***************************************************************!*\
  !*** ./assets/images/production/diffrent/20190802_195535.jpg ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/20190802_195535-5c474e6c2f447ff39473c176ae7d79c0.jpg";

/***/ }),

/***/ "./assets/images/production/diffrent/20190802_195603.jpg":
/*!***************************************************************!*\
  !*** ./assets/images/production/diffrent/20190802_195603.jpg ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/20190802_195603-771bb0b0275178549e054e9cdc7dae7d.jpg";

/***/ }),

/***/ "./assets/images/production/diffrent/20190802_195733.jpg":
/*!***************************************************************!*\
  !*** ./assets/images/production/diffrent/20190802_195733.jpg ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/20190802_195733-206f4926053059cc1337568d1459c026.jpg";

/***/ }),

/***/ "./assets/images/production/diffrent/20190802_195750.jpg":
/*!***************************************************************!*\
  !*** ./assets/images/production/diffrent/20190802_195750.jpg ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/20190802_195750-9cc9b4d2b7ecfdb2c16b59a9c8935ed2.jpg";

/***/ }),

/***/ "./assets/images/production/diffrent/20191017_133701.jpg":
/*!***************************************************************!*\
  !*** ./assets/images/production/diffrent/20191017_133701.jpg ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/20191017_133701-1f1973b113a2de8d17a3d52a40dfa2ec.jpg";

/***/ }),

/***/ "./assets/images/production/diffrent/20191017_162733.jpg":
/*!***************************************************************!*\
  !*** ./assets/images/production/diffrent/20191017_162733.jpg ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/20191017_162733-3dddc7704f3add7149c6df806591e7d4.jpg";

/***/ }),

/***/ "./assets/images/production/dreamer sync \\.(png|jpe?g|svg)$":
/*!*******************************************************************************!*\
  !*** ./assets/images/production/dreamer sync nonrecursive \.(png|jpe?g|svg)$ ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./20190821_144756.jpg": "./assets/images/production/dreamer/20190821_144756.jpg",
	"./20190821_144903.jpg": "./assets/images/production/dreamer/20190821_144903.jpg",
	"./20190821_144924.jpg": "./assets/images/production/dreamer/20190821_144924.jpg",
	"./20190821_144947.jpg": "./assets/images/production/dreamer/20190821_144947.jpg",
	"./DSC_0068.jpg": "./assets/images/production/dreamer/DSC_0068.jpg",
	"./DSC_0085.jpg": "./assets/images/production/dreamer/DSC_0085.jpg",
	"./DSC_0089.jpg": "./assets/images/production/dreamer/DSC_0089.jpg",
	"./DSC_0097.jpg": "./assets/images/production/dreamer/DSC_0097.jpg"
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
webpackContext.id = "./assets/images/production/dreamer sync \\.(png|jpe?g|svg)$";

/***/ }),

/***/ "./assets/images/production/dreamer/20190821_144756.jpg":
/*!**************************************************************!*\
  !*** ./assets/images/production/dreamer/20190821_144756.jpg ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/20190821_144756-050b79eeaa6c4ada080fac6c2b6b41f5.jpg";

/***/ }),

/***/ "./assets/images/production/dreamer/20190821_144903.jpg":
/*!**************************************************************!*\
  !*** ./assets/images/production/dreamer/20190821_144903.jpg ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/20190821_144903-2eb05c91a477068735dadb6709d964bf.jpg";

/***/ }),

/***/ "./assets/images/production/dreamer/20190821_144924.jpg":
/*!**************************************************************!*\
  !*** ./assets/images/production/dreamer/20190821_144924.jpg ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/20190821_144924-f5da35f61ff644c5a54adaf17008bcf9.jpg";

/***/ }),

/***/ "./assets/images/production/dreamer/20190821_144947.jpg":
/*!**************************************************************!*\
  !*** ./assets/images/production/dreamer/20190821_144947.jpg ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/20190821_144947-939d9f1627bc9c1ad6f8a7ddc1322ebb.jpg";

/***/ }),

/***/ "./assets/images/production/dreamer/DSC_0068.jpg":
/*!*******************************************************!*\
  !*** ./assets/images/production/dreamer/DSC_0068.jpg ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/DSC_0068-6a8eae6eb407585a37aae778053c796c.jpg";

/***/ }),

/***/ "./assets/images/production/dreamer/DSC_0085.jpg":
/*!*******************************************************!*\
  !*** ./assets/images/production/dreamer/DSC_0085.jpg ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/DSC_0085-8ced4599175554bc4ca33591aac49993.jpg";

/***/ }),

/***/ "./assets/images/production/dreamer/DSC_0089.jpg":
/*!*******************************************************!*\
  !*** ./assets/images/production/dreamer/DSC_0089.jpg ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/DSC_0089-5040ec4820bd210495cc81c49f9c7a2c.jpg";

/***/ }),

/***/ "./assets/images/production/dreamer/DSC_0097.jpg":
/*!*******************************************************!*\
  !*** ./assets/images/production/dreamer/DSC_0097.jpg ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/DSC_0097-3aae41a1c343c851d8f5c34a627cde59.jpg";

/***/ }),

/***/ "./assets/images/production/illuminatis sync \\.(png|jpe?g|svg)$":
/*!***********************************************************************************!*\
  !*** ./assets/images/production/illuminatis sync nonrecursive \.(png|jpe?g|svg)$ ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./20180504_142943.jpg": "./assets/images/production/illuminatis/20180504_142943.jpg",
	"./20180504_155828.jpg": "./assets/images/production/illuminatis/20180504_155828.jpg",
	"./20180504_165324.jpg": "./assets/images/production/illuminatis/20180504_165324.jpg",
	"./20180504_183659.jpg": "./assets/images/production/illuminatis/20180504_183659.jpg",
	"./20180504_225724.jpg": "./assets/images/production/illuminatis/20180504_225724.jpg",
	"./20180504_225743.jpg": "./assets/images/production/illuminatis/20180504_225743.jpg",
	"./20180504_225809.jpg": "./assets/images/production/illuminatis/20180504_225809.jpg",
	"./20180504_225829.jpg": "./assets/images/production/illuminatis/20180504_225829.jpg"
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
webpackContext.id = "./assets/images/production/illuminatis sync \\.(png|jpe?g|svg)$";

/***/ }),

/***/ "./assets/images/production/illuminatis/20180504_142943.jpg":
/*!******************************************************************!*\
  !*** ./assets/images/production/illuminatis/20180504_142943.jpg ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/20180504_142943-2cda2dec4375186f729f531ab85153ea.jpg";

/***/ }),

/***/ "./assets/images/production/illuminatis/20180504_155828.jpg":
/*!******************************************************************!*\
  !*** ./assets/images/production/illuminatis/20180504_155828.jpg ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/20180504_155828-fba9f163c45aa4a96b4fa9c5415d132d.jpg";

/***/ }),

/***/ "./assets/images/production/illuminatis/20180504_165324.jpg":
/*!******************************************************************!*\
  !*** ./assets/images/production/illuminatis/20180504_165324.jpg ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/20180504_165324-e2a38b82bda60069117025ab8c03cc1a.jpg";

/***/ }),

/***/ "./assets/images/production/illuminatis/20180504_183659.jpg":
/*!******************************************************************!*\
  !*** ./assets/images/production/illuminatis/20180504_183659.jpg ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/20180504_183659-00ca1da3daa1efc5f3feeb5757c32013.jpg";

/***/ }),

/***/ "./assets/images/production/illuminatis/20180504_225724.jpg":
/*!******************************************************************!*\
  !*** ./assets/images/production/illuminatis/20180504_225724.jpg ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/20180504_225724-92da540befa91b00e1b616746aeffe5a.jpg";

/***/ }),

/***/ "./assets/images/production/illuminatis/20180504_225743.jpg":
/*!******************************************************************!*\
  !*** ./assets/images/production/illuminatis/20180504_225743.jpg ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/20180504_225743-9af28b923e6a300fbc382b3ac9222903.jpg";

/***/ }),

/***/ "./assets/images/production/illuminatis/20180504_225809.jpg":
/*!******************************************************************!*\
  !*** ./assets/images/production/illuminatis/20180504_225809.jpg ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/20180504_225809-a345ec686aff17fe26c90f686fcfec72.jpg";

/***/ }),

/***/ "./assets/images/production/illuminatis/20180504_225829.jpg":
/*!******************************************************************!*\
  !*** ./assets/images/production/illuminatis/20180504_225829.jpg ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/20180504_225829-1f14960fbee87b4edcace411d47bcddc.jpg";

/***/ }),

/***/ "./assets/images/production/img/bottom_radius.png":
/*!********************************************************!*\
  !*** ./assets/images/production/img/bottom_radius.png ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/bottom_radius-54f1a972d5388f15f144d8160f2f680b.png";

/***/ }),

/***/ "./assets/images/production/img/upper_radius.png":
/*!*******************************************************!*\
  !*** ./assets/images/production/img/upper_radius.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/upper_radius-ff5c7a1ec43d8ad4676ff19d84fe9231.png";

/***/ }),

/***/ "./assets/images/production/magnam sync \\.(png|jpe?g|svg)$":
/*!******************************************************************************!*\
  !*** ./assets/images/production/magnam sync nonrecursive \.(png|jpe?g|svg)$ ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./20171129_095759.jpg": "./assets/images/production/magnam/20171129_095759.jpg",
	"./20171129_095821.jpg": "./assets/images/production/magnam/20171129_095821.jpg",
	"./20171129_095843.jpg": "./assets/images/production/magnam/20171129_095843.jpg",
	"./20171129_095850.jpg": "./assets/images/production/magnam/20171129_095850.jpg",
	"./20180630_122523.jpg": "./assets/images/production/magnam/20180630_122523.jpg",
	"./20180630_122557.jpg": "./assets/images/production/magnam/20180630_122557.jpg",
	"./20180630_122729.jpg": "./assets/images/production/magnam/20180630_122729.jpg",
	"./20180630_122930.jpg": "./assets/images/production/magnam/20180630_122930.jpg"
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
webpackContext.id = "./assets/images/production/magnam sync \\.(png|jpe?g|svg)$";

/***/ }),

/***/ "./assets/images/production/magnam/20171129_095759.jpg":
/*!*************************************************************!*\
  !*** ./assets/images/production/magnam/20171129_095759.jpg ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/20171129_095759-50d6c05d6954dc9a14e698c97c486661.jpg";

/***/ }),

/***/ "./assets/images/production/magnam/20171129_095821.jpg":
/*!*************************************************************!*\
  !*** ./assets/images/production/magnam/20171129_095821.jpg ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/20171129_095821-0f39267d1ea427c19f02aa630d195436.jpg";

/***/ }),

/***/ "./assets/images/production/magnam/20171129_095843.jpg":
/*!*************************************************************!*\
  !*** ./assets/images/production/magnam/20171129_095843.jpg ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/20171129_095843-8d272a09cfa9107231989995c33a2bcf.jpg";

/***/ }),

/***/ "./assets/images/production/magnam/20171129_095850.jpg":
/*!*************************************************************!*\
  !*** ./assets/images/production/magnam/20171129_095850.jpg ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/20171129_095850-aa4f30e257e994dbace2897bb785169f.jpg";

/***/ }),

/***/ "./assets/images/production/magnam/20180630_122523.jpg":
/*!*************************************************************!*\
  !*** ./assets/images/production/magnam/20180630_122523.jpg ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/20180630_122523-959e473f88527272f9599dbb366e6c60.jpg";

/***/ }),

/***/ "./assets/images/production/magnam/20180630_122557.jpg":
/*!*************************************************************!*\
  !*** ./assets/images/production/magnam/20180630_122557.jpg ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/20180630_122557-f414f6933fc11e10ef77aa484f2999d3.jpg";

/***/ }),

/***/ "./assets/images/production/magnam/20180630_122729.jpg":
/*!*************************************************************!*\
  !*** ./assets/images/production/magnam/20180630_122729.jpg ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/20180630_122729-e2ffdb0ec952898d0362d4e1f7afa756.jpg";

/***/ }),

/***/ "./assets/images/production/magnam/20180630_122930.jpg":
/*!*************************************************************!*\
  !*** ./assets/images/production/magnam/20180630_122930.jpg ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/20180630_122930-a676eb0e37f3d35c3997548392a6a30c.jpg";

/***/ }),

/***/ "./assets/images/production/master sync \\.(png|jpe?g|svg)$":
/*!******************************************************************************!*\
  !*** ./assets/images/production/master sync nonrecursive \.(png|jpe?g|svg)$ ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./DSC_0782.jpg": "./assets/images/production/master/DSC_0782.jpg",
	"./DSC_0783.jpg": "./assets/images/production/master/DSC_0783.jpg",
	"./DSC_0784.jpg": "./assets/images/production/master/DSC_0784.jpg",
	"./DSC_0785.jpg": "./assets/images/production/master/DSC_0785.jpg",
	"./DSC_0786.jpg": "./assets/images/production/master/DSC_0786.jpg",
	"./DSC_0787.jpg": "./assets/images/production/master/DSC_0787.jpg",
	"./DSC_0788.jpg": "./assets/images/production/master/DSC_0788.jpg"
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
webpackContext.id = "./assets/images/production/master sync \\.(png|jpe?g|svg)$";

/***/ }),

/***/ "./assets/images/production/master/DSC_0782.jpg":
/*!******************************************************!*\
  !*** ./assets/images/production/master/DSC_0782.jpg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/DSC_0782-a80e37424cad36e14eab98a974dbe60d.jpg";

/***/ }),

/***/ "./assets/images/production/master/DSC_0783.jpg":
/*!******************************************************!*\
  !*** ./assets/images/production/master/DSC_0783.jpg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/DSC_0783-7639ce47a109962848ee1c5a7a66d8ad.jpg";

/***/ }),

/***/ "./assets/images/production/master/DSC_0784.jpg":
/*!******************************************************!*\
  !*** ./assets/images/production/master/DSC_0784.jpg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/DSC_0784-2c1a5fdea5c8c20e1f0343a271a4de3c.jpg";

/***/ }),

/***/ "./assets/images/production/master/DSC_0785.jpg":
/*!******************************************************!*\
  !*** ./assets/images/production/master/DSC_0785.jpg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/DSC_0785-4c80c03b537fd5714e1cdfa10ab447bc.jpg";

/***/ }),

/***/ "./assets/images/production/master/DSC_0786.jpg":
/*!******************************************************!*\
  !*** ./assets/images/production/master/DSC_0786.jpg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/DSC_0786-4354ded74a3a93d9fb49d89643df6fd7.jpg";

/***/ }),

/***/ "./assets/images/production/master/DSC_0787.jpg":
/*!******************************************************!*\
  !*** ./assets/images/production/master/DSC_0787.jpg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/DSC_0787-e0fb8655077a251ba8d387ec9a357c34.jpg";

/***/ }),

/***/ "./assets/images/production/master/DSC_0788.jpg":
/*!******************************************************!*\
  !*** ./assets/images/production/master/DSC_0788.jpg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/DSC_0788-d7cd2144d890384ac0abb5cac8e27233.jpg";

/***/ }),

/***/ "./assets/images/production/navighator sync \\.(png|jpe?g|svg)$":
/*!**********************************************************************************!*\
  !*** ./assets/images/production/navighator sync nonrecursive \.(png|jpe?g|svg)$ ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./20181031_150259.jpg": "./assets/images/production/navighator/20181031_150259.jpg",
	"./20181031_150314.jpg": "./assets/images/production/navighator/20181031_150314.jpg",
	"./20181031_1506181.jpg": "./assets/images/production/navighator/20181031_1506181.jpg",
	"./20181031_150837.jpg": "./assets/images/production/navighator/20181031_150837.jpg",
	"./20181031_150856.jpg": "./assets/images/production/navighator/20181031_150856.jpg",
	"./20181031_150920.jpg": "./assets/images/production/navighator/20181031_150920.jpg",
	"./salon.jpg": "./assets/images/production/navighator/salon.jpg",
	"./toilet.jpg": "./assets/images/production/navighator/toilet.jpg"
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
webpackContext.id = "./assets/images/production/navighator sync \\.(png|jpe?g|svg)$";

/***/ }),

/***/ "./assets/images/production/navighator/20181031_150259.jpg":
/*!*****************************************************************!*\
  !*** ./assets/images/production/navighator/20181031_150259.jpg ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/20181031_150259-a49027c6b714b63843d0cb06cbb365c4.jpg";

/***/ }),

/***/ "./assets/images/production/navighator/20181031_150314.jpg":
/*!*****************************************************************!*\
  !*** ./assets/images/production/navighator/20181031_150314.jpg ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/20181031_150314-53e6d82d1bead1b5c9f4439a7e4e808b.jpg";

/***/ }),

/***/ "./assets/images/production/navighator/20181031_1506181.jpg":
/*!******************************************************************!*\
  !*** ./assets/images/production/navighator/20181031_1506181.jpg ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/20181031_1506181-2319533d32a93816a7ee5d600513c582.jpg";

/***/ }),

/***/ "./assets/images/production/navighator/20181031_150837.jpg":
/*!*****************************************************************!*\
  !*** ./assets/images/production/navighator/20181031_150837.jpg ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/20181031_150837-f149aaac0d46e10453e7e40e460cfe52.jpg";

/***/ }),

/***/ "./assets/images/production/navighator/20181031_150856.jpg":
/*!*****************************************************************!*\
  !*** ./assets/images/production/navighator/20181031_150856.jpg ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/20181031_150856-2295beebe61e03b23e86d62224692477.jpg";

/***/ }),

/***/ "./assets/images/production/navighator/20181031_150920.jpg":
/*!*****************************************************************!*\
  !*** ./assets/images/production/navighator/20181031_150920.jpg ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/20181031_150920-01e13fa26be293c3ab9a1af16bb26bac.jpg";

/***/ }),

/***/ "./assets/images/production/navighator/salon.jpg":
/*!*******************************************************!*\
  !*** ./assets/images/production/navighator/salon.jpg ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/salon-5cdab93f49c472651ce2856c7349b195.jpg";

/***/ }),

/***/ "./assets/images/production/navighator/toilet.jpg":
/*!********************************************************!*\
  !*** ./assets/images/production/navighator/toilet.jpg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/toilet-a1dcc065ef9f050383cccd4eccfe4f40.jpg";

/***/ }),

/***/ "./assets/images/production/versus sync \\.(png|jpe?g|svg)$":
/*!******************************************************************************!*\
  !*** ./assets/images/production/versus sync nonrecursive \.(png|jpe?g|svg)$ ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./20170314_153339.jpg": "./assets/images/production/versus/20170314_153339.jpg",
	"./20170314_174254.jpg": "./assets/images/production/versus/20170314_174254.jpg",
	"./20170909_125501.jpg": "./assets/images/production/versus/20170909_125501.jpg",
	"./20170918_165822.jpg": "./assets/images/production/versus/20170918_165822.jpg",
	"./20170918_170215.jpg": "./assets/images/production/versus/20170918_170215.jpg",
	"./20170918_170231.jpg": "./assets/images/production/versus/20170918_170231.jpg",
	"./20170918_185154.jpg": "./assets/images/production/versus/20170918_185154.jpg",
	"./20170919_070131.jpg": "./assets/images/production/versus/20170919_070131.jpg"
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
webpackContext.id = "./assets/images/production/versus sync \\.(png|jpe?g|svg)$";

/***/ }),

/***/ "./assets/images/production/versus/20170314_153339.jpg":
/*!*************************************************************!*\
  !*** ./assets/images/production/versus/20170314_153339.jpg ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/20170314_153339-5fa4f2ffe6a7f3cd891da50a0b6d4009.jpg";

/***/ }),

/***/ "./assets/images/production/versus/20170314_174254.jpg":
/*!*************************************************************!*\
  !*** ./assets/images/production/versus/20170314_174254.jpg ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/20170314_174254-1045f1c6a92b1ff12814e0ca9aa12b48.jpg";

/***/ }),

/***/ "./assets/images/production/versus/20170909_125501.jpg":
/*!*************************************************************!*\
  !*** ./assets/images/production/versus/20170909_125501.jpg ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/20170909_125501-1e5f0be23d67f956b6153e77166aefbe.jpg";

/***/ }),

/***/ "./assets/images/production/versus/20170918_165822.jpg":
/*!*************************************************************!*\
  !*** ./assets/images/production/versus/20170918_165822.jpg ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/20170918_165822-620b244648c7c9be5fd8f553c5b1527c.jpg";

/***/ }),

/***/ "./assets/images/production/versus/20170918_170215.jpg":
/*!*************************************************************!*\
  !*** ./assets/images/production/versus/20170918_170215.jpg ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/20170918_170215-61f4c5a5eb41d921e3356ce587bd821e.jpg";

/***/ }),

/***/ "./assets/images/production/versus/20170918_170231.jpg":
/*!*************************************************************!*\
  !*** ./assets/images/production/versus/20170918_170231.jpg ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/20170918_170231-93580333b66a271c4e117e1c20079240.jpg";

/***/ }),

/***/ "./assets/images/production/versus/20170918_185154.jpg":
/*!*************************************************************!*\
  !*** ./assets/images/production/versus/20170918_185154.jpg ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/20170918_185154-8847029b3b1621226ce6b05834e6508c.jpg";

/***/ }),

/***/ "./assets/images/production/versus/20170919_070131.jpg":
/*!*************************************************************!*\
  !*** ./assets/images/production/versus/20170919_070131.jpg ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/20170919_070131-55736a28e849d2086b65919561c843c7.jpg";

/***/ }),

/***/ "./assets/images/uk.png":
/*!******************************!*\
  !*** ./assets/images/uk.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./components/Gallery.js":
/*!*******************************!*\
  !*** ./components/Gallery.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/konrad/WebstormProjects/Jacht-Plast/client/components/Gallery.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Gallery = props => {
  const gutter = 2;
  return __jsx("div", {
    className: "gallery",
    css: {
      overflow: 'hidden',
      marginLeft: -gutter,
      marginRight: -gutter
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (Gallery);

/***/ }),

/***/ "./components/Images.js":
/*!******************************!*\
  !*** ./components/Images.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/konrad/WebstormProjects/Jacht-Plast/client/components/Images.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Images = props => {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (Images);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav */ "./components/nav.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dist_next_server_lib_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/next-server/lib/head */ "next/dist/next-server/lib/head");
/* harmony import */ var next_dist_next_server_lib_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_next_server_lib_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer */ "./components/footer.js");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/main.scss */ "./styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hamburgerMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hamburgerMenu */ "./components/hamburgerMenu.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _redux_actions_modalActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../redux/actions/modalActions */ "./redux/actions/modalActions.js");
/* harmony import */ var react_images__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-images */ "react-images");
/* harmony import */ var react_images__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_images__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "/home/konrad/WebstormProjects/Jacht-Plast/client/components/Layout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










const Layout = props => {
  const {
    0: width,
    1: setWidth
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1200);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();
  const modalState = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(state => state.modal);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setWidth(window.innerWidth);
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: 'container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx(next_dist_next_server_lib_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, "Jacht-Plast"), __jsx("link", {
    rel: "shortcut icon",
    type: "image/x-icon",
    href: "../public/icon.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  })), width > 1100 ? __jsx(_nav__WEBPACK_IMPORTED_MODULE_0__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }) : __jsx(_hamburgerMenu__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }), props.children, __jsx(_footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  })), __jsx(react_images__WEBPACK_IMPORTED_MODULE_8__["ModalGateway"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, modalState.isOpen && __jsx(react_images__WEBPACK_IMPORTED_MODULE_8__["Modal"], {
    onClose: () => dispatch(_redux_actions_modalActions__WEBPACK_IMPORTED_MODULE_7__["closeModal"]()),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, __jsx(react_images__WEBPACK_IMPORTED_MODULE_8___default.a, {
    currentIndex: modalState.index,
    views: modalState.photos,
    frameProps: {
      autoSize: 'height'
    },
    autoSize: {
      width: 2000,
      height: 500
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/cookies.js":
/*!*******************************!*\
  !*** ./components/cookies.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/md */ "react-icons/md");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Fab */ "@material-ui/core/Fab");
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/konrad/WebstormProjects/Jacht-Plast/client/components/cookies.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const CookiesModal = props => {
  return __jsx("div", {
    className: 'containerCookies',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("div", {
    className: 'content',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_1__["MdCancel"], {
    className: 'cancel',
    onClick: () => props.close(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }), __jsx("div", {
    className: 'title',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, "Cookies Policy"), __jsx("div", {
    className: 'body',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, "This site use cookies and other tracking technologies to improve your browsing experience on our website and to show you personalized content. By browsing our website, you consent to use of cookies."), __jsx("div", {
    className: 'buttonContainer',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_2___default.a, {
    variant: "extended",
    color: "primary",
    className: 'button',
    onClick: () => props.accept(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, "ACCEPT"), __jsx(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_2___default.a, {
    variant: "extended",
    color: "primary",
    className: 'button',
    onClick: () => props.close(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, "CANCEL"))));
};

/* harmony default export */ __webpack_exports__["default"] = (CookiesModal);

/***/ }),

/***/ "./components/footer.js":
/*!******************************!*\
  !*** ./components/footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/konrad/WebstormProjects/Jacht-Plast/client/components/footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Footer = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const switchState = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.switch);
  return __jsx("div", {
    className: "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("ul", {
    className: "footerList",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("h4", {
    className: 'header',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, switchState.language.footerContact), __jsx("div", {
    dangerouslySetInnerHTML: {
      __html: switchState.language.footerContactData
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  })), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx("h4", {
    className: 'header',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, switchState.language.footerData), __jsx("div", {
    dangerouslySetInnerHTML: {
      __html: switchState.language.footerDataData
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  })), __jsx("li", {
    className: 'sitesContainer',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx("h4", {
    className: 'header',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, switchState.language.footerPages), __jsx("div", {
    className: 'sites',
    onClick: () => router.push("/"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, switchState.language.aboutUs), __jsx("div", {
    className: 'sites',
    onClick: () => router.push("/production"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, switchState.language.production), __jsx("div", {
    className: 'sites',
    onClick: () => router.push("/transport"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, switchState.language.transport), __jsx("div", {
    className: 'sites',
    onClick: () => router.push("/contact"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, switchState.language.contact)), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, __jsx("h4", {
    className: 'header',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, switchState.language.footerInvite), __jsx("div", {
    id: "fb_icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, __jsx("a", {
    href: "https://www.facebook.com/Jacht-Plast-Zdzis%C5%82aw-Sobolewski-1328748387208685/",
    target: '_white',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaFacebookSquare"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/hamburgerMenu.js":
/*!*************************************!*\
  !*** ./components/hamburgerMenu.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-burger-menu */ "react-burger-menu");
/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_burger_menu__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_hamburger_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/hamburger.png */ "./assets/hamburger.png");
/* harmony import */ var _assets_hamburger_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_hamburger_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_delete_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/delete.png */ "./assets/delete.png");
/* harmony import */ var _assets_delete_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_delete_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/images/logo.png */ "./assets/images/logo.png");
/* harmony import */ var _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_images_logo_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-switch */ "react-switch");
/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_switch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_images_poland_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/images/poland.png */ "./assets/images/poland.png");
/* harmony import */ var _assets_images_poland_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_images_poland_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_images_uk_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/images/uk.png */ "./assets/images/uk.png");
/* harmony import */ var _assets_images_uk_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_images_uk_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _redux_actions_switchActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../redux/actions/switchActions */ "./redux/actions/switchActions.js");
var _jsxFileName = "/home/konrad/WebstormProjects/Jacht-Plast/client/components/hamburgerMenu.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;












const Hamburger = () => {
  const {
    0: isOpen,
    1: setIsOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useDispatch"])();
  const switchState = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"])(state => state.switch);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  const setSwitch = value => {
    if (value) {
      dispatch(_redux_actions_switchActions__WEBPACK_IMPORTED_MODULE_10__["setPl"]());
    } else {
      dispatch(_redux_actions_switchActions__WEBPACK_IMPORTED_MODULE_10__["setEng"]());
    }
  };

  return __jsx("div", {
    id: "outer-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, __jsx(react_burger_menu__WEBPACK_IMPORTED_MODULE_0__["elastic"], {
    left: true,
    isOpen: isOpen,
    className: 'burger_menu',
    outerContainerId: "outer-container",
    disableAutoFocus: true,
    customCrossIcon: __jsx("img", {
      src: _assets_delete_png__WEBPACK_IMPORTED_MODULE_4___default.a,
      className: 'cross',
      onClick: () => setIsOpen(false),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: undefined
    }),
    customBurgerIcon: __jsx("img", {
      src: _assets_hamburger_png__WEBPACK_IMPORTED_MODULE_3___default.a,
      className: 'hamburger',
      onClick: () => setIsOpen(true),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: undefined
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, __jsx("img", {
    src: _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    id: "logoImage",
    className: 'hamburger_image',
    alt: "Logo of Jacht-Plast",
    onClick: () => router.push("/"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }), __jsx("div", {
    onClick: () => {
      setIsOpen(false);
      router.push("/");
    },
    className: router.pathname === '/' ? 'item pressed' : 'item',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, switchState.language.aboutUs), __jsx("div", {
    onClick: () => {
      setIsOpen(false);
      router.push("/production");
    },
    className: router.pathname === '/production' ? 'item pressed' : 'item',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, switchState.language.production), __jsx("div", {
    onClick: () => {
      setIsOpen(false);
      router.push("/transport");
    },
    className: router.pathname === '/transport' ? 'item pressed' : 'item',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, switchState.language.transport), __jsx("div", {
    onClick: () => {
      setIsOpen(false);
      router.push("/contact");
    },
    className: router.pathname === '/contact' ? 'item pressed' : 'item',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, switchState.language.contact), __jsx("div", {
    className: 'switchContainerMobile',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, __jsx(react_switch__WEBPACK_IMPORTED_MODULE_6___default.a, {
    onChange: value => setSwitch(value),
    checked: switchState.isPl,
    width: 100,
    onColor: '#888',
    checkedIcon: __jsx("img", {
      src: _assets_images_poland_png__WEBPACK_IMPORTED_MODULE_7___default.a,
      alt: "pl",
      className: 'checkedSwitch',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: undefined
    }),
    uncheckedIcon: __jsx("img", {
      src: _assets_images_uk_png__WEBPACK_IMPORTED_MODULE_8___default.a,
      alt: "ENG",
      className: 'uncheckedSwitch',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: undefined
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Hamburger);

/***/ }),

/***/ "./components/nav.js":
/*!***************************!*\
  !*** ./components/nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_headroom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-headroom */ "react-headroom");
/* harmony import */ var react_headroom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_headroom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/logo.png */ "./assets/images/logo.png");
/* harmony import */ var _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_logo_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_actions_switchActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/actions/switchActions */ "./redux/actions/switchActions.js");
/* harmony import */ var _redux_actions_cookieActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/actions/cookieActions */ "./redux/actions/cookieActions.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-switch */ "react-switch");
/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_switch__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_images_poland_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/images/poland.png */ "./assets/images/poland.png");
/* harmony import */ var _assets_images_poland_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_images_poland_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_images_uk_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/images/uk.png */ "./assets/images/uk.png");
/* harmony import */ var _assets_images_uk_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_images_uk_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-cookie */ "react-cookie");
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_cookie__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_cookies__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/cookies */ "./components/cookies.js");
var _jsxFileName = "/home/konrad/WebstormProjects/Jacht-Plast/client/components/nav.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













const Nav = props => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();
  const switchState = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(state => state.switch);
  const cookieState = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(state => state.cookie);
  const [cookies, setCookie] = Object(react_cookie__WEBPACK_IMPORTED_MODULE_10__["useCookies"])(['switch']);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (cookies.switch !== undefined) {
      dispatch(_redux_actions_cookieActions__WEBPACK_IMPORTED_MODULE_5__["acceptCookie"]());
      setSwitch(cookies.switch === "true");
    }
  });

  const setSwitch = value => {
    if (value) {
      dispatch(_redux_actions_switchActions__WEBPACK_IMPORTED_MODULE_4__["setPl"]());
    } else {
      dispatch(_redux_actions_switchActions__WEBPACK_IMPORTED_MODULE_4__["setEng"]());
    }

    if (cookieState.cookieAccepted) {
      setCookie('switch', switchState, {
        path: '/'
      });
    }
  };

  const accept = () => {
    dispatch(_redux_actions_cookieActions__WEBPACK_IMPORTED_MODULE_5__["acceptCookie"]());
    setCookie('switch', switchState, {
      path: '/'
    });
  };

  const close = () => {
    dispatch(_redux_actions_cookieActions__WEBPACK_IMPORTED_MODULE_5__["cancelCookie"]());
  };

  return __jsx(react_cookie__WEBPACK_IMPORTED_MODULE_10__["CookiesProvider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, __jsx(react_headroom__WEBPACK_IMPORTED_MODULE_2___default.a, {
    style: {
      backgroundColor: 'white'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, __jsx("img", {
    src: _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    id: "logoImage",
    className: 'logo',
    alt: "Logo of Jacht-Plast",
    onClick: () => router.push("/"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }), __jsx("div", {
    className: 'rightBox',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, __jsx("ul", {
    className: 'list',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, __jsx("li", {
    onClick: () => router.push("/"),
    className: router.pathname === '/' ? 'pressed' : '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, switchState.language.aboutUs), __jsx("li", {
    onClick: () => router.push("/production"),
    className: router.pathname === '/production' ? 'pressed' : '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, switchState.language.production), __jsx("li", {
    onClick: () => router.push("/transport"),
    className: router.pathname === '/transport' ? 'pressed' : '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, switchState.language.transport), __jsx("li", {
    onClick: () => router.push("/contact"),
    className: router.pathname === '/contact' ? 'pressed' : '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, switchState.language.contact)), __jsx("div", {
    className: 'switchContainer',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, __jsx(react_switch__WEBPACK_IMPORTED_MODULE_7___default.a, {
    onChange: value => setSwitch(value),
    checked: switchState.isPl,
    width: 100,
    onColor: '#888',
    checkedIcon: __jsx("img", {
      src: _assets_images_poland_png__WEBPACK_IMPORTED_MODULE_8___default.a,
      alt: "PL",
      className: 'checkedSwitch',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: undefined
    }),
    uncheckedIcon: __jsx("img", {
      src: _assets_images_uk_png__WEBPACK_IMPORTED_MODULE_9___default.a,
      alt: "ENG",
      className: 'uncheckedSwitch',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: undefined
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  })))), cookieState.showCookies ? __jsx(_components_cookies__WEBPACK_IMPORTED_MODULE_11__["default"], {
    close: close,
    accept: accept,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./pages/production.js":
/*!*****************************!*\
  !*** ./pages/production.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Images__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Images */ "./components/Images.js");
/* harmony import */ var _components_Gallery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Gallery */ "./components/Gallery.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _redux_actions_modalActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/actions/modalActions */ "./redux/actions/modalActions.js");
/* harmony import */ var _assets_images_production_img_bottom_radius_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/images/production/img/bottom_radius.png */ "./assets/images/production/img/bottom_radius.png");
/* harmony import */ var _assets_images_production_img_bottom_radius_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_images_production_img_bottom_radius_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_images_production_img_upper_radius_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/images/production/img/upper_radius.png */ "./assets/images/production/img/upper_radius.png");
/* harmony import */ var _assets_images_production_img_upper_radius_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_images_production_img_upper_radius_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-scroll-parallax */ "react-scroll-parallax");
/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "/home/konrad/WebstormProjects/Jacht-Plast/client/pages/production.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












function importAll(r) {
  return r.keys().map(r);
}

const bt_tes = importAll(__webpack_require__("./assets/images/production/bt_tes sync \\.(png|jpe?g|svg)$"));
const dreamer = importAll(__webpack_require__("./assets/images/production/dreamer sync \\.(png|jpe?g|svg)$"));
const illuminatus = importAll(__webpack_require__("./assets/images/production/illuminatis sync \\.(png|jpe?g|svg)$"));
const master = importAll(__webpack_require__("./assets/images/production/master sync \\.(png|jpe?g|svg)$"));
const magnam = importAll(__webpack_require__("./assets/images/production/magnam sync \\.(png|jpe?g|svg)$"));
const versus = importAll(__webpack_require__("./assets/images/production/versus sync \\.(png|jpe?g|svg)$"));
const navighator = importAll(__webpack_require__("./assets/images/production/navighator sync \\.(png|jpe?g|svg)$"));
const diffrent = importAll(__webpack_require__("./assets/images/production/diffrent sync \\.(png|jpe?g|svg)$"));
const elements = [{
  id: 0,
  open: true,
  photos: navighator,
  title: 'NAVIGATHOR 30',
  alt: 'Jednostka NAVIGATHOR 30'
}, {
  id: 1,
  open: false,
  photos: illuminatus,
  title: 'TES 393 ILLUMINATUS',
  alt: 'Jednostka TES 393 ILLUMINATUS'
}, {
  id: 2,
  open: false,
  photos: dreamer,
  title: 'TES 32 DREAMER',
  alt: 'Jednostka TES 32 DREAMER'
}, {
  id: 3,
  open: false,
  photos: magnam,
  title: 'TES 28 MAGNAM',
  alt: 'Jednostka TES 28 MAGNAM'
}, {
  id: 4,
  open: false,
  photos: versus,
  title: 'TES 246 VERSUS',
  alt: 'Jednostka TES 246 VERSUS'
}, {
  id: 5,
  open: false,
  photos: bt_tes,
  title: 'TES 678 BT-TES 720',
  alt: 'Jednostki TES 678 oraz BT-TES 720'
}, {
  id: 6,
  open: false,
  photos: master,
  title: 'TES 550 MASTER',
  alt: 'Jednostka TES 550 MASTER'
}, {
  id: 7,
  open: false,
  photos: diffrent,
  title: false,
  alt: 'Inne modele jak i jednostki'
}];

const Production = () => {
  const {
    0: data,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(elements);
  const {
    0: pickedOne,
    1: setPickedOne
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(data[0]);
  const {
    0: width,
    1: setWidth
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1200);
  const switchState = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(state => state.switch);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setWidth(window.innerWidth);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setData(data.map(item => {
      if (item.id === 0) {
        item.open = true;
        return item;
      }

      item.open = false;
      return item;
    }));
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    let readyImages = pickedOne.photos.map(i => {
      return {
        src: i
      };
    });
    dispatch(_redux_actions_modalActions__WEBPACK_IMPORTED_MODULE_6__["loadDataModal"](readyImages));
  }, [pickedOne]);

  const openLightBox = index => {
    dispatch(_redux_actions_modalActions__WEBPACK_IMPORTED_MODULE_6__["setNumberModal"](index));
    dispatch(_redux_actions_modalActions__WEBPACK_IMPORTED_MODULE_6__["openModal"]());
  };

  const openExpand = async element => {
    data[pickedOne.id].open = false;
    data[element.id].open = true;
    await setPickedOne(element);
    setData(data);
  };

  const changeParallax = () => {
    if (width <= 513 || width > 600 && width < 1166) {
      return __jsx(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_10__["Parallax"], {
        className: "list_div",
        y: [-40, 72],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: undefined
      }, data.map(mapExpands));
    } else if (width >= 1166 && width <= 1300) {
      return __jsx(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_10__["Parallax"], {
        className: "list_div",
        y: [-15.5, 25],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: undefined
      }, data.map(mapExpands));
    } else if (width > 1300 || width > 513 && width <= 600) {
      return __jsx(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_10__["Parallax"], {
        className: "list_div",
        y: [0, 0],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: undefined
      }, data.map(mapExpands));
    }
  };

  const mapExpands = item => {
    return __jsx("div", {
      className: 'fullExpand',
      key: item.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      },
      __self: undefined
    }, __jsx("span", {
      className: 'upper_radius',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: undefined
    }, __jsx("img", {
      src: item.open ? _assets_images_production_img_upper_radius_png__WEBPACK_IMPORTED_MODULE_8___default.a : '',
      style: item.open ? {
        display: ''
      } : {
        display: 'none'
      },
      alt: "upper image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: undefined
    }), " "), __jsx("div", {
      onClick: () => openExpand(item),
      className: item.open ? 'expandButton openedExpand' : 'expandButton',
      style: {
        display: 'block'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163
      },
      __self: undefined
    }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoIosArrowDropright"], {
      className: 'fa-blink',
      style: item.open ? {
        display: ''
      } : {
        display: 'none'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165
      },
      __self: undefined
    }), item.title ? item.title : switchState.language.productionModels), __jsx("span", {
      className: 'bottom_radius',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
      },
      __self: undefined
    }, __jsx("img", {
      src: item.open ? _assets_images_production_img_bottom_radius_png__WEBPACK_IMPORTED_MODULE_7___default.a : '',
      style: item.open ? {
        display: 'block'
      } : {
        display: 'none'
      },
      alt: "lower image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
      },
      __self: undefined
    }), " "));
  };

  const mapToImage = (photo, index) => {
    return __jsx(_components_Images__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177
      },
      __self: undefined
    }, __jsx("img", {
      className: "productionImage",
      src: photo,
      onClick: () => openLightBox(index),
      alt: "Image of production. " + index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178
      },
      __self: undefined
    }));
  };

  return __jsx(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_10__["ParallaxProvider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: undefined
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: undefined
  }, __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_9__["Helmet"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: undefined
  }, __jsx("meta", {
    charSet: "utf-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: undefined
  }), __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: undefined
  }, "Produkcja - Jacht Plast"), __jsx("meta", {
    name: "description",
    content: "Jacht plast produkuje od wielu lat towary najwy\u017Cszej jako\u015Bci dla kient\xF3w z ca\u0142ego \u015Bwiata. Strona zawiera galerie budowanych jednostek w nsazej firmie.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: undefined
  })), __jsx("div", {
    className: "production",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: undefined
  }, changeParallax(), __jsx("div", {
    className: "details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: undefined
  }, __jsx("div", {
    className: 'galleryProd',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: undefined
  }, __jsx(_components_Gallery__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: undefined
  }, pickedOne.photos.map(mapToImage)))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Production);

/***/ }),

/***/ "./redux/actions/cookieActions.js":
/*!****************************************!*\
  !*** ./redux/actions/cookieActions.js ***!
  \****************************************/
/*! exports provided: ACCEPT_COOKIE, CANCEL_COOKIE, acceptCookie, cancelCookie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCEPT_COOKIE", function() { return ACCEPT_COOKIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CANCEL_COOKIE", function() { return CANCEL_COOKIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "acceptCookie", function() { return acceptCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancelCookie", function() { return cancelCookie; });
const ACCEPT_COOKIE = 'ACCEPT_COOKIE';
const CANCEL_COOKIE = 'CANCEL_COOKIE';
const acceptCookie = () => ({
  type: ACCEPT_COOKIE
});
const cancelCookie = () => ({
  type: CANCEL_COOKIE
});

/***/ }),

/***/ "./redux/actions/modalActions.js":
/*!***************************************!*\
  !*** ./redux/actions/modalActions.js ***!
  \***************************************/
/*! exports provided: OPEN_MODAL, LOAD_DATA_MODAL, SET_NUMBER_MODAL, CLOSE_MODAL, openModal, loadDataModal, setNumberModal, closeModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPEN_MODAL", function() { return OPEN_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_DATA_MODAL", function() { return LOAD_DATA_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_NUMBER_MODAL", function() { return SET_NUMBER_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLOSE_MODAL", function() { return CLOSE_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openModal", function() { return openModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadDataModal", function() { return loadDataModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setNumberModal", function() { return setNumberModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeModal", function() { return closeModal; });
const OPEN_MODAL = "OPEN_MODAL";
const LOAD_DATA_MODAL = "LOAD_DATA_MODAL";
const SET_NUMBER_MODAL = "SET_NUMBER_MODAL";
const CLOSE_MODAL = "CLOSE_MODAL";
const openModal = () => ({
  type: OPEN_MODAL
});
const loadDataModal = payload => ({
  type: LOAD_DATA_MODAL,
  payload: payload
});
const setNumberModal = payload => ({
  type: SET_NUMBER_MODAL,
  payload: payload
});
const closeModal = () => ({
  type: CLOSE_MODAL
});

/***/ }),

/***/ "./redux/actions/switchActions.js":
/*!****************************************!*\
  !*** ./redux/actions/switchActions.js ***!
  \****************************************/
/*! exports provided: SET_PL, SET_ENG, setPl, setEng */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_PL", function() { return SET_PL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ENG", function() { return SET_ENG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPl", function() { return setPl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setEng", function() { return setEng; });
const SET_PL = "SET_PL";
const SET_ENG = "SET_ENG";
const setPl = () => ({
  type: SET_PL
});
const setEng = () => ({
  type: SET_ENG
});

/***/ }),

/***/ "./styles/main.scss":
/*!**************************!*\
  !*** ./styles/main.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/*!***********************************!*\
  !*** multi ./pages/production.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/konrad/WebstormProjects/Jacht-Plast/client/pages/production.js */"./pages/production.js");


/***/ }),

/***/ "@material-ui/core/Fab":
/*!****************************************!*\
  !*** external "@material-ui/core/Fab" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Fab");

/***/ }),

/***/ "next/dist/next-server/lib/head":
/*!*************************************************!*\
  !*** external "next/dist/next-server/lib/head" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-burger-menu":
/*!************************************!*\
  !*** external "react-burger-menu" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-burger-menu");

/***/ }),

/***/ "react-cookie":
/*!*******************************!*\
  !*** external "react-cookie" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-cookie");

/***/ }),

/***/ "react-headroom":
/*!*********************************!*\
  !*** external "react-headroom" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-headroom");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "react-icons/io":
/*!*********************************!*\
  !*** external "react-icons/io" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/io");

/***/ }),

/***/ "react-icons/md":
/*!*********************************!*\
  !*** external "react-icons/md" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/md");

/***/ }),

/***/ "react-images":
/*!*******************************!*\
  !*** external "react-images" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-images");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-scroll-parallax":
/*!****************************************!*\
  !*** external "react-scroll-parallax" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-scroll-parallax");

/***/ }),

/***/ "react-switch":
/*!*******************************!*\
  !*** external "react-switch" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-switch");

/***/ })

/******/ });
//# sourceMappingURL=production.js.map