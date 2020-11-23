const fatorial = (numero) => {
    let resultado = numero;
    for(let indice = numero-1; indice > 0; indice--) {
        resultado = resultado * indice;
    }
    return resultado;
}

console.log(fatorial(6));