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
/***/ (function(module, exports) {

//////////////////////////////////////module SELL/////////////////////////////////////////
// var sell_collection = require('./sell/sell_colection.js');
// console.log(sell_collection);
console.log("hello");
///////////////////////////////////////END MODULE SELL////////////////////////////////////////////////////////

///////////////////////////////////////MODULE ADDITEM/////////////////////////////////////////////////////////


////////////////////////////////////////END MODULE ADDITEM////////////////////////////////////////////////////
// Router = Backbone.Router.extend({
//     routes: {
//         ''     : 'index',
//         'sell' : 'sell',
//         'additem' : 'additem',
//         'admin' : 'admin' 
//     },
 
//     index: function() {
//         console.log('Всем привет от индексного роута!');   
//         sell.destroy();
//          itemsView.destroy();
//          itemPayView.destroy();
//     },
 
//     sell: function() {
//         console.log('это роут Sell');   
//         document.getElementById("sell page").style.display="block"; //show page with id sell page
//         document.getElementById("additem page").style.display="none";   
//         itemPayView.render();
//         itemsView.render();
//         //document.getElementById("1").style.display="none";
//        // document.getElementById("2").style.display="block";
//         sell.render();
//         additem.destroy(); 
//         adededItemCollectionView.destroy();
//         itemsChoiceView.destroy();
//     },

//     additem: function() {
//         console.log('это роут additem');   
//         //var itemserchview = new ItemSercheView();
//         //document.getElementById("2").style.display="none";
//         //document.getElementById("sell page").style.display="block";
//         document.getElementById("additem page").style.display="block"; //show page with id sell page
//         document.getElementById("sell page").style.display="none";
//          additem.render();
//          adededItemCollectionView.render();
//          itemsChoiceView.render();
//          itemHandheldView.render();//
//          sell.destroy();
//          itemsView.destroy();
//          itemPayView.destroy();
//     },
//     admin: function() {
//         console.log('это роут admin'); 
//         sell.destroy();
//          itemsView.destroy();
//          itemPayView.destroy();  
//         //var itemserchview = new ItemSercheView();
//     }

// });
 
// new Router();
    
// Backbone.history.start();


/***/ })
/******/ ]);