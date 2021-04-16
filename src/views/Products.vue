<template>
    <div>
        <v-parallax
        
      src="../assets/Propuesta02-01.png"
      height="auto"
    >

    <v-row
      align="top"
      justify="center"
    >
      <v-col
        class="text-center"
        cols="7"
      >
        <h1 id = "encabezadoProductos" class="mt-10">
          Productos disponbles
        </h1>
        <h2 id= "subEncabezadoProductos">
          {{this.TipoSeleccionado}}
        </h2>
      </v-col>

    </v-row>

    <v-container>
        
        <v-row justify="center" align="center">
        <v-col  v-for="product in products" :key="product" >
            <v-card
                class="ma-4"
                height="200"
                width="150"
                
            >
            <v-img
              v-bind:src="require('../assets/productos/' + product.Foto)"
              class="white--text align-end"
              height="200"
              width="300"
            >
            </v-img>
            </v-card>

            <v-card-title v-text="product.Nombre" id="TituloTarjetaProducto"></v-card-title>
            <v-card-subtitle v-text="product.Descr" id="SubtituloTarjetaProducto"></v-card-subtitle>
            <v-card-subtitle class="mt-n7" id="SubtituloTarjetaProducto">Precio: ${{product.Precio}}</v-card-subtitle>
        </v-col>
        </v-row>



    </v-container>




    </v-parallax>
    </div>
</template>


<style>



</style>

<script>


import axios from "axios"
export default {


    name: "Products",
    components: {
      
    },

    data: () => ({
      selectedProduct: '',
      model: null,

      products: [],
      TipoSeleccionado: "",




    }),

    methods: {

      async getAllInfo(){


      try {
      
          const response = await axios.get("http://localhost:5000/Productos");
          this.products = response.data;
        } catch (err) {
            console.log(err);
        }
      },


    },


    created(){
      this.getAllInfo()
      this.TipoSeleccionado = this.$route.params.tipo
      
    },

    

};
</script>