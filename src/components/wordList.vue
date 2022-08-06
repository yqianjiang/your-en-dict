<script setup>
const props = defineProps({
  words: {
    type: Array,
  },
  wordDict: {
    type: Object,
    default: {},
  },
});
</script>

<template>
  <div class="word-box" v-for="word in props.words">
    <template v-if="props.wordDict[word]?.translation">
      <a>{{ word }}</a>
      <div class="word-translation">
        {{ props.wordDict[word]?.translation }}
      </div>
    </template>
    <a v-else>{{ word }}</a>
    <hr />
  </div>
</template>

<style scoped>
.word-translation {
  white-space: pre-line;
}
</style>