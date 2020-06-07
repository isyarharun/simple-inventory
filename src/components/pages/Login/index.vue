<template>
  <div>
    <Login v-if="islogin" />
    <Signup v-if="!islogin" />
    <div class="container signin">
      <p v-if="islogin">
        Don't have an account?
        <span @click="changeSignin(false)">Register</span>.
      </p>
      <p v-if="!islogin">
        Already have an account?
        <span @click="changeSignin(true)">Sign in</span>.
      </p>
    </div>
  </div>
</template>
<script>
import Login from "./Login";
import Signup from "./Signup";
export default {
  components: {
    Login,
    Signup
  },
  data() {
    return {
      islogin: true
    };
  },
  methods: {
    changeSignin(value) {
      this.islogin = value;
    }
  }
};
</script>
<style>
.container {
  padding: 16px;
  background-color: white;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type="text"]:focus,
input[type="password"]:focus {
  background-color: #ddd;
  outline: none;
}

hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

.registerbtn {
  background-color: #4caf50;
  color: white;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

.registerbtn:hover {
  opacity: 1;
}

a {
  color: dodgerblue;
}

.signin {
  background-color: #f1f1f1;
  text-align: center;
}
</style>
