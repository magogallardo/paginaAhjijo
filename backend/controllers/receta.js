import {getRecetas, insertReceta, updateRecetaById, deleteRecetaById} from "../models/recetaModel.js"

export const showRecetas = (req, res) => {
    getRecetas((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const createReceta = (req, res) =>{
    const data = req.body;
    insertReceta(data, (err, results) => {
        if(err){
            res.send(err)
        }else{
            res.json(results);
        }
    })
}

export const deleteReceta = (req, res) =>{
    const id = req.params.id;
    deleteRecetaById(id, (err, results) =>{
        if(err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const updateReceta = (req, res) =>{
    const data = req.body;
    const id = req.params.id;
    updateRecetaById(data, id, (err, results) =>{
        if(err){
            res.send(err);
        }else{
            res.json(results)
        }

    });
}