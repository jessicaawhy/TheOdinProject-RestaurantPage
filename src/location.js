import { create } from './createElement';

function createLocationPage() {
  const pageContainer = create({
    type: 'div', 
    innerHTML: '',
    attributes: {
      id: 'location-page'
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
      src: './src/public/location.jpg'
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
  
  const locationHeading = create({
    type: 'h2', 
    innerHTML: 'LOCATION',
    attributes: {
      id: ''
    },
    classList: [],
    parentElement: mainContainer,
  });

  let locationTextContainer = [
    '123 Fake Street  @ RestaurantProject',
  ];
  locationTextContainer.forEach(text => {
    const locationText = create({
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

export { createLocationPage };
