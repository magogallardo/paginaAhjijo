import axios from "axios"

const ENDPOINT_PATH = "https://reqres.in/api/"


export default {


    register(usuario, contrasena) {
        const user = {usuario, contrasena};
        return axios.post(ENDPOINT_PATH + "regiser", user);
    },

    login(usuario, contrasena) {
        const user = {usuario, contrasena};
        return axios.get(ENDPOINT_PATH + "login", user); 

    }


};
