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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/text.json":
/*!**************************!*\
  !*** ./config/text.json ***!
  \**************************/
/*! exports provided: pl, eng, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"pl\":{\"production\":\"Produkcja\",\"productionModels\":\"INNE MODELE\",\"aboutUs\":\"O nas\",\"aboutUsButton\":\"Czytaj dalej\",\"aboutUsFirstText\":\"Firma 'JACHT – PLAST' zajmuje się budową jachtów żaglowych i motorowych. Jachty przez nas wykonane charakteryzują się ciekawą zabudową wnętrza, zapewniają komfort i wygodę. Do każdego projektu podchodzimy indywidualnie, tworząc dzięki temu jednostki będące dumą naszą jak i ich właścicieli. Możemy się poszczycić blisko 20-letnim doświadczeniem w branży. Daje nam to wiedzę, którą chętnie dzielimy się z klientem. Nasze łodzie spełniają wymagane standardy jakości i bezpieczeństwa.\",\"aboutUsSecondText\":\"Posiadamy również wieloletnie doświadczenie w produkcji laminatów poliestrowo – szklanych. Nasze wyroby produkowane są z wysokiej jakości materiałów, co zapewnia im trwałość w użytkowaniu. Współpracujemy z wieloma dostawcami, zapewniając naszym klientom wybór urządzeń wyposażenia jachtu. Dzięki zdobytemu doświadczeniu w produkcji laminatów, realizujemy również zlecenia na dowolny rodzaj wyrobów laminatowych. Duże możliwości produkcyjne oraz niezaprzeczalna kompetentność pracowników, dają gwarancję solidnego wykonania wyrobu.\",\"aboutUsThirdText\":\"Nie tylko zajmujemy się produkcją, ale również zapewniamy serwis wykonanych łodzi. Dodatkowo świadczymy usługi napraw i remontów używanego sprzętu pływającego.\",\"transport\":\"Transport\",\"transportListOne\":\"Świadczymy usługi z zakresu krajowego i międzynarodowego transportu towarów\",\"transportListTwo\":\"Zapewniamy w pełni profesjonalny i ubezpieczony transport jachtów żaglowych i łodzi motorowych oraz pojazdów\",\"transportListThree\":\"Dysponujemy samochodami dostosowanymi do przewozu jednostek do 12 m długości i masie 8 ton oraz mniejszych, poniżej 3,5 tony\",\"transportListFour\":\"Posiadamy wymagane w transporcie drogowym zezwolenia i ubezpieczenia ładunku\",\"transportListFive\":\"Ustalamy indywidualne ceny, w zależności od zakresu uaługi oraz odpowiadamy na zadawane mailem lub telefonicznie pytania\",\"transportText\":\"<h3>Nasza firma posiada wieloletnie doświadczenie w budowie i naprawie jachtów żaglowych i motorowych, co daje nam wiedzę o potrzebach klientów zainteresowanych transportem swoich jednostek.<br/><br/>Kliknij poniżej żeby zobaczyć galerię!</h3>\",\"contact\":\"Kontakt\",\"contactHeader\":\"Zapraszamy do kontaktu\",\"contactText\":\"<h1 style={{marginBottom: 8}}>Jacht-Plast</h1><h2 style={{marginTop: 0}}>Zdzisław Sobolewski</h2><h3>Adres:</h3>Ul. Przemysłowa 4<br/>26-340 Drzewica<br/>NIP: 799-13-31-976<br/><h3>Kontakt:</h3>Tel/fax (48) 375 67 35<br/>Tel. kom. 601 256 133<br/>Email: jachtplast@gmail.com<br/><h3>Godziny pracy:</h3>Poniedziałek - Piątek<br/>8:00 - 17:00\",\"formName\":\"Imię i nazwisko\",\"formTopic\":\"Temat\",\"formMessage\":\"Wpisz wiadomość...\",\"formSend\":\"Wyślij\",\"footerContact\":\"Kontakt\",\"footerContactData\":\"Tel/fax (48) 375 67 35<br/>Tel. kom. 601 256 133 <br/>E-mail: jachtplast@gmail.com<br/><br/>Godziny pracy:<br/>Poniedziałek - Piątek<br/>8:00 - 17:00\",\"footerData\":\"Dane firmy\",\"footerDataData\":\"PHUP JACHT-PLAST<br/>ul. Przemysłowa 4<br/>26-340 Drzewica<br/><br/>NIP: 799-13-31-976<br/>\",\"footerPages\":\"Strony:\",\"footerInvite\":\"Odwiedź nasz profil na Facebooku!\",\"alert\":\"Przed wysłaniem wiadomości wypełnij wszystkie pola\"},\"eng\":{\"production\":\"Production\",\"productionModels\":\"DIFFERENT MODELS\",\"aboutUs\":\"About us\",\"aboutUsButton\":\"Read more\",\"aboutUsFirstText\":\"'JACHT-PLAST' company deals in sailing bouts and motor yachts building. Yachts made by us are characterized by interesting interior design, they provide comfort and convenience. To each project we approach individually, creating units that are our pride and their owners. We can boast of nearly 20 years of experience in industry. This gives us knowledge that we can share with our clients. Our boats meet the required quality and safety standards.\",\"aboutUsSecondText\":\"We also have many years of experience on the production of glass-polyester laminates. Our products are made of high quality materials, which ensures their durability. We collaborate with many suppliers, so we provide possibility to choose yacht equipment. Thanks to experience gained in the production of laminates, we also carry out orders for any type of laminate products. Large production capabilities and undeniable competence of employees guarantee a height performance of the final product\",\"aboutUsThirdText\":\"We not only manufacture, but also provide service for made boats. In addition, we provide repair and renovation services for second-hand floating equipment.\",\"transport\":\"Transport\",\"transportListOne\":\"We provide services in the field of domestic and international transport of goods\",\"transportListTwo\":\"We provide fully professional and insured transport of sailing yachts and motor boats as well as vehicles\",\"transportListThree\":\"We have vehicles adapted to transport yachts up to 12 m long and weighing 8 tons and smaller, below 3.5 tons\",\"transportListFour\":\"We have permits and cargo insurance required for road transport\",\"transportListFive\":\"We set individual prices depending on the scope of service and answer questions raised by e-mail or by phone\",\"transportText\":\"<h3>Our comany has many years of experience in the building and repairing sailing and motor yachts, which gives us knowledge about the needs of customers interested in transporting their bouts.<br/><br/>Click below to see gallery!</h3>\",\"contact\":\"Contact\",\"contactHeader\":\"Contact us\",\"contactText\":\"<h1 style={{marginBottom: 8}}>Jacht-Plast</h1><h2 style={{marginTop: 0}}>Zdzisław Sobolewski</h2><h3>Address:</h3>St. Przemysłowa 4<br/>26-340 Drzewica<br/>NIP: 799-13-31-976<br/><h3>Contact:</h3>Fax: (48) 375 67 35<br/>Pone: 601 256 133<br/>Email: jachtplast@gmail.com<br/><h3>Work hours:</h3>Monday - Friday<br/>8am - 5pm\",\"formName\":\"Name and surname\",\"formTopic\":\"Topic\",\"formMessage\":\"Write a message...\",\"formSend\":\"Send\",\"footerContact\":\"Contact\",\"footerContactData\":\"Fax: (48) 375 67 35<br/>Phone: 601 256 133 <br/>Email: jachtplast@gmail.com<br/><br/>Work hours:<br/>Monday - Friday<br/>8am - 5pm\",\"footerData\":\"Company data\",\"footerDataData\":\"PHUP JACHT-PLAST<br/>st. Przemysłowa 4<br/>26-340 Drzewica<br/><br/>NIP: 799-13-31-976<br/>\",\"footerPages\":\"Pages:\",\"footerInvite\":\"Visit our Facebook profile!\",\"alert\":\"Before sending a message fill all fields\"}}");

/***/ }),

