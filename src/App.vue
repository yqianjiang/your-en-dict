<script setup>

</script>

<template>
  <a href="#/reading">Reading</a> |
  <a href="#/me">Me</a>
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transition">
      <KeepAlive include="Reading">
        <component :is="Component" />
      </KeepAlive>
    </transition>
  </router-view>
</template>

<style scoped>

</style>
