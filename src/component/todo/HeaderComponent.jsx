import React, { Component } from "react"
import AuthentificationService from "../todo/AuthentificationService"
import { Link, withRouter } from "react-router-dom"


class HeaderComponent extends Component{
    render(){
        const isUserLoggedIn = AuthentificationService.isUserLoggedIn()
       
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="http://localhost:4200/" className="navbar-brand"> AK APP </a></div>
                    <ul className="navbar-nav">
                        {isUserLoggedIn && <li> <Link className="nav-link" to="/welcome/ak">Home</Link> </li>}
                        {isUserLoggedIn && <li> <Link className="nav-link" to="/todos">Todos</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn &&<li> <Link className="nav-link" to="/login">Login</Link></li>}
                        {isUserLoggedIn && <li> <Link className="nav-link" to="/logout" onClick={AuthentificationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
           
        )
    }
}

export default  withRouter(HeaderComponent);