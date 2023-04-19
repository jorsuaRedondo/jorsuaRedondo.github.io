// Evento para obtener el footer solo cuando se hace el evento scroll
let footer = document.querySelector("footer");
let tipoAnimal = document.getElementById("nombreR").value.trim();
let anotaciones = document.getElementById("anotaciones").value.trim();
let tipoAtencion = document.getElementById("tipo").value;
// Agregar un evento de desplazamiento al documento
window.addEventListener("scroll", function () {
  // Si el usuario ha llegado al final de la página
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    // Mostrar el footer
    footer.classList.add("show-footer");
  } else {
    // Ocultar el footer
    footer.classList.remove("show-footer");
  }
});

const toggleButton = document.querySelector(".toggle-button");
const navbar = document.querySelector(".navbar");

toggleButton.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

function validarFormulario() {
  // Obtener los valores de los campos del formulario
  let nombre = document.getElementById("nombre").value.trim();
  let correo = document.getElementById("correo").value.trim();
  let id = document.getElementById("id").value.trim();
  let nombreR = document.getElementById("nombreR").value;
  let otros = document.getElementById("otros").value.trim();
  let consulta = document.getElementById("consulta").value;
  let tipo = document.getElementById("tipo").value;
  let fecha = document.getElementById("fecha").value;
  let hora = document.getElementById("hora").value;
  let anotaciones = document.getElementById("anotaciones").value.trim();

  // Verificar que los campos obligatorios estén completos
  if (
    nombre === "" ||
    correo === "" ||
    id === "" ||
    consulta === "" ||
    tipo === "" ||
    fecha === "" ||
    hora === ""
  ) {
    alert("Por favor complete todos los campos obligatorios.");
    return;
  }

  // Verificar que el correo electrónico sea válido
  var correoExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!correoExp.test(correo)) {
    alert("Por favor ingrese un correo electrónico válido.");
    return;
  }

  // Verificar que el número de identificación sea válido
  var idExp = /^[0-9]+$/;
  if (!idExp.test(id)) {
    alert(
      "Por favor ingrese un número de identificación válido (solo números)."
    );
    return;
  }

  // Verificar que la profilaxis dental solo se aplique a gatos y perros
  if (tipo == "profilaxis" && nombreR !== "perro" && nombreR !== "gato") {
    alert("La profilaxis dental solo se puede realizar en gatos y perros.");
    return;
  }

  // Si se seleccionó "Otros", verificar que se haya ingresado un valor en el campo de texto correspondiente
  if (nombreR === "Otro" && otros === "") {
    alert(
      "Por favor indique qué tipo de animal es en el campo de texto correspondiente."
    );
    return;
  }

  // Si todo está bien, enviar el formulario
  alert("¡Su cita ha sido solicitada con éxito!");

  // Si todo está correcto, mostrar mensaje de éxito y enviar formulario

  return true;
}


function descargarComprobante(nombre, tipoAnimal, correo, identificacion, otroAnimal, tipoConsulta, tipoAtencion, fecha, hora, anotaciones) {
  const contenidoArchivo = `Nombre: ${nombre}
Correo electrónico: ${correo}
Identificación: ${identificacion}
Tipo de animal: ${tipoAnimal}${otroAnimal ? ` (${otroAnimal})` : ""}
Tipo de consulta: ${tipoConsulta}
Tipo de atención: ${tipoAtencion}
Fecha: ${fecha}
Hora: ${hora}
Anotaciones: ${anotaciones}`;

  const archivo = new Blob([contenidoArchivo], { type: "text/plain" });
  const urlArchivo = URL.createObjectURL(archivo);

  const enlaceDescarga = document.createElement("a");
  enlaceDescarga.href = urlArchivo;
  enlaceDescarga.download = "comprobante_cita.txt";
  enlaceDescarga.innerText = "Descargar comprobante";
  
  // Agregar el enlace al final del cuerpo del documento
  document.body.appendChild(enlaceDescarga);
  
  // Hacer clic en el enlace para descargar el archivo
  enlaceDescarga.click();

  // Remover el enlace después de completar la descarga del archivo
  setTimeout(() => {
    URL.revokeObjectURL(urlArchivo);
    document.body.removeChild(enlaceDescarga);
  }, 0);
}