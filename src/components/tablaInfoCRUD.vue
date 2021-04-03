

<template>
    <!-- 

            TABLA CRUD Para la tabla Info de la base de datos

     -->

    <div>


         <!-- Carta de texto para mostrar y editar info -->
        <v-card
            elevation="10"
            width="500"
        >   
            <!-- Titulo de carta -->
            <v-card-title>Información general</v-card-title>
            <v-card-text
                
            >
                <!-- Campo de titulo -->
                <v-text-field
                    label="Titulo de Pagina"
                    :value="InfoGeneral[0].TituloPagina"
                    outlined
                    v-model="InfoGeneral[0].TituloPagina"
                >
                <!-- Campo de dirección -->
                </v-text-field>
                <v-text-field
                    label="Dirección del negocio"
                    :value="InfoGeneral[0].Direccion"
                    v-model="InfoGeneral[0].Direccion"
                >
                    
                </v-text-field>
                <!-- Ubicación -->
                <v-text-field
                    label="Ubicación (Link de Maps)"
                    :value="InfoGeneral[0].LinkUbicacion"
                    v-model="InfoGeneral[0].LinkUbicacion"
                >
                    
                </v-text-field>
                <!-- Teléfono -->
                <v-text-field
                    label="Teléfono"
                    :value="InfoGeneral[0].Telefono"
                    v-model="InfoGeneral[0].Telefono"
                >
                
                </v-text-field>
                <!-- Correo -->
                <v-text-field
                    label="Correo electronico"
                    :value="InfoGeneral[0].Correo"
                    v-model="InfoGeneral[0].Correo  "
                >
                    
                </v-text-field>

            </v-card-text>
            <v-divider></v-divider>

            <v-card-actions>

                <v-btn
                    color="primary"
                    text
                    @click="updateAllInfo()"
                >
                    Actualizar
                </v-btn>
            </v-card-actions>

        </v-card>


    </div>
</template>


<script>
import axios from "axios"
export default {
    name: "tablaInfoCRUD",

    methods: {
        

        //___________ Método para obtener toda la info
        async getAllInfo(){
                //__________ Consultando información general
                try {
                    const response = await axios.get("http://localhost:5000/Info");
                    this.InfoGeneral = response.data;
                } catch (err) {
                    console.log(err);
                }
        },

        //__________________________ Método para actualziar toda la info
        async updateAllInfo(){
            try{
                
                await axios.put(
                    `http://localhost:5000/Info/updateAll`,{
                        TituloPagina: this.InfoGeneral[0].TituloPagina, 
                        Direccion: this.InfoGeneral[0].Direccion,
                        LinkUbicacion: this.InfoGeneral[0].LinkUbicacion,
                        Telefono: this.InfoGeneral[0].Telefono,
                        Correo: this.InfoGeneral[0].Correo
                    }
                );

                alert("¡Se actualizaron los datos!")
            } catch(err){
                console.log(err)
            }

        },

    },

    //_________ Cargar datos al ser montado el componente
    mounted(){

        this.getAllInfo()
    },

    data: () => ({

        //_____________ Arreglo de Info
        InfoGeneral: [],


    }),
};
</script>
