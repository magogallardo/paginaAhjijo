<template>
  <v-app>
    <navBar/>
    
    <router-view/>
    
    <footer1/>
      
  </v-app>
</template>


<script>

//import HelloWorld from "./components/HelloWorld.vue";
import footer1 from "./components/footer.vue";
import navBar from "./components/navBar.vue";


export default {
  name: "App",

  components: {
    //HelloWorld,
    navBar,
    footer1
  },

  data: () => ({
    //
  })
};
</script>