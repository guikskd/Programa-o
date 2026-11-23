let notas = [6, 8, 5, 9, 7, 4, 10, 6];
let notasMaior = [];
notas.forEach((nota) => {
  if (nota >= 7) {
    notasMaior.push(nota);
  }
});
console.log("Aprovados:", notasMaior.length);
notasMaior.forEach((todasNotas) => {
  console.log("Nota: ",todasNotas);
});
