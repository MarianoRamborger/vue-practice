<template>
  <div class="w-full h-16 border-b border-solid border-brand-gray-1 bg-white">
    <div class="flex items-center h-full px-8">
      <div v-if="onJobsResultsPage">
        <!-- the following tag is made globally available in main.js -->
        <font-awesome-icon :icon="['fas', 'search']" class="mr-3" />
        <span> <span class="text-brand-green-1">1955</span> jobs match</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SubNav",
  data() {
    return {
      onJobsResultsPage: true,
    };
  },
};
</script>
