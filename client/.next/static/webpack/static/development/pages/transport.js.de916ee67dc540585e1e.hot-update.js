webpackHotUpdate("static/development/pages/transport.js",{

/***/ "./components/NavigationContext.js":
false,

/***/ "./components/hamburgerMenu.js":
/*!*************************************!*\
  !*** ./components/hamburgerMenu.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-burger-menu */ "./node_modules/react-burger-menu/lib/BurgerMenu.js");
/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_burger_menu__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/api.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_hamburger_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/hamburger.png */ "./assets/hamburger.png");
/* harmony import */ var _assets_hamburger_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_hamburger_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_delete_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/delete.png */ "./assets/delete.png");
/* harmony import */ var _assets_delete_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_delete_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/images/logo.png */ "./assets/images/logo.png");
/* harmony import */ var _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_images_logo_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-switch */ "./node_modules/react-switch/api.js");
/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_switch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_images_poland_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/images/poland.png */ "./assets/images/poland.png");
/* harmony import */ var _assets_images_poland_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_images_poland_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_images_uk_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/images/uk.png */ "./assets/images/uk.png");
/* harmony import */ var _assets_images_uk_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_images_uk_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/api.js");
/* harmony import */ var _redux_actions_switchActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../redux/actions/switchActions */ "./redux/actions/switchActions.js");
var _jsxFileName = "/home/konrad/WebstormProjects/Jacht-Plast/client/components/hamburgerMenu.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;












