document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.card');
    setTimeout(() => {
        cards.forEach((card, index) => {
            card.classList.add('animated');
            card.style.animationDelay = `${index * 0.3}s`;
        });
    }, 500);

    showSlides(slideIndex);
});
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
    slides.forEach(slide => slide.style.display = 'none');
    slides[slideIndex].style.display = 'block';
}
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.card');
    setTimeout(() => {
        cards.forEach((card, index) => {
            card.classList.add('animated');
            card.style.animationDelay = `${index * 0.3}s`;
        });
    }, 500);

    showSlides(slideIndex);

    // Função de pesquisa
    document.getElementById('myInput').addEventListener('input', search);
});

function search() {
    const input = document.getElementById('myInput').value.toLowerCase();
    const items = document.querySelectorAll('#myItems li');

    items.forEach(item => {
        if (item.textContent.toLowerCase().includes(input)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });

    // Mostrar a lista de itens
    document.getElementById('myItems').style.display = 'block';
}

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
    slides.forEach(slide => slide.style.display = 'none');
    slides[slideIndex].style.display = 'block';
}
