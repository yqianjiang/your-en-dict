<script setup>
import { ref, computed } from "vue";
import { NConfigProvider, NDrawer, NDrawerContent } from "naive-ui";
import { useOsTheme, darkTheme } from "naive-ui";
const prop = defineProps({
  btnText: {
    type: String,
    default: "显示",
  },
  title: {
    type: String,
  },
});
const osThemeRef = useOsTheme();
const theme = computed(() => (osThemeRef.value === "dark" ? darkTheme : null));
const show = ref(false);
</script>

<template>
  <button @click="show = true">{{ prop.btnText }}</button>
  <n-config-provider :theme="theme">
    <n-drawer v-model:show="show" placement="bottom" default-height="400" resizable>
      <n-drawer-content :title="prop.title" closable>
        <slot></slot>
      </n-drawer-content>
    </n-drawer>
  </n-config-provider>
</template>

<style scoped></style>
