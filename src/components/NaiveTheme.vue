<script setup>
import { NConfigProvider, useOsTheme, darkTheme } from "naive-ui";
import { computed } from "vue";

const osThemeRef = useOsTheme();
const theme = computed(() => (osThemeRef.value === "dark" ? darkTheme : null));
</script>

<template>
  <n-config-provider :theme="theme">
    <slot></slot>
  </n-config-provider>
</template>
