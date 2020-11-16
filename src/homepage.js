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

function createHomePage() {
  const content = document.getElementById('content');

  const container = document.createElement('div');
  container.setAttribute('id', 'container');
  content.appendChild(container);

  const photoContainer = document.createElement('div');
  photoContainer.setAttribute('id', 'photo-container');
  container.appendChild(photoContainer);

  const textContainer = document.createElement('h1');
  textContainer.setAttribute('id', 'text-container');
  container.appendChild(textContainer);

  for (let key in images) {
    let currImg = document.createElement('img');
    currImg.setAttribute('id', `home-photo-${key}`);
    currImg.setAttribute('src', `./homepage-images/${key}.jpg`);
    photoContainer.appendChild(currImg);
  }

  const image = document.getElementById('home-photo-1');
  image.style.display = 'block';
  const text = document.getElementById('text-container');
  text.innerHTML = images[1]['text'];
}

export { createHomePage, images };
