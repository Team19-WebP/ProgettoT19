let slideIndex = 1;
// Permette di andare alla foto successiva e precedente
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}
/** Questa funzione fa scorrere tra le immagini della galleria */
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("singleImage");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    if(slides[slideIndex-1]!==undefined){slides[slideIndex-1].style.display = "block";}
    if(dots[slideIndex-1]!==undefined){dots[slideIndex-1].className += " active";}
}
showSlides(slideIndex);
