import { galleryItems } from './gallery-items.js';

const listItemsContainer = document.querySelector('.gallery');

const createElMarkup = galleryItems
  .map(
    el =>
      `<div class="gallery__item">
        <a class="gallery__link" href="${el.original}">
          <img class="gallery__image"
          src="${el.preview}"
          data-source="${el.original}"
          alt="${el.description}"/>
        </a>
      </div>`,
  )
  .join('');

listItemsContainer.insertAdjacentHTML('beforeend', createElMarkup);

listItemsContainer.addEventListener('click', onClick);

let instance = '';

const option = {
  onShow: instance => {
    instance.element().querySelector('img').onclick = instance.close;
    window.addEventListener('keydown', pressEscButton, { once: true });
  },
  onClose: () => {
    window.removeEventListener('keydown', pressEscButton);
  },
};

function onClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    console.dir(event.target);
    return;
  }

  instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}">`,
    option,
  );
  instance.show();
}

function pressEscButton(event) {
  if (event.key === 'Escape') {
    instance.close();
    return;
  }
}
