// Exercício 1
// a) Crie uma variável minhaString do tipo string e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece?

// let minhaString: string = "Oi, sou uma string"
// minhaString = "Sou uma nova string"
// minhaString = 3

// Resposta: Como a variável foi tipada como string, não é possível declarar ela depois como número, pois quebra o código.

// b) Crie uma variável **meuNumero** do tipo `number` e atribua um valor numérico. Como podemos fazer para que essa variável também aceite strings?
let meuNumero: Number | string = 20
//usamos o union type para 

// c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:
// `nome`, que é uma string; `idade`, que é um número; `corFavorita`, que é uma string.

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: CoresArcoIris
}

enum CoresArcoIris {
    VIOLETA = "Violeta", 
    ANIL = "Anil",
    AZUL = "Azul",
    VERDE = "Verde",
    AMARELO = "Amarelo",
    LARANJA = "Laranja",
    VERMELHO = "Vermelho"
}

const pessoa: Pessoa = {
    nome: "Carina",
    idade: 23,
    corFavorita: CoresArcoIris.AZUL  
}

const pessoa2: Pessoa = {
    nome: "Marcela",
    idade: 19,
    corFavorita: CoresArcoIris.VIOLETA 
}

const pessoa3: Pessoa = {
    nome: "Nick",
    idade: 49,
    corFavorita: CoresArcoIris.VERDE
}

const pessoa4: Pessoa = {
    nome: "Henrique",
    idade: 30,
    corFavorita: CoresArcoIris.ANIL
}

// d) Modifique o tipo de objeto para que possamos apenas escolher entre as cores do arco-íris. Utilize um `enum` para isso. FEITO!

