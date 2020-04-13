
import React, { Component } from "react"
import moment from "moment"
import { Formik, Form, Field, ErrorMessage } from "formik"
import TodoDataService from "../../api/todo/TodoDataService"
import AuthentificationService from "./AuthentificationService"

class TodoComponent extends Component{
    constructor(props){
        
        super(props)
       
        this.state = {
            id : this.props.match.params.id,
            description: 'Formik description',
            targetDate: moment(new Date()).format('YYYY-MM-DD') 
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }

    componentDidMount(){
        let userName = AuthentificationService.geLoggedInUserName()
        TodoDataService.retrieveTodo(userName,this.state.id)
        .then(response => this.setState({
                description:response.data.description,
                targetDate: moment(response.data.targetDate).format('YYYY-MM-DD') 
            })
        )
    }
    
    onSubmit(values){
        let userName = AuthentificationService.geLoggedInUserName()
        TodoDataService.updateTodo(userName,this.state.id,{
            id : this.state.id,
            description: values.description,
            targetDate: values.targetDate
        }).then(() => this.props.history.push('/todos'))
    }

    validate(values){
        let errors = {}
        if(!values.description){
            errors.description = 'Enter a Description'
        }else if(values.description.length < 5){
            errors.description = 'Enter least 5 Charachters in  Description'
        }

        if(!moment(values.description).isValid){
            errors.targetDate = 'Enter a valid targetDate'
        }
        
        return errors
    }

    render(){
        let {description,targetDate} = this.state
        return (
           
            <div> 
                <h1>
                     Update Todo Component id {this.state.id}
                </h1>
                    
                <div className="container">
                    <Formik initialValues={{description,targetDate }} 
                    onSubmit={this.onSubmit}
                    validate={this.validate}
                    validateOnBlur={false}
                    validateOnChange={false} 
                    enableReinitialize={true}> 

                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="description" component="div" 
                                                    className="alert alert-warning"/>
                                    <ErrorMessage name="targetDate" component="div" 
                                                    className="alert alert-warning"/>                
                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="description"></Field>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label></label>
                                        <Field className="form-control" type="date" name="targetDate"></Field>
                                    </fieldset>
                                    <button className="btn btn-success" >Save</button>
                                </Form>
                               
                            )
                        }
                    </Formik>
                </div>
            </div> 

        )
    }
}

export default TodoComponent