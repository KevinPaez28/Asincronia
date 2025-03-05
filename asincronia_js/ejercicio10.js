// 10. La función incorporada setTimeout utiliza callbacks. Crea una alternativa basada en
// promesas.
// La función delay(ms) debería devolver una promesa. Esa promesa debería resolverse
// después de ms milisegundos, para que podamos agregarle. then,
palabra = prompt("Ingrese la contraseña: ")
function Primerpromesa(palabra) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (palabra == "kapaez26") {
        resolve ("Excelente,Contraseña correcta")
        
      } else {
        reject("Contraseña Incorrecta")
      }
    }, 1000)
  });
}

Primerpromesa(palabra).then((mensaje) => {
  console.log(mensaje)
})
.catch((error) => {
    console.log(error);
});

new Promise((resolver, rechazar) => {
  console.log("Inicial");

  resolver();
})
  .then(() => {
    throw new Error("Algo falló");

    console.log("Haz esto");
  })
  .catch(() => {
    console.log("Haz aquello");
  })
  .then(() => {
    console.log("Haz esto sin que importe lo que sucedió antes");
  });