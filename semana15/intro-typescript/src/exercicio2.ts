//Exercício 2:

// Observe a função a seguir, escrita em JavaScript:
type Estatisticas = {
    maior: number,
    menor: number,
    media: number
  }

function obterEstatisticas(numeros: number[]) {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: Estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

// a. Quais são as entradas e saídas dessa função? Copie a função para um arquivo .ts e faça a tipagem desses parâmetros
// Resposta: A função recebe um array de números para ordenar, sendo seu type = number.

// b. Que outras variáveis compõem essa função? Explicite a tipagem de todas elas
// Resposta: As variáveis correspondentes às estatísticas.

// c. Crie um *type* para representar uma **amostra** de dados, isto é, um objeto com as chaves **numeros** e **obterEstatisticas**. 
type AmostraDeDados = {
    numeros: number[],
    obterEstatisticas: (numeros: number[]) => Estatisticas
  }
  
  const amostraDeDados: AmostraDeDados = {
    numeros: [10, 20, 30],
    obterEstatisticas
  }
  
  console.log(amostraDeDados)
