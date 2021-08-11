function calcular() {
  const input = document.getElementById("peliculas");
  const value = input.value;
  const precioUnitarioBoleta = 12000;
  const precioBoletas = value * precioUnitarioBoleta;
  console.log(precioBoletas);
}
