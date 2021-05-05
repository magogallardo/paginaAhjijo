<template>

    <!-- 

                Vista individual de un producto

     -->

    <div>
        
        <!-- fila general de producto -->
        <v-row
            class="mx-12"
        >
            <!-- Columna de foto -->
            <v-col
                cols="5"
                class="ml-10"
            >
                <v-sheet
                    elevation="8"
                    color="#b57b7b"
                    class="text-center"
                >

                    

                    <v-img
                        class="ma-10 pb-10"
                        contain
                        max-width="500"
                        v-bind:src="require('../assets/productos/' + producto.Foto)"
                    >


                    </v-img>

                </v-sheet>

            </v-col>

            <!-- Columna de info -->
            <v-col
                cols="6"
                class="text-center"
            >
                <h1 id="TituloProducto" class="font-weight-bold display-2 pa-2 mt-10">{{producto.Nombre}}</h1>
                <h2 id="DescripcionProducto" class="font-weight-bold display-1  mt-10">{{producto.Descr}}</h2>
                <p id="PrecioProducto" class="mt-12">Precio: ${{producto.Precio}}</p>
                

            </v-col>
            <v-col class="mb-10 text-center">
                <h1 id="TituloProducto" class="font-weight-bold display-1 pa-2 mt-10">Más productos semejantes</h1>
                <productosCarrusel v-bind:tipo="0"></productosCarrusel>
            </v-col>


        </v-row>


    </div>
</template>

<style>
#TituloProducto{
    color: white;
    background-color: #7d5e42;
    
}



</style>



<script>
import axios from 'axios'
import productosCarrusel from '../components/productosCarrusel.vue'

export default {
    name: "VistaProducto",
    
    components:{
        productosCarrusel
    },


    data: () => ({

        Productos: [],
        Producto_Tipo: [],
        productoId: 0,
        producto: null,

    }),

    methods:{
        async getAllData(){

              //___________ Cargando productos

            try {

                const response = await axios.get("http://localhost:5000/Productos");
                this.Productos = response.data;
            } catch(err) {
                console.log(err);
            }

            try {
      
                const response = await axios.get("http://localhost:5000/Producto_Tipo");
                this.Producto_Tipo = response.data;
                } catch (err) {
                    console.log(err);
            }

            this.productoId = this.$route.params.productoId
            this.producto = this.Productos[this.productoId-1]
        },


    },

    created(){
        this.getAllData()
    }


}
</script>