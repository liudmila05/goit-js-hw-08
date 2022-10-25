// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line


import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

const newLightBox = document.querySelector(".gallery");
const images = galleryItems
    .map(
        (image) =>
            `<a class="gallery__item" href="${image.original}">
                <img class="gallery__image"    
                src="${image.preview}"
                alt="${image.description}"
                title="${image.description}"
                />
            </a>`
    )
    .join("");

newLightBox.innerHTML = images;

new SimpleLightbox(".gallery a", { captionDelay: 250 });

console.log(galleryItems);
