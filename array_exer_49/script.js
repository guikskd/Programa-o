let movimentacoes = [100, -30, 50, -20, 80];
let saldo = 0;
let calculo = 0;
for (let i = 0; i < movimentacoes.length; i++) {
  calculo += movimentacoes[i];
}
console.log(calculo);
