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
                    <v-card
                        width="800"
                    >
                        <v-card-title>
                            <span class="headline">{{ formTitle }}</span>
                        </v-card-title>
                        <v-card-text>
                            <v-container>
                                <v-row>
                                    <!-- Campo para editar Titulo -->
                                    <v-col
                                        cols="12"
                                    >
                                        <v-text-field
                                            v-model="editedProduct.Titulo"
                                            label="Titulo"
                                        ></v-text-field>
                                    </v-col>


                                    <!-- Campo de Tipo de producto -->

                                     <v-col
                                        cols="12"
                                        sm="6"
                                        md="4"
                                    >   
                                        <v-dialog
                                            v-model="productsDialog"
                                        >
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-btn
                                                color="white"
                                                
                                                v-bind="attrs"
                                                v-on="on"
                                                >
                                                Escoge uno o varios productos
                                                </v-btn>
                                            </template>
                                            <v-card
                                                
                                                
                                            >   
                                                <v-card-title>{{agregaProductosTitle}}</v-card-title>
                                                <v-card-subtitle>Productos seleccionados: {{selected.length}}</v-card-subtitle>
                                                <v-spacer></v-spacer>
                                                    <v-text-field
                                                        class="ma-2"
                                                        v-model="search2"
                                                        append-icon="mdi-magnify"
                                                        label="Search"
                                                        single-line
                                                        hide-details
                                                    ></v-text-field>
                                                    
                                                    <v-data-table
                                                    class="ma-2"
                                                        v-model="selected"
                                                        :headers="headersListaProductos"
                                                        :items="ListaProductos"
                                                        :search="search2"
                                                        item-key="Nombre"
                                                        show-select
                                                    >
                                                      
                                                    </v-data-table>
                                                    <v-card-actions>
                                                        <v-spacer></v-spacer>
                                                            <v-btn
                                                                color="blue darken-1"
                                                                text
                                                                @click="closeAgregarProductos"
                                                                >
                                                                Cancelar
                                                            </v-btn>
                                                            <v-btn
                                                                color="blue darken-1"
                                                                text
                                                                @click="agregarProductos"
                                                            >
                                                                Guardar
                                                            </v-btn>
                                                    </v-card-actions>  
                                            </v-card>


                                        </v-dialog>

                                        
                                    </v-col>


                                    <!-- Campo para editar Ingredientes -->
                                    <v-col
                                        cols="12"
                                    >
                                        <v-combobox
                                            v-model="chips"
                                            :items="ProductosInReceta"
                                            chips
                                            clearable
                                            label="Escriba los ingredientes"
                                            multiple
                                            solo
                                        >
                                            <template v-slot:selection="{ attrs, item, select, selected }">
                                                <v-chip
                                                    v-bind="attrs"
                                                    :input-value="selected"
                                                    close
                                                    @click="select"
                                                    @click:close="removeChip(item)"
                                                >
                                                    <strong>{{ item }}</strong>&nbsp;
                                                    
                                                </v-chip>
                                            </template>
                                        </v-combobox>
                                    </v-col>

                                    <!-- Campo para editar Descripción -->
                                    <v-col
                                        cols="12"
                                    >
                                        <v-textarea
                                            name="input-7-1"
                                            label="Descripción"
                                            v-model="editedProduct.Descr"
                                            hint="Añade una descripción breve"
                                        ></v-textarea>


                                    </v-col>
                                        

                                    <!-- Preparación (DEBE SER CAMPO GRANDE) -->
                                    <v-col
                                        cols="12"
                                    >
                                        <v-textarea
                                            name="input-7-1"
                                            label="Preparación"
                                            v-model="editedProduct.Preparacion"
                                            hint="Usa enter para separar pasos"
                                            counter
                                            :rules="preparacionRules"
                                        ></v-textarea>
                                    </v-col>
                                    <!-- Tiempo MINUTOS de preparación -->
                                    <v-col
                                        cols="12"
                                        sm="6"
                                        md="4"
                                    >
                                        <v-text-field
                                            v-model="editedProduct.TiempoPreparacion"
                                            label="Tiempo de preparacion"
                                        ></v-text-field>
                                    </v-col>
                                    <!-- Campo de Likes de receta -->
                                    <v-col
                                        cols="12"
                                        sm="6"
                                        md="4"
                                    >
                                        <v-text-field
                                            v-model="editedProduct.Likes"
                                            label="Likes"
                                        ></v-text-field>
                                    </v-col>
                                    <!-- Campo de Foto -->
                                    <v-col
                                        cols="12"
                                        sm="6"
                                        md="4"
                                    >
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


        Productos: [], // <<<=== Así se llama el arreglo de las recetas

        formTitle: "Receta",

        agregaProductosTitle: "Agrega productos a la receta",

        ListaProductos: [],
        Receta_Productos: [],

        selected: [],

        ProductosInReceta: [],


        chips: [],

        lastReceta_id: -1,

        search2: "",

        dialog: false,
        productsDialog: false,
        dialogDelete: false,

        editedIndex : -1,

        preparacionRules: [v => v.length <= 700 || 'Máximo 700 caracteres'],


        editedProduct: {
            
            Titulo: "",
            Descr: "",
            Ingredientes: "",
            Preparacion: "",
            TiempoPreparacion: "",
            Likes: "",
            Foto: "",
            Tipo_id: 0,
            Creado: '2021-03-26 02:43:19',

        },
        defaultItem: {
            Receta_id: 0,
            Titulo: "",
            Descr: "",
            Ingredientes: "",
            Preparacion: "",
            TiempoPreparacion: "",
            Likes: "",
            Foto: "",
            Tipo_id: 0,
            Creado: '2021-03-26 02:43:19',
        },

        headersListaProductos:[
            {
            text: 'Nombre de producto',
            align: 'start',
            sortable: false,
            value: 'Nombre',
          }

        ],


        headersProductos:[
            {
                text: 'Titulo',
                align: 'start',
                sortable: false,
                value: 'Titulo',
            },
            { text: 'Descripción', value: 'Descr' },
            {text: 'Tiempo de preparación', value: 'TiempoPreparacion'},
            {text: 'Creado/Modificado', value: 'Creado'},
            {text: 'Editar/Borrar', value: 'actions', sortable: false },
        
        ],

    }),

    methods:{

        async getAllInfo(){

            //_________________ cargando Recetas

            try {
                    const response = await axios.get("http://localhost:5000/Recetas");
                    this.Productos = response.data;
                } catch (err) {
                    console.log(err);
                }

            //___________ Cargando productos

            try {

                const response = await axios.get("http://localhost:5000/Productos");
                this.ListaProductos = response.data;
            } catch(err) {
                console.log(err);
            }

            //____________ Obteniendo Receta_Producto

            try {
                const response = await axios.get("http://localhost:5000/Receta_Producto")
                this.Receta_Productos = response.data;
            }catch(err){
                console.log(err);
            }

        },

        editItem (item) {

                this.editedIndex = item.Receta_id
                this.editedProduct = Object.assign({}, item)
                this.dialog = true
                this.chips = this.editedProduct.Ingredientes.split('\n')


                this.selected = []

                for (let i = 0; i<this.Receta_Productos.length; i++) {
                    var currentNumber = this.Receta_Productos[i];
                    if (currentNumber.Receta_id == this.editedIndex) {
                            for(let j = 0; j < this.ListaProductos.length; j++){
                                var auxProduct = this.ListaProductos[j];
                                if(auxProduct.Producto_id == currentNumber.Producto_id)
                                    this.selected.push(auxProduct)
                            }

                        
                    }
                }
                
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

                    //__________ Eliminando el los registros asociados con esta receta en 
                    //              Receta_Producto

                try{
                    await axios.delete(`http://localhost:5000/Receta_ProductoDeleteByReceta/${this.editedIndex}`)
                }catch(err){
                    console.log(err)
                }
                
                
                this.closeDelete()
            },

            removeChip (item) {
                this.chips.splice(this.chips.indexOf(item), 1)
                this.chips = [...this.chips]
            },

            //Cerrar dialogo
            close () {
                this.dialog = false
                this.chips = []
                this.selected  = []
                this.ProductosInReceta = []
                this.$nextTick(() => {
                this.editedProduct = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
                })
            },

            closeAgregarProductos(){
                this.productsDialog = false
                this.$nextTick(() => {
                    if(this.editedIndex == -1)
                        this.selected = []
                })
            },

            agregarProductos(){
                for(var i = 0; i < this.selected.length; i++)
                    this.ProductosInReceta.push(this.selected[i].Nombre)
                this.productsDialog = false
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

                    this.editedProduct.Ingredientes = ''
                    
                for(var l = 0; l < this.chips.length  - 1; l++){
                    this.editedProduct.Ingredientes += this.chips[l] + '\n'

                }
                    this.editedProduct.Ingredientes += this.chips[this.chips.length - 1]



                if (this.editedIndex > -1) {

                    


                    try{
                            //______________ Guardando/Editando los datos de la receta
                            await axios.put(
                                `http://localhost:5000/Recetas/${this.editedIndex}`,
                            {
                                Titulo:             this.editedProduct.Titulo,
                                Descr:              this.editedProduct.Descr,
                                Ingredientes:       this.editedProduct.Ingredientes,
                                Preparacion:        this.editedProduct.Preparacion,
                                TiempoPreparacion:  this.editedProduct.TiempoPreparacion,
                                Likes:              this.editedProduct.Likes,
                                //___________- Usando solo el nombre del archivo MOMENTANEAMENTE
                                Foto:               this.editedProduct.Foto.name,
                                Tipo_id:            this.editedProduct.Tipo_id,
                                Creado:             '2021-03-26 02:54:05',
                                id:                 this.editedIndex,

                            });
                    }catch(err){
                        console.log(err)
                    }


                        //__________ Eliminando el los registros asociados con esta receta en 
                        //              Receta_Producto

                    try{
                        await axios.delete(`http://localhost:5000/Receta_ProductoDeleteByReceta/${this.editedIndex}`)
                    }catch(err){
                        console.log(err)
                    }

                        //______________ Creando nuevos registros asociacios a esta receta en
                        //                  Receta_Producto
                    
                    for(var k = 0; k < this.selected.length; k++){

                        try{
                        await axios.post("http://localhost:5000/Receta_Producto",{
                            Receta_id:      this.editedIndex,
                            Producto_id:    this.selected[k].Producto_id,
                        });
                        }catch(err){
                            console.log(err)
                        }
                    }


                    this.getAllInfo()

                } else {
                    
                    try{

                        await axios.post("http://localhost:5000/Recetas",{
                         
                        Titulo:             this.editedProduct.Titulo,
                        Descr:              this.editedProduct.Descr,
                        Ingredientes:       this.editedProduct.Ingredientes,
                        Preparacion:        this.editedProduct.Preparacion,
                        TiempoPreparacion:  this.editedProduct.TiempoPreparacion,
                        Likes:              this.editedProduct.Likes,
                        //____Usando solo el nombre del archivo MOMENTANEAMENTE
                        Foto:               this.editedProduct.Foto.name,
                        Tipo_id:            this.editedProduct.Tipo_id,
                        Creado:             '2021-03-26 02:54:05',

                        });
                    }catch(err){
                        console.log(err)
                       
                    }

                    //Obtener primero el último ID añadido
                    try{
                        const response = await axios.get("http://localhost:5000/LastReceta_id");
                        
                        this.LastReceta_id = response.data[0].maximo

                    }catch(err){
                        
                        console.log(err)
                    }

                    for(var i = 0; i < this.selected.length; i++){

                        try{
                        await axios.post("http://localhost:5000/Receta_Producto",{
                            Receta_id:      this.LastReceta_id,
                            Producto_id: this.selected[i].Producto_id,
                        });
                        }catch(err){
                            console.log(err)
                        }
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