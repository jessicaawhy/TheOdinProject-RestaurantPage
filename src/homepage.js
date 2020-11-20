import { images } from './images';

let currImgIndex = 1;
let intervalId;

function createHomePage() {
  const container = document.getElementById('container')

  const pageContainer = document.createElement('div');
  const photoContainer = document.createElement('div');
  const textContainer = document.createElement('h1');
  const dotContainer = document.createElement('div');

  pageContainer.setAttribute('id', 'home-page');
  photoContainer.setAttribute('id', 'photo-container');
  textContainer.setAttribute('id', 'text-container');
  dotContainer.setAttribute('id', 'dot-container');

  container.appendChild(pageContainer);
  pageContainer.appendChild(photoContainer);
  pageContainer.appendChild(textContainer);
  pageContainer.appendChild(dotContainer);

  for (let key in images) {
    let currImg = document.createElement('img');
    currImg.setAttribute('id', `home-photo-${key}`);
    currImg.setAttribute('src', `./homepage-images/${key}.jpg`);
    photoContainer.appendChild(currImg);

    let currDot = document.createElement('a');
    currDot.setAttribute('id', `dot-${key}`);
    currDot.addEventListener('click', (e) => {
      clearInterval(intervalId);
      rotateImage(e);
      intervalId = setInterval(() => {
        rotateImage();
      }, 5000);
    });
    dotContainer.appendChild(currDot);
  }

  const image = document.getElementById('home-photo-1');
  image.style.display = 'block';
  const text = document.getElementById('text-container');
  text.innerHTML = images[1]['text'];
  const dot = document.getElementById('dot-1')
  dot.style.backgroundColor = 'black';

  intervalId = setInterval(() => {
    rotateImage();
  }, 5000);

  const chefContainer = document.createElement('div');
  chefContainer.setAttribute('id', 'chef-container')
  pageContainer.appendChild(chefContainer);
  const chef = document.createElement('h2');
  chef.innerHTML = 'CHEF';
  chefContainer.appendChild(chef);
  const chefImage = document.createElement('img');
  chefImage.setAttribute('src', 'chef.jpeg');
  chefImage.setAttribute('id', 'chef-image');
  chefContainer.appendChild(chefImage);

  const resContainer = document.createElement('div');
  resContainer.setAttribute('id', 'res-container')
  pageContainer.appendChild(resContainer);
  const reservation = document.createElement('h2');
  reservation.innerHTML = 'RESERVATIONS';
  resContainer.appendChild(reservation);
  const reservationText1 = document.createElement('p');
  reservationText1.innerHTML = 'We are an intimate restaurant with only 12 seats. Last minute cancellations, changes in party size, affect us greatly. In order to stay true to the experience we provide every guest, we must enforce a strict cancellation policy.'
  resContainer.appendChild(reservationText1);
  const reservationText2 = document.createElement('p');
  reservationText2.innerHTML = 'Cancellations or changes in party size made within 48 hours of your reservation will incur an $165 per person charge. Thank you in advance for your patience and understanding. We look forward to seeing you soon.'
  resContainer.appendChild(reservationText2);
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
  const text = document.getElementById('text-container');
  text.innerHTML = images[currImgIndex]['text'];
}

export { createHomePage, rotateImage };
