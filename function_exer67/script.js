function gerarRelatorioNotas(notas) {
  let soma = 0;
  for (i = 0; i < notas.length; i++) {
    soma += notas[i];
  }
  let media = soma / notas.length;
  if (media >= 7) {
    return "Aprovado";
  } else if (media >= 5) {
    return "Em recuperação";
  } else {
    return "Reprovado";
  }
}

let notas = [7, 8, 5, 9, 6, 10];
alert (gerarRelatorioNotas(notas));