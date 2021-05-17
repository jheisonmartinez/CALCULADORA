
var numero1 = 0;
var numeror2 = 0;
var operador = "";

function culadora(){
  // se crean las variables para los botones
  var  display = document.getElementById('display');
  var uno = document.getElementById('1');
  var dos = document.getElementById('2');
  var tres = document.getElementById('3');
  var cuatro = document.getElementById('4');
  var cinco = document.getElementById('5');
  var seis = document.getElementById('6');
  var siete = document.getElementById('7');
  var ocho = document.getElementById('8');
  var nueve = document.getElementById('9');
  var cero = document.getElementById('0');
  var on = document.getElementById('on');
  var  mas = document.getElementById('mas');
  var  menos = document.getElementById('menos');
  var  por = document.getElementById('por');
  var  dividido = document.getElementById('dividido');
  var  igual = document.getElementById('igual');
  var  punto = document.getElementById('punto');

// creamos los eventos clic para llevar los numeros  y operadores al display

uno.onclick = function(){
  if (display.textContent === "0.") {
    display.textContent = display.textContent + "1";
  }
    else if (display.textContent != 0 && display.textContent != "." ) {
      display.textContent = display.textContent + "1";
    }
    else if (display.textContent !== 0 || display.textContent == ".") {
      display.textContent = display.textContent = "1";
    }
     else {
       display.textContent = display.textContent + "1";
    }
}
// validamos mediante el evento onclick

dos.onclick = function(){
  if (display.textContent === "0.") {
    display.textContent = display.textContent + "2";
  }
    else if (display.textContent != 0 && display.textContent != "." ) {
      display.textContent = display.textContent + "2";
    }
    else if (display.textContent !== 0 || display.textContent == ".") {
      display.textContent = display.textContent = "2";
    }
     else {
       display.textContent = display.textContent + "2";
    }
}
tres.onclick = function(){
  if (display.textContent === "0.") {
    display.textContent = display.textContent + "3";
  }
    else if (display.textContent != 0 && display.textContent != "." ) {
      display.textContent = display.textContent + "3";
    }
    else if (display.textContent !== 0 || display.textContent == ".") {
      display.textContent = display.textContent = "3";
    }
     else {
       display.textContent = display.textContent + "3";
    }
}

cuatro.onclick = function(){
  if (display.textContent === "0.") {
    display.textContent = display.textContent + "4";
  }
    else if (display.textContent != 0 && display.textContent != "." ) {
      display.textContent = display.textContent + "4";
    }
    else if (display.textContent !== 0 || display.textContent == ".") {
      display.textContent = display.textContent = "4";
    }
     else {
       display.textContent = display.textContent + "4";
    }
}
cinco.onclick = function(){
  if (display.textContent === "0.") {
    display.textContent = display.textContent + "5";
  }
    else if (display.textContent != 0 && display.textContent != "." ) {
      display.textContent = display.textContent + "5";
    }
    else if (display.textContent !== 0 || display.textContent == ".") {
      display.textContent = display.textContent = "5";
    }
     else {
       display.textContent = display.textContent + "5";
    }
}
seis.onclick = function(){
  if (display.textContent === "0.") {
    display.textContent = display.textContent + "6";
  }
    else if (display.textContent != 0 && display.textContent != "." ) {
      display.textContent = display.textContent + "6";
    }
    else if (display.textContent !== 0 || display.textContent == ".") {
      display.textContent = display.textContent = "6";
    }
     else {
       display.textContent = display.textContent + "6";
    }
}
siete.onclick = function(){
  if (display.textContent === "0.") {
    display.textContent = display.textContent + "7";
  }
    else if (display.textContent != 0 && display.textContent != "." ) {
      display.textContent = display.textContent + "7";
    }
    else if (display.textContent !== 0 || display.textContent == ".") {
      display.textContent = display.textContent = "7";
    }
     else {
       display.textContent = display.textContent + "7";
    }
}
ocho.onclick = function(){
  if (display.textContent === "0.") {
    display.textContent = display.textContent + "8";
  }
    else if (display.textContent != 0 && display.textContent != "." ) {
      display.textContent = display.textContent + "8";
    }
    else if (display.textContent !== 0 || display.textContent == ".") {
      display.textContent = display.textContent = "8";
    }
     else {
       display.textContent = display.textContent + "8";
    }
}
nueve.onclick = function(){
  if (display.textContent === "0.") {
    display.textContent = display.textContent + "9";
  }
    else if (display.textContent != 0 && display.textContent != "." ) {
      display.textContent = display.textContent + "9";
    }
    else if (display.textContent !== 0 || display.textContent == ".") {
      display.textContent = display.textContent = "9";
    }
     else {
       display.textContent = display.textContent + "9";
    }
}
cero.onclick = function(){

    if (display.textContent == 0 ) {
      display.textContent = display.textConten ="0";
    }
     else{
       display.textContent = display.textContent + "0";
    }
}

punto.onclick = function(){
    if (display.textContent === 0 ) {
        display.textContent = display.textContent + ".";
    }
    if (display.textContent !== 0 ) {
        display.textContent = display.textContent + ".";
    }
}

on.onclick = function(){
  reset();
}

mas.onclick = function(){
  numero1 = display.textContent;
  operador = "suma";
    limpiar();

}
menos.onclick = function(){
  numero1 = display.textContent;
  operador = "resta";
  limpiar();
}
por.onclick = function(){
  numero1 = display.textContent;
  operador = "multiplicacion";
  limpiar();
}
dividido.onclick = function(){
  numero1 = display.textContent;
  operador = "division";
  limpiar();
}
igual.onclick = function(){
  numero2 = display.textContent;
  limpiar()
resultado();
}

function limpiar(){
  display.textContent ="0";
}
function reset(){
  display.textContent ="0";
  numero1 = 0;
  numeror2 = 0;
  operacion ="";
}

function resultado() {
  var nfinal = 0
  switch (operador) {
    case "suma":
      nfinal = parseInt(numero1) + parseInt(numero2);
      break;
    case "resta":
      nfinal = parseInt(numero1) - parseInt(numero2);
      break;
    case "multiplicacion":
    nfinal = parseInt(numero1) * parseInt(numero2)
      break;
    case "division":
    nfinal = parseInt(numero1) / parseInt(numero2)
      break;
  }
  reset();
  display.textContent  =  nfinal;
}
}
