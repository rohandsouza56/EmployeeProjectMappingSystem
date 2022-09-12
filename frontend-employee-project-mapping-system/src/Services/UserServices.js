import axios from "axios";

const USER_API_SERVICE_URL = "http://localhost:8080/users";

const login =(loginRequest)=>{
    return axios.post(USER_API_SERVICE_URL +"/signin",loginRequest);
}

const userDetails =(email) =>{
    return axios.get(USER_API_SERVICE_URL+'/details/',email);
}

const changePassword = (newPasswordObj) =>{
    return axios.put(USER_API_SERVICE_URL+"/changePassword",newPasswordObj);
}

export default {login,userDetails,changePassword};