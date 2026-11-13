let numeros = [12, 7, 4, 9, 16, 3, 20, 11, 8];
let par = 0;
let impar = 0;
numeros.forEach((num) => {
  if (num % 2 == 0) {
    par++;
  }

  else {
    impar++;
  }
})

console.log(par);
console.log(impar);