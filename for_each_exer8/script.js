let precos = [29.9, 45.5, 119.9, 79.9, 25.0];
let soma = 0;
precos.forEach((preco) => {
  soma += preco;
});
console.log(soma.toFixed(2));
console.log((soma / precos.length).toFixed(2));
