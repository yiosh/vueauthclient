<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark color="#27293d">
            <v-toolbar-title>Login</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                v-model="email"
                prepend-icon="person"
                name="email"
                label="Email"
                type="text"
              ></v-text-field>
              <v-text-field
                id="password"
                v-model="password"
                prepend-icon="lock"
                name="password"
                label="Password"
                type="password"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn dark color="#344675" @click="login">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";
import router from "@/router";
export default {
  name: "Login",
  data: () => ({
    email: "user@email.com",
    password: "password"
  }),
  methods: {
    login() {
      let login = () => {
        let data = {
          email: this.email,
          password: this.password
        };
        console.log(data);

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
