///////////BlackJack//////////

console.log("Boas vindas ao jogo de Blackjack!")
const carta = comprarCarta()


if(confirm("Quer iniciar uma nova rodada?")) {
   const cartaUsuario = comprarCarta()
   const cartaComputador = comprarCarta()
   const cartaUsuario2 = comprarCarta()
   const cartaComputador2 = comprarCarta ()
let somaCartasUsuario = cartaUsuario.valor + cartaUsuario2.valor
let somaCartasComputador = cartaComputador.valor + cartaComputador2.valor
console.log(`Usuário cartas: ${cartaUsuario.texto} ${cartaUsuario2.texto}- Pontuação: ${somaCartasUsuario}`)
console.log (`Computador cartas: ${cartaComputador.texto} ${cartaComputador2.texto} - Pontuação: ${somaCartasComputador}`)

let descobreVencedor = (somaCartasComputador, somaCartasUsuario)
   if (somaCartasUsuario > somaCartasComputador){
   console.log("O usuário ganhou!")
}if (somaCartasUsuario < somaCartasComputador){
   console.log("O computador ganhou!")

}if (somaCartasUsuario === somaCartasComputador)
   console.log("Empate!")

} 

else {
	// o que fazer se o usuário clicar "cancelar"
   console.log("O jogo acabou")
}















//    const cartaUSuario = comprarCarta()
//    const cartaUsuario2 = comprarCarta()
//    const cartaComputador = comprarCarta()
//    const cartaComputador2 = comprarCarta ()

// let somaCartasUsuario = cartaUSuario + cartaUsuario2
// let somaCartasComputador = cartaComputador + cartaComputador2
// console.log(`Usuário cartas: ${carta.texto} ${carta.texto}, - ${somaCartasUsuario}`)
// console.log (`Computador cartas: ${carta.texto} ${carta.texto}, - ${somaCartasComputador}`)


// } else {
// 	// o que fazer se o usuário clicar "cancelar"
//    console.log("O jogo acabou")
// }

