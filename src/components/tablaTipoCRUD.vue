<template>

<!-- 
    TABLA CRUD Para la tabla Tipo de la base de datos


 -->

    <!-- Definiendo la tabla:
            Usa como cabeceras el arreglo "Headers"
     -->
    <v-data-table
        :headers="headersProductos"
        :items="Productos"
        sort-by="Creado"
        class="elevation-3"
        id="tablaTipos"
    >
        <template v-slot:top>
            <v-toolbar
                flat
            >
            <!--  Título -->
                <v-toolbar-title>Tipos de productos</v-toolbar-title>
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
                            Agregar Tipo
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
                                            v-model="editedProduct.Descr"
                                            label="Nombre"
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
                                                v-model="editedProduct.Foto"
                                            ></v-file-input>
                                        </template>
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
                        <v-card-title class="headline">¿Estas seguro de que quieres borrar este tipo de producto?</v-card-title>
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

    name: "tablaTipoCRUD",

    data: ()=> ({

        Productos: [],
        formTitle: "Agrega un nuevo tipo",

        dialog: false,
        dialogDelete: false,

        editedIndex : -1,
        editedProduct: {
            Descr: "",
            Foto: "",
        },
        defaultItem: {
            Tipo_id: 0,
            Descr: "",
            Foto: "",
        },

        headersProductos:[
            {
                text: 'Tipo',
                align: 'start',
                sortable: false,
                value: 'Descr',
            },
            {text: 'Editar/Borrar', value: 'actions', sortable: false },
        ],


    }),
    
    methods: {
        async getAllInfo(){

            try {
                    const response = await axios.get("http://localhost:5000/Tipos");
                    this.Productos = response.data;
                } catch (err) {
                    console.log(err);
                }

        },

        editItem (item) {

                this.editedIndex = item.Tipo_id
                this.editedProduct = Object.assign({}, item)
                this.dialog = true
                
            },


            //Borrar un elemento 
            deleteItem (item) {
                this.editedIndex = item.Tipo_id
                this.editedProduct = Object.assign({}, item)
                this.dialogDelete = true
                
            },
            // Confirmar eliminar el elemento
            async deleteItemConfirm () {
                
                //Borrando el tipo de la tabla TIPO
                try{
                    await axios.delete(`http://localhost:5000/Tipos/${this.editedIndex}`)
                    this.getAllInfo();
                }catch(err){
                    console.log(err)
                }

                //Borrando los registros en la tabla Tipo_id
                try{
                    await axios.delete(`http://localhost:5000/TiposByTipo_id/${this.editedIndex}`)
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
                                `http://localhost:5000/Tipos/${this.editedIndex}`,
                            {
                                
                                Descr:      this.editedProduct.Descr,
                                Foto:       this.editedProduct.Foto.name,
                                id:         this.editedIndex,

                            });
                    }catch(err){
                        console.log(err)
                    }

                    this.getAllInfo()

                } else {
                    
                    try{

                        await axios.post("http://localhost:5000/Tipos",{
                         

                        Descr:  this.editedProduct.Descr,
                        Foto:   this.editedProduct.Foto.name,


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

<style>

#tablaTipos{

    width: 300px;
}

</style>