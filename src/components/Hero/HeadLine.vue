<template>
  <section class="mb-16">
    <h1 class="mb-14 text-8xl font-bold tracking-tighter">
      <span :class="actionClasses">{{ action }} </span>
      <br />
      for everyone
    </h1>
    <h2 class="text-3xl font-lighter">Find your next job at Vue practice</h2>
  </section>
</template>

<script>
import { nextElementInList } from "@/utils/nextElementInList";

export default {
  name: "HeadLine",
  data() {
    return {
      action: "Build",
      interval: null,
    };
  },
  computed: {
    actionClasses() {
      return this.action.toLocaleLowerCase();
    },
  },

  created() {
    // A lifecycle chook, after comp is created but before it's mounted
    // this.interval = this.changeTitle();
    this.interval = nextElementInList(this.setState);
  },

  beforeUnmount() {
    //We clean the interval before unmounting the comp to avoid a mem leak
    clearInterval(this.interval);
  },
  methods: {
    setState(type) {
      this.action = type;
    },
  },
};
</script>

<style scoped>
.build {
  color: #1a73e8;
}
.create {
  color: #34a843;
}
.design {
  color: #f9ab00;
}
.code {
  color: #d93025;
}
</style>
