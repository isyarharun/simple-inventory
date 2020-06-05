<template>
  <header>
    <span>Simple Inventory</span>
    <span @click="logout" class="logout">Logout</span>
  </header>
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
.logout {
  position: absolute;
  right: 10px;
}
</style>
