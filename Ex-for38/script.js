let peso;
let maior = peso;
let menor = peso;

for (let lote = 1; lote <= 6; lote++) {
  peso = prompt("Digite o peso do lote: ");
  if (peso > maior) maior = peso;
  if (peso < menor) menor = peso;
}

console.log("Maior peso:", maior, "kg");
console.log("Menor peso:", menor, "kg");
