<template>
        <!-- View para ingresar al sistema a través de un Login -->
    
    <div>
        <v-row
            align-content="center"
            justify="center"
        >   

        <!-- Tarjeta de datos de login -->
            <v-card
                max-width="600"
                class="ma-10"
            >

                <!-- Titulo -->
                <v-card-title>Entra al sistema</v-card-title>

                <v-card-text
                >

                    <!-- Campo de texto: Usuario -->
                    <v-text-field
                        v-model="usuario"
                        label="Usuario"
                    >
                        
                    </v-text-field>

                    <!-- Campo de texto: Contraseña -->
                    <v-text-field
                        v-model="contrasena"
                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        
                        :type="showPassword ? 'text' : 'password'"
                        name="input-10-1"
                        label="Contraseña"
                        
                        
                        @click:append="showPassword = !showPassword"
                    >
                    </v-text-field>
                
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="login()" >Entrar</v-btn>
                    
                </v-card-actions>



            </v-card>
        </v-row>
    </div>
</template>

<script>

import auth from "../../backend/auth.js"
export default {
    name: "Login",

    data: ()=> ({

        showPassword : false,
        usuario: "",
        contrasena: "",
        error : false
    }),

    methods: {
        async login(){
            try {
                await auth.login(this.usuario, this.contrasena)
                alert("Usuario Registrado")
                this.$router.push("/PanelDeControl");
            
            }catch(err){
                this.error = true
                alert(err)
            }
        }
    }
}
</script>