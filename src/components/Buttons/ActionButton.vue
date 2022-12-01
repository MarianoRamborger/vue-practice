<template>
  <button :class="variant">
    <!-- @:click is equivalent to v-on:click= -->
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "ActionButton", // remember this help us identify the component in the debug tools
  props: {
    text: {
      type: String,
      required: true,
    },
    variant: {
      type: String,
      default: "secondary",
      validator(value) {
        //? prop validation, must be called validator
        return ["primary", "secondary"].includes(value);
        //If the prop is valid ie primary or secondary, is true, else its false and an error
      },
    },
    //! Computed data, works kinda like data property, but is used when you have data that is dependant on other pieces of data.
    //? Pieces of data that changes based on other types of data. Kinda like useEffect, vue keeps track of whatever variables used to calculate any computed variable and update it automatically
    // computed: {},
  },
};
</script>

<style scoped>
button {
  /* @apply allows you to write inline tailwind classes in css*/
  @apply px-5 py-3 font-medium;
}

.primary {
  @apply text-white rounded bg-brand-blue-1 hover:shadow-blue;
}

.secondary {
  @apply text-brand-blue-1 bg-transparent hover:bg-brand-blue-2 hover:text-white;
}
</style>
