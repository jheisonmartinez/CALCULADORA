
function calculadora (){
// se crea la constante en donde se almacenaran todas las imagenes como botones
  const botones = document.querySelectorAll('.tecla');
  var contador = 0;
// luego utilizando el buble forEach recorremos cada una y escuchando
// el evento click en cada una de ellas


  botones.forEach(function(item){
    item.addEventListener("click", function(){
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
