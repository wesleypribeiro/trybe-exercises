let numero = 5;
let asterisco = [];

for (let coluna = 1; coluna <= numero; coluna++) {
    asterisco.push("*");
}

for (let linha = 1; linha <= numero; linha++) {
    console.log(asterisco.join(' '));
}