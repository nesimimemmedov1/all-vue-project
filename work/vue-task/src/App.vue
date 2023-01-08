<template>
  <div id="app">
    <!-- <app-header></app-header> -->
    <!-- <app-banner></app-banner> -->
    <router-view></router-view>
    <!-- <app-login-as></app-login-as> -->
  </div>
</template>

<script>
// import Banner from "./components/Banner";
// import Header from "./components/Header";
// import LoginAs from "./components/LoginAs";
export default {
  data() {
    return {};
  },
  components: {
    // appBanner: Banner,
    // appHeader: Header,
    // appLoginAs: LoginAs
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600&display=swap");
body {
  padding: 0;
  margin: 0;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  color: white;
  height: 100vh;
  background-color: tomato;
}

#app{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

// media-queries
@media (min-width: 1200px) {
  .container {
    max-width: 1300px !important;
  }
}
</style>
