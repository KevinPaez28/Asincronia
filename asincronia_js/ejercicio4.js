// 4. Crear una función filter que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • sí dicho callback devuelve true, pushea el elemento a un nuevo array
// • devuelva el array final con los elementos que pasaron el "filtro".

let array = [2, 1, -2, 4, -1, 3, -45, 6, -6, 5, -5, 14, -15, 17, 24]
function leerArray(array, callback) {
  let Arraynueva = []
  for (let i = 0; i < array.length; i++){
    if (callback(array[i])== true) {
      Arraynueva.push(array[i]);
    }
  }
  return Arraynueva;
}
function validacion(array) {
  if (array > 0) {
    return true
  }
  else {
    return false
  }
}
console.log(leerArray(array, validacion))
 