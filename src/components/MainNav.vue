<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1"
      >
        <!-- v-bind can bind to any valid html attribute   : is the shortened form of v-bind: -->
        <a :href="url" class="flex items-center h-full text-xl font-bold">
          {{ company }}
        </a>
        <nav class="h-full ml-12">
          <ul class="flex h-full p-0 m-0 list-none">
            <!-- prettier-ignore  a first:ml-0 would have sufficed since we added a variant to the tailwind.config that enables you to apply a different style to the first element. I wanted to play with conditional ternaries tho -->
            <li
              v-for="(menuItem, index) in menuItems"
              :key="index"
              :class="`${index === 0 ? 'h-full ml-0' : 'h-full ml-9 '} `"
              data-test="main-nav-item"
            >
              <a :href="index" class="flex items-center h-full py-2.5">
                {{ menuItem }}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
//prettier-ignore
export default {
  name: "MainNav", //name of component
  props: {
    company: {
      type: String,
      default: `Vue Careers`, //Default prop example
    },
  },
  data() {
    //? In-component logic and vars
    //? the data name is not optional.
    return {
      url: "https://careers.google.com/",
      menuItems: [
        'Teams','Locations', 'Life at Vue Practice','How we hire','Students', 'Jobs'
      ]
    };
  },
};
</script>

<style></style>
