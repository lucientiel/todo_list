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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `#todo_item_displaybox {\r\n    border-color: black;\r\n    border-style: dashed;\r\n} `, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo_list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo_list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo_list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo_list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo_list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo_list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo_list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo_list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo_list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo_list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageSections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageSections */ \"./src/pageSections.js\");\n/* harmony import */ var _todoForms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoForms */ \"./src/todoForms.js\");\n/* harmony import */ var _todoItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoItems */ \"./src/todoItems.js\");\n/* harmony import */ var _projectForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectForm */ \"./src/projectForm.js\");\n/* harmony import */ var _projectItems__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projectItems */ \"./src/projectItems.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_pageSections__WEBPACK_IMPORTED_MODULE_0__.homePageSectionSetup)();\r\n(0,_projectItems__WEBPACK_IMPORTED_MODULE_4__.projectNavListSetup)();\r\n(0,_todoForms__WEBPACK_IMPORTED_MODULE_1__.genTodoItemForm)();\r\n(0,_projectForm__WEBPACK_IMPORTED_MODULE_3__.genProjectForm)();\r\n(0,_todoItems__WEBPACK_IMPORTED_MODULE_2__.formSubmitClick)();\r\n(0,_projectItems__WEBPACK_IMPORTED_MODULE_4__.genProjectClick)();\n\n//# sourceURL=webpack://todo_list/./src/index.js?");

/***/ }),

/***/ "./src/pageSections.js":
/*!*****************************!*\
  !*** ./src/pageSections.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   homePageSectionSetup: () => (/* binding */ homePageSectionSetup)\n/* harmony export */ });\nconst sideBarSection = () => {\r\n    const contentDiv = document.getElementById('content');\r\n\r\n    const sideBarContainer = document.createElement('div');\r\n    sideBarContainer.id = 'sidebar_container';\r\n\r\n    const sideBarElem = document.createElement('div');\r\n    sideBarElem.id = 'sidebar_elem'\r\n\r\n    sideBarContainer.appendChild(sideBarElem);\r\n    contentDiv.appendChild(sideBarContainer);\r\n}\r\n\r\n\r\nconst listingSection  = () => {\r\n    const contentDiv = document.getElementById('content');\r\n\r\n    const listingContainer = document.createElement('div');\r\n    listingContainer.id = 'listing_container';\r\n\r\n    const listingHead = document.createElement('div');\r\n    listingHead.id = 'listing_head';\r\n    listingHead.innerText = 'Please select a project directory!'\r\n\r\n    const listingElem = document.createElement('div');\r\n    listingElem.id = 'listing_elem';\r\n\r\n    const listingCompleteElem = document.createElement('div');\r\n    listingCompleteElem.id = 'listing_complete_elem';\r\n\r\n    listingContainer.append(listingHead, listingElem, listingCompleteElem);\r\n    contentDiv.appendChild(listingContainer);\r\n}\r\n\r\n\r\nconst homePageSectionSetup = () => {\r\n    sideBarSection();\r\n    listingSection();\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo_list/./src/pageSections.js?");

/***/ }),

/***/ "./src/projectForm.js":
/*!****************************!*\
  !*** ./src/projectForm.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   genProjectForm: () => (/* binding */ genProjectForm)\n/* harmony export */ });\n/* harmony import */ var _todoForms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoForms */ \"./src/todoForms.js\");\n\r\n\r\nconst genProjectForm = () => {\r\n    const contentDiv = document.getElementById('sidebar_elem');\r\n\r\n    const formContainer = document.createElement('div');\r\n    formContainer.id = 'project_name_form_container';\r\n\r\n    const projectNameForm = document.createElement('form');\r\n    projectNameForm.id = 'project_name_form'\r\n\r\n\r\n    const projectNameInput = (0,_todoForms__WEBPACK_IMPORTED_MODULE_0__.genFormInput)('input', 'text', 'project_name_input', 'project_name_input');\r\n    const projectNameLabel = (0,_todoForms__WEBPACK_IMPORTED_MODULE_0__.genLabel)('project_name_input', 'Project Name');\r\n\r\n    const submitButton = document.createElement('button');\r\n    submitButton.type = 'submit';\r\n    submitButton.id = 'project_name_submit';\r\n    submitButton.setAttribute('form', 'project_name_form');\r\n    submitButton.innerText = 'Create Project';\r\n\r\n    projectNameForm.append(projectNameLabel, projectNameInput, submitButton);\r\n    formContainer.appendChild(projectNameForm);\r\n\r\n    contentDiv.appendChild(formContainer);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo_list/./src/projectForm.js?");

