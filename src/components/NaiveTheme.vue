<script setup>
import { NConfigProvider, useOsTheme, darkTheme } from "naive-ui";
import { computed } from "vue";

const osThemeRef = useOsTheme();
const theme = computed(() => (osThemeRef.value === "dark" ? darkTheme : null));
</script>

<template>
  <NConfigProvider :theme="theme">
    <slot></slot>
  </NConfigProvider>
</template>
