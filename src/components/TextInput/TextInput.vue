<template>
  <input
    type="text"
    :value="modelValue"
    class="w-full text-lg font-normal focus:outline-none"
    @input="handleInput"
  />
</template>

<!-- <template>
  <input
    type="text"
    :value="modelValue"
    class="w-full text-lg font-normal focus:outline-none"
    @input="handleInput"
  />
</template> -->

<script>
export default {
  name: "TextInput",
  // emits: ["handleinput"],
  props: {
    modelValue: {
      type: String,
      required: true,
      default: "",
    },
  },
  emits: ["update:modelValue"],

  data() {},
  methods: {
    handleInput(e) {
      //   this.$emit("update:handleInput", e.target.value);
      //   //? $emit is a special Vue method
      //   //? Unlike in React, $emit lets a children to rely events to its parents.
      // },
      this.$emit("update:modelValue", e.target.value);
      //? this specific name, update:modelValue, allows the event to properly trigger and work
      //? with v-model
    },
  },
};
</script>
