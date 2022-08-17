import axios from "axios";

interface userData {
    name : string,
    email: string,
    password : any,
}

export const register = async (body : userData ) => {
    return await axios.post("http://localhost:5000/api/user", body)
}