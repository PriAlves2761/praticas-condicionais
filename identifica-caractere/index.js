const caractere = "2";

let categoria = "";

if (caractere === "A" || caractere === "E" || caractere === "I" || caractere === "O" || caractere === "U") {
    categoria = "Vogal Maiúscula";
}
else if (caractere === "a" || caractere === "e" || caractere === "i" || caractere === "o" || caractere === "u") {
    categoria = "Vogal Minúscula";
}
else if (caractere === "1" || caractere === "2" || caractere === "3" || caractere === "4" || caractere === "5" ||
         caractere === "6" || caractere === "7" || caractere === "8" || caractere === "9" || caractere === "0") {
    categoria = "Numeral";
}
else {
    categoria = "Consoante";
}

console.log(`O caractere ${caractere}, pertence a categoria ${categoria}`);







