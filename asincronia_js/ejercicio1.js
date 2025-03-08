alert(`1. Escriba una función imprimirNumeros(desde, hasta) que genere un número cada segundo,
comenzando desde desde y terminando con hasta.
Haz dos variantes de la solución describiendo el paso a paso de cada una de ellas:
• Usando setInterval.
• Usando setTimeout anidado.`)
function mostrarmensaje(desde, hasta) {
  ;
  let intervalo = setInterval(() => { //set interval se encarga de ejecutar la funcion cada segundo
    console.log(`parte 1: ${desde}`) //imprime el numero actual

    if (desde == hasta) { //si el numero desde sea igual al numero hasta y se cumpla la funcion detenga el setinterval
      clearInterval(intervalo);
    }
    desde++; //aumentamos el numero para la siguiente interacion
  },1000)
}

function Cuentanumerica(desde1, hasta1) { 
  function mostrarnumero() {
    console.log(`Números 2: ${desde1}`); 
    
    if (desde1 < hasta1) {  // Si se cumple la condicion llama la funcion de nuevo cada 1 segundo
      desde1++;  
      setTimeout(mostrarnumero, 1000);  
    }
  }

  mostrarnumero(); // iniciamos ejecucion
}

let desde  = parseInt(prompt("Ingrese hasta donde quiere que inicie la cuenta de los numeros")) //Pedimos que el usuario ingrese los datos 
let hasta = parseInt(prompt("Ingrese hasta donde quiere que lleguen la cuenta de los numeros"))
mostrarmensaje(desde, hasta) //llamamos a la funcion

let desde1 = parseInt(prompt("Ingrese hasta donde quiere que inicie la cuenta de los numeros(segundo metodo)")) //Pedimos que el usuario ingrese los datos 
let hasta1 = parseInt(prompt("Ingrese hasta donde quiere que lleguen la cuenta de los numeros(segundo metodo)"))
Cuentanumerica(desde1,hasta1)