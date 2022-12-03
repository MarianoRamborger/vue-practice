import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "@/Views/HomeView";
import JobResultsView from "@/Views/JobResultsView.vue";
import JobView from "@/Views/JobView.vue";

const routes = [
  {
    path: "/",
    name: "Home", //this serves an Id, which can be referenced
    component: HomeView,
  },
  {
    path: "/jobs/results",
    name: "JobResults",
    component: JobResultsView,
  },
  {
    // :X means X is a wildcard. Any url after the : will fall into this view
    path: "/jobs/results/:id",
    name: "JobListing",
    component: JobView,
  },
];

const Router = createRouter({
  history: createWebHashHistory(), //needed for the router to keep track of user history
  routes,
});

export default Router;
