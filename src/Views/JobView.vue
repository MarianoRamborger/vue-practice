<template>
  <div>Job Page {{ currentJobId }}</div>
</template>

<script>
export default {
  name: "JobView",
  computed: {
    currentJobId() {
      // When registering this view, the wild card was called :id. Since anything past the : is captured by the wildcard, the whole purpose of the id name is to be able to capture any params on the willcard, which we do in the following line
      return this.$route.params.id;
    },
  },
};
</script>
