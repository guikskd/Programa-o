let num = [4, 7, 10, 3, 8, 11, 6];
num.sort((a, b) => a - b);
let par = 0;
for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 == 0) {
        console.log(num[i])
    }
    
}