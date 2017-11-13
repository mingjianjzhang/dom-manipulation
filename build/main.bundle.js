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

// class DomManipulator {
// 	constructor(elements){
// 		this.elements = elements;
// 	}
// 	changeColors(){
// 		this.elements.forEach((el, index) => {
// 			setTimeout(()=> {
// 				el.style.color = 'red';
// 			}, 1000*index)
// 		})
// 	}
// 	changeFontsize(){
// 		for (var i = 0; i < this.elements.length; i++){
// 			(frozenIndex => {
// 				setTimeout(()=>{
// 					console.log(frozenIndex)
// 				}, i*1000)
// 			})(i);
// 		}
// 	}
// 	diagonalColoring(){
// 		console.log(this.elements.rows);
// 		for (let row of this.elements.rows){
// 			console.log(row.rowIndex);
// 			row.cells[row.rowIndex].style.backgroundColor = 'red';
// 		}
// 	}
// 	log(){
// 		console.log(this.elements);
// 	}
// }
// const franz = new DomManipulator(document.querySelectorAll('h1'));
// const table = new DomManipulator(document.querySelector('table'));
// table.diagonalColoring();
// document.querySelector('button').addEventListener('click', ()=> franz.changeColors())
// document.querySelector('button').addEventListener('click', ()=> franz.changeFontsize())
// const links = document.querySelector('#links');
// console.log(links);
// console.log(links.querySelectorAll('a'));
// links.querySelectorAll('a').forEach(link =>{
// 	// console.log(link.matches('[href^="http"]'))
// 	if (!link.matches('[href^="http://internal.com"]') && link.matches('[href*="://"]')){
// 		link.style.color= 'orange';
// 	}
// })
// INFINITE PROMPT LIST **********
// const list = promptlist.querySelector('ul');
// let listText, inLoop = true;
// promptlist.querySelector('button').addEventListener('click', ()=> {
// 	while (inLoop) {
// 		listText = prompt("Enter some text for your new list item");
// 		if (!listText){
// 			break;
// 		}
// 		const newItem = document.createElement('li');
// 		newItem.innerHTML = listText;
// 		list.append(newItem);
// 	}
// })
// ******MAKE A LIST OUT OF A TREE
// let data = {
//   "Fish": {
//     "trout": {},
//     "salmon": {}
//   },
//   "Tree": {
//     "Huge": {
//       "sequoia": {},
//       "oak": {}
//     },
//     "Flowering": {
//       "redbud": {},
//       "magnolia": {}
//     }
//   }
// };
// let docContainer = document.querySelector('#container');
// const createTree = (container, data) => {
// 	if (Object.keys(data).length === 0) return;
// 	let newList = document.createElement('ul');
// 	for (let name in data){
// 		let newItem = document.createElement('li');
// 		newItem.textContent = name;
// 		newList.append(newItem);
// 		createTree(newItem, data[name])
// 	}
// 	container.append(newList);
// }
// createTree(docContainer, data);
var list = descendants; // only pass in UL.

var allLis = document.querySelectorAll('li');
console.log(allLis);
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = allLis[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var _li = _step.value;
    if (_li.children.length === 0) continue;
    _li.firstChild.data += "[".concat(_li.querySelectorAll('li').length, "]");
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return != null) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

/***/ })
/******/ ]);
//# sourceMappingURL=main.bundle.js.map