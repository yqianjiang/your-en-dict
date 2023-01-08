<script setup>
import {
  NConfigProvider,
  useOsTheme,
  darkTheme,
  NMessageProvider,
  NLayout,
  NLayoutSider,
  NLayoutHeader,
  NLayoutContent,
  NMenu,
  NButton,
  NPopover,
  NSpace,
} from "naive-ui";
import { ref, h } from "vue";
import { RouterLink } from "vue-router";

const osThemeRef = useOsTheme();
const theme = ref(osThemeRef.value === "dark" ? darkTheme : null);
const toggleTheme = () => {
  theme.value = theme.value ? null : darkTheme;
};

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
const mobileMenuOptions = [
  ...menuOptions,
  {
    key: "divider-1",
    type: "divider",
    props: {
      style: {
        marginLeft: "32px",
      },
    },
  },
  {
    label: () =>
      h(
        "p",
        {
          onClick: toggleTheme,
        },
        theme.value ? "浅色" : "深色"
      ),
    key: "darkMode",
  },
  {
    label: () =>
      h(
        "a",
        {
          href: "https://github.com/yqianjiang/your-en-dict/",
          target: "_blank",
        },
        "Github"
      ),
    key: "github",
  },
];

const showPopover = ref(false);
</script>

<template>
  <NConfigProvider abstract :theme="theme">
    <NMessageProvider>
      <NLayout position="absolute">
        <NLayoutHeader bordered class="header">
          <NSpace align="center" justify="space-between">
            <div class="nav-bar--mobile">
              <NPopover trigger="click">
                <template #trigger>
                  <NButton @click="showPopover = !showPopover"> 菜单 </NButton>
                </template>
                <NMenu v-model:value="activeKey" :options="mobileMenuOptions" />
              </NPopover>
            </div>
            <div>你的定制英语词典</div>
          </NSpace>
          <div class="mobile-hide">
            <NSpace>
              <NButton quaternary @click="toggleTheme">{{
                theme ? "浅色" : "深色"
              }}</NButton>
              <a href="https://github.com/yqianjiang/your-en-dict/"
                ><NButton quaternary>Github</NButton></a
              >
            </NSpace>
          </div>
        </NLayoutHeader>
        <NLayout
          has-sider
          position="absolute"
          style="top: var(--header-height)"
        >
          <NLayoutSider
            collapse-mode="transform"
            show-trigger="arrow-circle"
            :collapsed-width="0"
            bordered
          >
            <NMenu v-model:value="activeKey" :options="menuOptions" />
          </NLayoutSider>
          <NLayoutContent class="main-content-container">
            <main>
              <router-view v-slot="{ Component, route }">
                <component :is="Component" />
              </router-view>
            </main>
          </NLayoutContent>
        </NLayout>
      </NLayout>
    </NMessageProvider>
  </NConfigProvider>
</template>

<style scoped></style>
