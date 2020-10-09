import {createHeader} from './header';
import {createHomePage} from './home';
import {createContactPage} from './contact';
import {createMenuPage} from './menu';

const manageWebsite = (() => {
  const content = document.getElementById('content');
  
  const removeAllElements = () => {
    while (content.firstChild) {
      content.removeChild(content.lastChild);
    }
  }

  const createEventListeners = () => {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => button.addEventListener('click', (e)=> {
      toggleBody();
      if (e.target.innerText === 'Home') {
        createHomePage();
      } else if (e.target.innerText === 'Contact') {
        createContactPage();
      } else if (e.target.innerText === 'Menu') {
        createMenuPage();
      }
    }))
  }
  
  const toggleBody = () => {
    removeAllElements();
    createHeader();
    createEventListeners();
  }

  toggleBody();
  createHomePage();
})();
