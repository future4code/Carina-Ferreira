//Exercício 4

// a) Como você faria, já com a extensão instalada, para gerar um arquivo javascript a partir do  arquivo typescript com o código abaixo?

type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

//Resposta: Para gerar o arquivo em js é necessário dar o comando tsc. 

// b) E se este arquivo estivesse dentro de uma pasta chamada `src`. O processo seria diferente? Se sim, descreva as diferenças.
//Resposta: Basta garantir que o terminal esteja dentro da pasta src e rodar o comando tsc.

// c) Existe alguma maneira de **transpilar** múltilplos arquivos de uma vez só? Caso conheça, explique como fazer.
//Resposta: Basta deixar os arquivos na pasta src, que ao rodar o comando tsc, todos os arquivos em TS serão transpilados em JS, junto com um 
//arquivo .map que liga qual arquivo TS corresponde ao JS criado.

// d) Compare esse arquivo com o que criamos durante a aula (ele está disponível na área de configuração do projeto ali em cima). 
// Leia as descrições sobre cada uma das propriedades. Alguma configuração que chamou sua atenção? O que mudou em comparação com
// o arquivo criado pelos slides?
//Resposta: Quando geramos o arquivo tsconfig.json ele vem com uma série de funcionalidades, algumas comentadas, mas no caso das aulas, definimos algumas
// delas, por exemplo target- ES6, sourceMap:true, p saber qual arquivo ts gerou o js (facilita o debug); outDir: "./build" p onde os arquivos js 
//serão encaminhados; rootDir: src- diretório raiz, entre outros.