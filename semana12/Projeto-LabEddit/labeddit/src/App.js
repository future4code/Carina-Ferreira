import { useState } from 'react';
import Router from './routes/Router'
import Header from './components/Header/Header';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components'
// import {LoginPage} from './pages/LoginPage/LoginPage'
// import SignUpPage from './pages/SignUpPage/SignUpPage';
// import FeedPage from './pages/FeedPage/FeedPage'
// import PostPage from './pages/PostPage/PostPage'

const EstiloDiv = styled.div`
background-color: #d3d3d354;
`

const App = () => {
  const token = localStorage.getItem("token")
    const [loginButton, setLoginButton] = useState(token? "Logout" : "Login")

  return (
    <EstiloDiv>
      <BrowserRouter>
        <Header loginButton={loginButton} setLoginButton={setLoginButton}/>
        <Router loginButton={loginButton} setLoginButton={setLoginButton}/>
      </BrowserRouter>
    </EstiloDiv>
  );
}

export default App;
