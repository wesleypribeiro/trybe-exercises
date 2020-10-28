// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
function verificaPalindromo(palavra) {
    let palavraInversa = palavra.split('').reverse().join('');

    if (palavraInversa == palavra) return true;
    else return false;
}

console.log(verificaPalindromo('arara'));

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
let numeros = [2, 4, 6, 7, 10, 1];

function maiorValor(vetor) {
    let maiorDeTodos = null;
    for (let key in numeros) {
        if (numeros[key] > maiorDeTodos || maiorDeTodos == null) {
            maiorDeTodos = key;
        }
    }

    return maiorDeTodos;
}

console.log(maiorValor(numeros));

// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
let numeros = [2, 4, 6, 7, 10, 0, -3];

function menorValor(vetor) {
    let menorDeTodos = null;
    for (let key in numeros) {
        if (numeros[key] < menorDeTodos || menorDeTodos == null) {
            menorDeTodos = key;
        }
    }

    return menorDeTodos;
}

console.log(menorValor(numeros));

// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function maiorNome(vetorDeNomes) {
    let maiorNomeDeTodos = "";
    for (let key in nomes) {
        if (vetorDeNomes[key].length > maiorNomeDeTodos.length || maiorNomeDeTodos == "") {
            maiorNomeDeTodos = vetorDeNomes[key];
        }
    }

    return maiorNomeDeTodos;
}

console.log(maiorNome(nomes));

// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
let numerosRepetidos = [2, 3, 2, 5, 8, 2, 3];

let maisSeRepete = [0, 0]
for (let key in numerosRepetidos) {
    for (let index = 1; index < numerosRepetidos.length; index++) {
        if (numerosRepetidos[key] == numerosRepetidos[index]) {
            maisSeRepete[0]++;
        }
    }
}

// 6 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
let numero = 5;

function somatorio(numero) {
    let total = 0;
    for (let indice = 1; indice <= numero; indice++) {
        total += indice;
    }

    return total;
}

console.log(somatorio(numero));

// 7 - Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.
let word = "wesley", ending = "ey";

function verificaPalavra(word, ending) {
    let palavraInversa = word.split('').reverse().join('');
    palavraInversa = palavraInversa.substring(2, 0);
    palavraInversa = palavraInversa.split('').reverse().join('');

    if (palavraInversa == ending) { return true; }
    else { return false; }
}

console.log(verificaPalavra(word, ending));