let formulario = document.getElementById("formulario");
let mensaje = document.getElementById("mensaje");
let detalleEmpleados = document.getElementById("detalleEmpleados");
let cantidadEmpleadosTexto = document.getElementById("cantidadEmpleados");
let totalHorasTexto = document.getElementById("totalHoras");
let totalNominaTexto = document.getElementById("totalNomina");

formulario.addEventListener("submit", procesarFormulario);

function procesarFormulario(evento) {
    evento.preventDefault();

    let empleados = document.getElementById("empleadosEntrada").value.trim().split("\n");
    let cantidad = empleados.length;
    let totalNomina = 0;
    let totalHoras = 0;
    let contras = 0;

    detalleEmpleados.innerHTML = "";

    for (let i = 0; i < cantidad; i++) {
        let datos = empleados[i].split(",");
        let horas = parseFloat(datos[0]);
        let salario = parseFloat(datos[1]);
        let valorHora = parseFloat(datos[2]);

        let fila = document.createElement("tr");

        if (Number.isNaN(horas) || Number.isNaN(salario) || horas <= 0 || salario <= 0) {
            fila.textContent = "Empleado " + (i + 1) + ": datos inválidos";
        } else {
            let pago = 0;

            if (horas > 40) {
                pago = 40 * valorHora + (horas - 40) * valorHora * 1.25;
                contras++;
            } else {
                pago = horas * valorHora;
            }

            totalNomina += pago;
            totalHoras += horas;

            fila.textContent = "Empleado " + (i + 1) + ": $ " + pago.toLocaleString("es-CO");
        }

        detalleEmpleados.appendChild(fila);
    }

    cantidadEmpleadosTexto.textContent = cantidad;
    contrasTexto.textContent = contras;
    totalNominaTexto.textContent = "$ " + totalNomina.toLocaleString("es-CO");
    mensaje.textContent = "Nómina calculada. Los registros inválidos no se sumaron.";
}