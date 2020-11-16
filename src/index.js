import { createHeader } from './header';
import { createHomePage, removeContainerElements } from './homepage';
import { createMenuPage } from './menu';   

function renderPage() {
  createHeader();
  createHomePage();

  let links = document.getElementById('link-container').childNodes;
  console.log(links)
  links.forEach(link => {
    link.addEventListener('click', (e) => updatePage(e))
    console.log(link.innerHTML)
  })
}

function updatePage(e) {
  removeContainerElements();
  console.log(e.target.innerHTML)
  if (e.target.innerHTML === "HOME") {
    createHomePage();
  } else if (e.target.innerHTML === "MENU") {
    createMenuPage();
  } else if (e.target.innerHTML === "LOCATION") {
    // createLocationPage();
  }
}

renderPage();
