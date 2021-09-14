
// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b 
// Exemplo:

// function checarDesigualdade(a, b) {

//     return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
// }
// console.log(checarDesigualdade(1, 2));

// // b-)Compare a igualdade entre a===b

// function checarIgualdade(a, b) {
//     //  Sua lógica aqui
//     return `No comparador de igualdade ${a} === ${b} é ${a ===b}`
// }
// console.log(checarIgualdade(1,2))

// // c-)Faça uma função chamada "verificaSeEMaior"
// function verificaSeEMaior(num1,num2){
//     return `No comparador ${num1} > ${num2} é ${num1 > num2}`
// }
// console.log(verificaSeEMaior(321, 2156));


// Exercício 2------------------------------------------------------------------------------------
//Escreva true or false para as comparações abaixo:
// exemplo 1>2 = false
// a-) 1==='1'= false
// b-) 1=='1'= true
// c-) 'a'==='b'= true
// d-) 'b'>'a'= true
// e-) 0!==null= true




// CONDICIONAIS

// Exercício 3------------------------------------------------------------------------------------
// Escreva uma função que receba do usuário **nomeDoUsario**, **anoDeNascimento**, **senhaDoUsuario** e **nacionalidade** 
// e ****guarde essas informações dentro de um array `usuarios`. Porém só poderão se cadastrar:

// - Usuários maiores de 18 anos
// - A senha deve ter no mínimo 6 caracteres
// - E que a nacionalidade seja brasileira.

// const cadastro=()=>{
// const usuario=[]

// const nomeDoUsuario = prompt("Digite seu nome") 
// const anoDeNascimento = Number(prompt("Digite seu ano de nascimento") )
// const senhaDoUsuario = prompt("Digite sua senha") 
// const nacionalidade = prompt("Digite sua nacionalidade em letra minúscula. EX: brasileira") 
    
// const ehMaiorDeIdade = 2021 - anoDeNascimento
    
// if(senhaDoUsuario.length<6){
// console.log('sua senha deve ter pelo menos 6 caracteres')
// }
// if(ehMaiorDeIdade<18){
// console.log('Para se cadastrar precisa ter 18 anos')
// }
// if(nacionalidade!=="brasileira"){
// console.log('Para se cadastrar precisa ser brasileiro')
// }
    
// if(ehMaiorDeIdade>=18 && nacionalidade === "brasileira" && senhaDoUsuario.length>=6){
// usuario.push(nomeDoUsuario,anoDeNascimento,nacionalidade,senhaDoUsuario)
// console.log('Usuário cadastrado com sucesso')
// }
    
// console.log("usuario:", usuario)
// }
// console.log(cadastro());
    
    
// Exercício 4-----------------------------------------------------------------------------------------------
// Escreva uma função que peça uma senha para o usuário e verifique se está é a mesma senha cadastrada por ele.  
// Dentro da função defina uma senha válida  Ex: const senha=”labenu”

// - Caso a senha seja válida imprima no console a mensagem (Usuário Logado)
// - Caso a senha seja inválida imprima no console (Senha Inválida)



// const login = () => {
//     const login = "labenu"
//     //  Sua lógica aqui
// const verificaSenha = prompt("Informe sua senha")

// if(verificaSenha === login){
// return console.log("Usuário logado")
// }else{
//     return console.log("Senha inválida")
// }
// }

// console.log(login());



// Exercício 5----------------------------------------------------------------------------------------------------
// Escreva uma função que receba do usuário seu nome, e o nome da vacina que tomou. E retorne a mensagens a seguir dependendo da vacina tomada.
// - Coronavac = 28 dias
// - Astrazenica = 90 dias
// - Pfizer = 90 dias



// const primeiraDose = () => {
//     //  Sua lógica aqui

// const nome = prompt("Qual é o seu nome? Digite em letra minúscula")
// const vacina = prompt("Qual vacina você tomou? Digite em letra minúscula" )
// let tempo1 = "28"
// let tempo2 = "90"
// let tempo3 = "90"
// let data1 = "29/09/2021"
// let data2 = "01/12/2021"
// let data3= "01/12/2021"

