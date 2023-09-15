import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector(".gallery");

const markup = galleryItems.map(img => 
    `<li class="gallery__item"><a class="gallery__link" href="${img.original}"><img
      class="gallery__image"
      src="${img.preview}"
      data-source="${img.original}"
      alt="${img.description}"
    />
  </a>
</li>`
).join("");
galleryList.insertAdjacentHTML("afterbegin", markup);

galleryList.addEventListener("click", handleClick);

let instance = null;

function handleClick(event) {
    event.preventDefault();

    if (!event.target.classList.contains("gallery__image")) {
        return;
    }
    const imgItem = event.target.getAttribute("data-source");
     instance = basicLightbox.create(`
    <img src="${imgItem}"/>
`);

    instance.show()
};

document.addEventListener("keydown", handleKeyPress);

function handleKeyPress(event) {
    if (event.key === "Escape") {
      instance.close(); 
    }
};
