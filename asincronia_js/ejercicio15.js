// 15. Realiza una llamada a un archivo local Muestra en formato json, luego muestre los datos
// obtenidos en la consola.

fetch("../datos_json/ejercicio15.json").then(function (data){
  const respuesta = data.json().then(function(dato){
    console.log(dato)
  })
})

