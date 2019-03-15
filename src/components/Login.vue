<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <input type="text" name="email" />
      <br />
      <input type="password" name="password" />
      <br />
      <input type="submit" value="Login" />
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  methods: {
    login: () => {
      let email = "user@email.com";
      let password = "password";
      let login = () => {
        let data = {
          email: email,
          password: password
        };
        axios
          .post("/api/login", data)
          .then(response => {
            console.log("Logged in");
            this.$router.push("/dashboard");
          })
          .catch(errors => {
            console.log("Cannot log in");
          });
      };
      login();
    }
  }
};
</script>
