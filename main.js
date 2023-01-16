/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ \"./src/scss/style.scss\");\n/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map.js */ \"./src/map.js\");\n/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_map_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _smallscreen_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./smallscreen.js */ \"./src/smallscreen.js\");\n/* harmony import */ var _smallscreen_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_smallscreen_js__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar creditSumm = document.querySelector('#summ');\nvar creditTime = document.querySelector('#time');\nvar currency = document.querySelector('.currency-input__currency-list');\nvar currentCurrency = document.querySelector('.currency-input__current-value');\nvar city = document.querySelector('.city-input__city-list');\nvar currentCity = document.querySelector('.city-input__current-value');\nvar showModalButton1 = document.querySelector('.footer__redirect-button');\nvar showModalButton2 = document.querySelector('.calculator__button');\nvar headerLinks = document.querySelectorAll('.header__link');\nvar footerLinks = document.querySelectorAll('.footer__link');\nvar headerButton = document.querySelector('.header__button');\nshowMenu();\n// setActiveLink(headerLinks);\nshowModal(showModalButton1);\nshowModal(showModalButton2);\nsetRangeSlider(creditSumm, 2000000, 5000);\nsetRangeSlider(creditTime, 50, 1);\nsetRangeSliderForScreen(creditSumm, 2000000, 5000);\nsetRangeSliderForScreen(creditTime, 50, 1);\n// currentCity.addEventListener('click', displayList(city,currentCity));\ncurrentCurrency.addEventListener('click', displayList(currency, currentCurrency));\nvar creditConfiguration = {\n  summ: null,\n  time: null,\n  currency: '&#8381',\n  rate: 2.7\n};\nvar menuActive = false;\nfunction showMenu() {\n  var nav = document.querySelector('.header__navigation');\n  var className = 'header__navigation_active';\n  headerButton.addEventListener('click', function (event) {\n    if (!menuActive) {\n      nav.classList.add(className);\n    } else {\n      nav.classList.remove(className);\n    }\n    menuActive = !menuActive;\n  });\n}\nfunction setActiveLink(links) {\n  var className = 'link_active';\n  var hero = document.querySelector('.hero').offsetHeight / 2;\n  links.forEach(function (link) {\n    link.onclick = function () {\n      for (var i = 0; i < links.length; i++) {\n        if (links[i].classList.contains(className)) links[i].classList.remove(className);\n      }\n      link.classList.add(className);\n    };\n  });\n}\nfunction showModal(showButton) {\n  var modal = document.querySelector('.modal');\n  var closeModalButton = document.querySelector('.modal__button-close');\n  var redirectModalButton = document.querySelector('.modal__button-redirect');\n  var body = document.body;\n  var bodyClassName = 'body_noscroll';\n  var modalClassName = 'modal_visible';\n  showButton.onclick = function () {\n    modal.classList.add(modalClassName);\n    body.classList.add(bodyClassName);\n    setModalCoordinates(modal);\n    redirectModalButton.onclick = function () {\n      body.classList.remove(bodyClassName);\n      modal.classList.remove(modalClassName);\n    };\n  };\n  closeModalButton.onclick = function () {\n    modal.classList.remove(modalClassName);\n    body.classList.remove(bodyClassName);\n  };\n}\nfunction setModalCoordinates(block) {\n  var scrollY = window.pageYOffset;\n  block.style.top = scrollY + 'px';\n}\nfunction displayList(list, currentValue) {\n  return function () {\n    var className = 'list-visible';\n    var isDisabled = list.dataset.disabled;\n    if (isDisabled === 'true') {\n      list.classList.add(className);\n      isDisabled = 'false';\n      list.dataset.disabled = isDisabled;\n      chooseValue(list, currentValue);\n    } else if (isDisabled === 'false') {\n      list.classList.remove(className);\n      isDisabled = 'true';\n      list.dataset.disabled = isDisabled;\n    }\n  };\n}\n;\nfunction chooseValue(list, currentValue) {\n  var values = list.querySelectorAll('li');\n  var className = 'list-visible';\n  var isDisabled = 'true';\n  values.forEach(function (value) {\n    value.onclick = function () {\n      switch (list) {\n        case currency:\n          creditConfiguration.currency = value.dataset.value;\n          countCredit(creditConfiguration);\n          break;\n      }\n      currentValue.innerHTML = value.querySelector('span').textContent;\n      list.classList.remove(className);\n      list.dataset.disabled = isDisabled;\n    };\n  });\n}\nfunction countCredit(creditConfiguration) {\n  var summ = creditConfiguration.summ;\n  var currency = creditConfiguration.currency;\n  var time = creditConfiguration.time;\n  var rate = creditConfiguration.rate;\n  var payment = 0;\n  if (summ > 0 & time > 0 & rate > 0) {\n    time = time * 12;\n    rate = rate / 100 / 12;\n    payment = summ * (rate + rate / (Math.pow(1 + rate, time) - 1));\n  }\n  payment = Math.round(payment);\n  var paymentText = document.querySelector('.calculator__payment-value');\n  paymentText.innerHTML = payment + ' ' + currency;\n}\n;\nfunction setRangeSlider(block, maxValue, step) {\n  var rangeSlider = block.querySelector('.range-slider');\n  var line = rangeSlider.querySelector('.line');\n  var pointer = rangeSlider.querySelector('.pointer');\n  var value;\n  pointer.ondragstart = function () {\n    return false;\n  };\n  pointer.addEventListener('mousedown', function () {\n    var x = 0;\n    var innerX = event.offsetX;\n    document.onmousemove = function (event) {\n      x = event.pageX - line.getBoundingClientRect().left - innerX;\n      if (x > line.offsetWidth - pointer.offsetWidth) {\n        x = line.offsetWidth - pointer.offsetWidth;\n        pointer.style.left = x + 'px';\n      } else if (x < 0) {\n        x = 0;\n        pointer.style.left = x + 'px';\n      } else pointer.style.left = x + 'px';\n      value = maxValue * x / (line.offsetWidth - pointer.offsetWidth);\n      value = Math.round(value / step) * step;\n      block.querySelector('.calculator__value').textContent = value;\n      switch (block) {\n        case creditSumm:\n          creditConfiguration.summ = value;\n          break;\n        case creditTime:\n          creditConfiguration.time = value;\n          break;\n      }\n      countCredit(creditConfiguration);\n    };\n    document.addEventListener('mouseup', function () {\n      if (event.target != pointer || event.target != line) document.onmousemove = null;\n    });\n  });\n}\n;\nfunction setRangeSliderForScreen(block, maxValue, step) {\n  var rangeSlider = block.querySelector('.range-slider');\n  var line = rangeSlider.querySelector('.line');\n  var pointer = rangeSlider.querySelector('.pointer');\n  var value;\n  pointer.ondragstart = function () {\n    return false;\n  };\n  pointer.addEventListener('touchstart', function (event) {\n    var x = 0;\n    function move(event) {\n      x = event.changedTouches[0].pageX - line.getBoundingClientRect().left;\n      if (x > line.offsetWidth - pointer.offsetWidth) {\n        x = line.offsetWidth - pointer.offsetWidth;\n        pointer.style.left = x + 'px';\n      } else if (x < 0) {\n        x = 0;\n        pointer.style.left = x + 'px';\n      } else pointer.style.left = x + 'px';\n      value = maxValue * x / (line.offsetWidth - pointer.offsetWidth);\n      value = Math.round(value / step) * step;\n      block.querySelector('.calculator__value').textContent = value;\n      switch (block) {\n        case creditSumm:\n          creditConfiguration.summ = value;\n          break;\n        case creditTime:\n          creditConfiguration.time = value;\n          break;\n      }\n      countCredit(creditConfiguration);\n    }\n    document.addEventListener('touchmove', move);\n    document.addEventListener('touchend', function () {\n      if (event.target != pointer || event.target != line) document.removeEventListener('touchmove', move);\n    });\n  });\n}\n;\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/map.js":
/*!********************!*\
  !*** ./src/map.js ***!
  \********************/
