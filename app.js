
//selecionar input en el DOM
const inputRojo = document.getElementById("rojo");
const inputVerde = document.getElementById("verde");
const inputAzul = document.getElementById("azul");

//Seleccionar texto o etiqueta p del DOM
const textoRojo = document.getElementById("texto-rojo");
const textoVerde = document.getElementById("texto-verde");
const textoAzul = document.getElementById("texto-azul");

//extraer valor del input y asignarlo a una variable
    let rojo = inputRojo.value;
    let verde = inputVerde.value;
    let azul = inputAzul.value;


//actualizar texto parrafos
textoRojo.textContent = rojo;
textoVerde.textContent = verde;
textoAzul.textContent = azul;

//crear función para actualizar el color del range 

function actualizarColor (rojo, verde, azul) {
    const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;
    document.body.style.backgroundColor = colorRGB;
}

//actualizar color rojo
inputRojo.addEventListener('change', (e) => {
    rojo = e.target.value;
    textoRojo.textContent = rojo;
    actualizarColor(rojo, verde, azul);
});

//actualizar color verde
inputVerde.addEventListener('change', (e) => {
    verde = e.target.value
    textoVerde.textContent = verde;
    actualizarColor(rojo, verde, azul);
});

//actualizar color rojo
inputAzul.addEventListener('change', (e) => {
    azul = e.target.value;
    textoAzul.textContent = azul;
    actualizarColor(rojo, verde, azul);
});

