import { galleryItems } from './gallery-items.js';

const galleryListMarkup = document.querySelector('.gallery');
const galleryImages = createElMarkup(galleryItems);

galleryListMarkup.insertAdjacentHTML('beforeend', galleryImages);

function createElMarkup(items) {
  return items
    .map(
      el =>
        `<li><a class="gallery__item" href="${el.original}">
        <img class="gallery__image" src="${el.preview}" alt="${el.description}" /> 
        </a></li>`,
    )
    .join('');
}

const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});
