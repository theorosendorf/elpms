(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/Partials/CornerMenu/CornerOptionArchive.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/Partials/CornerMenu/CornerOptionArchive.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: [\"model\"],\n  components: {\n    CornerOptionItem: function CornerOptionItem() {\n      return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/Shared/Partials/CornerMenu/CornerOptionItem */ \"./resources/js/Shared/Partials/CornerMenu/CornerOptionItem.vue\"));\n    }\n  },\n  created: function created() {\n    console.log(this.$page.account.id);\n  },\n  methods: {\n    archive: function archive() {\n      this.$inertia.post(route(\"archive.store\", {\n        account: this.$page.account.id,\n        project: this.$page.project.id\n      }), {\n        model: this.model.modelName,\n        modelId: this.model.id\n      }, {\n        preserveState: false\n      });\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL1NoYXJlZC9QYXJ0aWFscy9Db3JuZXJNZW51L0Nvcm5lck9wdGlvbkFyY2hpdmUudnVlP2FjYTgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQWFBO0FBQ0Esa0JBREE7QUFFQTtBQUNBO0FBQUEsYUFDQSw0TEFEQTtBQUFBO0FBREEsR0FGQTtBQU1BLFNBTkEscUJBTUE7QUFDQTtBQUNBLEdBUkE7QUFTQTtBQUNBLFdBREEscUJBQ0E7QUFDQSx5QkFDQTtBQUNBLHNDQURBO0FBRUE7QUFGQSxRQURBLEVBS0E7QUFDQSxtQ0FEQTtBQUVBO0FBRkEsT0FMQSxFQVNBO0FBQ0E7QUFEQSxPQVRBO0FBYUE7QUFmQTtBQVRBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3Jlc291cmNlcy9qcy9TaGFyZWQvUGFydGlhbHMvQ29ybmVyTWVudS9Db3JuZXJPcHRpb25BcmNoaXZlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8Y29ybmVyLW9wdGlvbi1pdGVtXHJcbiAgICAgICAgQGNsaWNrLm5hdGl2ZS5wcmV2ZW50PVwiYXJjaGl2ZVwiXHJcbiAgICAgICAgOml0ZW09XCJ7XHJcbiAgICAgICAgICAgIGxpbms6ICcnLFxyXG4gICAgICAgICAgICBpY29uUGF0aDpcclxuICAgICAgICAgICAgICAgICdNMyAzSDIxVjdIM1YzTTQgMjFWOEgyMFYyMUg0TTE0IDE0VjExSDEwVjE0SDdMMTIgMTlMMTcgMTRIMTRaJyxcclxuICAgICAgICAgICAgdGV4dDogbW9kZWwuYXJjaGl2ZWQgPyAnVW5hcmNoaXZlJyA6ICdBcmNoaXZlJ1xyXG4gICAgICAgIH1cIlxyXG4gICAgLz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHByb3BzOiBbXCJtb2RlbFwiXSxcclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICBDb3JuZXJPcHRpb25JdGVtOiAoKSA9PlxyXG4gICAgICAgICAgICBpbXBvcnQoXCJAL1NoYXJlZC9QYXJ0aWFscy9Db3JuZXJNZW51L0Nvcm5lck9wdGlvbkl0ZW1cIilcclxuICAgIH0sXHJcbiAgICBjcmVhdGVkKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuJHBhZ2UuYWNjb3VudC5pZCk7XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIGFyY2hpdmUoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJGluZXJ0aWEucG9zdChcclxuICAgICAgICAgICAgICAgIHJvdXRlKFwiYXJjaGl2ZS5zdG9yZVwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudDogdGhpcy4kcGFnZS5hY2NvdW50LmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3Q6IHRoaXMuJHBhZ2UucHJvamVjdC5pZFxyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHRoaXMubW9kZWwubW9kZWxOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsSWQ6IHRoaXMubW9kZWwuaWRcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VydmVTdGF0ZTogZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPjwvc3R5bGU+XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/Partials/CornerMenu/CornerOptionArchive.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/Partials/CornerMenu/CornerOptionArchive.vue?vue&type=template&id=4c9949ee&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/Partials/CornerMenu/CornerOptionArchive.vue?vue&type=template&id=4c9949ee& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"corner-option-item\", {\n    attrs: {\n      item: {\n        link: \"\",\n        iconPath:\n          \"M3 3H21V7H3V3M4 21V8H20V21H4M14 14V11H10V14H7L12 19L17 14H14Z\",\n        text: _vm.model.archived ? \"Unarchive\" : \"Archive\"\n      }\n    },\n    nativeOn: {\n      click: function($event) {\n        $event.preventDefault()\n        return _vm.archive($event)\n      }\n    }\n  })\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvU2hhcmVkL1BhcnRpYWxzL0Nvcm5lck1lbnUvQ29ybmVyT3B0aW9uQXJjaGl2ZS52dWU/Y2E3MyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8hLi9yZXNvdXJjZXMvanMvU2hhcmVkL1BhcnRpYWxzL0Nvcm5lck1lbnUvQ29ybmVyT3B0aW9uQXJjaGl2ZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGM5OTQ5ZWUmLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImNvcm5lci1vcHRpb24taXRlbVwiLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIGl0ZW06IHtcbiAgICAgICAgbGluazogXCJcIixcbiAgICAgICAgaWNvblBhdGg6XG4gICAgICAgICAgXCJNMyAzSDIxVjdIM1YzTTQgMjFWOEgyMFYyMUg0TTE0IDE0VjExSDEwVjE0SDdMMTIgMTlMMTcgMTRIMTRaXCIsXG4gICAgICAgIHRleHQ6IF92bS5tb2RlbC5hcmNoaXZlZCA/IFwiVW5hcmNoaXZlXCIgOiBcIkFyY2hpdmVcIlxuICAgICAgfVxuICAgIH0sXG4gICAgbmF0aXZlT246IHtcbiAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgcmV0dXJuIF92bS5hcmNoaXZlKCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/Partials/CornerMenu/CornerOptionArchive.vue?vue&type=template&id=4c9949ee&\n");

/***/ }),

