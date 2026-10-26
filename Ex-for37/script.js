let contador = 0;
let condicao;
for (let i = 1; i <= 9; i++) {
    let temperatura = prompt ("Digite a temperatura: ");
    if (temperatura >  5){
        contador++;
    }
}

console.log(`Temperaturas elevadas: ${contador}`);
if (contador === 0) {
    console.log("Nenhuma passou de 5°C");
}