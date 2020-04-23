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

/***/ "/WEd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SET_PL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SET_ENG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return setPl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return setEng; });
const SET_PL = "SET_PL";
const SET_ENG = "SET_ENG";
const setPl = () => ({
  type: SET_PL
});
const setEng = () => ({
  type: SET_ENG
});

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js
var get_own_property_descriptor = __webpack_require__("Jo+v");
var get_own_property_descriptor_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptor);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __webpack_require__("4mXO");
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("pLtp");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("hfKm");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  if (key in obj) {
    define_property_default()(obj, key, {
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
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = keys_default()(source);

    if (typeof get_own_property_symbols_default.a === 'function') {
      ownKeys = ownKeys.concat(get_own_property_symbols_default()(source).filter(function (sym) {
        return get_own_property_descriptor_default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}
// EXTERNAL MODULE: ./redux/actions/modalActions.js
var modalActions = __webpack_require__("LpoC");

// CONCATENATED MODULE: ./redux/reducers/modalReducer.js


const initialState = {
  isOpen: false,
  photos: null,
  index: 0
};
/* harmony default export */ var modalReducer = ((state = initialState, action) => {
  switch (action.type) {
    case modalActions["c" /* OPEN_MODAL */]:
      return _objectSpread({}, state, {
        isOpen: true
      });

    case modalActions["b" /* LOAD_DATA_MODAL */]:
      return _objectSpread({}, state, {
        photos: action.payload
      });

    case modalActions["d" /* SET_NUMBER_MODAL */]:
      return _objectSpread({}, state, {
        index: action.payload
      });

    case modalActions["a" /* CLOSE_MODAL */]:
      return _objectSpread({}, state, {
        isOpen: false,
        index: 0
      });

    default:
      return state;
  }
});
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./redux/actions/switchActions.js
var switchActions = __webpack_require__("/WEd");

// EXTERNAL MODULE: ./config/text.json
var config_text = __webpack_require__("QFy0");

// CONCATENATED MODULE: ./config/text.service.js


class TextService {}

_defineProperty(TextService, "textPl", config_text["b" /* pl */]);

_defineProperty(TextService, "textEng", config_text["a" /* eng */]);
// CONCATENATED MODULE: ./redux/reducers/switchReducer.js



const switchReducer_initialState = {
  isPl: true,
  language: TextService.textPl
};
/* harmony default export */ var switchReducer = ((state = switchReducer_initialState, action) => {
  switch (action.type) {
    case switchActions["a" /* SET_ENG */]:
      return _objectSpread({}, state, {
        isPl: false,
        language: TextService.textEng
      });

    case switchActions["b" /* SET_PL */]:
      return _objectSpread({}, state, {
        isPl: true,
        language: TextService.textPl
      });

    default:
      return state;
  }
});
// EXTERNAL MODULE: ./redux/actions/cookieActions.js
var cookieActions = __webpack_require__("8Dcf");

// CONCATENATED MODULE: ./redux/reducers/cookieReducer.js


const cookieReducer_initialState = {
  cookieAccepted: false,
  showCookies: true
};
/* harmony default export */ var cookieReducer = ((state = cookieReducer_initialState, action) => {
  switch (action.type) {
    case cookieActions["a" /* ACCEPT_COOKIE */]:
      return _objectSpread({}, state, {
        cookieAccepted: true,
        showCookies: false
      });

    case cookieActions["b" /* CANCEL_COOKIE */]:
      return _objectSpread({}, state, {
        cookieAccepted: false,
        showCookies: false
      });

    default:
      return state;
  }
});
// EXTERNAL MODULE: external "react-cookie"
var external_react_cookie_ = __webpack_require__("wEaX");

// EXTERNAL MODULE: external "react-helmet"
var external_react_helmet_ = __webpack_require__("zIXN");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./public/icon.png
var icon = __webpack_require__("rZ+P");
var icon_default = /*#__PURE__*/__webpack_require__.n(icon);

// CONCATENATED MODULE: ./pages/_app.js
var __jsx = external_react_default.a.createElement;










const rootReducer = Object(external_redux_["combineReducers"])({
  modal: modalReducer,
  switch: switchReducer,
  cookie: cookieReducer
});
const store = Object(external_redux_["createStore"])(rootReducer);

const MyApp = ({
  Component,
  pageProps
}) => {
  return __jsx(external_react_cookie_["CookiesProvider"], null, __jsx(external_react_redux_["Provider"], {
    store: store
  }, __jsx(head_default.a, null, __jsx("link", {
    rel: "shortcut icon",
    href: icon_default.a
  })), __jsx(external_react_helmet_["Helmet"], {
    htmlAttributes: {
      lang: 'pl'
    }
  }), __jsx(Component, pageProps)));
};

/* harmony default export */ var _app = __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "8Dcf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ACCEPT_COOKIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CANCEL_COOKIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return acceptCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return cancelCookie; });
const ACCEPT_COOKIE = 'ACCEPT_COOKIE';
const CANCEL_COOKIE = 'CANCEL_COOKIE';
const acceptCookie = () => ({
  type: ACCEPT_COOKIE
});
const cancelCookie = () => ({
  type: CANCEL_COOKIE
});

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "LpoC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return OPEN_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LOAD_DATA_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SET_NUMBER_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CLOSE_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return openModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return loadDataModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return setNumberModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return closeModal; });
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

/***/ "QFy0":
/***/ (function(module) {

module.exports = JSON.parse("{\"b\":{\"production\":\"Produkcja\",\"productionModels\":\"INNE MODELE\",\"aboutUs\":\"O nas\",\"aboutUsButton\":\"Czytaj dalej\",\"aboutUsFirstText\":\"Firma 'JACHT – PLAST' zajmuje się budową jachtów żaglowych i motorowych. Jachty przez nas wykonane charakteryzują się ciekawą zabudową wnętrza, zapewniają komfort i wygodę. Do każdego projektu podchodzimy indywidualnie, tworząc dzięki temu jednostki będące dumą naszą jak i ich właścicieli. Możemy się poszczycić blisko 20-letnim doświadczeniem w branży. Daje nam to wiedzę, którą chętnie dzielimy się z klientem. Nasze łodzie spełniają wymagane standardy jakości i bezpieczeństwa.\",\"aboutUsSecondText\":\"Posiadamy również wieloletnie doświadczenie w produkcji laminatów poliestrowo – szklanych. Nasze wyroby produkowane są z wysokiej jakości materiałów, co zapewnia im trwałość w użytkowaniu. Współpracujemy z wieloma dostawcami, zapewniając naszym klientom wybór urządzeń wyposażenia jachtu. Dzięki zdobytemu doświadczeniu w produkcji laminatów, realizujemy również zlecenia na dowolny rodzaj wyrobów laminatowych. Duże możliwości produkcyjne oraz niezaprzeczalna kompetentność pracowników, dają gwarancję solidnego wykonania wyrobu.\",\"aboutUsThirdText\":\"Nie tylko zajmujemy się produkcją, ale również zapewniamy serwis wykonanych łodzi. Dodatkowo świadczymy usługi napraw i remontów używanego sprzętu pływającego.\",\"transport\":\"Transport\",\"transportListOne\":\"Świadczymy usługi z zakresu krajowego i międzynarodowego transportu towarów\",\"transportListTwo\":\"Zapewniamy w pełni profesjonalny i ubezpieczony transport jachtów żaglowych i łodzi motorowych oraz pojazdów\",\"transportListThree\":\"Dysponujemy samochodami dostosowanymi do przewozu jednostek do 12 m długości i masie 8 ton oraz mniejszych, poniżej 3,5 tony\",\"transportListFour\":\"Posiadamy wymagane w transporcie drogowym zezwolenia i ubezpieczenia ładunku\",\"transportListFive\":\"Ustalamy indywidualne ceny, w zależności od zakresu uaługi oraz odpowiadamy na zadawane mailem lub telefonicznie pytania\",\"transportText\":\"<h3>Nasza firma posiada wieloletnie doświadczenie w budowie i naprawie jachtów żaglowych i motorowych, co daje nam wiedzę o potrzebach klientów zainteresowanych transportem swoich jednostek.<br/><br/>Kliknij poniżej żeby zobaczyć galerię!</h3>\",\"contact\":\"Kontakt\",\"contactHeader\":\"Zapraszamy do kontaktu\",\"contactText\":\"<h1 style={{marginBottom: 8}}>Jacht-Plast</h1><h2 style={{marginTop: 0}}>Zdzisław Sobolewski</h2><h3>Adres:</h3>Ul. Przemysłowa 4<br/>26-340 Drzewica<br/>NIP: 799-13-31-976<br/><h3>Kontakt:</h3>Tel/fax (48) 375 67 35<br/>Tel. kom. 601 256 133<br/>Email: jachtplast@gmail.com<br/><h3>Godziny pracy:</h3>Poniedziałek - Piątek<br/>8:00 - 17:00\",\"formName\":\"Imię i nazwisko\",\"formTopic\":\"Temat\",\"formMessage\":\"Wpisz wiadomość...\",\"formSend\":\"Wyślij\",\"footerContact\":\"Kontakt\",\"footerContactData\":\"Tel/fax (48) 375 67 35<br/>Tel. kom. 601 256 133 <br/>E-mail: jachtplast@gmail.com<br/><br/>Godziny pracy:<br/>Poniedziałek - Piątek<br/>8:00 - 17:00\",\"footerData\":\"Dane firmy\",\"footerDataData\":\"PHUP JACHT-PLAST<br/>ul. Przemysłowa 4<br/>26-340 Drzewica<br/><br/>NIP: 799-13-31-976<br/>\",\"footerPages\":\"Strony:\",\"footerInvite\":\"Odwiedź nasz profil na Facebooku!\",\"alert\":\"Przed wysłaniem wiadomości wypełnij wszystkie pola\"},\"a\":{\"production\":\"Production\",\"productionModels\":\"DIFFERENT MODELS\",\"aboutUs\":\"About us\",\"aboutUsButton\":\"Read more\",\"aboutUsFirstText\":\"'JACHT-PLAST' company deals in sailing bouts and motor yachts building. Yachts made by us are characterized by interesting interior design, they provide comfort and convenience. To each project we approach individually, creating units that are our pride and their owners. We can boast of nearly 20 years of experience in industry. This gives us knowledge that we can share with our clients. Our boats meet the required quality and safety standards.\",\"aboutUsSecondText\":\"We also have many years of experience on the production of glass-polyester laminates. Our products are made of high quality materials, which ensures their durability. We collaborate with many suppliers, so we provide possibility to choose yacht equipment. Thanks to experience gained in the production of laminates, we also carry out orders for any type of laminate products. Large production capabilities and undeniable competence of employees guarantee a height performance of the final product\",\"aboutUsThirdText\":\"We not only manufacture, but also provide service for made boats. In addition, we provide repair and renovation services for second-hand floating equipment.\",\"transport\":\"Transport\",\"transportListOne\":\"We provide services in the field of domestic and international transport of goods\",\"transportListTwo\":\"We provide fully professional and insured transport of sailing yachts and motor boats as well as vehicles\",\"transportListThree\":\"We have vehicles adapted to transport yachts up to 12 m long and weighing 8 tons and smaller, below 3.5 tons\",\"transportListFour\":\"We have permits and cargo insurance required for road transport\",\"transportListFive\":\"We set individual prices depending on the scope of service and answer questions raised by e-mail or by phone\",\"transportText\":\"<h3>Our comany has many years of experience in the building and repairing sailing and motor yachts, which gives us knowledge about the needs of customers interested in transporting their bouts.<br/><br/>Click below to see gallery!</h3>\",\"contact\":\"Contact\",\"contactHeader\":\"Contact us\",\"contactText\":\"<h1 style={{marginBottom: 8}}>Jacht-Plast</h1><h2 style={{marginTop: 0}}>Zdzisław Sobolewski</h2><h3>Address:</h3>St. Przemysłowa 4<br/>26-340 Drzewica<br/>NIP: 799-13-31-976<br/><h3>Contact:</h3>Fax: (48) 375 67 35<br/>Pone: 601 256 133<br/>Email: jachtplast@gmail.com<br/><h3>Work hours:</h3>Monday - Friday<br/>8am - 5pm\",\"formName\":\"Name and surname\",\"formTopic\":\"Topic\",\"formMessage\":\"Write a message...\",\"formSend\":\"Send\",\"footerContact\":\"Contact\",\"footerContactData\":\"Fax: (48) 375 67 35<br/>Phone: 601 256 133 <br/>Email: jachtplast@gmail.com<br/><br/>Work hours:<br/>Monday - Friday<br/>8am - 5pm\",\"footerData\":\"Company data\",\"footerDataData\":\"PHUP JACHT-PLAST<br/>st. Przemysłowa 4<br/>26-340 Drzewica<br/><br/>NIP: 799-13-31-976<br/>\",\"footerPages\":\"Pages:\",\"footerInvite\":\"Visit our Facebook profile!\",\"alert\":\"Before sending a message fill all fields\"}}");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "rZ+P":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/icon-cd3db45eb8c373c6b47d8734cf8d1581.png";

/***/ }),

/***/ "wEaX":
/***/ (function(module, exports) {

module.exports = require("react-cookie");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zIXN":
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ })

/******/ });