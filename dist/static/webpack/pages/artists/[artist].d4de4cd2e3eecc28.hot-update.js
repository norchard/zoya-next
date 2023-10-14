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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_ArtworkTile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ArtworkTile */ \"./src/components/ArtworkTile.js\");\n/* harmony import */ var tw_elements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tw-elements */ \"./node_modules/tw-elements/dist/js/tw-elements.es.min.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Page() {\n    _s();\n    const [artist, setArtist] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [bio, setBio] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [collection, setCollection] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    (0,tw_elements__WEBPACK_IMPORTED_MODULE_4__.initTE)({\n        Lightbox: tw_elements__WEBPACK_IMPORTED_MODULE_4__.Lightbox\n    });\n    function toTitleCase(str) {\n        return str.replace(/\\w\\S*/g, function(txt) {\n            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();\n        });\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (router.isReady) {\n            const artist = router.query.artist.split(\"-\").map((name)=>toTitleCase(name)).join(\" \");\n            setArtist(artist);\n            let PROJECT_ID = \"5a2xr1ig\";\n            let DATASET = \"production\";\n            let QUERY = encodeURIComponent('*[_type in [\"art\", \"artist\"]]{\\n          _type == \"art\" &&  artist._ref in *[_type==\"artist\" && name==\"'.concat(artist, '\"]._id]{_id, title, dimensions, medium, year, \"artist\": artist->name, \"imageUrl\": image.asset->url, bio},\\n          _type == \"artist\" =&gt; {\\n            bio\\n          }\\n        }\\n        \\n        \\n        *[_type in [\"art\", \"artist\"] &&  artist._ref in *[_type==\"artist\" && name==\"').concat(artist, '\"]._id]{_id, title, dimensions, medium, year, \"artist\": artist->name, \"imageUrl\": image.asset->url, bio}'));\n            // let QUERY_COLLECTION = encodeURIComponent(\n            //   `*[_type == \"art\" &&  artist._ref in *[_type==\"artist\" && name==\"${artist}\"]._id]{_id, title, dimensions, medium, year, \"artist\": artist->name, \"imageUrl\": image.asset->url}`\n            // );\n            // let QUERY_BIO = encodeURIComponent(`*[_type == \"artist\"]{bio}`);\n            // Compose the URL for your project's endpoint and add the query\n            let URL = \"https://\".concat(PROJECT_ID, \".api.sanity.io/v2021-10-21/data/query/\").concat(DATASET, \"?query=\").concat(QUERY);\n            // let URL_BIO = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY_BIO}`;\n            fetch(URL).then((res)=>res.json()).then((res)=>{\n                // const collection = res.result.filter((art) => art.artist == artist);\n                setCollection(res.result);\n                const year = new Date(res.result.year);\n                console.log(res.result);\n            });\n        // fetch(URL_BIO)\n        //   .then((res) => res.json())\n        //   .then((res) => {\n        //     console.log(\"bio: \", res.result.bio);\n        //   });\n        }\n    }, [\n        router.isReady\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"pt-12 flex justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"typeface-seasons text-7xl m-auto\",\n                    children: artist\n                }, void 0, false, {\n                    fileName: \"/Users/nicoleorchard/Desktop/zoya-next/src/pages/artists/[artist].js\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/nicoleorchard/Desktop/zoya-next/src/pages/artists/[artist].js\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                \"data-te-lightbox-init\": true,\n                className: \"p-20 grid grid-cols-4 gap-10\",\n                children: collection.map((artwork)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ArtworkTile__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        title: artwork.title,\n                        imageUrl: artwork.imageUrl,\n                        year: artwork.year,\n                        dimensions: artwork.dimensions,\n                        medium: artwork.medium\n                    }, artwork._id, false, {\n                        fileName: \"/Users/nicoleorchard/Desktop/zoya-next/src/pages/artists/[artist].js\",\n                        lineNumber: 72,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/nicoleorchard/Desktop/zoya-next/src/pages/artists/[artist].js\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Page, \"9zJqAdn1lazJhXk3quHnLyMDCSI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXJ0aXN0cy9bYXJ0aXN0XS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUF3QztBQUNJO0FBQ087QUFDSjtBQUVoQyxTQUFTTTs7SUFDdEIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ1EsS0FBS0MsT0FBTyxHQUFHVCwrQ0FBUUEsQ0FBQztJQUMvQixNQUFNLENBQUNVLFlBQVlDLGNBQWMsR0FBR1gsK0NBQVFBLENBQUMsRUFBRTtJQUMvQyxNQUFNWSxTQUFTYixzREFBU0E7SUFDeEJLLG1EQUFNQSxDQUFDO1FBQUVELFFBQVFBLG1EQUFBQTtJQUFDO0lBRWxCLFNBQVNVLFlBQVlDLEdBQUc7UUFDdEIsT0FBT0EsSUFBSUMsT0FBTyxDQUFDLFVBQVUsU0FBVUMsR0FBRztZQUN4QyxPQUFPQSxJQUFJQyxNQUFNLENBQUMsR0FBR0MsV0FBVyxLQUFLRixJQUFJRyxNQUFNLENBQUMsR0FBR0MsV0FBVztRQUNoRTtJQUNGO0lBRUFuQixnREFBU0EsQ0FBQztRQUNSLElBQUlXLE9BQU9TLE9BQU8sRUFBRTtZQUNsQixNQUFNZixTQUFTTSxPQUFPVSxLQUFLLENBQUNoQixNQUFNLENBQy9CaUIsS0FBSyxDQUFDLEtBQ05DLEdBQUcsQ0FBQyxDQUFDQyxPQUFTWixZQUFZWSxPQUMxQkMsSUFBSSxDQUFDO1lBQ1JuQixVQUFVRDtZQUVWLElBQUlxQixhQUFhO1lBQ2pCLElBQUlDLFVBQVU7WUFDZCxJQUFJQyxRQUFRQyxtQkFDViwyR0FROEV4QixPQVBaQSxRQUFPLHFTQU9ZLE9BQVBBLFFBQU87WUFFdkYsNkNBQTZDO1lBQzdDLG1MQUFtTDtZQUNuTCxLQUFLO1lBQ0wsbUVBQW1FO1lBQ25FLGdFQUFnRTtZQUNoRSxJQUFJeUIsTUFBTSxXQUE4REgsT0FBbkRELFlBQVcsMENBQXlERSxPQUFqQkQsU0FBUSxXQUFlLE9BQU5DO1lBQ3pGLDRHQUE0RztZQUU1R0csTUFBTUQsS0FDSEUsSUFBSSxDQUFDLENBQUNDLE1BQVFBLElBQUlDLElBQUksSUFDdEJGLElBQUksQ0FBQyxDQUFDQztnQkFDTCx1RUFBdUU7Z0JBQ3ZFdkIsY0FBY3VCLElBQUlFLE1BQU07Z0JBQ3hCLE1BQU1DLE9BQU8sSUFBSUMsS0FBS0osSUFBSUUsTUFBTSxDQUFDQyxJQUFJO2dCQUNyQ0UsUUFBUUMsR0FBRyxDQUFDTixJQUFJRSxNQUFNO1lBQ3hCO1FBRUYsaUJBQWlCO1FBQ2pCLCtCQUErQjtRQUMvQixxQkFBcUI7UUFDckIsNENBQTRDO1FBQzVDLFFBQVE7UUFDVjtJQUNGLEdBQUc7UUFBQ3hCLE9BQU9TLE9BQU87S0FBQztJQUVuQixxQkFDRTs7MEJBQ0UsOERBQUNvQjtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0M7b0JBQUdELFdBQVU7OEJBQW9DcEM7Ozs7Ozs7Ozs7OzBCQUVwRCw4REFBQ21DO2dCQUFJRyx1QkFBcUI7Z0JBQUNGLFdBQVU7MEJBQ2xDaEMsV0FBV2MsR0FBRyxDQUFDLENBQUNxQix3QkFDZiw4REFBQzNDLCtEQUFXQTt3QkFFVjRDLE9BQU9ELFFBQVFDLEtBQUs7d0JBQ3BCQyxVQUFVRixRQUFRRSxRQUFRO3dCQUMxQlYsTUFBTVEsUUFBUVIsSUFBSTt3QkFDbEJXLFlBQVlILFFBQVFHLFVBQVU7d0JBQzlCQyxRQUFRSixRQUFRSSxNQUFNO3VCQUxqQkosUUFBUUssR0FBRzs7Ozs7Ozs7Ozs7O0FBOEQ1QjtHQWpJd0I3Qzs7UUFJUE4sa0RBQVNBOzs7S0FKRk0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2FydGlzdHMvW2FydGlzdF0uanM/YzczOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBcnR3b3JrVGlsZSBmcm9tIFwiQC9jb21wb25lbnRzL0FydHdvcmtUaWxlXCI7XG5pbXBvcnQgeyBMaWdodGJveCwgaW5pdFRFIH0gZnJvbSBcInR3LWVsZW1lbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2UoKSB7XG4gIGNvbnN0IFthcnRpc3QsIHNldEFydGlzdF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2Jpbywgc2V0QmlvXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbY29sbGVjdGlvbiwgc2V0Q29sbGVjdGlvbl0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBpbml0VEUoeyBMaWdodGJveCB9KTtcblxuICBmdW5jdGlvbiB0b1RpdGxlQ2FzZShzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcd1xcUyovZywgZnVuY3Rpb24gKHR4dCkge1xuICAgICAgcmV0dXJuIHR4dC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHR4dC5zdWJzdHIoMSkudG9Mb3dlckNhc2UoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHJvdXRlci5pc1JlYWR5KSB7XG4gICAgICBjb25zdCBhcnRpc3QgPSByb3V0ZXIucXVlcnkuYXJ0aXN0XG4gICAgICAgIC5zcGxpdChcIi1cIilcbiAgICAgICAgLm1hcCgobmFtZSkgPT4gdG9UaXRsZUNhc2UobmFtZSkpXG4gICAgICAgIC5qb2luKFwiIFwiKTtcbiAgICAgIHNldEFydGlzdChhcnRpc3QpO1xuXG4gICAgICBsZXQgUFJPSkVDVF9JRCA9IFwiNWEyeHIxaWdcIjtcbiAgICAgIGxldCBEQVRBU0VUID0gXCJwcm9kdWN0aW9uXCI7XG4gICAgICBsZXQgUVVFUlkgPSBlbmNvZGVVUklDb21wb25lbnQoXG4gICAgICAgIGAqW190eXBlIGluIFtcImFydFwiLCBcImFydGlzdFwiXV17XG4gICAgICAgICAgX3R5cGUgPT0gXCJhcnRcIiAmJiAgYXJ0aXN0Ll9yZWYgaW4gKltfdHlwZT09XCJhcnRpc3RcIiAmJiBuYW1lPT1cIiR7YXJ0aXN0fVwiXS5faWRde19pZCwgdGl0bGUsIGRpbWVuc2lvbnMsIG1lZGl1bSwgeWVhciwgXCJhcnRpc3RcIjogYXJ0aXN0LT5uYW1lLCBcImltYWdlVXJsXCI6IGltYWdlLmFzc2V0LT51cmwsIGJpb30sXG4gICAgICAgICAgX3R5cGUgPT0gXCJhcnRpc3RcIiA9Jmd0OyB7XG4gICAgICAgICAgICBiaW9cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICAqW190eXBlIGluIFtcImFydFwiLCBcImFydGlzdFwiXSAmJiAgYXJ0aXN0Ll9yZWYgaW4gKltfdHlwZT09XCJhcnRpc3RcIiAmJiBuYW1lPT1cIiR7YXJ0aXN0fVwiXS5faWRde19pZCwgdGl0bGUsIGRpbWVuc2lvbnMsIG1lZGl1bSwgeWVhciwgXCJhcnRpc3RcIjogYXJ0aXN0LT5uYW1lLCBcImltYWdlVXJsXCI6IGltYWdlLmFzc2V0LT51cmwsIGJpb31gXG4gICAgICApO1xuICAgICAgLy8gbGV0IFFVRVJZX0NPTExFQ1RJT04gPSBlbmNvZGVVUklDb21wb25lbnQoXG4gICAgICAvLyAgIGAqW190eXBlID09IFwiYXJ0XCIgJiYgIGFydGlzdC5fcmVmIGluICpbX3R5cGU9PVwiYXJ0aXN0XCIgJiYgbmFtZT09XCIke2FydGlzdH1cIl0uX2lkXXtfaWQsIHRpdGxlLCBkaW1lbnNpb25zLCBtZWRpdW0sIHllYXIsIFwiYXJ0aXN0XCI6IGFydGlzdC0+bmFtZSwgXCJpbWFnZVVybFwiOiBpbWFnZS5hc3NldC0+dXJsfWBcbiAgICAgIC8vICk7XG4gICAgICAvLyBsZXQgUVVFUllfQklPID0gZW5jb2RlVVJJQ29tcG9uZW50KGAqW190eXBlID09IFwiYXJ0aXN0XCJde2Jpb31gKTtcbiAgICAgIC8vIENvbXBvc2UgdGhlIFVSTCBmb3IgeW91ciBwcm9qZWN0J3MgZW5kcG9pbnQgYW5kIGFkZCB0aGUgcXVlcnlcbiAgICAgIGxldCBVUkwgPSBgaHR0cHM6Ly8ke1BST0pFQ1RfSUR9LmFwaS5zYW5pdHkuaW8vdjIwMjEtMTAtMjEvZGF0YS9xdWVyeS8ke0RBVEFTRVR9P3F1ZXJ5PSR7UVVFUll9YDtcbiAgICAgIC8vIGxldCBVUkxfQklPID0gYGh0dHBzOi8vJHtQUk9KRUNUX0lEfS5hcGkuc2FuaXR5LmlvL3YyMDIxLTEwLTIxL2RhdGEvcXVlcnkvJHtEQVRBU0VUfT9xdWVyeT0ke1FVRVJZX0JJT31gO1xuXG4gICAgICBmZXRjaChVUkwpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAvLyBjb25zdCBjb2xsZWN0aW9uID0gcmVzLnJlc3VsdC5maWx0ZXIoKGFydCkgPT4gYXJ0LmFydGlzdCA9PSBhcnRpc3QpO1xuICAgICAgICAgIHNldENvbGxlY3Rpb24ocmVzLnJlc3VsdCk7XG4gICAgICAgICAgY29uc3QgeWVhciA9IG5ldyBEYXRlKHJlcy5yZXN1bHQueWVhcik7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzLnJlc3VsdCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAvLyBmZXRjaChVUkxfQklPKVxuICAgICAgLy8gICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLy8gICAudGhlbigocmVzKSA9PiB7XG4gICAgICAvLyAgICAgY29uc29sZS5sb2coXCJiaW86IFwiLCByZXMucmVzdWx0LmJpbyk7XG4gICAgICAvLyAgIH0pO1xuICAgIH1cbiAgfSwgW3JvdXRlci5pc1JlYWR5XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0xMiBmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0eXBlZmFjZS1zZWFzb25zIHRleHQtN3hsIG0tYXV0b1wiPnthcnRpc3R9PC9oMT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBkYXRhLXRlLWxpZ2h0Ym94LWluaXQgY2xhc3NOYW1lPVwicC0yMCBncmlkIGdyaWQtY29scy00IGdhcC0xMFwiPlxuICAgICAgICB7Y29sbGVjdGlvbi5tYXAoKGFydHdvcmspID0+IChcbiAgICAgICAgICA8QXJ0d29ya1RpbGVcbiAgICAgICAgICAgIGtleT17YXJ0d29yay5faWR9XG4gICAgICAgICAgICB0aXRsZT17YXJ0d29yay50aXRsZX1cbiAgICAgICAgICAgIGltYWdlVXJsPXthcnR3b3JrLmltYWdlVXJsfVxuICAgICAgICAgICAgeWVhcj17YXJ0d29yay55ZWFyfVxuICAgICAgICAgICAgZGltZW5zaW9ucz17YXJ0d29yay5kaW1lbnNpb25zfVxuICAgICAgICAgICAgbWVkaXVtPXthcnR3b3JrLm1lZGl1bX1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogPGRpdiBkYXRhLXRlLWxpZ2h0Ym94LWluaXQgY2xhc3M9XCJncmlkIGdyaWQtY29scy0zIGdhcC0xMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaC1mdWxsIHctZnVsbFwiPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vbWRiY2RuLmItY2RuLm5ldC9pbWcvUGhvdG9zL1RodW1ibmFpbHMvU2xpZGVzLzEud2VicFwiXG4gICAgICAgICAgICBkYXRhLXRlLWltZz1cImh0dHBzOi8vbWRiY2RuLmItY2RuLm5ldC9pbWcvUGhvdG9zL1NsaWRlcy8xLndlYnBcIlxuICAgICAgICAgICAgYWx0PVwiVGFibGUgRnVsbCBvZiBTcGljZXNcIlxuICAgICAgICAgICAgY2xhc3M9XCJ3LWZ1bGwgY3Vyc29yLXpvb20taW4gZGF0YS1bdGUtbGlnaHRib3gtZGlzYWJsZWRdOmN1cnNvci1hdXRvXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImgtZnVsbCB3LWZ1bGxcIj5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL21kYmNkbi5iLWNkbi5uZXQvaW1nL1Bob3Rvcy9UaHVtYm5haWxzL1NsaWRlcy8yLndlYnBcIlxuICAgICAgICAgICAgZGF0YS10ZS1pbWc9XCJodHRwczovL21kYmNkbi5iLWNkbi5uZXQvaW1nL1Bob3Rvcy9TbGlkZXMvMi53ZWJwXCJcbiAgICAgICAgICAgIGFsdD1cIldpbnRlciBMYW5kc2NhcGVcIlxuICAgICAgICAgICAgY2xhc3M9XCJ3LWZ1bGwgY3Vyc29yLXpvb20taW4gZGF0YS1bdGUtbGlnaHRib3gtZGlzYWJsZWRdOmN1cnNvci1hdXRvXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImgtZnVsbCB3LWZ1bGxcIj5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL21kYmNkbi5iLWNkbi5uZXQvaW1nL1Bob3Rvcy9UaHVtYm5haWxzL1NsaWRlcy8zLndlYnBcIlxuICAgICAgICAgICAgZGF0YS10ZS1pbWc9XCJodHRwczovL21kYmNkbi5iLWNkbi5uZXQvaW1nL1Bob3Rvcy9TbGlkZXMvMy53ZWJwXCJcbiAgICAgICAgICAgIGFsdD1cIlZpZXcgb2YgdGhlIENpdHkgaW4gdGhlIE1vdW50YWluc1wiXG4gICAgICAgICAgICBjbGFzcz1cInctZnVsbCBjdXJzb3Item9vbS1pbiBkYXRhLVt0ZS1saWdodGJveC1kaXNhYmxlZF06Y3Vyc29yLWF1dG9cIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaC1mdWxsIHctZnVsbFwiPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vbWRiY2RuLmItY2RuLm5ldC9pbWcvUGhvdG9zL1RodW1ibmFpbHMvU2xpZGVzLzMud2VicFwiXG4gICAgICAgICAgICBkYXRhLXRlLWltZz1cImh0dHBzOi8vbWRiY2RuLmItY2RuLm5ldC9pbWcvUGhvdG9zL1NsaWRlcy8zLndlYnBcIlxuICAgICAgICAgICAgYWx0PVwiVmlldyBvZiB0aGUgQ2l0eSBpbiB0aGUgTW91bnRhaW5zXCJcbiAgICAgICAgICAgIGNsYXNzPVwidy1mdWxsIGN1cnNvci16b29tLWluIGRhdGEtW3RlLWxpZ2h0Ym94LWRpc2FibGVkXTpjdXJzb3ItYXV0b1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoLWZ1bGwgdy1mdWxsXCI+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9tZGJjZG4uYi1jZG4ubmV0L2ltZy9QaG90b3MvVGh1bWJuYWlscy9TbGlkZXMvMy53ZWJwXCJcbiAgICAgICAgICAgIGRhdGEtdGUtaW1nPVwiaHR0cHM6Ly9tZGJjZG4uYi1jZG4ubmV0L2ltZy9QaG90b3MvU2xpZGVzLzMud2VicFwiXG4gICAgICAgICAgICBhbHQ9XCJWaWV3IG9mIHRoZSBDaXR5IGluIHRoZSBNb3VudGFpbnNcIlxuICAgICAgICAgICAgY2xhc3M9XCJ3LWZ1bGwgY3Vyc29yLXpvb20taW4gZGF0YS1bdGUtbGlnaHRib3gtZGlzYWJsZWRdOmN1cnNvci1hdXRvXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImgtZnVsbCB3LWZ1bGxcIj5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL21kYmNkbi5iLWNkbi5uZXQvaW1nL1Bob3Rvcy9UaHVtYm5haWxzL1NsaWRlcy8zLndlYnBcIlxuICAgICAgICAgICAgZGF0YS10ZS1pbWc9XCJodHRwczovL21kYmNkbi5iLWNkbi5uZXQvaW1nL1Bob3Rvcy9TbGlkZXMvMy53ZWJwXCJcbiAgICAgICAgICAgIGFsdD1cIlZpZXcgb2YgdGhlIENpdHkgaW4gdGhlIE1vdW50YWluc1wiXG4gICAgICAgICAgICBjbGFzcz1cInctZnVsbCBjdXJzb3Item9vbS1pbiBkYXRhLVt0ZS1saWdodGJveC1kaXNhYmxlZF06Y3Vyc29yLWF1dG9cIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+ICovfVxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQXJ0d29ya1RpbGUiLCJMaWdodGJveCIsImluaXRURSIsIlBhZ2UiLCJhcnRpc3QiLCJzZXRBcnRpc3QiLCJiaW8iLCJzZXRCaW8iLCJjb2xsZWN0aW9uIiwic2V0Q29sbGVjdGlvbiIsInJvdXRlciIsInRvVGl0bGVDYXNlIiwic3RyIiwicmVwbGFjZSIsInR4dCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic3Vic3RyIiwidG9Mb3dlckNhc2UiLCJpc1JlYWR5IiwicXVlcnkiLCJzcGxpdCIsIm1hcCIsIm5hbWUiLCJqb2luIiwiUFJPSkVDVF9JRCIsIkRBVEFTRVQiLCJRVUVSWSIsImVuY29kZVVSSUNvbXBvbmVudCIsIlVSTCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJyZXN1bHQiLCJ5ZWFyIiwiRGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImRhdGEtdGUtbGlnaHRib3gtaW5pdCIsImFydHdvcmsiLCJ0aXRsZSIsImltYWdlVXJsIiwiZGltZW5zaW9ucyIsIm1lZGl1bSIsIl9pZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/artists/[artist].js\n"));

/***/ })

});