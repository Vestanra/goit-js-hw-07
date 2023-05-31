import { galleryItems } from './gallery-items.js';
// Change code below this line

const ulElGallery = document.querySelector('.gallery');
ulElGallery.insertAdjacentHTML('beforeend', createImageGallery(galleryItems));
function createImageGallery(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
          return `
        <li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </li>`;
        })
      .join('');
};

ulElGallery.addEventListener('click', onImageClick);

function onImageClick(evt) {
  evt.preventDefault();

  if (!evt.target.classList.contains('gallery__image')) {
    return;
  };
  
  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`);
  instance.show();
 
  const divOpenModal = document.querySelector('.basicLightbox');
  divOpenModal.addEventListener('click', closeModal);
  
  if (divOpenModal) {
    window.addEventListener('keydown', onEscKeyPress);
  } 

  function closeModal() {
    instance.close();
    window.removeEventListener('keydown', onEscKeyPress);
  }

  function onEscKeyPress(evt) {
    if (evt.code === 'Escape') {
      closeModal();
    }
  }
}



