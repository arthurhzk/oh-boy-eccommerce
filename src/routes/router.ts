import { createRouter, createWebHistory } from "vue-router";
import { RouteNameEnum, RoutePathEnum } from "@/domain/enums/routeEnums";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: RoutePathEnum.HOME,
      name: RouteNameEnum.HOME,
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: RoutePathEnum.ABOUT,
      name: RouteNameEnum.ABOUT,
      component: () => import("@/views/AboutView.vue"),
      meta: {
        title: "Sobre a Oh, Boy!",
      },
    },
    {
      path: RoutePathEnum.CONTACT,
      name: RouteNameEnum.CONTACT,
      component: () => import("@/views/ContactView.vue"),
      meta: {
        title: "Contato Oh, Boy!",
      },
    },
    {
      path: RoutePathEnum.PRODUCTID,
      name: RouteNameEnum.PRODUCTID,
      component: () => import("@/views/SingleProductView.vue"),
      meta: {
        title: "Camiseta",
      },
    },
    {
      path: RoutePathEnum.LOGIN,
      name: RouteNameEnum.LOGIN,
      component: () => import("@/views/LoginView.vue"),
      meta: {
        title: "Faça login para continuar",
      },
    },
    {
      path: RoutePathEnum.REGISTER,
      name: RouteNameEnum.REGISTER,
      component: () => import("@/views/RegisterView.vue"),
      meta: {
        title: "Registre-se agora mesmo",
      },
    },
    {
      path: RoutePathEnum.CATEGORIES,
      name: RouteNameEnum.CATEGORIES,
      component: () => import("@/views/CategoriesView.vue"),
      meta: {
        title: "Categorias",
      },
    },
    {
      path: RoutePathEnum.NOT_FOUND,
      name: RouteNameEnum.NOT_FOUND,
      component: () => import("@/views/NotFoundView.vue"),
    },
  ],
});
router.beforeEach((to, _from, next) => {
  document.title = (to.meta?.title || "Oh Boy | Since 2024").toString();
  next();
});

export default router;
