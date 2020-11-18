function createLocationPage() {
  const container = document.getElementById('container');

  const photoContainer = document.createElement('div');
  photoContainer.setAttribute('id', 'photo-container');
  container.appendChild(photoContainer);

  const image = document.createElement('img');
  image.setAttribute('src', 'location.jpg')
  image.style.display = 'block';
  photoContainer.appendChild(image);

  const locationContainer = document.createElement('div');
  locationContainer.setAttribute('id', 'location-container')
  container.appendChild(locationContainer);
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
  container.appendChild(mapContainer);
}

export { createLocationPage };
