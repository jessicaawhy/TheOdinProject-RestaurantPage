function createMenuPage() {
  const container = document.getElementById('container');

  const pageContainer = document.createElement('div');
  pageContainer.style.display = "none";

  const photoContainer = document.createElement('div');
  const image = document.createElement('img');
  const textContainer = document.createElement('h1');

  pageContainer.setAttribute('id', 'menu-page');
  photoContainer.setAttribute('id', 'photo-container');
  textContainer.setAttribute('id', 'text-container');
  
  container.appendChild(pageContainer);
  pageContainer.appendChild(photoContainer);
  pageContainer.appendChild(textContainer);
  photoContainer.appendChild(image);

  textContainer.innerHTML = 'THE INTERPLAY OF <br>EARTH AND SEA, <br>TRADITION AND EVOLUTION';

  image.setAttribute('src', 'menu.jpg')
  image.style.display = 'block';

  const menuContainer = document.createElement('div');
  menuContainer.setAttribute('id', 'menu-container')
  pageContainer.appendChild(menuContainer);
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
