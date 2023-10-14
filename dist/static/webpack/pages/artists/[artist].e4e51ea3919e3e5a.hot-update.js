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

/***/ "./src/pages/artists/[artist].js":
/*!***************************************!*\
  !*** ./src/pages/artists/[artist].js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n// import { Lightbox, initTE } from \"tw-elements\";\nfunction Page() {\n    _s();\n    const [artist, setArtist] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    // const [collection, setCollection] = useState([]);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    // const artist = router.query;\n    // console.log(artist);\n    //   initTE({ Lightbox });\n    function toTitleCase(str) {\n        return str.replace(/\\w\\S*/g, function(txt) {\n            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();\n        });\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const artist = router.query.artist.split(\"-\").map((name)=>toTitleCase(name)).join(\" \");\n        console.log(artist);\n        setArtist(artist);\n        let PROJECT_ID = \"5a2xr1ig\";\n        let DATASET = \"production\";\n        let QUERY = encodeURIComponent('*[_type == \"art\" &&  artist._ref in *[_type==\"artist\" && name==\"'.concat(artist, '\"]._id]'));\n        // Compose the URL for your project's endpoint and add the query\n        let URL = \"https://\".concat(PROJECT_ID, \".api.sanity.io/v2021-10-21/data/query/\").concat(DATASET, \"?query=\").concat(QUERY);\n        fetch(URL).then((res)=>res.json()).then((res)=>{\n            // const collection = res.result.filter((art) => art.artist == artist);\n            setCollection(res.result);\n            console.log(res.result);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"pt-12 flex justify-center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"typeface-seasons text-7xl m-auto\",\n                children: artist\n            }, void 0, false, {\n                fileName: \"/Users/nicoleorchard/Desktop/zoya-next/src/pages/artists/[artist].js\",\n                lineNumber: 48,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/nicoleorchard/Desktop/zoya-next/src/pages/artists/[artist].js\",\n            lineNumber: 47,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Page, \"MTShc9ZYxScPC60vMfVF9EUlR8I=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXJ0aXN0cy9bYXJ0aXN0XS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBd0M7QUFDSTtBQUM1QyxrREFBa0Q7QUFFbkMsU0FBU0c7O0lBQ3RCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHSiwrQ0FBUUEsQ0FBQztJQUNyQyxvREFBb0Q7SUFDcEQsTUFBTUssU0FBU04sc0RBQVNBO0lBQ3hCLCtCQUErQjtJQUMvQix1QkFBdUI7SUFDdkIsMEJBQTBCO0lBRTFCLFNBQVNPLFlBQVlDLEdBQUc7UUFDdEIsT0FBT0EsSUFBSUMsT0FBTyxDQUFDLFVBQVUsU0FBVUMsR0FBRztZQUN4QyxPQUFPQSxJQUFJQyxNQUFNLENBQUMsR0FBR0MsV0FBVyxLQUFLRixJQUFJRyxNQUFNLENBQUMsR0FBR0MsV0FBVztRQUNoRTtJQUNGO0lBRUFaLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTUUsU0FBU0UsT0FBT1MsS0FBSyxDQUFDWCxNQUFNLENBQy9CWSxLQUFLLENBQUMsS0FDTkMsR0FBRyxDQUFDLENBQUNDLE9BQVNYLFlBQVlXLE9BQzFCQyxJQUFJLENBQUM7UUFDUkMsUUFBUUMsR0FBRyxDQUFDakI7UUFDWkMsVUFBVUQ7UUFFVixJQUFJa0IsYUFBYTtRQUNqQixJQUFJQyxVQUFVO1FBQ2QsSUFBSUMsUUFBUUMsbUJBQ1YsbUVBQTBFLE9BQVByQixRQUFPO1FBRzVFLGdFQUFnRTtRQUNoRSxJQUFJc0IsTUFBTSxXQUE4REgsT0FBbkRELFlBQVcsMENBQXlERSxPQUFqQkQsU0FBUSxXQUFlLE9BQU5DO1FBRXpGRyxNQUFNRCxLQUNIRSxJQUFJLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSSxJQUN0QkYsSUFBSSxDQUFDLENBQUNDO1lBQ0wsdUVBQXVFO1lBQ3ZFRSxjQUFjRixJQUFJRyxNQUFNO1lBQ3hCWixRQUFRQyxHQUFHLENBQUNRLElBQUlHLE1BQU07UUFDeEI7SUFDSixHQUFHLEVBQUU7SUFFTCxxQkFDRTtrQkFDRSw0RUFBQ0M7WUFBSUMsV0FBVTtzQkFDYiw0RUFBQ0M7Z0JBQUdELFdBQVU7MEJBQW9DOUI7Ozs7Ozs7Ozs7OztBQTJEMUQ7R0F0R3dCRDs7UUFHUEgsa0RBQVNBOzs7S0FIRkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2FydGlzdHMvW2FydGlzdF0uanM/YzczOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCB7IExpZ2h0Ym94LCBpbml0VEUgfSBmcm9tIFwidHctZWxlbWVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZSgpIHtcbiAgY29uc3QgW2FydGlzdCwgc2V0QXJ0aXN0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICAvLyBjb25zdCBbY29sbGVjdGlvbiwgc2V0Q29sbGVjdGlvbl0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAvLyBjb25zdCBhcnRpc3QgPSByb3V0ZXIucXVlcnk7XG4gIC8vIGNvbnNvbGUubG9nKGFydGlzdCk7XG4gIC8vICAgaW5pdFRFKHsgTGlnaHRib3ggfSk7XG5cbiAgZnVuY3Rpb24gdG9UaXRsZUNhc2Uoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXHdcXFMqL2csIGZ1bmN0aW9uICh0eHQpIHtcbiAgICAgIHJldHVybiB0eHQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0eHQuc3Vic3RyKDEpLnRvTG93ZXJDYXNlKCk7XG4gICAgfSk7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGFydGlzdCA9IHJvdXRlci5xdWVyeS5hcnRpc3RcbiAgICAgIC5zcGxpdChcIi1cIilcbiAgICAgIC5tYXAoKG5hbWUpID0+IHRvVGl0bGVDYXNlKG5hbWUpKVxuICAgICAgLmpvaW4oXCIgXCIpO1xuICAgIGNvbnNvbGUubG9nKGFydGlzdCk7XG4gICAgc2V0QXJ0aXN0KGFydGlzdCk7XG5cbiAgICBsZXQgUFJPSkVDVF9JRCA9IFwiNWEyeHIxaWdcIjtcbiAgICBsZXQgREFUQVNFVCA9IFwicHJvZHVjdGlvblwiO1xuICAgIGxldCBRVUVSWSA9IGVuY29kZVVSSUNvbXBvbmVudChcbiAgICAgIGAqW190eXBlID09IFwiYXJ0XCIgJiYgIGFydGlzdC5fcmVmIGluICpbX3R5cGU9PVwiYXJ0aXN0XCIgJiYgbmFtZT09XCIke2FydGlzdH1cIl0uX2lkXWBcbiAgICApO1xuXG4gICAgLy8gQ29tcG9zZSB0aGUgVVJMIGZvciB5b3VyIHByb2plY3QncyBlbmRwb2ludCBhbmQgYWRkIHRoZSBxdWVyeVxuICAgIGxldCBVUkwgPSBgaHR0cHM6Ly8ke1BST0pFQ1RfSUR9LmFwaS5zYW5pdHkuaW8vdjIwMjEtMTAtMjEvZGF0YS9xdWVyeS8ke0RBVEFTRVR9P3F1ZXJ5PSR7UVVFUll9YDtcblxuICAgIGZldGNoKFVSTClcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIC8vIGNvbnN0IGNvbGxlY3Rpb24gPSByZXMucmVzdWx0LmZpbHRlcigoYXJ0KSA9PiBhcnQuYXJ0aXN0ID09IGFydGlzdCk7XG4gICAgICAgIHNldENvbGxlY3Rpb24ocmVzLnJlc3VsdCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5yZXN1bHQpO1xuICAgICAgfSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTEyIGZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInR5cGVmYWNlLXNlYXNvbnMgdGV4dC03eGwgbS1hdXRvXCI+e2FydGlzdH08L2gxPlxuICAgICAgICB7Lyoge2NvbGxlY3Rpb24ubWFwKChhcnR3b3JrKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJhcnR3b3JrXCIsIGFydHdvcmspO1xuICAgICAgICAgIHJldHVybiA8aDEga2V5PXthcnR3b3JrLl9pZH0+e2FydHdvcmsubmFtZX08L2gxPjtcbiAgICAgICAgfSl9ICovfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiA8ZGl2IGRhdGEtdGUtbGlnaHRib3gtaW5pdCBjbGFzcz1cImdyaWQgZ3JpZC1jb2xzLTMgZ2FwLTEwXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoLWZ1bGwgdy1mdWxsXCI+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9tZGJjZG4uYi1jZG4ubmV0L2ltZy9QaG90b3MvVGh1bWJuYWlscy9TbGlkZXMvMS53ZWJwXCJcbiAgICAgICAgICAgIGRhdGEtdGUtaW1nPVwiaHR0cHM6Ly9tZGJjZG4uYi1jZG4ubmV0L2ltZy9QaG90b3MvU2xpZGVzLzEud2VicFwiXG4gICAgICAgICAgICBhbHQ9XCJUYWJsZSBGdWxsIG9mIFNwaWNlc1wiXG4gICAgICAgICAgICBjbGFzcz1cInctZnVsbCBjdXJzb3Item9vbS1pbiBkYXRhLVt0ZS1saWdodGJveC1kaXNhYmxlZF06Y3Vyc29yLWF1dG9cIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaC1mdWxsIHctZnVsbFwiPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vbWRiY2RuLmItY2RuLm5ldC9pbWcvUGhvdG9zL1RodW1ibmFpbHMvU2xpZGVzLzIud2VicFwiXG4gICAgICAgICAgICBkYXRhLXRlLWltZz1cImh0dHBzOi8vbWRiY2RuLmItY2RuLm5ldC9pbWcvUGhvdG9zL1NsaWRlcy8yLndlYnBcIlxuICAgICAgICAgICAgYWx0PVwiV2ludGVyIExhbmRzY2FwZVwiXG4gICAgICAgICAgICBjbGFzcz1cInctZnVsbCBjdXJzb3Item9vbS1pbiBkYXRhLVt0ZS1saWdodGJveC1kaXNhYmxlZF06Y3Vyc29yLWF1dG9cIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaC1mdWxsIHctZnVsbFwiPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vbWRiY2RuLmItY2RuLm5ldC9pbWcvUGhvdG9zL1RodW1ibmFpbHMvU2xpZGVzLzMud2VicFwiXG4gICAgICAgICAgICBkYXRhLXRlLWltZz1cImh0dHBzOi8vbWRiY2RuLmItY2RuLm5ldC9pbWcvUGhvdG9zL1NsaWRlcy8zLndlYnBcIlxuICAgICAgICAgICAgYWx0PVwiVmlldyBvZiB0aGUgQ2l0eSBpbiB0aGUgTW91bnRhaW5zXCJcbiAgICAgICAgICAgIGNsYXNzPVwidy1mdWxsIGN1cnNvci16b29tLWluIGRhdGEtW3RlLWxpZ2h0Ym94LWRpc2FibGVkXTpjdXJzb3ItYXV0b1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoLWZ1bGwgdy1mdWxsXCI+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9tZGJjZG4uYi1jZG4ubmV0L2ltZy9QaG90b3MvVGh1bWJuYWlscy9TbGlkZXMvMy53ZWJwXCJcbiAgICAgICAgICAgIGRhdGEtdGUtaW1nPVwiaHR0cHM6Ly9tZGJjZG4uYi1jZG4ubmV0L2ltZy9QaG90b3MvU2xpZGVzLzMud2VicFwiXG4gICAgICAgICAgICBhbHQ9XCJWaWV3IG9mIHRoZSBDaXR5IGluIHRoZSBNb3VudGFpbnNcIlxuICAgICAgICAgICAgY2xhc3M9XCJ3LWZ1bGwgY3Vyc29yLXpvb20taW4gZGF0YS1bdGUtbGlnaHRib3gtZGlzYWJsZWRdOmN1cnNvci1hdXRvXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImgtZnVsbCB3LWZ1bGxcIj5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL21kYmNkbi5iLWNkbi5uZXQvaW1nL1Bob3Rvcy9UaHVtYm5haWxzL1NsaWRlcy8zLndlYnBcIlxuICAgICAgICAgICAgZGF0YS10ZS1pbWc9XCJodHRwczovL21kYmNkbi5iLWNkbi5uZXQvaW1nL1Bob3Rvcy9TbGlkZXMvMy53ZWJwXCJcbiAgICAgICAgICAgIGFsdD1cIlZpZXcgb2YgdGhlIENpdHkgaW4gdGhlIE1vdW50YWluc1wiXG4gICAgICAgICAgICBjbGFzcz1cInctZnVsbCBjdXJzb3Item9vbS1pbiBkYXRhLVt0ZS1saWdodGJveC1kaXNhYmxlZF06Y3Vyc29yLWF1dG9cIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaC1mdWxsIHctZnVsbFwiPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vbWRiY2RuLmItY2RuLm5ldC9pbWcvUGhvdG9zL1RodW1ibmFpbHMvU2xpZGVzLzMud2VicFwiXG4gICAgICAgICAgICBkYXRhLXRlLWltZz1cImh0dHBzOi8vbWRiY2RuLmItY2RuLm5ldC9pbWcvUGhvdG9zL1NsaWRlcy8zLndlYnBcIlxuICAgICAgICAgICAgYWx0PVwiVmlldyBvZiB0aGUgQ2l0eSBpbiB0aGUgTW91bnRhaW5zXCJcbiAgICAgICAgICAgIGNsYXNzPVwidy1mdWxsIGN1cnNvci16b29tLWluIGRhdGEtW3RlLWxpZ2h0Ym94LWRpc2FibGVkXTpjdXJzb3ItYXV0b1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj4gKi99XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJQYWdlIiwiYXJ0aXN0Iiwic2V0QXJ0aXN0Iiwicm91dGVyIiwidG9UaXRsZUNhc2UiLCJzdHIiLCJyZXBsYWNlIiwidHh0IiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzdWJzdHIiLCJ0b0xvd2VyQ2FzZSIsInF1ZXJ5Iiwic3BsaXQiLCJtYXAiLCJuYW1lIiwiam9pbiIsImNvbnNvbGUiLCJsb2ciLCJQUk9KRUNUX0lEIiwiREFUQVNFVCIsIlFVRVJZIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiVVJMIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsInNldENvbGxlY3Rpb24iLCJyZXN1bHQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/artists/[artist].js\n"));

/***/ })

});