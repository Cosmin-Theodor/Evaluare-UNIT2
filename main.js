let slideIndex = 0;
let slides, interval;

function start() {
    slides = document.getElementsByClassName("slide");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[0].style.display = "block";

    startSlides();
}

function startSlides() {
    interval = setInterval(() => {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slideIndex++;
        if (slideIndex >= slides.length) {
            slideIndex = 0;
        }

        slides[slideIndex].style.display = "block";
    }, 3000);
}
