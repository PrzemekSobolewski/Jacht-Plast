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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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

/***/ "./assets/images/production/versus/20170919_070131.jpg":
/*!*************************************************************!*\
  !*** ./assets/images/production/versus/20170919_070131.jpg ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/20170919_070131-55736a28e849d2086b65919561c843c7.jpg";

/***/ }),

/***/ "./assets/images/slider-jachty-2-2560x12002.png":
/*!******************************************************!*\
  !*** ./assets/images/slider-jachty-2-2560x12002.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/slider-jachty-2-2560x12002-0cdb865f5ac5d1e3c3847bca3f6209ea.png";

/***/ }),

/***/ "./assets/images/transport/20190515_073912.jpg":
/*!*****************************************************!*\
  !*** ./assets/images/transport/20190515_073912.jpg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/20190515_073912-38e266da19c809742113240857ab0ec3.jpg";

/***/ }),

/***/ "./assets/images/transport/20190603_091020.jpg":
/*!*****************************************************!*\
  !*** ./assets/images/transport/20190603_091020.jpg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/20190603_091020-fe5b171633c0760f035ef74add52190d.jpg";

/***/ }),

/***/ "./assets/images/uk.png":
/*!******************************!*\
  !*** ./assets/images/uk.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/api.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-parallax */ "react-parallax");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_parallax__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_images_slider_jachty_2_2560x12002_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/slider-jachty-2-2560x12002.png */ "./assets/images/slider-jachty-2-2560x12002.png");
/* harmony import */ var _assets_images_slider_jachty_2_2560x12002_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_slider_jachty_2_2560x12002_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_scroll_to__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-scroll-to */ "react-scroll-to");
/* harmony import */ var react_scroll_to__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_scroll_to__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_images_transport_20190515_073912_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/images/transport/20190515_073912.jpg */ "./assets/images/transport/20190515_073912.jpg");
/* harmony import */ var _assets_images_transport_20190515_073912_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_images_transport_20190515_073912_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_images_production_versus_20170919_070131_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/images/production/versus/20170919_070131.jpg */ "./assets/images/production/versus/20170919_070131.jpg");
/* harmony import */ var _assets_images_production_versus_20170919_070131_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_images_production_versus_20170919_070131_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_images_transport_20190603_091020_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/images/transport/20190603_091020.jpg */ "./assets/images/transport/20190603_091020.jpg");
/* harmony import */ var _assets_images_transport_20190603_091020_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_images_transport_20190603_091020_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "/home/konrad/WebstormProjects/Jacht-Plast/client/pages/api.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











const Home = () => {
  const switchState = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"])(state => state.switch);
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_9__["Helmet"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx("meta", {
    charSet: "utf-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }), __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, "Strona G\u0142\xF3wna - Jacht Plast"), __jsx("meta", {
    name: "description",
    content: "Jacht Plast zajmuje si\u0119\xA0budow\u0105\xA0jacht\xF3w, wyrobami laminotowymi oraz trasnsportem. \u015Awiadczymy us\u0142ugi dla zadowolonych klient\xF3w z ca\u0142ego \u015Bwiata.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  })), __jsx(react_parallax__WEBPACK_IMPORTED_MODULE_2__["Parallax"], {
    bgImage: _assets_images_slider_jachty_2_2560x12002_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    strength: 600,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx("div", {
    className: 'bgContainer',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx("div", {
    className: 'bgText',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, "JACHT-PLAST"), __jsx(react_scroll_to__WEBPACK_IMPORTED_MODULE_4__["ScrollTo"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, ({
    scrollTo
  }) => __jsx("div", {
    className: 'bgButtonContainer',
    onClick: () => scrollTo({
      x: 0,
      y: 700,
      smooth: true
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx("div", {
    className: 'bgButton2',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, switchState.language.aboutUsButton), __jsx("div", {
    className: 'bgButton',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, switchState.language.aboutUsButton))))), __jsx("div", {
    className: "about_us_div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, __jsx("div", {
    className: 'about_us_first',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, switchState.language.aboutUsFirstText), __jsx("img", {
    src: _assets_images_transport_20190515_073912_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
    className: 'about_us_photo',
    alt: "Image of Jacht-Plast",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  })), __jsx("div", {
    className: 'about_us_first',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, __jsx("img", {
    src: _assets_images_transport_20190603_091020_jpg__WEBPACK_IMPORTED_MODULE_7___default.a,
    className: 'about_us_photo',
    alt: "Image of Jacht-Plast",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, switchState.language.aboutUsSecondText)), __jsx("div", {
    className: 'about_us_first',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, switchState.language.aboutUsThirdText), __jsx("img", {
    src: _assets_images_production_versus_20170919_070131_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
    className: 'about_us_photo',
    alt: "Image of Jacht-Plast",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

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

/***/ 5:
/*!******************************!*\
  !*** multi ./pages/api.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/konrad/WebstormProjects/Jacht-Plast/client/pages/api.js */"./pages/api.js");


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

/***/ "react-parallax":
/*!*********************************!*\
  !*** external "react-parallax" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-parallax");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-scroll-to":
/*!**********************************!*\
  !*** external "react-scroll-to" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-scroll-to");

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
//# sourceMappingURL=api.js.map