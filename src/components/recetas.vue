<template>
  
  <!-- Hoja principal -->
  <v-sheet
        class="mt-5"
        elevation="0"
        
    >   

        <!-- Carrusel de recetas -->
        <v-slide-group
        v-model="activeCarousel"
        class="pa-4"
        center-active
        show-arrows
        >
        <v-slide-item
            v-for="receta in Recetas"
            :key="receta"
            
        >
            <v-card
              
              elevation="0"
              
              @click="seeReceta(receta.Receta_id)"
              class="text-center"
            >

              <v-img
                max-width="300"
                max-height="170"
                
                v-bind:src="require('../assets/recetas/' + receta.Foto)"

              ></v-img>

              <v-card-title v-text="receta.Titulo"></v-card-title>
              <v-row class="mt-n9">

                <v-col
                cols="4">

                  <v-card-text><v-icon>mdi-heart</v-icon> {{receta.Likes}}</v-card-text>
                </v-col>
                <v-col
                  cols="8"
                >
                  <v-card-text><v-icon>mdi-clock</v-icon> {{receta.TiempoPreparacion}} minutos</v-card-text>
                </v-col>

                <v-spacer></v-spacer>

              </v-row>
            
            </v-card>
        </v-slide-item>
        </v-slide-group>
    </v-sheet>
</template>

<script>
// Importando Axios para conexión a la DB
import axios from 'axios'



export default {

  name: "recetas",


  data: () =>({

    Recetas: [],
    activeCarousel: null,


  }),


  methods:{

    async getAllInfo(){

       //_________________ cargando Recetas

            try {
                    const response = await axios.get("http://localhost:5000/Recetas");
                    this.Recetas = response.data;
                } catch (err) {
                    console.log(err);
                }

    },

    seeReceta(RecetaId){
            
            window.location.href = '/recetas/' + RecetaId

        }

  },


  mounted(){
    this.getAllInfo()
  }

  

}
</script>

<style>

</style>