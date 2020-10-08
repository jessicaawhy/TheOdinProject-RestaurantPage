import {createAndAppend, setElementHtmlText} from './createElement';

function createContactPage() {
  createAndAppend('h3', 'directions', 'content');
  setElementHtmlText('directions', 'Directions');
  createAndAppend('h4', 'directions-content', 'content');
  setElementHtmlText('directions-content', 'Some information about how to get there');


  createAndAppend('h3', 'phone-label', 'content');
  setElementHtmlText('phone-label', 'Phone');
  createAndAppend('h4', 'phone-content', 'phone-label');
  setElementHtmlText('phone-content', '(xxx) xxx-xxxx');

  createAndAppend('h3', 'email-label', 'content');
  setElementHtmlText('email-label', 'Email');
  createAndAppend('h4', 'email-content', 'email-label');
  setElementHtmlText('email-content', 'jessica@yummyyummy.com');
}

export {createContactPage};
