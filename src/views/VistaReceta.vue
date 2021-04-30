<template>
    
    <div>

        <!-- Fila principal -->
        <v-row>


            <!-- Columna del titulo y descripción -->
        <v-col
            cols="5"
            class="text-center text-align-center"
        >   
            <v-sheet
                color="#e9aa65"
                width="100%"
                height="100%"
                elevation="5"
            >

                <h1 id="TituloReceta">{{Recetas[recetaId-1].Titulo}}</h1>

                <v-divider></v-divider>
                
                <h3 class="ma-10" id="SubtituloReceta">{{Recetas[recetaId-1].Descr}}</h3>

                <v-row>

                <v-col
                cols="4">

                  <v-card-text><v-icon>mdi-heart</v-icon> {{Recetas[recetaId-1].Likes}}</v-card-text>
                </v-col>
                <v-col
                  cols="8"
                >
                  <v-card-text><v-icon>mdi-clock</v-icon> {{Recetas[recetaId-1].TiempoPreparacion}} minutos</v-card-text>
                </v-col>

                <v-spacer></v-spacer>

            </v-row>

                <v-divider></v-divider>

                <h2 class="my-5">Ingredientes</h2>

                <v-col
                    class="mt-n2"
                    v-for="ingrediente in Ingredientes"
                    :key="ingrediente"
                >
                    <h4 ><v-icon>mdi-circle-small</v-icon> {{ingrediente}}</h4>

                </v-col>


            </v-sheet>
        </v-col>

            <!-- Columna de los datos de la receta -->
        <v-col
            cols="7"
        >

            <!-- Imagen de la receta -->
            <v-img
                @click="lel()"
                class="ma-10"
                v-bind:src="require('../assets/recetas/' + Recetas[recetaId-1].Foto)"
                contain
                max-width="500"
            >


            </v-img>

            <!-- Listado de ingredientes -->

            <h2 class="my-5">Preparación</h2>

                <v-col
                    class="mt-n2"
                    v-for="paso in Pasos"
                    :key="paso"
                >
                    <h3 ><v-icon>mdi-circle-small</v-icon> {{paso}}</h3>

                </v-col>



        </v-col>
    
        </v-row>
        <!-- Lista de productos en la receta -->
        
        <v-container wrap>
        <v-row
            justify="center"
        >
            <v-col
                class="ma-6"
                cols="auto"
            >
                <v-btn 
                @click="expandProductos =! expandProductos"
                :color="expandProductos ? 'black' :'green lighten-1'" icon>
                    <v-icon>mdi-food-variant</v-icon>
                    <span v-text="expandProductos ?  'Dejar de ver productos' : 'Ver productos en esta receta'"></span>
                </v-btn>
            </v-col>

            <v-col
                cols="12"
            >   
                <v-expand-transition>
                    <v-sheet
                        v-show="expandProductos"
                        color="#e9aa65"
                        elevation="5"
                    >

                    <v-row>

                        <v-col
                            v-for="producto in ProductosInReceta"
                            :key="producto"
                            cols="auto"
                        >  
                            <v-card
                                elevation="0"
                                class="mx-1"
                                color=#87561f
                                dark
                            > 
                            <v-img
                                
                                contain
                                max-width="250"
                                v-bind:src="require('../assets/productos/' + producto.Foto)"
                            >

                            </v-img>

                            <v-card-title v-text="producto.Nombre"></v-card-title>


                            </v-card>


                        </v-col>

                    </v-row>

                    </v-sheet>
                </v-expand-transition>
            </v-col>


        </v-row>
        </v-container>


        <v-row >
            <v-col
                class="mx-3"
            >
                <div>
            <h1 class="text-center ma-9">Otras recetas:</h1>

                    <recetas/>
                </div>
            </v-col>

        </v-row>
    </div>

</template>


<script>

import axios from 'axios'
import recetas from "../components/recetas.vue"



export default {
    name: "VistaReceta",
    components:{
        recetas,
    },

    data: ()=>({

        
        Recetas: [],
        Productos: [],
        Receta_Productos: [],
        Pasos: [],
        recetaId: 0,
        selectedreceta: null,
        Ingredientes: [],
        ProductosInReceta: [],

        expandProductos: false,

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

            this.selectedreceta = this.Recetas[this.recetaId-1]
            this.Ingredientes = this.selectedreceta.Ingredientes.split("\n")
            this.Pasos = this.selectedreceta.Preparacion.split("\n")



            for (let i = 0; i<this.Receta_Productos.length; i++) {
                    var currentNumber = this.Receta_Productos[i];
                    if (currentNumber.Receta_id == this.recetaId) {
                            for(let j = 0; j < this.Productos.length; j++){
                                var auxProduct = this.Productos[j];
                                if(auxProduct.Producto_id == currentNumber.Producto_id)
                                    this.ProductosInReceta.push(auxProduct)
                            }

                        
                    }
                }

        },

        lel(){
            alert(this.ProductosInReceta.length)
        }

    },

    created(){

      this.getAllInfo()
      this.recetaId = this.$route.params.recetaId
      
      
    },

    
}
</script>