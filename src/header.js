function createHeader() {
  const content = document.getElementById('content');
  const header = document.createElement('div');
  const logo = document.createElement('img');
  const linkContainer = document.createElement('div');
  const container = document.createElement('div');

  header.setAttribute('id', 'header');
  linkContainer.setAttribute('id', 'header-links');
  logo.setAttribute('id', 'header-logo');
  logo.setAttribute('src', 'blossom.png');
  container.setAttribute('id', 'container');
  
  const links = ['home', 'menu', 'location'];
  links.forEach(link => {
    const current = document.createElement('a');
    current.innerHTML = link.toUpperCase();
    linkContainer.appendChild(current);
  });
  
  content.appendChild(header);
  header.appendChild(logo);
  header.appendChild(linkContainer);
  content.appendChild(container);
}

export { createHeader };
