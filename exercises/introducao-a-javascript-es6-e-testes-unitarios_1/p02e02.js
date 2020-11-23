const longestWord = (phrase) => {
    const words = phrase.split(' ');
    let maior = '';

    for(let indice = 0; indice < words.length; indice++) {
        if (words[indice].length > maior.length) { maior = words[indice]; } 
    }

    return maior;
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"))