const images = {
  1: {
    text: 'WE ARE DEVOTED <br>TO CRAFTING MOMENTS <br>THAT TRANSCEND',
  },

  2: {
    text: 'AND HOLD THE POWER <br>TO EVOKE LASTING MEMORIES.',
  },

  3: {
    text: 'IN EVERY TECHNIQUE <br>AND INGREDIENT <br>WE HONOR THE PAST <br>AND CONTRIBUTE TO',
  },

  4: {
    text: 'THE EVOLUTION OF A <br>SACRED TRADITION',
  },

  5: {
    text: 'ONE CHEF AND FOUR GUESTS,',
  },

  6: {
    text: 'FORGE A BOND AND EXPERIENCE',
  },

  7: {
    text: 'THE INTIMATE CONNECTION <br>BETWEEN EARTH AND SEA.',
  },
}

let currImgIndex = 1;
let intervalId;

function createHomePage() {
  currImgIndex = 1;
  const container = document.getElementById('container')

  const photoContainer = document.createElement('div');
  photoContainer.setAttribute('id', 'photo-container');
  container.appendChild(photoContainer);

  const textContainer = document.createElement('h1');
  textContainer.setAttribute('id', 'text-container');
  container.appendChild(textContainer);

  const dotContainer = document.createElement('div');
  dotContainer.setAttribute('id', 'dot-container');
  container.appendChild(dotContainer);

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
  container.appendChild(chefContainer);
  const chef = document.createElement('h2');
  chef.innerHTML = 'CHEF';
  chefContainer.appendChild(chef);
  const chefImage = document.createElement('img');
  chefImage.setAttribute('src', 'chef.jpeg');
  chefImage.setAttribute('id', 'chef-image');
  chefContainer.appendChild(chefImage);

  const resContainer = document.createElement('div');
  resContainer.setAttribute('id', 'res-container')
  container.appendChild(resContainer);
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

function rotateImage(e) {
  const currImage = document.getElementById(`home-photo-${currImgIndex}`);
  currImage.style.display = 'none';
  const currDot = document.getElementById(`dot-${currImgIndex}`);
  currDot.style.backgroundColor = 'lightgray';

  if (e) {
    currImgIndex = Number(e.target.id.slice(4));
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

function removeContainerElements() {
  const container = document.getElementById('container');
  clearInterval(intervalId);
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

export { createHomePage, removeContainerElements };
