import { getPageInfoModel, updateAllInfo }from "../models/infoModel.js";

export const showPageInfo = (req, res) => {
    getPageInfoModel((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const updateAllInfoController = (req, res) =>{
    const data = req.body;
    updateAllInfo(data, (err, results) => {
        if(err){
            err.send(err);
        }else {
            res.json(results);
        }
    });
}