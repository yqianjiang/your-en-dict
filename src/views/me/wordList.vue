<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import { UserDict } from "@/utils/dict/userDict";

const userDict = new UserDict();
const title = ref("");
const wordList = ref([]);

onMounted(() => {
  const urlHash = location.hash;
  if (/q=known/.test(urlHash)) {
    title.value = "熟词列表";
    wordList.value = userDict.knownWords;
  } else if (/q=unknown/.test(urlHash)) {
    title.value = "生词列表";
    wordList.value = userDict.unknownWords;
  }
});

onBeforeUnmount(() => {
  userDict.save();
});
</script>

<template>
  <h1>{{ title }}</h1>
  <p>共{{wordList.length}}词</p>
  <ul>
    <li v-for="word in wordList">{{ word }}</li>
  </ul>
</template>

<style scoped></style>
