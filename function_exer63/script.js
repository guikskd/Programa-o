function calcularPrecoComDesconto(preco, percentual) {
  return preco - preco * (percentual / 100);
}

let preco = parseFloat(prompt("Digite o valor do produto: "));
let percentual = parseInt(prompt("Digite o desconto: "));
let precoFinal = calcularPrecoComDesconto(preco, percentual);
alert(precoFinal);
