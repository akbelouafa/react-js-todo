class AuthentificationService {
    registerSuccessfullLogin(username,password){
        sessionStorage.setItem('authentificationUser' , username)
    }

    logout(){
        sessionStorage.removeItem('authentificationUser')
        console.log("logout")
    }
    isUserLoggedIn(){
        let user = sessionStorage.getItem('authentificationUser');        
        if(user===null) {
            return false;
        }
        return true
    }
    geLoggedInUserName(){
        let user = sessionStorage.getItem('authentificationUser');        
        if(user===null) {
            return '';
        }
        return user
    }
}

export default new AuthentificationService()