// Exercício 2

const conta = process.argv[2]

const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])

switch (conta) {
    case "add":
      resultado = num1 + num2
      break
    case "sub":
      resultado = num1 - num2
      break
    case "mult":
        resultado = num1 * num2
      break
    case "div":
        resultado = num1 / num2
      break
    default:
      resultado = "Insira uma operação válida"
  }
  
  console.log("Resposta:", resultado)

  //Rodar npm start tipo-de-conta num1 num2 para obter o resultado.