<template>
  <div>
    <div class="sidebar">
      <span>Home</span>
      <span>Logout</span>
    </div>
  </div>
</template>
<script>
import firebase from "firebase";
export default {
  methods: {
    logout() {
      firebase.auth().signOut();
    }
  }
};
</script>
<style scoped>
.sidebar {
  height: 100%;
  width: 160px;
  position: fixed;
  z-index: 1;
  top: 56px;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 16px;
}

.sidebar span {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 20px;
  color: #818181;
  display: block;
}

.sidebar span:hover {
  color: #f1f1f1;
}

.main {
  margin-left: 160px; /* Same as the width of the sidenav */
  padding: 0px 10px;
}

@media screen and (max-height: 450px) {
  .sidebar {
    padding-top: 15px;
  }
  .sidebar a {
    font-size: 18px;
  }
}
</style>
