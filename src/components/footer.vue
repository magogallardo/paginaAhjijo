<template>
  <v-footer padless dark>
    
    <v-col class ="text-center" cols="12">
      <v-layout>

        <v-card-text>

          <v-icon size="24px" @click="facebook">mdi-facebook</v-icon>      
          <v-icon size="24px" @click="instagram">mdi-instagram</v-icon>

        </v-card-text>
      
      </v-layout>
      <v-divider></v-divider>
    </v-col>
    
    <v-col
      class="text-center"
      cols="12"
    >
      {{ new Date().getFullYear() }} — <strong>Ah Jijo! Esta es la buena</strong>
    </v-col>



  </v-footer>
</template>


<script>
  export default {
    name: "footer1",
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-instagram',
      ],
    }),
    methods: {
      facebook(){
        window.location.href = 'https://www.facebook.com/Ah-Jijo-Ésta-es-la-buena-2024980200865330';
      },
      instagram(){
        window.location.href = 'https://www.instagram.com/ahjijoestaeslabuena';
      }
      
      
    },
  };
</script>

<style>
.v-footer{
  color: #d34b1d;
}
</style>