<script setup>
import NaiveTheme from "@/components/NaiveTheme.vue";
</script>

<template>
  <a href="#/reading">Reading</a> |
  <a href="#/my-reading">My Reading</a> |
  <a href="#/me">Me</a>
  <NaiveTheme>
    <router-view v-slot="{ Component, route }">
      <!-- <transition :name="route.meta.transition"> -->
        <!-- <KeepAlive exclude="article"> -->
          <component :is="Component" />
        <!-- </KeepAlive> -->
      <!-- </transition> -->
    </router-view>
  </NaiveTheme>
</template>

<style scoped>

</style>
