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
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

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
      lineNumber: 33
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
        lineNumber: 39
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
        lineNumber: 40
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("img", {
    src: _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    id: "logoImage",
    className: 'hamburger_image',
    alt: "Logo of Jacht-Plast",
    onClick: function onClick() {
      setRoute('/');
      router.push("/");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), __jsx("div", {
    onClick: function onClick() {
      setRoute('/');
      setIsOpen(false);
      router.push("/");
    },
    className: route === '/' ? 'item pressed' : 'item',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, switchState.language.aboutUs), __jsx("div", {
    onClick: function onClick() {
      setRoute('/production');
      setIsOpen(false);
      router.push("/production");
    },
    className: route === '/production' ? 'item pressed' : 'item',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, switchState.language.production), __jsx("div", {
    onClick: function onClick() {
      setRoute('/transport');
      setIsOpen(false);
      router.push("/transport");
    },
    className: route === '/transport' ? 'item pressed' : 'item',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, switchState.language.transport), __jsx("div", {
    onClick: function onClick() {
      setRoute('/contact');
      setIsOpen(false);
      router.push("/contact");
    },
    className: route === '/contact' ? 'item pressed' : 'item',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, switchState.language.contact), __jsx("div", {
    className: 'switchContainerMobile',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
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
        lineNumber: 79
      },
      __self: this
    }),
    uncheckedIcon: __jsx("img", {
      src: _assets_images_uk_png__WEBPACK_IMPORTED_MODULE_9___default.a,
      alt: "ENG",
      className: 'uncheckedSwitch',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Hamburger);

/***/ })

})
//# sourceMappingURL=production.js.fc9733ed68baaf3a68f6.hot-update.js.map