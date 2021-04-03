/*
        ARCHIVO DE RUTAS PARA OBTENER/PASAR INFORMACIÓN POR RUTAS
*/


// importando express
import express from "express";

// Instanciando el router
const router = express.Router();


/*
    /////////////////
    SECCIÓN DE TABLAS   
    /////////////////
*/

    /*
        //////////////////
             PRODUCTO
        /////////////////
    */


import { showProducts, createProduct, deleteProduct, updateProduct } from "../controllers/product.js";
 
 
// Mostrar todos los productos
router.get('/Productos', showProducts);

//Insertar nuevo producto
router.post('/Productos', createProduct);

//Borrar producto por ID
router.delete('/Productos/:id', deleteProduct);

//Actualizar un producto por id
router.put('/Productos/:id', updateProduct);


    /*
        //////////////////
             INFO
        /////////////////
    */



// Informacion principal de página

import {showPageInfo, updateAllInfoController} from "../controllers/info.js";


router.get('/Info', showPageInfo);


//____ Tipo ||   Ruta    || Controlador
router.put('/Info/updateAll', updateAllInfoController);

export default router;