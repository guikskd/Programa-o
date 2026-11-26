function reajustarPrecos(precos, reajuste) {
  let novosPrecos = [];
  precos.forEach((preco) => {
    novosPrecos.push(preco - preco * (reajuste / 100));
  });
  return novosPrecos;
}

let precos = [50, 80, 120, 200];
let reajuste = 8;
alert(reajustarPrecos(precos, reajuste));

// ATENÇÃO NESSA QUESTÃO