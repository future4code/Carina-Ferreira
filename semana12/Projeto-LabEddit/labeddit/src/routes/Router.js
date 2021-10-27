import React from 'react'
import { Switch, Route } from 'react-router-dom'
import {LoginPage} from '../pages/LoginPage/LoginPage'
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import FeedPage from '../pages/FeedPage/FeedPage'
import PostPage from '../pages/PostPage/PostPage'

const Router = ({setLoginButton}) => {
    return(
            <Switch>
                <Route exact path = '/'>
                    <LoginPage setLoginButton={setLoginButton}/>
                </Route>
                <Route exact path = '/signup'>
                    <SignUpPage setLoginButton={setLoginButton}/>
                </Route>
                <Route exact path = '/feed'>
                    <FeedPage/>
                </Route>
                <Route exact path = '/post/:id'>
                    <PostPage/>
                </Route>
                <Route>
                    <div>Página não encontrada</div>
                </Route>
            </Switch>
    )
}

export default Router