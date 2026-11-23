let n1 = parseFloat(prompt("Digite sua primeira nota:"));
let n2 = parseFloat(prompt("Digite sua segunda nota:"));

function calcularMedia(nota1, nota2) {
  return (nota1 + nota2) / 2;
}

let media = calcularMedia(n1, n2);
console.log("A média é:", media);