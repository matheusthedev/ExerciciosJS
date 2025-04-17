//1. Formatação de CPF
//Crie uma função que recebe um número como string (ex: &#39;12345678901&#39;) e retorna no
//formato de CPF (123.456.789-01) usando slice e concatenação.

var prompt = require('prompt-sync')();
let num = prompt("Qual o seu CPF: ");

//O slice é uma modificação que você consegue formatar o texto
let cpfFormatado = num.slice(0, 3) + "." + num.slice(3, 6) + "." + num.slice(6, 9) + "-" + num.slice(9, 11);
//Mostra o CPF formatado
console.log("CPF: ", cpfFormatado);