function contarPares(valor) {
  for (i = 0; i < valor.length; i++) {
    if (valor[i] % 2 == 0) {
      par++;
    }
  }
  return par;
}

let valor = [2, 5, 8, 11, 14, 17, 20];
let par = 0; 
alert (contarPares(valor));