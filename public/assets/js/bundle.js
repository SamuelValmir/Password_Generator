/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/Form.js":
/*!*****************************!*\
  !*** ./src/modules/Form.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Form)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/modules/constants.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var Form = /*#__PURE__*/function () {
  function Form() {
    _classCallCheck(this, Form);
  }

  _createClass(Form, null, [{
    key: "validateCheckboxes",
    value: function validateCheckboxes(checkCheckboxList) {
      var checkBoxCheckedList = [];
      checkCheckboxList.forEach(function (element) {
        if (element.getAttribute("checked") === "true") {
          var checkboxType = element.classList[1];
          checkBoxCheckedList.push(checkboxType);
        }

        ;
      });
      if (checkBoxCheckedList.length >= 1) return checkBoxCheckedList;
      return undefined;
    }
  }, {
    key: "checkCheckbox",
    value: function checkCheckbox(checkbox) {
      var checkmark = checkbox.children[0];
      checkmark.style.visibility = "visible";
      checkbox.style.borderColor = getComputedStyle(document.documentElement).getPropertyValue("--highlight-border-color");
    }
  }, {
    key: "unCheckCheckbox",
    value: function unCheckCheckbox(checkbox) {
      var checkmark = checkbox.children[0];
      checkmark.style.visibility = "hidden";
      checkbox.style.borderColor = getComputedStyle(document.documentElement).getPropertyValue("--default-border-color");
    }
  }, {
    key: "generatePassword",
    value: function generatePassword(passwordLength, checkBoxCheckedList) {
      var password = [];
      var passwordTypes = []; //? [numbers, uppercase, lowercase, symbols]

      var passwordHasNumbers = checkBoxCheckedList.includes("numbers");
      var passwordHasUppercase = checkBoxCheckedList.includes("uppercase");
      var passwordHasLowercase = checkBoxCheckedList.includes("lowercase");
      var passwordHasSymbols = checkBoxCheckedList.includes("symbols");

      if (passwordHasNumbers) {
        passwordTypes.push(_toConsumableArray(_constants__WEBPACK_IMPORTED_MODULE_0__.NUMBERS));
      }

      ;

      if (passwordHasUppercase) {
        passwordTypes.push(_toConsumableArray(_constants__WEBPACK_IMPORTED_MODULE_0__.UPPERCASE));
      }

      ;

      if (passwordHasLowercase) {
        passwordTypes.push(_toConsumableArray(_constants__WEBPACK_IMPORTED_MODULE_0__.LOWERCASE));
      }

      ;

      if (passwordHasSymbols) {
        passwordTypes.push(_toConsumableArray(_constants__WEBPACK_IMPORTED_MODULE_0__.SYMBOLS));
      }

      ;

      for (var i = 0; i < passwordLength; i++) {
        var randomPasswordTypeIndex = Math.floor(Math.random() * passwordTypes.length);
        var randomPasswordType = passwordTypes[randomPasswordTypeIndex];
        var randomCharacterIndex = Math.floor(Math.random() * randomPasswordType.length);
        var randomCharacter = randomPasswordType[randomCharacterIndex];
        password.push(randomCharacter);
      }

      ;
      password = password.join("");
      return password;
    }
  }]);

  return Form;
}();


;

/***/ }),

/***/ "./src/modules/constants.js":
/*!**********************************!*\
  !*** ./src/modules/constants.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LOWERCASE": () => (/* binding */ LOWERCASE),
