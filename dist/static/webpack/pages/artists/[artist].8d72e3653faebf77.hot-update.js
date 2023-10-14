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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_ArtworkTile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ArtworkTile */ \"./src/components/ArtworkTile.js\");\n/* harmony import */ var tw_elements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tw-elements */ \"./node_modules/tw-elements/dist/js/tw-elements.es.min.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Page() {\n    _s();\n    const [artist, setArtist] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [collection, setCollection] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    (0,tw_elements__WEBPACK_IMPORTED_MODULE_4__.initTE)({\n        Lightbox: tw_elements__WEBPACK_IMPORTED_MODULE_4__.Lightbox\n    });\n    function toTitleCase(str) {\n        return str.replace(/\\w\\S*/g, function(txt) {\n            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();\n        });\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (router.isReady) {\n            const artist = router.query.artist.split(\"-\").map((name)=>toTitleCase(name)).join(\" \");\n            setArtist(artist);\n            let PROJECT_ID = \"5a2xr1ig\";\n            let DATASET = \"production\";\n            let QUERY_COLLECTION = encodeURIComponent('*[_type == \"art\" &&  artist._ref in *[_type==\"artist\" && name==\"'.concat(artist, '\"]._id]{_id, title, dimensions, medium, year, \"artist\": artist->name, \"imageUrl\": image.asset->url}'));\n            let QUERY_BIO = encodeURIComponent('*[_type == \"art\"]{bio}');\n            // Compose the URL for your project's endpoint and add the query\n            let URL_COLLECTION = \"https://\".concat(PROJECT_ID, \".api.sanity.io/v2021-10-21/data/query/\").concat(DATASET, \"?query=\").concat(QUERY_COLLECTION);\n            let URL_BIO = \"https://\".concat(PROJECT_ID, \".api.sanity.io/v2021-10-21/data/query/\").concat(DATASET, \"?query=\").concat(QUERY_COLLECTION);\n            fetch(URL).then((res)=>res.json()).then((res)=>{\n                // const collection = res.result.filter((art) => art.artist == artist);\n                setCollection(res.result);\n                const year = new Date(res.result.year);\n            });\n            fetch(URL).then((res)=>res.json()).then((res)=>{\n                // const collection = res.result.filter((art) => art.artist == artist);\n                setCollection(res.result);\n                const year = new Date(res.result.year);\n            });\n        }\n    }, [\n        router.isReady\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"pt-12 flex justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"typeface-seasons text-7xl m-auto\",\n                    children: artist\n                }, void 0, false, {\n                    fileName: \"/Users/nicoleorchard/Desktop/zoya-next/src/pages/artists/[artist].js\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/nicoleorchard/Desktop/zoya-next/src/pages/artists/[artist].js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                \"data-te-lightbox-init\": true,\n                className: \"p-20 grid grid-cols-4 gap-10\",\n                children: collection.map((artwork)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ArtworkTile__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        title: artwork.title,\n                        imageUrl: artwork.imageUrl,\n                        year: artwork.year,\n                        dimensions: artwork.dimensions,\n                        medium: artwork.medium\n                    }, artwork._id, false, {\n                        fileName: \"/Users/nicoleorchard/Desktop/zoya-next/src/pages/artists/[artist].js\",\n                        lineNumber: 61,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/nicoleorchard/Desktop/zoya-next/src/pages/artists/[artist].js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Page, \"TAdMPAZrZ8/yVaVBhgktOwErNzY=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXJ0aXN0cy9bYXJ0aXN0XS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUF3QztBQUNJO0FBQ087QUFDSjtBQUVoQyxTQUFTTTs7SUFDdEIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ1EsWUFBWUMsY0FBYyxHQUFHVCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQy9DLE1BQU1VLFNBQVNYLHNEQUFTQTtJQUN4QkssbURBQU1BLENBQUM7UUFBRUQsUUFBUUEsbURBQUFBO0lBQUM7SUFFbEIsU0FBU1EsWUFBWUMsR0FBRztRQUN0QixPQUFPQSxJQUFJQyxPQUFPLENBQUMsVUFBVSxTQUFVQyxHQUFHO1lBQ3hDLE9BQU9BLElBQUlDLE1BQU0sQ0FBQyxHQUFHQyxXQUFXLEtBQUtGLElBQUlHLE1BQU0sQ0FBQyxHQUFHQyxXQUFXO1FBQ2hFO0lBQ0Y7SUFFQWpCLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSVMsT0FBT1MsT0FBTyxFQUFFO1lBQ2xCLE1BQU1iLFNBQVNJLE9BQU9VLEtBQUssQ0FBQ2QsTUFBTSxDQUMvQmUsS0FBSyxDQUFDLEtBQ05DLEdBQUcsQ0FBQyxDQUFDQyxPQUFTWixZQUFZWSxPQUMxQkMsSUFBSSxDQUFDO1lBQ1JqQixVQUFVRDtZQUVWLElBQUltQixhQUFhO1lBQ2pCLElBQUlDLFVBQVU7WUFDZCxJQUFJQyxtQkFBbUJDLG1CQUNyQixtRUFBMEUsT0FBUHRCLFFBQU87WUFFNUUsSUFBSXVCLFlBQVlELG1CQUFvQjtZQUNwQyxnRUFBZ0U7WUFDaEUsSUFBSUUsaUJBQWlCLFdBQThESixPQUFuREQsWUFBVywwQ0FBeURFLE9BQWpCRCxTQUFRLFdBQTBCLE9BQWpCQztZQUNwRyxJQUFJSSxVQUFVLFdBQThETCxPQUFuREQsWUFBVywwQ0FBeURFLE9BQWpCRCxTQUFRLFdBQTBCLE9BQWpCQztZQUU3RkssTUFBTUMsS0FDSEMsSUFBSSxDQUFDLENBQUNDLE1BQVFBLElBQUlDLElBQUksSUFDdEJGLElBQUksQ0FBQyxDQUFDQztnQkFDTCx1RUFBdUU7Z0JBQ3ZFMUIsY0FBYzBCLElBQUlFLE1BQU07Z0JBQ3hCLE1BQU1DLE9BQU8sSUFBSUMsS0FBS0osSUFBSUUsTUFBTSxDQUFDQyxJQUFJO1lBQ3ZDO1lBRUZOLE1BQU1DLEtBQ0hDLElBQUksQ0FBQyxDQUFDQyxNQUFRQSxJQUFJQyxJQUFJLElBQ3RCRixJQUFJLENBQUMsQ0FBQ0M7Z0JBQ0wsdUVBQXVFO2dCQUN2RTFCLGNBQWMwQixJQUFJRSxNQUFNO2dCQUN4QixNQUFNQyxPQUFPLElBQUlDLEtBQUtKLElBQUlFLE1BQU0sQ0FBQ0MsSUFBSTtZQUN2QztRQUNKO0lBQ0YsR0FBRztRQUFDNUIsT0FBT1MsT0FBTztLQUFDO0lBRW5CLHFCQUNFOzswQkFDRSw4REFBQ3FCO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDQztvQkFBR0QsV0FBVTs4QkFBb0NuQzs7Ozs7Ozs7Ozs7MEJBRXBELDhEQUFDa0M7Z0JBQUlHLHVCQUFxQjtnQkFBQ0YsV0FBVTswQkFDbENqQyxXQUFXYyxHQUFHLENBQUMsQ0FBQ3NCLHdCQUNmLDhEQUFDMUMsK0RBQVdBO3dCQUVWMkMsT0FBT0QsUUFBUUMsS0FBSzt3QkFDcEJDLFVBQVVGLFFBQVFFLFFBQVE7d0JBQzFCUixNQUFNTSxRQUFRTixJQUFJO3dCQUNsQlMsWUFBWUgsUUFBUUcsVUFBVTt3QkFDOUJDLFFBQVFKLFFBQVFJLE1BQU07dUJBTGpCSixRQUFRSyxHQUFHOzs7Ozs7Ozs7Ozs7QUE4RDVCO0dBdEh3QjVDOztRQUdQTixrREFBU0E7OztLQUhGTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvYXJ0aXN0cy9bYXJ0aXN0XS5qcz9jNzM4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFydHdvcmtUaWxlIGZyb20gXCJAL2NvbXBvbmVudHMvQXJ0d29ya1RpbGVcIjtcbmltcG9ydCB7IExpZ2h0Ym94LCBpbml0VEUgfSBmcm9tIFwidHctZWxlbWVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZSgpIHtcbiAgY29uc3QgW2FydGlzdCwgc2V0QXJ0aXN0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbY29sbGVjdGlvbiwgc2V0Q29sbGVjdGlvbl0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBpbml0VEUoeyBMaWdodGJveCB9KTtcblxuICBmdW5jdGlvbiB0b1RpdGxlQ2FzZShzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcd1xcUyovZywgZnVuY3Rpb24gKHR4dCkge1xuICAgICAgcmV0dXJuIHR4dC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHR4dC5zdWJzdHIoMSkudG9Mb3dlckNhc2UoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHJvdXRlci5pc1JlYWR5KSB7XG4gICAgICBjb25zdCBhcnRpc3QgPSByb3V0ZXIucXVlcnkuYXJ0aXN0XG4gICAgICAgIC5zcGxpdChcIi1cIilcbiAgICAgICAgLm1hcCgobmFtZSkgPT4gdG9UaXRsZUNhc2UobmFtZSkpXG4gICAgICAgIC5qb2luKFwiIFwiKTtcbiAgICAgIHNldEFydGlzdChhcnRpc3QpO1xuXG4gICAgICBsZXQgUFJPSkVDVF9JRCA9IFwiNWEyeHIxaWdcIjtcbiAgICAgIGxldCBEQVRBU0VUID0gXCJwcm9kdWN0aW9uXCI7XG4gICAgICBsZXQgUVVFUllfQ09MTEVDVElPTiA9IGVuY29kZVVSSUNvbXBvbmVudChcbiAgICAgICAgYCpbX3R5cGUgPT0gXCJhcnRcIiAmJiAgYXJ0aXN0Ll9yZWYgaW4gKltfdHlwZT09XCJhcnRpc3RcIiAmJiBuYW1lPT1cIiR7YXJ0aXN0fVwiXS5faWRde19pZCwgdGl0bGUsIGRpbWVuc2lvbnMsIG1lZGl1bSwgeWVhciwgXCJhcnRpc3RcIjogYXJ0aXN0LT5uYW1lLCBcImltYWdlVXJsXCI6IGltYWdlLmFzc2V0LT51cmx9YFxuICAgICAgKTtcbiAgICAgIGxldCBRVUVSWV9CSU8gPSBlbmNvZGVVUklDb21wb25lbnQoYCpbX3R5cGUgPT0gXCJhcnRcIl17YmlvfWApO1xuICAgICAgLy8gQ29tcG9zZSB0aGUgVVJMIGZvciB5b3VyIHByb2plY3QncyBlbmRwb2ludCBhbmQgYWRkIHRoZSBxdWVyeVxuICAgICAgbGV0IFVSTF9DT0xMRUNUSU9OID0gYGh0dHBzOi8vJHtQUk9KRUNUX0lEfS5hcGkuc2FuaXR5LmlvL3YyMDIxLTEwLTIxL2RhdGEvcXVlcnkvJHtEQVRBU0VUfT9xdWVyeT0ke1FVRVJZX0NPTExFQ1RJT059YDtcbiAgICAgIGxldCBVUkxfQklPID0gYGh0dHBzOi8vJHtQUk9KRUNUX0lEfS5hcGkuc2FuaXR5LmlvL3YyMDIxLTEwLTIxL2RhdGEvcXVlcnkvJHtEQVRBU0VUfT9xdWVyeT0ke1FVRVJZX0NPTExFQ1RJT059YDtcblxuICAgICAgZmV0Y2goVVJMKVxuICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgLy8gY29uc3QgY29sbGVjdGlvbiA9IHJlcy5yZXN1bHQuZmlsdGVyKChhcnQpID0+IGFydC5hcnRpc3QgPT0gYXJ0aXN0KTtcbiAgICAgICAgICBzZXRDb2xsZWN0aW9uKHJlcy5yZXN1bHQpO1xuICAgICAgICAgIGNvbnN0IHllYXIgPSBuZXcgRGF0ZShyZXMucmVzdWx0LnllYXIpO1xuICAgICAgICB9KTtcblxuICAgICAgZmV0Y2goVVJMKVxuICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgLy8gY29uc3QgY29sbGVjdGlvbiA9IHJlcy5yZXN1bHQuZmlsdGVyKChhcnQpID0+IGFydC5hcnRpc3QgPT0gYXJ0aXN0KTtcbiAgICAgICAgICBzZXRDb2xsZWN0aW9uKHJlcy5yZXN1bHQpO1xuICAgICAgICAgIGNvbnN0IHllYXIgPSBuZXcgRGF0ZShyZXMucmVzdWx0LnllYXIpO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sIFtyb3V0ZXIuaXNSZWFkeV0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMTIgZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidHlwZWZhY2Utc2Vhc29ucyB0ZXh0LTd4bCBtLWF1dG9cIj57YXJ0aXN0fTwvaDE+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgZGF0YS10ZS1saWdodGJveC1pbml0IGNsYXNzTmFtZT1cInAtMjAgZ3JpZCBncmlkLWNvbHMtNCBnYXAtMTBcIj5cbiAgICAgICAge2NvbGxlY3Rpb24ubWFwKChhcnR3b3JrKSA9PiAoXG4gICAgICAgICAgPEFydHdvcmtUaWxlXG4gICAgICAgICAgICBrZXk9e2FydHdvcmsuX2lkfVxuICAgICAgICAgICAgdGl0bGU9e2FydHdvcmsudGl0bGV9XG4gICAgICAgICAgICBpbWFnZVVybD17YXJ0d29yay5pbWFnZVVybH1cbiAgICAgICAgICAgIHllYXI9e2FydHdvcmsueWVhcn1cbiAgICAgICAgICAgIGRpbWVuc2lvbnM9e2FydHdvcmsuZGltZW5zaW9uc31cbiAgICAgICAgICAgIG1lZGl1bT17YXJ0d29yay5tZWRpdW19XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIDxkaXYgZGF0YS10ZS1saWdodGJveC1pbml0IGNsYXNzPVwiZ3JpZCBncmlkLWNvbHMtMyBnYXAtMTBcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImgtZnVsbCB3LWZ1bGxcIj5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL21kYmNkbi5iLWNkbi5uZXQvaW1nL1Bob3Rvcy9UaHVtYm5haWxzL1NsaWRlcy8xLndlYnBcIlxuICAgICAgICAgICAgZGF0YS10ZS1pbWc9XCJodHRwczovL21kYmNkbi5iLWNkbi5uZXQvaW1nL1Bob3Rvcy9TbGlkZXMvMS53ZWJwXCJcbiAgICAgICAgICAgIGFsdD1cIlRhYmxlIEZ1bGwgb2YgU3BpY2VzXCJcbiAgICAgICAgICAgIGNsYXNzPVwidy1mdWxsIGN1cnNvci16b29tLWluIGRhdGEtW3RlLWxpZ2h0Ym94LWRpc2FibGVkXTpjdXJzb3ItYXV0b1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoLWZ1bGwgdy1mdWxsXCI+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9tZGJjZG4uYi1jZG4ubmV0L2ltZy9QaG90b3MvVGh1bWJuYWlscy9TbGlkZXMvMi53ZWJwXCJcbiAgICAgICAgICAgIGRhdGEtdGUtaW1nPVwiaHR0cHM6Ly9tZGJjZG4uYi1jZG4ubmV0L2ltZy9QaG90b3MvU2xpZGVzLzIud2VicFwiXG4gICAgICAgICAgICBhbHQ9XCJXaW50ZXIgTGFuZHNjYXBlXCJcbiAgICAgICAgICAgIGNsYXNzPVwidy1mdWxsIGN1cnNvci16b29tLWluIGRhdGEtW3RlLWxpZ2h0Ym94LWRpc2FibGVkXTpjdXJzb3ItYXV0b1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoLWZ1bGwgdy1mdWxsXCI+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9tZGJjZG4uYi1jZG4ubmV0L2ltZy9QaG90b3MvVGh1bWJuYWlscy9TbGlkZXMvMy53ZWJwXCJcbiAgICAgICAgICAgIGRhdGEtdGUtaW1nPVwiaHR0cHM6Ly9tZGJjZG4uYi1jZG4ubmV0L2ltZy9QaG90b3MvU2xpZGVzLzMud2VicFwiXG4gICAgICAgICAgICBhbHQ9XCJWaWV3IG9mIHRoZSBDaXR5IGluIHRoZSBNb3VudGFpbnNcIlxuICAgICAgICAgICAgY2xhc3M9XCJ3LWZ1bGwgY3Vyc29yLXpvb20taW4gZGF0YS1bdGUtbGlnaHRib3gtZGlzYWJsZWRdOmN1cnNvci1hdXRvXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImgtZnVsbCB3LWZ1bGxcIj5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL21kYmNkbi5iLWNkbi5uZXQvaW1nL1Bob3Rvcy9UaHVtYm5haWxzL1NsaWRlcy8zLndlYnBcIlxuICAgICAgICAgICAgZGF0YS10ZS1pbWc9XCJodHRwczovL21kYmNkbi5iLWNkbi5uZXQvaW1nL1Bob3Rvcy9TbGlkZXMvMy53ZWJwXCJcbiAgICAgICAgICAgIGFsdD1cIlZpZXcgb2YgdGhlIENpdHkgaW4gdGhlIE1vdW50YWluc1wiXG4gICAgICAgICAgICBjbGFzcz1cInctZnVsbCBjdXJzb3Item9vbS1pbiBkYXRhLVt0ZS1saWdodGJveC1kaXNhYmxlZF06Y3Vyc29yLWF1dG9cIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaC1mdWxsIHctZnVsbFwiPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vbWRiY2RuLmItY2RuLm5ldC9pbWcvUGhvdG9zL1RodW1ibmFpbHMvU2xpZGVzLzMud2VicFwiXG4gICAgICAgICAgICBkYXRhLXRlLWltZz1cImh0dHBzOi8vbWRiY2RuLmItY2RuLm5ldC9pbWcvUGhvdG9zL1NsaWRlcy8zLndlYnBcIlxuICAgICAgICAgICAgYWx0PVwiVmlldyBvZiB0aGUgQ2l0eSBpbiB0aGUgTW91bnRhaW5zXCJcbiAgICAgICAgICAgIGNsYXNzPVwidy1mdWxsIGN1cnNvci16b29tLWluIGRhdGEtW3RlLWxpZ2h0Ym94LWRpc2FibGVkXTpjdXJzb3ItYXV0b1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoLWZ1bGwgdy1mdWxsXCI+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9tZGJjZG4uYi1jZG4ubmV0L2ltZy9QaG90b3MvVGh1bWJuYWlscy9TbGlkZXMvMy53ZWJwXCJcbiAgICAgICAgICAgIGRhdGEtdGUtaW1nPVwiaHR0cHM6Ly9tZGJjZG4uYi1jZG4ubmV0L2ltZy9QaG90b3MvU2xpZGVzLzMud2VicFwiXG4gICAgICAgICAgICBhbHQ9XCJWaWV3IG9mIHRoZSBDaXR5IGluIHRoZSBNb3VudGFpbnNcIlxuICAgICAgICAgICAgY2xhc3M9XCJ3LWZ1bGwgY3Vyc29yLXpvb20taW4gZGF0YS1bdGUtbGlnaHRib3gtZGlzYWJsZWRdOmN1cnNvci1hdXRvXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PiAqL31cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkFydHdvcmtUaWxlIiwiTGlnaHRib3giLCJpbml0VEUiLCJQYWdlIiwiYXJ0aXN0Iiwic2V0QXJ0aXN0IiwiY29sbGVjdGlvbiIsInNldENvbGxlY3Rpb24iLCJyb3V0ZXIiLCJ0b1RpdGxlQ2FzZSIsInN0ciIsInJlcGxhY2UiLCJ0eHQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0ciIsInRvTG93ZXJDYXNlIiwiaXNSZWFkeSIsInF1ZXJ5Iiwic3BsaXQiLCJtYXAiLCJuYW1lIiwiam9pbiIsIlBST0pFQ1RfSUQiLCJEQVRBU0VUIiwiUVVFUllfQ09MTEVDVElPTiIsImVuY29kZVVSSUNvbXBvbmVudCIsIlFVRVJZX0JJTyIsIlVSTF9DT0xMRUNUSU9OIiwiVVJMX0JJTyIsImZldGNoIiwiVVJMIiwidGhlbiIsInJlcyIsImpzb24iLCJyZXN1bHQiLCJ5ZWFyIiwiRGF0ZSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiZGF0YS10ZS1saWdodGJveC1pbml0IiwiYXJ0d29yayIsInRpdGxlIiwiaW1hZ2VVcmwiLCJkaW1lbnNpb25zIiwibWVkaXVtIiwiX2lkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/artists/[artist].js\n"));

/***/ })

});