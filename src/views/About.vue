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
            cols="11"
            class="text-left"
          >
          <h4 id="tituloTexto2">Ah jijo! Ésta es la buena</h4>
          <h4 id="cuerpoTexto2">
            Salsa de chipotle agridulce elaborada con recetas ancestrales, una mezcla de sabores
            que al degustar
          </h4>

          </v-col>
        </v-row>
  
        <v-row>
          <v-col
  
          >
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

  #cuerpoTexto2{

    font-size: 20px;
    -webkit-text-fill-color:#432d20; /* Will override color (regardless of order) */
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color:#0000;

  }

  #tituloTexto2{

    font-size: 20px;
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