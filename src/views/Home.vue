<template>
  <div class="home">
    
    <v-main>

      <carrousel/>
      <products/>
      <recetas/>
      <info/>

    </v-main>
  </div>
</template>

<script>
import carrousel from "../components/carrousel.vue"
import products from "../components/products.vue"
import info from "../components/info.vue"
import recetas from "../components/recetas.vue"


export default {
  name: "Home",
  components: {
    products,
    info,
    recetas,
    carrousel
  }
};
</script>
<style>

</style>
