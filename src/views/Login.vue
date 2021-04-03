
<template>
    <div>
       <v-layout row align-center justify-center>
           <v-col
            cols="12"
           >
                <v-card
                    class="ma-5"
                    ref="form"
                    width="400"
                    elevation="10"
                    outlined
                >
                    
                    <v-card-text>

                        <v-card-title >Ingrese</v-card-title>
                        
                            <v-text-field
                            
                            label="Usuario"
                            required
                            ></v-text-field>
                        

                        
                            <v-text-field
                                
                                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                
                                :type="show1 ? 'text' : 'password'"
                                name="input-10-1"
                                label="Contraseña"
                                
                                @click:append="show1 = !show1"
                            >

                            </v-text-field>
                  
                    </v-card-text>
                    <v-divider ></v-divider>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn> Entrar</v-btn>
                    </v-card-actions>
                    
                </v-card>
            </v-col>

        <v-row justify="center">

            <v-col>
                <h1 class="ma-10"> Holaaaa prro</h1>
            </v-col>
        </v-row>

       </v-layout>
    </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

<script>
export default {
    name: "Login",

    data (){
        return{

            show1: false,
            allData: '',
        }
    },

    methods:{

        fetchAllData:function(){
            
            
            axios.get('action.php')
            .then(function (response) {
               this.allData = response.data;
            })
            .catch(function (error) {
               console.log(error);
            });

            if(this.allData != ''){
                alert("Im not empty :D")
            }
        },

        
 
    },
    created (){
            this.fetchAllData();
        },

    
    
}   
</script>