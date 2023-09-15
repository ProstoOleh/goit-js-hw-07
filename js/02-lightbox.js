import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector(".gallery");

const markup = galleryItems.map(img => 
    `<li class="gallery__item"><a class="gallery__link" href="${img.original}"><img
      class="gallery__image"
      src="${img.preview}"
      alt="${img.description}"
    />
  </a>
</li>`
).join("");
galleryList.insertAdjacentHTML("afterbegin", markup);

const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionType: "attr",
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
