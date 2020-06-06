<template>
  <div>
    Category
    <input
      type="text"
      placeholder="Input category name"
      v-model="category.name"
    />
    <input
      type="text"
      placeholder="Input category description"
      v-model="category.description"
    />
    <button @click="saveCategory">Save</button>

    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(category, name) in categories" :key="name">
            <td>
              {{ category.name }}
            </td>
            <td>{{ category.description }}</td>
            <td>
              <button @click="editCategory(name)">Edit</button>
            </td>
            <td>
              <button @click="deleteCategory(name)">Delete</button>
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
      category: {
        id: null,
        name: null,
        description: null
      },
      categories: []
    };
  },
  methods: {
    saveCategory() {
      if (this.category.id == null) {
        this.category.id = uniqid();
      }
      firebaseDb.ref("categories/" + this.category.id).set({
        name: this.category.name,
        description: this.category.description
      });
      this.category.name = null;
      this.category.id = null;
      this.category.description = null;
    },
    deleteCategory(id) {
      firebaseDb.ref("categories/" + id).remove();
    },
    editCategory(id) {
      const ref = firebaseDb.ref("categories/" + id);
      var self = this;
      ref.on("value", function(snapshot) {
        self.category = snapshot.val();
        self.category.id = id;
      });
    }
  },
  mounted() {
    const categoriesRef = firebaseDb.ref("categories");
    var self = this;
    categoriesRef.on("value", function(snapshot) {
      self.categories = snapshot.val();
    });
  }
};
</script>
