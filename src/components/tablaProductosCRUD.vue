<template>

<!-- 
    TABLA CRUD Para la tabla Producto de la base de datos


 -->

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
                <v-toolbar-title>Productos Recientes</v-toolbar-title>
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
                    max-width="700px"
                >   
                    <template v-slot:activator="{on, attrs}">
                        <v-btn
                            color="primary"
                            dark
                            class="mb-2"
                            v-bind="attrs"
                            v-on="on"
                        >
                            Agregar producto
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
                                    <!-- Campo para editar nombre -->
                                        <v-text-field
                                            v-model="editedProduct.Nombre"
                                            label="Nombre"
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
                                    <!-- Codigo -->
                                        <v-text-field
                                            v-model="editedProduct.Codigo"
                                            label="Codigo"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                        md="4"
                                    >
                                    <!-- Precio -->
                                        <v-text-field
                                            v-model="editedProduct.Precio"
                                            label="Precio"
                                            prefix="$"
                                            value="number"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                        md="4"
                                    >
                                    <!-- Campo de nombre de foto -->
                                        <template>
                                            <v-file-input
                                                label="File input"
                                                filled
                                                prepend-icon="mdi-camera"
                                            ></v-file-input>
                                        </template>
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

    name: "tablaProductosCRUD",



    data: ()=> ({

        Productos: [],
        formTitle: "Agrega un nuevo producto",

        dialog: false,
        dialogDelete: false,

        editedIndex : -1,
        editedProduct: {
            
            Nombre: "",
            Descr: "",
            Codigo: "",
            Precio: "",
            Foto: "",
            Tipo_id: "",
            Creado: "",

        },
        defaultItem: {
            Producto_id: 0,
            Nombre: "",
            Descr: "",
            Codigo: "",
            Precio: "",
            Foto: "",
            Tipo_id: "",
            Creado: "",
        },

        headersProductos:[
            {
                text: 'Nombre',
                align: 'start',
                sortable: false,
                value: 'Nombre',
            },
            { text: 'Precio', value: 'Precio' },
            {text: 'Tipo', value: 'Tipo_id'},
            {text: 'Creado/Modificado', value: 'Creado'},
            {text: 'Editar/Borrar', value: 'actions', sortable: false },
        
        ],

    }),
    // Para vigilar que se cierre el diágolo
    watch: {
        dialog (val) {
            val || this.close()
        },
        dialogDelete (val) {
            val || this.closeDelete()
        },
    },


    methods:{

        async getAllInfo(){

            try {
                    const response = await axios.get("http://localhost:5000/Productos");
                    this.Productos = response.data;
                } catch (err) {
                    console.log(err);
                }

        },

        editItem (item) {

                this.editedIndex = item.Producto_id
                this.editedProduct = Object.assign({}, item)
                this.dialog = true
                
            },


            //Borrar un elemento 
            deleteItem (item) {
                this.editedIndex = item.Producto_id
                this.editedProduct = Object.assign({}, item)
                this.dialogDelete = true
                
            },
            // Confirmar eliminar el elemento
            async deleteItemConfirm () {

                try{
                    await axios.delete(`http://localhost:5000/Productos/${this.editedIndex}`)
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
                                `http://localhost:5000/Productos/${this.editedIndex}`,
                            {
                                Nombre:     this.editedProduct.Nombre,
                                Descr:      this.editedProduct.Descr,
                                Codigo:     this.editedProduct.Codigo,
                                Precio:     this.editedProduct.Precio,
                                Foto:       this.editedProduct.Foto,
                                Tipo_id:    this.editedProduct.Tipo_id,
                                Creado:     '2021-03-26 02:54:05',
                                id:         this.editedIndex,

                            });
                    }catch(err){
                        console.log(err)
                    }

                    this.getAllInfo()

                } else {
                    
                    try{

                        await axios.post("http://localhost:5000/Productos",{
                         
                        Nombre:     this.editedProduct.Nombre,
                        Descr:      this.editedProduct.Descr,
                        Codigo:     this.editedProduct.Codigo,
                        Precio:     this.editedProduct.Precio,
                        Foto:       this.editedProduct.Foto,
                        Tipo_id:    this.editedProduct.Tipo_id,
                        Creado:     '2021-03-26 02:54:05'

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