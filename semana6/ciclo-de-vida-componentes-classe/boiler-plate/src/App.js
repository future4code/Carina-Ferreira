import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [
        {
          id: 1, 
          texto: 'Passear com os cachorros',
          completa: false 
        },
        {
          id: 1, 
          texto: 'Ler um livro',
          completa: true 
        }
      ],


      inputValue: '',
      filtro: '',
    }

  componentDidUpdate() {
    const tarefa = this.state.tarefas;
    window.localStorage.setItem('tarefas', JSON.stringify(tarefa));
  };

  componentDidMount() {
    const tarefaEmString = window.localStorage.getItem('tarefas');
    if (tarefaEmString) {
      const tarefa = JSON.parse(tarefaEmString);

      this.setState({ tarefas: tarefa})
    }
  };

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value });
  }

  criaTarefa = () => {
      console.log("CLICOU NO BOTAO DE ADICIONAR");
      const copiaTarefas = [...this.state.tarefas];
  
      const novaTarefa = {
        id:Date.now(),
        texto: this.state.inputValue,
        completa:'false',
      };
  
      copiaTarefas.push(novaTarefa);
  
      this.setState({ tarefas: copiaTarefas, inputValue: "",});
    };


  selectTarefa = (id) => {
    console.log("REMOVENDO", id);
  
    const copiaTarefas = this.state.tarefas.map((tarefa) => {
        if (id === tarefa.id) {
          const novaTarefa = {
            ...tarefa,
            completa: !tarefa.completa
          }
          return novaTarefa;
          } else {
            return tarefa;
          }
        }
      );
  
      this.setState({ tarefas: copiaTarefas });
    };
  



  onChangeFilter = (event) => {
    this.setState({filtro: event.target.value})
  };
  
  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      };
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} placeholder="Nova tarefa"/>
          <button onClick={this.criaTarefa} >Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa} 
                onClick={() => this.selectTarefa(tarefa.id) }
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    );
  }

}
export default App
