import Axios from "axios"

class HelloWorldService {
   executHelloWorldService(){
        
      // console.log("HelloWorldService")
      return Axios.get('http://localhost:8080/hello-wine')
   }
}

export default new HelloWorldService()