

var numero1 = 0;
var numeror2 = 0;
var operador = "";
var añade = "";
var decim = 0;
var negat = "";
var num ="";
var ref = 0;
var btn = "";
function calculadora(){
  // se crean las variables para interactuar con  los botones
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
  var sign = document.getElementById('sign');
  var contador = 0;
  const botones = document.querySelectorAll('.tecla');
// creamos los eventos clic para llevar los numeros  y operadores al display




uno.onclick = function(){
  ncaracter();
  // uno.style.animation = 'cambio 0.30s ';
  if (num == true){
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


}

dos.onclick = function(){
  ncaracter();
  // dos.style.animation = 'cambio 0.30s';
  if (num == true){
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
}
tres.onclick = function(){

  ncaracter();
  if (num == true){
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
}
cuatro.onclick = function(){
  ncaracter();
  if (num == true){
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
}
cinco.onclick = function(){
  ncaracter();
  if (num == true){
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
}
seis.onclick = function(){
  ncaracter();
  if (num == true){
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
}
siete.onclick = function(){
  ncaracter();
  if (num == true){
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
}
ocho.onclick = function(){
  ncaracter();
  if (num == true){
  if (display.textContent === "0." || display.textContent === "0.0" ) {
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
}
nueve.onclick = function(){
  ncaracter();
  if (num == true){
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
}
cero.onclick = function(){
  ncaracter();
  if (num == true){

  if (display.textContent === "0" ) {
    display.textContent = display.textConten = "0";
  }
  if (display.textContent === "0.") {
    display.textContent = display.textContent + "0";
  }
  if(display.textContent !== "0.0") {
     display.textContent = display.textContent + "0";
  }
}
}
punto.onclick = function(){
  decimal();
  if (añade == true  ){
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
sign.onclick = function (){
  negativos();
  if( negat == true ){
    display.textContent = "-" + display.textContent;
  }
  if( negat == false ){
  display.textContent = display.textContent * -1;
  }
}


// a continuacion creamos las funciones

function limpiar(){
  display.textContent ="0";
}
function reset(){
  display.textContent ="0";
  numero1 = 0;
  numeror2 = 0;
  operacion ="";
}
function decimal(){

decim = display.textContent;

  if (decim % 1 == 0)  {
    añade = true;
  } if (decim % 1 !== 0)  {
    añade = false;
  } if (decim  === "1.")  {
    añade = false;
  }if (decim  === "2.")  {
    añade = false;
  }if (decim  === "3.")  {
    añade = false;
  }if (decim  === "4.")  {
    añade = false;
  }if (decim  ===  "5.")  {
    añade = false;
  }if (decim  === "6.")  {
    añade = false;
  }if (decim  === "7.")  {
    añade = false;
  }if (decim  === "8.")  {
    añade = false;
  }if (decim  === "9.")  {
    añade = false;
  }if (decim  === "0.")  {
  añade = false;
}
}


function resultado() {
  var nfinal = 0
  // a continuacion se evalua si el display contiene numeros enteros o decimales
  switch (operador) {
    case "suma":
    if (numero1 % 1 == 0 && numero2 % 1 == 0 ) {
      nfinal = parseInt(numero1) + parseInt(numero2);
    }else {
      nfinal = parseFloat(numero1) + parseFloat(numero2);
    }
      break;
    case "resta":
    if (numero1 % 1 == 0 && numero2 % 1 == 0 ) {
      nfinal = parseInt(numero1) - parseInt(numero2);
    }else {
      nfinal = parseFloat(numero1) - parseFloat(numero2);
    }
      break;
    case "multiplicacion":
    if (numero1 % 1 == 0 && numero2 % 1 == 0 ) {
      nfinal = parseInt(numero1) * parseInt(numero2);
    }else {
      nfinal = parseFloat(numero1) * parseFloat(numero2);
    }
      break;
    case "division":
    if (numero1 % 1 == 0 && numero2 % 1 == 0 ) {
      nfinal = parseInt(numero1) / parseInt(numero2);
    }else {
      nfinal = parseFloat(numero1) / parseFloat(numero2);
    }
      break;
  }
  reset();
  ncaracter();
  if (num == true){
  display.textContent  =  nfinal;
}
}

function negativos(){
var signo = display.textContent;
if (signo % 1 == 0 || signo >= "0"){
    negat = true;
}
if(signo < "0") {
  negat = false;
}
}
 function ncaracter(){
   if (display.textContent.length <= 7)
   num = true;
   else {
     num = false;
   }
 }
 botones.forEach(function(item){
   item.addEventListener("click", function(estilo){
   if (contador == 0) {
     item.style.animation = 'cambio 0.30s';
     contador =1;
   }
   else {
     item.style.animation = 'cambio2 0.30s';
     contador = 0;
   }

   });
 });

}
