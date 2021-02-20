import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/signin",
    name: "SignIn",
    component: () => import("../views/SignIn")
  },
  {
    path: "/home",
    name: "Home",
    // route level code-splitting
    // this generates a separate chunk (home.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
