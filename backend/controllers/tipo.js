import { getTipos, insertTipo, updateTipoById, deleteTipoById }from "../models/tiposModel.js";

export const showTipos = (req, res) => {
getTipos((err, results) => {
    if (err){
        res.send(err);
    }else{
        res.json(results);
    }
});
}

export const createTipo = (req, res) =>{
const data = req.body;
insertTipo(data, (err, results) => {
    if(err){
        res.send(err)
    }else{
        res.json(results);
    }
})
}

export const deleteTipo = (req, res) =>{
const id = req.params.id;
deleteTipoById(id, (err, results) =>{
    if(err){
        res.send(err);
    }else{
        res.json(results);
    }
});
}

export const updateTipo = (req, res) =>{
const data = req.body;
const id = req.params.id;
updateTipoById(data, id, (err, results) =>{
    if(err){
        res.send(err);
    }else{
        res.json(results)
    }

});
}