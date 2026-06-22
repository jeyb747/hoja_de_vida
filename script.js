const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

e.preventDefault();

alert("Gracias por tu mensaje. Pronto me pondré en contacto contigo.");

form.reset();

});