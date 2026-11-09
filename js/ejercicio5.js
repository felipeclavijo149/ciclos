let formulario = document.getElementById("formulario");
let mensaje = document.getElementById("mensaje");
let intentosTexto = document.getElementById("intentos");
let registro = document.getElementById("registro");

formulario.addEventListener("submit", procesarFormulario);

function procesarFormulario(evento) {
    evento.preventDefault();

    let contrasenaCorrecta = "Sena2026";
    let intentos = 0;
    let maxIntentos = 3;
    let accesoConcedido = false;
    registro.innerHTML = "";

    while (intentos < maxIntentos && accesoConcedido === false) {
        let contrasenaIngresada = document.getElementById("registro").value;

        intentos++;

        let fila = document.createElement("li");

        if (contrasenaIngresada === contrasenaCorrecta) {
            accesoConcedido = true;
            fila.textContent = "Intento " + intentos + ": correcta";
        } else {
            fila.textContent = "Intento " + intentos + ": incorrecta";
        }

        registro.appendChild(fila);
    }

    intentosTexto.textContent = intentos;

    mensaje.textContent = accesoConcedido
        ? "Bienvenido. Acceso concedido."
        : "Acceso bloqueado. Se agotaron los intentos.";
}