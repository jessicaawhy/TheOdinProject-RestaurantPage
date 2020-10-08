import {createAndAppend, setElementHtmlText} from './createElement';

function createMenuPage() {
  createAndAppend('h3', 'lunch-items', 'content');
  setElementHtmlText('lunch-items', 'Lunch Items');

  createAndAppend('h5', 'lunch-item-1', 'lunch-items');
  setElementHtmlText('lunch-item-1', 'Salmon Bibimbap');

  createAndAppend('h5', 'lunch-item-2', 'lunch-items');
  setElementHtmlText('lunch-item-2', 'Tteokbokki');

  createAndAppend('h3', 'dinner-items', 'content');
  setElementHtmlText('dinner-items', 'Dinner Items');

  createAndAppend('h3', 'dinner-items', 'content');
  setElementHtmlText('dinner-items', 'Dinner Items');

  createAndAppend('h5', 'dinner-item-1', 'dinner-items');
  setElementHtmlText('dinner-item-1', 'Shin Ramen');

  createAndAppend('h5', 'dinner-item-2', 'dinner-items');
  setElementHtmlText('dinner-item-2', 'Gamjatang');

}

export {createMenuPage};
