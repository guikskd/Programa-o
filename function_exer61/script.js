let nota1 = Number(prompt("Digite sua primeira nota: "));
let nota2 = Number(prompt("Digite sua segunda nota: "));
let notas = [nota1, nota2];

function calcularMedia(notas) {
    for (i = 0; i <notas.length; i++){
        soma += notas[i]
    }
    return soma / notas.length;
}

let soma = 0;
let resultado = (calcularMedia(notas));
alert(resultado);