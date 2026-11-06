let num = [3, 12, 7, 20, 5, 18, 9, 6];
let maiorDez = 0;
for (let i = 0; i < num.length; i++) {
    if (num[i] >= 10) {
        maiorDez++;
    }
    
}
console.log(maiorDez);