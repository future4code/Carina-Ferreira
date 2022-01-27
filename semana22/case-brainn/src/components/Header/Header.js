import {EstiloHeader, EstiloLogo, EstiloPainel, EstiloTexto, EstiloBotao, TesteDiv, TextoFiltro} from './styled';
import Logo from '../../img/logo.png'
import { goHome } from "../../routes/coordinator";
import { useHistory } from "react-router";



const Header = () => {

  const history = useHistory()

  const onClickLogo = () =>{
    goHome(history)
  }

  return (
    <div>
        <EstiloHeader>
            <EstiloLogo src = {Logo}  onClick={() => onClickLogo()}/>
        </EstiloHeader>

        <EstiloPainel> 
            <EstiloTexto> Milhões de filmes, séries e pessoas para descobrir. Explore já.</EstiloTexto>
            <TextoFiltro>FILTRE POR:</TextoFiltro>
            <TesteDiv>
                <EstiloBotao>Ação</EstiloBotao>
                <EstiloBotao>Aventura</EstiloBotao>
                <EstiloBotao>Animação</EstiloBotao>
                <EstiloBotao>Comédia</EstiloBotao>
                <EstiloBotao>Crime</EstiloBotao>
                <EstiloBotao>Documentário</EstiloBotao>
                <EstiloBotao>Drama</EstiloBotao>
                <EstiloBotao>Família</EstiloBotao>
                <EstiloBotao>Fantasia</EstiloBotao>
                <EstiloBotao>História</EstiloBotao>
                <br/>
                <EstiloBotao>Terror</EstiloBotao>
                <EstiloBotao>Música</EstiloBotao>
                <EstiloBotao>Mistério</EstiloBotao>
                <EstiloBotao>Romance</EstiloBotao>
                <EstiloBotao>Ficção científica</EstiloBotao>
                <EstiloBotao>Cinema TV</EstiloBotao>
                <EstiloBotao>Thriller</EstiloBotao>
                <EstiloBotao>Guerra</EstiloBotao>
                <EstiloBotao>Faroeste</EstiloBotao>
            </TesteDiv>

        </EstiloPainel>
    </div>
  );
}

export default Header;