var Hamburger = function Hamburger() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useDispatch"])();
  var switchState = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"])(function (state) {
    return state["switch"];
  });
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  var setSwitch = function setSwitch(value) {
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
    __self: this
  }, __jsx(react_burger_menu__WEBPACK_IMPORTED_MODULE_0__["elastic"], {
    left: true,
    isOpen: isOpen,
    className: 'burger_menu',
    outerContainerId: "outer-container",
    disableAutoFocus: true,
    customCrossIcon: __jsx("img", {
      src: _assets_delete_png__WEBPACK_IMPORTED_MODULE_4___default.a,
      className: 'cross',
      onClick: function onClick() {
        return setIsOpen(false);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }),
    customBurgerIcon: __jsx("img", {
      src: _assets_hamburger_png__WEBPACK_IMPORTED_MODULE_3___default.a,
      className: 'hamburger',
      onClick: function onClick() {
        return setIsOpen(true);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("img", {
    src: _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    id: "logoImage",
    className: 'hamburger_image',
    alt: "Logo of Jacht-Plast",
    onClick: function onClick() {
      return router.push("/");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), __jsx("div", {
    onClick: function onClick() {
      setIsOpen(false);
      router.push("/");
    },
    className: router.pathname === '/' ? 'item pressed' : 'item',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, switchState.language.aboutUs), __jsx("div", {
    onClick: function onClick() {
      setIsOpen(false);
      router.push("/production");
    },
    className: router.pathname === '/production' ? 'item pressed' : 'item',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, switchState.language.production), __jsx("div", {
    onClick: function onClick() {
      setIsOpen(false);
      router.push("/transport");
    },
    className: router.pathname === '/transport' ? 'item pressed' : 'item',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, switchState.language.transport), __jsx("div", {
    onClick: function onClick() {
      setIsOpen(false);
      router.push("/contact");
    },
    className: router.pathname === '/contact' ? 'item pressed' : 'item',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, switchState.language.contact), __jsx("div", {
    className: 'switchContainerMobile',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx(react_switch__WEBPACK_IMPORTED_MODULE_6___default.a, {
    onChange: function onChange(value) {
      return setSwitch(value);
    },
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
      __self: this
    }),
    uncheckedIcon: __jsx("img", {
      src: _assets_images_uk_png__WEBPACK_IMPORTED_MODULE_8___default.a,
      alt: "ENG",
      className: 'uncheckedSwitch',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/api.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_headroom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-headroom */ "./node_modules/react-headroom/dist/api.js");
/* harmony import */ var react_headroom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_headroom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/images/logo.png */ "./assets/images/logo.png");
/* harmony import */ var _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_images_logo_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_actions_switchActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/actions/switchActions */ "./redux/actions/switchActions.js");
/* harmony import */ var _redux_actions_cookieActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/actions/cookieActions */ "./redux/actions/cookieActions.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/api.js");
/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-switch */ "./node_modules/react-switch/api.js");
/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_switch__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_images_poland_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/images/poland.png */ "./assets/images/poland.png");
/* harmony import */ var _assets_images_poland_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_images_poland_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_images_uk_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/images/uk.png */ "./assets/images/uk.png");
/* harmony import */ var _assets_images_uk_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_images_uk_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-cookie */ "./node_modules/react-cookie/es6/api.js");
/* harmony import */ var _components_cookies__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/cookies */ "./components/cookies.js");

var _jsxFileName = "/home/konrad/WebstormProjects/Jacht-Plast/client/components/nav.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;













var Nav = function Nav(props) {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"])();
  var switchState = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(function (state) {
    return state["switch"];
  });
  var cookieState = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(function (state) {
    return state.cookie;
  });

  var _useCookies = Object(react_cookie__WEBPACK_IMPORTED_MODULE_11__["useCookies"])(['switch']),
      _useCookies2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useCookies, 2),
      cookies = _useCookies2[0],
      setCookie = _useCookies2[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (cookies["switch"] !== undefined) {
      dispatch(_redux_actions_cookieActions__WEBPACK_IMPORTED_MODULE_6__["acceptCookie"]());
      setSwitch(cookies["switch"] === "true");
    }
  });

  var setSwitch = function setSwitch(value) {
    if (value) {
      dispatch(_redux_actions_switchActions__WEBPACK_IMPORTED_MODULE_5__["setPl"]());
    } else {
      dispatch(_redux_actions_switchActions__WEBPACK_IMPORTED_MODULE_5__["setEng"]());
    }

    if (cookieState.cookieAccepted) {
      setCookie('switch', switchState, {
        path: '/'
      });
    }
  };

  var accept = function accept() {
    dispatch(_redux_actions_cookieActions__WEBPACK_IMPORTED_MODULE_6__["acceptCookie"]());
    setCookie('switch', switchState, {
      path: '/'
    });
  };

  var close = function close() {
    dispatch(_redux_actions_cookieActions__WEBPACK_IMPORTED_MODULE_6__["cancelCookie"]());
  };

  return __jsx(react_cookie__WEBPACK_IMPORTED_MODULE_11__["CookiesProvider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx(react_headroom__WEBPACK_IMPORTED_MODULE_3___default.a, {
    style: {
      backgroundColor: 'white'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("img", {
    src: _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    id: "logoImage",
    className: 'logo',
    alt: "Logo of Jacht-Plast",
    onClick: function onClick() {
      return router.push("/");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), __jsx("div", {
    className: 'rightBox',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("ul", {
    className: 'list',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx("li", {
    onClick: function onClick() {
      return router.push("/");
    },
    className: router.pathname === '/' ? 'pressed' : '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, switchState.language.aboutUs), __jsx("li", {
    onClick: function onClick() {
      return router.push("/production");
    },
    className: router.pathname === '/production' ? 'pressed' : '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, switchState.language.production), __jsx("li", {
    onClick: function onClick() {
      return router.push("/transport");
    },
    className: router.pathname === '/transport' ? 'pressed' : '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, switchState.language.transport), __jsx("li", {
    onClick: function onClick() {
      return router.push("/contact");
    },
    className: router.pathname === '/contact' ? 'pressed' : '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, switchState.language.contact)), __jsx("div", {
    className: 'switchContainer',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx(react_switch__WEBPACK_IMPORTED_MODULE_8___default.a, {
    onChange: function onChange(value) {
      return setSwitch(value);
    },
    checked: switchState.isPl,
    width: 100,
    onColor: '#888',
    checkedIcon: __jsx("img", {
      src: _assets_images_poland_png__WEBPACK_IMPORTED_MODULE_9___default.a,
      alt: "PL",
      className: 'checkedSwitch',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }),
    uncheckedIcon: __jsx("img", {
      src: _assets_images_uk_png__WEBPACK_IMPORTED_MODULE_10___default.a,
      alt: "ENG",
      className: 'uncheckedSwitch',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  })))), cookieState.showCookies ? __jsx(_components_cookies__WEBPACK_IMPORTED_MODULE_12__["default"], {
    close: close,
    accept: accept,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ })

})
//# sourceMappingURL=transport.js.de916ee67dc540585e1e.hot-update.js.map