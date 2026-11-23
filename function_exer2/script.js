let entrada = prompt("Digite sua média: ").replace(",", ".");
let media = parseFloat(entrada);

function verificarAprovacao(media) {

  if (media >= 7) {
    return "Aprovado";
  } else if (media >= 5) {
    return "Em recuperação";
  } else {
    return "Reprovado";
  }
}

console.log(verificarAprovacao(media));
