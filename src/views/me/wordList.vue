<script setup>
import {
  onBeforeUnmount,
  onMounted,
  reactive,
  ref,
  watch,
  computed,
} from "vue";
import { userDict } from "@/utils/dict/userDict.js";
import { getTranslationBatch } from "@/services/dict.js";
import WordList from "@/components/wordList.vue";
import { NSelect } from "naive-ui";

const data = reactive({
  title: "",
  wordList: [],
  sortedWordList: [],
  wordDict: {},
  showTranslations: true,
  allowRemove: false,
});
const type = ref("unknown");
const displayWords = computed(() => {
  return data.sortedWordList.length ? data.sortedWordList : data.wordList;
});

const selectedOrder = ref("createdAtAscending");
const orderOptions = [
  {
    label: "加入时间顺序",
    value: "createdAtAscending",
  },
  {
    label: "加入时间倒序",
    value: "createdAtDescending",
  },
  {
    label: "词频从高到低",
    value: "frqAscending",
  },
  {
    label: "词频从低到高",
    value: "frqDescending",
  },
];

const loadWordDict = async () => {
  const trans = await getTranslationBatch({
    words: data.wordList,
    onlyTranslation: false,
  });
  Object.assign(data.wordDict, trans);
  console.log(data.wordDict);
};

function onRemove(word) {
  if (type.value === 'unknown') {
    userDict.addKnownWords([word]);
  } else {
    userDict.addUnknownWords([word]);
  }
}

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

watch(selectedOrder, () => {
  const sortedWords = [];
  const res = [];
  if (selectedOrder.value === "frqAscending" || selectedOrder.value === "frqDescending") {
    for (const word of data.wordList) {
      const frq = data.wordDict[word]?.frq;
      if (frq) {
        sortedWords.push([frq, word]);
      } else {
        res.push(word);
      }
    }
    if (selectedOrder.value === "frqDescending") {
      sortedWords.sort((a, b) => {
        return b[0] - a[0];
      });
    } else {
      sortedWords.sort((a, b) => {
        return a[0] - b[0];
      });
    }
    data.sortedWordList = [...sortedWords.map((x) => x[1]), ...res];
  } else if (selectedOrder.value === "createdAtAscending") {
    data.sortedWordList = [...data.wordList];
  } else if (selectedOrder.value === "createdAtDescending") {
    data.sortedWordList = [];
    for (const word of data.wordList) {
      data.sortedWordList.unshift(word);
    }
  }
});
</script>

<template>
  <h1>{{ data.title }}</h1>
  <p>共{{ data.wordList.length }}词</p>
  <n-select
    v-model:value="selectedOrder"
    :options="orderOptions"
    placeholder="排序方式"
  />
  <div class="sticky-top">
    <button @click="data.showTranslations = !data.showTranslations">
      {{ data.showTranslations ? "隐藏" : "显示" }}释义
    </button>
    <button @click="data.allowRemove = !data.allowRemove">
      {{ data.allowRemove ? "取消" : "" }}编辑
    </button>
  </div>
  <div class="word-list">
    <WordList :showTranslations="data.showTranslations" :words="displayWords" :wordDict="data.wordDict" :allowRemove="data.allowRemove" @remove="onRemove" />
  </div>
</template>

<style scoped>
.word-list {
  text-align: left;
}
</style>
