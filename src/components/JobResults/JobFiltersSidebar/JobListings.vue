<template>
  <main class="flex-auto bg-brand-gray-2 p-8">
    <ol>
      <JobListing
        v-for="(job, index) in jobs"
        :key="job.id + index"
        :job="job"
      />
    </ol>
  </main>
</template>

<script>
import JobListing from "./JobListing.vue";
import axios from "axios";

export default {
  name: "JobListings",
  components: {
    JobListing,
  },
  data() {
    return {
      jobs: [],
    };
  },
  async mounted() {
    const res = await axios.get("http:///localhost:3000/jobs");
    this.jobs = res.data;
  },
};
</script>
