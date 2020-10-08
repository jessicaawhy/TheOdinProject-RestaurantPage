import {createAndAppend, setElementHtmlText} from './createElement';

function createHeader() {
  createAndAppend('h1', 'restaurantName', 'content');
  setElementHtmlText('restaurantName', 'Yummy Yummy');
  
  createAndAppend('ul', 'linkContainer', 'content');
  
  createAndAppend('li', 'home', 'linkContainer');
  setElementHtmlText('home', 'Home');
  
  createAndAppend('li', 'menu', 'linkContainer');
  setElementHtmlText('menu', 'Menu');
  
  createAndAppend('li', 'contact', 'linkContainer');
  setElementHtmlText('contact', 'Contact');
}

export {createHeader};
