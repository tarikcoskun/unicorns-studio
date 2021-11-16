import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import Slots from "@/pages/index.vue";
import Editor from "@/pages/slots/[slot].vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: Slots,
  },
  {
    path: "/slots/:slot",
    name: "Slot",
    component: Editor,
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
];

const router = createRouter({ history: createWebHistory(), routes });
export default router;
