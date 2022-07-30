<script setup>
import { ref } from 'vue'
const msg = ref('article')
</script>

<template>
  <div>{{ msg }}{{ $route.params.id }}</div>
</template>

<style scoped>
</style>
