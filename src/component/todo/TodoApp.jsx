import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import AuthentificationRoute from './AuthentificationRoute'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import ErrorComponent from './ErrorComponent'
import LoginComponent from './LoginComponent'
import LogoutComponent from './LogoutComponent'
import TodosComponent from './TodosComponent'
import TodoComponent from './TodoComponent'
import WelcomeComponent from './WelcomeComponent'

import '../../bootstrap.css';

class TodoApp extends Component {

    render(){
        return (
            <div className="TodoApp">                              
                    <>  
                        <BrowserRouter>
                        <HeaderComponent/>
                        <Switch>
                            <Route path="/" exact component={LoginComponent}/>
                            <Route path="/login" component={LoginComponent}/>
                            <AuthentificationRoute Route path="/welcome/:name" component={WelcomeComponent}/>
                            <AuthentificationRoute path="/todos/:id" component={TodoComponent}/>
                            <AuthentificationRoute path="/todos" component={TodosComponent}/>
                            <AuthentificationRoute path="/logout" component={LogoutComponent}/>
                            <Route  component={ErrorComponent}/>
                        </Switch>
                        <FooterComponent/>
                        </BrowserRouter>
                    </>
              
              
            </div>          
        )
    }
}















export default TodoApp