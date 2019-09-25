/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 1);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ibG9jay9ibG9jay5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\n/**\n * BLOCK: rhdwp-reader-alerts\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n\n//  Import CSS.\n\n\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n\nvar _wp$components = wp.components,\n    TextControl = _wp$components.TextControl,\n    CheckboxControl = _wp$components.CheckboxControl,\n    DateTimePicker = _wp$components.DateTimePicker;\nvar __experimentalGetSettings = wp.date.__experimentalGetSettings;\n\n// To know if the current timezone is a 12 hour time with look for an \"a\" in the time format.\n// We also make sure this a is not escaped by a \"/\".\n\nvar dateTimeSettings = __experimentalGetSettings();\nvar is12HourTime = /a(?!\\\\)/i.test(dateTimeSettings.formats.time.toLowerCase() // Test only the lower case a\n.replace(/\\\\\\\\/g, '') // Replace \"//\" with empty strings\n.split('').reverse().join('') // Reverse the string and test for \"a\" not followed by a slash\n);\n\n/**\n * Register: aa Gutenberg Block.\n *\n * Registers a new block provided a unique name and an object defining its\n * behavior. Once registered, the block is made editor as an option to any\n * editor interface where blocks are implemented.\n *\n * @link https://wordpress.org/gutenberg/handbook/block-api/\n * @param  {string}   name     Block name.\n * @param  {Object}   settings Block settings.\n * @return {?WPBlock}          The block, if it has been successfully\n *                             registered; otherwise `undefined`.\n */\nregisterBlockType('rhdwp/reader-alerts-link-meta-block', {\n  title: __('Reader Alert Link'),\n  icon: 'admin-links',\n  category: 'rhdwp',\n\n  attributes: {\n    url: {\n      type: 'string',\n      source: 'meta',\n      meta: 'rhdwp_alert_link_url'\n    },\n    openNewTab: {\n      type: 'boolean',\n      source: 'meta',\n      meta: 'rhdwp_alert_link_url_new_tab'\n    },\n    hasExpiration: {\n      type: 'boolean',\n      source: 'meta',\n      meta: 'rhdwp_alert_has_expiration'\n    },\n    expireDateTime: {\n      type: 'string',\n      source: 'meta',\n      meta: 'rhdwp_alert_expiration_date'\n    }\n  },\n\n  /**\n   * The edit function describes the structure of your block in the context of the editor.\n   * This represents what the editor will render when the block is used.\n   *\n   * The \"edit\" property must be a valid function.\n   *\n   * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n   */\n  edit: function edit(props) {\n    var _props$attributes = props.attributes,\n        url = _props$attributes.url,\n        openNewTab = _props$attributes.openNewTab,\n        hasExpiration = _props$attributes.hasExpiration,\n        expireDateTime = _props$attributes.expireDateTime,\n        className = props.className,\n        setAttributes = props.setAttributes;\n\n\n    return wp.element.createElement(\n      'div',\n      { className: className },\n      wp.element.createElement(\n        'div',\n        { className: 'reader-options' },\n        wp.element.createElement(\n          'h4',\n          null,\n          'Alert Options'\n        ),\n        wp.element.createElement(TextControl, {\n          label: __('Notification Link', 'rhdwp'),\n          value: url,\n          onChange: function onChange(url) {\n            return setAttributes({ url: url });\n          }\n        }),\n        wp.element.createElement(CheckboxControl, {\n          label: __('Open this link in a new tab (not recommended for internal site links).', 'rhdwp'),\n          checked: openNewTab,\n          onChange: function onChange(openNewTab) {\n            return setAttributes({ openNewTab: openNewTab });\n          }\n        }),\n        wp.element.createElement(CheckboxControl, {\n          label: __('Expire this post at a specific date/time', 'rhdwp'),\n          checked: hasExpiration,\n          onChange: function onChange(hasExpiration) {\n            return setAttributes({ hasExpiration: hasExpiration });\n          },\n          is12Hour: is12HourTime\n        }),\n        hasExpiration ? wp.element.createElement(\n          'div',\n          { className: 'expire-alert-control' },\n          wp.element.createElement(\n            'p',\n            null,\n            'Expiration:'\n          ),\n          wp.element.createElement(DateTimePicker, {\n            currentDate: expireDateTime,\n            onChange: function onChange(expireDateTime) {\n              return setAttributes({ expireDateTime: expireDateTime });\n            },\n            is12Hour: is12HourTime\n          })\n        ) : ''\n      )\n    );\n  },\n\n  /**\n   * No information saved to the block\n   * Data is saved to post meta via attributes\n   */\n  save: function save() {\n    return null;\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQkxPQ0s6IHJoZHdwLXJlYWRlci1hbGVydHNcbiAqXG4gKiBSZWdpc3RlcmluZyBhIGJhc2ljIGJsb2NrIHdpdGggR3V0ZW5iZXJnLlxuICogU2ltcGxlIGJsb2NrLCByZW5kZXJzIGFuZCBzYXZlcyB0aGUgc2FtZSBjb250ZW50IHdpdGhvdXQgYW55IGludGVyYWN0aXZpdHkuXG4gKi9cblxuLy8gIEltcG9ydCBDU1MuXG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgJy4vZWRpdG9yLnNjc3MnO1xuXG52YXIgX18gPSB3cC5pMThuLl9fOyAvLyBJbXBvcnQgX18oKSBmcm9tIHdwLmkxOG5cblxudmFyIHJlZ2lzdGVyQmxvY2tUeXBlID0gd3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlOyAvLyBJbXBvcnQgcmVnaXN0ZXJCbG9ja1R5cGUoKSBmcm9tIHdwLmJsb2Nrc1xuXG52YXIgX3dwJGNvbXBvbmVudHMgPSB3cC5jb21wb25lbnRzLFxuICAgIFRleHRDb250cm9sID0gX3dwJGNvbXBvbmVudHMuVGV4dENvbnRyb2wsXG4gICAgQ2hlY2tib3hDb250cm9sID0gX3dwJGNvbXBvbmVudHMuQ2hlY2tib3hDb250cm9sLFxuICAgIERhdGVUaW1lUGlja2VyID0gX3dwJGNvbXBvbmVudHMuRGF0ZVRpbWVQaWNrZXI7XG52YXIgX19leHBlcmltZW50YWxHZXRTZXR0aW5ncyA9IHdwLmRhdGUuX19leHBlcmltZW50YWxHZXRTZXR0aW5ncztcblxuLy8gVG8ga25vdyBpZiB0aGUgY3VycmVudCB0aW1lem9uZSBpcyBhIDEyIGhvdXIgdGltZSB3aXRoIGxvb2sgZm9yIGFuIFwiYVwiIGluIHRoZSB0aW1lIGZvcm1hdC5cbi8vIFdlIGFsc28gbWFrZSBzdXJlIHRoaXMgYSBpcyBub3QgZXNjYXBlZCBieSBhIFwiL1wiLlxuXG52YXIgZGF0ZVRpbWVTZXR0aW5ncyA9IF9fZXhwZXJpbWVudGFsR2V0U2V0dGluZ3MoKTtcbnZhciBpczEySG91clRpbWUgPSAvYSg/IVxcXFwpL2kudGVzdChkYXRlVGltZVNldHRpbmdzLmZvcm1hdHMudGltZS50b0xvd2VyQ2FzZSgpIC8vIFRlc3Qgb25seSB0aGUgbG93ZXIgY2FzZSBhXG4ucmVwbGFjZSgvXFxcXFxcXFwvZywgJycpIC8vIFJlcGxhY2UgXCIvL1wiIHdpdGggZW1wdHkgc3RyaW5nc1xuLnNwbGl0KCcnKS5yZXZlcnNlKCkuam9pbignJykgLy8gUmV2ZXJzZSB0aGUgc3RyaW5nIGFuZCB0ZXN0IGZvciBcImFcIiBub3QgZm9sbG93ZWQgYnkgYSBzbGFzaFxuKTtcblxuLyoqXG4gKiBSZWdpc3RlcjogYWEgR3V0ZW5iZXJnIEJsb2NrLlxuICpcbiAqIFJlZ2lzdGVycyBhIG5ldyBibG9jayBwcm92aWRlZCBhIHVuaXF1ZSBuYW1lIGFuZCBhbiBvYmplY3QgZGVmaW5pbmcgaXRzXG4gKiBiZWhhdmlvci4gT25jZSByZWdpc3RlcmVkLCB0aGUgYmxvY2sgaXMgbWFkZSBlZGl0b3IgYXMgYW4gb3B0aW9uIHRvIGFueVxuICogZWRpdG9yIGludGVyZmFjZSB3aGVyZSBibG9ja3MgYXJlIGltcGxlbWVudGVkLlxuICpcbiAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL1xuICogQHBhcmFtICB7c3RyaW5nfSAgIG5hbWUgICAgIEJsb2NrIG5hbWUuXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgc2V0dGluZ3MgQmxvY2sgc2V0dGluZ3MuXG4gKiBAcmV0dXJuIHs/V1BCbG9ja30gICAgICAgICAgVGhlIGJsb2NrLCBpZiBpdCBoYXMgYmVlbiBzdWNjZXNzZnVsbHlcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWdpc3RlcmVkOyBvdGhlcndpc2UgYHVuZGVmaW5lZGAuXG4gKi9cbnJlZ2lzdGVyQmxvY2tUeXBlKCdyaGR3cC9yZWFkZXItYWxlcnRzLWxpbmstbWV0YS1ibG9jaycsIHtcbiAgdGl0bGU6IF9fKCdSZWFkZXIgQWxlcnQgTGluaycpLFxuICBpY29uOiAnYWRtaW4tbGlua3MnLFxuICBjYXRlZ29yeTogJ3JoZHdwJyxcblxuICBhdHRyaWJ1dGVzOiB7XG4gICAgdXJsOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIHNvdXJjZTogJ21ldGEnLFxuICAgICAgbWV0YTogJ3JoZHdwX2FsZXJ0X2xpbmtfdXJsJ1xuICAgIH0sXG4gICAgb3Blbk5ld1RhYjoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgc291cmNlOiAnbWV0YScsXG4gICAgICBtZXRhOiAncmhkd3BfYWxlcnRfbGlua191cmxfbmV3X3RhYidcbiAgICB9LFxuICAgIGhhc0V4cGlyYXRpb246IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIHNvdXJjZTogJ21ldGEnLFxuICAgICAgbWV0YTogJ3JoZHdwX2FsZXJ0X2hhc19leHBpcmF0aW9uJ1xuICAgIH0sXG4gICAgZXhwaXJlRGF0ZVRpbWU6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgc291cmNlOiAnbWV0YScsXG4gICAgICBtZXRhOiAncmhkd3BfYWxlcnRfZXhwaXJhdGlvbl9kYXRlJ1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogVGhlIGVkaXQgZnVuY3Rpb24gZGVzY3JpYmVzIHRoZSBzdHJ1Y3R1cmUgb2YgeW91ciBibG9jayBpbiB0aGUgY29udGV4dCBvZiB0aGUgZWRpdG9yLlxuICAgKiBUaGlzIHJlcHJlc2VudHMgd2hhdCB0aGUgZWRpdG9yIHdpbGwgcmVuZGVyIHdoZW4gdGhlIGJsb2NrIGlzIHVzZWQuXG4gICAqXG4gICAqIFRoZSBcImVkaXRcIiBwcm9wZXJ0eSBtdXN0IGJlIGEgdmFsaWQgZnVuY3Rpb24uXG4gICAqXG4gICAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL2Jsb2NrLWVkaXQtc2F2ZS9cbiAgICovXG4gIGVkaXQ6IGZ1bmN0aW9uIGVkaXQocHJvcHMpIHtcbiAgICB2YXIgX3Byb3BzJGF0dHJpYnV0ZXMgPSBwcm9wcy5hdHRyaWJ1dGVzLFxuICAgICAgICB1cmwgPSBfcHJvcHMkYXR0cmlidXRlcy51cmwsXG4gICAgICAgIG9wZW5OZXdUYWIgPSBfcHJvcHMkYXR0cmlidXRlcy5vcGVuTmV3VGFiLFxuICAgICAgICBoYXNFeHBpcmF0aW9uID0gX3Byb3BzJGF0dHJpYnV0ZXMuaGFzRXhwaXJhdGlvbixcbiAgICAgICAgZXhwaXJlRGF0ZVRpbWUgPSBfcHJvcHMkYXR0cmlidXRlcy5leHBpcmVEYXRlVGltZSxcbiAgICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBzZXRBdHRyaWJ1dGVzID0gcHJvcHMuc2V0QXR0cmlidXRlcztcblxuXG4gICAgcmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSB9LFxuICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyBjbGFzc05hbWU6ICdyZWFkZXItb3B0aW9ucycgfSxcbiAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdoNCcsXG4gICAgICAgICAgbnVsbCxcbiAgICAgICAgICAnQWxlcnQgT3B0aW9ucydcbiAgICAgICAgKSxcbiAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFRleHRDb250cm9sLCB7XG4gICAgICAgICAgbGFiZWw6IF9fKCdOb3RpZmljYXRpb24gTGluaycsICdyaGR3cCcpLFxuICAgICAgICAgIHZhbHVlOiB1cmwsXG4gICAgICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKHVybCkge1xuICAgICAgICAgICAgcmV0dXJuIHNldEF0dHJpYnV0ZXMoeyB1cmw6IHVybCB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoQ2hlY2tib3hDb250cm9sLCB7XG4gICAgICAgICAgbGFiZWw6IF9fKCdPcGVuIHRoaXMgbGluayBpbiBhIG5ldyB0YWIgKG5vdCByZWNvbW1lbmRlZCBmb3IgaW50ZXJuYWwgc2l0ZSBsaW5rcykuJywgJ3JoZHdwJyksXG4gICAgICAgICAgY2hlY2tlZDogb3Blbk5ld1RhYixcbiAgICAgICAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2Uob3Blbk5ld1RhYikge1xuICAgICAgICAgICAgcmV0dXJuIHNldEF0dHJpYnV0ZXMoeyBvcGVuTmV3VGFiOiBvcGVuTmV3VGFiIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChDaGVja2JveENvbnRyb2wsIHtcbiAgICAgICAgICBsYWJlbDogX18oJ0V4cGlyZSB0aGlzIHBvc3QgYXQgYSBzcGVjaWZpYyBkYXRlL3RpbWUnLCAncmhkd3AnKSxcbiAgICAgICAgICBjaGVja2VkOiBoYXNFeHBpcmF0aW9uLFxuICAgICAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShoYXNFeHBpcmF0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gc2V0QXR0cmlidXRlcyh7IGhhc0V4cGlyYXRpb246IGhhc0V4cGlyYXRpb24gfSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBpczEySG91cjogaXMxMkhvdXJUaW1lXG4gICAgICAgIH0pLFxuICAgICAgICBoYXNFeHBpcmF0aW9uID8gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIHsgY2xhc3NOYW1lOiAnZXhwaXJlLWFsZXJ0LWNvbnRyb2wnIH0sXG4gICAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ3AnLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICdFeHBpcmF0aW9uOidcbiAgICAgICAgICApLFxuICAgICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChEYXRlVGltZVBpY2tlciwge1xuICAgICAgICAgICAgY3VycmVudERhdGU6IGV4cGlyZURhdGVUaW1lLFxuICAgICAgICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKGV4cGlyZURhdGVUaW1lKSB7XG4gICAgICAgICAgICAgIHJldHVybiBzZXRBdHRyaWJ1dGVzKHsgZXhwaXJlRGF0ZVRpbWU6IGV4cGlyZURhdGVUaW1lIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlzMTJIb3VyOiBpczEySG91clRpbWVcbiAgICAgICAgICB9KVxuICAgICAgICApIDogJydcbiAgICAgIClcbiAgICApO1xuICB9LFxuXG4gIC8qKlxuICAgKiBObyBpbmZvcm1hdGlvbiBzYXZlZCB0byB0aGUgYmxvY2tcbiAgICogRGF0YSBpcyBzYXZlZCB0byBwb3N0IG1ldGEgdmlhIGF0dHJpYnV0ZXNcbiAgICovXG4gIHNhdmU6IGZ1bmN0aW9uIHNhdmUoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2NrL2Jsb2NrLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!******************************!*\
  !*** ./src/block/style.scss ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9zdHlsZS5zY3NzPzgwZjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*******************************!*\
  !*** ./src/block/editor.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9lZGl0b3Iuc2Nzcz80OWQyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ })
/******/ ]);