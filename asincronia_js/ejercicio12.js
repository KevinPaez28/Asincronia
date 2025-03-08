alert(`12. Define una función asincrónica que espere 1 segundo y luego devuelva una cadena que
diga "Operación completada". Utiliza async/await.`)
async function Cadena() {
  function promesa() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Operacion completada")
      }, 1000);
    })
  }
  let respuesta = await promesa();
  return respuesta
}

Cadena().then(alert)