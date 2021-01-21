<template>

    <v-bottom-navigation grow height="80" v-model="value" dark> 

    <v-btn icon @click="home">
      <span>Inicio</span>
      <v-icon>mdi-home</v-icon>
    </v-btn>

     <v-btn icon @click="productos">
        <span>Productos</span>
        <v-icon>mdi-food-variant</v-icon>
      </v-btn>

      <v-btn icon>
        <span>Recetas</span>
        <v-icon>mdi-carrot</v-icon>
      </v-btn>

      <v-btn icon>
        <span>¿Quiénes somos?</span>
        <v-icon>mdi-information</v-icon>
      </v-btn>

      <v-btn icon>
        <span>Encuéntranos!</span>
        <v-icon>mdi-map-marker</v-icon>
      </v-btn>

    </v-bottom-navigation>

</template>




<script>
//Importando íconos de Material Desing



export default {
    name: "navBar",
    methods: {
      productos(){
        window.scrollTo(0,400);
      },
      home(){
        window.scrollTo(0,0);
      }
    }
};
</script>