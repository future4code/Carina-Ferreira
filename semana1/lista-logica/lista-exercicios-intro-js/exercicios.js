// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  let perguntaUsuarioAltura = Number(prompt("Informe um número"))
  let perguntaUsuarioLargura = Number(prompt("Informe outro número"))

area = perguntaUsuarioAltura * perguntaUsuarioLargura
console.log(area)
 
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
const perguntaAnoAtual = Number(prompt("Em que ano estamos?"))
const perguntaAnoNascimento = Number(prompt("Qual é o seu ano de nascimento?"))

anoNascimentoUsuario = perguntaAnoAtual - perguntaAnoNascimento

console.log(anoNascimentoUsuario)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  IMC = peso/(altura * altura)
return IMC
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nomeUsuario = prompt("Qual é o seu nome?")
  const idadeUsuario = prompt("Qual é a sua idade?")
  const emailUsuario = prompt("Qual é o seu email?")
  console.log(`Meu nome é ${nomeUsuario}, tenho ${idadeUsuario} anos, e o meu email é ${emailUsuario}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let cor1 = prompt("Informe sua primeira cor favorita!")
  let cor2 = prompt("Informe sua segunda cor favorita!")
  let cor3 = prompt("Informe sua terceira cor favotita!")

  console.log([cor1, cor2, cor3])
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
quantidadeIngressos = custo / valorIngresso
return quantidadeIngressos
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
return (array[0])
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
return array[array.length -1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

let trocaArray = array[0]
array[0] = array[array.length-1]
array[array.length-1] = trocaArray
return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toLowerCase() === string2.toLowerCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
const anoAtual = Number (prompt("Qual é o ano atual?"))
const anoNascimento = Number (prompt("Qual é o seu ano de nascimento?"))
const anoEmissao = Number (prompt("Qual é o ano da emissão da sua identidade?"))

const idade = anoAtual - anoNascimento 
const tempoDesdeEmissao = anoAtual - anoEmissao
if (idade <= 20 && tempoDesdeEmissao >=5){
  console.log(true)
} else if (idade > 20 && idade <= 50 && tempoDesdeEmissao >= 10){
  console.log(true)
}else if (idade > 50 && tempoDesdeEmissao >=15){
  console.log(true)
}else{
  console.log(false)
}
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  if (ano % 400 === 0){
  return true

} else if(ano % 4 === 0 && !(ano % 100 == 0)){
  return true
}else{
  return false
  }
}
// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui





