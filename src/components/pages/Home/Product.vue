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
      <select v-model="selected">
        <option value="null" disabled>Select category</option>
        <option
          v-for="(category, name) in categories"
          :key="name"
          v-bind:value="category"
        >
          {{ category.name }}
        </option>
      </select>
      <input type="button" value="Save" @click="saveProduct" />
    </div>

    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Category</th>
            <th></th>
            <th></th>
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
              <button @click="editProduct(name)">Edit</button>
            </td>
            <td>
              <button @click="deleteProduct(name)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { firebaseDb } from "@/config/firebase";
import uniqid from "uniqid";
export default {
  data() {
    return {
      product: {
        id: null,
        name: null,
        description: null,
        category: null
      },
      selected: null,
      products: [],
      categories: []
    };
  },
  methods: {
    saveProduct() {
      console.log(this.selected);
      if (this.product.id == null) {
        this.product.id = uniqid();
      }
      firebaseDb.ref("products/" + this.product.id).set({
        id: this.product.id,
        name: this.product.name,
        description: this.product.description,
        category: this.selected
      });
      this.product.name = null;
      this.product.id = null;
      this.selected = null;
      this.product.description = null;
    },
    deleteProduct(id) {
      firebaseDb.ref("products/" + id).remove();
    },
    editProduct(id) {
      const ref = firebaseDb.ref("products/" + id);
      var self = this;
      ref.on("value", function(snapshot) {
        self.product = snapshot.val();
        self.product.id = id;
      });
    }
  },
  mounted() {
    var self = this;
    const categoriesRef = firebaseDb.ref("categories");
    categoriesRef.on("value", function(snapshot) {
      self.categories = snapshot.val();
    });

    const prodRef = firebaseDb.ref("products");
    prodRef.on("value", function(snapshot) {
      self.products = snapshot.val();
    });
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
</style>
