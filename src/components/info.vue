<template>
    <v-parallax 
    dark
    src="../assets/parallax1.png"
    height="300"
    
  >
    <v-container class="grid">
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          class="text-left"
          cols="7"
        >
          <h1 id = "encabezadoInfo">
            ¿Quiénes somos?
          </h1>
          <h4 id = "subencabezado">
            Esta es la buena
          </h4>
        </v-col>
        <v-col
          class align-self="center"
          cols="2"
        >
          <div>
            <v-card
              class="pa-2"
              tile
              color="#8e2442"


            >
              <router-link to="/about" >Ver más</router-link>

              
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

#encabezadoInfo {

  font-size: 60px;
  -webkit-text-fill-color:#8e2442; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color:#eece9f;
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
    name: "info",
    methods: {
      goToAbout(){
        window.location.href = 'about';
      }

    },
};
</script>
