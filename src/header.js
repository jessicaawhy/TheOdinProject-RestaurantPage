import { create } from './createElement';

function createHeader() {
  const content = document.getElementById('content');

  const header = create({
    type: 'div', 
    innerHTML: '',
    attributes: {
      id: 'header'
    },
    classList: [],
  });

  const logo = create({
    type: 'img', 
    innerHTML: '',
    attributes: {
      id: 'header-logo',
      src: 'blossom.png'
    },
    classList: [],
  });

  const linkContainer = create({
    type: 'div', 
    innerHTML: '',
    attributes: {
      id: 'header-links'
    },
    classList: [],
  });

  const container = create({
    type: 'div', 
    innerHTML: '',
    attributes: {
      id: 'container'
    },
    classList: [],
  });
  
  content.appendChild(header);
  header.appendChild(logo);
  header.appendChild(linkContainer);
  content.appendChild(container);
  
  const links = ['home', 'menu', 'location'];

  links.forEach(link => {
    const current = document.createElement('a');
    current.innerHTML = link.toUpperCase();
    linkContainer.appendChild(current);
  });
}

export { createHeader };
