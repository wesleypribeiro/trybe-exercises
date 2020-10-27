let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorValor = null;

for (let index=0; index < numbers.length; index++) {
    if (numbers[index] < menorValor || menorValor == null) {
        menorValor = numbers[index];
    }
}

console.log(menorValor);