// Agregar un event listener cuando el contenido de la página se ha cargado
document.addEventListener("DOMContentLoaded", function () {
    // Obtener el botón de enviar por su ID
    var botonEnviar = document.getElementById("botonEnviar");

    // Agregar un event listener para el clic en el botón
    botonEnviar.addEventListener("click", function () {
        // Llamada a la función que realiza la acción deseada al hacer clic en Enviar
        enviarFormulario();
    });
});

// Función que se ejecuta al hacer clic en el botón Enviar
function enviarFormulario() {
    // Aquí puedes realizar acciones adicionales al hacer clic en el botón Enviar
    console.log("Botón Enviar clicado");

    // Puedes agregar más lógica aquí según tus necesidades
}

