/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./blocks/configuration/align/align.jsx":
/*!**********************************************!*\
  !*** ./blocks/configuration/align/align.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlignSettings: () => (/* binding */ AlignSettings),
/* harmony export */   alignClass: () => (/* binding */ alignClass),
/* harmony export */   defaultAlignAttributes: () => (/* binding */ defaultAlignAttributes)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const defaultAlignAttributes = {
  align: {
    type: 'string',
    default: 'left'
  }
};
const alignClass = align => {
  switch (align) {
    case 'left':
      return 'justify-content-start';
    case 'center':
      return 'justify-content-center';
    case 'right':
      return 'justify-content-end';
    default:
      return 'justify-content-start';
  }
};
function AlignSettings({
  title,
  attributes,
  setAttributes
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
    title: title,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl, {
        label: "Alignment",
        value: attributes.align,
        options: [{
          label: 'Left',
          value: 'left'
        }, {
          label: 'Center',
          value: 'center'
        }, {
          label: 'Right',
          value: 'right'
        }],
        onChange: align => setAttributes({
          align
        })
      })
    })
  });
}

/***/ }),

/***/ "./blocks/configuration/color/colors.jsx":
/*!***********************************************!*\
  !*** ./blocks/configuration/color/colors.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ColorSettings: () => (/* binding */ ColorSettings),
/* harmony export */   colorValues: () => (/* binding */ colorValues),
/* harmony export */   defaultColorNameAttributes: () => (/* binding */ defaultColorNameAttributes)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const colorValues = [{
  name: 'primary',
  color: '#003b49'
}, {
  name: 'secondary',
  color: '#ff7d45'
}, {
  name: 'black',
  color: '#000000'
}, {
  name: 'white',
  color: '#fff'
}, {
  name: 'gray',
  color: '#adb5bd'
}];
const defaultColorNameAttributes = {
  colorName: {
    type: 'string',
    default: 'primary'
  }
};
function ColorSettings({
  title,
  attributes,
  setAttributes
}) {
  const currentColorValue = colorValues.filter(color => {
    return color.name === attributes.colorName;
  })[0].color;
  function handleColorChange(colorCode) {
    // from the hex value that the color palette gives us, we need to find its color name
    const {
      name
    } = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.getColorObjectByColorValue)(colorValues, colorCode);
    setAttributes({
      colorName: name
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
    title: title,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ColorPalette, {
        disableCustomColors: true,
        clearable: false,
        colors: colorValues,
        value: currentColorValue,
        onChange: handleColorChange
      })
    })
  });
}

/***/ }),

/***/ "./blocks/configuration/spacer/spacer.jsx":
/*!************************************************!*\
  !*** ./blocks/configuration/spacer/spacer.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SpacerSettings: () => (/* binding */ SpacerSettings),
/* harmony export */   defaultSpacerAttributes: () => (/* binding */ defaultSpacerAttributes),
/* harmony export */   spacerClass: () => (/* binding */ spacerClass)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const defaultSpacerAttributes = {
  spacer: {
    type: 'string',
    default: 'medium'
  }
};
const spacerClass = spacer => {
  switch (spacer) {
    case 'xSmall':
      return 'mt-2';
    case 'small':
      return 'mt-3';
    case 'medium':
      return 'mt-4';
    case 'large':
      return 'mt-3 mt-lg-5';
    case 'xLarge':
      return 'mt-5 mt-lg-10';
    case 'xxLarge':
      return 'mt-6 mt-lg-12';
    default:
      return 'mt-0';
  }
};
function SpacerSettings({
  title,
  attributes,
  setAttributes
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
    title: title,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl, {
        label: "Spacer",
        value: attributes.spacer,
        options: [{
          label: 'None',
          value: ''
        }, {
          label: 'Extra Small',
          value: 'xSmall'
        }, {
          label: 'Small',
          value: 'small'
        }, {
          label: 'Medium',
          value: 'medium'
        }, {
          label: 'Large',
          value: 'large'
        }, {
          label: 'Extra Large',
          value: 'xLarge'
        }, {
          label: 'Extra Extra Large',
          value: 'xxLarge'
        }],
        onChange: spacer => setAttributes({
          spacer
        })
      })
    })
  });
}

/***/ }),

/***/ "./blocks/utilities/button/button.jsx":
/*!********************************************!*\
  !*** ./blocks/utilities/button/button.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Button: () => (/* binding */ Button),
/* harmony export */   ButtonSettings: () => (/* binding */ ButtonSettings),
/* harmony export */   defaultButtonAttributes: () => (/* binding */ defaultButtonAttributes)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/.pnpm/@wordpress+icons@10.27.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/link.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _configuration_spacer_spacer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../configuration/spacer/spacer */ "./blocks/configuration/spacer/spacer.jsx");
/* harmony import */ var _configuration_color_colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../configuration/color/colors */ "./blocks/configuration/color/colors.jsx");
/* harmony import */ var _configuration_align_align__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../configuration/align/align */ "./blocks/configuration/align/align.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);