// if (vacina === "coronavac"){
//  return console.log(`Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempo1} dias. Compareça no posto na data ${data1}`)

// }else if(vacina === "astrazeneca"){
//     return console.log(`Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempo2} dias. Compareça no posto na data ${data2}`)
// }else if(vacina === "pfizer"){
//     return console.log(`Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempo3} dias. Compareça no posto na data ${data3}`)
// }else{
//     return console.log("Digite uma vacina válida (coronavac, astrazeneca ou pfizer)")
//     }
// }
// console.log(primeiraDose())





// LOOP+CONDICIONAL

// // Exercício 6 -------------------------------------------------------------------------------------
// Escreva uma função para validar a segunda dose de um usuário, que receba o nomeDoUsuário e mude o valor
//  da propriedade imunização para “completa” para isso vamos te fornecer uma lista de usuários.

// const segundaDose = (nomeDoUsuario) => {
//     const usuarios = [
//         { nome: "Artur", imunizacao: "incompleta" },
//         { nome: "Barbara", imunizacao: "incompleta" },
//         { nome: "Carlos", imunizacao: "incompleta" }
//     ]

//     //  Sua lógica aqui
// const pessoaSegundaDose = usuarios.filter((usuario) => {
//     if (usuario.nome === nomeDoUsuario){
//                 usuario.imunizacao = "completa"
//                 return usuario
//             }
//     })
//     return pessoaSegundaDose
// }
// console.log(segundaDose("Barbara"));



// // Exercício 7 --------------------------------------------------------------------------------------
// As pessoas que tomaram a primeira dose da vacina, não voltaram no postinho para a segunda dose e 
// temos que enviar uma mensagem para elas no app.Escreva uma função que leia a lista de usuários e 
// verifique se a imunização está completa ou não e caso não esteja completa, imprima no console uma
// mensagem avisando que ele deve voltar ao posto para tomar a segunda dose.

// const avisoAosAtrasados = () => {
//     const usuarios = [
//         { nome: "Artur", imunizacao: "incompleta" },
//         { nome: "Barbara", imunizacao: "completa" },
//         { nome: "Carlos", imunizacao: "incompleta" }
//     ]

//     //  Sua lógica aqui
// const mensagemPessoasImunizadas = usuarios.filter((usuario) => {
//     if (usuario.imunizacao === "incompleta") {
//             return usuario
//     }
// })
// const pessoasImunizadas = mensagemPessoasImunizadas.map((usuario) => {
//     console.log(`Olá ${usuario.nome}! Sua imunização está ${usuario.imunizacao}, por favor volte ao postinho
//     para tomar a segunda dose.`)
// })
//     return pessoasImunizadas


// }
// console.log(avisoAosAtrasados());



// // DESAFIO-----------------------VAI FICAR P OUTRO DIA ): CANSADA DEMAIS -------------------------------------------------------------------

// const usuarios = [
//     {
//         nome: "Artur",
//         ano: 2000,
//         nacionalidae: "brasileiro",
//         senha: "123456",
//         vacina: "pfizer",
//         imunizacao: "incompleta"
//     },
//     {
//         nome: "Bárbara",
//         ano: 1984,
//         nacionalidae: "brasileira",
//         senha: "labenu",
//         vacina: "astrazenica",
//         imunizacao: "completa"
//     },
//     {
//         nome: "Carlos",
//         ano: 2000,
//         nacionalidae: "brasileiro",
//         senha: "123456",
//         vacina: "coronavac",
//         imunizacao: "incompleta"
//     }

// ]

// const cadastro = () => {
//     //  Sua lógica aqui
// }
// console.log(cadastro());

// const login = () => {
//     //  Sua lógica aqui
// }
// console.log(login());

// const primeiraDose = () => {
// //  Sua lógica aqui
// }
// console.log(primeiraDose())
// const segundaDose = (nomeDoUsuario) => {
//     //  Sua lógica aqui
// }
// console.log(segundaDose("ALGUM NOME AQUI"));

// const avisoAosAtrasados = () => {
//     //  Sua lógica aqui
// }
// console.log(avisoAosAtrasados());