/***/ "./config/text.service.js":
/*!********************************!*\
  !*** ./config/text.service.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TextService; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text */ "./config/text.json");
var _text__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./text */ "./config/text.json", 1);


class TextService {}

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(TextService, "textPl", _text__WEBPACK_IMPORTED_MODULE_1__["pl"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(TextService, "textEng", _text__WEBPACK_IMPORTED_MODULE_1__["eng"]);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_reducers_modalReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/reducers/modalReducer */ "./redux/reducers/modalReducer.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_reducers_switchReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/reducers/switchReducer */ "./redux/reducers/switchReducer.js");
/* harmony import */ var _redux_reducers_cookieReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/reducers/cookieReducer */ "./redux/reducers/cookieReducer.js");
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-cookie */ "react-cookie");
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_cookie__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _public_icon_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../public/icon.png */ "./public/icon.png");
/* harmony import */ var _public_icon_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_icon_png__WEBPACK_IMPORTED_MODULE_10__);

var _jsxFileName = "/home/konrad/WebstormProjects/Jacht-Plast/client/pages/_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_2__["combineReducers"])({
  modal: _redux_reducers_modalReducer__WEBPACK_IMPORTED_MODULE_3__["default"],
  switch: _redux_reducers_switchReducer__WEBPACK_IMPORTED_MODULE_5__["default"],
  cookie: _redux_reducers_cookieReducer__WEBPACK_IMPORTED_MODULE_6__["default"]
});
const store = Object(redux__WEBPACK_IMPORTED_MODULE_2__["createStore"])(rootReducer);

