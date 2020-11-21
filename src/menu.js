import { create } from './createElement';

function createMenuPage() {
  const pageContainer = create({
    type: 'div', 
    innerHTML: '',
    attributes: {
      id: 'menu-page'
    },
    classList: [],
    parentID: 'container',
  });
  pageContainer.style.display = "none";

  const photoContainer = create({
    type: 'div', 
    innerHTML: '',
    attributes: {
      id: ''
    },
    classList: ['photo-container'],
    parentElement: pageContainer,
  });

  const image = create({
    type: 'img', 
    innerHTML: '',
    attributes: {
      id: '',
      src: 'menu.jpg'
    },
    classList: [],
    parentElement: photoContainer,
  });

  // get rid of id here
  const imageText = create({
    type: 'h1', 
    innerHTML: 'THE INTERPLAY OF <br>EARTH AND SEA, <br>TRADITION AND EVOLUTION',
    attributes: {
      id: ''
    },
    classList: [],
    parentElement: photoContainer,
  });

  const mainContainer = create({
    type: 'div', 
    innerHTML: '',
    attributes: {
      id: ''
    },
    classList: ['main-container'],
    parentElement: pageContainer,
  });
  
  const menuHeading = create({
    type: 'h2', 
    innerHTML: 'MENU',
    attributes: {
      id: ''
    },
    classList: [],
    parentElement: mainContainer,
  });
  
  let menuTextContainer = [
    'We offer an 18 course omakase menu with the opportunity to indulge in extra courses. Our menu changes in harmony with nature as we seek to creatively reveal the essence of each ingredient at its peak.',
    'Every ingredient is meticulously sourced from the best purveyors in the world. About 90% of our fish comes from the world famous Toyosu Market in Japan with the rest coming from specialty purveyors.',
    'Each course is a complete composition woven into a menu that tells a unique story through technique, tradition, and evolution.',
    'The price for our omakase is $169 per person.'
  ];
  menuTextContainer.forEach(text => {
    const menuText = create({
      type: 'p', 
      innerHTML: text,
      attributes: {
        id: ''
      },
      classList: [],
      parentElement: mainContainer,
    });
  });
}

export { createMenuPage };
