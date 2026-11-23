let numero = [2, 5, 8, 11, 14, 17, 20];
let maior = numero[0];
function encontrarMaior(numero) {
  numero.forEach((num) => {
    if (num > maior) {
      maior = num;
    }
  });

  return maior;
}

console.log(encontrarMaior(numero));
