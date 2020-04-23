webpackHotUpdate("static/development/pages/production.js",{

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
/* harmony import */ var _NavigationContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavigationContext */ "./components/NavigationContext.js");
/* harmony import */ var _assets_hamburger_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/hamburger.png */ "./assets/hamburger.png");
/* harmony import */ var _assets_hamburger_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_hamburger_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_delete_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/delete.png */ "./assets/delete.png");
/* harmony import */ var _assets_delete_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_delete_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/images/logo.png */ "./assets/images/logo.png");
/* harmony import */ var _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_images_logo_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-switch */ "./node_modules/react-switch/api.js");
/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_switch__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_images_poland_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/images/poland.png */ "./assets/images/poland.png");
/* harmony import */ var _assets_images_poland_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_images_poland_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_images_uk_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/images/uk.png */ "./assets/images/uk.png");
/* harmony import */ var _assets_images_uk_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_images_uk_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/api.js");
/* harmony import */ var _redux_actions_switchActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../redux/actions/switchActions */ "./redux/actions/switchActions.js");
var _jsxFileName = "/home/konrad/WebstormProjects/Jacht-Plast/client/components/hamburgerMenu.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;













var Hamburger = function Hamburger() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_NavigationContext__WEBPACK_IMPORTED_MODULE_3__["default"]),
      route = _useContext[0],
      setRoute = _useContext[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["useDispatch"])();
  var switchState = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["useSelector"])(function (state) {
    return state["switch"];
  });

  var setSwitch = function setSwitch(value) {
    if (value) {
      dispatch(_redux_actions_switchActions__WEBPACK_IMPORTED_MODULE_11__["setPl"]());
    } else {
      dispatch(_redux_actions_switchActions__WEBPACK_IMPORTED_MODULE_11__["setEng"]());
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setRoute(window.location.pathname);
  }, []);
  return __jsx("div", {
    id: "outer-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx(react_burger_menu__WEBPACK_IMPORTED_MODULE_0__["elastic"], {
    left: true,
    isOpen: isOpen,
    className: 'burger_menu',
    outerContainerId: "outer-container",
    disableAutoFocus: true,
    customCrossIcon: __jsx("img", {
      src: _assets_delete_png__WEBPACK_IMPORTED_MODULE_5___default.a,
      className: 'cross',
      onClick: function onClick() {
        return setIsOpen(false);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }),
    customBurgerIcon: __jsx("img", {
      src: _assets_hamburger_png__WEBPACK_IMPORTED_MODULE_4___default.a,
      className: 'hamburger',
      onClick: function onClick() {
        return setIsOpen(true);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx(Link, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("img", {
    src: _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    id: "logoImage",
    className: 'hamburger_image',
    alt: "Logo of Jacht-Plast",
    onClick: function onClick() {
      return setRoute('/');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  })), __jsx(Link, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("div", {
    onClick: function onClick() {
      setRoute('/');
      setIsOpen(false);
    },
    className: route === '/' ? 'item pressed' : 'item',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, switchState.language.aboutUs)), __jsx(Link, {
    href: "/production",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("div", {
    onClick: function onClick() {
      setRoute('/production');
      setIsOpen(false);
    },
    className: route === '/production' ? 'item pressed' : 'item',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, switchState.language.production)), __jsx(Link, {
    href: "/transport",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("div", {
    onClick: function onClick() {
      setRoute('/transport');
      setIsOpen(false);
    },
    className: route === '/transport' ? 'item pressed' : 'item',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, switchState.language.transport)), __jsx(Link, {
    href: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx("div", {
    onClick: function onClick() {
      setRoute('/contact');
      setIsOpen(false);
    },
    className: route === '/contact' ? 'item pressed' : 'item',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, switchState.language.contact)), __jsx("div", {
    className: 'switchContainerMobile',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx(react_switch__WEBPACK_IMPORTED_MODULE_7___default.a, {
    onChange: function onChange(value) {
      return setSwitch(value);
    },
    checked: switchState.isPl,
    width: 100,
    onColor: '#888',
    checkedIcon: __jsx("img", {
      src: _assets_images_poland_png__WEBPACK_IMPORTED_MODULE_8___default.a,
      alt: "pl",
      className: 'checkedSwitch',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }),
    uncheckedIcon: __jsx("img", {
      src: _assets_images_uk_png__WEBPACK_IMPORTED_MODULE_9___default.a,
      alt: "ENG",
      className: 'uncheckedSwitch',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Hamburger);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
false,

/***/ "./node_modules/core-js/library/fn/map.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.map.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.map.from.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.map.of.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.map.to-json.js":
false,

/***/ "./node_modules/define-properties/index.js":
false,

/***/ "./node_modules/function-bind/implementation.js":
false,

/***/ "./node_modules/function-bind/index.js":
false,

/***/ "./node_modules/has-symbols/shams.js":
false,

/***/ "./node_modules/has/src/index.js":
false,

/***/ "./node_modules/next/dist/client/link.js":
false,

/***/ "./node_modules/object-keys/implementation.js":
false,

/***/ "./node_modules/object-keys/index.js":
false,

/***/ "./node_modules/object-keys/isArguments.js":
false,

/***/ "./node_modules/object.assign/implementation.js":
false,

/***/ "./node_modules/object.assign/index.js":
false,

/***/ "./node_modules/object.assign/polyfill.js":
false,

/***/ "./node_modules/object.assign/shim.js":
false,

/***/ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js":
false,

/***/ "./node_modules/prop-types-exact/build/index.js":
false

})
//# sourceMappingURL=production.js.cc5b81476d946ab90808.hot-update.js.map