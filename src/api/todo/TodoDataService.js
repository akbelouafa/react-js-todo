import Axios from "axios"

class TodoDataService {
   rtrieveAllTodos(username){
        
     
      return Axios.get(`http://localhost:8080/users/${username}/todos`)
   }

   deleteTodo(username,id){  
      // console.log("HelloWorldService")
      return Axios.delete(`http://localhost:8080/users/${username}/todos/${id}`)
   }

   retrieveTodo(username,id){
             
      return Axios.get(`http://localhost:8080/users/${username}/todos/${id}`)
   }

   updateTodo(username,id, todo){  
      // console.log("HelloWorldService")
      return Axios.put(`http://localhost:8080/users/${username}/todos/${id}`,todo)
   }
}

export default new TodoDataService()