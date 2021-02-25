import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/friends",
    name: "Friends",
    // route level code-splitting
    // this generates a separate chunk (home.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ "../views/Friends.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
