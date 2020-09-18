import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/events",
    name: "events",
    component: () => import("../views/Events.vue")
  },
  {
    path: "/forum",
    name: "forum",
    component: () => import("../views/Forum.vue")
  },
  {
    path: "/guides",
    name: "guides",
    component: () => import("../views/Guides.vue")
  },
  {
    path: "/game/:id",
    name: "game",
    component: () => import("../views/GamePage.vue")
  },
  {
    path: "/create-game",
    name: "create-game",
    component: () => import("../views/CreateGamePage.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
