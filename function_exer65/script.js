function encontrarMaior(valor) {
  
  valor.forEach((val) => {
    if (val > maior) {
      maior = val;
    }
  });
  return maior;
}

let valor = [18, 7, 25, 12, 31, 9];
let maior = valor[0];
alert(encontrarMaior(valor));
