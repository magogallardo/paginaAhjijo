<template>
  <div class="home">
    <title>Sistema de ventas </title>
    <HelloWorld msg="Esto se convertirá en el sistema de venta AhJijo" />
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
