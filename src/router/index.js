import { createRouter, createWebHistory } from "vue-router";
import Overview from "../views/Overview.vue";
import Users from "../views/Users.vue";
import Reports from "../views/Reports.vue";
import Settings from "../views/Settings.vue";

const routes = [
  { path: "/", name: "Overview", component: Overview },
  { path: "/users", name: "Users", component: Users },
  { path: "/reports", name: "Reports", component: Reports },
  { path: "/settings", name: "Settings", component: Settings },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
