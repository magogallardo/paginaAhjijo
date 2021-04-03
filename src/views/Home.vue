<template>
  <div class="home">
    
    <v-main>
      <recetas/>
      <encuentranos/>

    </v-main>
  </div>
</template>

<script>
import recetas from "../components/recetas.vue"
import encuentranos from "../components/encuentranos.vue"


export default {
  name: "Home",
  components: {
    recetas,
    encuentranos
  }
};
</script>
<style>

</style>
