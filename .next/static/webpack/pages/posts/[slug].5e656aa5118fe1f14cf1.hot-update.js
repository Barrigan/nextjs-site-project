webpackHotUpdate_N_E("pages/posts/[slug]",{

/***/ "./components/posts/post-detail/post-content.js":
/*!******************************************************!*\
  !*** ./components/posts/post-detail/post-content.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/src/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-syntax-highlighter */ \"./node_modules/react-syntax-highlighter/dist/esm/index.js\");\n/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_prism_atom_dark__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-syntax-highlighter/dist/cjs/styles/prism/atom-dark */ \"./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/atom-dark.js\");\n/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_prism_atom_dark__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_dist_cjs_styles_prism_atom_dark__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_syntax_highlighter_dist_cjs_languages_prism_javascript__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-syntax-highlighter/dist/cjs/languages/prism/javascript */ \"./node_modules/react-syntax-highlighter/dist/cjs/languages/prism/javascript.js\");\n/* harmony import */ var react_syntax_highlighter_dist_cjs_languages_prism_javascript__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_dist_cjs_languages_prism_javascript__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_syntax_highlighter_dist_cjs_languages_prism_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-syntax-highlighter/dist/cjs/languages/prism/css */ \"./node_modules/react-syntax-highlighter/dist/cjs/languages/prism/css.js\");\n/* harmony import */ var react_syntax_highlighter_dist_cjs_languages_prism_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_dist_cjs_languages_prism_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _post_header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./post-header */ \"./components/posts/post-detail/post-header.js\");\n/* harmony import */ var _post_content_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./post-content.module.css */ \"./components/posts/post-detail/post-content.module.css\");\n/* harmony import */ var _post_content_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_post_content_module_css__WEBPACK_IMPORTED_MODULE_8__);\n\nvar _jsxFileName = \"/Users/peynao/Documents/Datos/Front End Developer/NextJS/Section 12/nextjs-course-code-07849776424a7b0f111804e1130acc4e61169252/components/posts/post-detail/post-content.js\";\n\n\n\n\n\n\n\n\nreact_syntax_highlighter__WEBPACK_IMPORTED_MODULE_3__[\"PrismLight\"].registerLanguage(\"js\", react_syntax_highlighter_dist_cjs_languages_prism_javascript__WEBPACK_IMPORTED_MODULE_5___default.a);\nreact_syntax_highlighter__WEBPACK_IMPORTED_MODULE_3__[\"PrismLight\"].registerLanguage(\"css\", react_syntax_highlighter_dist_cjs_languages_prism_css__WEBPACK_IMPORTED_MODULE_6___default.a);\n\nfunction PostContent(props) {\n  var post = props.post;\n  var imagePath = \"/images/posts/\".concat(post.slug, \"/\").concat(post.image);\n  console.log(\"imagePath: \", imagePath);\n  var customRenderers = {\n    p: function p(paragraph) {\n      var node = paragraph.node;\n\n      if (node.children[0].tagName === \"img\") {\n        var image = node.children[0];\n        console.log(\"IMG SRC: \", image.properties.src);\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _post_content_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.image,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {\n            src: \"\".concat(image.properties.src),\n            alt: image.alt,\n            width: 600,\n            height: 300\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 29,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 11\n        }, this);\n      }\n\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: paragraph.children\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 14\n      }, this);\n    },\n    code: function code(_code) {\n      var className = _code.className,\n          children = _code.children;\n      var language = className.split(\"-\")[1]; // className is something like language-js => We need the \"js\" part here\n\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_3__[\"PrismLight\"], {\n        style: react_syntax_highlighter_dist_cjs_styles_prism_atom_dark__WEBPACK_IMPORTED_MODULE_4___default.a,\n        language: language,\n        children: children\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 9\n      }, this);\n    }\n  };\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n    className: _post_content_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.content,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_post_header__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      title: post.title,\n      image: imagePath\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_markdown__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      components: customRenderers,\n      children: post.content\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 56,\n    columnNumber: 5\n  }, this);\n}\n\n_c = PostContent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostContent);\n\nvar _c;\n\n$RefreshReg$(_c, \"PostContent\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wb3N0cy9wb3N0LWRldGFpbC9wb3N0LWNvbnRlbnQuanM/MmVkMSJdLCJuYW1lcyI6WyJTeW50YXhIaWdobGlnaHRlciIsInJlZ2lzdGVyTGFuZ3VhZ2UiLCJqcyIsImNzcyIsIlBvc3RDb250ZW50IiwicHJvcHMiLCJwb3N0IiwiaW1hZ2VQYXRoIiwic2x1ZyIsImltYWdlIiwiY29uc29sZSIsImxvZyIsImN1c3RvbVJlbmRlcmVycyIsInAiLCJwYXJhZ3JhcGgiLCJub2RlIiwiY2hpbGRyZW4iLCJ0YWdOYW1lIiwicHJvcGVydGllcyIsInNyYyIsImNsYXNzZXMiLCJhbHQiLCJjb2RlIiwiY2xhc3NOYW1lIiwibGFuZ3VhZ2UiLCJzcGxpdCIsImF0b21EYXJrIiwiY29udGVudCIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBQSxtRUFBaUIsQ0FBQ0MsZ0JBQWxCLENBQW1DLElBQW5DLEVBQXlDQyxtR0FBekM7QUFDQUYsbUVBQWlCLENBQUNDLGdCQUFsQixDQUFtQyxLQUFuQyxFQUEwQ0UsNEZBQTFDOztBQUVBLFNBQVNDLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTRCO0FBQUEsTUFDbEJDLElBRGtCLEdBQ1RELEtBRFMsQ0FDbEJDLElBRGtCO0FBRzFCLE1BQU1DLFNBQVMsMkJBQW9CRCxJQUFJLENBQUNFLElBQXpCLGNBQWlDRixJQUFJLENBQUNHLEtBQXRDLENBQWY7QUFFQUMsU0FBTyxDQUFDQyxHQUFSLENBQVksYUFBWixFQUEyQkosU0FBM0I7QUFDQSxNQUFNSyxlQUFlLEdBQUc7QUFDdEJDLEtBRHNCLGFBQ3BCQyxTQURvQixFQUNUO0FBQUEsVUFDSEMsSUFERyxHQUNNRCxTQUROLENBQ0hDLElBREc7O0FBRVgsVUFBSUEsSUFBSSxDQUFDQyxRQUFMLENBQWMsQ0FBZCxFQUFpQkMsT0FBakIsS0FBNkIsS0FBakMsRUFBd0M7QUFDdEMsWUFBTVIsS0FBSyxHQUFHTSxJQUFJLENBQUNDLFFBQUwsQ0FBYyxDQUFkLENBQWQ7QUFFQU4sZUFBTyxDQUFDQyxHQUFSLENBQVksV0FBWixFQUF5QkYsS0FBSyxDQUFDUyxVQUFOLENBQWlCQyxHQUExQztBQUNBLDRCQUNFO0FBQUssbUJBQVMsRUFBRUMsK0RBQU8sQ0FBQ1gsS0FBeEI7QUFBQSxpQ0FDRSxxRUFBQyxpREFBRDtBQUNFLGVBQUcsWUFBS0EsS0FBSyxDQUFDUyxVQUFOLENBQWlCQyxHQUF0QixDQURMO0FBRUUsZUFBRyxFQUFFVixLQUFLLENBQUNZLEdBRmI7QUFHRSxpQkFBSyxFQUFFLEdBSFQ7QUFJRSxrQkFBTSxFQUFFO0FBSlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREY7QUFVRDs7QUFFRCwwQkFBTztBQUFBLGtCQUFJUCxTQUFTLENBQUNFO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFQO0FBQ0QsS0FwQnFCO0FBc0J0Qk0sUUF0QnNCLGdCQXNCakJBLEtBdEJpQixFQXNCWDtBQUFBLFVBQ0RDLFNBREMsR0FDdUJELEtBRHZCLENBQ0RDLFNBREM7QUFBQSxVQUNVUCxRQURWLEdBQ3VCTSxLQUR2QixDQUNVTixRQURWO0FBRVQsVUFBTVEsUUFBUSxHQUFHRCxTQUFTLENBQUNFLEtBQVYsQ0FBZ0IsR0FBaEIsRUFBcUIsQ0FBckIsQ0FBakIsQ0FGUyxDQUVpQzs7QUFDMUMsMEJBQ0UscUVBQUMsbUVBQUQ7QUFDRSxhQUFLLEVBQUVDLCtGQURUO0FBRUUsZ0JBQVEsRUFBRUYsUUFGWjtBQUdFLGdCQUFRLEVBQUVSO0FBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGO0FBT0Q7QUFoQ3FCLEdBQXhCO0FBbUNBLHNCQUNFO0FBQVMsYUFBUyxFQUFFSSwrREFBTyxDQUFDTyxPQUE1QjtBQUFBLDRCQUNFLHFFQUFDLG9EQUFEO0FBQVksV0FBSyxFQUFFckIsSUFBSSxDQUFDc0IsS0FBeEI7QUFBK0IsV0FBSyxFQUFFckI7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUscUVBQUMscURBQUQ7QUFBZSxnQkFBVSxFQUFFSyxlQUEzQjtBQUFBLGdCQUE2Q04sSUFBSSxDQUFDcUI7QUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBTUQ7O0tBL0NRdkIsVztBQWlETUEsMEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3Bvc3RzL3Bvc3QtZGV0YWlsL3Bvc3QtY29udGVudC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gXCJyZWFjdC1tYXJrZG93blwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgUHJpc21MaWdodCBhcyBTeW50YXhIaWdobGlnaHRlciB9IGZyb20gXCJyZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJcIjtcclxuaW1wb3J0IGF0b21EYXJrIGZyb20gXCJyZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXIvZGlzdC9janMvc3R5bGVzL3ByaXNtL2F0b20tZGFya1wiO1xyXG5pbXBvcnQganMgZnJvbSBcInJlYWN0LXN5bnRheC1oaWdobGlnaHRlci9kaXN0L2Nqcy9sYW5ndWFnZXMvcHJpc20vamF2YXNjcmlwdFwiO1xyXG5pbXBvcnQgY3NzIGZyb20gXCJyZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXIvZGlzdC9janMvbGFuZ3VhZ2VzL3ByaXNtL2Nzc1wiO1xyXG5cclxuaW1wb3J0IFBvc3RIZWFkZXIgZnJvbSBcIi4vcG9zdC1oZWFkZXJcIjtcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vcG9zdC1jb250ZW50Lm1vZHVsZS5jc3NcIjtcclxuXHJcblN5bnRheEhpZ2hsaWdodGVyLnJlZ2lzdGVyTGFuZ3VhZ2UoXCJqc1wiLCBqcyk7XHJcblN5bnRheEhpZ2hsaWdodGVyLnJlZ2lzdGVyTGFuZ3VhZ2UoXCJjc3NcIiwgY3NzKTtcclxuXHJcbmZ1bmN0aW9uIFBvc3RDb250ZW50KHByb3BzKSB7XHJcbiAgY29uc3QgeyBwb3N0IH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgaW1hZ2VQYXRoID0gYC9pbWFnZXMvcG9zdHMvJHtwb3N0LnNsdWd9LyR7cG9zdC5pbWFnZX1gO1xyXG5cclxuICBjb25zb2xlLmxvZyhcImltYWdlUGF0aDogXCIsIGltYWdlUGF0aCk7XHJcbiAgY29uc3QgY3VzdG9tUmVuZGVyZXJzID0ge1xyXG4gICAgcChwYXJhZ3JhcGgpIHtcclxuICAgICAgY29uc3QgeyBub2RlIH0gPSBwYXJhZ3JhcGg7XHJcbiAgICAgIGlmIChub2RlLmNoaWxkcmVuWzBdLnRhZ05hbWUgPT09IFwiaW1nXCIpIHtcclxuICAgICAgICBjb25zdCBpbWFnZSA9IG5vZGUuY2hpbGRyZW5bMF07XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSU1HIFNSQzogXCIsIGltYWdlLnByb3BlcnRpZXMuc3JjKTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2V9PlxyXG4gICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICBzcmM9e2Ake2ltYWdlLnByb3BlcnRpZXMuc3JjfWB9XHJcbiAgICAgICAgICAgICAgYWx0PXtpbWFnZS5hbHR9XHJcbiAgICAgICAgICAgICAgd2lkdGg9ezYwMH1cclxuICAgICAgICAgICAgICBoZWlnaHQ9ezMwMH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiA8cD57cGFyYWdyYXBoLmNoaWxkcmVufTwvcD47XHJcbiAgICB9LFxyXG5cclxuICAgIGNvZGUoY29kZSkge1xyXG4gICAgICBjb25zdCB7IGNsYXNzTmFtZSwgY2hpbGRyZW4gfSA9IGNvZGU7XHJcbiAgICAgIGNvbnN0IGxhbmd1YWdlID0gY2xhc3NOYW1lLnNwbGl0KFwiLVwiKVsxXTsgLy8gY2xhc3NOYW1lIGlzIHNvbWV0aGluZyBsaWtlIGxhbmd1YWdlLWpzID0+IFdlIG5lZWQgdGhlIFwianNcIiBwYXJ0IGhlcmVcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8U3ludGF4SGlnaGxpZ2h0ZXJcclxuICAgICAgICAgIHN0eWxlPXthdG9tRGFya31cclxuICAgICAgICAgIGxhbmd1YWdlPXtsYW5ndWFnZX1cclxuICAgICAgICAgIGNoaWxkcmVuPXtjaGlsZHJlbn1cclxuICAgICAgICAvPlxyXG4gICAgICApO1xyXG4gICAgfSxcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGFydGljbGUgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxyXG4gICAgICA8UG9zdEhlYWRlciB0aXRsZT17cG9zdC50aXRsZX0gaW1hZ2U9e2ltYWdlUGF0aH0gLz5cclxuICAgICAgPFJlYWN0TWFya2Rvd24gY29tcG9uZW50cz17Y3VzdG9tUmVuZGVyZXJzfT57cG9zdC5jb250ZW50fTwvUmVhY3RNYXJrZG93bj5cclxuICAgIDwvYXJ0aWNsZT5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Q29udGVudDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/posts/post-detail/post-content.js\n");

/***/ })

})