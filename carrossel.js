// TIMELINE CARROSSEL
const slides = document.querySelectorAll('.fade-slide');
const next = document.getElementById('next');
const prev = document.getElementById('prev');

let index = 0;
let autoPlayInterval;
let startX = 0;
let endX = 0;

function showSlide(i) {
  slides.forEach((slide, idx) => {
    slide.classList.toggle('active', idx === i);
  });
}

function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

function prevSlide() {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
}

// Botões
next.addEventListener('click', () => {
  nextSlide();
  restartAutoPlay();
});

prev.addEventListener('click', () => {
  prevSlide();
  restartAutoPlay();
});

// Auto-play
function startAutoPlay() {
  autoPlayInterval = setInterval(() => {
    nextSlide();
  }, 4500);
}

function restartAutoPlay() {
  clearInterval(autoPlayInterval);
  startAutoPlay();
}

startAutoPlay();

// Swipe Mobile
const carousel = document.getElementById('carousel');

carousel.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

carousel.addEventListener('touchend', (e) => {
  endX = e.changedTouches[0].clientX;
  handleSwipe();
});

function handleSwipe() {
  const diff = startX - endX;

  if (Math.abs(diff) > 50) {
    if (diff > 0) {
      nextSlide();
    } else {
      prevSlide();
    }
    restartAutoPlay();
  }
}