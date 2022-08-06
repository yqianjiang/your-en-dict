<script setup>
import { onBeforeUnmount, onMounted, reactive, ref } from "vue";
import { userDict } from "@/utils/dict/userDict.js";
import { getTranslationBatch } from "@/services/dict.js";

const data = reactive({
  title: "",
  wordList: [],
  wordDict: {},
  showTranslations: true,
  allowRemove: false,
});
const type = ref("unknown");

const loadWordDict = async () => {
  const trans = await getTranslationBatch({
    words: data.wordList,
    onlyTranslation: true,
  });
  Object.assign(data.wordDict, trans);
  console.log(data.wordDict);
};

onMounted(() => {
  const urlHash = location.hash;
  if (/q=known/.test(urlHash)) {
    type.value = "known";
    data.title = "熟词列表";
    data.wordList = userDict.knownWords;
  } else if (/q=unknown/.test(urlHash)) {
    type.value = "unknown";
    data.title = "生词列表";
    data.wordList = userDict.unknownWords;
  }
  loadWordDict();
});

onBeforeUnmount(() => {
  userDict.save();
});
</script>

<template>
  <h1>{{ data.title }}</h1>
  <p>共{{ data.wordList.length }}词</p>
  <div class="sticky-top">
    <button @click="data.showTranslations = !data.showTranslations">
      {{ data.showTranslations ? "隐藏" : "显示" }}释义
    </button>
    <!-- <button @click="data.allowRemove = !data.allowRemove">
      {{ data.allowRemove ? "取消" : "" }}编辑
    </button> -->
  </div>
  <div>
    <div class="word-box" v-for="word in data.wordList">
      <template v-if="data.wordDict[word]?.translation">
        <a :href="'#/me/' + word">{{ word }}</a>
        <div class="word-translation" v-if="data.showTranslations">
          {{ data.wordDict[word]?.translation }}
        </div>
      </template>
      <a v-else>{{ word }}</a>
      <!-- <button class="button-right" v-if="data.allowRemove">
        移到{{ type === "known" ? "生词" : "熟词" }}
      </button> -->
      <hr />
    </div>
  </div>
</template>

<style scoped>
.word-box {
  position: relative;
}
.button-right {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
.word-translation {
  white-space: pre-line;
}
</style>
