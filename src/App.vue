<template>
  <v-app>
    <navBar/>
    
    <mainPage/>
    
    <v-main>
      <products/>
    </v-main>
    
    
    <footer1/>
      


  </v-app>
</template>

<script>

//import HelloWorld from "./components/HelloWorld.vue";
import footer1 from "./components/footer.vue";
import navBar from "./components/navBar.vue";
import mainPage from "./components/mainPage.vue"
import products from "./components/products.vue"

export default {
  name: "App",

  components: {
    //HelloWorld,
    products,
    navBar,
    footer1,
    mainPage
  },

  data: () => ({
    //
  })
};
</script>