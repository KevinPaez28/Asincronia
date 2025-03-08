function promesa1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(" Promesa 1 resuelta");
    }, 1000);
  });
}

function promesa2() {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(" Promesa 2 rechazada");
    }, 2000);
  });
}

function promesa3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(" Promesa 3 resuelta");
    }, 3000);
  });
}

// Usamos Promise.allSettled para manejar todas las promesas
Promise.allSettled([promesa1(), promesa2(), promesa3()])
  .then((resultados) => {
    console.log(" Resultado de todas las promesas:");
    console.log(resultados);
  });
