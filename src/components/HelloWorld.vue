<script setup lang="ts">
import { computed, ref } from "vue";
const props = defineProps({
  count: { type: Number, required: true },
});
const times = ref(2);
const result = computed(() => props.count * times.value);
defineExpose(props);
</script>

<template>
  <div>{{ count }} x {{ times }} = {{ result }}</div>
  <button @click="times += 1">x1</button>
</template>

<style scoped></style>
