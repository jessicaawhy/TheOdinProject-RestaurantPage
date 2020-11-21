import { create } from './createElement';
import { images } from './images';

let currImgIndex = 1;
let intervalId;

function createHomePage() {
  const container = document.getElementById('container');

  const pageContainer = create({
    type: 'div', 
    innerHTML: '',
    attributes: {
      id: 'home-page'
    },
    classList: [],
  });

  const photoContainer = create({
    type: 'div', 
    innerHTML: '',
    attributes: {
      id: 'slider'
    },
    classList: ['photo-container'],
  });

  const imageText = create({
    type: 'h1', 
    innerHTML: '',
    attributes: {
      id: 'slider-text'
    },
    classList: [],
  });

  const dotContainer = create({
    type: 'div', 
    innerHTML: '',
    attributes: {
      id: 'dot-container'
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

  container.appendChild(pageContainer);
  pageContainer.appendChild(photoContainer);
  photoContainer.appendChild(imageText);
  pageContainer.appendChild(dotContainer);
  pageContainer.appendChild(mainContainer);

  for (let key in images) {
    const currentImage = create({
      type: 'img', 
      innerHTML: '',
      attributes: {
        id: `home-photo-${key}`,
        src: `./homepage-images/${key}.jpg`
      },
      classList: [],
    });

    const currentDot = create({
      type: 'a', 
      innerHTML: '',
      attributes: {
        id: `dot-${key}`,
        src: `./homepage-images/${key}.jpg`
      },
      classList: [],
    });
    
    currentImage.style.display = 'none';
    photoContainer.appendChild(currentImage);
    dotContainer.appendChild(currentDot);
    currentDot.addEventListener('click', clickImageDot);
  }

  const chefHeading = create({
    type: 'h2', 
    innerHTML: 'CHEF',
    attributes: {
      id: ''
    },
    classList: [],
  });

  const chefImage = create({
    type: 'img', 
    innerHTML: '',
    attributes: {
      id: 'chef-image',
      src: 'chef.jpeg'
    },
    classList: [],
  });
  
  const resHeading = create({
    type: 'h2', 
    innerHTML: 'RESERVATIONS',
    attributes: {
      id: ''
    },
    classList: [],
  });
  
  const resText1 = create({
    type: 'p', 
    innerHTML: 'We are an intimate restaurant with only 12 seats. Last minute cancellations, changes in party size, affect us greatly. In order to stay true to the experience we provide every guest, we must enforce a strict cancellation policy.',
    attributes: {
      id: '',
    },
    classList: [],
  });
  
  const resText2 = create({
    type: 'p', 
    innerHTML: 'Cancellations or changes in party size made within 48 hours of your reservation will incur an $165 per person charge. Thank you in advance for your patience and understanding. We look forward to seeing you soon.',
    attributes: {
      id: '',
    },
    classList: [],
  });

  mainContainer.appendChild(chefHeading);
  mainContainer.appendChild(chefImage);
  mainContainer.appendChild(resHeading);
  mainContainer.appendChild(resText1);
  mainContainer.appendChild(resText2);

  rotateImage('', true);
  intervalId = setInterval(() => {
    rotateImage();
  }, 5000);
}

function rotateImage(e, restart = false) {
  const currImage = document.getElementById(`home-photo-${currImgIndex}`);
  currImage.style.display = 'none';
  const currDot = document.getElementById(`dot-${currImgIndex}`);
  currDot.style.backgroundColor = 'lightgray';

  if (e) {
    currImgIndex = Number(e.target.id.slice(4));
  } else if (restart === true) {
    currImgIndex = 1;
  } else {
    images[currImgIndex + 1] === undefined ? currImgIndex = 1 : currImgIndex += 1;
  }

  const nextImage = document.getElementById(`home-photo-${currImgIndex}`);
  nextImage.style.display = 'block';
  const nextDot = document.getElementById(`dot-${currImgIndex}`);
  nextDot.style.backgroundColor = 'black';
  const text = document.getElementById('slider-text');
  text.innerHTML = images[currImgIndex]['text'];
}

function clickImageDot(e) {
  clearInterval(intervalId);
  rotateImage(e);
  intervalId = setInterval(() => {
    rotateImage();
  }, 5000);
}

export { createHomePage, rotateImage };