/* harmony export */   "NUMBERS": () => (/* binding */ NUMBERS),
/* harmony export */   "SYMBOLS": () => (/* binding */ SYMBOLS),
/* harmony export */   "UPPERCASE": () => (/* binding */ UPPERCASE)
/* harmony export */ });
var NUMBERS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var LOWERCASE = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var UPPERCASE = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var SYMBOLS = ["'", "\"", "!", "?", "@", "#", "$", "%", "&", "*", "-", "/", '\\', "|", "=", "_", "(", ")", "[", "]", "{", "}", ",", ".", ":", ";", "<", ">"];


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n    box-sizing: border-box;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n:root {\r\n    --primary-color: rgb(138, 43, 226);\r\n    /*Highlight*/\r\n    --background-color: #f3f5f7;\r\n    --default-border-color: gray;\r\n    --highlight-border-color: rgb(112, 17, 167);\r\n}\r\n\r\nhtml {\r\n    height: 100vh;\r\n}\r\n\r\nbody {\r\n    /* background-color: var(--primary-color); */\r\n    background-image: linear-gradient(to bottom right, blueviolet, rgb(83, 43, 226), rgb(43, 153, 226));\r\n    color: rgb(112, 17, 167);\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-weight: 600;\r\n}\r\n\r\n.container {\r\n    background-color: white;\r\n    background-color: var(--background-color);\r\n\r\n    width: fit-content;\r\n    max-width: 90vw;\r\n    margin: auto;\r\n    margin-top: 3rem;\r\n    padding: 1.5rem;\r\n    border-radius: .5rem;\r\n\r\n    box-shadow: 4px 4px 10px rgb(62, 17, 167);\r\n}\r\n\r\n.password_container {\r\n    position: relative;\r\n}\r\n\r\n.password {\r\n    width: 100%;\r\n    min-height: 20px;\r\n    height: auto;\r\n    max-height: 80px;\r\n    margin: 1rem 0;\r\n    resize: vertical;\r\n    overflow-y: hidden;\r\n}\r\n\r\n.tooltip_copy {\r\n    background-color: rgba(92, 43, 226, 0.92);\r\n    color: white;\r\n    opacity: 0;\r\n\r\n    position: absolute;\r\n    top: -10%;\r\n    left: 50%;\r\n    padding: .3rem;\r\n    border-radius: 3px;\r\n\r\n    font-size: 10px;\r\n\r\n    transform: translateX(-50%);\r\n}\r\n\r\n.tooltip_copy .square {\r\n    position: absolute;\r\n    top: 100%;\r\n    left: 50%;\r\n    border-left: 5px solid transparent;\r\n    border-right: 5px solid transparent;\r\n    border-top: 5px solid rgba(92, 43, 226, 0.92);\r\n\r\n    transform: translateX(-50%);\r\n}\r\n\r\n.characters_number {\r\n    width: 5rem;\r\n}\r\n\r\n.add_container {\r\n    width: fit-content;\r\n    margin: 1rem 0;\r\n}\r\n\r\n.add_container>div {\r\n    position: relative;\r\n}\r\n\r\n.add_container>div input {\r\n    position: relative;\r\n    transform: translateY(15%);\r\n}\r\n\r\n.add_title {\r\n    color: rgb(0, 68, 156);\r\n    /* rgb(43, 153, 226) */\r\n}\r\n\r\n.add_title .tooltipError {\r\n    opacity: 0;\r\n    font-size: small;\r\n    color: rgb(255, 0, 85);\r\n}\r\n\r\n.option {\r\n    display: flex;\r\n    gap: 5px;\r\n    line-height: 1.5rem;\r\n    align-items: center;\r\n}\r\n\r\n.characters_number,\r\n.password {\r\n    padding: .1rem;\r\n    outline: none;\r\n    border: 1px solid var(--default-border-color);\r\n    border-radius: .2rem;\r\n}\r\n\r\n.characters_number:focus,\r\n.password:focus {\r\n    outline: none;\r\n    border: 1px solid var(--highlight-border-color);\r\n}\r\n\r\n.checkbox {\r\n    display: inline-block;\r\n    position: relative;\r\n\r\n    width: 1rem;\r\n    height: 1rem;\r\n    border: 1px solid var(--default-border-color);\r\n    border-radius: .2rem;\r\n}\r\n\r\n.checkbox:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.checkbox>.checkmark {\r\n    visibility: hidden;\r\n    display: inline-block;\r\n    position: absolute;\r\n\r\n    width: 6px;\r\n    height: 9px;\r\n\r\n    border: solid var(--primary-color);\r\n    border-width: 0 3px 3px 0;\r\n\r\n    transform: translate(70%, 15%) rotate(45grad);\r\n}\r\n\r\n.generate_container {\r\n    text-align: center;\r\n}\r\n\r\n.generate_button {\r\n    color: rgb(62, 17, 167);\r\n    \r\n    position: relative;\r\n    padding: .5rem;\r\n    border: none;\r\n\r\n    outline: 1.5px solid var(--primary-color);\r\n    border-radius: 4px;\r\n    z-index: 1;\r\n\r\n    transition: ease-out .3s;\r\n}\r\n\r\n\r\n.generate_button:hover, .generate_button:active{\r\n    color: white;\r\n    cursor: pointer;\r\n}\r\n\r\n.generate_button::before{\r\n    content: \"\";\r\n    opacity: 0;\r\n    z-index: -1;\r\n    \r\n    position: absolute;\r\n    top: 0;\r\n    left: 50%;\r\n    right: 50%;\r\n    bottom: 0;\r\n    border-radius: 4px;\r\n}\r\n\r\n.generate_button:hover::before, .generate_button:active::before{\r\n    background-color: var(--primary-color);\r\n    transition: .5s all ease;\r\n    \r\n    opacity: 1;\r\n    left: -1px;\r\n    right: -1px;\r\n    top: -1px;\r\n    bottom: -1px;\r\n}\r\n\r\n@media screen and (max-width: 600px)  {\r\n\r\n    .container{\r\n        padding: 1rem;\r\n    }\r\n\r\n    h1{\r\n        font-size: x-large;\r\n    }\r\n\r\n    .add_title .tooltipError{\r\n        font-size: 13px;\r\n    }\r\n/* \r\n    .generate_button:hover::before{\r\n        background-color: var(--primary-color);\r\n        animation: 1s animateButton forwards;\r\n        transition: .5s all ease;\r\n        \r\n        opacity: 1;\r\n    } */\r\n    \r\n}\r\n/* @keyframes animateButton {\r\n    from{opacity: 1;}\r\n    to{opacity: 0;}\r\n} */", "",{"version":3,"sources":["webpack://./src/assets/css/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,UAAU;IACV,SAAS;AACb;;AAEA;IACI,kCAAkC;IAClC,YAAY;IACZ,2BAA2B;IAC3B,4BAA4B;IAC5B,2CAA2C;AAC/C;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,4CAA4C;IAC5C,mGAAmG;IACnG,wBAAwB;IACxB,yCAAyC;IACzC,gBAAgB;AACpB;;AAEA;IACI,uBAAuB;IACvB,yCAAyC;;IAEzC,kBAAkB;IAClB,eAAe;IACf,YAAY;IACZ,gBAAgB;IAChB,eAAe;IACf,oBAAoB;;IAEpB,yCAAyC;AAC7C;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,gBAAgB;IAChB,YAAY;IACZ,gBAAgB;IAChB,cAAc;IACd,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,yCAAyC;IACzC,YAAY;IACZ,UAAU;;IAEV,kBAAkB;IAClB,SAAS;IACT,SAAS;IACT,cAAc;IACd,kBAAkB;;IAElB,eAAe;;IAEf,2BAA2B;AAC/B;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,SAAS;IACT,kCAAkC;IAClC,mCAAmC;IACnC,6CAA6C;;IAE7C,2BAA2B;AAC/B;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,cAAc;AAClB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,0BAA0B;AAC9B;;AAEA;IACI,sBAAsB;IACtB,sBAAsB;AAC1B;;AAEA;IACI,UAAU;IACV,gBAAgB;IAChB,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;;IAEI,cAAc;IACd,aAAa;IACb,6CAA6C;IAC7C,oBAAoB;AACxB;;AAEA;;IAEI,aAAa;IACb,+CAA+C;AACnD;;AAEA;IACI,qBAAqB;IACrB,kBAAkB;;IAElB,WAAW;IACX,YAAY;IACZ,6CAA6C;IAC7C,oBAAoB;AACxB;;AAEA;IACI,eAAe;AACnB;;;AAGA;IACI,kBAAkB;IAClB,qBAAqB;IACrB,kBAAkB;;IAElB,UAAU;IACV,WAAW;;IAEX,kCAAkC;IAClC,yBAAyB;;IAEzB,6CAA6C;AACjD;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,uBAAuB;;IAEvB,kBAAkB;IAClB,cAAc;IACd,YAAY;;IAEZ,yCAAyC;IACzC,kBAAkB;IAClB,UAAU;;IAEV,wBAAwB;AAC5B;;;AAGA;IACI,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,UAAU;IACV,WAAW;;IAEX,kBAAkB;IAClB,MAAM;IACN,SAAS;IACT,UAAU;IACV,SAAS;IACT,kBAAkB;AACtB;;AAEA;IACI,sCAAsC;IACtC,wBAAwB;;IAExB,UAAU;IACV,UAAU;IACV,WAAW;IACX,SAAS;IACT,YAAY;AAChB;;AAEA;;IAEI;QACI,aAAa;IACjB;;IAEA;QACI,kBAAkB;IACtB;;IAEA;QACI,eAAe;IACnB;AACJ;;;;;;;OAOO;;AAEP;AACA;;;GAGG","sourcesContent":["* {\r\n    box-sizing: border-box;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n:root {\r\n    --primary-color: rgb(138, 43, 226);\r\n    /*Highlight*/\r\n    --background-color: #f3f5f7;\r\n    --default-border-color: gray;\r\n    --highlight-border-color: rgb(112, 17, 167);\r\n}\r\n\r\nhtml {\r\n    height: 100vh;\r\n}\r\n\r\nbody {\r\n    /* background-color: var(--primary-color); */\r\n    background-image: linear-gradient(to bottom right, blueviolet, rgb(83, 43, 226), rgb(43, 153, 226));\r\n    color: rgb(112, 17, 167);\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-weight: 600;\r\n}\r\n\r\n.container {\r\n    background-color: white;\r\n    background-color: var(--background-color);\r\n\r\n    width: fit-content;\r\n    max-width: 90vw;\r\n    margin: auto;\r\n    margin-top: 3rem;\r\n    padding: 1.5rem;\r\n    border-radius: .5rem;\r\n\r\n    box-shadow: 4px 4px 10px rgb(62, 17, 167);\r\n}\r\n\r\n.password_container {\r\n    position: relative;\r\n}\r\n\r\n.password {\r\n    width: 100%;\r\n    min-height: 20px;\r\n    height: auto;\r\n    max-height: 80px;\r\n    margin: 1rem 0;\r\n    resize: vertical;\r\n    overflow-y: hidden;\r\n}\r\n\r\n.tooltip_copy {\r\n    background-color: rgba(92, 43, 226, 0.92);\r\n    color: white;\r\n    opacity: 0;\r\n\r\n    position: absolute;\r\n    top: -10%;\r\n    left: 50%;\r\n    padding: .3rem;\r\n    border-radius: 3px;\r\n\r\n    font-size: 10px;\r\n\r\n    transform: translateX(-50%);\r\n}\r\n\r\n.tooltip_copy .square {\r\n    position: absolute;\r\n    top: 100%;\r\n    left: 50%;\r\n    border-left: 5px solid transparent;\r\n    border-right: 5px solid transparent;\r\n    border-top: 5px solid rgba(92, 43, 226, 0.92);\r\n\r\n    transform: translateX(-50%);\r\n}\r\n\r\n.characters_number {\r\n    width: 5rem;\r\n}\r\n\r\n.add_container {\r\n    width: fit-content;\r\n    margin: 1rem 0;\r\n}\r\n\r\n.add_container>div {\r\n    position: relative;\r\n}\r\n\r\n.add_container>div input {\r\n    position: relative;\r\n    transform: translateY(15%);\r\n}\r\n\r\n.add_title {\r\n    color: rgb(0, 68, 156);\r\n    /* rgb(43, 153, 226) */\r\n}\r\n\r\n.add_title .tooltipError {\r\n    opacity: 0;\r\n    font-size: small;\r\n    color: rgb(255, 0, 85);\r\n}\r\n\r\n.option {\r\n    display: flex;\r\n    gap: 5px;\r\n    line-height: 1.5rem;\r\n    align-items: center;\r\n}\r\n\r\n.characters_number,\r\n.password {\r\n    padding: .1rem;\r\n    outline: none;\r\n    border: 1px solid var(--default-border-color);\r\n    border-radius: .2rem;\r\n}\r\n\r\n.characters_number:focus,\r\n.password:focus {\r\n    outline: none;\r\n    border: 1px solid var(--highlight-border-color);\r\n}\r\n\r\n.checkbox {\r\n    display: inline-block;\r\n    position: relative;\r\n\r\n    width: 1rem;\r\n    height: 1rem;\r\n    border: 1px solid var(--default-border-color);\r\n    border-radius: .2rem;\r\n}\r\n\r\n.checkbox:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.checkbox>.checkmark {\r\n    visibility: hidden;\r\n    display: inline-block;\r\n    position: absolute;\r\n\r\n    width: 6px;\r\n    height: 9px;\r\n\r\n    border: solid var(--primary-color);\r\n    border-width: 0 3px 3px 0;\r\n\r\n    transform: translate(70%, 15%) rotate(45grad);\r\n}\r\n\r\n.generate_container {\r\n    text-align: center;\r\n}\r\n\r\n.generate_button {\r\n    color: rgb(62, 17, 167);\r\n    \r\n    position: relative;\r\n    padding: .5rem;\r\n    border: none;\r\n\r\n    outline: 1.5px solid var(--primary-color);\r\n    border-radius: 4px;\r\n    z-index: 1;\r\n\r\n    transition: ease-out .3s;\r\n}\r\n\r\n\r\n.generate_button:hover, .generate_button:active{\r\n    color: white;\r\n    cursor: pointer;\r\n}\r\n\r\n.generate_button::before{\r\n    content: \"\";\r\n    opacity: 0;\r\n    z-index: -1;\r\n    \r\n    position: absolute;\r\n    top: 0;\r\n    left: 50%;\r\n    right: 50%;\r\n    bottom: 0;\r\n    border-radius: 4px;\r\n}\r\n\r\n.generate_button:hover::before, .generate_button:active::before{\r\n    background-color: var(--primary-color);\r\n    transition: .5s all ease;\r\n    \r\n    opacity: 1;\r\n    left: -1px;\r\n    right: -1px;\r\n    top: -1px;\r\n    bottom: -1px;\r\n}\r\n\r\n@media screen and (max-width: 600px)  {\r\n\r\n    .container{\r\n        padding: 1rem;\r\n    }\r\n\r\n    h1{\r\n        font-size: x-large;\r\n    }\r\n\r\n    .add_title .tooltipError{\r\n        font-size: 13px;\r\n    }\r\n/* \r\n    .generate_button:hover::before{\r\n        background-color: var(--primary-color);\r\n        animation: 1s animateButton forwards;\r\n        transition: .5s all ease;\r\n        \r\n        opacity: 1;\r\n    } */\r\n    \r\n}\r\n/* @keyframes animateButton {\r\n    from{opacity: 1;}\r\n    to{opacity: 0;}\r\n} */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/css/style.css":
/*!**********************************!*\
  !*** ./src/assets/css/style.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
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
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/css/style.css */ "./src/assets/css/style.css");
/* harmony import */ var _modules_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Form */ "./src/modules/Form.js");



 // It adds input listener in password textarea to make it resize automatically

