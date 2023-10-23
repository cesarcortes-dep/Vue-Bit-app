import Vue from "vue";
import Router from "vue-router";
import HomeView from "@/views/HomeView";
import AboutView from "@/views/AboutView"
import CoinDetail from "@/views/CoinDetail"

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name:"AboutView",
      component: AboutView
    },
    {
      path: "/coin/:id",
      name: "coin-detail",
      component: CoinDetail
    }
  ],
});