/***/ }),

/***/ "./src/projectItems.js":
/*!*****************************!*\
  !*** ./src/projectItems.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   genProjectClick: () => (/* binding */ genProjectClick),\n/* harmony export */   projectListingObject: () => (/* binding */ projectListingObject),\n/* harmony export */   projectNavListSetup: () => (/* binding */ projectNavListSetup)\n/* harmony export */ });\n/* harmony import */ var _todoItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoItems */ \"./src/todoItems.js\");\n\r\nconst projectListingObject = {\r\n    'project_1' : []\r\n}\r\n\r\nconst genProjectClick = () => { // create a new project directory, add it to the project listing object and call addtoProjectNavList to display on page navlist\r\n    const projectNameForm = document.getElementById('project_name_form');\r\n    projectNameForm.addEventListener('submit', function(e) {\r\n        e.preventDefault();\r\n        const formVals = new FormData(projectNameForm);\r\n        if (checkProjectNameUniqueness(formVals.get('project_name_input')) == false) {\r\n            alert('Name already used, try a different one!')\r\n        }\r\n        else {\r\n                    projectListingObject[formVals.get('project_name_input')] = [];\r\n        console.log(projectListingObject);\r\n        addtoProjectNavList(formVals.get('project_name_input'), formVals.get('project_name_input'));\r\n        }\r\n    })\r\n}\r\n\r\nconst checkProjectNameUniqueness = (projname) => {\r\n    let uniquebool = true;\r\n    for (let key in projectListingObject) {\r\n        if (projname == key) {\r\n            uniquebool = false;\r\n        }\r\n    }\r\n    return uniquebool;\r\n}\r\n\r\nconst genNavListItem = (idName, projectName) => { //gen nav list elem for project\r\n    const listItem = document.createElement('li');\r\n    listItem.id = idName;\r\n    listItem.innerText = projectName;\r\n    return listItem;\r\n}\r\n\r\nconst projectNavListSetup = () => { // initialize default project nav list with default items \r\n    const sideBar = document.getElementById('sidebar_elem');\r\n\r\n    const navList = document.createElement('ul');\r\n    navList.id = 'project_name_navlist';\r\n\r\n    //the defaults that will always be there on the nav bar\r\n    for (let key in projectListingObject) {\r\n        const projectNavItem = genNavListItem(key, key);\r\n        navList.appendChild(projectNavItem);\r\n        // genCurrDirectoryNavClick(key);\r\n        // addtoProjectNavList(key, key);\r\n    }\r\n    sideBar.append(navList);\r\n\r\n    for (let key in projectListingObject) { // only when the navlist is appended to the sidebar would the navlist become readable, when it is initialized its basically in purgatory\r\n        genCurrDirectoryNavClick(key);\r\n    }\r\n}\r\n\r\nconst addtoProjectNavList = (idName, projectName) => { // add individual submitted project directory to display on navlist\r\n    const navList = document.getElementById('project_name_navlist');\r\n\r\n    navList.append(genNavListItem(idName, projectName));\r\n    genCurrDirectoryNavClick(idName);\r\n};\r\n\r\nconst genCurrDirectoryNavClick = (projectId) => {\r\n    const currNavItem = document.getElementById(projectId);\r\n\r\n    currNavItem.addEventListener('click', () => {\r\n        // currProjectDirectory = projectId;\r\n        (0,_todoItems__WEBPACK_IMPORTED_MODULE_0__.setCurrProjectDirectoryVal)(projectId);\r\n        const listingSectHead = document.getElementById('listing_head');\r\n        listingSectHead.innerText = projectId + ' ' + `${(projectListingObject[(0,_todoItems__WEBPACK_IMPORTED_MODULE_0__.getCurrProjectDirectoryVal)()]).length}/200`;\r\n        (0,_todoItems__WEBPACK_IMPORTED_MODULE_0__.displayitemsInList)();\r\n        console.log('display all project directory and item contents',projectListingObject)\r\n    })\r\n}\r\n//projectListingObject is currently exported to todoitems.js might want to update the way it is accessed.\r\n\n\n//# sourceURL=webpack://todo_list/./src/projectItems.js?");

