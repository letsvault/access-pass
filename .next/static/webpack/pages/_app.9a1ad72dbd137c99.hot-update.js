"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @thirdweb-dev/react */ \"./node_modules/@thirdweb-dev/react/dist/thirdweb-dev-react.esm.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _thirdweb_dev_react_evm_connectors_magic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @thirdweb-dev/react/evm/connectors/magic */ \"./node_modules/@thirdweb-dev/react/evm/connectors/magic/dist/thirdweb-dev-react-evm-connectors-magic.esm.js\");\n\n\n\n\n\n\nvar magicLinkConnector = new _thirdweb_dev_react_evm_connectors_magic__WEBPACK_IMPORTED_MODULE_3__.MagicConnector({\n    options: {\n        apiKey: \"pk_live_545BC613BEF20664\",\n        rpcUrls: (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({}, _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.ChainId.Polygon, \"https://polygon-rpc.com/\")\n    }\n});\n// This is the chainId your dApp will work on.\nvar activeChainId = _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.ChainId.Polygon;\nfunction MyApp(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.ThirdwebProvider, {\n        desiredChainId: activeChainId,\n        walletConnectors: [\n            magicLinkConnector\n        ],\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({}, pageProps), void 0, false, {\n            fileName: \"/Users/ryanheger/access-pass-from-github/access-pass/pages/_app.tsx\",\n            lineNumber: 25,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/ryanheger/access-pass-from-github/access-pass/pages/_app.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7O0FBQ2dFO0FBQ2pDO0FBQzJDO0FBRTFFLElBQU1HLGtCQUFrQixHQUFHLElBQUlELG9GQUFjLENBQUM7SUFDNUNFLE9BQU8sRUFBRTtRQUNQQyxNQUFNLEVBQUVDLDBCQUEyQztRQUNuREcsT0FBTyxFQUNMLHFGQUFDVCxnRUFBZSxFQUFHLDBCQUEwQjtLQUVoRDtDQUNGLENBQUM7QUFHRiw4Q0FBOEM7QUFDOUMsSUFBTVcsYUFBYSxHQUFHWCxnRUFBZTtBQUVyQyxTQUFTWSxLQUFLLENBQUMsS0FBa0MsRUFBRTtRQUFsQ0MsU0FBUyxHQUFYLEtBQWtDLENBQWhDQSxTQUFTLEVBQUVDLFNBQVMsR0FBdEIsS0FBa0MsQ0FBckJBLFNBQVM7SUFDbkMscUJBQ0UsOERBQUNiLGlFQUFnQjtRQUNmYyxjQUFjLEVBQUVKLGFBQWE7UUFDN0JLLGdCQUFnQixFQUFHO1lBQUNiLGtCQUFrQjtTQUFDO2tCQUV2Qyw0RUFBQ1UsU0FBUyxxRkFBS0MsU0FBUzs7OztnQkFBSTs7Ozs7WUFDWCxDQUNuQjtBQUNKLENBQUM7QUFUUUYsS0FBQUEsS0FBSztBQVdkLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgeyBDaGFpbklkLCBUaGlyZHdlYlByb3ZpZGVyIH0gZnJvbSBcIkB0aGlyZHdlYi1kZXYvcmVhY3RcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IHsgTWFnaWNDb25uZWN0b3IgfSBmcm9tIFwiQHRoaXJkd2ViLWRldi9yZWFjdC9ldm0vY29ubmVjdG9ycy9tYWdpY1wiO1xuXG5jb25zdCBtYWdpY0xpbmtDb25uZWN0b3IgPSBuZXcgTWFnaWNDb25uZWN0b3Ioe1xuICBvcHRpb25zOiB7XG4gICAgYXBpS2V5OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19NQUdJQ19DT05ORUNUT1JfS0VZIGFzIHN0cmluZyxcbiAgICBycGNVcmxzOiB7XG4gICAgICBbQ2hhaW5JZC5Qb2x5Z29uXTogJ2h0dHBzOi8vcG9seWdvbi1ycGMuY29tLydcbiAgICB9LFxuICB9XG59KVxuXG5cbi8vIFRoaXMgaXMgdGhlIGNoYWluSWQgeW91ciBkQXBwIHdpbGwgd29yayBvbi5cbmNvbnN0IGFjdGl2ZUNoYWluSWQgPSBDaGFpbklkLlBvbHlnb247XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8VGhpcmR3ZWJQcm92aWRlciBcbiAgICAgIGRlc2lyZWRDaGFpbklkPXthY3RpdmVDaGFpbklkfVxuICAgICAgd2FsbGV0Q29ubmVjdG9ycz0ge1ttYWdpY0xpbmtDb25uZWN0b3JdfVxuICAgID5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L1RoaXJkd2ViUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbIkNoYWluSWQiLCJUaGlyZHdlYlByb3ZpZGVyIiwiTWFnaWNDb25uZWN0b3IiLCJtYWdpY0xpbmtDb25uZWN0b3IiLCJvcHRpb25zIiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX01BR0lDX0NPTk5FQ1RPUl9LRVkiLCJycGNVcmxzIiwiUG9seWdvbiIsImFjdGl2ZUNoYWluSWQiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImRlc2lyZWRDaGFpbklkIiwid2FsbGV0Q29ubmVjdG9ycyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n"));

/***/ })

});