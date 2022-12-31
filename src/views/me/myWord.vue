<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { getTranslation } from "@/services/dict.js";

const route = useRoute();
const word = ref("");
const meaning = ref({});


onMounted(async () => {
  word.value = route.params.id;
  const _meaning = await getTranslation(word.value);
  if (_meaning) {
    meaning.value = _meaning;
  }
});

</script>

<template>
  <h2>{{ word }}</h2>
  <div class="word-meaning" v-for="key in Object.keys(meaning)">
    <span class="col-3">{{ key }}: </span>
    <span class="col wrap">{{ meaning[key] }}</span>
  </div>
</template>

<style scoped>
.word-meaning {
  display: flex;
  text-align: left;
  padding-bottom: 0.7em;
}
.col-3 {
  width: 6em;
}
.col {
  flex: 1;
}

.wrap {
  white-space: pre-line;
}
</style>
