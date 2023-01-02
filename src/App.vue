<script setup>
import NaiveTheme from "@/components/NaiveTheme.vue";
import { NMenu, NMessageProvider } from "naive-ui";
import { ref, h } from "vue";
import { RouterLink } from "vue-router";

const getMenu = (name, label) => ({
  label: () =>
    h(
      RouterLink,
      {
        to: {
          name,
        },
      },
      { default: () => label }
    ),
  key: name.toLowerCase(),
});

const activeKey = ref(null);
const menuOptions = [
  getMenu("Home", "新增文章"),
  {
    label: "文章列表",
    key: "reading-list",
    children: [
      getMenu("Archives", "本地文章"),
      getMenu("Ielts", "雅思文章"),
      getMenu("MyReading", "正在读的文章"),
    ],
  },
  getMenu("Me", "Me"),
];
</script>

<template>
  <NaiveTheme>
    <NMessageProvider>
      <NMenu
        v-model:value="activeKey"
        mode="horizontal"
        :options="menuOptions"
      />
      <router-view v-slot="{ Component, route }">
        <!-- <transition :name="route.meta.transition"> -->
        <!-- <KeepAlive exclude="article"> -->
        <component :is="Component" />
        <!-- </KeepAlive> -->
        <!-- </transition> -->
      </router-view>
    </NMessageProvider>
  </NaiveTheme>
</template>

<style scoped></style>
