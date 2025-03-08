alert(`18. Crea tres Promises que se resuelvan después de diferentes intervalos de tiempo y luego
utilice Promise.all() para mostrar un mensaje cuando todas se hayan resuelto.`)

let cont = 1; // Empezamos en 1 para numerar las promesas correctamente

function mostrarmensaje(cont) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Promesa ${cont} resuelta`);
    }, 1000);
  })
  .then((result) => {
    alert(result);
    cont++; 
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Promesa ${cont} resuelta`);
      }, 2000);
    });
  })
  .then((result) => {
    alert(result);
    cont++; 
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Promesa ${cont} resuelta`);
      }, 3000);
    });
  })
  .then((result) => {
    alert(result);
  });
}

mostrarmensaje(cont);