/***/ "./resources/js/Shared/Partials/CornerMenu/CornerOptionArchive.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/Shared/Partials/CornerMenu/CornerOptionArchive.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _CornerOptionArchive_vue_vue_type_template_id_4c9949ee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CornerOptionArchive.vue?vue&type=template&id=4c9949ee& */ \"./resources/js/Shared/Partials/CornerMenu/CornerOptionArchive.vue?vue&type=template&id=4c9949ee&\");\n/* harmony import */ var _CornerOptionArchive_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CornerOptionArchive.vue?vue&type=script&lang=js& */ \"./resources/js/Shared/Partials/CornerMenu/CornerOptionArchive.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _CornerOptionArchive_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _CornerOptionArchive_vue_vue_type_template_id_4c9949ee___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _CornerOptionArchive_vue_vue_type_template_id_4c9949ee___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"resources/js/Shared/Partials/CornerMenu/CornerOptionArchive.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvU2hhcmVkL1BhcnRpYWxzL0Nvcm5lck1lbnUvQ29ybmVyT3B0aW9uQXJjaGl2ZS52dWU/ODYwYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFrRztBQUMzQjtBQUNMOzs7QUFHbEU7QUFDbUc7QUFDbkcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUseUZBQU07QUFDUixFQUFFLDhGQUFNO0FBQ1IsRUFBRSx1R0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRiIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy9TaGFyZWQvUGFydGlhbHMvQ29ybmVyTWVudS9Db3JuZXJPcHRpb25BcmNoaXZlLnZ1ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQ29ybmVyT3B0aW9uQXJjaGl2ZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGM5OTQ5ZWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQ29ybmVyT3B0aW9uQXJjaGl2ZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0Nvcm5lck9wdGlvbkFyY2hpdmUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFx3YW1wXFxcXHd3d1xcXFxsYXJhdmVsXFxcXHBtc1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc0Yzk5NDllZScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0Yzk5NDllZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0Yzk5NDllZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQ29ybmVyT3B0aW9uQXJjaGl2ZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGM5OTQ5ZWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNGM5OTQ5ZWUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9TaGFyZWQvUGFydGlhbHMvQ29ybmVyTWVudS9Db3JuZXJPcHRpb25BcmNoaXZlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/Shared/Partials/CornerMenu/CornerOptionArchive.vue\n");

/***/ }),

/***/ "./resources/js/Shared/Partials/CornerMenu/CornerOptionArchive.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/Shared/Partials/CornerMenu/CornerOptionArchive.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CornerOptionArchive_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CornerOptionArchive.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/Partials/CornerMenu/CornerOptionArchive.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CornerOptionArchive_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvU2hhcmVkL1BhcnRpYWxzL0Nvcm5lck1lbnUvQ29ybmVyT3B0aW9uQXJjaGl2ZS52dWU/ZDExNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUEsd0NBQStNLENBQWdCLCtQQUFHLEVBQUMiLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvU2hhcmVkL1BhcnRpYWxzL0Nvcm5lck1lbnUvQ29ybmVyT3B0aW9uQXJjaGl2ZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Db3JuZXJPcHRpb25BcmNoaXZlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Db3JuZXJPcHRpb25BcmNoaXZlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/Shared/Partials/CornerMenu/CornerOptionArchive.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./resources/js/Shared/Partials/CornerMenu/CornerOptionArchive.vue?vue&type=template&id=4c9949ee&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/Shared/Partials/CornerMenu/CornerOptionArchive.vue?vue&type=template&id=4c9949ee& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CornerOptionArchive_vue_vue_type_template_id_4c9949ee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CornerOptionArchive.vue?vue&type=template&id=4c9949ee& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/Partials/CornerMenu/CornerOptionArchive.vue?vue&type=template&id=4c9949ee&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CornerOptionArchive_vue_vue_type_template_id_4c9949ee___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CornerOptionArchive_vue_vue_type_template_id_4c9949ee___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvU2hhcmVkL1BhcnRpYWxzL0Nvcm5lck1lbnUvQ29ybmVyT3B0aW9uQXJjaGl2ZS52dWU/MmE1NCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvU2hhcmVkL1BhcnRpYWxzL0Nvcm5lck1lbnUvQ29ybmVyT3B0aW9uQXJjaGl2ZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGM5OTQ5ZWUmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Nvcm5lck9wdGlvbkFyY2hpdmUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRjOTk0OWVlJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/Shared/Partials/CornerMenu/CornerOptionArchive.vue?vue&type=template&id=4c9949ee&\n");

/***/ })

}]);