<template>
  <form
    class="flex h-12 w-full items-center rounded-3xl border border-solid border-brand-gray-3"
  >
    <FontAwesomeIcon :icon="['fas', 'search']" class="ml-4 mr-3" />

    <div class="flex flex-1 flex-nowrap h-full texdt-base font-light">
      <div class="flex h-full flex-1 relative items-center pr-3">
        <label class="absolute left-0 -top-10"> Role </label>
        <input
          type="text"
          placeholder="Software Engineer"
          class="w-full text-lg font-normal focus:outline-none"
          v-model="role"
        />
        <!-- //? v-model takes care of managing the input value and onChange, if you just give it the piece of state affected/represented by that input   -->
      </div>
      <span
        class="flex items-center h-full border-l border-r border-brand-gray-3 bg-brand-gray-2 px-3"
      >
        in
      </span>
      <div class="flex h-full flex-1 relative items-center pl-3">
        <label class="absolute left-0 -top-10"> Where? </label>
        <input
          type="text"
          placeholder="Vancouver"
          class="w-full text-lg font-normal focus:outline-none"
          :value="location"
          @input="location = $event.target.value"
        />
        <!-- @input="location = $event.target.value" is an inline form to capture an udpdate input. Still, v-model is prefered -->
      </div>
    </div>
    <ActionButton text="Search" type="secondary" class="rounded-r-3xl" />
  </form>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import ActionButton from "../Buttons/ActionButton.vue";

export default {
  name: "JobSearchForm",
  components: { ActionButton, FontAwesomeIcon },
  data() {
    return {
      role: "",
      location: "",
    };
  },
  methods: {
    updateRole(event) {
      this.role = event.target.value;
    },
  },
};
</script>
