let temperaturas = [18, 22, 16, 25, 19, 27, 21];
let maior = temperaturas[0]
let menor = temperaturas[0]

temperaturas.forEach((temperatura) => {
  if (temperatura > maior) {
    maior = temperatura;
  }

  if (temperatura < menor) {
    menor = temperatura;
  }
})

console.log(maior);
console.log(menor);