const defaultButtonAttributes = {
  ..._configuration_color_colors__WEBPACK_IMPORTED_MODULE_5__.defaultColorNameAttributes,
  ..._configuration_spacer_spacer__WEBPACK_IMPORTED_MODULE_4__.defaultSpacerAttributes,
  ..._configuration_align_align__WEBPACK_IMPORTED_MODULE_6__.defaultAlignAttributes,
  linkText: {
    type: 'string',
    default: 'Mehr erfahren'
  },
  linkObject: {
    type: 'object',
    default: {
      url: ''
    }
  },
  buttonColorName: {
    type: 'string',
    default: 'primary'
  }
};
function ButtonSettings({
  attributes,
  setAttributes,
  setIsLinkPickerVisible
}) {
  function buttonHandler() {
    setIsLinkPickerVisible(prev => !prev);
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.BlockControls, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarGroup, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
          onClick: buttonHandler,
          icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_1__["default"]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_configuration_color_colors__WEBPACK_IMPORTED_MODULE_5__.ColorSettings, {
        title: "Button Color Settings",
        attributes: {
          colorName: attributes.buttonColorName
        },
        setAttributes: newAttrs => {
          if (newAttrs.colorName) {
            setAttributes({
              buttonColorName: newAttrs.colorName
            });
          }
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_configuration_spacer_spacer__WEBPACK_IMPORTED_MODULE_4__.SpacerSettings, {
        title: "Container Settings",
        attributes: attributes,
        setAttributes: setAttributes
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_configuration_align_align__WEBPACK_IMPORTED_MODULE_6__.AlignSettings, {
        title: "Alignment Settings",
        attributes: attributes,
        setAttributes: setAttributes
      })]
    })]
  });
}
function Button({
  attributes,
  setAttributes
}) {
  const [isLinkPickerVisible, setIsLinkPickerVisible] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  function handleLinkChange(newLink) {
    setAttributes({
      linkObject: newLink
    });
  }
  function handleTextChange(setText) {
    setAttributes({
      linkText: setText
    });
  }

  // Tailwind button styles
  let buttonClasses = '';
  switch (attributes.buttonColorName) {
    case 'primary':
      buttonClasses = 'bg-primary-default hover:bg-primary-hover !text-white';
      break;
    case 'secondary':
      buttonClasses = 'bg-secondary-default hover:bg-secondary-hover !text-white';
      break;
    case 'black':
      buttonClasses = 'bg-black hover:bg-gray-900 !text-white';
      break;
    case 'white':
      buttonClasses = 'bg-white text-black border border-gray-300 hover:bg-gray-100';
      break;
    case 'gray':
      buttonClasses = 'bg-gray-200 hover:bg-gray-300 !text-primary-default';
      break;
    default:
      buttonClasses = 'bg-primary-default hover:bg-primary-hover !text-white';
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ButtonSettings, {
      attributes: attributes,
      setAttributes: setAttributes,
      isLinkPickerVisible: isLinkPickerVisible,
      setIsLinkPickerVisible: setIsLinkPickerVisible
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: `flex ${(0,_configuration_align_align__WEBPACK_IMPORTED_MODULE_6__.alignClass)(attributes.align)}`,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
        allowedFormats: [],
        tagName: "a",
        className: `inline-block ${buttonClasses} font-semibold py-2 px-4 rounded transition duration-300 cursor-pointer ${(0,_configuration_spacer_spacer__WEBPACK_IMPORTED_MODULE_4__.spacerClass)(attributes.spacer)}`,
        value: attributes.linkText,
        onChange: handleTextChange
      })
    }), isLinkPickerVisible && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Popover, {
      position: "middle center",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__experimentalLinkControl, {
        settings: [{
          id: 'openInNewTab',
          title: 'Öffnen in neuem Tab'
        }],
        value: attributes.linkObject,
        onChange: handleLinkChange
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        variant: "primary",
        onClick: () => setIsLinkPickerVisible(false),
        style: {
          display: 'block',
          width: '100%'
        },
        children: "Confirm Link"
      })]
    })]
  });
}

/***/ }),

/***/ "./blocks/utilities/text/text.jsx":
/*!****************************************!*\
  !*** ./blocks/utilities/text/text.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Text: () => (/* binding */ Text),
