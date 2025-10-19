import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import Section from "./pages/Section.vue";
import MaterialDetails from "./pages/MaterialDetails.vue";
import SearchResults from "./pages/SearchResults.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/section/:id", name: "Section", component: Section, props: true },
  {
    path: "/material/:id",
    name: "MaterialDetails",
    component: MaterialDetails,
    props: true,
  },
  { path: "/search", name: "Search", component: SearchResults },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
