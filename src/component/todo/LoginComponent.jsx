import React, { Component } from "react"
import AuthentificationService from "./AuthentificationService"

class LoginComponent extends Component{

    constructor(proprs){
        super(proprs)
        this.state = {
            username : 'ak.belouafa',
            password : '',
            hasLoginFailed: false,
            hasShowSeccesMessage: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }
    

   
    handleChange(event){
        
        this.setState({[event.target.name] :event.target.value})
    }

    loginClicked(){
        if(this.state.username==='ak.belouafa' && this.state.password==='123'){
            AuthentificationService.registerSuccessfullLogin(this.state.username)
            this.props.history.push(`/welcome/${this.state.username}`)            

        }else{
            this.setState(
                {
                    hasShowSeccesMessage: false,
                    hasLoginFailed: true
                }
                )
        }
       
    }
    

    render(){
        return(
            <div>
                <h1>Login</h1>
                <div className="container">
                {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                
                {this.state.hasShowSeccesMessage && <div>Login SucessFull</div>}
                User Name : <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                Password : <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                <button  className="btn btn" onClick={this.loginClicked}>Login</button>
                </div>
               
            </div>
            )
    }
} 

export default LoginComponent