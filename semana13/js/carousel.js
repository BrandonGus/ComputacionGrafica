const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel img');
let index = 0;

function showImageAtIndex() {
    carouselImages.style.transform = `translateX(-${index * 100}%)`;
}

function showNextImage() {
    index = (index + 1) % images.length; // Va al principio después de la última imagen
    showImageAtIndex();
}

function showPreviousImage() {
    index = (index - 1 + images.length) % images.length; // Va al final después de la primera imagen
    showImageAtIndex();
}
