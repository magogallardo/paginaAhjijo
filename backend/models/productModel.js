import db from "../config/database.js";
 
// Mostrar todos los productos
export const getProducts = (result) => {
    db.query("SELECT * FROM Producto", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}



// Añadir productos a la DB
export const insertProduct = (data, result) => {
    db.query("INSERT INTO Producto SET ?", [data], (err, results) => {
        if(err){
            console.log(err);
            result(err, null);

        }else{
            result(null, results);
        }

    });
}


// Eliminar un producto por ID
export const deleteProductById = (id, result) =>{
    db.query("DELETE FROM Producto WHERE Producto_id = ?", [id], (err, results) =>{
         if(err){
             console.log(err);
             result(err, null);
         }else{
             result(null, results);
         }
    });
}

// Actualizar un producto por ID

export const updateProductById = (data, id, result) => {
    db.query("UPDATE Producto SET Nombre = ?, Descr = ?, Codigo = ?, Precio = ?, Foto = ?, Tipo_id = ?, Creado = ? WHERE Producto_id = ?",
        [
            data.Nombre,
            data.Descr,
            data.Codigo,
            data.Precio,
            data.Foto,
            data.Tipo_id,
            data.Creado,
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

