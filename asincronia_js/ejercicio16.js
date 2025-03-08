alert(`16. Después de realizar una llamada a un archivo local en formato json, utiliza el método then()
para filtrar los datos y mostrar solo los elementos que cumplan ciertos criterios (por ejemplo,
mostrar solo los nombres que comiencen con "A").`)

fetch("../datos_json/ejercicio16.json").then(function (data) { //imprimimos nuestra promesa resuelta con el metodo .then,declaramos una callbacks con un parametro data
  data.json().then(function(dato) { //data lo parseamos con .json.imprimimos nuestra promesa resuelta y declaramos otro callback con un parametro de dato 
    let letraA = dato.filter(function(persona) { //declaramos la variable letrA y le asignamos dato.filter con una callbacks con un parametro persona  
      return persona.Nombre[0] === "A"; // nos retornara el acceso al primer valor de la propiedad nombre de un objeto
    });
    console.log(letraA); // imprimimos por consola nuestro resultado
  });
});