document.addEventListener("input", function () {
  resizePasswordContainer();
}); // It changes the value from number of character field if its less than 0 or more than 100

document.querySelector(".characters_number").addEventListener("focusout", function (charactersNumber) {
  if (charactersNumber.target.value > 100) {
    charactersNumber.target.value = 100;
  }

  ;

  if (charactersNumber.target.value < 8) {
    charactersNumber.target.value = 8;
  }

  ;
}); // document.querySelector(".characters_number").addEventListener("input", element =>{
//     let charactersNumber = element.target;
//     let lastInputtedValue = element.data;
// });

document.addEventListener("click", function (element) {
  var target = element.target; // Don't make nothing case clicks out of container

  if (element.target.tagName === "HTML") return; // It adds click listener in checkbox

  if (target.classList.contains("checkbox") || target.parentElement.classList.contains("checkbox")) {
    var tooltipErrorElement = document.querySelector(".tooltipError");

    if (tooltipErrorElement.getAttribute("data-showing") === "true") {
      fadeOut(tooltipErrorElement);
      tooltipErrorElement.setAttribute("data-showing", "true");
    }

    ;
    if (target.classList.contains("checkmark")) target = target.parentElement;

    if (target.getAttribute("checked") === "false") {
      target.setAttribute("checked", true);
      _modules_Form__WEBPACK_IMPORTED_MODULE_1__["default"].checkCheckbox(target);
    } else {
      target.setAttribute("checked", false);
      _modules_Form__WEBPACK_IMPORTED_MODULE_1__["default"].unCheckCheckbox(target);
    }

    ;
  }

  ; // It adds click listener in generate button

  if (target.classList.contains("generate_button")) {
    var passwordTextarea = document.querySelector(".password");
    var charactersNumber = parseInt(document.querySelector(".characters_number").value);
    var checkboxList = document.querySelectorAll(".checkbox");
    var checkBoxCheckedList = _modules_Form__WEBPACK_IMPORTED_MODULE_1__["default"].validateCheckboxes(checkboxList);

    if (checkBoxCheckedList === undefined) {
      var _tooltipErrorElement = document.querySelector(".tooltipError");

      fadeIn(_tooltipErrorElement);
      return;
    }

    var tooltipCopyElement = document.querySelector(".tooltip_copy");
    fadeIn(tooltipCopyElement);
    fadeOut(tooltipCopyElement, 500, 1000);
    var password = _modules_Form__WEBPACK_IMPORTED_MODULE_1__["default"].generatePassword(charactersNumber, checkBoxCheckedList);
    passwordTextarea.value = password;
    navigator.clipboard.writeText(passwordTextarea.value);
    resizePasswordContainer();
  }

  ;
});

function resizePasswordContainer() {
  var passwordElement = document.querySelector(".password");
  passwordElement.style.height = "auto";
  passwordElement.style.height = "".concat(passwordElement.scrollHeight, "px"); // scrollHeight = clientHeight (distance between top padding and bottom padding)
}

;

function fadeIn(element) {
  element.style.opacity = 1;
  element.setAttribute("data-showing", "true");
}

;

function fadeOut(element) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var animation = element.animate([{
    "opacity": 0
  }], {
    duration: duration,
    delay: delay
  });
  animation.addEventListener("finish", function () {
    element.style.opacity = 0;
  });
}

;
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map