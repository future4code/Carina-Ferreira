//  Exercícios de interpretação de código:

//  Exercício 1
//a. Será impresso um novo array com o nome e apelidos de todos os nomes, juntamente com o index.

//  Exercício 2
//a. Serão impressos os três nomes: Amanda Rangel, Laís Petra, Letícia Chijo

//  Exercício 3
//a. Serão impressos os apelidos que não forem Chijo. { nome: "Amanda Rangel", apelido: "Mandi" }, { nome: "Laís Petra", apelido: "Laura" }.


//  Exercícios de escrita de código:

//  Exercício 1

// 1. Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações pedidas nos itens abaixo 
//utilizando as funções de array **map** e **filter:**

    
const pets = [
{ nome: "Lupin", raca: "Salsicha"},
{ nome: "Polly", raca: "Lhasa Apso"},
{ nome: "Madame", raca: "Poodle"},
{ nome: "Quentinho", raca: "Salsicha"},
{ nome: "Fluffy", raca: "Poodle"},
{ nome: "Caramelo", raca: "Vira-lata"},
]


// a) Crie um novo array que contenha apenas o nome dos doguinhos
function extrairNome(pets) {
return pets.nome
}

const nomeDosPets = pets.map(extrairNome)
console.log(nomeDosPets)


//b) Crie um novo array apenas com os [cachorros salsicha]

const petsRacaSalsicha = pets.filter((pets, indice, array) => {
return pets.raca === "Salsicha"
})

console.log(petsRacaSalsicha)


// c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: 
//"Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!"
const petsRacaPoodle = (pets, i, array) => {
return pets.raca === "Poodle"
}
    
const petsNomePoodle = pets.filter(petsRacaPoodle).map(extrairNome)

console.log(`Você ganhou um cupom de desconto de 10% para tosar a(o) ${petsNomePoodle[0]}`)

console.log(`Você ganhou um cupom de desconto de 10% para tosar a(o) ${petsNomePoodle[1]}`)


//  Exercício 2

//Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

//a) Crie um novo array que contenha apenas o nome de cada item
function extrairNome(produtos) {
return produtos.nome
}
    
const nomeDosProdutos = produtos.map(extrairNome)
console.log(nomeDosProdutos)

    
//b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles
const descontoProdutos = produtos.filter((produtos)=>{
    return produtos.nome && (produtos.preco * 0,05)}
)
console.log(descontoProdutos)
    
    


//c) Crie um novo array que contenha apenas os objetos da categoria Bebidas
const produtosNaCategoriaDeBebidas = produtos.filter((produtos, indice, array) => {
return produtos.categoria === "Bebidas"
})
    
console.log(produtosNaCategoriaDeBebidas)
    
    
//d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"
const produtosYpe = produtos.filter((produtos, indice, array) => {
return produtos.nome.includes ("Ypê")
})
      
console.log(produtosYpe)
    

//e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". 
const produtosYpe2 = produtosYpe.map((produtos) => {
return `Compre ${produtos.nome} por ${produtos.preco}`

})
console.log(produtosYpe2)

