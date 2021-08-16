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
// const pessoa = {
//     nome: "Carina",
//     apelidos: ["Catarina", "Cat", "Catnip"]   
// }

// function funcao(pessoa) {
//     const frase = `Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`
//     return frase
// }

// console.log(funcao(pessoa))

// //b.
// const pessoa2 = {
//     ...pessoa,
//     apelidos: ["Ca", "Cacá", "Cafe"]
// // } 
// console.log(funcao(pessoa2))

// Exercícios 2
//a.
const perfil1 = {
    nome: "Naiara",
    idade: 23,
    profissao: "Farmacêutica"
}

const perfil2 = {
    nome: "Henrique",
    idade: 29,
    profissao: "Contador"
}

//b.
function minhaFuncao(perfil1){
    const infos1 = [perfil1.nome, perfil1.nome.length, perfil1.idade, perfil1.profissao, perfil1.profissao.length]
return infos1
}

console.log(minhaFuncao(perfil1))
console.log(minhaFuncao(perfil2))


// Exercício 3
//a.
const carrinho = []

//b.
const fruta1 = {
    nome: "morango",
    disponibilidade: true
}

const fruta2 = {
    nome: "carambola",
    disponibilidade: true
}

const fruta3 = {
    nome: "banana",
    disponibilidade: true
}
//c.
function adicionaFruta(fruta1){
    carrinho.push(fruta1)
    carrinho.push(fruta2)
    carrinho.push(fruta3)

}
//d.
adicionaFruta(fruta1, fruta2, fruta3)
console.log(carrinho)
