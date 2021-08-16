// Exercícios de interpretação de código

// Exercício 1
//a. Matheus Natchtergale
//b. Virginia Cavendish
//c. Globo, 14h

//Exercício 2
//a. Juca, 3, SRD
// Juba, 3, SRD
// Jubo, 3, SRD

//b. faz uma spread, que é a cópia inteira de um objeto

// Exercícios de escrita de código 

// Exercício 1
//a.
const pessoa = {
    nome: "Carina",
    apelidos: ["Catarina", "Cat", "Catnip"]   
}

function funcao(pessoa) {
    const frase = `Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`
    return frase
}

console.log(funcao(pessoa))

//b.
// const pessoa2 = {
//     ...pessoa,
//     apelidos: ["Ca", "Cacá", "Cafe"]
// } 
// console.log(funcao(pessoa2))

// // Exercícios 2
// const perfil = {
//     nome: "Naiara",
//     idade: 23,
//     profissao: "Farmacêutica"
// }

// const perfil2 = {
//     nome: "Henrique",
//     idade: 29,
//     profissao: "Contador"
// }

// const minhaFuncao = (perfil) => {
//     return [nome, nome.lenght, idade, profissao, profissao.lenght]
// }
// console.log(minhaFuncao(perfil))
// console.log(minhaFuncao(perfil2))

// Exercício 3

