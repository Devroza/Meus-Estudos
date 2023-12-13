// - Não utilize var, utilize let:
// Exemplo:
let nomeCliente = 'Luiz';
nomeCliente = 'Otávio';

console.log(nomeCliente);

/* Observações:
*Quando se sabe que o valor de uma variável pode ou vai ser alterado, é melhor que mesma seja declarada com let e não com var;
*Não podemos redeclarar variáveis com let;
*O JavaScript é Case-sensitive, ou seja, letras maiúsculas e minúsculas fazem diferença. */

//------------------------------------------------------------
// - Variáveis não podem conter espaços ou traços: 
/* Para isso utilizamos a técnica de camelCase:
Exemplo: var nomeCompletoDoCliente = 'Luiz Otávio'
console.log(nomeCompletoDoCliente);
* Para representar os espaços entre as palavras, inicia a proxima com letra maiúscula */

//------------------------------------------------------------
// - Não podemos começar o nome de uma variável com um número 
/*Porém após inserir alguma letra os números podem ser inseridos no restante do nome da variável
Exemplo: var no1me; */

//------------------------------------------------------------
/* - Variáveis precisam ter nomes significativos:
var nomeCliente = 'João';
console.log(nomeCliente); */

//------------------------------------------------------------
/* - Não podemos criar variáveis com palavras reservadas: 
Exemplos: var console; var if; 
* As palavras como console e if, são palavras já reservadas pelo JavaScript para exercutar funções, não é possivel utiliza-las como nome de variável. */

//------------------------------------------------------------
/* - Exemplo de mudança de conteúdo dentro da variável:
let nome; // Declarou a variável
nome = 'João'; // Inicializando a variável
console.log(nome);
nome = 'Otávio';
console.log(nome); */

//------------------------------------------------------------
/* - Exemplo de alteração de string através da variável:
let nome = "Henrique"; //String

console.log(nome, 'nasceu em 1984.');
console.log('Em 2000', nome, 'conheceu Maria.');
console.log(nome, 'casou-se com Maria em 2012.');
console.log('Maria teve 1 filho com', nome, 'em 2015');
console.log('O filho de', nome, 'se chama Eduardo'); */