/***/ }),

/***/ "./src/todoForms.js":
/*!**************************!*\
  !*** ./src/todoForms.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   genFormInput: () => (/* binding */ genFormInput),\n/* harmony export */   genLabel: () => (/* binding */ genLabel),\n/* harmony export */   genTodoItemForm: () => (/* binding */ genTodoItemForm)\n/* harmony export */ });\nconst genFormInput = (tag, type, id, name) => {\r\n    const newElem = document.createElement(tag);\r\n    if (tag = 'input') {\r\n            newElem.setAttribute('type', type);\r\n    }\r\n    newElem.setAttribute('id', id);\r\n    newElem.setAttribute('name', name);\r\n    return newElem;\r\n}\r\n\r\nconst genLabel = (forValue, textValue) => {\r\n    const newLabel = document.createElement('label');\r\n    newLabel.setAttribute('for', forValue);\r\n    newLabel.innerText = textValue;\r\n    return newLabel;\r\n}\r\n\r\nconst genlineBreak = () => {\r\n    return document.createElement('br');\r\n}\r\n\r\nconst genTodoItemForm = () => {\r\n    const contentDiv = document.getElementById('sidebar_elem');\r\n\r\n    const formContainer = document.createElement('div');\r\n    formContainer.id = 'todo_form_container';\r\n\r\n    const createItemForm = document.createElement('form');\r\n    createItemForm.id = 'todo_item_form'\r\n\r\n    const titleInput = genFormInput('input', 'text', 'todo_item_title', 'todo_item_title');\r\n    titleInput.required = true;\r\n    const descInput = genFormInput('textarea', '', 'todo_item_desc', 'todo_item_desc');\r\n    descInput.required = true;\r\n    const dueDateInput = genFormInput('input', 'date', 'todo_item_duedate', 'todo_item_duedate');\r\n    dueDateInput.required = true;\r\n    const priorityInput_low = genFormInput('input', 'radio', 'todo_item_priority', 'todo_item_priority');\r\n    priorityInput_low.setAttribute('value', 'Low');\r\n    priorityInput_low.required = true;\r\n    const priorityInput_med = genFormInput('input', 'radio', 'todo_item_priority', 'todo_item_priority');\r\n    priorityInput_med.setAttribute('value', 'Medium');\r\n    const priorityInput_high = genFormInput('input', 'radio', 'todo_item_priority', 'todo_item_priority');\r\n    priorityInput_high.setAttribute('value', 'High');\r\n\r\n    const titleLabel = genLabel('todo_item_title', 'Title');\r\n    const descLabel =  genLabel('todo_item_desc', 'Description');\r\n    const dueDateLabel =  genLabel('todo_item_duedate', 'Due Date');\r\n    const priorityLabel =  genLabel('todo_item_priority', 'Priority');\r\n    const priority_low_label =  genLabel('todo_item_title', 'Low');\r\n    const priority_med_label=  genLabel('todo_item_title', 'Medium');\r\n    const priority_high_label =  genLabel('todo_item_title', 'High');\r\n\r\n    const submitButton = document.createElement('button');\r\n    submitButton.type = 'submit';\r\n    submitButton.id = 'todo_item_submit';\r\n    submitButton.setAttribute('form', 'todo_item_form');\r\n    submitButton.innerText = 'Create Item';\r\n\r\n\r\n    createItemForm.append(\r\n        titleLabel, titleInput,\r\n        genlineBreak(),\r\n        descLabel, descInput,\r\n        genlineBreak(),\r\n        dueDateLabel, dueDateInput,\r\n        genlineBreak(),\r\n        priorityLabel,\r\n        genlineBreak(),\r\n        priorityInput_low, priority_low_label,\r\n        genlineBreak(),\r\n        priorityInput_med, priority_med_label,\r\n        genlineBreak(),\r\n        priorityInput_high, priority_high_label,\r\n        genlineBreak(),\r\n        submitButton\r\n    );\r\n\r\n    formContainer.append(createItemForm);\r\n\r\n    contentDiv.append(formContainer);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo_list/./src/todoForms.js?");

/***/ }),

