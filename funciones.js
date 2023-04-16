// Evento para obtener el footer solo cuando se hace el evento scroll
var footer = document.querySelector("footer");

// Agregar un evento de desplazamiento al documento
window.addEventListener("scroll", function() {
  // Si el usuario ha llegado al final de la página
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    // Mostrar el footer
    footer.classList.add("show-footer");
  } else {
    // Ocultar el footer
    footer.classList.remove("show-footer");
  }
});