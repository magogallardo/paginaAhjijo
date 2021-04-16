<template>
    <div class="ma-10">

        <!-- Fila principal  -->
        <v-row justify="center" align="center">
            <!-- Columna para Titulo -->
            <v-col
                cols="12"
                class="text-center"
            >
                <h1 id="tituloEncabezado">Bienvenido al panel de control, {{ Usuario }}</h1>
                
            </v-col>
            <v-col
                cols="12"
            >
                <v-btn class="text" @click="expandInfo =! expandInfo">Informacion General</v-btn>
            </v-col>
            
            
            <!-- Columna de info general  -->
            <v-expand-transition>
                <v-col
                    v-show="expandInfo"
                    cols="12"
                    
                >   
                <!-- Usando el componente de tabla de info CRUD -->
                   <tablaInfoCRUD/>
                </v-col>
            </v-expand-transition>

            <!-- Sección de Productos -->
            <v-col
                cols="12"
            >
                <v-btn class="text" @click="expandProductos =! expandProductos">Productos</v-btn>
            </v-col>
            <!-- Columna expansiva de productos -->
            <v-expand-transition>
                <v-col
                    v-show="expandProductos"
                    cols="8"
                >
                    <!-- Usando el componente de tabla de productos CRUD -->
                    <tablaProductosCRUD/>

                    <!-- Columna de los tipos de producto -->
                    <v-col
                        cols="6"
                    >
                        <!-- Usando el componente de la tabla de tipos CRUD -->
                        <tablaTipoCRUD/>

                    </v-col>

                </v-col>
            </v-expand-transition>

            <!-- Sección de Recetas -->
            <v-col
                cols="12"
            >
                <v-btn class="text" @click="expandRecetas =! expandRecetas">Recetas</v-btn>
            </v-col>

            <!-- Columna expansiva de Recetas -->
            <v-expand-transition>
                <v-col
                    v-show="expandRecetas"
                    cols="12"
                >

                    <tablaRecetasCRUD/>

                </v-col>
            </v-expand-transition>

        </v-row>
        
    </div>
</template>

<script>

    import tablaInfoCRUD from "../components/tablaInfoCRUD"
    import tablaProductosCRUD from "../components/tablaProductosCRUD"
    import tablaRecetasCRUD from "../components/tablaRecetasCRUD"
    import tablaTipoCRUD from "../components/tablaTipoCRUD"

    export default { 
        name: "PanelDeControl",

        components: {

            tablaInfoCRUD,
            tablaProductosCRUD,
            tablaRecetasCRUD,
            tablaTipoCRUD
            
        },
         
        data: () => ({
            imagenEncabezado: "logo.png",
            Usuario: "Usuario",

            //Variables para expands
            expandInfo: false,
            expandProductos: true,
            expandRecetas: true,
            


        }),

        methods: { 
           

        },

    };
</script>

<style>
#tituloEncabezado{
    size: 0ch;
}

#imagenEncabezado{
    height: 50px;
    
}

</style>
