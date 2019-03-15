import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Firestore from "./views/Firestore.vue";

// Vue.config.debug = true;
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "default",
      component: Firestore
    },
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/firestore",
      name: "firestore",
      component: Firestore
    }
  ]
});
