import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
const galleryMarkup = document.querySelector('.gallery');

const galleryRef = galleryItems.map(({ preview, description, original }) => 
    `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
        </a>
    </div>`).join('');

galleryMarkup.insertAdjacentHTML('beforeend', galleryRef)

galleryMarkup.addEventListener('click', onImgClick)

function onImgClick(e) {
    e.preventDefault();

    if (e.target.nodeName !== 'IMG') {
        return;
    }

    const modal = basicLightbox.create(
        `<img src="${e.target.dataset.source}" width="800" height="600">`,

        {   onShow: () => window.addEventListener('keydown', onEscPress),
            onClose: () => window.removeEventListener('keydown', onEscPress),
        }
    );
    
    modal.show();

    function onEscPress(e) {   
        if (e.code === "Escape") {
            modal.close();
        }
    }
}
