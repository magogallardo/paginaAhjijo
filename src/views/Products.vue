<template>
    <div id="divPrincipal">
        


    <v-row
      align="top"
      justify="center"
    >
      <v-col
        class="text-center"
        cols="7"
      >
        <h1 id = "encabezadoProductos" class="ma-10">
          Productos disponbles
        </h1>
      </v-col>

    </v-row>
    <v-tabs
      v-model="tab"

      background-color="transparent"
      color="#87561f"
      grow
    >

      <v-tab
        v-for="tipo in tipos"
        :key="tipo"
      
      >

      {{tipo.Descr}}
      </v-tab>

    </v-tabs>

    <v-tabs-items
      v-model="tab"
    
    >
      <v-tab-item
        v-for="tipo in tipos"
        :key="tipo"
        
      >
        
        
        <v-row justify="center" align="center"
          id="filaProductos"
        >
        <v-col
          cols="auto"  
          v-for="product in products" 
          :key="product" >
            <v-card
                
                @click="verProducto(product.Producto_id)"
                v-if="isThisProductOfType(product, tipo.Tipo_id)"
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
              <v-card-subtitle v-text="product.Descr" id="SubtituloTarjetaProducto"></v-card-subtitle>
              <v-card-subtitle class="mt-n7" id="SubtituloTarjetaProducto">Precio: ${{product.Precio}}</v-card-subtitle>
            </v-card>
        </v-col>
        </v-row>



 


      
      </v-tab-item>
    </v-tabs-items>

    </div>
</template>


<style>

#divPrincipal{
  color: "#87561f";
}

#filaProductos{
  padding-top: 2%;
  background-color: #b57b7b;
}

#tituloTarjeta{
   word-break: normal
}

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
      Producto_Tipo: [],
      tipos: [],
      TipoSeleccionado: "",


      tab: 0,



    }),

    methods: {

      async getAllInfo(){

      
      //Obteniendo productos
      try {
      
          const response = await axios.get("http://localhost:5000/Productos");
          this.products = response.data;
        } catch (err) {
            console.log(err);
        }
      // Obteniendo los tipos de los productos
      try {
      
          const response = await axios.get("http://localhost:5000/Producto_Tipo");
          this.Producto_Tipo = response.data;
        } catch (err) {
            console.log(err);
        }
      try {
      
          const response = await axios.get("http://localhost:5000/Tipos");
          this.tipos = response.data;
        } catch (err) {
            console.log(err);
        }
        this.TipoSeleccionado = this.$route.params.tipo
        this.tab = this.TipoSeleccionado-1
        

      },


      isThisProductOfType(producto, tipo){
        for(var i = 0; i < this.Producto_Tipo.length; i++){
          if(this.Producto_Tipo[i].Producto_id == producto.Producto_id & tipo == this.Producto_Tipo[i].Tipo_id)
            return true
        }
          return false
      },
      

      showModel(){
        alert(this.tab)
      },

      verProducto(productoId){
        window.location.href = '/verProducto/' + productoId

      },

    },

    created(){
      this.getAllInfo()
      
      
      
    },


    
    

};
</script>