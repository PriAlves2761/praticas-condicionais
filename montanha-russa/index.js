const idade = 66;
const possuiPatologia = false;
const altura = 149;
const ehEstudante = true;

if (idade <12 || idade >65 || possuiPatologia || altura <150) {
    console.log('ACESSO NEGADO');
} else if (idade <18 || ehEstudante) {
    console.log('Ingresso R$10,00 reais');
} else {
    console.log('Ingresso R$20,00 reais');
}

