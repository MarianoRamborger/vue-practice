<!-- 
  template lets you write html or render other components
  script has js ofc
  style has css
 -->

<template>
  <MainNav company="Vue Careers!" />
</template>

<script>
import MainNav from "@/components/MainNav.vue";

export default {
  name: "App",
  components: {
    MainNav,
  },
};
</script>
