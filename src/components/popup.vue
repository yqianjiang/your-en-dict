<script setup>
import { ref } from "vue";
import { NDrawer, NDrawerContent } from "naive-ui";
const prop = defineProps({
  btnText: {
    type: String,
    default: "显示",
  },
  title: {
    type: String,
  },
});
const show = ref(false);
</script>

<template>
  <button @click="show = true">{{ prop.btnText }}</button>
  <n-drawer
    v-model:show="show"
    placement="bottom"
    default-height="400"
    resizable
  >
    <n-drawer-content :title="prop.title" closable>
      <slot></slot>
    </n-drawer-content>
  </n-drawer>
</template>

<style scoped></style>
