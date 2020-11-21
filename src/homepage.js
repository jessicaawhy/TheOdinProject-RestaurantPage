import { create } from './createElement';
import { images } from './images';

let currImgIndex = 1;
let intervalId;

function createHomePage() {
  const pageContainer = create({
    type: 'div', 
    innerHTML: '',
    attributes: {
      id: 'home-page'
    },
    classList: [],
    parentID: 'container',
  });

  const photoContainer = create({
    type: 'div', 
    innerHTML: '',
    attributes: {
      id: 'slider'
    },
    classList: ['photo-container'],
    parentElement: pageContainer,
  });

  const imageText = create({
    type: 'h1', 
    innerHTML: '',
    attributes: {
      id: 'slider-text'
    },
    classList: [],
    parentElement: photoContainer,
  });

  const dotContainer = create({
    type: 'div', 
    innerHTML: '',
    attributes: {
      id: 'dot-container'
    },
    classList: [],
    parentElement: pageContainer,
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

  for (let key in images) {
    const currentImage = create({
      type: 'img', 
      innerHTML: '',
      attributes: {
        id: `home-photo-${key}`,
        src: `./homepage-images/${key}.jpg`
      },
      classList: [],
      parentElement: photoContainer,
    });
    currentImage.style.display = 'none';

    const currentDot = create({
      type: 'a', 
      innerHTML: '',
      attributes: {
        id: `dot-${key}`,
        src: `./homepage-images/${key}.jpg`
      },
      classList: [],
      parentElement: dotContainer,
    });
    currentDot.addEventListener('click', clickImageDot);
  }

  const chefHeading = create({
    type: 'h2', 
    innerHTML: 'CHEF',
    attributes: {
      id: ''
    },
    classList: [],
    parentElement: mainContainer,
  });

  const chefImage = create({
    type: 'img', 
    innerHTML: '',
    attributes: {
      id: 'chef-image',
      src: 'chef.jpeg'
    },
    classList: [],
    parentElement: mainContainer,
  });
  
  const resHeading = create({
    type: 'h2', 
    innerHTML: 'RESERVATIONS',
    attributes: {
      id: ''
    },
    classList: [],
    parentElement: mainContainer,
  });
  
  const resText1 = create({
    type: 'p', 
    innerHTML: 'We are an intimate restaurant with only 12 seats. Last minute cancellations, changes in party size, affect us greatly. In order to stay true to the experience we provide every guest, we must enforce a strict cancellation policy.',
    attributes: {
      id: '',
    },
    classList: [],
    parentElement: mainContainer,
  });
  
  const resText2 = create({
    type: 'p', 
    innerHTML: 'Cancellations or changes in party size made within 48 hours of your reservation will incur an $165 per person charge. Thank you in advance for your patience and understanding. We look forward to seeing you soon.',
    attributes: {
      id: '',
    },
    classList: [],
    parentElement: mainContainer,
  });

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
