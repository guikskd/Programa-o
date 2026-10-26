let producaoTotal = 0;
let lotesComMaisDe1000 = 0;
let maiorQuantidade = -1; 
let posicaoMaiorLote = 0;

for (let i = 1; i <= 10; i++) {
    let quantidade = 0;
    let entradaValida = false;

    while (!entradaValida) {
        let entrada = prompt(`Digite a quantidade de unidades produzidas no lote ${i}:`);
        quantidade = parseInt(entrada);

        if (!isNaN(quantidade) && quantidade > 0 && Number.isInteger(Number(entrada))) {
            entradaValida = true;
        } else {
            alert("Erro: A quantidade deve ser um número inteiro maior que zero. Tente novamente.");
        }
    }

    producaoTotal += quantidade;

    if (quantidade >= 1000) {
        lotesComMaisDe1000++;
    }

    if (quantidade > maiorQuantidade) {
        maiorQuantidade = quantidade;
        posicaoMaiorLote = i;
    }
}

console.log("--- RESULTADO DA AUDITORIA ---");
console.log(`Produção total de unidades: ${producaoTotal}`);
console.log(`Quantidade de lotes com pelo menos 1.000 unidades: ${lotesComMaisDe1000}`);
console.log(`Lote de maior produção: Lote ${posicaoMaiorLote} (com ${maiorQuantidade} unidades)`);

alert(`Auditoria Concluída!\n\nProdução Total: ${producaoTotal}\nLotes >= 1000 un: ${lotesComMaisDe1000}\nMaior Lote: Lote ${posicaoMaiorLote} (${maiorQuantidade} un)`);
