import db from "../config/database.js";


// Obtener la información principal de la pagina
export const getPageInfoModel = (result) => {
    db.query("SELECT TituloPagina, Direccion, LinkUbicacion, Telefono, Correo FROM Info WHERE Info_id = 1", (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

// Actualizar toda la informacion principal de la página
export const updateAllInfo = (data, result) => {
    db.query("UPDATE Info SET TituloPagina = ?, Direccion = ?, LinkUbicacion = ?, Telefono = ?, Correo = ?",
        [data.TituloPagina,
        data.Direccion,
        data.LinkUbicacion,
        data.Telefono,
        data.Correo,
        
    ], (err, results) =>{

        if(err){
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}