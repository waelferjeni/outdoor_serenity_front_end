const images = [
    'favicon.png',
    'image.jpg',
    'recherche.png',
    'image4.jpg'
];

let currentIndex = 0;

const carouselImage = document.getElementById('carouselImage');

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    carouselImage.src = images[currentIndex];
}

setInterval(changeImage, 3000); // Change image every 3 seconds
