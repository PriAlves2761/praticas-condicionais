//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;

let valorDaParcela = (valorDoProduto / quantidadeDoParcelamento)/100;

let parcelasPagas = valorPago / valorDaParcela;

console.log(`Restam ${quantidadeDoParcelamento - parcelasPagas} parcelas de R$${valorDaParcela.toFixed(2)}`);


// `Restam 7 parcelas de R$100`