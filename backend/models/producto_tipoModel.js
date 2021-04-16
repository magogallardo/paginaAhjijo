//Modelo para la tabla Producto_Tipo

import db from "../config/database.js";
 
// Mostrar todos los productos
export const getProducto_Tipo = (result) => {
    db.query("SELECT * FROM Producto_Tipo", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}



// Añadir productos a la DB
export const insertProducto_Tipo = (data, result) => {
    db.query("INSERT INTO Producto_Tipo SET ?", [data], (err, results) => {
        if(err){
            console.log(err);
            result(err, null);

        }else{
            result(null, results);
        }

    });
}


// Eliminar un producto por Producto_id
export const deleteProduct_TipoById = (id, result) =>{
    db.query("DELETE FROM Producto_Tipo WHERE Producto_id = ? ", [id], (err, results) =>{
         if(err){
             console.log(err);
             result(err, null);
         }else{
             result(null, results);
         }
    });
}

// Eliminar un producto_tipo por Tipo_id

export const deleteProducto_TipoByTipo_Id = (id, result) =>{
    db.query("DELETE FROM Producto_Tipo WHERE Tipo_id = ? ", [id], (err, results) =>{
         if(err){
             console.log(err);
             result(err, null);
         }else{
             result(null, results);
         }
    });
}