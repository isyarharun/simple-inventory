<template>
  <div>
    <div class="container">
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
      <input type="button" value="Save" @click="saveCat" />
    </div>

    <div>
      <table id="categories-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th class="action">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(category, name) in categories" :key="name">
            <td>
              {{ category.name }}
            </td>
            <td>{{ category.description }}</td>
            <td>
              <button @click="newCat()">New</button>
              <button @click="editCat(category.id)">Edit</button>
              <button @click="deleteCat(category.id)">Delete</button>
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
      category: "getCategory"
    })
  },
  methods: {
    ...mapActions([
      "fetchCategories",
      "saveCategory",
      "editCategory",
      "deleteCategory",
      "resetCategory"
    ]),
    saveCat() {
      this.saveCategory({
        name: this.category.name,
        description: this.category.description,
        id: this.category.id
      });
    },
    deleteCat(id) {
      this.deleteCategory(id);
    },
    editCat(id) {
      this.editCategory(id);
    },
    newCat() {
      this.resetCategory();
    }
  },
  mounted() {
    this.fetchCategories();
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

#categories-table {
  padding-top: 10px;
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#categories-table td,
#categories-table th {
  border: 1px solid #ddd;
  padding: 8px;
}

#categories-table .action {
  width: 150px;
}

#categories-table tr:nth-child(even) {
  background-color: #f2f2f2;
}

#categories-table tr:hover {
  background-color: #ddd;
}

#categories-table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4caf50;
  color: white;
}
</style>
