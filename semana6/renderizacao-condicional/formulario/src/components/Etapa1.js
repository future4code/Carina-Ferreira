import React from 'react';

export class Etapa1 extends React.Component {
    render(){
      return (
        <div>
            <h1> Etapa 1 - Dados Gerais </h1>
        <h3>1. Qual o seu nome? </h3>
        <input
        placeholder= {"Nome"}
        />
        
        <h3>2. Qual a sua idade? </h3>
        <input
        placeholder= {"Idade"}
        />
        
        <h3>3. Qual é o seu email? </h3>
        <input
        placeholder= {"Email"}
        />

        <h3>4. Qual é a sua escolaridade? </h3>
        <input
        placeholder= {"Escolaridade"}
        />
        </div>
       );
      }
    }

export default Etapa1;
