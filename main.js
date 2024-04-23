//declaracion de valores a usar
const displayValue = document.querySelector("#value");
const numberOne = document.querySelector("#uno");
const numberTwo = document.querySelector("#dos");
const numberThree = document.querySelector("#tres");
const numberFour = document.querySelector("#cuatro");
const numberFive = document.querySelector("#cinco");
const numberSix = document.querySelector("#seis");
const numberSeven = document.querySelector("#siete");
const numberEight = document.querySelector("#ocho");
const numberNine = document.querySelector("#nueve");
const numberZero = document.querySelector("#cero");
const borrar = document.querySelector("#borrar");
const sumar = document.querySelector("#sumar");
const restar = document.querySelector("#restar");
const dividir = document.querySelector("#dividir");
const multiplicar = document.querySelector("#multiplicar");
const igual = document.querySelector("#igual");
//declaracion de funciones
const accionUno = () => {
  displayValue.innerHTML += "1";
};
const accionDos = () => {
  displayValue.innerHTML += "2";
};
const accionTres = () => {
  displayValue.innerHTML += "3";
};
const accionCuatro = () => {
  displayValue.innerHTML += "4";
};
const accionCinco = () => {
  displayValue.innerHTML += "5";
};
const accionSeis = () => {
  displayValue.innerHTML += "6";
};
const accionSiete = () => {
  displayValue.innerHTML += "7";
};
const accionOcho = () => {
  displayValue.innerHTML += "8";
};
const accionNueve = () => {
  displayValue.innerHTML += "9";
};
const accionCero = () => {
  displayValue.innerHTML += "0";
};
const accionBorrar = () => {
  displayValue.innerHTML = "";
};
const accionSumar = () => {
  displayValue.innerHTML += "+";
};
const accionRestar = () => {
  displayValue.innerHTML += "-";
};
const accionDividir = () => {
  displayValue.innerHTML += "/";
};
const accionMultiplicar = () => {
  displayValue.innerHTML += "X";
};
const accionIgual = () => {
  let cadena = displayValue.innerHTML;
  if (cadena == "") {
    alert("Inserta algun valor y una operacion...");
    return 0;
  }
  if (
    cadena[0] == "+" ||
    cadena[0] == "-" ||
    cadena[0] == "X" ||
    cadena[0] == "/"
  ) {
    alert("No puedes iniciar el calculo con un simbolo de operacion...");
    accionBorrar();
    return 0;
  }
  let operacionDuplicada = 0,
    posicion = 0;
  while (posicion < cadena.length && operacionDuplicada < 2) {
    operacionDuplicada = 0;
    while (
      cadena[posicion] == "+" ||
      cadena[posicion] == "-" ||
      cadena[posicion] == "X" ||
      cadena[posicion] == "/"
    ) {
      operacionDuplicada++;
      posicion++;
    }
    if (operacionDuplicada == 0) {
      posicion++;
    }
  }
  if (operacionDuplicada == 2) {
    alert(
      "No puedes repetir simbolos de operacion sin numeros de por medio..."
    );
    accionBorrar();
    return 0;
  } else if (operacionDuplicada == 1) {
    alert("No puedes finalizar con un simbolo de operacion...");
    accionBorrar();
    return 0;
  }
  posicion = 0;
  let arrayNumeros = cadena.split(/[+-/X]/);
  let indiceNumeros = 1;
  let proximaOperacion,
    operacion,
    acum = parseInt(arrayNumeros[0]),
    signoDetected = 0;
  while (posicion < cadena.length) {
    if (
      cadena[posicion] == "+" ||
      cadena[posicion] == "-" ||
      cadena[posicion] == "/" ||
      cadena[posicion] == "X"
    ) {
      signoDetected = 1;
      operacion = cadena[posicion];
      posicion++;
      while (
        posicion < cadena.length &&
        cadena[posicion] != "+" &&
        cadena[posicion] != "-" &&
        cadena[posicion] != "/" &&
        cadena[posicion] != "X"
      ) {
        posicion++;
      }
    }
    if (signoDetected == 1) {
      if (operacion == "+") {
        acum += parseInt(arrayNumeros[indiceNumeros]);
      } else if (operacion == "-") {
        acum -= parseInt(arrayNumeros[indiceNumeros]);
      } else if (operacion == "/") {
        if (parseInt(arrayNumeros[indiceNumeros]) == 0) {
          alert("Division por cero detectado...");
          accionBorrar();
          return 0;
        }
        acum /= parseInt(arrayNumeros[indiceNumeros]);
      } else if (operacion == "X") {
        acum *= parseInt(arrayNumeros[indiceNumeros]);
      }
      indiceNumeros++;
      signoDetected = 0;
    } else if (signoDetected == 0) {
      posicion++;
    }
  }
  if (
    acum.toString().includes(".") &&
    acum.toString().split(".")[1].length > 6
  ) {
    displayValue.innerHTML = acum.toFixed(5);
  } else {
    displayValue.innerHTML = acum;
  }
};
const keyHandle = (event) => {
  switch (event.key) {
    case "+":
      accionSumar();
      break;
    case "-":
      accionRestar();
      break;
    case "*":
      accionMultiplicar();
      break;
    case "/":
      accionDividir();
      break;
    case "Enter":
      accionIgual();
      break;
    case "1":
      accionUno();
      break;
    case "2":
      accionDos();
      break;
    case "3":
      accionTres();
      break;
    case "4":
      accionCuatro();
      break;
    case "5":
      accionCinco();
      break;
    case "6":
      accionSeis();
      break;
    case "7":
      accionSiete();
      break;
    case "8":
      accionOcho();
      break;
    case "9":
      accionNueve();
      break;
    case "0":
      accionCero();
      break;
    case "Backspace":
      accionBorrar();
      break;
    default:
      break;
  }
};
//agregar escuchador de eventos
let resuDisplay = "";
let numeroResu;
numberOne.addEventListener("click", accionUno);
numberTwo.addEventListener("click", accionDos);
numberThree.addEventListener("click", accionTres);
numberFour.addEventListener("click", accionCuatro);
numberFive.addEventListener("click", accionCinco);
numberSix.addEventListener("click", accionSeis);
numberSeven.addEventListener("click", accionSiete);
numberEight.addEventListener("click", accionOcho);
numberNine.addEventListener("click", accionNueve);
numberZero.addEventListener("click", accionCero);
borrar.addEventListener("click", accionBorrar);
sumar.addEventListener("click", accionSumar);
restar.addEventListener("click", accionRestar);
multiplicar.addEventListener("click", accionMultiplicar);
dividir.addEventListener("click", accionDividir);
igual.addEventListener("click", accionIgual);
//esto no lo enseñaron pero podes detectar teclas especificas, ahi arriba esta hecho con un switch la funcion keyHandle, sirve para que puedas manejar la calculadora con el teclado tambien
document.addEventListener("keydown", keyHandle);
