let notas = [7, 8, 5, 9, 6, 10];
function gerarRelatorio(notas) {
  let soma = 0;
  notas.forEach(function (nota) {
    soma += nota;
  });
  return soma / notas.length;
}
console.log(gerarRelatorio(notas));
