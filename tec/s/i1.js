document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.card');
    setTimeout(() => {
      cards.forEach((card, index) => {
        card.classList.add('animated');
        card.style.animationDelay = `${index * 0.3}s`;
      });
    }, 500);
  });
  
  let slideIndex = 0;

function changeSlide(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  const slides = document.querySelectorAll('.carousel-slide img');
  if (n >= slides.length) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex].style.display = 'block';
}