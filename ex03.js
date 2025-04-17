//Peça uma frase e uma letra, e retorne quantas palavras começam com essa letra (ex:
//'a'). Use split(), startsWith() e filter(). 

var prompt = require('prompt-sync')();

const frase = prompt("Digite uma frase:");
//o toLowerCase nesse caso serve para identificar quantas palavras do texto começam com a letra desejada
const letra = prompt("Digite uma letra:").toLowerCase();

const palavras = frase.split(" ");

const letraselecionada = palavras.filter(palavra =>
  palavra.toLowerCase().startsWith(letra)
);

console.log(`Número de palavras que começam com "${letra}": ${letraselecionada.length}`);