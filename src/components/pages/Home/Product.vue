<template>
  <div>
    <div class="container">
      Product
      <input
        type="text"
        placeholder="Input product name"
        v-model="product.name"
      />
      <input
        type="text"
        placeholder="Input product description"
        v-model="product.description"
      />
      <select v-model="product.category">
        <option value="null" disabled>Select category</option>
        <option
          v-for="(category, name) in categories"
          :key="name"
          v-bind:value="category"
        >
          {{ category.name }}
        </option>
      </select>
      <input type="button" value="Save" @click="saveProd" />
    </div>

    <div>
      <table id="products-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Category</th>
            <th class="action">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, name) in products" :key="name">
            <td>
              {{ product.name }}
            </td>
            <td>{{ product.description }}</td>
            <td>{{ product.category.name }}</td>
            <td>
              <button @click="newProd()">New</button>
              <button @click="editProduct(name)">Edit</button>
              <button @click="deleteProduct(name)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      categories: "getCategories",
      products: "getProducts",
      product: "getProduct"
    })
  },
  methods: {
    ...mapActions([
      "fetchCategories",
      "fetchProducts",
      "saveProduct",
      "editProduct",
      "deleteProduct",
      "resetProduct"
    ]),
    saveProd() {
      this.saveProduct({
        id: this.product.id,
        name: this.product.name,
        description: this.product.description,
        category: this.product.category
      });
    },
    deleteProd(id) {
      this.deleteProduct(id);
    },
    editProd(id) {
      this.editProduct(id);
    },
    newProd() {
      this.resetProduct();
    }
  },
  mounted() {
    this.fetchCategories();
    this.fetchProducts();
  }
};
</script>
<style scoped>
input[type="text"],
select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  background: white;
}

input[type="button"] {
  width: 100%;
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type="button"]:hover {
  background-color: #45a049;
}

div.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}

#products-table {
  padding-top: 10px;
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#products-table td,
#products-table th {
  border: 1px solid #ddd;
  padding: 8px;
}

#products-table .action {
  width: 150px;
}

#products-table tr:nth-child(even) {
  background-color: #f2f2f2;
}

#products-table tr:hover {
  background-color: #ddd;
}

#products-table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4caf50;
  color: white;
}
</style>
