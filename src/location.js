function createLocationPage() {
  const container = document.getElementById('container');

  const pageContainer = document.createElement('div');
  pageContainer.style.display = "none";

  const photoContainer = document.createElement('div');
  const image = document.createElement('img');

  pageContainer.setAttribute('id', 'location-page');
  photoContainer.setAttribute('id', 'photo-container');
  
  container.appendChild(pageContainer);
  pageContainer.appendChild(photoContainer);
  photoContainer.appendChild(image);
  
  image.setAttribute('src', 'location.jpg')
  image.style.display = 'block';

  const locationContainer = document.createElement('div');
  locationContainer.setAttribute('id', 'location-container')
  pageContainer.appendChild(locationContainer);
  const header = document.createElement('h2');
  header.innerHTML = 'LOCATION';
  locationContainer.appendChild(header);

  let locationTextContainer = [
    '123 Fake Street  @ RestaurantProject',
  ]

  locationTextContainer.forEach(text => {
    const locationText = document.createElement('p');
    locationText.innerHTML = text;
    locationContainer.appendChild(locationText);
  })

  let mapContainer = document.createElement('div');
  mapContainer.setAttribute('id', 'map');
  pageContainer.appendChild(mapContainer);
}

export { createLocationPage };
