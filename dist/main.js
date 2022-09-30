/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.sass */ \"./src/css/style.sass\");\n\nif (localStorage.getItem('lang') === null) localStorage.setItem('lang', 'ru');\nconst mouse = document.querySelector('.hero__mouse');\nmouse;\nconst words = document.querySelectorAll('title,span,a,p,h1,h2,h3,h4,h5,h6,button');\nconst lang = document.querySelectorAll('.header-top__language-item');\nconst items = document.querySelectorAll('.slider__content');\nconst slider = document.querySelector('.slider');\nif (items) items.forEach(elem => elem.remove());\nif (slider) slider.prepend(items[0]);\nconst prev = document.querySelector('.slider__ctrl_prev');\nconst next = document.querySelector('.slider__ctrl_next');\ndocument.querySelector('html').lang = localStorage.getItem('lang');\nlet i = 0;\nif (prev) prev.addEventListener('click', () => {\n  if (i > 0) {\n    i--;\n    items[i + 1].remove();\n    items[i].classList.add('slider__content_animated');\n    slider.prepend(items[i]);\n  }\n\n  ;\n});\nif (next) next.addEventListener('click', () => {\n  if (i < items.length - 1) {\n    i++;\n    items[i - 1].remove();\n    items[i].classList.add('slider__content_animated');\n    slider.prepend(items[i]);\n  }\n\n  ;\n}); // translation\n\nfunction removeColor(callback) {\n  document.querySelector('.header-top__language-item_active').classList.remove('header-top__language-item_active');\n  callback();\n}\n\nlet dictionary = [['Нет информации.','No information.','Aucune information.'],['Lorem Ipsum  - это текст-рыба, часто используемый в печати\tи вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул\tв электронный дизайн.', 'Lorem Ipsum is a fish text often used in print and web design. Lorem Ipsum has been the standard fish for Latin texts since the early 16th century. At the time, an unnamed printer created a large collection of font sizes and shapes, using Lorem Ipsum to print samples. Lorem Ipsum not only successfully survived five centuries without noticeable changes, but also stepped into electronic design.', \"Lorem Ipsum est un texte de poisson souvent utilisé dans la conception imprimée et Web. Le Lorem Ipsum est le poisson standard des textes latins depuis le début du XVIe siècle. À l'époque, un imprimeur anonyme a créé une vaste collection de tailles et de formes de polices, en utilisant Lorem Ipsum pour imprimer des échantillons.Le Lorem Ipsum a non seulement survécu avec succès à cinq siècles sans changements notables, mais il est également entré dans la conception électronique.\"], ['грузоперевозки по россии', 'cargo transportation in Russia', 'transport de marchandises en Russie'], ['грузоперевозки по странам снг', 'cargo transportation in CIS countries', 'transport de marchandises dans les pays de la CEI'], ['Страны Евросоюза, а также Украина, Белоруссия со всеми документами.', 'EU countries, as well as Ukraine, Belarus with all documents.', \"Pays de l'UE, ainsi que l'Ukraine, la Biélorussie avec tous les documents.\"], ['грузоперевозки по европе', 'trucking in europe', 'camionnage en europe'], ['Грузовые перевозки', 'Freight transportation', 'transport de marchandises'], ['Наши офисы', 'Our offices', 'Nos bureaux'], ['услуги', 'services', 'prestations de service'], ['о компании', 'about company', 'à propos de la société'], ['вакансии', 'vacancies', 'postes vacants'], ['контакты', 'contacts', 'contacts'], ['Перевозка крупногабаритных грузов по России и Европе. Полное экспедирование, страхование, упаковка и хранение грузов', 'Transportation of oversized cargo in Russia and Europe. Full forwarding, insurance, packaging and storage of goods', 'Transport de marchandises surdimensionnées en Russie et en Europe. Expédition complète, assurance, emballage et stockage de marchandises'], ['подробнее', 'learn more', 'suite'], ['след', 'next', 'suivant'], ['назад', 'prev', 'préc'], ['авиаперевозки', 'air transportation', 'transport aérien'], ['офисов', 'offices', 'des bureaux'], ['грузовиков', 'trucks', 'camions'], ['сотрудников', 'employees', 'des employés'], ['В Европе и СНГ', 'In Europe and the CIS', 'En Europe et dans la CEI'], ['профессионалов', 'professionals', 'professionnels'], ['разработано - D-E-N.ru', 'made by - D-E-N.ru', 'développé - D-E-N.ru'], ['123456, Санкт-Петербург, Невский пр-кт 127', '123456, St. Petersburg, Nevsky prospect 127', '123456, Saint-Pétersbourg, Perspective Nevski 127']];\n\nfunction translate(lang) {\n  switch (lang) {\n    case 'en':\n      words.forEach(word => {\n        dictionary.forEach(value => {\n          if (word.textContent.toUpperCase() === value[0].toUpperCase() || word.textContent.toUpperCase() === value[2].toUpperCase()) word.textContent = value[1];\n        });\n      });\n      break;\n\n    case 'ru':\n      words.forEach(word => {\n        dictionary.forEach(value => {\n          if (word.textContent.toUpperCase() === value[1].toUpperCase() || word.textContent.toUpperCase() === value[2].toUpperCase()) word.textContent = value[0];\n        });\n      });\n      break;\n\n    case 'fr':\n      words.forEach(word => {\n        dictionary.forEach(value => {\n          if (word.textContent.toUpperCase() === value[1].toUpperCase() || word.textContent.toUpperCase() === value[0].toUpperCase()) word.textContent = value[2];\n        });\n      });\n      break;\n\n    default:\n      break;\n  }\n}\n\nlang[0].parentNode.onclick = function (event) {\n  if (event.target.tagName === 'SPAN') {\n    document.querySelector('html').lang = event.target.id;\n    localStorage.setItem('lang', event.target.id);\n    removeColor(() => event.target.classList.add('header-top__language-item_active'));\n    translate(event.target.id);\n  }\n};\n\ntranslate(localStorage.getItem('lang'));\nremoveColor(() => document.querySelector(`#${localStorage.getItem('lang')}`).classList.add('header-top__language-item_active'));\n\n//# sourceURL=webpack://shipping/./src/index.js?");

/***/ }),

/***/ "./src/css/style.sass":
/*!****************************!*\
  !*** ./src/css/style.sass ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://shipping/./src/css/style.sass?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
