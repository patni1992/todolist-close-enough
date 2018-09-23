import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Auth from "./views/Auth.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/auth",
      name: "auth",
      component: Auth
    }
  ]
});

router.beforeEach((to, from, next) => {
  const publicPages = ["/auth"];
  const authRequired = !publicPages.includes(to.path);
  const jwtToken = localStorage.getItem("jwt-token");

  if (authRequired && !jwtToken) {
    return next("/auth");
  }

  next();
});

export default router;
