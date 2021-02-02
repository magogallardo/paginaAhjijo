<template>
     <v-parallax 
    dark
    src="../assets/parallax1.png"
    height="300"
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

  
  margin-bottom: -80px;
  margin-right: auto;
  max-height: 130%;
  width: auto;
}

#encabezado {

  font-size: 100px;
  -webkit-text-fill-color:#c61817; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color:#4a4e2e;
}

#subencabezado{

  font-size: 30px;
  -webkit-text-fill-color:#ec6214; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color:#4a4e2e;

}

</style>