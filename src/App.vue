<!-- 
  template lets you write html or render other components
  script has js ofc
  style has css
 -->

<template>
  <!-- Main Nav is outside of the router so it always renders -->
  <MainNav />
  <!-- routerView is made globally available by vue router, at expected, it monitors the url and serves components accordingly -->
  <!-- it also makes other objects available, such as 
  ? this.route to access the route
  ? this.router to use navigation-related methods
  -->
  <routerView />
</template>

<script>
import MainNav from "./components/MainNav.vue";
export default {
  name: "App",
  components: {
    MainNav,
  },
};
</script>
