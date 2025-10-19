import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import Section from "./pages/Section.vue";
import MaterialDetails from "./pages/MaterialDetails.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/section/:id", name: "Section", component: Section, props: true },
  {
    path: "/material/:id",
    name: "MaterialDetails",
    component: MaterialDetails,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
