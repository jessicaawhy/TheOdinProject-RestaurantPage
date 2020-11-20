import { createHeader } from './header';
import { createHomePage, rotateImage } from './homepage';
import { createMenuPage } from './menu';   
import { createLocationPage } from './location';   

function renderPage() {
  createHeader();
  createHomePage();
  createMenuPage();
  createLocationPage();

  let links = document.getElementById('header-links').childNodes;
  links.forEach(link => {
    link.addEventListener('click', (e) => updatePage(e))
  })
}

function updatePage(e) {
  const homePage = document.getElementById('home-page');
  const menuPage = document.getElementById('menu-page');
  const locationPage = document.getElementById('location-page');

  [homePage, menuPage, locationPage].forEach(page => {
    page.style.display = "none";
  })

  if (e.target.innerHTML === "HOME") {
    rotateImage('', true);
    homePage.style.display = 'block'
  } else if (e.target.innerHTML === "MENU") {
    menuPage.style.display = 'block'
  } else if (e.target.innerHTML === "LOCATION") {
    locationPage.style.display = 'block'
  }
}

renderPage();
