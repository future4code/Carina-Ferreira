import React from 'react';

export class Etapa2 extends React.Component {
    render(){
      return (
        <div>
            <h1> Etapa 2 - Informações do Ensino Superior </h1>
        <h3>5. Qual curso? </h3>
        <input
        placeholder= {"Curso"}
        />
        
        <h3>6. Qual a unidade de ensino? </h3>
        <input
        placeholder= {"Unidade de ensino"}
        />
        </div>
       );
      }
    }

export default Etapa2;
