<template>
     <v-parallax 
    dark
    src="../assets/img1.jpeg"
     height="300"
    jumbotron
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        class="text-right"
        cols="12"
      >
        <h1 id = "encabezado">
          Ah Jijo!
        </h1>
        <h4 id = "subencabezado">
          Esta es la buena
        </h4>
      </v-col>
    </v-row>
  </v-parallax>


</template>

<script>
export default {
    name: "mainPage",
};
</script>

<style>

.v-parallax__image {
  width: 100%;
}

#encabezado {

  color:#d34b1d;
  font-size: 100px;
  -webkit-text-fill-color:#d34b1d; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 3px;
  -webkit-text-stroke-color:#4a4e2e;
}

#subencabezado{

  color:#599641;
  font-size: 30px;
  -webkit-text-fill-color:#599641; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color:#4a4e2e;

}

</style>