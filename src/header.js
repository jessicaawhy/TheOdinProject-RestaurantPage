function createHeader() {
  const content = document.getElementById('content');

  const header = document.createElement('div');
  header.setAttribute('id', 'header');
  content.appendChild(header);

  const logo = document.createElement('img');
  logo.setAttribute('id', 'header-logo');
  logo.setAttribute('src', 'blossom.png');
  header.appendChild(logo);

  const linkContainer = document.createElement('div');
  linkContainer.setAttribute('id', 'link-container');
  header.appendChild(linkContainer);

  const links = ['home', 'menu', 'location'];
  links.forEach(link => {
    const current = document.createElement('a');
    current.innerHTML = link.toUpperCase();
    linkContainer.appendChild(current);
  });
}

export { createHeader };
