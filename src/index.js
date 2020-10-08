import {createAndAppend, setElementHtmlText} from './createElement'

createAndAppend('h1', 'restaurantName', 'content');
setElementHtmlText('restaurantName', 'Yummy Yummy')





// function createAndAppend(type, id, parentId) {
//   const element = document.createElement(`${type}`);
//   element.setAttribute('id', id);

//   const parentElement = document.getElementById(parentId);
//   parentElement.appendChild(element);
// }

// function setElementHtmlText(id, text) {
//   document.getElementById(id).textContent = text;
// }
