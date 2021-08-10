// Exercícios de intepretação
//Exercício 1. 
//a- A impressão no log será false porque o && retorna true se, e somente se, todos os boleanos envolvidos também forem true.
//Como é possível observar, o valor de bool1 é true e bool2 é false, tornando a resposta final false.

//b- A impressãp no log será false porque apesar do valor de bool3 ser o contrário do resultado de bool2 (ou seja, bool3=!bool2 gera
// bool3=true), o valor de bool2 permanece false. 

//c- O resultado será true, porque o booleano || retorna false somente se todos os valores forem false, ou seja (bool1 || bool2 = true)

//d- O typeof será um boolean, pois estamos comparando variáveis entre si, sendo possível apenas true or false.

//Exercício 2.
//O problema está surgindo porque o prompt nos dá resposta de string, então não irá criar uma operação matemática. No console
//irá aparecer a soma das duas strings, por exemplo: se a resposta for 10, o console apresentará 1010.

//Exercício 3.
//Para gerar a soma, é necessário acrescentar o Number na frente do prompt, ficará da seguinte forma:
// let primeiroNumero = Number (prompt("Digite um numero!"))
// let segundoNumero = Number (prompt("Digite outro numero!"))
// const soma = primeiroNumero + segundoNumero
// console.log(soma)

//Exercícios de escrita 
//Exercício 1.
// a-
//let idade = Number (prompt("Qual a sua idade?"))

// b-
//let idadeSeuMelhorAmigo = Number (prompt("Qual a idade do seu melhor amigo(a)?"))

// c-
//let resposta = idade > idadeSeuMelhorAmigo
//console.log("Sua idade é maior do que a do seu melhor amigo?", resposta)

// d-
//resposta = idade - idadeSeuMelhorAmigo
//console.log("Diferença de idade:", resposta, "anos")

//Exercício 2.
//a-
//let numero = Number (prompt ("Escreva um número par"))

//b-
//let valor1 = 2
//let resultado = numero % valor1
//console.log("Resto da divisão:", resultado)

//c- O resultado do resto da divisão de um número par sempre será zero, pois não haverá sobras.

//d- Se o usuário inserir um número ímpar, nesse caso, que é divido por 2, a sobra será 1.

//Exercício 3.
// let suaIdade = Number (prompt("Qual a sua idade?"))

// const valorMesesAno = 12
// const valorDiasMes = 30
// const valorHorasDia = 24

// //a- idade em meses
// let resposta1 = suaIdade * valorMesesAno
// console.log("Idade em meses:", resposta1)

// //b- idade em dias
// resposta2 = resposta1 * valorDiasMes
// console.log("Idade em dias:", resposta2)

// //c- idade em horas
// resposta3 = resposta2 * valorHorasDia
// console.log("Idade em horas:", resposta3)

//Exercício 4.
let numero1 = Number (prompt ("Escreva um número"))
let numero2 = Number (prompt ("Escreva outro número diferente"))
const numero3 = 0

let resultado = numero1 > numero2
console.log("O primeiro número é maior que o segundo?", resultado)

resultado = numero1 === numero2
console.log("O primeiro número é igual ao segundo?", resultado)

resultado = (numero1 % numero2) === numero3
console.log("O primeiro número é divisível pelo segundo?", resultado)

resultado = (numero2 % numero1) === numero3
console.log("O segundo número é divisível pelo primeiro?", resultado)

