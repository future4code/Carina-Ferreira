// Exercícios de interpretação de código 

//Exercício 1

// a. undefined, porque o valor de array não foi definido.

//b. null, porque o valor de array foi definido como null.

//c. 11 , porque length tem a capacidade de definir quantos itens possuem no array.

//d. 3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13, pois irá mostrar a nova array, porém com o 19 no lugar do número 4, 
//conforme substituição do próximo número ao lado do 3.

//e. 9, pois será a soma de i(3) e 6.

// Exercício 2

//SUBI NUM ÔNIBUS EM MIRROCOS 27. A frase sairá impressa com todas as letras em maiúsculo,
// com a substituição da letra A por letra I  e com a quantidade de caracteres usadas 
// para escrever, incluindo o espaço.

//  Exercícios de escrita de código 
// Exercício 1
// let nome = prompt("Qual é o seu nome?")
// let email = prompt("Qual é o seu email?")

// const frase = `O email ${email} foi cadastrado com sucesso. Seja bem-vinda(o) ${nome}!`
// console.log(frase)

// Exercício 2
//a.
// const listaComidasPreferidas = ["Pão de queijo", "Pão de mel", "Pizza", "Panqueca", "Sorvete"]

// //b.
// console.log("Essas são as minhas comidas preferidas:")
// console.log (listaComidasPreferidas[0])
// console.log(listaComidasPreferidas[1])
// console.log(listaComidasPreferidas[2])
// console.log(listaComidasPreferidas[3])
// console.log(listaComidasPreferidas[4])

// //C.
// let comidaPreferidaUsuario = prompt("Qual é a sua comida preferida?")
// listaComidasPreferidas.splice(1,1, comidaPreferidaUsuario) 
// console.log(listaComidasPreferidas)

// Exercício 3
//a.
let listaDeTarefas = []
//b.
let tarefa1 = prompt("Cite uma tarefa que você realiza durante o dia")
let tarefa2 = prompt("Cite uma segunda tarefa que você realiza durante o dia")
let tarefa3 = prompt("Cite uma terceira tarefa que você realiza durante o dia")
listaDeTarefas = [tarefa1, tarefa2, tarefa3]

//c.
console.log(listaDeTarefas)

//d.
let indice = prompt("Escolha um número entre 0 e 2")

//e.
listaDeTarefas.splice(indice,1)

//f.
console.log(listaDeTarefas)
