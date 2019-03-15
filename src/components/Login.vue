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
import router from "@/router";
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
            console.log("Logged in", response);
            router.push("/dashboard");
          })
          .catch(err => {
            console.log("Cannot log in", err);
          });
      };
      login();
    }
  }
};
</script>
