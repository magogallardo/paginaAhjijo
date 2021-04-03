<template>
  <div class="about" id="general">
    <v-parallax
      src="../assets/parallax1.png"
      height="300"
    >

    <v-row
      align="center"
      justify="center"
    >
      <v-col
        class="text-center"
        cols="7"
      >
        <h1 id = "encabezado">
          ¿Quiénes somos?
        </h1>

        <h4 id = "subencabezado">
          Esta es la buena
        </h4>
      </v-col>

    </v-row>
    </v-parallax>
    <v-container fluid>
      <v-row 
        id="colorEncabezadoSalsa"
        align="center"
        justify="center"
      > 
        <v-divider></v-divider>
        <h1 id="encabezado">Salsa de chipotle agridulce</h1>
        <v-divider></v-divider>
      </v-row>
    </v-container>
    <v-container>
      <div id="texto2">
      
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="10"
            class="text-left pt-10 ma-5"
          >
            <h4 id="tituloTexto2">Ah jijo! Ésta es la buena</h4>
            <v-divider></v-divider>
            <h4 id="cuerpoTexto2">
              Salsa de chipotle agridulce elaborada con recetas ancestrales, una mezcla de sabores
              que al degustar llevarán tu paladar de una sensación dulzona a un picoso adictivo. Su delicioso sabor 
              que se puede combinar con todo tipo de carnes y mariscos, guisados, tacos y botanas, exponiendo los sabores
              y enriqueciendo cualquier platillo. 
            </h4>

          </v-col>
        </v-row>
  
        <v-row
          align="center"
          justify="center"
        >
          <v-col
          cols="4"
          >
            <v-img
              contain
              src="../assets/BotellaSalsa.png"
              height="500px"
              id="imagenSalsa"
            >
            </v-img>
          </v-col>

          <v-col
            cols="8"
          >
            <h4 id="tituloTexto2">Ah jijo! Ésta es la buena</h4>
            <v-divider></v-divider>
            <h4 id="cuerpoTexto2">
              Tiene la calidad gourmet, ya que su elaboración se realiza de forma artesanal,
              se adapta a cualquier platillo enriqueciendo de manera exquisita los sabores, y en especial
              el delicioso sabor de los antojitos y la comida mexicana.
            
            </h4>

          </v-col>

        </v-row>
        <v-row
          align="center"
          justify="center"
        >
        
          <v-col
            cols="10"
            class="text-right"
          >
            <h4 id="tituloTexto2">Ah jijo! Ésta es la buena</h4>
            <v-divider></v-divider>
            <h4 id="cuerpoTexto2">
              Es un producto 100% mexicano que contiene chile chipotle, el cual ha sido utilizado por nuestros
              antepasados desde antes del siglo XVI, y es considerado un valioso ingrediente en la 
              gastronomía prehispánica.
            </h4>
            <v-row>
              <v-col>
                <h4 id="cuerpoTexto2">
                  El chile aumado pochchilli y ahora llamado chipotle, se caracteriza por distintas variedades
                  que derivan en sabores picantes de un gusto característico e inigualable
                </h4>
              </v-col>
            </v-row>
          </v-col>

        </v-row>

        <v-row
          align="center"
          justify="center"
        >

          <v-col
            cols="10"
            class="text-left pa-10 ma-10"
          >
            <h4 id="tituloTexto2">Ah jijo! Ésta es la buena</h4>
            <v-divider></v-divider>
            <h4 id="cuerpoTexto2">
              Gracias a su detallada elaboración nos permite degustar este condimento picante de manera
              fácil e inmediata, ya sea sobre algún platillo, o bien, como sazón principal en la elaboración
              del mismo.
            </h4>


          </v-col>

          
        </v-row>

        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="10"
            class="text-center pa-10 ma-10"
            
          >
            <h4 id="cuerpoTexto2">
              Si deseas degustar un sabor diferente e inigualable,
            </h4>
            <h4 id="tituloTexto2">Ah jijo! Ésta es la buena</h4>
            <v-divider></v-divider>
            <h4 id="cuerpoTexto2">
              Es tu mejor opción. Pruébalo sobre mariscos, botanas, carnes, todo tipo de guisados, tacos y
              cualquier otro platillo. ¡Te encantará!
            </h4>


          </v-col>

        </v-row>


      
      </div>
    </v-container>

  </div>
</template>


<style>
  #general{
    background-color: #fefae9;
  }


  #encabezado{
    
    font-size: 60px;
    -webkit-text-fill-color:#432d20; /* Will override color (regardless of order) */
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color:#eece9f;
  }

  #imagenSalsa{

    transform: rotate(15deg);

  }

  #cuerpoTexto2{

    font-size: 30px;
    -webkit-text-fill-color:#432d20; /* Will override color (regardless of order) */
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color:#0000;

  }

  #tituloTexto2{

    font-size: 30px;
    -webkit-text-fill-color:#c61817; /* Will override color (regardless of order) */
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color:#0000;

  }
  #colorEncabezadoSalsa{
    background-color: #b26938;
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
  name: "About"
}
</script>