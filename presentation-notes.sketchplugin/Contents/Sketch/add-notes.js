var that = this;
function __skpm_run (key, context) {
  that.context = context;

var exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("sketch/dom");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports['default'] = function (context) {
  var sketch = context.api();
  var document = sketch.selectedDocument;
  var selection = document.selectedLayers;
  var Rectangle = __webpack_require__(0).Rectangle;
  var Document = __webpack_require__(0).Document;
  var Page = __webpack_require__(0).Page;
  var Artboard = __webpack_require__(0).Artboard;
  var Group = __webpack_require__(0).Group;

  try {
    var artboardsToSelect = [];
    if (selection && !selection.isEmpty) {
      selection.iterate(function (item) {
        if (item && item.isArtboard) {
          artboardsToSelect.push(item);
        }
      });

      if (artboardsToSelect && artboardsToSelect.length > 0) {
        artboardsToSelect.map(function (artboard) {
          if (addNoteGroupTo(artboard)) {
            log('OOKK');
            var newLayerFrame = new Rectangle(artboard.frame);
            newLayerFrame.height += 300;
            artboard.frame = newLayerFrame;

            // TODO add group con rettangolo di sfondo, titolo e testo
          } else {
            context.document.showMessage('Ciao');
          }
        });
        // selection.clear();
      } else {
        context.document.showMessage('No artboard are selected. 🙃');
      }
    } else {
      context.document.showMessage('No artboard are selected. 🙃');
    }
  } catch (e) {
    log(e);
  }
};

addNoteGroupTo = function addNoteGroupTo(artboard) {
  if (artboard && artboard.isArtboard && artboard.sketchObject.layers()) {
    var layers = artboard.sketchObject.layers();
    if (layers.length == 0) return true;
    layers.map(function (layer) {
      log(layer.name);
    });
    //log(layers.filter(function(layer) { return layer.id == "presentation-note-group-id"}))
    //return layers.filter(function(layer) { return (layer.id == "presentation-note-group-id") ? layer : null }).length == 0
  }
};

/***/ })
/******/ ]);
  if (key === 'default' && typeof exports === 'function') {
    exports(context);
  } else {
    exports[key](context);
  }
}
that['onRun'] = __skpm_run.bind(this, 'default')
