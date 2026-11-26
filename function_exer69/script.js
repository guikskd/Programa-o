function filtrarProdutos(precos, limite) {
  let resultado = [];
  precos.forEach((preco) => {
    if (preco <= limite) {
      resultado.push(preco);
    }
  });
  return resultado;
}

let precos = [29.9, 45.5, 119.9, 79.9, 25.0];
let limite = 50;
alert(filtrarProdutos(precos, limite));
