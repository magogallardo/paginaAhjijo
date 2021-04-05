<template>
    <!-- Tabla de recetas CRUD -->
    <!-- Definiendo la tabla:
            Usa como cabeceras el arreglo "Headers"
     -->
    <v-data-table
        :headers="headersProductos"
        :items="Productos"
        sort-by="Creado"
        class="elevation-3"
    >
        <template v-slot:top>
            <v-toolbar
                flat
            >
            <!--  Título -->
                <v-toolbar-title>Recetas Recientes</v-toolbar-title>
                <v-divider
                    class="mx-4"
                    inset
                    vertical
                ></v-divider>
                <v-spacer></v-spacer>

                <!-- 
                    Diálogo creado al oprimir el botón "Crear nuevo" 
                        éste se usa tanto para crear uno nuevo
                        como para editar uno dependiendo de la
                                variable <<editedIndex>>
                
                -->
                <v-dialog
                    v-model="dialog"
                    max-width="500px"
                >   
                    <template v-slot:activator="{on, attrs}">
                        <v-btn
                            color="primary"
                            dark
                            class="mb-2"
                            v-bind="attrs"
                            v-on="on"
                        >
                            Crear nuevo
                        </v-btn>
                    </template>
                    <v-card>
                        <v-card-title>
                            <span class="headline">{{ formTitle }}</span>
                        </v-card-title>
                        <v-card-text>
                            <v-container>
                                <v-row>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                        md="4"
                                    >
                                    <!-- Campo para editar Titulo -->
                                        <v-text-field
                                            v-model="editedProduct.Titulo"
                                            label="Titulo"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                        md="4"
                                    >
                                    <!-- Campo para editar Descripción -->
                                        <v-text-field
                                            v-model="editedProduct.Descr"
                                            label="Descripción"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                        md="4"
                                    >
                                    <!-- Preparación (DEBE SER CAMPO GRANDE) -->
                                        <v-text-field
                                            v-model="editedProduct.Preparacion"
                                            label="Preparacion"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                        md="4"
                                    >
                                    <!-- Tiempo MINUTOS de preparación -->
                                        <v-text-field
                                            v-model="editedProduct.TiempoPreparacion"
                                            label="Tiempo de preparacion"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                        md="4"
                                    >
                                    <!-- Campo de Likes de receta -->
                                        <v-text-field
                                            v-model="editedProduct.Likes"
                                            label="Likes"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                        md="4"
                                    >
                                    <!-- Campo de Foto -->
                                        <v-text-field
                                            v-model="editedProduct.Foto"
                                            label="Foto"
                                        ></v-text-field>
                                    </v-col>

                                    <v-col
                                        cols="12"
                                        sm="6"
                                        md="4"
                                    >
                                    <!-- Campo de Tipo de producto -->
                                        <v-text-field
                                            v-model="editedProduct.Tipo_id"
                                            label="Tipo Id(EDITAR A DROPDOWN)"
                                        ></v-text-field>
                                    </v-col>

                                </v-row>
                            </v-container>
                        </v-card-text>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                color="blue darken-1"
                                text
                                @click="close"
                                >
                                Cancelar
                            </v-btn>
                            <v-btn
                                color="blue darken-1"
                                text
                                @click="save"
                            >
                                Guardar
                            </v-btn>
                        </v-card-actions>

                    </v-card>

                </v-dialog>

                <!-- 
                        Díalogo para confirmar la eliminación de un producto
                                Este manda llamar la función "delteItemConfirm"
                                en caso de confirmar.
                                Y la función "closeDelete" en caso de cancelar
                 -->

                <v-dialog
                    v-model="dialogDelete"
                    max-width="500px"
                >
                    <v-card>
                        <v-card-title class="headline">¿Estas seguro de que quieres borrar este producto?</v-card-title>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" text @click="closeDelete">Cancelar</v-btn>
                            <v-btn color="blue darken-1" text @click="deleteItemConfirm">Ok</v-btn>
                            <v-spacer></v-spacer>
                        </v-card-actions>
                    </v-card>
                </v-dialog>

            </v-toolbar>    
        </template>

        <!-- Acciones de edición:
                Usa como cabeceras el arreglo "Headers"

         -->

        <template v-slot:[`item.actions`]="{ item }">
        <v-icon
            small
            class="mr-2"
            @click="editItem(item)"
        >
            mdi-pencil
        </v-icon>
        <v-icon
            small
            @click="deleteItem(item)"
        >
            mdi-delete
        </v-icon>
        </template>

        <template v-slot:no-data>
        <v-btn
            color="primary"
            @click="getAllInfo"
        >
            Reset
        </v-btn>
        </template>
    </v-data-table>
