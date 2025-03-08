alert(`5. Crear una función every que acepte un array y un callback y que:
• por cada elemento del array ejecute el callback pasándole dicho elemento como
argumento
• devuelva true si todas las llamadas al callback devolvieron true`)
let array = [2, 1,  4,  3, 45, 6,  -5,  14, 17, 24]
function every(array, callback) {
  let palabra = true
  for (let i = 0; i < array.length; i++){
    if (!callback(array[i])) {
      palabra = false
    }
  
  }
  return palabra;
}
function validacion(array) {
  if (array > 0) {
    return true
  }
  else {
    return false
  }
}
console.log(every(array, validacion))