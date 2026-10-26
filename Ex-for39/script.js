let contFatu = 0;
let faturamenteTotal = 0;
let media = 0;
for (let dia = 1; dia <= 5; dia++) {
  let faturamento = Number(prompt("Digite o faturamente desse dia: "));
  faturamenteTotal = faturamenteTotal + faturamento;

  if (faturamento > 5000) {
    contFatu++;
  }
}
media = faturamenteTotal / 5;
alert(`Faturamento: R$ ${faturamenteTotal.toFixed(2)}`);
alert(`Média: R$ ${media.toFixed(2)}`);
alert(`Dias acima de R$ 5000: ${contFatu}`);
