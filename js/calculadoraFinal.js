let num1 = "";
let num2 = "";
let esSegundoDigito = "0";

function mostrarEnDisplay(valor) {
  let elementoDisply = document.getElementById("id_display");
  elementoDisply.innerText = elementoDisply.innerText + valor;
  if (valor !== "+") {
    concatenarNumero(valor);
  } else {
    operacionSumar();
  }
}

function operacionSumar() {
  esSegundoDigito = "1";
}

function concatenarNumero(numero) {
  if (esSegundoDigito === "0") {
    num1 = num1 + numero;
  } else {
    num2 = num2 + numero;
  }
}

function sumar() {
  let numPrimero = parseFloat(num1);
  let numSegundo = parseFloat(num2);
  let elementoDisply = document.getElementById("id_display");
  elementoDisply.innerText = numPrimero + numSegundo;
}
