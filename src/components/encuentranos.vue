<template>
    <div>
        <!--  https://goo.gl/maps/Y6ycbBMr7SA8Lm4D7  -->
        
        <v-parallax
            src="../assets/fondoEncuentranos.jpeg"
            height="auto"
        >
            <!-- Titulo -->
            <v-container class="mb-10">


                <v-row
                    align="center"
                    class="text-right"
                >
                    <v-col
                    >
                        <h1 id="encabezadoRecetas" class="ma-10">Contáctanos</h1>
                    </v-col>    
                </v-row>
                <v-row
                    align="center"
                >


                    <v-col
                        cols="6"
                    >
                        <v-card 
                            class="mx-auto"
                           width="400"
                           @click="toMaps()"
                        >
                        <v-img
                            src="../assets/frontalnegocio.png"
                            class="white--text align-end"
                            gradient="to bottom, rgba(0,0,0,.01), rgba(0,0,0,.9)"
                        >
                                <v-card-title >Visítanos</v-card-title>
                                <v-card-subtitle class="white--text" 
                                v-text="Direccion"></v-card-subtitle>

                        </v-img>

                        </v-card>
                    </v-col>

                    <v-col 
                        cols="6"
                    >
                        <v-card
                            class="mx-auto"
                            width="400"
                        >
                            <v-img
                                src="../assets/phone.jpg"
                                class="white--text align-end align-center"
                            gradient="to bottom, rgba(0,0,0,.01), rgba(0,0,0,.9)"
                            >
                                <v-card-title >Llámanos</v-card-title>
                                <v-card-subtitle class="white--text" 
                                v-text="Telefono"></v-card-subtitle>

                            </v-img>
                        </v-card>

                    </v-col>
                    <v-col 
                        cols="12"
                    >
                        <v-card
                            class="mx-auto"
                            width="400"
                        >
                            <v-img
                                src="../assets/computer.jpeg"
                                class="white--text align-end"
                            gradient="to bottom, rgba(0,0,0,.01), rgba(0,0,0,.9)"
                            >
                                <v-card-title >Escríbenos</v-card-title>
                                <v-card-subtitle class="white--text" 
                                v-text="Correo"></v-card-subtitle>

                            </v-img>
                        </v-card>

                    </v-col>
                </v-row>


            </v-container>
        </v-parallax>

    </div>
</template>

<style scoped>

</style>


<script>
import axios from "axios";

export default {



    name: "encuentranos",
    methods: {

        toMaps(){
            window.location.href = this.LinkUbicacion;
        },

        async getInfo(){
            try {
                    const response = await axios.get("http://localhost:5000/Info");
                    this.info = response.data;
                } catch (err) {
                    console.log(err);
                }
            
            this.Direccion = this.info[0].Direccion,
            this.LinkUbicacion = this.info[0].LinkUbicacion,
            this.Telefono = this.info[0].Telefono,
            this.Correo = this.info[0].Correo
        },



    },
    data: () =>({
        Direccion: "Blvd. las Reinas 1007 - 1, Las Reynas, 36720 Salamanca, Gto.",
        TituloPagina: "",
        Telefono: "",
        Correo: "", 
        LinkUbicacion: "", 

        info: []
    }),
    
    mounted() {
        this.getInfo();
    },





}
</script>