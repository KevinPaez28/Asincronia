alert(`17. Crea una función asincrónica que realice una llamada a un archivo local en formato json y
luego manipule los datos recibidos para mostrar información específica.`)


async function llamada() {
  const array = await fetch("../datos_json/ejercicio17.json");
  const datos = await array.json();

  let resultado= datos.filter(computador => computador.Marca[0] == "H")
  console.log(resultado)
}
llamada()
