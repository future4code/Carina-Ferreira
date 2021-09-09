import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import FotoPerfil from './img/carina.png';
import IconeEmail from './img/email.jpeg';
import IconeEndereco from './img/localizacao.png';
import IconePC from './img/pc.jpeg';
import IconeMaca from './img/apple.jpg';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem= {FotoPerfil}
          nome="Carina Ferreira" 
          descricao="Oi, eu sou a Carina. Sou estudante da labenu e estou em transição de carreira."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>


      <div className="page-section-container">
        <CardPequeno
          imagem= {IconeEmail}
          email="Email: carinasf14@gmail.com" 
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          imagem= {IconeEndereco}
          email="Endereço: Rua Catarina, nº50" 
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={IconePC}
          nome="UOL" 
          descricao="Desenvolvedora fullstack JR" 
        />
        
        <CardGrande 
          imagem={IconeMaca} 
          nome="Emporium X" 
          descricao="Controle de Qualidade" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
