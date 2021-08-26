// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   let arrayTamanho = array.length
   return arrayTamanho
}
console.log ("Tamanho do array:", retornaTamanhoArray(arrayTamanho))




// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  let arrayInvertido = array.reverse()
  return arrayInvertido
}
retornaArrayInvertido(arrayInvertido)
console.log(arrayInvertido)



// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
array.sort(function(a, b){
    return a - b;
})
return array}
retornaArrayOrdenado(arrayOrdenado)



// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const arrayPares = array.filter(numero => numero % 2 === 0)

return arrayPares 
}
retornaNumerosPares(array)


// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const arrayPares2 = array.filter(num => num % 2 === 0)
    // let arrayPares2 = Math.pow()
    return arrayPares2
}
retornaNumerosParesElevadosADois(array)



// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNumero = 0;
  for (let i = 0; i < array.length; i++){
      if(array[i] > maiorNumero){
          maiorNumero = array[i]
      }
  }
  return maiorNumero
}
const resultadoMaiorNumero = retornaMaiorNumero(array)

retornaMaiorNumero(array)


// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
let recebeObjeto = {
    maiorNumeroObjeto: 
    maiorDivisivelPorMenor: 
    diferença:

}


}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}