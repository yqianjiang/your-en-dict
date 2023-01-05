import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* @vite-ignore */ "../views/home/home.vue"),
  },
  {
    path: "/archives",
    name: "Archives",
    component: () =>
      import(/* @vite-ignore */ "../views/reading/local.vue"),
  },
  {
    path: "/ielts",
    name: "Ielts",
    component: () =>
      import(/* @vite-ignore */ "../views/reading/ielts.vue"),
  },
  {
    path: "/reading",
    name: "Reading",
    component: () =>
      import(/* @vite-ignore */ "../views/reading/reading.vue"),
  },
  {
    path: "/my-reading",
    name: "MyReading",
    component: () =>
      import(/* @vite-ignore */ "../views/reading/myReading.vue"),
  },
  {
    path: "/reading/:id",
    name: "Article",
    component: () =>
      import(/* @vite-ignore */ "../views/reading/article.vue"),
  },
  {
    path: "/me",
    name: "Me",
    component: () =>
      import(/* @vite-ignore */ "../views/me/me.vue"),
  },
  {
    path: "/me/word-list",
    name: "WordList",
    component: () => import(/* @vite-ignore */ "../views/me/myWordList.vue"),
  },
  {
    path: "/me/:id",
    name: "Word",
    component: () => import(/* @vite-ignore */ "../views/me/myWord.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () =>
      import(/* @vite-ignore */ "../views/notFound.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
