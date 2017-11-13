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
// let list = descendants;
// only pass in UL.
// let allLis = document.querySelectorAll('li');
// console.log(allLis);
// for (let li of allLis){
// 	if (li.children.length === 0) continue;
// 	li.firstChild.data+=`[${li.querySelectorAll('li').length}]`;
// }

function promiseSimulator(){
	const myApi = new fakeApi();
	document.querySelector('button').addEventListener('click', ()=> {
		stack.insertAdjacentHTML("beforeend", '<p>Making api call</p>')
		const token = window.prompt("If you want an answer, give me a token");
		myApi.getStuff(token).then(res => {
			if (typeof res === 'function'){
				res();
			} else {
				stack.insertAdjacentHTML("beforeend", `<h1>${res}</h1>`)
			}
		}).catch(err => stack.insertAdjacentHTML("beforeend", `<h1 style='color: red'>${err}</h1>`))
	})
}
class fakeApi {
	constructor(props){
		this.content = "could I be a private variable?"
	}
	parseStuff(string){
		alert(string + this.content);
	}

	getStuff(token){
		stack.insertAdjacentHTML("beforeend", '<p>Inside api function</p>')
		return new Promise((resolve, reject) => {
			if (token === "goodboy"){
						stack.insertAdjacentHTML("beforeend", '<p>resolving goodboy</p>')

				resolve(this.parseStuff.bind(this, "The answer to life is 42"));
			} else if (token === "monster") {
						stack.insertAdjacentHTML("beforeend", '<p>resolving monster</p>')

				resolve("Life is beautiful")
			} else {
						stack.insertAdjacentHTML("beforeend", '<p>resolving error</p>')

				reject("You're a terrible person!");
			}
		})
	}
}
promiseSimulator();



