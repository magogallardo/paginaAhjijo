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


    /*
        //////////////////
             Receta
        /////////////////
    */


import {showRecetas, createReceta, deleteReceta, updateReceta} from "../controllers/receta.js"

//_________________________________ Mostrar todas las recetas
router.get('/Recetas', showRecetas);

//_________________________________ Insertar una nueva receta
router.post('/Recetas', createReceta);

//_________________________________ Borrar una receta
router.delete('/Recetas/:id', deleteReceta);

//__________________________________________Actualizar un producto por id
router.put('/Recetas/:id', updateReceta);



export default router;