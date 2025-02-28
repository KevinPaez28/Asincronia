// 8. Crear una función findIndex que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva el índice del elemento pasado como argumento del primer callback que
// devuelva true
// • sí ningún callback devuelve true, devuelva undefined

let array = [ 1, 3, 0, 5, -5, 9, 17, 29]
function some(array, callback) {
  let palabra;
  for (let i = 0; i < array.length; i++){
    if (callback(array[i])) {
      palabra = true
    }
  }
  return palabra;
}
function otra(array) {
  if (array == 20) {
    return true
  }
  else {
    return false
  }
}
console.log(some(array, otra))