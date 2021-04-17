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


import { showProducts, showLastProducto_id ,createProduct, deleteProduct, updateProduct } from "../controllers/product.js";
 
 
// Mostrar todos los productos
router.get('/Productos', showProducts);

// Mostrar el Id del último producto añadido
router.get('/LastProducto_id', showLastProducto_id);

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


import {showRecetas, showLastReceta_id,createReceta, deleteReceta, updateReceta} from "../controllers/receta.js"

//_________________________________ Mostrar todas las recetas
router.get('/Recetas', showRecetas);

// Mostrar el Id de la última receta añadida
router.get('/LastReceta_id', showLastReceta_id);

//_________________________________ Insertar una nueva receta
router.post('/Recetas', createReceta);

//_________________________________ Borrar una receta
router.delete('/Recetas/:id', deleteReceta);

//__________________________________________Actualizar un producto por id
router.put('/Recetas/:id', updateReceta);


    /*
        //////////////////
             Tipos
        /////////////////
    */


import {showTipos, createTipo, updateTipo, deleteTipo } from "../controllers/tipo.js"


//_________________________________ Mostrar todas los tipos
router.get('/Tipos', showTipos);

//_________________________________ Insertar un tipo
router.post('/Tipos', createTipo);

//_________________________________ Borrar un tipo
router.delete('/Tipos/:id', deleteTipo);



//__________________________________________Actualizar un producto por id
router.put('/Tipos/:id', updateTipo);


    /*
        //////////////////
           Producto_Tipo
        /////////////////
    */

import { showProducto_Tipo, createProducto_Tipo, deleteProducto_Tipo, deleteTipo_id} from "../controllers/producto_tipo.js"


//_________________________________ Mostrar todas los Producto_Tipo
router.get('/Producto_Tipo', showProducto_Tipo);

//_________________________________ Insertar un registro en Producto_Tipo
router.post('/Producto_Tipo', createProducto_Tipo);

//_________________________________ Borrar todos los registros en producto_tipo
router.delete('/Producto_Tipo/:id', deleteProducto_Tipo);

//___________________________________ Borrar un tipo por su tipo
router.delete('/TiposByTipo_id/:id', deleteTipo_id);


    /*
        //////////////////
         Receta_Producto
        /////////////////
    */


import {showReceta_Producto, createReceta_Producto, delete_Receta_ProductoByProductoId, delete_Receta_ProductoByRecetaId } from "../controllers/receta_producto.js"

//_________________________________ Mostrar todas los Receta_Producto
router.get('/Receta_Producto', showReceta_Producto);

//_________________________________ Insertar un registro en Receta_Producto
router.post('/Receta_Producto', createReceta_Producto);

//_________________________________ Borrar todos los registros en Receta_Producto por PRODUCTO_ID
router.delete('/Receta_Producto/:id', delete_Receta_ProductoByProductoId);

//___________________________________ Borrar todos los registros en Receta_Producto por RECETA_ID
router.delete('/Receta_ProductoDeleteByReceta/:id', delete_Receta_ProductoByRecetaId);






export default router;