import { createApp } from "vue";
import App from "@/App.vue"; //? If you check jsconfig.json
import "@/assets/tailwind.css";
//? you can see that @ references the src folder, so @ lets you acesss it no matter where you are

createApp(App).mount("#app");
