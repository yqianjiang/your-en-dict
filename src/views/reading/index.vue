<script setup>
import { ref } from 'vue'
const msg = ref('reading')
</script>

<template>
  <div>{{ msg }}</div>
  <a href="#/reading/123">article</a>
</template>

<style scoped>
</style>
