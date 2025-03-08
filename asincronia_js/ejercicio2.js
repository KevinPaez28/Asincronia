alert(`2. En el siguiente código hay una llamada programada setTimeout, luego se ejecuta un cálculo
pesado que demora más de 100 ms en finalizar.
¿Cuándo se ejecutará la función programada y por qué se ejecutará?
a) Después del bucle.
b) Antes del bucle.
c) Al comienzo del bucle.
¿Qué va a mostrar alert()?`)
let i = 0;

setTimeout(() => alert(i), 100)

for (let j = 0; j < 100000000; j++){
  i++
}

alert(`Respuesta correcta (A)

La funcion programada se ejecutara una vez terminado el ciclo for, ya que JavaScript es un lenguaje
de un solo hilo, lo que significa que solo ejecutara una tarea a la vez en sus ciclos de bucle.`)