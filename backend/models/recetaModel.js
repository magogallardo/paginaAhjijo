import db from "../config/database.js"

 
// Mostrar todos los productos
export const getRecetas = (result) => {
    db.query("SELECT * FROM Receta", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}



// Añadir productos a la DB
export const insertReceta = (data, result) => {
    db.query("INSERT INTO Receta SET ?", [data], (err, results) => {
        if(err){
            console.log(err);
            result(err, null);

        }else{
            result(null, results);
        }

    });
}


// Eliminar un producto por ID
export const deleteRecetaById = (id, result) =>{
    db.query("DELETE FROM Receta WHERE Receta_id = ?", [id], (err, results) =>{
         if(err){
             console.log(err);
             result(err, null);
         }else{
             result(null, results);
         }
    });
}

// Actualizar un producto por ID

export const updateRecetaById = (data, id, result) => {
    db.query("UPDATE Producto SET Titulo = ?, Descr = ?, Preparacion = ?, TiempoPreparación = ?, Likes = ?, Foto = ?, Tipo_id = ? ,Creado = ? WHERE Receta_id = ?",
        [
            data.Titulo,
            data.Descr,
            data.Preparacion,
            data.TiempoPreparacion,
            data.Likes,
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