<script setup>
import NaiveTheme from "@/components/NaiveTheme.vue";
import { NMessageProvider } from "naive-ui";
</script>

<template>
  <a href="#/">Home</a> |
  <a href="#/reading">Reading</a> |
  <a href="#/my-reading">My Reading</a> |
  <a href="#/me">Me</a>
  <NaiveTheme>
    <NMessageProvider>
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

<style scoped>

</style>
