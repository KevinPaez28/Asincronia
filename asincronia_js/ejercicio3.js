alert(`3. Crear una función map que acepte un array y un callback y que:
• por cada elemento del array ejecute el callback pasándole dicho elemento como
argumento
• obtenga el resultado
• lo pushee a un nuevo array

GFPI-F-135 V02

• devuelva el array final con el resultado de cada una de las llamadas al callback.`)
function leerArray(arrays, callback) {
  let diferente = []
  for (let i = 0; i < arrays.length; i++){
    diferente.push(arrays[i]*2)
  }
  callback(diferente)
}

let arrays = [1,2,3,4,5]

leerArray(arrays, function (resultado) {
  console.log(resultado)
})