import SimpleLightbox from "simplelightbox";
import { galleryItems } from './gallery-items.js';
import "simplelightbox/dist/simple-lightbox.min.css";

// Change code below this line

const insertPlace = document.querySelector(".gallery");

function makeStringMarkUp(imgItemsArr) {
    return imgItemsArr.map(imgItem => 
    `<a class="gallery__item" href="${imgItem.original}">
      <img
        class="gallery__image" src="${imgItem.preview}" alt="${imgItem.description}"
      />
    </a>`).join("");
}
const stringMarkUp = makeStringMarkUp(galleryItems);

insertPlace.insertAdjacentHTML('beforeend', stringMarkUp);

insertPlace.addEventListener("click", event => {
    event.preventDefault();
    if(event.target.nodeName !== "IMG") {
        return;
    }
    let gallery = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: '250',
    });
    gallery.on('show.simplelightbox');
})