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

/***/ "./src/forms.js":
/*!**********************!*\
  !*** ./src/forms.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   genTodoItemForm: () => (/* binding */ genTodoItemForm)\n/* harmony export */ });\nconst genFormInput = (tag, type, id, name) => {\r\n    const newElem = document.createElement(tag);\r\n    if (tag = 'input') {\r\n            newElem.setAttribute('type', type);\r\n    }\r\n    newElem.setAttribute('id', id);\r\n    newElem.setAttribute('name', name);\r\n    return newElem;\r\n}\r\n\r\nconst genLabel = (forValue, textValue) => {\r\n    const newLabel = document.createElement('label');\r\n    newLabel.setAttribute('for', forValue);\r\n    newLabel.innerText = textValue;\r\n    return newLabel;\r\n}\r\n\r\nconst genlineBreak = () => {\r\n    return document.createElement('br');\r\n}\r\n\r\nconst genTodoItemForm = () => {\r\n    const contentDiv = document.getElementById('content');\r\n\r\n    const formContainer = document.createElement('div');\r\n    formContainer.id = 'form_container';\r\n\r\n    const createItemForm = document.createElement('form');\r\n    createItemForm.id = 'todo_item_form'\r\n\r\n    const titleInput = genFormInput('input', 'text', 'todo_item_title', 'todo_item_title');\r\n    const descInput = genFormInput('textarea', '', 'todo_item_desc', 'todo_item_desc');\r\n    const dueDateInput = genFormInput('input', 'date', 'todo_item_duedate', 'todo_item_duedate');\r\n    const priorityInput_low = genFormInput('input', 'radio', 'todo_item_priority', 'todo_item_priority');\r\n    priorityInput_low.setAttribute('value', 'Low');\r\n    const priorityInput_med = genFormInput('input', 'radio', 'todo_item_priority', 'todo_item_priority');\r\n    priorityInput_med.setAttribute('value', 'Medium');\r\n    const priorityInput_high = genFormInput('input', 'radio', 'todo_item_priority', 'todo_item_priority');\r\n    priorityInput_high.setAttribute('value', 'High');\r\n\r\n    const titleLabel = genLabel('todo_item_title', 'Title');\r\n    const descLabel =  genLabel('todo_item_desc', 'Description');\r\n    const dueDateLabel =  genLabel('todo_item_duedate', 'Due Date');\r\n    const priorityLabel =  genLabel('todo_item_priority', 'Priority');\r\n    const priority_low_label =  genLabel('todo_item_title', 'Low');\r\n    const priority_med_label=  genLabel('todo_item_title', 'Medium');\r\n    const priority_high_label =  genLabel('todo_item_title', 'High');\r\n\r\n    const submitButton = document.createElement('button');\r\n    submitButton.type = 'submit';\r\n    submitButton.id = 'todo_item_submit';\r\n    submitButton.setAttribute('form', 'todo_item_form');\r\n    submitButton.innerText = 'Create Item';\r\n\r\n\r\n    createItemForm.append(\r\n        titleLabel, titleInput,\r\n        genlineBreak(),\r\n        descLabel, descInput,\r\n        genlineBreak(),\r\n        dueDateLabel, dueDateInput,\r\n        genlineBreak(),\r\n        priorityLabel,\r\n        genlineBreak(),\r\n        priorityInput_low, priority_low_label,\r\n        genlineBreak(),\r\n        priorityInput_med, priority_med_label,\r\n        genlineBreak(),\r\n        priorityInput_high, priority_high_label,\r\n        genlineBreak(),\r\n        submitButton\r\n    );\r\n\r\n    formContainer.append(createItemForm);\r\n\r\n    contentDiv.append(formContainer);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo_list/./src/forms.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forms */ \"./src/forms.js\");\n/* harmony import */ var _todoItems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoItems */ \"./src/todoItems.js\");\n\r\n\r\n\r\n(0,_forms__WEBPACK_IMPORTED_MODULE_0__.genTodoItemForm)();\r\n(0,_todoItems__WEBPACK_IMPORTED_MODULE_1__.formSubmitClick)();\n\n//# sourceURL=webpack://todo_list/./src/index.js?");

/***/ }),

/***/ "./src/todoItems.js":
/*!**************************!*\
  !*** ./src/todoItems.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   formSubmitClick: () => (/* binding */ formSubmitClick)\n/* harmony export */ });\nlet toDoList = []\r\n\r\nconst todoItem = (title, description, duedate, priority) => {\r\n    let _title = title;\r\n    let _description = description;\r\n    let _dueDate = duedate;\r\n    let _priority = priority;\r\n\r\n    const getTitle = () => _title;\r\n    const getDesc = () => _description;\r\n    const getDueDate = () => _dueDate;\r\n    const getPriority = () => _priority;\r\n\r\n    return { getTitle, getDesc, getDueDate, getPriority}\r\n}\r\n\r\nconst insertItemToList = (todo_item) => {\r\n    toDoList.push(todo_item);\r\n}\r\n\r\n\r\n// DOM FUNCTIONS HERE -------------------------------------- //\r\n\r\nconst formSubmitClick = () => {\r\n    const todoItemForm = document.getElementById('todo_item_form');\r\n\r\n    todoItemForm.addEventListener('submit', function(e) {\r\n        e.preventDefault();\r\n        const formVals = new FormData(todoItemForm);\r\n        console.log(formVals);\r\n        console.log(\r\n            formVals.get('todo_item_title'),\r\n            formVals.get('todo_item_desc'),\r\n            formVals.get('todo_item_duedate'),\r\n            formVals.get('todo_item_priority')\r\n        );\r\n        const newTodoItem = todoItem(\r\n            formVals.get('todo_item_title'),\r\n            formVals.get('todo_item_desc'),\r\n            formVals.get('todo_item_duedate'),\r\n            formVals.get('todo_item_priority')\r\n        );\r\n        toDoList.push(newTodoItem);\r\n        console.log(toDoList);\r\n        displayitemsInList();\r\n    })\r\n    \r\n}\r\n\r\nconst genitemDisplay = (todo_item) => {\r\n    const todoitem_displayBox = document.createElement('div');\r\n\r\n    const displayTitle = document.createElement('div');\r\n    displayTitle.innerText = todo_item.getTitle();\r\n\r\n    const displayDate = document.createElement('div');\r\n    displayDate.innerText = todo_item.getDueDate();\r\n\r\n    const displayPriority = document.createElement('div');\r\n    displayPriority.innerText = todo_item.getPriority();\r\n\r\n    const displayDesc = document.createElement('p');\r\n    displayDesc.innerText = todo_item.getDesc();\r\n\r\n    todoitem_displayBox.append(\r\n        displayTitle,\r\n        displayDate,\r\n        displayPriority,\r\n        displayDesc\r\n    )\r\n\r\n    return todoitem_displayBox;\r\n}\r\nconst displayitemsInList = () => {\r\n    const contentdiv = document.getElementById('content');\r\n\r\n    for (let i = 0; i < toDoList.length; i++) {\r\n        contentdiv.appendChild(genitemDisplay(toDoList[i]));\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo_list/./src/todoItems.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;