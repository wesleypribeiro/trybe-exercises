let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let valoresImpares = 0;

for (let index = 0; index < numbers.length; index++) {
    if (numbers[index]%2 != 0) { valoresImpares++; }
}

if(valoresImpares > 0) {
    console.log(`Existem ${valoresImpares} valores ímpares no array`)
} else {
    console.log("nenhum valor ímpar encontrado");
}