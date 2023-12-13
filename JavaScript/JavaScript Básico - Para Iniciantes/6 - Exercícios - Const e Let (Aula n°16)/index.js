/*
Luiz Otávio Miranda tem 30 anos, pesa 84 kg
tem 1.8 de altura e IMC é de 25.925925925925924
Luiz Otávio nasceu em 1980
*/
const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const alturaEmM = 1.80;
let imc; // peso / (altura * altura)
let anoNascimento ;
let ano = new Date().getFullYear()

imc = peso / (alturaEmM * alturaEmM)
anoNascimento = ano - idade

// - Exemplo de console.log concatenando as variaveis:
console.log(nome + sobrenome +' tem '  + idade + ' anos, pesa ' + peso + ' kg ')

// - Exemplo de console.log utilizando template strings:
console.log(`Tem ${alturaEmM} metros de altura e seu IMC é de ${imc}`)
console.log(`${nome} nasceu em ${anoNascimento}`)