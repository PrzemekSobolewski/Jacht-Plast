webpackHotUpdate("static/development/pages/api.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/api.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/api.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-parallax */ "./node_modules/react-parallax/dist/api.js");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_parallax__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_images_slider_jachty_2_2560x12002_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/slider-jachty-2-2560x12002.png */ "./assets/images/slider-jachty-2-2560x12002.png");
/* harmony import */ var _assets_images_slider_jachty_2_2560x12002_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_slider_jachty_2_2560x12002_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_scroll_to__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-scroll-to */ "./node_modules/react-scroll-to/dist/react-scroll-to.js");
/* harmony import */ var react_scroll_to__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_scroll_to__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_images_transport_20190515_073912_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/images/transport/20190515_073912.jpg */ "./assets/images/transport/20190515_073912.jpg");
/* harmony import */ var _assets_images_transport_20190515_073912_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_images_transport_20190515_073912_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_images_production_versus_20170919_070131_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/images/production/versus/20170919_070131.jpg */ "./assets/images/production/versus/20170919_070131.jpg");
/* harmony import */ var _assets_images_production_versus_20170919_070131_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_images_production_versus_20170919_070131_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_images_transport_20190603_091020_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/images/transport/20190603_091020.jpg */ "./assets/images/transport/20190603_091020.jpg");
/* harmony import */ var _assets_images_transport_20190603_091020_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_images_transport_20190603_091020_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/api.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "/home/konrad/WebstormProjects/Jacht-Plast/client/pages/api.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











var Home = function Home() {
  var switchState = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"])(function (state) {
    return state["switch"];
  });
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_9__["Helmet"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("meta", {
    charSet: "utf-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Strona G\u0142\xF3wna - Jacht Plast"), __jsx("meta", {
    name: "description",
    content: "Jacht Plast zajmuje si\u0119\xA0budow\u0105\xA0jacht\xF3w, wyrobami laminotowymi oraz trasnsportem. \u015Awiadczymy us\u0142ugi dla zadowolonych klient\xF3w z ca\u0142ego \u015Bwiata.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })), __jsx(react_parallax__WEBPACK_IMPORTED_MODULE_2__["Parallax"], {
    bgImage: _assets_images_slider_jachty_2_2560x12002_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    strength: 600,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("div", {
    className: 'bgContainer',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("div", {
    className: 'bgText',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "JACHT-PLAST"), __jsx(react_scroll_to__WEBPACK_IMPORTED_MODULE_4__["ScrollTo"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, function (_ref) {
    var scrollTo = _ref.scrollTo;
    return __jsx("div", {
      className: 'bgButtonContainer',
      onClick: function onClick() {
        return scrollTo({
          x: 0,
          y: 700,
          smooth: true
        });
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, __jsx("div", {
      className: 'bgButton2',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, switchState.language.aboutUsButton), __jsx("div", {
      className: 'bgButton',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, switchState.language.aboutUsButton));
  }))), __jsx("div", {
    className: "about_us_div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("div", {
    className: 'about_us_first',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, switchState.language.aboutUsFirstText), __jsx("img", {
    src: _assets_images_transport_20190515_073912_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
    className: 'about_us_photo',
    alt: "Image of Jacht-Plast",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  })), __jsx("div", {
    className: 'about_us_first',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("img", {
    src: _assets_images_transport_20190603_091020_jpg__WEBPACK_IMPORTED_MODULE_7___default.a,
    className: 'about_us_photo',
    alt: "Image of Jacht-Plast",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, switchState.language.aboutUsSecondText)), __jsx("div", {
    className: 'about_us_first',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, switchState.language.aboutUsThirdText), __jsx("img", {
    src: _assets_images_production_versus_20170919_070131_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
    className: 'about_us_photo',
    alt: "Image of Jacht-Plast",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=api.js.e56779e263c2f6fb8181.hot-update.js.map