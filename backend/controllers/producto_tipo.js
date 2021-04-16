import { getProducto_Tipo, insertProducto_Tipo, deleteProduct_TipoById, deleteProducto_TipoByTipo_Id }from "../models/producto_tipoModel.js";

export const showProducto_Tipo = (req, res) => {
    getProducto_Tipo((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const createProducto_Tipo = (req, res) =>{
    const data = req.body;
    insertProducto_Tipo(data, (err, results) => {
        if(err){
            res.send(err)
        }else{
            res.json(results);
        }
    })
}

export const deleteProducto_Tipo = (req, res) =>{
    const id = req.params.id;
    deleteProduct_TipoById(id, (err, results) =>{
        if(err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}


export const deleteTipo_id = (req, res) =>{
    const id = req.params.id;
    deleteProducto_TipoByTipo_Id(id, (err, results) =>{
        if(err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}