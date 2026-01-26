const leftArrow = document.querySelector('.left_arrow');
const rightArrow = document.querySelector('.right_arrow');
const slider = document.querySelector('.Hero_slider');
const cards = document.querySelectorAll('.card');

let currentIndex = 0;
const cardWidth = 23 + 1; // width + margin in rem approx

// Function to move slider
function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * (cardWidth)}rem)`;
    slider.style.transition = 'transform 0.5s ease';
}

// Left arrow click
leftArrow.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = cards.length - 1; // loop back to last card
    }
    updateSlider();
});

// Right arrow click
rightArrow.addEventListener('click', () => {
    if (currentIndex < cards.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // loop back to first card
    }
    updateSlider();
});
const toTopBtn = document.querySelector('.to_top');

toTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});