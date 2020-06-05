import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/pages/Home";
import Login from "@/components/pages/Login";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  }
];

const router = new VueRouter({
  base: "/",
  mode: "history",
  routes
});

export default router;
