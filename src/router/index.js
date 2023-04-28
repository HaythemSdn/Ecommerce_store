import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AdminView from "../views/AdminView.vue";
import OverView from "../views/AdminViews/OverView.vue";
import Products from "../views/AdminViews/Products.vue";
import Orders from "../views/AdminViews/Orders.vue";
import Profile from "../views/AdminViews/ProfileView.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/Admin",
    name: "Admin",
    component: AdminView,
    children: [
      {
        path: "OverView",
        name: "Overview",
        component: OverView,
      },
      {
        path: "Products",
        name: "Products",
        component: Products,
      },
      {
        path: "Orders",
        name: "Orders",
        component: Orders,
      },
      {
      path: "Profile",
      name: "Profile",
      component: Profile,
    },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
