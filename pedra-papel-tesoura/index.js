const jogada1 = "tesoura"
const jogada2 = "tesoura"

if (jogada1 === 'pedra' && jogada2 === 'tesoura' || jogada1 === 'tesoura' && jogada2 === 'pedra' ) {
    console.log('Pedra');
} else if (jogada1 === 'papel' && jogada2 === 'pedra' || jogada1 === 'pedra' && jogada2 === 'papel' ) {
    console.log('Papel');
} else if (jogada1 === 'tesoura' && jogada2 === 'papel' || jogada1 === 'papel' && jogada2 === 'tesoura' ) {
    console.log('Tesoura');
} else {
    console.log('Empate');
} 

