"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/artists/[artist]",{

/***/ "./src/components/ArtworkTile.js":
/*!***************************************!*\
  !*** ./src/components/ArtworkTile.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ArtworkTile; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n// import Link from \"next/link\";\nfunction ArtworkTile(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-32 w-32\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n            style: {\n                objectFit: \"cover\"\n            },\n            fill: true,\n            src: props.imageUrl,\n            \"data-te-img\": props.imageUrl,\n            alt: \"\".concat(props.title, \" | \").concat(props.dimensions, \" | \").concat(props.medium, \" | \").concat(props.year),\n            className: \" cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto\"\n        }, void 0, false, {\n            fileName: \"/Users/nicoleorchard/Desktop/zoya-next/src/components/ArtworkTile.js\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/nicoleorchard/Desktop/zoya-next/src/components/ArtworkTile.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n_c = ArtworkTile;\n{\n/* <img\n        src={props.imageUrl}\n        data-te-img={props.imageUrl}\n        alt={`${props.title} | ${props.dimensions} | ${props.medium} | ${props.year}`}\n        className=\"w-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto\"\n      /> */ }var _c;\n$RefreshReg$(_c, \"ArtworkTile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BcnR3b3JrVGlsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUErQjtBQUNMO0FBQzFCLGdDQUFnQztBQUVqQixTQUFTRSxZQUFZQyxLQUFLO0lBQ3ZDLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDTCxtREFBS0E7WUFDSk0sT0FBTztnQkFDTEMsV0FBVztZQUNiO1lBQ0FDLElBQUk7WUFDSkMsS0FBS04sTUFBTU8sUUFBUTtZQUNuQkMsZUFBYVIsTUFBTU8sUUFBUTtZQUMzQkUsS0FBSyxHQUFvQlQsT0FBakJBLE1BQU1VLEtBQUssRUFBQyxPQUEyQlYsT0FBdEJBLE1BQU1XLFVBQVUsRUFBQyxPQUF1QlgsT0FBbEJBLE1BQU1ZLE1BQU0sRUFBQyxPQUFnQixPQUFYWixNQUFNYSxJQUFJO1lBQzNFWCxXQUFVOzs7Ozs7Ozs7OztBQUlsQjtLQWZ3Qkg7QUFpQnhCO0FBQ0U7Ozs7O1NBS08sR0FDVCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9BcnR3b3JrVGlsZS5qcz9jYTFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcnR3b3JrVGlsZShwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaC0zMiB3LTMyXCI+XG4gICAgICA8SW1hZ2VcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBvYmplY3RGaXQ6IFwiY292ZXJcIixcbiAgICAgICAgfX1cbiAgICAgICAgZmlsbFxuICAgICAgICBzcmM9e3Byb3BzLmltYWdlVXJsfVxuICAgICAgICBkYXRhLXRlLWltZz17cHJvcHMuaW1hZ2VVcmx9XG4gICAgICAgIGFsdD17YCR7cHJvcHMudGl0bGV9IHwgJHtwcm9wcy5kaW1lbnNpb25zfSB8ICR7cHJvcHMubWVkaXVtfSB8ICR7cHJvcHMueWVhcn1gfVxuICAgICAgICBjbGFzc05hbWU9XCIgY3Vyc29yLXpvb20taW4gZGF0YS1bdGUtbGlnaHRib3gtZGlzYWJsZWRdOmN1cnNvci1hdXRvXCJcbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbntcbiAgLyogPGltZ1xuICAgICAgICBzcmM9e3Byb3BzLmltYWdlVXJsfVxuICAgICAgICBkYXRhLXRlLWltZz17cHJvcHMuaW1hZ2VVcmx9XG4gICAgICAgIGFsdD17YCR7cHJvcHMudGl0bGV9IHwgJHtwcm9wcy5kaW1lbnNpb25zfSB8ICR7cHJvcHMubWVkaXVtfSB8ICR7cHJvcHMueWVhcn1gfVxuICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgY3Vyc29yLXpvb20taW4gZGF0YS1bdGUtbGlnaHRib3gtZGlzYWJsZWRdOmN1cnNvci1hdXRvXCJcbiAgICAgIC8+ICovXG59XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJSZWFjdCIsIkFydHdvcmtUaWxlIiwicHJvcHMiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsIm9iamVjdEZpdCIsImZpbGwiLCJzcmMiLCJpbWFnZVVybCIsImRhdGEtdGUtaW1nIiwiYWx0IiwidGl0bGUiLCJkaW1lbnNpb25zIiwibWVkaXVtIiwieWVhciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ArtworkTile.js\n"));

/***/ })

});