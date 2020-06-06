import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/pages/Home";
import Login from "@/components/pages/Login";
// import firebase from "firebase";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
    // meta: {
    //   requiresAuth: true
    // }
  },
  {
    path: "/home",
    name: "Home",
    component: Home
    // meta: {
    //   requiresAuth: true
    // }
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

// router.beforeEach((to, from, next) => {
//   let currentUser = firebase.auth().currentUser;
//   let requiresAuth = to.matched.some(record => record.meta.requiresAuth);

//   if (requiresAuth && !currentUser) next("login");
//   else if (!requiresAuth && currentUser) next("home");
//   else next();
// });

export default router;
