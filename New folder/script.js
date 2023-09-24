// Smooth scroll function
function smoothScroll(targetId) {
    const targetElement = document.getElementById(targetId);
    const offset = 80;  // Adjust the offset as needed

    if (targetElement) {
        const targetPosition = targetElement.offsetTop - offset;
        window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
        });
    }
}

// Image slider
let currentImageIndex = 0;
const images = ["image1.jpg", "image2.jpg", "image3.jpg"]; // Replace with your image paths

function showImage(index) {
    const imageContainer = document.getElementById("image-slider");
    imageContainer.src = images[index];
    currentImageIndex = index;
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
}
