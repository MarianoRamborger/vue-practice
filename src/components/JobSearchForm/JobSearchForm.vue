<template>
  <form
    class="flex h-12 w-full items-center rounded-3xl border border-solid border-brand-gray-3"
    @submit.prevent="searchForJobs"
  >
    <!-- We want to prevent the default subit value, we use an event modifier, event.prevent in this case -->
    <FontAwesomeIcon :icon="['fas', 'search']" class="ml-4 mr-3" />

    <div class="flex flex-1 flex-nowrap h-full texdt-base font-light">
      <div class="flex h-full flex-1 relative items-center pr-3">
        <label for="role" class="absolute left-0 -top-10"> Role </label>
        <!-- //? v-model takes care of managing the input value and onChange, if you just give it the piece of state affected/represented by that input   -->
        <!-- <input
          v-model="role"
          type="text"     
          class="w-full text-lg font-normal focus:outline-none"
        /> -->
        <!-- ! a kinda imperative version
          <TextInput 
          placeholder="Software Engineer"
          @handleinput="updateRole"
          :value="role"
        /> -->
        <!-- A more declarative versio which relies on v-model, but depends on the child to specifically emit the update:modelValue event -->
        <TextInput id="role" v-model="role" placeholder="Software Engineer" />
        <!-- //? v-on:handleInput references the event emitted by the child, which
        ? via $emit, allows children to pass events and data to their parents, making 2-way communication possible -->
      </div>
      <span
        class="flex items-center h-full border-l border-r border-brand-gray-3 bg-brand-gray-2 px-3"
      >
        in
      </span>
      <div class="flex h-full flex-1 relative items-center pl-3">
        <label for="location" class="absolute left-0 -top-10"> Where? </label>
        <TextInput id="location" v-model="location" placeholder="Vancouver" />
        <!-- ? State can be chaged in an inline fashion considering that the payload of the event is accessible when the event is fired. $event is always the default name of the payload -->
      </div>
    </div>
    <ActionButton text="Search" type="secondary" class="rounded-r-3xl" />
  </form>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import ActionButton from "../Buttons/ActionButton.vue";
import TextInput from "@/components/TextInput/TextInput.vue";

export default {
  name: "JobSearchForm",
  components: { ActionButton, FontAwesomeIcon, TextInput },
  data() {
    return {
      role: "",
      location: "",
    };
  },
  methods: {
    // updateRole(x) {
    //   this.role = x;
    // },
    // updateLocation(event) {
    //   this.location = event;
    // },
    searchForJobs() {
      this.$router.push({
        name: "JobResults",
        query: {
          role: this.role,
          location: this.location,
        },
      });
    },
  },
};
</script>
