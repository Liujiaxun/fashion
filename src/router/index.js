import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", redirect: "/home" },
  {
    path: "/home",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Home/home.vue")
  },
  {
    path: "/tweet",
    name: "Tweet",
    redirect: "/tweet/recommend",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Tweet/tweet.vue"),
    children: [
      {
        path: "/tweet/recommend",
        name: "TweetRecommend",
        component: () => import("../views/Tweet/recommend")
      },
      {
        path: "/tweet/attention",
        name: "TweetAttention",
        component: () => import("../views/Tweet/attention")
      }
    ]
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
