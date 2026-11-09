let fromAhorro = document.getElementById("formAhorro");
let listaAhorro = document.getElementById("resultadoAhorro");
fromAhorro.addEventListener("submit", calcularAhorro);

function calcularAhorro(event) {
    event.preventDefault();
    let ahorro = parseFloat(document.getElementById("ahorroMensual").value);
    let valorMeta = parseFloat(document.getElementById("meta").value);
    let acomulado = 0;
    let meses = 0;

    if (ahorro <= 0 || valorMeta <= 0) {
        alert(" Ingrese valores positivos para el ahorro mensual y la meta.");
        return;
    }

    while (acomulado < valorMeta) {
        acomulado += ahorro;
        meses++;
    }

    resultadoAhorro.textContent = `Necesitas ${meses} meses para alcanzar tu meta de ahorro de ${valorMeta}.`;
}