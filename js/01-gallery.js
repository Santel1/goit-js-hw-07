import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");
const galleryMarkup = createGalleryCards(galleryItems);

let instance;

galleryList.insertAdjacentHTML("beforeend", galleryMarkup);
galleryList.addEventListener("click", onClickGalleryCard);

function createGalleryCards(galleryItems) {
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
    .join("");
}

function onClickGalleryCard(evt) {
  evt.preventDefault();

  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }

  const originalSrc = evt.target.dataset.source;

  instance = basicLightbox.create(`
    <img src="${originalSrc}" width="800" height="600">
`);

  document.addEventListener("keydown", onModalClose);
  instance.show();
}

function onModalClose(evt) {
  if (evt.code === "Escape") {
    document.removeEventListener("keydown", onModalClose);

    instance.close();
  }
}