</template>



<script>

import axios from "axios"

export default {
    name: "tablaRecetasCRUD",

    data: ()=> ({


        Productos: [],

        dialog: false,
        dialogDelete: false,

        editedIndex : -1,
        editedProduct: {
            
            Titulo: "",
            Descr: "",
            Preparacion: "",
            TiempoPreparacion: "",
            Likes: "",
            Foto: "",
            Tipo_id: "",
            Creado: "",

        },
        defaultItem: {
            Receta_id: 0,
            Titulo: "",
            Descr: "",
            Preparacion: "",
            TiempoPreparacion: "",
            Likes: "",
            Foto: "",
            Tipo_id: "",
            Creado: "",
        },

        headersProductos:[
            {
                text: 'Titulo',
                align: 'start',
                sortable: false,
                value: 'Titulo',
            },
            { text: 'Descripción', value: 'Descr' },
            {text: 'Tiempo de preparación', value: 'Tipo_id'},
            {text: 'Tipo', value: 'Tipo_id'},
            {text: 'Creado/Modificado', value: 'Creado'},
            {text: 'Editar/Borrar', value: 'actions', sortable: false },
        
        ],

    }),

    methods:{

        async getAllInfo(){

            try {
                    const response = await axios.get("http://localhost:5000/Recetas");
                    this.Productos = response.data;
                } catch (err) {
                    console.log(err);
                }

        },

        editItem (item) {

                this.editedIndex = item.Receta_id
                this.editedProduct = Object.assign({}, item)
                this.dialog = true
                
            },


            //Borrar un elemento 
            deleteItem (item) {
                this.editedIndex = item.Receta_id
                this.editedProduct = Object.assign({}, item)
                this.dialogDelete = true
                
            },
            // Confirmar eliminar el elemento
            async deleteItemConfirm () {

                try{
                    await axios.delete(`http://localhost:5000/Recetas/${this.editedIndex}`)
                    this.getAllInfo();
                }catch(err){
                    console.log(err)
                }
            
                
                
                this.closeDelete()
            },


            //Cerrar dialogo
            close () {
                this.dialog = false
                this.$nextTick(() => {
                this.editedProduct = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
                })
            },

            closeDelete () {
                this.dialogDelete = false
                this.$nextTick(() => {
                this.editedProduct = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
                })
            },
            //Guardar un producto nuevo con editedItem
            async save () {
                
                

                if (this.editedIndex > -1) {

                    try{
                            
                            await axios.put(
                                `http://localhost:5000/Recetas/${this.editedIndex}`,
                            {
                                Titulo:             this.editedProduct.Titulo,
                                Descr:              this.editedProduct.Descr,
                                Preparacion:        this.editedProduct.Preparacion,
                                TiempoPreparacion:  this.editedProduct.TiempoPreparacion,
                                Likes:              this.editedProduct.Likes,
                                Foto:               this.editedProduct.Foto,
                                Tipo_id:            this.editedProduct.Tipo_id,
                                Creado:             '2021-03-26 02:54:05',
                                id:                 this.editedIndex,

                            });
                    }catch(err){
                        console.log(err)
                    }

                    this.getAllInfo()

                } else {
                    
                    try{

                        await axios.post("http://localhost:5000/Recetas",{
                         
                        Titulo:             this.editedProduct.Titulo,
                        Descr:              this.editedProduct.Descr,
                        Preparacion:        this.editedProduct.Preparacion,
                        TiempoPreparacion:  this.editedProduct.TiempoPreparacion,
                        Likes:              this.editedProduct.Likes,
                        Foto:               this.editedProduct.Foto,
                        Tipo_id:            this.editedProduct.Tipo_id,
                        Creado:             '2021-03-26 02:54:05',

                        });
                    }catch(err){
                        console.log(err)
                       
                    }

                    this.getAllInfo()
                }

                this.close()
            },

    },

    mounted(){

        this.getAllInfo()

    }
    
}
</script>