/***/ "./src/todoItems.js":
/*!**************************!*\
  !*** ./src/todoItems.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   currProjectDirectory: () => (/* binding */ currProjectDirectory),\n/* harmony export */   displayitemsInList: () => (/* binding */ displayitemsInList),\n/* harmony export */   formSubmitClick: () => (/* binding */ formSubmitClick),\n/* harmony export */   getCurrProjectDirectoryVal: () => (/* binding */ getCurrProjectDirectoryVal),\n/* harmony export */   setCurrProjectDirectoryVal: () => (/* binding */ setCurrProjectDirectoryVal)\n/* harmony export */ });\n/* harmony import */ var _projectItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectItems */ \"./src/projectItems.js\");\n\r\n\r\nlet currProjectDirectory;\r\n\r\nconst setCurrProjectDirectoryVal = (someValue) => {\r\n    currProjectDirectory = someValue;\r\n}\r\n\r\nconst getCurrProjectDirectoryVal = () => currProjectDirectory;\r\n\r\nconst genUniqueId = () => {\r\n    let genNum = Math.floor(Math.random() * 200);\r\n    const existingID = _projectItems__WEBPACK_IMPORTED_MODULE_0__.projectListingObject[currProjectDirectory].map(item => item.getID());\r\n    while (existingID.includes(genNum)) {\r\n        genNum = Math.floor(Math.random() * 200);\r\n    }\r\n    return genNum;\r\n}\r\n\r\nconst todoItem = (title, description, duedate, priority) => {\r\n    let _title = title;\r\n    let _description = description;\r\n    let _dueDate = duedate;\r\n    let _priority = priority;\r\n    let _id = genUniqueId();\r\n    let _complete = false;\r\n\r\n    const getTitle = () => _title;\r\n    const getDesc = () => _description;\r\n    const getDueDate = () => _dueDate;\r\n    const getPriority = () => _priority;\r\n    const getID = () => _id;\r\n    const getComplete = () => _complete;\r\n    const setComplete = () => _complete = true;\r\n\r\n    return { getTitle, getDesc, getDueDate, getPriority, getID, getComplete, setComplete}\r\n}\r\n\r\nconst insertItemToList = (todo_item) => {\r\n    _projectItems__WEBPACK_IMPORTED_MODULE_0__.projectListingObject[currProjectDirectory].push(todo_item);\r\n}\r\n\r\n\r\n// DOM FUNCTIONS HERE -------------------------------------- //\r\n// when the todo item form is submitted, a todo item will be generated and pushed to the list of a project directory\r\nconst formSubmitClick = () => {\r\n    const todoItemForm = document.getElementById('todo_item_form');\r\n\r\n    todoItemForm.addEventListener('submit', function(e) {\r\n        e.preventDefault();\r\n        if (currProjectDirectory == undefined) {\r\n            alert('Please select a project!')\r\n        }\r\n        else {\r\n            const formVals = new FormData(todoItemForm);\r\n            console.log(formVals);\r\n            console.log(\r\n                formVals.get('todo_item_title'),\r\n                formVals.get('todo_item_desc'),\r\n                formVals.get('todo_item_duedate'),\r\n                formVals.get('todo_item_priority')\r\n            );\r\n            const newTodoItem = todoItem(\r\n                formVals.get('todo_item_title'),\r\n                formVals.get('todo_item_desc'),\r\n                formVals.get('todo_item_duedate'),\r\n                formVals.get('todo_item_priority')\r\n            );\r\n            console.log(newTodoItem.getID())\r\n            insertItemToList(newTodoItem);\r\n            console.log(_projectItems__WEBPACK_IMPORTED_MODULE_0__.projectListingObject[currProjectDirectory]);\r\n            displayitemsInList();\r\n        }\r\n\r\n    })\r\n    \r\n}\r\n// This function takes a todo object and adds its dom to the page\r\nconst genitemDisplay = (todo_item) => {\r\n    const todoitem_displayBox = document.createElement('div');\r\n    todoitem_displayBox.id = 'todo_item_displaybox'\r\n\r\n    const displayTitle = document.createElement('div');\r\n    displayTitle.className = 'display_title';\r\n    displayTitle.innerText = todo_item.getTitle();\r\n\r\n    const displayDate = document.createElement('div');\r\n    displayDate.className = 'display_date';\r\n    displayDate.innerText = `Due on ${todo_item.getDueDate()}`;\r\n\r\n    const displayPriority = document.createElement('div');\r\n    displayPriority.className = 'display_priority';\r\n    displayPriority.innerText = `Priority: ${todo_item.getPriority()}`;\r\n\r\n    const displayDesc = document.createElement('p');\r\n    displayDesc.innerText = todo_item.getDesc();\r\n\r\n    const displayDelete = document.createElement('button');\r\n    displayDelete.className = 'display_delete';\r\n    displayDelete.id = `delete_${todo_item.getTitle()}_${todo_item.getID()}`;\r\n    displayDelete.value = `${todo_item.getIndex}`;\r\n    displayDelete.innerText = 'Delete Todo';\r\n\r\n    const displayEdit = document.createElement('button');\r\n    displayEdit.id = `edit_${todo_item.getTitle()}_${todo_item.getID()}`;\r\n    displayEdit.value = `${todo_item.getIndex}`;\r\n    displayEdit.innerText = 'Edit Todo'\r\n\r\n    const displayComplete = document.createElement('button');\r\n    displayComplete.id = `complete_${todo_item.getTitle()}_${todo_item.getID()}`;\r\n    displayComplete.value = `${todo_item.getIndex}`;\r\n    displayComplete.innerText = 'Complete Todo'\r\n\r\n    todoitem_displayBox.append(\r\n        displayTitle,\r\n        displayDate,\r\n        displayPriority,\r\n        displayDesc,\r\n        displayDelete,\r\n        displayEdit,\r\n        displayComplete\r\n    )\r\n\r\n    return todoitem_displayBox;\r\n}\r\n\r\nconst genCompletedItemDisplay = (todo_item) => {\r\n    const todoitem_displayBox = document.createElement('div');\r\n    todoitem_displayBox.id = 'todo_item_displaybox'\r\n\r\n    const displayTitle = document.createElement('div');\r\n    displayTitle.className = 'display_title';\r\n    displayTitle.innerText = todo_item.getTitle();\r\n\r\n    const displayDate = document.createElement('div');\r\n    displayDate.className = 'display_date';\r\n    displayDate.innerText = `Due on ${todo_item.getDueDate()}`;\r\n\r\n    const displayPriority = document.createElement('div');\r\n    displayPriority.className = 'display_priority';\r\n    displayPriority.innerText = `Priority: ${todo_item.getPriority()}`;\r\n\r\n    const displayDesc = document.createElement('p');\r\n    displayDesc.innerText = todo_item.getDesc();\r\n\r\n    const displayDelete = document.createElement('button');\r\n    displayDelete.className = 'display_delete';\r\n    displayDelete.id = `delete_${todo_item.getTitle()}_${todo_item.getID()}`;\r\n    displayDelete.value = `${todo_item.getIndex}`;\r\n    displayDelete.innerText = 'Delete Todo';\r\n\r\n    todoitem_displayBox.append(\r\n        displayTitle,\r\n        displayDate,\r\n        displayPriority,\r\n        displayDesc,\r\n        displayDelete,\r\n    )\r\n\r\n    return todoitem_displayBox;\r\n}\r\nconst todoDeleteClick = (todo_item) => {\r\n    const todoItemDeleteButton = document.getElementById(`delete_${todo_item.getTitle()}_${todo_item.getID()}`);\r\n\r\n    todoItemDeleteButton.addEventListener('click', () => {\r\n        todoItemDeleteButton.parentElement.remove();\r\n        _projectItems__WEBPACK_IMPORTED_MODULE_0__.projectListingObject[currProjectDirectory] = (_projectItems__WEBPACK_IMPORTED_MODULE_0__.projectListingObject[currProjectDirectory]).filter(item => item.getID() != todo_item.getID());\r\n        console.log(`${todo_item} is deleted!`, _projectItems__WEBPACK_IMPORTED_MODULE_0__.projectListingObject[currProjectDirectory]);\r\n\r\n        const listingSectHead = document.getElementById('listing_head');\r\n        listingSectHead.innerText =  currProjectDirectory + ' ' + `${(_projectItems__WEBPACK_IMPORTED_MODULE_0__.projectListingObject[currProjectDirectory]).length}/200`; \r\n        console.log('TOTAL LENGTH OF DIRECTORY AFTER DELETE: ',  _projectItems__WEBPACK_IMPORTED_MODULE_0__.projectListingObject[currProjectDirectory].length);\r\n    })\r\n}\r\n\r\nconst todoEditClick = (todo_item) => {\r\n    const todoItemEditButton = document.getElementById(`edit_${todo_item.getTitle()}_${todo_item.getID()}`);\r\n\r\n    todoItemEditButton.addEventListener('click', () => {\r\n        \r\n    })\r\n} \r\n\r\nconst todoCompleteClick = (todo_item) => {\r\n    const todoItemCompleteButton = document.getElementById(`complete_${todo_item.getTitle()}_${todo_item.getID()}`);\r\n    todoItemCompleteButton.addEventListener('click', () => {\r\n        todoItemCompleteButton.parentElement.remove();\r\n        todo_item.setComplete();\r\n\r\n        const completedList = document.getElementById('listing_complete_elem');\r\n\r\n        const completedtodoitem_displayBox = genCompletedItemDisplay(todo_item);\r\n\r\n        completedList.appendChild(completedtodoitem_displayBox);\r\n    })\r\n}\r\n// wipes all the items on the page, used when entering a new project directory in order to clear the page of the todo items from the previous directory\r\nconst clearAllItemInDisplay = () => {\r\n    const contentdiv = document.getElementById('listing_elem');\r\n    const contentdivcomplete = document.getElementById('listing_complete_elem');\r\n    while (contentdiv.firstChild) {\r\n        contentdiv.removeChild(contentdiv.lastChild);\r\n    }\r\n    while (contentdivcomplete.firstChild) {\r\n        contentdivcomplete.removeChild(contentdivcomplete.lastChild);\r\n    }\r\n}\r\n\r\n// calls clearallitemindisplay to wipe the page, then add all the todo item objects related to the current project directory\r\nconst displayitemsInList = () => {\r\n    const contentdiv = document.getElementById('listing_elem');\r\n    const contentdivcomplete = document.getElementById('listing_complete_elem');\r\n    clearAllItemInDisplay();\r\n\r\n    const listingSectHead = document.getElementById('listing_head');\r\n    listingSectHead.innerText =  getCurrProjectDirectoryVal() + ' ' + `${(_projectItems__WEBPACK_IMPORTED_MODULE_0__.projectListingObject[getCurrProjectDirectoryVal()]).length}/200`;\r\n\r\n    for (let i = 0; i < (_projectItems__WEBPACK_IMPORTED_MODULE_0__.projectListingObject[currProjectDirectory]).length; i++) {\r\n        const currTodoItem = (_projectItems__WEBPACK_IMPORTED_MODULE_0__.projectListingObject[currProjectDirectory])[i]\r\n        if (currTodoItem.getComplete() == false) {\r\n            contentdiv.appendChild(genitemDisplay(currTodoItem));\r\n            todoCompleteClick(currTodoItem);\r\n        }\r\n        else {\r\n            contentdivcomplete.appendChild(genCompletedItemDisplay(currTodoItem));\r\n        }\r\n        todoDeleteClick(currTodoItem);\r\n    }\r\n    console.log('display items in current project list/directory: ', (_projectItems__WEBPACK_IMPORTED_MODULE_0__.projectListingObject[currProjectDirectory]));\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo_list/./src/todoItems.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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