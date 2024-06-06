// El styles lo importamos aquí, ya se carga después al compilar todo
import "../scss/styles.scss";
// El styles lo importamos aquí, ya se carga después al compilar todo
import "../scss/styles.scss";

// BUSQUEDA DE ELEMENTOS
// DEL DOM CON SELECTORES
const inputEntrada = document.getElementById("entrada");
const botonEnviar = document.getElementById("send");

// DECLARACION DE FUNCIONES
function checarInputVacio(valor) {
  const entradaInputNoVacia = valor !== "";

  if (entradaInputNoVacia) {
    botonEnviar.disabled = false;
  } else {
    botonEnviar.disabled = true;
  }
}

function botonPulsado() {
  console.log("has clickado el boton");
  console.log("botonPulsado", inputEntrada.value);
  limpiarInput();
}

function limpiarInput() {
  inputEntrada.value = "";
  checarInputVacio(inputEntrada.value);
  const prf = document.createElement("p");
  prf.textContent = inputEntrada.value;
  document.querySelector("body").appendChild(prf);
}

// INVOCACION DE FUNCION PARA
// DESHABILITAR EL BOTON DE ENVIAR Y BORRAR
checarInputVacio(inputEntrada.value);

// CAPTURA DEL EVENTO DE TECLADO
// PARA LEER EL VALOR DEL INPUT
inputEntrada.addEventListener("keyup", function (evt) {
  console.log(evt.target.value);

  checarInputVacio(evt.target.value);
});

window.botonPulsado = botonPulsado;

botonEnviar.addEventListener("click", limpiarInput);
