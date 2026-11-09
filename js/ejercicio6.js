let formulario = document.getElementById("formulario");
let mensaje = document.getElementById("mensaje");
let tablaVentas = document.getElementById("tablaVentas");
let totalVendidosTexto = document.getElementById("totalVendidos");
let promedioTexto = document.getElementById("promedio");
let mejorDiaTexto = document.getElementById("mejorDia");
let diasAltosTexto = document.getElementById("diasAltos");

formulario.addEventListener("submit", procesarFormulario);

function procesarFormulario(evento) {
    evento.preventDefault();

    let total = 0;
    let diasAltos = 0;
    let ventasBajas = 0;
    let mejorDia = 0;
    let huboInvalidas = false;
    let tablaDias = document.getElementById("tablaDias");

    for (let dia = 1; dia <= 7; dia++) {
        let venta = parseFloat(document.getElementById("venta" + dia).value);

        if (!(Number.isFinite(venta) && venta >= 0)) {
            venta = 0;
            huboInvalidas = true;
        }

        total += venta;

        if (venta > 300000) {
            diasAltos++;
        }

        if (venta > ventasBajas) {
            ventasBajas = venta;
            mejorDia = dia;
        }

        let fila = document.createElement("tr");
        fila.innerHTML = "<td>" + dia + "</td><td>$ " + venta.toLocaleString("es-CO") + "</td>";
        tablaDias.appendChild(fila);
    }

    let promedio = total / 7;

    totalVendidosTexto.textContent = "$ " + total.toLocaleString("es-CO");
    promedioTexto.textContent = "$ " + promedio.toLocaleString("es-CO", { maximumFractionDigits: 0 });
    mejorDiaTexto.textContent = "Día " + mejorDia;
    diasAltosTexto.textContent = diasAltos;

    if (promedio >= 200000) {
        mensaje.textContent = "Rendimiento excelente.";
    } else if (promedio >= 100000) {
        mensaje.textContent = "Rendimiento aceptable.";
    } else {
        mensaje.textContent = "Rendimiento bajo.";
    }

    if (huboInvalidas) {
        mensaje.textContent += " Las ventas negativas o inválidas se contaron como 0.";
    }
}