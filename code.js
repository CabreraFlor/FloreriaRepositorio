document.addEventListener("DOMContentLoaded", function() {
    // Aca programo que se genere un numero random dentro del rango del 1 al 10 
    const numeroSecreto = Math.floor(Math.random() * 10) + 1;

    // Aca le pido al usuario que ingrese un numero del 1 al 10
    const intentoUsuario = prompt("¡Bienvenid@, si adivinas el número del 1 al 10 correctamente, te ganas un 30% de descuento en tu primera compra, suerte!");

    // Aca genero un alert en caso de que haya adivinado el número random.
    if (intentoUsuario !== null) {
        if (parseInt(intentoUsuario) === numeroSecreto) {
            alert("¡Felicidades! Adivinaste y ganaste un código de descuento para tu primera compra, hazle captura y envíala con tu consulta");
        } else {
            alert(`Lo siento, el número era ${numeroSecreto}. ¡Intentalo de nuevo la próxima vez!`);
        } //Aca genero un alert que muestre un mensaje que no era ese numero y que muestre cual era.
    } else {
        alert("Hasta la proxima");
    } // Aca genero un alert en caso de que haya cancelado elegir un numero.
});
