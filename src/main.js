
import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const input = form.elements['search-text'];

form.addEventListener('submit', async event => {
  event.preventDefault();
  const query = input.value.trim();

  if (query === '') {
    iziToast.warning({
      message: 'Please enter a search term!',
      position: 'topRight',
    });
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight',
            backgroundColor: '#ef4040',
            messageColor: '#fff',
        });
        return;
      }
      createGallery(data.hits);
    })
    .catch(error => {
      iziToast.error({
        message: 'Oops! Something went wrong. Please try again.',
        position: 'topRight',
      });
    })
    .finally(() => {
      hideLoader();
    });
});
