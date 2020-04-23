webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/NavigationContext.js":
false,

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/api.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _redux_reducers_modalReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/reducers/modalReducer */ "./redux/reducers/modalReducer.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/api.js");
/* harmony import */ var _redux_reducers_switchReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/reducers/switchReducer */ "./redux/reducers/switchReducer.js");
/* harmony import */ var _redux_reducers_cookieReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/reducers/cookieReducer */ "./redux/reducers/cookieReducer.js");
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-cookie */ "./node_modules/react-cookie/es6/api.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _public_icon_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../public/icon.png */ "./public/icon.png");
/* harmony import */ var _public_icon_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_icon_png__WEBPACK_IMPORTED_MODULE_10__);

var _jsxFileName = "/home/konrad/WebstormProjects/Jacht-Plast/client/pages/_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










var rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_2__["combineReducers"])({
  modal: _redux_reducers_modalReducer__WEBPACK_IMPORTED_MODULE_3__["default"],
  "switch": _redux_reducers_switchReducer__WEBPACK_IMPORTED_MODULE_5__["default"],
  cookie: _redux_reducers_cookieReducer__WEBPACK_IMPORTED_MODULE_6__["default"]
});
var store = Object(redux__WEBPACK_IMPORTED_MODULE_2__["createStore"])(rootReducer);

var MyApp = function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return __jsx(react_cookie__WEBPACK_IMPORTED_MODULE_7__["CookiesProvider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx(react_redux__WEBPACK_IMPORTED_MODULE_4__["Provider"], {
    store: store,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("link", {
    rel: "shortcut icon",
    href: _public_icon_png__WEBPACK_IMPORTED_MODULE_10___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  })), __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_8__["Helmet"], {
    htmlAttributes: {
      lang: 'pl'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), __jsx(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ })

})
//# sourceMappingURL=_app.js.de916ee67dc540585e1e.hot-update.js.map