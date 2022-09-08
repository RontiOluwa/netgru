import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import store from "@/store";
import heroType from "@/types/Hero";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    beforeEnter: async (to, from, next) => {
      try {
        const response = await store?.getters?.API?.FETCH();
        const data: heroType[] = response["data"];
        if (data) {
          // eslint-disable-next-line
          const { params }: any = to;
          params.hero = data;
          next();
        } else {
          next({ name: "PathNotFound" });
        }
      } catch (e) {
        console.log(e);
      }
    },
  },
  {
    path: "/details/:id",
    name: "Details",
    component: () => import("../views/Details.vue"),
    beforeEnter: async (to, from, next) => {
      const data = await store?.getters?.API?.FETCH_DETAILS(to.params?.id);
      if (data) {
        const { params } = to;
        params.hero = data;
        console.log(data);
        next();
      } else {
        next({ name: "PathNotFound" });
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
