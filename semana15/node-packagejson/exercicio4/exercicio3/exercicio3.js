// Exercício 3:

const listaDeTarefas = [
    "Varrer a casa",
    "Lavar roupa"
]

novaTarefa = process.argv[2]

listaDeTarefas.push(novaTarefa)

console.log("Tarefa adicionada com sucesso!")
console.log(listaDeTarefas)


//Rodar npm start nova-tarefa para obter a lista de tarefas atualizada.