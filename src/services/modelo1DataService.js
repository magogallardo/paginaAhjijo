import http from "../http-common.js";


class modelo1DataService{

    getAll(){
        return http.get("/AdminProductos");
    }
    

}

export default new modelo1DataService();