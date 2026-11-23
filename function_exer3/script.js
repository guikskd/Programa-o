let valor = parseFloat(prompt("Digite o valor: "));
function calcularDesconto(valor) {
  return valor - valor * 0.10;
}

console.log(calcularDesconto(valor));