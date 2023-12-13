// Não podemos criar constantes com palavras reservadas
// Constantes precisam ter nomes significativos
// Não pode começar o nome de uma variável com um número
// Constantes não podem conter espaços ou traços
// Utilizamos camelCase
// Case-sensitive
// Não podemos modificar o valor de uma constante
// NÃO UTILIZE VAR, UTILIZE CONST

/* Exemplo de uso de Constante:
const nome = 'João';
nome = 'Otávio';
console.log(nome); */

// + - * 
//Observação: Quando um valor estiver dentro de apas '', é uma String / Se estiver fora de aspas '' é um Number

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;
console.log(typeof( primeiroNumero + segundoNumero));
