let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorValor = null;

for(let index = 0; index < numbers.length; index++) {
    if (numbers[index] > maiorValor) {
        maiorValor = numbers[index];
    }
}

console.log(maiorValor);