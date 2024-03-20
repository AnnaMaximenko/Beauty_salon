import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage";
import MasterPage from "@/pages/MasterPage";
import PricePage from "@/pages/PricePage";
import ErrorPage from "@/pages/ErrorPage";
import ContactPage from "@/pages/ContactPage";
import WorksPage from "@/pages/WorksPage";
import CosmeticPage from "@/pages/CosmeticPage";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/masters",
    name: "master",
    component: MasterPage,
  },
  {
    path: "/price",
    name: "price",
    component: PricePage,
  },
  {
    path: "/contacts",
    name: "contact",
    component: ContactPage,
  },
  {
    path: "/works",
    name: "works",
    component: WorksPage,
  },
  {
    path: "/cosmetic",
    name: "cosmetic",
    component: CosmeticPage,
  },
  {
    path: "/:CatchAll(.*)",
    name: "Error",
    component: ErrorPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
