//renda mensal do aluno, em centavos.
const rendaMensal = 200000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 12;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPago = 1000000;


if (mesesDecorridos > 60) {
    console.log("O aluno não deve mais nada.");
} else if (totalJaPago === 1800000){
    console.log("o aluno não deve pagar mais nada, pois já quitou a dívida.");
} else if (rendaMensal < 200000) {
    console.log("O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais.");
} else {
    const valorParcela = (rendaMensal*0.18)/100
    console.log(`O valor da parcela desse mês é R$ ${valorParcela.toFixed(2)} reais`);
}