/***/ (() => {

eval("var myMap;\nymaps.ready(init);\nfunction init() {\n  // Создание экземпляра карты и его привязка к контейнеру с\n  // заданным id (\"map\").\n  myMap = new ymaps.Map('map', {\n    // При инициализации карты обязательно нужно указать\n    // её центр и коэффициент масштабирования.\n    center: [55.76, 37.64],\n    controls: ['largeMapDefaultSet'],\n    // Москва\n    zoom: 13\n  });\n  myMap.controls.add('largeMapDefaultSet');\n}\n\n//# sourceURL=webpack:///./src/map.js?");

/***/ }),

/***/ "./src/smallscreen.js":
/*!****************************!*\
  !*** ./src/smallscreen.js ***!
  \****************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack:///./src/smallscreen.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss ***!
  \********************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_css_reset_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!../css/reset.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/reset.css\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__);\n// Imports\n\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../img/hero.jpg */ \"./src/img/hero.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../img/arrow-down.svg */ \"./src/img/arrow-down.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../img/arrow-down-red.svg */ \"./src/img/arrow-down-red.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_css_reset_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  font-family: \\\"Montserrat\\\", sans-serif;\\n  box-sizing: border-box;\\n  color: #333333;\\n  scroll-behavior: smooth;\\n}\\n\\n.body_noscroll {\\n  overflow-y: hidden;\\n}\\n\\n.anchor {\\n  line-height: 0;\\n}\\n\\n.header {\\n  width: 100%;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  padding: 25px 3%;\\n  position: absolute;\\n  z-index: 10;\\n}\\n.header * {\\n  color: #FFFFFF;\\n}\\n.header__navigation {\\n  display: flex;\\n  padding: 0;\\n  list-style: none;\\n  width: min-content;\\n}\\n.header__logo {\\n  font-size: 2rem;\\n  text-transform: capitalize;\\n  font-weight: 500;\\n}\\n.header__logo span {\\n  font-weight: 600;\\n  color: #e45742;\\n  margin-left: 2px;\\n}\\n.header__link {\\n  text-transform: uppercase;\\n  font-weight: 500;\\n}\\n.header__item {\\n  width: max-content;\\n}\\n.header__item:not(:last-of-type) {\\n  margin-right: 30px;\\n}\\n.header__link, .header__logo {\\n  text-decoration: none;\\n}\\n.header__button {\\n  display: none;\\n}\\n@media (max-width: 768px) {\\n  .header {\\n    height: 90px;\\n  }\\n  .header__navigation {\\n    flex-flow: column nowrap;\\n    background-color: #333333;\\n    align-self: flex-start;\\n    border-radius: 4px;\\n    margin-right: -10px;\\n    transition: all 0.2s linear;\\n    opacity: 0;\\n    height: 0;\\n    overflow: hidden;\\n  }\\n  .header__navigation_active {\\n    opacity: 1;\\n    height: auto;\\n  }\\n  .header__navigation_active ~ .header__button svg rect {\\n    y: 16;\\n  }\\n  .header__item {\\n    padding: 0.5rem 1rem;\\n  }\\n  .header__button {\\n    display: inline-block;\\n    padding: 0.5rem 1rem;\\n    position: absolute;\\n    right: 1%;\\n    border: 0;\\n    background-color: transparent;\\n  }\\n  .header__button svg {\\n    width: 30px;\\n    height: 20px;\\n    position: relative;\\n  }\\n  .header__button svg rect {\\n    position: absolute;\\n    transition: y 0.2s linear;\\n    y: auto;\\n  }\\n}\\n\\n.hero {\\n  height: 100vh;\\n  padding: 0 3%;\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") no-repeat 100% 70%/cover;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  position: relative;\\n}\\n.hero * {\\n  color: #FFFFFF;\\n}\\n.hero__wrapper {\\n  text-align: center;\\n}\\n.hero__cover {\\n  background-color: rgba(0, 0, 0, 0.5);\\n  position: absolute;\\n  width: 100%;\\n  height: 100%;\\n  top: 0;\\n  left: 0;\\n  z-index: 0;\\n}\\n.hero__title {\\n  font-size: 4em;\\n  text-transform: uppercase;\\n  margin-bottom: 0.25em;\\n  position: relative;\\n  z-index: 2;\\n  text-shadow: #333333 1px 0 5px;\\n}\\n.hero__subtitle {\\n  font-size: 3em;\\n  font-weight: 300;\\n  position: relative;\\n  z-index: 2;\\n  text-shadow: #333333 1px 0 5px;\\n}\\n.hero__button {\\n  width: 50px;\\n  height: 50px;\\n  border: 0;\\n  position: absolute;\\n  bottom: 8%;\\n  left: 50%;\\n  z-index: 2;\\n  transform: translate(-50%, 0);\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") no-repeat 56% 58%/contain;\\n}\\n@media (max-width: 700px) {\\n  .hero {\\n    font-size: 90%;\\n  }\\n}\\n@media (max-width: 600px) {\\n  .hero {\\n    font-size: 70%;\\n  }\\n}\\n@media (max-width: 425px) {\\n  .hero {\\n    font-size: 60%;\\n  }\\n}\\n@media (max-width: 375px) {\\n  .hero {\\n    font-size: 50%;\\n  }\\n}\\n\\n.about {\\n  background-color: #FFFFFF;\\n  background-color: #333333;\\n  padding: 3%;\\n}\\n.about__title {\\n  font-size: 2rem;\\n  text-align: center;\\n  margin-bottom: 0.5em;\\n  color: #e45742;\\n}\\n.about__text {\\n  color: #FFFFFF;\\n  font-size: 1.125rem;\\n  max-width: 1300px;\\n  text-align: center;\\n  margin: 0 auto;\\n}\\n.about .review {\\n  display: flex;\\n  justify-content: center;\\n  padding: 1%;\\n}\\n.about .review__item {\\n  max-width: 300px;\\n  min-width: 280px;\\n  height: 200px;\\n}\\n.about .review__item:not(:last-of-type) {\\n  margin-right: 2%;\\n}\\n.about .comment {\\n  display: flex;\\n  flex-flow: row wrap;\\n  align-content: flex-start;\\n  background-color: #FFFFFF;\\n  box-shadow: 0 0 15px 2px rgba(51, 51, 51, 0.3);\\n  border-radius: 8px;\\n  padding: 20px;\\n}\\n.about .comment__avatar {\\n  width: 70px;\\n  height: 70px;\\n  border-radius: 50%;\\n  object-fit: cover;\\n  margin-right: 8%;\\n  align-self: flex-start;\\n}\\n.about .comment__name {\\n  align-self: center;\\n  font-weight: 500;\\n}\\n.about .comment__text {\\n  margin-top: 20px;\\n}\\n\\n.calculator {\\n  padding: 3%;\\n}\\n.calculator__title {\\n  font-size: 2rem;\\n  text-align: center;\\n  margin-bottom: 0.5em;\\n}\\n.calculator__wrapper {\\n  margin: 0 auto;\\n  padding: 20px;\\n  width: 80%;\\n  display: grid;\\n  grid-template-columns: repeat(2, 1fr) 25%;\\n  grid-template-areas: \\\"a b c\\\" \\\"d e f\\\";\\n}\\n.calculator #currency {\\n  position: relative;\\n  z-index: 10;\\n}\\n.calculator__item {\\n  padding: 3% 10%;\\n  height: 115px;\\n  position: relative;\\n  z-index: 0;\\n}\\n.calculator__item_flexible {\\n  display: flex;\\n  justify-content: space-between;\\n  flex-flow: row wrap;\\n}\\n.calculator__item_static {\\n  grid-area: c;\\n}\\n.calculator__text {\\n  display: inline-block;\\n  font-size: 1.5rem;\\n  font-weight: 500;\\n  margin-bottom: 0.5em;\\n}\\n.calculator__value {\\n  font-size: 1.5rem;\\n}\\n.calculator__button {\\n  background-color: #e45742;\\n  border: 0;\\n  border-radius: 10px;\\n  width: min-content;\\n  height: min-content;\\n  padding: 0.7em 1.5em;\\n  font-size: 1.5rem;\\n  text-transform: uppercase;\\n  font-weight: 500;\\n  color: #fff;\\n}\\n\\n.currency-input {\\n  width: 90%;\\n  border: 1px solid #333333;\\n  border-radius: 10px;\\n  overflow: hidden;\\n  background-color: #FFFFFF;\\n}\\n.currency-input__currency-list {\\n  list-style: none;\\n  padding: 10px 0 0;\\n  margin-top: -10px;\\n  display: none;\\n}\\n.currency-input .list-visible {\\n  display: block;\\n}\\n.currency-input__current-value {\\n  border-radius: 10px;\\n  display: inline-block;\\n  width: 100%;\\n  padding: 3px 20px;\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \") no-repeat 95% 50%/auto 70%, #fff;\\n}\\n.currency-input__item {\\n  padding: 3px 20px;\\n}\\n.currency-input__item:hover {\\n  background-color: #ffc4c4;\\n}\\n.currency-input * {\\n  cursor: pointer;\\n}\\n\\n.range-slider {\\n  flex-basis: 100%;\\n  display: flex;\\n  justify-content: space-between;\\n  flex-flow: row wrap;\\n  user-select: none;\\n}\\n.range-slider .line {\\n  height: 20px;\\n  background-color: #ffc4c4;\\n  border-radius: 10px;\\n  position: relative;\\n  flex-basis: 100%;\\n  margin: 4px 0;\\n}\\n.range-slider .pointer {\\n  width: 20px;\\n  height: 20px;\\n  border-radius: 50%;\\n  background-color: #e45742;\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n}\\n.range-slider .text {\\n  opacity: 0.6;\\n}\\n\\n.location {\\n  display: flex;\\n  flex-flow: column nowrap;\\n  height: calc(100vh - 160px);\\n  min-height: 500px;\\n  margin-top: -2px;\\n  background-color: #333333;\\n}\\n.location__wrapper {\\n  padding: 3% 3% 0;\\n  text-align: center;\\n}\\n.location__title {\\n  font-size: 2rem;\\n  text-align: center;\\n  margin-bottom: 0.5em;\\n  color: #e45742;\\n}\\n.location__text {\\n  display: inline-block;\\n  font-size: 1.125em;\\n  text-align: center;\\n  margin: 0 auto 1.5em;\\n  color: #FFFFFF;\\n}\\n.location__map {\\n  flex-grow: 1;\\n  width: 100%;\\n  height: 80%;\\n}\\n.location .city-input {\\n  display: inline-block;\\n}\\n.location .city-input__city-list {\\n  display: none;\\n  background-color: #777777;\\n  list-style: none;\\n  padding: 0 0;\\n  border-radius: 10px;\\n  overflow: hidden;\\n  position: absolute;\\n  z-index: 10;\\n}\\n.location .city-input .list-visible {\\n  display: block;\\n}\\n.location .city-input__current-value {\\n  color: #FFFFFF;\\n  font-size: 1.125em;\\n  font-weight: 600;\\n}\\n.location .city-input__item {\\n  padding: 3px 20px;\\n}\\n.location .city-input__item:hover {\\n  background-color: #999;\\n}\\n.location .city-input__value {\\n  color: #FFFFFF;\\n}\\n.location .city-input * {\\n  cursor: pointer;\\n}\\n\\n.footer {\\n  padding: 2% 3%;\\n  text-align: center;\\n  background-color: #333333;\\n  height: 160px;\\n}\\n.footer__navigation {\\n  max-width: 700px;\\n  margin: 0 auto;\\n  list-style: none;\\n  padding: 0;\\n  display: flex;\\n  justify-content: space-between;\\n  flex-flow: wrap;\\n  margin-bottom: 1.5rem;\\n}\\n.footer__item:not(:last-of-type) {\\n  margin-right: 1.5rem;\\n}\\n.footer__link {\\n  color: #FFFFFF;\\n  text-decoration: none;\\n}\\n.footer__redirect-button {\\n  background-color: transparent;\\n  color: #e45742;\\n  display: inline-block;\\n  border: 1px solid #e45742;\\n  border-radius: 2px;\\n  padding: 2px 6px;\\n  margin-bottom: 1rem;\\n}\\n.footer__text {\\n  color: #aaaaaa;\\n}\\n\\n.modal {\\n  display: none;\\n  background-color: rgba(51, 51, 51, 0.8);\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  z-index: 50;\\n  width: 100%;\\n  height: 100vh;\\n  justify-content: center;\\n  align-items: center;\\n}\\n.modal_visible {\\n  display: flex;\\n}\\n.modal__wrapper {\\n  background-color: #FFFFFF;\\n  width: 300px;\\n  height: 160px;\\n  padding: 2%;\\n  display: flex;\\n  justify-content: space-evenly;\\n  flex-wrap: wrap;\\n  align-items: center;\\n}\\n.modal__button {\\n  cursor: pointer;\\n  width: 85px;\\n  padding: 5px 10px;\\n  border: 0;\\n  color: #FFFFFF;\\n  font-weight: 600;\\n  font-size: 0.875rem;\\n  border-radius: 4px;\\n}\\n.modal__button_red {\\n  background-color: #e45742;\\n  display: inline-block;\\n  text-decoration: none;\\n}\\n.modal__button_grey {\\n  background-color: #aaaaaa;\\n}\\n\\n@media (max-width: 1440px) {\\n  .about .review {\\n    overflow: hidden;\\n    flex-wrap: wrap;\\n  }\\n  .about .review .comment {\\n    flex: 1 0 33.3%;\\n  }\\n  .about .review .comment:nth-of-type(3n) {\\n    margin: 0;\\n  }\\n  .about .review .comment:nth-of-type(4n) {\\n    display: none;\\n  }\\n  .calculator__wrapper {\\n    grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));\\n    grid-template-areas: \\\"a b\\\" \\\"c d\\\";\\n  }\\n  .calculator .currency-input {\\n    width: 100%;\\n  }\\n  .calculator__item_static {\\n    grid-area: d;\\n  }\\n}\\n@media (max-width: 1024px) {\\n  .about, .calculator {\\n    padding: 2.5rem;\\n  }\\n  .location {\\n    font-size: 80%;\\n  }\\n  .location__wrapper {\\n    padding: 1rem 1rem 0;\\n  }\\n  .about .review .comment:nth-of-type(1) {\\n    margin-bottom: 2%;\\n  }\\n  .about .review .comment:nth-of-type(2n) {\\n    margin-right: 0;\\n  }\\n  .about .review .comment:nth-of-type(3n) {\\n    margin-right: 2%;\\n  }\\n  .about .review .comment:nth-of-type(4) {\\n    display: block;\\n  }\\n  .calculator__wrapper {\\n    grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));\\n    width: 100%;\\n  }\\n}\\n@media (max-width: 768px) {\\n  .hero {\\n    background-position: 30% 0;\\n  }\\n  .about .review {\\n    padding: 2%;\\n  }\\n  .about .review .comment:nth-of-type(1) {\\n    margin-bottom: 0;\\n  }\\n  .about .review .comment:nth-of-type(3), .about .review .comment:nth-of-type(4) {\\n    display: none;\\n  }\\n  .calculator__wrapper {\\n    display: flex;\\n    flex-flow: column nowrap;\\n  }\\n  .calculator__item:nth-of-type(1) {\\n    order: -1;\\n  }\\n  .calculator__item:nth-of-type(3) {\\n    order: -2;\\n  }\\n}\\n@media (max-width: 700px) {\\n  .calculator__wrapper {\\n    padding: 1rem 0 0;\\n  }\\n  .footer {\\n    padding: 4% 6%;\\n  }\\n}\\n@media (max-width: 675px) {\\n  .about .review {\\n    flex-wrap: wrap;\\n    padding: 2rem 0 1rem;\\n    flex-direction: column;\\n    align-items: center;\\n  }\\n  .about .review .comment {\\n    margin: 0;\\n  }\\n  .about .review .comment:nth-of-type(1) {\\n    margin-bottom: 1rem;\\n  }\\n}\\n@media (max-width: 600px) {\\n  .calculator__item {\\n    padding: 0;\\n    height: min-content;\\n  }\\n  .calculator__item:not(:last-of-type) {\\n    margin-bottom: 1.5rem;\\n  }\\n  .footer__item {\\n    margin-bottom: 10px;\\n  }\\n  .footer__text {\\n    font-size: 0.8rem;\\n  }\\n}\\n@media (max-width: 425px) {\\n  .hero__button {\\n    width: 40px;\\n    height: 40px;\\n  }\\n  .about .review {\\n    flex-wrap: wrap;\\n  }\\n  .about .review .comment {\\n    margin: 0;\\n    height: auto;\\n    min-width: 100%;\\n  }\\n  .about .review .comment__avatar {\\n    width: 50px;\\n    height: 50px;\\n  }\\n}\\n@media (max-width: 375px) {\\n  .footer__navigation {\\n    margin-bottom: 0.8rem;\\n  }\\n}\\n@media (max-width: 350px) {\\n  #currency {\\n    width: 112%;\\n  }\\n  .header__navigation {\\n    position: relative;\\n    width: 160px;\\n    margin-right: 0;\\n    margin-left: -20px;\\n  }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/scss/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B1%5D.use%5B2%5D!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/reset.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/reset.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html, body, div, span, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre,\\r\\na, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp,\\r\\nsmall, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li,\\r\\nfieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td,\\r\\narticle, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup,\\r\\nmenu, nav, output, ruby, section, summary, time, mark, audio, video {\\r\\n\\tmargin: 0;\\r\\n\\tpadding: 0;\\r\\n\\tborder: 0;\\r\\n\\tfont-size: 100%;\\r\\n\\tvertical-align: baseline;\\r\\n}\\r\\narticle, aside, details, figcaption, figure, footer, header, hgroup, menu, nav,\\r\\nsection {\\r\\n\\tdisplay: block;\\r\\n}\\r\\n\\t\\r\\nbody {\\r\\n\\tline-height: 1.2;\\r\\n}\\r\\nol {\\r\\n\\tpadding-left: 1.4em;\\r\\n\\tlist-style: decimal;\\r\\n}\\r\\nul {\\r\\n\\tpadding-left: 1.4em;\\r\\n\\tlist-style: square;\\r\\n}\\r\\ntable {\\r\\n\\tborder-collapse: collapse;\\r\\n\\tborder-spacing: 0;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/css/reset.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/scss/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/img/arrow-down-red.svg":
/*!************************************!*\
  !*** ./src/img/arrow-down-red.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/99b49d4a4653401e45eb.svg\";\n\n//# sourceURL=webpack:///./src/img/arrow-down-red.svg?");

/***/ }),

/***/ "./src/img/arrow-down.svg":
/*!********************************!*\
  !*** ./src/img/arrow-down.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/9259741945e35c5a498a.svg\";\n\n//# sourceURL=webpack:///./src/img/arrow-down.svg?");

/***/ }),

/***/ "./src/img/hero.jpg":
/*!**************************!*\
  !*** ./src/img/hero.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/b4e7d631475cea8be794.jpg\";\n\n//# sourceURL=webpack:///./src/img/hero.jpg?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;