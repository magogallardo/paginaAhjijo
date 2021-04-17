<template>
    <div class="ma-2">

        <!-- Fila principal  -->
        <v-row >

            <!-- Barra de navegación lateral -->
            <v-col cols="auto">
                <v-card
                    height="400"
                    width="256"
                    class="mx-auto"
                >
                    <v-navigation-drawer permanent>
                    <v-list-item>
                        <v-list-item-content>
                        <v-list-item-title class="title">
                            Panel de control 
                        </v-list-item-title>
                        <v-list-item-subtitle>
                            USUARIO ACTIVO
                        </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>

                    <v-divider></v-divider>

                    <v-list
                        dense
                        nav
                    >
                        <v-list-item
                        v-for="item in items"
                        :key="item.title"
                        link
                        @click="setSelected(item)"
                        >
                        <v-list-item-icon>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item-content>
                        
                        
                        </v-list-item>
                        
                    </v-list>

                    <v-divider></v-divider>


                    <v-list
                        dense
                        nav
                    >
                        <v-list-item
                        v-for="item in childItems"
                        :key="item.title"
                        link
                        @click="setSelected(item)"
                        >
                        <v-list-item-icon>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item-content>
                        
                        
                        </v-list-item>
                        
                    </v-list>

                    </v-navigation-drawer>
                </v-card>

            </v-col>

            <!-- Columna condicional de la tabla productos -->
            <v-col
                v-if="selectedView == 'Productos'"
            >
                <tablaProductosCRUD/>
            </v-col>

            <!-- Columna condicional de la tabla Recetas -->
            <v-col
                v-if="selectedView == 'Recetas'"
            >
                <tablaRecetasCRUD/>
            </v-col>
            
            <!-- Columna adicional de la tabla Info -->
            <v-col
                v-if="selectedView == 'Info'"
            >
                <tablaInfoCRUD/>
            </v-col>
            <!-- Columna condicional de la tabla tipos -->

            <v-col
                v-if="selectedView == 'Tipos de productos'"
            >
                <tablaTipoCRUD/>
            </v-col>



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
            selectedView: "Productos",
            
            expandTipos: false,

            childItems: [
                {title: 'Tipos de productos', parent: 'Productos', show: false, icon: 'mdi-view-dashboard'},  
            ],

            items: [
          { title: 'Productos', icon: 'mdi-view-dashboard' },
          { title: 'Recetas', icon: 'mdi-image' },
          { title: 'Info', icon: 'mdi-help-box' },
        ],
        right: null,


        }),

        methods: { 
           setSelected(item){
               this.selectedView = item.title           
           }
           
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
