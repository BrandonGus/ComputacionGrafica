const images = document.querySelectorAll('.carousel img');
let index = 0;

function updateActiveImage() {
    images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });
}

function showNextImage() {
    index = (index + 1) % images.length; // Avanza al siguiente índice y vuelve al inicio si está al final
    updateActiveImage();
}

function showPreviousImage() {
    index = (index - 1 + images.length) % images.length; // Retrocede y vuelve al final si está al principio
    updateActiveImage();
}

// Inicializa mostrando la primera imagen
updateActiveImage();