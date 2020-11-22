import { create } from './createElement';

function createHeader() {
  const header = create({
    type: 'div', 
    innerHTML: '',
    attributes: {
      id: 'header'
    },
    classList: [],
    parentID: 'content',
  });

  const logo = create({
    type: 'img', 
    innerHTML: '',
    attributes: {
      id: 'header-logo',
      src: '../src/public/blossom.png'
    },
    classList: [],
    parentElement: header,
  });

  const linkContainer = create({
    type: 'div', 
    innerHTML: '',
    attributes: {
      id: 'header-links'
    },
    classList: [],
    parentElement: header,
  });

  const container = create({
    type: 'div', 
    innerHTML: '',
    attributes: {
      id: 'container'
    },
    classList: [],
    parentID: 'content',
  });
  
  const links = ['home', 'menu', 'location'];
  links.forEach(link => {
    const current = create({
      type: 'a', 
      innerHTML: link.toUpperCase(),
      attributes: {
        id: ''
      },
      classList: [],
      parentElement: linkContainer,
    });
  });
}

export { createHeader };
