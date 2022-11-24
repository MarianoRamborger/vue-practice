<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1"
      >
        <a href="/" class="flex items-center h-full text-xl font-bold">
          {{ company }}
        </a>
        <h2 class="flex items-center h-full ml-8 font-bold">
          {{ `Developed by ${author.name} ${author.lastName}` }}
        </h2>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "MainNav", //name of component
  props: {
    company: {
      type: String,
      default: `Vue Careers`, //Default prop example
    },
  },
  data() {
    //In-component logic and vars
    //? the data name is not optional.

    return {
      author: {
        name: "Mariano",
        lastName: "Ram",
      },
    };
  },
};
</script>

<style></style>
