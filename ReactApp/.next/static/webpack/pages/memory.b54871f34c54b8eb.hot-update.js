"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/memory",{

/***/ "./pages/memory.jsx":
/*!**************************!*\
  !*** ./pages/memory.jsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_CreateMemory_CreateMemoryCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/CreateMemory/CreateMemoryCard */ \"./components/CreateMemory/CreateMemoryCard.jsx\");\n/* harmony import */ var _components_MemoryCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MemoryCard */ \"./components/MemoryCard.jsx\");\n/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Pagination */ \"./components/Pagination.jsx\");\n/* harmony import */ var _components_CreateMemory_CreateMemoryModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/CreateMemory/CreateMemoryModal */ \"./components/CreateMemory/CreateMemoryModal.jsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _this = undefined;\nvar MemoryPage = function() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MemoryCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/barun/Developer/Relive/reactapp/pages/memory.jsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CreateMemory_CreateMemoryModal__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/barun/Developer/Relive/reactapp/pages/memory.jsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex w-screen justify-center items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Pagination__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/barun/Developer/Relive/reactapp/pages/memory.jsx\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/barun/Developer/Relive/reactapp/pages/memory.jsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/barun/Developer/Relive/reactapp/pages/memory.jsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, _this));\n};\n_c = MemoryPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MemoryPage);\nvar _c;\n$RefreshReg$(_c, \"MemoryPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tZW1vcnkuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXlCO0FBQzZDO0FBQ3JCO0FBQ0E7QUFDMkI7O0FBRTVFLEdBQUssQ0FBQ0ssVUFBVSxHQUFHLFFBQ25CLEdBRHlCLENBQUM7SUFDeEIsTUFBTSw2RUFDSEMsQ0FBRzs7d0ZBQ0RKLDhEQUFVOzs7Ozt3RkFFVkUsa0ZBQWlCOzs7Ozt3RkFDakJFLENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUEyQztzR0FDdkRKLDhEQUFVOzs7Ozs7Ozs7Ozs7Ozs7O0FBSW5CLENBQUM7S0FYS0UsVUFBVTtBQWFoQiwrREFBZUEsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL21lbW9yeS5qc3g/MTQ1ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ3JlYXRlTWVtb3J5IGZyb20gXCIuLi9jb21wb25lbnRzL0NyZWF0ZU1lbW9yeS9DcmVhdGVNZW1vcnlDYXJkXCI7XG5pbXBvcnQgTWVtb3J5Q2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9NZW1vcnlDYXJkXCI7XG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9QYWdpbmF0aW9uXCI7XG5pbXBvcnQgQ3JlYXRlTWVtb3J5TW9kYWwgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ3JlYXRlTWVtb3J5L0NyZWF0ZU1lbW9yeU1vZGFsXCI7XG5cbmNvbnN0IE1lbW9yeVBhZ2UgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxNZW1vcnlDYXJkIC8+XG4gICAgICB7LyogPENyZWF0ZU1lbW9yeSAvPiAqL31cbiAgICAgIDxDcmVhdGVNZW1vcnlNb2RhbCAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctc2NyZWVuIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8UGFnaW5hdGlvbiAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNZW1vcnlQYWdlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ3JlYXRlTWVtb3J5IiwiTWVtb3J5Q2FyZCIsIlBhZ2luYXRpb24iLCJDcmVhdGVNZW1vcnlNb2RhbCIsIk1lbW9yeVBhZ2UiLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/memory.jsx\n");

/***/ })

});