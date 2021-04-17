//Modelo para la tabla Producto_Tipo

import db from "../config/database.js";
 
// Mostrar todos los productos
export const getReceta_Producto = (result) => {
    db.query("SELECT * FROM Receta_Producto", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}



// Añadir productos a la DB
export const insertReceta_Producto = (data, result) => {
    db.query("INSERT INTO Receta_Producto SET ?", [data], (err, results) => {
        if(err){
            console.log(err);
            result(err, null);

        }else{
            result(null, results);
        }

    });
}


// Eliminar un Registro por su Producto_id

export const deleteReceta_ProductoByProductoId = (id, result) =>{
    db.query("DELETE FROM Receta_Producto WHERE Producto_id = ? ", [id], (err, results) =>{
         if(err){
             console.log(err);
             result(err, null);
         }else{
             result(null, results);
         }
    });
}

// Eliminar un Registro por su Receta_id

export const deleteReceta_ProductoByRecetaId = (id, result) =>{
    db.query("DELETE FROM Receta_Producto WHERE Receta_id = ? ", [id], (err, results) =>{
         if(err){
             console.log(err);
             result(err, null);
         }else{
             result(null, results);
         }
    });
}