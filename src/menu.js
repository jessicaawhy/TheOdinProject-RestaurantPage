function createMenuPage() {
  const container = document.getElementById('container');

  const photoContainer = document.createElement('div');
  photoContainer.setAttribute('id', 'photo-container');
  container.appendChild(photoContainer);

  const textContainer = document.createElement('h1');
  textContainer.setAttribute('id', 'text-container');
  textContainer.innerHTML = 'THE INTERPLAY OF <br>EARTH AND SEA, <br>TRADITION AND EVOLUTION';
  container.appendChild(textContainer);

  const image = document.createElement('img');
  image.setAttribute('src', 'menu.jpg')
  image.style.display = 'block';
  photoContainer.appendChild(image);

  const menuContainer = document.createElement('div');
  menuContainer.setAttribute('id', 'menu-container')
  container.appendChild(menuContainer);
  const header = document.createElement('h2');
  header.innerHTML = 'MENU';
  menuContainer.appendChild(header);

  let menuTextContainer = [
    'We offer an 18 course omakase menu with the opportunity to indulge in extra courses. Our menu changes in harmony with nature as we seek to creatively reveal the essence of each ingredient at its peak.',
    'Every ingredient is meticulously sourced from the best purveyors in the world. About 90% of our fish comes from the world famous Toyosu Market in Japan with the rest coming from specialty purveyors.',
    'Each course is a complete composition woven into a menu that tells a unique story through technique, tradition, and evolution.',
    'The price for our omakase is $169 per person.'
  ]

  menuTextContainer.forEach(text => {
    const menuText = document.createElement('p');
    menuText.innerHTML = text;
    menuContainer.appendChild(menuText);
  })
}

export { createMenuPage };
