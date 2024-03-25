// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/DashboardLayout/index.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("@/views/HistoryDay.vue"),
      },
      {
        path: "/history",
        name: "History",
        component: () => import("@/views/History.vue"),
      },
      {
        path: "/history/:date",
        name: "HistoryDay",
        component: () => import("@/views/HistoryDay.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
