<template>
  <v-carousel
  
    show-arrows-on-hover
    cycle
    height="300"
    hide-delimiter-background
    hide-delimiters
    
  >
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
        
        
    >
      <v-img
      v-bind:src="require('../assets/' + item.src)"
      :position=item.position
      
      ></v-img>
    </v-carousel-item>
  </v-carousel>
</template>


<script>
  export default {
    name: 'carrousel',
    data () {
      return {
        items: [
          {src: "crr7.jpeg", position: '0px -310px'},  
          {src: "crr4.png", position: '0px -50px'},
          {src: "crr1.jpeg", position: '0px -300px'},
          {src: "crr2.jpeg", position: '0px -350px'},
          {src: "crr3.jpeg", position: '0px -450px'},
          {src: "crr5.jpeg", position: '0px -450px'},
          {src: "crr6.jpeg", position: '0px -400px'},
        ],
      }
    },
  }
</script>