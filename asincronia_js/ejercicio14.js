// 14.Crea tres Promises consecutivas, donde cada una se resuelva después de 1 segundo y
// devuelva un número diferente. Luego, encadena las tres Promises para sumar los resultados
// y mostrar el resultado final.


let cont = 1;
function promesa(cont){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("promesa: " + cont++); 
    }, 1000)
    
  }).then(function(result) {
    alert(result)

    return new Promise((resolve, reject) => {
    setTimeout(() => {
       resolve ("promesa: " + cont++); 
    }, 1000)
    
  }) 

  }).then(function(result) {
    alert(result)

    return new Promise((resolve, reject) => {
    setTimeout(() => {
       resolve ("promesa: " + cont++); 
    }, 1000)
  })  

  }).then(function(result) {
    alert(result)
    return new Promise((resolve, reject) => {
    
    setTimeout(() => {
       resolve ("promesa: " + cont++); 
    }, 1000)
    
  }) 
    
  })
}
promesa(cont)
