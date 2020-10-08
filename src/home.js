import {createAndAppend, setElementHtmlText} from './createElement';

function createHomePage() {
  createAndAppend('h3', 'about', 'content');
  setElementHtmlText('about', 'About');
  
  createAndAppend('h4', 'about-paragraph', 'content');
  setElementHtmlText('about-paragraph', 'A paragraph about the restaruant');
}

export {createHomePage};
