import axios from "axios";

interface registerData {
    name : string,
    email: string,
    password : any,
}

interface loginData {
    email: string,
    password : any,
}

export const register = async (body : registerData ) => {
    return await axios.post("http://localhost:5000/api/user", body)
}

export const loginUser = async (body : loginData ) => {
    return await axios.post("http://localhost:5000/api/user/login", body)
}