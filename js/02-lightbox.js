import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");
const galleryMarkup = createGalleryCards(galleryItems);

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
            alt="${description}"
            />
        </a>
    </li>`;
    })
    .join("");
}

function onClickGalleryCard(evt) {
  evt.preventDefault();

  const gallery = new SimpleLightbox(".gallery a", {
    captions: true,
    captionsData: "alt",
    captionDelay: 250,
  });
}
