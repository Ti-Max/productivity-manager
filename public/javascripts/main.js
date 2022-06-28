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

/***/ "./src/Scene.js":
/*!**********************!*\
  !*** ./src/Scene.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Scene\": () => (/* binding */ Scene)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\r\n\r\nclass Scene {\r\n    constructor() {\r\n        //basic scene setup\r\n        const scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();\r\n        const camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\r\n        const renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer({ canvas: canvas, antialias: true });\r\n\r\n        renderer.setSize(canvas.width, canvas.height);\r\n\r\n        // scene.background = new THREE.Color(0xffff00);\r\n\r\n        renderer.render(scene, camera);\r\n\r\n        this.onWindowResize = function () {\r\n            camera.aspect = canvas.innerWidth / canvas.innerHeight;\r\n            camera.updateProjectionMatrix();\r\n\r\n            renderer.setSize(canvas.width, canvas.height);\r\n        };\r\n\r\n        this.onKeyDown = function (event) {\r\n        };\r\n\r\n        this.onKeyUp = function (event) {\r\n        };\r\n        this.update = function () {\r\n            \r\n            //gradient background color\r\n            const color = new three__WEBPACK_IMPORTED_MODULE_0__.Color(0xffff00);\r\n            color.r = Math.sin(Date.now() * 0.001);\r\n            color.g = Math.cos(Date.now() * 0.001);\r\n            color.b = Math.sin(Date.now() * 0.001);\r\n            renderer.setClearColor(color);\r\n\r\n            renderer.render(scene, camera);\r\n        };\r\n        \r\n    }\r\n}\n\n//# sourceURL=webpack://assets/./src/Scene.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Scene */ \"./src/Scene.js\");\n//https://pierfrancesco-soffritti.medium.com/how-to-organize-the-structure-of-a-three-js-project-77649f58fa3f\r\n\r\n\r\nconst canvas = document.getElementById(\"canvas\");\r\ncanvas.width = window.innerWidth;\r\ncanvas.height = window.innerHeight;\r\n\r\nconst scene = new _Scene__WEBPACK_IMPORTED_MODULE_0__.Scene(canvas);\r\n\r\naddEventListeners();\r\nrender();\r\n\r\nfunction addEventListeners(){\r\n    window.addEventListener( 'resize', onWindowResize );\r\n    document.addEventListener('keydown', scene.onKeyDown);\r\n\tdocument.addEventListener('keyup', scene.onKeyUp);\r\n}\r\n\r\nfunction onWindowResize (){\r\n    canvas.width  = window.innerWidth;\r\n\tcanvas.height = window.innerHeight;\r\n\r\n    scene.onWindowResize();\r\n}\r\n\r\nfunction render() {\r\n    requestAnimationFrame(render);\r\n    scene.update();\r\n}\n\n//# sourceURL=webpack://assets/./src/index.js?");

/***/ }),

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;