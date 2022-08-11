<script setup>
import { ref } from "vue";
import { NDrawer, NDrawerContent } from "naive-ui";
const props = defineProps({
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
  <button @click="show = true">{{ props.btnText }}</button>
  <NDrawer
    v-model:show="show"
    placement="bottom"
    default-height="400"
    resizable
  >
    <NDrawerContent :title="props.title" closable>
      <template #header v-if="!props.title">
        <slot name="header"></slot>
      </template>
      <slot></slot>
    </NDrawerContent>
  </NDrawer>
</template>

<style scoped></style>
