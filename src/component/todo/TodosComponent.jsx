
import React, { Component } from "react"
import TodoDataService from "../../api/todo/TodoDataService"
import AuthentificationService from "./AuthentificationService"
import moment from "moment"

class TodosComponent extends Component{
    constructor(props){
        super(props)
        console.log('constructor')
        this.state = {
            todos: [],
            message : null
        }

        this.deleteTodoClick = this.deleteTodoClick.bind(this)
        this.updateTodoClick = this.updateTodoClick.bind(this)
        this.refreshTodos = this.refreshTodos.bind(this)
    }

    componentDidMount(){
        console.log('componentDidMount')
        this.refreshTodos()
    }
    refreshTodos(){
        let userName = AuthentificationService.geLoggedInUserName()
        TodoDataService.rtrieveAllTodos(userName)
        .then(
            response => {
               // console.log(response)
               this.setState({todos : response.data})
            }
        )
    }
    deleteTodoClick(id){
        let userName = AuthentificationService.geLoggedInUserName()
        TodoDataService.deleteTodo(userName,id)
        .then(
            response => {
                this.setState({message : `Delete of Todo ${id} successful `})
                this.refreshTodos()
            }
        )

    }

    updateTodoClick(id){
       // let userName = AuthentificationService.geLoggedInUserName()
        console.log('Update Click');
        this.props.history.push(`/todos/${id}`)            
    }


    render(){
        console.log('render')
        return (
            <div> 
                <h1>List Todos </h1>
                {this.state.message && <div className="alert alert-success"> {this.state.message} </div> }
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Description</th>
                                <th>Done</th>
                                <th>Target Date</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.todos.map(
                                todo =>
                                <tr key={todo.id}>
                                    <td>{todo.id} </td>                                              
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{moment(todo.targetDate).format('YYYY-MM-DD')}</td>
                                    <td><button className="btn btn-success" onClick={() => this.updateTodoClick(todo.id) }>Update</button></td>
                                    <td><button className="btn btn-warning" onClick={() => this.deleteTodoClick(todo.id) }>Delete</button></td>
                                </tr>
                            )  
                        }                        
                        </tbody>
                    </table>
                    <div className="row">
                        <button className="btn btn-success" onClick={this.saveTodoClick}>Add</button>
                    </div>
                </div>
               
            </div> 
        )
    }
}

export default TodosComponent