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
    meta: {
      order: 1,
      transition: "fade",
    },
  },
  {
    path: "/my-reading",
    name: "MyReading",
    component: () =>
      import(/* @vite-ignore */ "../views/reading/myReading.vue"),
    meta: {
      order: 1,
      transition: "fade",
    },
  },
  {
    path: "/reading/:id",
    name: "Article",
    component: () =>
      import(/* @vite-ignore */ "../views/reading/article.vue"),
    meta: {
      order: 11,
      transition: "slide-left",
    },
  },
  {
    path: "/me",
    name: "Me",
    component: () =>
      import(/* @vite-ignore */ "../views/me/me.vue"),
    meta: {
      order: 2,
      transition: "fade",
    },
  },
  {
    path: "/me/word-list",
    name: "WordList",
    component: () => import(/* @vite-ignore */ "../views/me/myWordList.vue"),
    meta: {
      order: 1,
      transition: "slide-left",
    },
  },
  {
    path: "/me/:id",
    name: "Word",
    component: () => import(/* @vite-ignore */ "../views/me/myWord.vue"),
    meta: {
      order: 1,
      transition: "slide-left",
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () =>
      import(/* @vite-ignore */ "../views/notFound.vue"),
    meta: {
      order: 111,
      transition: "fade",
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// 控制路由切换的动画
// router.afterEach((to, from) => {
//   if (!from.meta.order) return
//   const transitionName =
//     from.meta.order < to.meta.order ? 'van-slide-left-left' : 'van-slide-left-right'
//   from.meta.transition = transitionName
//   to.meta.transition = transitionName
// })

export default router;
