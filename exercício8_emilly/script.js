//Emilly Vilela de Souza
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("carousel-slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 3000); // Muda a imagem a cada 3 segundos
}

function changeSlide(n) {
  slideIndex += n;
  if (slideIndex > slides.length) {slideIndex = 1}
  if (slideIndex < 1) {slideIndex = slides.length}
  showSlides();
}

document.querySelector('.prev').addEventListener('click', function() {
  changeSlide(-1);
});

document.querySelector('.next').addEventListener('click', function() {
  changeSlide(1);
});



