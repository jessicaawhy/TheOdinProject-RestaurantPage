import {createAndAppend, setElementHtmlText} from './createElement';

function createHeader() {
  createAndAppend('h1', 'restaurantName', 'content');
  setElementHtmlText('restaurantName', 'Yummy Yummy');
  
  createAndAppend('ul', 'button-container', 'content');

  createAndAppend('button', 'home-button', 'button-container')
  setElementHtmlText('home-button', 'Home');
  
  createAndAppend('button', 'menu-button', 'button-container')
  setElementHtmlText('menu-button', 'Menu');
  
  createAndAppend('button', 'contact-button', 'button-container')
  setElementHtmlText('contact-button', 'Contact');
}

export {createHeader};
