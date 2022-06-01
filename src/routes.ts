import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    { path: "/", name: "Home", component: () => import('./views/HomeView.vue') },
    { path: "/bingo", name: "Bingo", component: () => import('./views/BingoView.vue') },
    { path: "/rate", name: "Rate a Scammer!", component: () => import('./views/RateView.vue') },
  ]

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const siteTitle = `${to.name?.toString()} | Scammerino`;
  document.title = siteTitle;
  next();
});

export default router;