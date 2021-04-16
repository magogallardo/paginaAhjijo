<template>
  <v-sheet id="productosVista"

    class="mx-auto"
    elevation="8"
    max-width="100%"
    
  >
    <v-container> 

      <v-divider></v-divider>

      <v-row
        align="center"
        justify="center"
      >

        <v-col 
          cols="12" 
          class="text-right"
        > 

          <h1 id="encabezadoProductos" 
          >Productos:</h1>

        </v-col>
        <v-col
          class="text-right"
        >

        <router-link to="/products" ><h3 id="verMasProductos">Ver todos</h3></router-link>
        </v-col>

        
        
      </v-row>

      
      <v-divider></v-divider>
   
   </v-container>

    <v-slide-group 
      v-model="model"
      class="pa-4"
      show-arrows
    >
      <v-slide-item
        v-for="product in products"
        :key="product"
        v-slot="{  toggle }"
      >
        <v-card
        to="/products"
          
          class="ma-4"
          height="auto"
          width="300"
          @click="toggle"
        >
          <v-img
            v-bind:src="require('../assets/productos/' + product.src)"
            class="black--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.3)"
            height="200"
            width="300"
          >
          <v-row
            class="fill-height"
            align="center"
            justify="center"  
          >
            
          </v-row>
            
          </v-img>
          
          <v-card-actions>
            <v-card-title class="black--text mt-2" v-text="product.name" ></v-card-title>         
          </v-card-actions>

          
        </v-card>
      </v-slide-item>
    </v-slide-group>

    <v-row 
        align="right" 
        justify="center"
      >
        
        <v-col 
          cols="12"
          class="mb-8"
        >
          
        </v-col>

      </v-row>

    
  </v-sheet>
</template>

<style>

#nombreProducto{
  size: 10px;
}

#verMasProductos{
  text-align: right;
  color:#e5ddcd;
  -webkit-text-fill-color:#e5ddcd; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color:#4a4e2e;
}

#encabezadoProductos{

  font-size: 50px;
  -webkit-text-fill-color:#8e2442; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #4a4e2e;
}
#productosVista{
  background-image: url("../assets/fondoProductos.jpeg");
  background-size: 100%;
  background-position-y: 0;
  
}
#descripcionProducto{
  background-color: #e5ddcd;
} 

</style>



<script>
  export default {
    data: () => ({
      selectedProduct: '',
      model: null,
      
      products: [
        
      ],
    
    }),
  }
</script>