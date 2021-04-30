<template>
   <div
   >
   
   <!-- Fila principal -->
    <v-row>

        <!-- Columna de titulo -->
        <v-col
            id="columnaTituloRecetas"
            cols="5"
            class="text-align-center "

        >
     
            <h1 id="TituloReceta" class="mt-8" >{{TituloReceta}}</h1>

            <v-divider></v-divider>
            <h2 id="SubtituloReceta">{{DescripcionReceta}}</h2>
                


        </v-col>

        <!-- Columna de Receta del día -->
        <v-col
            
            cols="7"
        >

            <v-card
                class="mt-2"
                elevation="0"
                @click="seeReceta(Recetas[selectedReceta].Receta_id)"
            >  

                <v-col
                    
                    
                >

                    <v-card-title>
                        Receta sugerida
                    </v-card-title>
                    
                </v-col>

                <v-container>
                    <v-row class="mb-12">
                        <v-col
                            cols="6"
                        >

                        <v-img
                            v-bind:src="require('../assets/recetas/' + Recetas[selectedReceta].Foto)"
                            contain
                            max-height="300px"
                        >
                        </v-img>

                        </v-col>
                        <v-col
                            cols="6"
                        >
                            <v-card-title v-text="Recetas[selectedReceta].Titulo"></v-card-title>
                            <v-card-text v-text="Recetas[selectedReceta].Descr"></v-card-text>
                            <v-card-text>Tiempo de preparación: {{Recetas[selectedReceta].TiempoPreparacion}} minutos</v-card-text>
                            <v-card-text><v-icon>mdi-heart</v-icon> A {{Recetas[selectedReceta].Likes}} personas les gustó esta receta</v-card-text>
        
                        </v-col>
                    </v-row>

                    
                
                </v-container>
                

            </v-card>

        </v-col>

        <!-- Columna de receta descripción -->
        

        <!-- Columna de carrusel -->
        <v-col
            cols="9"
        >

            <recetas/>   

        </v-col>

        <v-col
            cols="3"
            id="columnaTituloRecetas"
            class="text-align-center"
            
        >
        <v-layout
            row
            wrap

        >

            <v-container>

                <v-btn icon 
                class="my-10"
                >
                    <v-icon size="70px">mdi-carrot</v-icon>
                    <span class="mx-2">Ver todas</span>
                        
                </v-btn>

            </v-container>

        </v-layout>

        </v-col>
   
    </v-row>
   
   </div>
</template>

<style>

.v-parallax__image {
  position: absolute;
}

#encabezadoRecetas{

  font-size: 50px;
  -webkit-text-fill-color:#fefae9; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #4a4e2e;
}

#subencabezado{

  font-size: 30px;
  -webkit-text-fill-color:#ec6214; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color:#4a4e2e;

}

#columnaTituloRecetas{

    background-color:#e9aa65;
    height: auto;
    text-align: center;
    align-content: center;
    


}

#columnaSubtituloRecetas{

    background-color:#e06f21;
    text-align: center;
    align-content: center;


}

#TituloReceta{

    font-size: 75px;

}

</style>


<script>

import axios from 'axios'

// Importando componentes
import recetas from "../components/recetas.vue"

export default {
    name: "Recetas",


    components: {
        recetas,
    },

    methods: {

        async getAllInfo(){

            //_________________ cargando Recetas

            try {
                    const response = await axios.get("http://localhost:5000/Recetas");
                    this.Recetas = response.data;
                } catch (err) {
                    console.log(err);
                }

            //___________ Cargando productos

            try {

                const response = await axios.get("http://localhost:5000/Productos");
                this.Productos = response.data;
            } catch(err) {
                console.log(err);
            }

            //____________ Obteniendo Receta_Producto

            try {
                const response = await axios.get("http://localhost:5000/Receta_Producto")
                this.Receta_Productos = response.data;
            }catch(err){
                console.log(err);
            }

            this.selectedReceta = Math.floor(Math.random(1) * this.Recetas.length)

        },

        seeReceta(RecetaId){
            
            window.location.href = '/recetas/' + RecetaId

        }

        
        

        
    },


    created(){
        
        this.getAllInfo()
        
    },


    data: () => ({

        Recetas: [],
        Productos: [],
        Receta_Productos: [],


        activeCarousel: null,

        selectedReceta: 3,
        
        TituloReceta: "Recetas",
        DescripcionReceta: "En AhJijo, Ésta es la buena, hemos propuesto algunas recetas para que puedas sorprender a tu familia con un delicioso platillo preparado con nuestros productos "
        
        
    })


}
</script>