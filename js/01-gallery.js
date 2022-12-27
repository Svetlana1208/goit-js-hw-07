import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

gallery.insertAdjacentHTML('beforeend', galleryMarkup);
gallery.addEventListener ('click', stopDefAction);
gallery.addEventListener('click', onImageClick);

function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
        <a class="gallery__link" 
        href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
        </a>
        </div>
        `;
        })
        .join('');
}

function stopDefAction(evt) {
    evt.preventDefault();
}

function onImageClick(evt) {
    if(!evt.target.classList.contains('gallery__image')) {
        return;}
    const currentImage = evt.target.dataset.source;
    const instance = basicLightbox.create(`
    <img src=${currentImage} width="800" height="600">
`);

instance.show()}