/* harmony export */   defaultTextAttributes: () => (/* binding */ defaultTextAttributes)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const defaultTextAttributes = {
  text: {
    type: 'string'
  },
  alignment: {
    type: 'string'
  }
};
function Text({
  attributes,
  setAttributes,
  enableAlignment = true,
  className = ''
}) {
  let alignmentClass = '';
  switch (attributes.alignment) {
    case 'left':
      alignmentClass = 'text-start';
      break;
    case 'center':
      alignmentClass = 'text-center';
      break;
    case 'right':
      alignmentClass = 'text-end';
      break;
    default:
      alignmentClass = 'text-start';
  }
  const combinedClassName = `${alignmentClass} ${className}`.trim();
  if (enableAlignment) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.BlockControls, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.AlignmentToolbar, {
          value: attributes.alignment,
          onChange: newVal => setAttributes({
            alignment: newVal
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
        value: attributes.text,
        onChange: newText => setAttributes({
          text: newText
        }),
        placeholder: "Text eingabe...",
        className: combinedClassName
      })]
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
    value: attributes.text,
    onChange: newText => setAttributes({
      text: newText
    }),
    placeholder: "Text eingabe...",
    className: combinedClassName
  });
}

/***/ }),

/***/ "./node_modules/.pnpm/@wordpress+icons@10.27.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/layout.js":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@wordpress+icons@10.27.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/layout.js ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


const layout = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    d: "M18 5.5H6a.5.5 0 00-.5.5v3h13V6a.5.5 0 00-.5-.5zm.5 5H10v8h8a.5.5 0 00.5-.5v-7.5zm-10 0h-3V18a.5.5 0 00.5.5h2.5v-8zM6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (layout);
//# sourceMappingURL=layout.js.map

/***/ }),

/***/ "./node_modules/.pnpm/@wordpress+icons@10.27.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/link.js":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@wordpress+icons@10.27.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/link.js ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


const link = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    d: "M10 17.389H8.444A5.194 5.194 0 1 1 8.444 7H10v1.5H8.444a3.694 3.694 0 0 0 0 7.389H10v1.5ZM14 7h1.556a5.194 5.194 0 0 1 0 10.39H14v-1.5h1.556a3.694 3.694 0 0 0 0-7.39H14V7Zm-4.5 6h5v-1.5h-5V13Z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (link);
//# sourceMappingURL=link.js.map

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["primitives"];

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!******************************************************************!*\
  !*** ./blocks/components/call-to-action/call-to-action-item.jsx ***!
  \******************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/.pnpm/@wordpress+icons@10.27.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/layout.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _configuration_color_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../configuration/color/colors */ "./blocks/configuration/color/colors.jsx");
/* harmony import */ var _utilities_button_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utilities/button/button */ "./blocks/utilities/button/button.jsx");
/* harmony import */ var _utilities_text_text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utilities/text/text */ "./blocks/utilities/text/text.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
//https://wordpress.github.io/gutenberg/?path=/story/icons-icon--library







(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('basetheme/call-to-action-item', {
  title: 'Call-to-action-item',
  icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_1__["default"],
  category: 'layout',
  parent: ['basetheme/call-to-action'],
  description: 'A Description',
  keywords: '[]',
  supports: {},
  attributes: {
    colorName: {
      type: 'string',
      default: 'white'
    },
    ..._utilities_text_text__WEBPACK_IMPORTED_MODULE_5__.defaultTextAttributes,
    headline: {
      type: 'string',
      default: 'Headline'
    },
    ..._utilities_button_button__WEBPACK_IMPORTED_MODULE_4__.defaultButtonAttributes
  },
  edit: EditComponent,
  save: SaveComponent
});
function EditComponent(props) {
  const {
    attributes,
    setAttributes
  } = props;
  let bgColor;
  let textColor;
  switch (attributes.colorName) {
    case 'primary':
      bgColor = 'bg-primary';
      textColor = 'text-white';
      break;
    case 'secondary':
      bgColor = 'bg-secondary';
      textColor = 'text-white';
      break;
    case 'black':
      bgColor = 'bg-black';
      textColor = 'text-white';
      break;
    case 'white':
      bgColor = 'bg-white';
      textColor = 'text-black';
      break;
    default:
      bgColor = 'bg-primary';
      textColor = 'text-white';
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_configuration_color_colors__WEBPACK_IMPORTED_MODULE_3__.ColorSettings, {
        title: "Color Settings",
        attributes: attributes,
        setAttributes: setAttributes
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "grid-item-2/5",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: `${bgColor} p-4`,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_utilities_text_text__WEBPACK_IMPORTED_MODULE_5__.Text, {
          attributes: {
            text: attributes.headline
          },
          setAttributes: newAttributes => {
            setAttributes({
              headline: newAttributes.text
            });
          },
          className: ` ${textColor} fs-32`
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_utilities_text_text__WEBPACK_IMPORTED_MODULE_5__.Text, {
          attributes: attributes,
          setAttributes: setAttributes,
          className: `${textColor} fs-18`
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_utilities_button_button__WEBPACK_IMPORTED_MODULE_4__.Button, {
          attributes: attributes,
          setAttributes: setAttributes
        })]
      })
    })]
  });
}
function SaveComponent() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, {});
}
})();

/******/ })()
;
//# sourceMappingURL=call-to-action-item.jsx.js.map