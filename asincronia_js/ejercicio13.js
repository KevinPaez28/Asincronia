// 13. Crea una Promise que se rechace después de 2 segundos y captura el error para imprimir
// "Error: Promise rechazada".

function promesa() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Promise rechazada")
    }, 2000);
  })
}
promesa().catch((error) => {
  console.log(error)
})