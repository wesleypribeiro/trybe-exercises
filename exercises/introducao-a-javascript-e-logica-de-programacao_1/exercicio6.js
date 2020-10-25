var peca = "bishop";

peca = peca.toLowerCase();

switch (peca) {
    case 'king':
        console.log('King -> Horizontal, vertical, diagonal')
        break;
    case 'queen':
        console.log('Queen -> Horizontal, vertical, diagonal')
        break;
    case 'bishop':
        console.log('Bishop -> Diagonal')
        break;
    case 'knight':
        console.log('Knight -> L (Horizontal, vertical)')
        break;
    case 'rook':
        console.log('Rook -> Horizontal, vertical')
        break;
    case 'pawn':
        console.log('Pawn -> Front')
        break;
    default:
        console.log('Peça inválida!')
        break;
}