const MyApp = ({
  Component,
  pageProps
}) => {
  return __jsx(react_cookie__WEBPACK_IMPORTED_MODULE_7__["CookiesProvider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx(react_redux__WEBPACK_IMPORTED_MODULE_4__["Provider"], {
    store: store,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx("link", {
    rel: "shortcut icon",
    href: _public_icon_png__WEBPACK_IMPORTED_MODULE_10___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  })), __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_8__["Helmet"], {
    htmlAttributes: {
      lang: 'pl'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }), __jsx(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./public/icon.png":
/*!*************************!*\
  !*** ./public/icon.png ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/icon-cd3db45eb8c373c6b47d8734cf8d1581.png";

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

/***/ "./redux/reducers/cookieReducer.js":
/*!*****************************************!*\
  !*** ./redux/reducers/cookieReducer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _actions_cookieActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/cookieActions */ "./redux/actions/cookieActions.js");


const initialState = {
  cookieAccepted: false,
  showCookies: true
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case _actions_cookieActions__WEBPACK_IMPORTED_MODULE_1__["ACCEPT_COOKIE"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        cookieAccepted: true,
        showCookies: false
      });

    case _actions_cookieActions__WEBPACK_IMPORTED_MODULE_1__["CANCEL_COOKIE"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        cookieAccepted: false,
        showCookies: false
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./redux/reducers/modalReducer.js":
/*!****************************************!*\
  !*** ./redux/reducers/modalReducer.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _actions_modalActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/modalActions */ "./redux/actions/modalActions.js");


const initialState = {
  isOpen: false,
  photos: null,
  index: 0
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case _actions_modalActions__WEBPACK_IMPORTED_MODULE_1__["OPEN_MODAL"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        isOpen: true
      });

    case _actions_modalActions__WEBPACK_IMPORTED_MODULE_1__["LOAD_DATA_MODAL"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        photos: action.payload
      });

    case _actions_modalActions__WEBPACK_IMPORTED_MODULE_1__["SET_NUMBER_MODAL"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        index: action.payload
      });

    case _actions_modalActions__WEBPACK_IMPORTED_MODULE_1__["CLOSE_MODAL"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        isOpen: false,
        index: 0
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./redux/reducers/switchReducer.js":
/*!*****************************************!*\
  !*** ./redux/reducers/switchReducer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _actions_switchActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/switchActions */ "./redux/actions/switchActions.js");
/* harmony import */ var _config_text_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/text.service */ "./config/text.service.js");



const initialState = {
  isPl: true,
  language: _config_text_service__WEBPACK_IMPORTED_MODULE_2__["default"].textPl
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case _actions_switchActions__WEBPACK_IMPORTED_MODULE_1__["SET_ENG"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        isPl: false,
        language: _config_text_service__WEBPACK_IMPORTED_MODULE_2__["default"].textEng
      });

    case _actions_switchActions__WEBPACK_IMPORTED_MODULE_1__["SET_PL"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        isPl: true,
        language: _config_text_service__WEBPACK_IMPORTED_MODULE_2__["default"].textPl
      });

    default:
      return state;
  }
});

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-cookie":
/*!*******************************!*\
  !*** external "react-cookie" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-cookie");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map