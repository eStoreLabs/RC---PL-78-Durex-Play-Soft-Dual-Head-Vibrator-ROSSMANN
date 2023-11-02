const carousel = document.querySelector('.es-carousel');
const slides = Array.from(carousel.children);
const prevArrow = document.querySelector('.es-prev-arrow');
const nextArrow = document.querySelector('.es-next-arrow');
let slideWidth = slides[0].getBoundingClientRect().width;
let currentIndex = 0;

// Set initial position of slides
slides.forEach((slide, index) => {
  slide.style.left = `${slideWidth * index}px`;
});
// Function to move to a specific slide
const moveToSlide = (index) => {
    carousel.style.transform = `translateX(-${slideWidth * index}px)`;
  };
// Function to move to the next slide
const moveToNextSlide = () => {
    currentIndex++;

    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
    
    carousel.style.transition = 'transform 0.5s ease-in-out';
    moveToSlide(currentIndex);
};

// Function to move to the previous slide
const moveToPrevSlide = () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    carousel.style.transition = 'transform 0.5s ease-in-out';
    moveToSlide(currentIndex);
};
// Automatically change slides every 3 seconds
//setInterval(moveToNextSlide, 3000);

// Event listeners for arrow buttons
nextArrow.addEventListener('click', moveToNextSlide);
prevArrow.addEventListener('click', moveToPrevSlide);

// Swipe gesture support for mobile devices
let touchStartX = 0;
let touchEndX = 0;

carousel.addEventListener('touchstart', (e) => {
  touchStartX = e.touches[0].clientX;
});

carousel.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].clientX;
  handleSwipeGesture();
});

const handleSwipeGesture = () => {
  if (touchEndX < touchStartX) {
    moveToNextSlide();
  } else if (touchEndX > touchStartX) {
    moveToPrevSlide();
  }
};