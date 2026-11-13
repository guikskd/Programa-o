let produtos = [];
let continuar;

do {
    produtos.push(prompt("Digite os nomes dos produtos: "));
    continuar = prompt("Você deseja continuar (S/N)? ").toLowerCase();
    if (continuar == "n" ) {
        console.log("Finalizando. Obrigado")
    }
    
} while (continuar == "s");

produtos.forEach((produto) => {
    console.log(produto);
});

/*CONTINUAR*/