<template>
  <!-- <div id="app">
    <img src="./assets/logo.png" />
    <router-view />
  </div> -->
  <v-app id="inspire">
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#inspire {
  /* font-family: "Avenir", Helvetica, Arial, sans-serif; */
  font-family: Poppins, sans-serif;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  /* text-align: center; */
  /* color: #2c3e50;
  margin-top: 60px; */
}
</style>
