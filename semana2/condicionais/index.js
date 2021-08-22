// Exercícios de interpretação de código 

// Exercício 1
// a. O código recebe um número do usuário e testa se o valor informado é divisível por 2.
// b. Ele informa "passou no teste" se o número informado for igual ao resto 0, sem sobras de divisão por 2, no caso, números pares.
// c. Ele informa "não passou no teste" se o número informado for maior que 0, ou seja, com sobras de divisão por 2, número ímpar.

// Exercicio 2
// a. O código serve para informar o valor da fruta quando o usuário inserir o item desejado.
// b. O preço da fruta maçã é R$ 2,25
// c. O console log informaria a resposta para pêra e para o default: O preço da fruta pêra é R$ 5,50 O preço da fruta é R$ 5,00 

// Exercício 3
// a. Pedindo um número ao usuário por meio do prompt.
// b. Caso o valor informado seja 10, será informado: Esse número passou no teste. Caso seja -10 irá dar erro.
// c. Sim, porque a mensagem dentro do escopo não possui valor

// Exercícios de escrita de código

// Exercício 1. a/b/c
// const idadeUsuario = Number(prompt("Qual é a sua idade?"))
// if (idadeUsuario >= 18) {
//     console.log("Você pode dirigir")
// }
// if (idadeUsuario <= 18) {
//     console.log("Você não pode dirigir")
// }
 


// Exercício 2
// let turnoAulaUsuario = prompt ("Em qual turno você estuda? Responda com M (para matutino), V (para vespertino) ou N (para noturno)") 
// if (turnoAulaUsuario === "M") {
//     console.log("Bom dia!")
// } else if (turnoAulaUsuario === "V") {
//     console.log("Boa tarde!")
// } else if (turnoAulaUsuario === "N") {
//     console.log("Boa noite!")
// } else {
//     console.log ("Insira um turno válido: M, V ou N")
// }



//   Exercício 3
// switch (turnoAulaUsuario) {
//     case "M":
//         console.log("Bom dia")
//         break;
//     case "V":
//         console.log("Boa tarde!")
//         break;
//     case "N":
//         console.log ("Boa noite!")
//         break;
//     default:
//         console.log("Insira um turno válido: M, V ou N")
//         break;
// }

// Exercício 4
let generoFilme = prompt("Qual é o gênero do filme?")
let valorIngressoFilme = prompt("Qual é o valor do ingresso?") 
if (generoFilme === "fantasia" && valorIngressoFilme < 15){
    console.log("Bom filme!")
}else {
    console.log("Escolha outro filme ):")
}

