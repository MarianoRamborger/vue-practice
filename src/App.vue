<!-- 
  template lets you write html or render other components
  script has js ofc
  style has css
 -->

<template>
  <MainNav company="Vue Careers" />
  <HeroComp />
</template>

<script>
import MainNav from "@/components/MainNav.vue";
import HeroComp from "./components/Hero/Hero.vue";

export default {
  name: "App",
  components: {
    MainNav,
    HeroComp,
  },
};
</script>
