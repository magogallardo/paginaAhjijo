<template>
    <v-parallax 
    
    src="../assets/Propuesta04-01.png"
    height="auto"
    
  >
    <v-container>

        <v-row>
            <v-divider></v-divider>
        </v-row>
      
      <v-row
        align="center"
        justify="right"
      >
        <v-col
          class="text-left ml-15"
          cols="10"
        >
          <h1 id = "encabezadoRecetas">
            Recetas
          </h1>
          
        </v-col>
        

      </v-row>
      <v-container>
          <v-row
            align="center"
            justify="center"
          >
              <v-col
              v-for="receta in recetasList"
              :key="receta"
              cols="6"
                >
                <v-card>
                    <v-img
                        v-bind:src="require('../assets/recetas/' + receta.src)"
                        class="white--text align-end"
                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.3)"
                        height="200px"
                    >

                        <v-card-title v-text="receta.title" ></v-card-title>
                        <v-card-subtitle class="white--text mt1" 
                        v-text="receta.descr"
                        
                        ></v-card-subtitle>
                    </v-img>

                    <v-card-actions>
                          <v-spacer></v-spacer>

                          <v-btn to="/recetas">
                            Leer
                          </v-btn>

                          <v-btn icon>
                            <v-icon>mdi-heart</v-icon>
                          </v-btn>

                    </v-card-actions>
                </v-card>

              </v-col>
          </v-row>


      </v-container>

        <v-divider></v-divider>

        <v-row
            align="center"
            justify="center"
        >
            <v-col
              class align-self="center"
              cols="1"
              md="2"
              sm="3"
            >
              <div>
                <v-card
                dark
                  class="pa-2"
                  tile
                  color="#fefae9"
                  
                >  
                    
                    <router-link to="/Recetas" >Ver todas</router-link>
                    
                </v-card>
              </div>
            </v-col>
            
        </v-row>
    </v-container>
  </v-parallax>


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
    name: "recetas",
    
    data: () => ({
      
        recetasList: [
            {   

              ////Parte estática a modificar después
                id: "1",
                title: "Alitas Ah Jijo!",
                src: "alitas.jpeg",
                descr: "Deliciosas alitas con sabor inigualable Ah Jijo!",
                ingredients: [  ],
                steps: [ ],

            },
            {   
              //Parte estática a modificar después
                id: "2",
                title: "Enchiladas Ah Jijo!",
                src: "enchiladas.jpeg",
                descr: "Deliciosas alitas con sabor inigualable Ah Jijo!",
                ingredients: [  ],
                steps: [ ],

            },
            {
                id: "3",
                title: "Brochetas Ah Jijo!",
                src: "alitas.jpeg",
                descr: "Deliciosas alitas con sabor inigualable Ah Jijo!",
                ingredients: [  ],
                steps: [ ],

            }
        ]
        
    })
};
</script>
