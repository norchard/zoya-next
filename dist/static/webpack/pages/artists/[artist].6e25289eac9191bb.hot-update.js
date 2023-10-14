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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_ArtworkTile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ArtworkTile */ \"./src/components/ArtworkTile.js\");\n/* harmony import */ var tw_elements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tw-elements */ \"./node_modules/tw-elements/dist/js/tw-elements.es.min.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Page() {\n    _s();\n    const [artist, setArtist] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [collection, setCollection] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    (0,tw_elements__WEBPACK_IMPORTED_MODULE_4__.initTE)({\n        Lightbox: tw_elements__WEBPACK_IMPORTED_MODULE_4__.Lightbox\n    });\n    function toTitleCase(str) {\n        return str.replace(/\\w\\S*/g, function(txt) {\n            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();\n        });\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (router.isReady) {\n            const artist = router.query.artist.split(\"-\").map((name)=>toTitleCase(name)).join(\" \");\n            setArtist(artist);\n            let PROJECT_ID = \"5a2xr1ig\";\n            let DATASET = \"production\";\n            let QUERY = encodeURIComponent('*[_type == \"art\" &&  artist._ref in *[_type==\"artist\" && name==\"'.concat(artist, '\"]._id]{_id, title, dimensions, medium, year, \"artist\": artist->name, \"imageUrl\": image.asset->url}'));\n            // Compose the URL for your project's endpoint and add the query\n            let URL = \"https://\".concat(PROJECT_ID, \".api.sanity.io/v2021-10-21/data/query/\").concat(DATASET, \"?query=\").concat(QUERY);\n            fetch(URL).then((res)=>res.json()).then((res)=>{\n                // const collection = res.result.filter((art) => art.artist == artist);\n                setCollection(res.result);\n                console.log(\"result: \", res.result);\n            });\n        }\n    }, [\n        router.isReady\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"pt-12 flex justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"typeface-seasons text-7xl m-auto\",\n                    children: artist\n                }, void 0, false, {\n                    fileName: \"/Users/nicoleorchard/Desktop/zoya-next/src/pages/artists/[artist].js\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/nicoleorchard/Desktop/zoya-next/src/pages/artists/[artist].js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                \"data-te-lightbox-init\": true,\n                className: \"grid grid-cols-3 gap-10\",\n                children: collection.map((artwork)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ArtworkTile__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        title: artwork.title,\n                        imageUrl: artwork.imageUrl,\n                        year: artwork.year,\n                        dimensions: artwork.dimensions,\n                        medium: artwork.medium\n                    }, artwork._id, false, {\n                        fileName: \"/Users/nicoleorchard/Desktop/zoya-next/src/pages/artists/[artist].js\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/nicoleorchard/Desktop/zoya-next/src/pages/artists/[artist].js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Page, \"TAdMPAZrZ8/yVaVBhgktOwErNzY=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXJ0aXN0cy9bYXJ0aXN0XS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUF3QztBQUNJO0FBQ087QUFDSjtBQUVoQyxTQUFTTTs7SUFDdEIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ1EsWUFBWUMsY0FBYyxHQUFHVCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQy9DLE1BQU1VLFNBQVNYLHNEQUFTQTtJQUN4QkssbURBQU1BLENBQUM7UUFBRUQsUUFBUUEsbURBQUFBO0lBQUM7SUFFbEIsU0FBU1EsWUFBWUMsR0FBRztRQUN0QixPQUFPQSxJQUFJQyxPQUFPLENBQUMsVUFBVSxTQUFVQyxHQUFHO1lBQ3hDLE9BQU9BLElBQUlDLE1BQU0sQ0FBQyxHQUFHQyxXQUFXLEtBQUtGLElBQUlHLE1BQU0sQ0FBQyxHQUFHQyxXQUFXO1FBQ2hFO0lBQ0Y7SUFFQWpCLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSVMsT0FBT1MsT0FBTyxFQUFFO1lBQ2xCLE1BQU1iLFNBQVNJLE9BQU9VLEtBQUssQ0FBQ2QsTUFBTSxDQUMvQmUsS0FBSyxDQUFDLEtBQ05DLEdBQUcsQ0FBQyxDQUFDQyxPQUFTWixZQUFZWSxPQUMxQkMsSUFBSSxDQUFDO1lBQ1JqQixVQUFVRDtZQUVWLElBQUltQixhQUFhO1lBQ2pCLElBQUlDLFVBQVU7WUFDZCxJQUFJQyxRQUFRQyxtQkFDVixtRUFBMEUsT0FBUHRCLFFBQU87WUFFNUUsZ0VBQWdFO1lBQ2hFLElBQUl1QixNQUFNLFdBQThESCxPQUFuREQsWUFBVywwQ0FBeURFLE9BQWpCRCxTQUFRLFdBQWUsT0FBTkM7WUFFekZHLE1BQU1ELEtBQ0hFLElBQUksQ0FBQyxDQUFDQyxNQUFRQSxJQUFJQyxJQUFJLElBQ3RCRixJQUFJLENBQUMsQ0FBQ0M7Z0JBQ0wsdUVBQXVFO2dCQUN2RXZCLGNBQWN1QixJQUFJRSxNQUFNO2dCQUN4QkMsUUFBUUMsR0FBRyxDQUFDLFlBQVlKLElBQUlFLE1BQU07WUFDcEM7UUFDSjtJQUNGLEdBQUc7UUFBQ3hCLE9BQU9TLE9BQU87S0FBQztJQUVuQixxQkFDRTs7MEJBQ0UsOERBQUNrQjtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0M7b0JBQUdELFdBQVU7OEJBQW9DaEM7Ozs7Ozs7Ozs7OzBCQUVwRCw4REFBQytCO2dCQUFJRyx1QkFBcUI7Z0JBQUNGLFdBQVU7MEJBQ2xDOUIsV0FBV2MsR0FBRyxDQUFDLENBQUNtQix3QkFDZiw4REFBQ3ZDLCtEQUFXQTt3QkFFVndDLE9BQU9ELFFBQVFDLEtBQUs7d0JBQ3BCQyxVQUFVRixRQUFRRSxRQUFRO3dCQUMxQkMsTUFBTUgsUUFBUUcsSUFBSTt3QkFDbEJDLFlBQVlKLFFBQVFJLFVBQVU7d0JBQzlCQyxRQUFRTCxRQUFRSyxNQUFNO3VCQUxqQkwsUUFBUU0sR0FBRzs7Ozs7Ozs7Ozs7O0FBOEQ1QjtHQTVHd0IxQzs7UUFHUE4sa0RBQVNBOzs7S0FIRk0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2FydGlzdHMvW2FydGlzdF0uanM/YzczOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBcnR3b3JrVGlsZSBmcm9tIFwiQC9jb21wb25lbnRzL0FydHdvcmtUaWxlXCI7XG5pbXBvcnQgeyBMaWdodGJveCwgaW5pdFRFIH0gZnJvbSBcInR3LWVsZW1lbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2UoKSB7XG4gIGNvbnN0IFthcnRpc3QsIHNldEFydGlzdF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2NvbGxlY3Rpb24sIHNldENvbGxlY3Rpb25dID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgaW5pdFRFKHsgTGlnaHRib3ggfSk7XG5cbiAgZnVuY3Rpb24gdG9UaXRsZUNhc2Uoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXHdcXFMqL2csIGZ1bmN0aW9uICh0eHQpIHtcbiAgICAgIHJldHVybiB0eHQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0eHQuc3Vic3RyKDEpLnRvTG93ZXJDYXNlKCk7XG4gICAgfSk7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChyb3V0ZXIuaXNSZWFkeSkge1xuICAgICAgY29uc3QgYXJ0aXN0ID0gcm91dGVyLnF1ZXJ5LmFydGlzdFxuICAgICAgICAuc3BsaXQoXCItXCIpXG4gICAgICAgIC5tYXAoKG5hbWUpID0+IHRvVGl0bGVDYXNlKG5hbWUpKVxuICAgICAgICAuam9pbihcIiBcIik7XG4gICAgICBzZXRBcnRpc3QoYXJ0aXN0KTtcblxuICAgICAgbGV0IFBST0pFQ1RfSUQgPSBcIjVhMnhyMWlnXCI7XG4gICAgICBsZXQgREFUQVNFVCA9IFwicHJvZHVjdGlvblwiO1xuICAgICAgbGV0IFFVRVJZID0gZW5jb2RlVVJJQ29tcG9uZW50KFxuICAgICAgICBgKltfdHlwZSA9PSBcImFydFwiICYmICBhcnRpc3QuX3JlZiBpbiAqW190eXBlPT1cImFydGlzdFwiICYmIG5hbWU9PVwiJHthcnRpc3R9XCJdLl9pZF17X2lkLCB0aXRsZSwgZGltZW5zaW9ucywgbWVkaXVtLCB5ZWFyLCBcImFydGlzdFwiOiBhcnRpc3QtPm5hbWUsIFwiaW1hZ2VVcmxcIjogaW1hZ2UuYXNzZXQtPnVybH1gXG4gICAgICApO1xuICAgICAgLy8gQ29tcG9zZSB0aGUgVVJMIGZvciB5b3VyIHByb2plY3QncyBlbmRwb2ludCBhbmQgYWRkIHRoZSBxdWVyeVxuICAgICAgbGV0IFVSTCA9IGBodHRwczovLyR7UFJPSkVDVF9JRH0uYXBpLnNhbml0eS5pby92MjAyMS0xMC0yMS9kYXRhL3F1ZXJ5LyR7REFUQVNFVH0/cXVlcnk9JHtRVUVSWX1gO1xuXG4gICAgICBmZXRjaChVUkwpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAvLyBjb25zdCBjb2xsZWN0aW9uID0gcmVzLnJlc3VsdC5maWx0ZXIoKGFydCkgPT4gYXJ0LmFydGlzdCA9PSBhcnRpc3QpO1xuICAgICAgICAgIHNldENvbGxlY3Rpb24ocmVzLnJlc3VsdCk7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJyZXN1bHQ6IFwiLCByZXMucmVzdWx0KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LCBbcm91dGVyLmlzUmVhZHldKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTEyIGZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInR5cGVmYWNlLXNlYXNvbnMgdGV4dC03eGwgbS1hdXRvXCI+e2FydGlzdH08L2gxPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGRhdGEtdGUtbGlnaHRib3gtaW5pdCBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0zIGdhcC0xMFwiPlxuICAgICAgICB7Y29sbGVjdGlvbi5tYXAoKGFydHdvcmspID0+IChcbiAgICAgICAgICA8QXJ0d29ya1RpbGVcbiAgICAgICAgICAgIGtleT17YXJ0d29yay5faWR9XG4gICAgICAgICAgICB0aXRsZT17YXJ0d29yay50aXRsZX1cbiAgICAgICAgICAgIGltYWdlVXJsPXthcnR3b3JrLmltYWdlVXJsfVxuICAgICAgICAgICAgeWVhcj17YXJ0d29yay55ZWFyfVxuICAgICAgICAgICAgZGltZW5zaW9ucz17YXJ0d29yay5kaW1lbnNpb25zfVxuICAgICAgICAgICAgbWVkaXVtPXthcnR3b3JrLm1lZGl1bX1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogPGRpdiBkYXRhLXRlLWxpZ2h0Ym94LWluaXQgY2xhc3M9XCJncmlkIGdyaWQtY29scy0zIGdhcC0xMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaC1mdWxsIHctZnVsbFwiPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vbWRiY2RuLmItY2RuLm5ldC9pbWcvUGhvdG9zL1RodW1ibmFpbHMvU2xpZGVzLzEud2VicFwiXG4gICAgICAgICAgICBkYXRhLXRlLWltZz1cImh0dHBzOi8vbWRiY2RuLmItY2RuLm5ldC9pbWcvUGhvdG9zL1NsaWRlcy8xLndlYnBcIlxuICAgICAgICAgICAgYWx0PVwiVGFibGUgRnVsbCBvZiBTcGljZXNcIlxuICAgICAgICAgICAgY2xhc3M9XCJ3LWZ1bGwgY3Vyc29yLXpvb20taW4gZGF0YS1bdGUtbGlnaHRib3gtZGlzYWJsZWRdOmN1cnNvci1hdXRvXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImgtZnVsbCB3LWZ1bGxcIj5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL21kYmNkbi5iLWNkbi5uZXQvaW1nL1Bob3Rvcy9UaHVtYm5haWxzL1NsaWRlcy8yLndlYnBcIlxuICAgICAgICAgICAgZGF0YS10ZS1pbWc9XCJodHRwczovL21kYmNkbi5iLWNkbi5uZXQvaW1nL1Bob3Rvcy9TbGlkZXMvMi53ZWJwXCJcbiAgICAgICAgICAgIGFsdD1cIldpbnRlciBMYW5kc2NhcGVcIlxuICAgICAgICAgICAgY2xhc3M9XCJ3LWZ1bGwgY3Vyc29yLXpvb20taW4gZGF0YS1bdGUtbGlnaHRib3gtZGlzYWJsZWRdOmN1cnNvci1hdXRvXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImgtZnVsbCB3LWZ1bGxcIj5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL21kYmNkbi5iLWNkbi5uZXQvaW1nL1Bob3Rvcy9UaHVtYm5haWxzL1NsaWRlcy8zLndlYnBcIlxuICAgICAgICAgICAgZGF0YS10ZS1pbWc9XCJodHRwczovL21kYmNkbi5iLWNkbi5uZXQvaW1nL1Bob3Rvcy9TbGlkZXMvMy53ZWJwXCJcbiAgICAgICAgICAgIGFsdD1cIlZpZXcgb2YgdGhlIENpdHkgaW4gdGhlIE1vdW50YWluc1wiXG4gICAgICAgICAgICBjbGFzcz1cInctZnVsbCBjdXJzb3Item9vbS1pbiBkYXRhLVt0ZS1saWdodGJveC1kaXNhYmxlZF06Y3Vyc29yLWF1dG9cIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaC1mdWxsIHctZnVsbFwiPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vbWRiY2RuLmItY2RuLm5ldC9pbWcvUGhvdG9zL1RodW1ibmFpbHMvU2xpZGVzLzMud2VicFwiXG4gICAgICAgICAgICBkYXRhLXRlLWltZz1cImh0dHBzOi8vbWRiY2RuLmItY2RuLm5ldC9pbWcvUGhvdG9zL1NsaWRlcy8zLndlYnBcIlxuICAgICAgICAgICAgYWx0PVwiVmlldyBvZiB0aGUgQ2l0eSBpbiB0aGUgTW91bnRhaW5zXCJcbiAgICAgICAgICAgIGNsYXNzPVwidy1mdWxsIGN1cnNvci16b29tLWluIGRhdGEtW3RlLWxpZ2h0Ym94LWRpc2FibGVkXTpjdXJzb3ItYXV0b1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoLWZ1bGwgdy1mdWxsXCI+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9tZGJjZG4uYi1jZG4ubmV0L2ltZy9QaG90b3MvVGh1bWJuYWlscy9TbGlkZXMvMy53ZWJwXCJcbiAgICAgICAgICAgIGRhdGEtdGUtaW1nPVwiaHR0cHM6Ly9tZGJjZG4uYi1jZG4ubmV0L2ltZy9QaG90b3MvU2xpZGVzLzMud2VicFwiXG4gICAgICAgICAgICBhbHQ9XCJWaWV3IG9mIHRoZSBDaXR5IGluIHRoZSBNb3VudGFpbnNcIlxuICAgICAgICAgICAgY2xhc3M9XCJ3LWZ1bGwgY3Vyc29yLXpvb20taW4gZGF0YS1bdGUtbGlnaHRib3gtZGlzYWJsZWRdOmN1cnNvci1hdXRvXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImgtZnVsbCB3LWZ1bGxcIj5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL21kYmNkbi5iLWNkbi5uZXQvaW1nL1Bob3Rvcy9UaHVtYm5haWxzL1NsaWRlcy8zLndlYnBcIlxuICAgICAgICAgICAgZGF0YS10ZS1pbWc9XCJodHRwczovL21kYmNkbi5iLWNkbi5uZXQvaW1nL1Bob3Rvcy9TbGlkZXMvMy53ZWJwXCJcbiAgICAgICAgICAgIGFsdD1cIlZpZXcgb2YgdGhlIENpdHkgaW4gdGhlIE1vdW50YWluc1wiXG4gICAgICAgICAgICBjbGFzcz1cInctZnVsbCBjdXJzb3Item9vbS1pbiBkYXRhLVt0ZS1saWdodGJveC1kaXNhYmxlZF06Y3Vyc29yLWF1dG9cIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+ICovfVxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQXJ0d29ya1RpbGUiLCJMaWdodGJveCIsImluaXRURSIsIlBhZ2UiLCJhcnRpc3QiLCJzZXRBcnRpc3QiLCJjb2xsZWN0aW9uIiwic2V0Q29sbGVjdGlvbiIsInJvdXRlciIsInRvVGl0bGVDYXNlIiwic3RyIiwicmVwbGFjZSIsInR4dCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic3Vic3RyIiwidG9Mb3dlckNhc2UiLCJpc1JlYWR5IiwicXVlcnkiLCJzcGxpdCIsIm1hcCIsIm5hbWUiLCJqb2luIiwiUFJPSkVDVF9JRCIsIkRBVEFTRVQiLCJRVUVSWSIsImVuY29kZVVSSUNvbXBvbmVudCIsIlVSTCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJkYXRhLXRlLWxpZ2h0Ym94LWluaXQiLCJhcnR3b3JrIiwidGl0bGUiLCJpbWFnZVVybCIsInllYXIiLCJkaW1lbnNpb25zIiwibWVkaXVtIiwiX2lkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/artists/[artist].js\n"));

/***/ })

});