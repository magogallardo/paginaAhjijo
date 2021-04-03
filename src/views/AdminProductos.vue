<template>
    <div>

       <table class="table is-striped is-bordered mt-2 is-fullwidth">
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Price</th>
          <th class="has-text-centered">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.Producto_id">
          <td>{{ item.Nombre }}</td>
          <td>{{ item.Descr }}</td>
          <td class="has-text-centered">
            <router-link
              :to="{ name: 'Edit', params: { id: item.product_id } }"
              class="button is-info is-small"
              >Edit</router-link
            >
            <a
              class="button is-danger is-small"
              @click="deleteProduct(item.product_id)"
              >Delete</a
            >
          </td>
        </tr>
      </tbody>
    </table>
    </div>
</template>

<script>

import axios from "axios";

    export default {
        name: "AdminProductos",
        data(){
            return{
                items: [],
            };
        },

        created() {
            this.getProducts();
        },

        methods: {
            // Get All Products
            async getProducts() {
                try {
                    const response = await axios.get("http://localhost:5000/AdminProductos");
                    this.items = response.data;
                } catch (err) {
                console.log(err);
                }
            },


        },
        
        
    }

</script>
