// Exercício 3:

const listaDeTarefas = [
    "Varrer a casa",
    "Lavar roupa"
]

novaTarefa = process.argv[2]

listaDeTarefas.push(novaTarefa)

console.log("Tarefa adicionada com sucesso!")
console.log(listaDeTarefas)


  //Rodar node exercicio3.js nome-da-tarefa para obter a lista de tarefas.