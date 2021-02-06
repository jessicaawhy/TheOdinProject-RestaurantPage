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

  const locationMap = create({
    type: 'iframe', 
    innerHTML: '',
    attributes: {
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100895.87157766047!2d-122.42357736657523!3d37.79013381956145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580b1c8cede0b%3A0xc7934c15cbf08de1!2sJu-Ni!5e0!3m2!1sen!2sus!4v1612587120074!5m2!1sen!2sus"
    },
    classList: [],
    parentElement: mainContainer,
  });

}

export { createLocationPage };
