let num;
let contador = 1;

do {
  num = parseFloat(prompt("Insira um número"));
  if (num < 0 || isNaN(num)) {
    alert("Inválido! Digite novamente");
  }
} while (num < 0 || isNaN(num));

num = parseInt(num);

for (let i = 1; i <= 10; i++) {
  console.log(num + " x " + contador + " = " + num * contador);
}
