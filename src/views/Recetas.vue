<template>
    <div>

        <v-parallax
            src="../assets/Propuesta04-01.png"
            height="auto"
        >
            <v-container>

                <!--  Layout principal divido en dos -->
                <v-row
                    class="ma-5"
                >   
                    <!--  Columna de la info  -->
                    <v-col
                        cols="5"
                    >   
                        <!--  Titulo  -->
                        <v-row
                            class="text-left"
                            align="left"
                            justify="center"

                        >
                            <h2 id="encabezadoRecetas" v-text="recetasList[selectedItem].title"></h2>
                        </v-row>
                        <v-row
                            class="text-right"
                            
                        >   
                            
                            <v-col
                                class="text-right"
                            >
                             <h2 id="subencabezado" v-text="recetasList[selectedItem].descr"></h2>   

                            </v-col>


                        </v-row>

                        <v-row
                            class="text-right"
                            alig
                        >   
                            
                            <v-col
                                cols="4"
                            >
                                <ul id="v-for-object" class="demo">
                                    <li v-for="value in recetasList[selectedItem].ingredients"
                                    :key="value">
                                        {{ value }}
                                    </li>
                                </ul>
                                
                            </v-col>

                            <v-col
                                class="text-left"
                            >
                                <ul id="v-for-object" class="demo">
                                    <li v-for="value in recetasList[selectedItem].steps"
                                    :key="value">
                                        {{ value }}
                                    </li>
                                </ul> 

                            </v-col>


                        </v-row>



                    </v-col>

                    <!-- Columna de foto -->
                    <v-col
                        class="ma-2"
                        cols="6"
                    >
                        <v-img 

                            v-bind:src="require('../assets/recetas/' + recetasList[selectedItem].src)"
                            alt="imagenReceta"
                            contain

                            height="350"
                            width="auto"

                        ></v-img>
                    </v-col>

                </v-row>

                <!--    Fila del slide view de las recetas    -->


                <v-row>
                    
                    <v-col
                        cols="12"
                    >
                        
                        <h4 id="encabezadoRecetas">Todas las recetas:</h4>
                    </v-col>

                    <v-col
                        cols="12"
                    >
                        <v-slide-group
                            v-model="model"
                            class="pa-4"
                            show-arrows
                        >

                            <v-slide-item
                            v-for="receta in recetasList"
                            :key="receta"
                            v-slot="{ active}"
                            >
                                <v-card
                                    :color="active ? 'primary' : 'grey lighten-1'"
                                    class="ma-4"
                                    height="300"
                                    width="300"
                                    @click="selectItem(2)"
                                    :img="require('../assets/recetas/' + receta.src)"
                                >   

                                    <v-row
                                      class="fill-height"
                                      align="center"
                                      justify="center"
                                    >
                                        
                                        
                                        <v-scale-transition>
                                          <v-icon
                                            v-if="active"
                                            color="white"
                                            size="48"
                                            v-text="'mdi-close-circle-outline'"
                                          ></v-icon>
                                        </v-scale-transition>

                                    </v-row>
                                </v-card>

                            </v-slide-item> 

                        </v-slide-group>

                    </v-col>
                </v-row>

            </v-container>  
        </v-parallax>

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

</style>


<script>
export default {
    name: "Recetas",

    methods: {
        selectItem(){
            this.selectedItem = 2;
            console.log(" Hello ");
        },
        toggle(value){
            this.selectedItem = value;
            console.log(" Hello ");
        }
    },

    data: () => ({

        selectedItem: 0,

        recetasList: [
            {   

              ////Parte estática a modificar después
                id: "1",
                title: "Alitas Ah Jijo!",
                src: "alitas.jpeg",
                descr: "Deliciosas alitas con sabor inigualable Ah Jijo!",
                ingredients: [ "Ingrediente 1", "Ingrediente 2", "Salsa AhJijo Picosota" ],
                steps: [ "Paso1 ", " Paso2 ", "Paso3",],

            },
            {   
              //Parte estática a modificar después
                id: "2",
                title: "Enchiladas Ah Jijo!",
                src: "enchiladas.jpeg",
                descr: "Deliciosas alitas con sabor inigualable Ah Jijo!",
                ingredients: [ "Ingrediente 1", "Ingrediente 2", "Salsa AhJijo Picosota" ],
                steps: [ "Paso1 ", " Paso2 ", "Paso3",],

            },
            {
                id: "3",
                title: "Brochetas Ah Jijo!",
                src: "alitas.jpeg",
                descr: "Deliciosas alitas con sabor inigualable Ah Jijo!",
                ingredients: [ "Ingrediente 1", "Ingrediente 2", "Salsa AhJijo Picosota" ],
                steps: [ "Paso1 ", " Paso2 ", "Paso3",],

            },
            {   
              //Parte estática a modificar después
                id: "2",
                title: "RECETA4 Ah Jijo!",
                src: "enchiladas.jpeg",
                descr: "Deliciosas alitas con sabor inigualable Ah Jijo!",
                ingredients: [ "Ingrediente 1", "Ingrediente 2", "Salsa AhJijo Picosota" ],
                steps: [ "Paso1 ", " Paso2 ", "Paso3",],
            },
        ]
        
    })


}
</script>