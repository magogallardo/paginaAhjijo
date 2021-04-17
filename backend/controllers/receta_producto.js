import { getReceta_Producto, insertReceta_Producto, deleteReceta_ProductoByProductoId, deleteReceta_ProductoByRecetaId }from "../models/receta_productoModel.js";

export const showReceta_Producto = (req, res) => {
    getReceta_Producto((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const createReceta_Producto = (req, res) =>{
    const data = req.body;
    insertReceta_Producto(data, (err, results) => {
        if(err){
            res.send(err)
        }else{
            res.json(results);
        }
    })
}

export const delete_Receta_ProductoByProductoId = (req, res) =>{
    const id = req.params.id;
    deleteReceta_ProductoByProductoId(id, (err, results) =>{
        if(err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}


export const delete_Receta_ProductoByRecetaId = (req, res) =>{
    const id = req.params.id;
    deleteReceta_ProductoByRecetaId(id, (err, results) =>{
        if(err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}