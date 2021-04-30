

<template>
  <!-- Barra de navegación -->
    <v-bottom-navigation grow height="auto">
      <v-container>

        <v-layout row justify-center>

          <!-- columna del logo/íconos de redes -->
          <v-col 
            cols="4"
            class="ml-10"
          >
            <!-- Renglón de logo/boton -->
            <v-col>
                <v-btn to="/" icon
                >
                  <v-img
                    id="logoPrincipal"
                    src="../assets/logo.png"
                  >
                </v-img>
              </v-btn>
            </v-col>

            <!-- Renglón de íconos de redes -->
            <v-row align-center justify="center" class="mb-5">
                <v-col cols="auto">
                  <v-icon size="24px" @click="facebook">mdi-facebook</v-icon>
                </v-col>
                <v-col cols="auto">
                  <v-icon size="24px" @click="facebook">mdi-instagram</v-icon>
                </v-col>
            </v-row>
          </v-col>

            <!-- Renglón de íconos de navegación -->
            <!-- Oculta en XS -->
          <v-col 
          class="d-none d-sm-flex">
              
              <v-btn  @click="expandProducts =! expandProducts" icon>
                <span>Productos</span>
                <v-icon style="color: red">mdi-food-variant</v-icon>
              </v-btn>

              <v-btn to="/recetas" icon>
                <span>Recetas</span>
                <v-icon style="color: #fd7f02">mdi-carrot</v-icon>
              </v-btn>

              <v-btn to="/about" icon>
                <span>¿Quiénes somos?</span>
                <v-icon style="color: #fdd905">mdi-information</v-icon>
              </v-btn>

              <v-btn to="/encuentranos" icon>
                <span>Encuéntranos!</span>
                <v-icon style="color: #3d7b04">mdi-map-marker</v-icon>
              </v-btn>

          </v-col>

          <!-- Sólo visible en XS -->
          <v-layout row wrap class="  d-flex d-sm-none">
            <v-container>
              <v-flex>
                <v-btn @click="expandProducts =! expandProducts" icon>
                  <span>Productos</span>
                  <v-icon>mdi-food-variant</v-icon>
                </v-btn>
              </v-flex>
              <v-flex>
                <v-btn to="/recetas" icon>
                  <span>Recetas</span>
                  <v-icon>mdi-carrot</v-icon>
                </v-btn>
              </v-flex>
              <v-flex>
                <v-btn to="/about" icon>
                  <span>¿Quiénes somos?</span>
                  <v-icon>mdi-information</v-icon>
                </v-btn>
              </v-flex>
              <v-flex>
                <v-btn to="/encuentranos" icon>
                <span>Encuéntranos!</span>
                <v-icon>mdi-map-marker</v-icon>
              </v-btn>
              </v-flex>
            </v-container>
          </v-layout>

          <!-- Transisión de expansión para Productos Visible en MD-->
                <v-container
          >
            <v-row>
              <v-col
              cols="12">
                <v-expand-transition>
                  <v-row
                    v-show="expandProducts"
                    align-content="center"
                    justify="center"
                  >

                    <!-- Parte dinámica de productos -->
                    <v-row
                      v-for="categoria in categoriasProductos" 
                      :key="categoria"
                    >
                    <!-- Poniendo las categorias en tarjetas -->
                      <v-flex  class="ma-6">
                        
                        <v-hover v-slot="{ hover }">

                          <v-card
                            :elevation="hover ?  12: 1"
                            width="200"
                            height="100"
                            @click="goToProducts(categoria.Tipo_id)"
                            dark
                            
                          >
                            <v-img
                              gradient="to bottom, rgba(0,0,0,.01), rgba(0,0,0,.9)"
                              width="200"
                              height="100"
                              v-bind:src="require('../assets/tipos/' + categoria.Foto)"
                              class="white--text align-end center"
                            >

                              <v-card-title v-text="categoria.Descr"></v-card-title>
                            </v-img>
                          </v-card>
                        </v-hover>

                      </v-flex>
                      
                    </v-row> 

                    

                  </v-row>
                </v-expand-transition>
              </v-col>  
            </v-row>


          </v-container>
         


        </v-layout>
      </v-container>
      <!-- Transisión de expansión de PRODUCTOS-->



    </v-bottom-navigation>

</template>


<style>
#logoPrincipal{

  max-width: 200px;
  height: auto;
}

</style>



<script>

import axios from 'axios'

export default {
    name: "navBar",
  
    methods: {

      //________________ Métodos para ir a las redes sociales

      facebook(){
        window.location.href = 'https://www.facebook.com/Ah-Jijo-Ésta-es-la-buena-2024980200865330';
      },
      instagram(){
        window.location.href = 'https://www.instagram.com/ahjijoestaeslabuena';
      },



      //___________________ Obtener los tipos
      async getAllInfo(){

        try {
          
          const response = await axios.get("http://localhost:5000/Tipos")
          this.categoriasProductos = response.data

        } catch (err) {
          console.log(err)
        }

        
      },

      //_____________________ Ir a productos por medio de un tipo de productos

      goToProducts(tipo){
        window.location.href = "/Products/" + tipo
        
        this.expandProducts = false
      }


    },

    data: () => ({

      expandProducts: false,
      categoriasProductos: [],
        
    }),

    mounted(){
      this.getAllInfo()
    }

    
};
</script>