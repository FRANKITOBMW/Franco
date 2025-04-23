function calcular1() {
  const dolarOficial = 1000;
  const precioUSD = parseFloat(document.getElementById("precioUsd").value);
  const precioBase = precioUSD * dolarOficial;
  const impuestoGanancias = precioBase * 0.30;
  const impuestoIVA = precioBase * 0.21;
  const precioFinal = precioBase + impuestoGanancias + impuestoIVA;
  document.getElementById("resultado").innerText =`El precio final en pesos es: ${precioFinal}`;
}