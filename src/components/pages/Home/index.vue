<template>
  <div>
    <div class="sidebar">
      <span @click="changeMenu('dashboard')">Dashboard</span>
      <span @click="changeMenu('category')">Category</span>
      <span @click="changeMenu('product')">Product</span>
      <span @click="logout">Logout</span>
    </div>
    <div class="content">
      <Dashboard v-if="dashboard" />
      <Category v-if="category" />
      <Product v-if="product" />
    </div>
  </div>
</template>
<script>
import Dashboard from "./Dashboard";
import Category from "./Category";
import Product from "./Product";
import firebase from "firebase";
export default {
  components: {
    Dashboard,
    Category,
    Product
  },
  data() {
    return {
      dashboard: true,
      category: false,
      product: false
    };
  },
  methods: {
    changeMenu(name) {
      this.dashboard = false;
      this.category = false;
      this.product = false;
      if (name === "dashboard") {
        this.dashboard = true;
      } else if (name === "category") {
        this.category = true;
      } else if (name === "product") {
        this.product = true;
      } else {
        this.dashboard = true;
      }
    },
    logout() {
      firebase.auth().signOut();
    }
  }
};
</script>
<style scoped>
.sidebar {
  margin: 0;
  padding: 0;
  width: 200px;
  background-color: #f1f1f1;
  position: fixed;
  height: 100%;
  overflow: auto;
}

.sidebar span {
  display: block;
  color: black;
  padding: 16px;
  cursor: pointer;
  text-decoration: none;
}

.sidebar span.active {
  background-color: #4caf50;
  color: white;
}

.sidebar span:hover:not(.active) {
  background-color: #555;
  color: white;
}

div.content {
  margin-left: 200px;
  padding: 1px 16px;
  height: 1000px;
}

@media screen and (max-width: 700px) {
  .sidebar {
    width: 100%;
    height: auto;
    position: relative;
  }
  .sidebar span {
    float: left;
  }
  div.content {
    margin-left: 0;
  }
}

@media screen and (max-width: 400px) {
  .sidebar span {
    text-align: center;
    float: none;
  }
}
</style>
