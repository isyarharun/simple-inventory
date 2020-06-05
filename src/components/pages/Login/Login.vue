<template>
  <!-- template is coming from w3schools how to create a register form -->
  <div>
    <div class="container">
      <h1>Login</h1>
      <p>Please fill in this form to login.</p>
      <hr />

      <label for="email"><b>Email</b></label>
      <input
        type="text"
        placeholder="Enter Email"
        v-model="form.email"
        required
      />

      <label><b>Password</b></label>
      <input
        type="password"
        placeholder="Enter Password"
        v-model="form.password"
        required
      />

      <hr />
      <span class="red">{{ error }}</span>
      <button type="submit" @click="login" class="registerbtn">
        Login
      </button>
    </div>
    <div class="container signin">
      <p>Don't have an account? <span>Register</span>.</p>
    </div>
  </div>
</template>
<script>
import firebase from "firebase";
export default {
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      error: null
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
          console.log(data);
          this.$router.replace({ name: "Home" });
        })
        .catch(err => {
          this.error = err.message;
        });
    }
  }
};
</script>
