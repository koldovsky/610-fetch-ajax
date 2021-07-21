const slides = [
    'img/baby-yoda.svg',
    'img/girl.svg',
    'img/banana.svg',
    'img/viking.svg'
]

let currentSlide = 0;

/*
document.getElementById();
document.getElementsByClassName();
document.getElementsByTagName();
document.querySelector();
document.querySelectorAll();
*/

function showCurrentSlide() {
    const slideTarget = document.querySelector('.current-slide');
    // slideTarget.classList.add('border');
    slideTarget.src = slides[currentSlide];
}

function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) currentSlide = 0;
    showCurrentSlide();
}

function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) currentSlide = slides.length - 1;
    showCurrentSlide();
}

document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

showCurrentSlide();
setInterval(nextSlide, 3000);
