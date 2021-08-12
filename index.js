function compararPrecios() {
  //Calcular precio de las boletas
  const input = document.getElementById("peliculas");
  const value = Number(input.value);
  const precioUnitarioBoleta = 12000;
  const precioBoletas = value * precioUnitarioBoleta;

  //Calcular precio de los servicios de streaming
  let precioServicios;
  const inputNetflix = document.getElementById("netflix");
  const buyNetflix = inputNetflix.checked;
  if (buyNetflix) {
    precioNetflix = Number(inputNetflix.value);
  } else {
    precioNetflix = 0;
  }

  const inputAmazon = document.getElementById("amazon");
  const buyAmazon = inputAmazon.checked;
  if (buyAmazon) {
    precioAmazon = Number(inputAmazon.value);
  } else {
    precioAmazon = 0;
  }

  const inputDisney = document.getElementById("disney");
  const buyDisney = inputDisney.checked;
  if (buyDisney) {
    precioDisney = Number(inputDisney.value);
  } else {
    precioDisney = 0;
  }

  const inputHbo = document.getElementById("hbo");
  const buyHbo = inputHbo.checked;
  if (buyHbo) {
    precioHbo = Number(inputHbo.value);
  } else {
    precioHbo = 0;
  }

  precioServicios = precioNetflix + precioAmazon + precioDisney + precioHbo;

  //Comparar precios y enviar mensaje
  if (precioServicios > precioBoletas) {
    const mensajeFinal = document.getElementById("mensajeRecomendacion");
    mensajeFinal.innerText = " Comprar las boletas de cine";
  } else {
    const mensajeFinal = document.getElementById("mensajeRecomendacion");
    mensajeFinal.innerText = " Comprar los servicios de streaming";
  }

}
