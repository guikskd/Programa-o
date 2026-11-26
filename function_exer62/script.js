let media = parseFloat (prompt ("Digite a sua média: "));
function verificarAprovacao(media) {
  if (media >= 7) {
    return "Aprovado";
  } else if (media >= 5) {
    return "Em recuperação";
  } else {
    return "Reprovado";
  }
}

alert(verificarAprovacao(media))