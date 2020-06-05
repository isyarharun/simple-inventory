<template>
  <!-- template is coming from w3schools how to create a register form -->
  <div>
    <div class="container">
      <h1>Register</h1>
      <p>Please fill in this form to create an account.</p>
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

      <label for="psw-repeat"><b>Repeat Password</b></label>
      <input
        type="password"
        placeholder="Repeat Password"
        v-model="form.passwordRepeat"
        required
      />
      <hr />
      <span class="red">{{ error }}</span>
      <button type="submit" @click="register" class="registerbtn">
        Register
      </button>
    </div>
    <div class="container signin">
      <p>Already have an account? <span>Sign in</span>.</p>
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
        password: "",
        passwordRepeat: ""
      },
      error: null
    };
  },
  methods: {
    register() {
      // todo validate the email
      console.log(this.form.email, this.form.password);
      if (this.form.password === this.form.passwordRepeat) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.form.email, this.form.password)
          .then(data => {
            console.log(data);
            this.$router.replace({ name: "Home" });
          })
          .catch(err => {
            this.error = err.message;
          });
      } else {
        this.error = "password not match";
      }
    }
  }
};
</script>
