let consumoTotal = 0;
let consumo = 0;
let media = 0;
for (let i = 1; i <= 5; i++) {
  consumo = parseFloat(prompt(`Consumo (dia ${i})`));
  consumoTotal = consumo + consumoTotal;
  media = consumoTotal / 5;
}

console.log(`Consumo Total: ${consumoTotal}`)
console.log( `Média de Consumo: ${media}`);