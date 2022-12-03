<template>
  <div class="flex w-full flex-row flex-nowrap">
    <JobFiltersSidebar />
    <JobListings />
  </div>
</template>

<script>
import JobFiltersSidebar from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebar.vue";
import JobListings from "@/components/JobResults/JobFiltersSidebar/JobListings.vue";

export default {
  name: "JobResultsView",
  components: {
    JobFiltersSidebar,
    JobListings,
  },
};
</script>
