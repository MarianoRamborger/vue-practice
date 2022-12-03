import { createApp } from "vue";
import Router from "@/Router";
import App from "@/App.vue"; //? If you check jsconfig.json
import "@/assets/tailwind.css";
//? you can see that @ references the src folder, so @ lets you acesss it no matter where you are

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

//? We feed icons we are gonna use to the library,
library.add(faSearch);

//?Each method returs the whole app, so you can inject middleware as needed
createApp(App)
  .use(Router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
//? And like this, we make components, in this case the font awesome icon, globally available
