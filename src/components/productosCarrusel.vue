<template>
<v-sheet
    class="mx-auto"
    elevation="8"
    
  >
    <v-slide-group
      v-model="model"
      class="pa-4"
      center-active
      show-arrows
    >
      <v-slide-item
        v-for="product in Productos"
        :key="product"
        
      >
      <v-card
                
                @click="verProducto(product.Producto_id)"
                color=#7d5e42
                class="ma-4"
                max-width="200"
                :object="product.Producto_id"
                dark
                
            >
            <v-img
              v-bind:src="require('../assets/productos/' + product.Foto)"
              class="white--text align-end"
              height="200"
              width="300"
            >
            </v-img>

              <v-card-title  id="tituloTarjeta" v-text="product.Nombre"></v-card-title>
            </v-card>
        
      </v-slide-item>
    </v-slide-group>
  </v-sheet>

    
</template>


<script>

import axios from 'axios'

export default {
    name: "productosCarrusel",

    data: () => ({

        tipoProducto: 0,
        Productos: [],
        Producto_Tipo: [],
        productsArray: [],

    }),

    props:{
        tipo: Number,
    },

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

            this.tipoProducto = this.tipo
            this.Productos = this.Productos.sort()

        },

        verProducto(productoId){
        window.location.href = '/verProducto/' + productoId

      },

    },
    
    
    mounted(){
        this.getAllData()
    }
}
</script>