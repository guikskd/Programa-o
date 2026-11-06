let notas = [5, 8, 6, 9, 4, 10, 7, 3];
let soma = 0;
let media = 0;
let maiorSete = 0;
for (let i = 0; i < notas.length; i++) {
  soma += notas[i];
  media = soma / notas.length;
  if (notas[i] >= 7) {
    maiorSete++;
  }
}
console.log(soma);
console.log(media);
console.log(maiorSete);
