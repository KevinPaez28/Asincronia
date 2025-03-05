// 11. Crea una Promisa que se resuelva después de 3 segundos y luego imprima "Promisa
// resuelta" cuando se cumpla.
let array = [-7,-1,-7,-28,-84,-74,-14,-25] 
function promesa(array) {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      for (let i = 0; i < array.length; i++) {
         if (array[i] > 0 ) {
           resolve("excelente, los numeros son positivos")
         }
          else {
            reject("Los numeros ingresados son negativos")
         }
      }
    },3000)
  })
}
promesa(array).then((mensaje) => {
  console.log(mensaje)
})
.catch((error) => {
    console.log(error);
});
