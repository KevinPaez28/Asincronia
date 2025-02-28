// 6. Crear una función some que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva true si al menos una de las llamadas al callback devolvió true

let array = [2, 1, 4, 3, 40, 6, -5, 14, 17, 24]
function some(array, callback) {
  let palabra = false
  for (let i = 0; i < array.length; i++){
    if (callback(array[i])) {
      palabra = true
    }
  
  }
  return palabra;
}
function validacion(array) {
  if (array == 40) {
    return true
  }
  else {
    return false
  }
}
console.log(some(array, validacion))