<template>
  <div>
    <h2>Dashboard</h2>
    <p>Name: {{ user.name }}</p>
  </div>
</template>

<script>
import axios from "axios";
import router from "@/router";

export default {
  name: "Login",
  data: () => ({
    user: {
      name: "Jesse"
    }
  }),
  mounted() {
    this.getUserData();
  },
  methods: {
    getUserData() {
      axios
        .get("/api/user")
        .then(response => {
          console.log(response);
          this.$set(this, "user", response.data.user);
        })
        .catch(errors => {
          console.log(errors);
          router.push("/");
        });
    }
  }
};
</script>
