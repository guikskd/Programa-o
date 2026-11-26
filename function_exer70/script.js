function calcularTotal(vendas) {
  let soma = 0;
  vendas.forEach((venda) => {
    soma += venda;
  });
  return soma;
}

function calcularMedia(vendas) {
  let soma = 0;
  vendas.forEach((venda) => {
    soma += venda;
  });
  let media = 0;
  return (media = soma / vendas.length);
}

function encontrarMaior(vendas) {
  let maior = vendas[0];
  vendas.forEach((venda) => {
    if (venda > maior) {
      maior = venda;
    }
  });
  return maior;
}

function contarVendasAcimaDe(vendas, valor) {
  let quantMaior = 0;
  for (let i = 0; i < vendas.length; i++) {
    if (vendas[i] > valor) {
      quantMaior++;
    }
  }
  return quantMaior;
}

let vendas = [120, 75, 240, 55, 180, 90, 310, 65];
let valor = 150;
alert(calcularTotal(vendas));
alert(calcularMedia(vendas));
alert(encontrarMaior(vendas));
alert(contarVendasAcimaDe(vendas, valor));
