//Exercícios 1)
//a- Conseguimos acessar os parâmetros por meio do process.argv e a posição desse parâmetro no array.

//b e c:

const nome = process.argv[2] 

const idade = Number(process.argv[3])

const novaIdade = idade + 7;

console.log(`Olá, ${nome}! Você tem ${idade} anos.`)
console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${novaIdade}`)