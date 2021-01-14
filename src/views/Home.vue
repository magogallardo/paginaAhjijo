<template>
  <div class="home">
    <title>Sistema de ventas </title>
    <HelloWorld msg="Esto se convertirá en la página de AhJijo Esta es la Buena" />
    <img alt="Ahjijo logo" src="../assets/logo.png" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>
