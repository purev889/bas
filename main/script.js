document.addEventListener('DOMContentLoaded', () => {
    const galleryImageWrapper = document.querySelector('.gallery-image-wrapper');
    const galleryImages = document.querySelectorAll('.gallery-image');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');

    if (!galleryImageWrapper || !galleryImages.length || !prevButton || !nextButton) {
        // Required elements not found, do nothing
        return;
    }

    let currentIndex = 0;
    const totalImages = galleryImages.length;

    function updateGallery() {
        const offset = -currentIndex * 100;
        galleryImageWrapper.style.transform = `translateX(${offset}%)`;
    }

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalImages;
        updateGallery();
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        updateGallery();
    });

    updateGallery();
});