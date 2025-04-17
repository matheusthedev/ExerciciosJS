//Crie uma função que recebe um texto e remove todos os caracteres que não são letras
//ou números, usando replace() com regex.

//comando que permite que o usuario digite
var prompt = require('prompt-sync')();

// Pede ao usuário para digitar um texto
let texto = prompt("Digite um texto:");

function removerCaracteresEspeciais(texto)
{
    return texto.replace(/[^a-zA-Z0-9]/g,' ');
}

let resultado = removerCaracteresEspeciais(texto);

console.log(resultado);


