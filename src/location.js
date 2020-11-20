import { create } from './createElement';

function createLocationPage() {
  const container = document.getElementById('container');

  const pageContainer = create({
    type: 'div', 
    innerHTML: '',
    attributes: {
      id: 'location-page'
    },
    classList: [],
  });
  pageContainer.style.display = "none";

  const photoContainer = create({
    type: 'div', 
    innerHTML: '',
    attributes: {
      id: ''
    },
    classList: ['photo-container'],
  });

  const image = create({
    type: 'img', 
    innerHTML: '',
    attributes: {
      id: '',
      src: 'location.jpg'
    },
    classList: [],
  });
  
  const mainContainer = create({
    type: 'div', 
    innerHTML: '',
    attributes: {
      id: ''
    },
    classList: ['main-container'],
  });
  
  const locationHeading = create({
    type: 'h2', 
    innerHTML: 'LOCATION',
    attributes: {
      id: ''
    },
    classList: [],
  });
  
  container.appendChild(pageContainer);
  pageContainer.appendChild(photoContainer);
  photoContainer.appendChild(image);
  pageContainer.appendChild(mainContainer);
  mainContainer.appendChild(locationHeading);

  let locationTextContainer = [
    '123 Fake Street  @ RestaurantProject',
  ]
  
  locationTextContainer.forEach(text => {
    const locationText = create({
      type: 'p', 
      innerHTML: text,
      attributes: {
        id: ''
      },
      classList: [],
    });

    mainContainer.appendChild(locationText);
  });
}

export { createLocationPage };
