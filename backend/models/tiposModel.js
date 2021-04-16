/*
        Modelos para acceder a la tabla Tipo

*/

import db from "../config/database.js";
 
// Mostrar todos los tipos
export const getTipos = (result) => {
    db.query("SELECT * FROM Tipo", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}



// Añadir tipos a la DB
export const insertTipo = (data, result) => {
    db.query("INSERT INTO Tipo SET ?", [data], (err, results) => {
        if(err){
            console.log(err);
            result(err, null);

        }else{
            result(null, results);
        }

    });
}


// Eliminar un tipo por ID
export const deleteTipoById = (id, result) =>{
    db.query("DELETE FROM Tipo WHERE Tipo_id = ?", [id], (err, results) =>{
         if(err){
             console.log(err);
             result(err, null);
         }else{
             result(null, results);
         }
    });
}

// Actualizar un tipo por ID

export const updateTipoById = (data, id, result) => {
    db.query("UPDATE Tipo SET Descr = ?, Foto = ? WHERE Tipo_id = ?",
        [
            
            data.Descr,
            data.Foto,
            id
        
    ], (err, results) =>{

        if(err){
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

