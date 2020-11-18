import { createHeader } from './header';
import { createHomePage, removeContainerElements } from './homepage';
import { createMenuPage } from './menu';   
import { createLocationPage } from './location';   

function renderPage() {
  createHeader();
  createHomePage();

  let links = document.getElementById('link-container').childNodes;
  links.forEach(link => {
    link.addEventListener('click', (e) => updatePage(e))
  })
}

function updatePage(e) {
  removeContainerElements();
  if (e.target.innerHTML === "HOME") {
    createHomePage();
  } else if (e.target.innerHTML === "MENU") {
    createMenuPage();
  } else if (e.target.innerHTML === "LOCATION") {
    createLocationPage();
  }
}



renderPage();
