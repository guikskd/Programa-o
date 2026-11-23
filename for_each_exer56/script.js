let precos = [50, 80, 120, 40, 200];
let desconto = 0;
precos.forEach((preco) => {
  desconto = preco - 0.1 * preco;
  console.log(`Preço: ${preco} | Desconto: ${desconto}`);
});
