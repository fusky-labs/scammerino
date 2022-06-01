import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";
import BingoView from "./views/BingoView.vue";
import RateView from "./views/RateView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: HomeView },
    { path: "/bingo", name: "Bingo", component: BingoView },
    { path: "/rate", name: "Rate a Scammer!", component: RateView },
  ],
});

export default router;