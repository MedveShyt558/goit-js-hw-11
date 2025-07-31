
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      img => `
        <li class="gallery-item">
          <a href="${img.largeImageURL}">
            <img src="${img.webformatURL}" alt="${img.tags}" class="gallery-img" />
          </a>
          <div class="info">
            <p>"<span class="info-title">Likes </span> ${img.likes}"</p>
            <p>"<span class="info-title">Views </span> ${img.views}"</p>
            <p>"<span class="info-title">Comments</span> ${img.comments}"</p>
            <p>"<span class="info-title">Downloads</span> ${img.downloads}"</p>
          </div>
        </li>
      `
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.classList.add('is-visible');
}

export function hideLoader() {
  loader.classList.remove('is-visible');
}
