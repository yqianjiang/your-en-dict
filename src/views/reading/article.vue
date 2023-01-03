<script setup>
import { onBeforeUnmount, onMounted, reactive, ref } from "vue";
import { useRoute } from "vue-router";

import ReadingView from "@/components/ReadingView.vue";
import WordListPopup from "@/components/WordListPopup.vue";

import { articlesHelper } from "@/utils/articles/articles.js";
import { compare } from "@/utils/articles/counter.js";
import { userDict } from "@/utils/dict/userDict.js";
import { getTranslation, getTranslationBatch } from "@/services/dict.js";

const route = useRoute();
const article = ref({});
const data = reactive({
  knownWord: [],
  unseenWord: [],
  unknownWord: [],
  translations: {},
});

const toggleTrans = (token) => {
  if (token in data.translations) {
    delete data.translations[token];
  } else {
    _findWordTrans(token);
  }
};

const _findWordTrans = async (words) => {
  if (typeof words === "string") {
    const trans = await getTranslation(words);
    data.translations[words] = trans;
    console.log(trans);
  } else {
    const trans = await getTranslationBatch({ words });
    Object.assign(data.translations, trans);
    console.log(trans);
  }
};

const onUpdateUserDict = () => {
  userDict.addKnownWords([...data.knownWord, ...data.unseenWord]);
  userDict.addUnknownWords(data.unknownWord);
  userDict.save();
  articlesHelper.markArticle("hasMarked", article.value);
  data.unseenWord = [];
  console.log(data);
  console.log(userDict.unknownWords);
  console.log(userDict.knownWords);
};

// bug: 移动后不影响高亮？
function onRemove(type, word) {
  if (type === "unknown") {
    data.knownWord.push(word);
    data.unknownWord = data.unknownWord.filter((x) => x !== word);
    // 熟词不用显示翻译了
    delete data.translations[word];
  } else if (type === "known") {
    data.unknownWord.push(word);
    data.knownWord = data.knownWord.filter((x) => x !== word);
    // 生词需要增加翻译
    _findWordTrans(word);
  } else {
    // unseen, 暂时移到生词...
    data.unknownWord.push(word);
    data.unseenWord = data.unseenWord.filter((x) => x !== word);
  }
}

onMounted(async () => {
  const uuid = route.params.id;
  const result = await articlesHelper.getArticle(uuid);
  article.value = result;
  document.title = result.title + " - 你的定制英语词典";
  const { known, unknown, unseen } = compare(
    article.value.wordsUnique,
    userDict.knownWords,
    userDict.unknownWords
  );
  data.unknownWord = unknown;
  data.unseenWord = unseen;
  data.knownWord = known;

  articlesHelper.markArticle("hasOpened", article.value);

  _findWordTrans([...data.unknownWord, ...data.unseenWord]);
});

onBeforeUnmount(() => {
  // userDict.addSeenWords(article.value.wordsFreq);
  userDict.save();
});
</script>

<template>
  <ReadingView
    :article="article"
    :data="data"
    @update-user-dict="onUpdateUserDict"
    :onRemove="onRemove"
    :toggleTrans="toggleTrans"
  >
    <WordListPopup :data="data" :onRemove="onRemove" />
  </ReadingView>
</template>

<style scoped>
.token--unseen {
  color: gray;
}
.token--unknown {
  color: yellow;
}
.article {
  white-space: pre-wrap;
  font-size: 1.5em;
  line-height: 200%;
}
.translate-sentence {
  font-size: 0.75em;
  margin-bottom: 30px;
}
.n-space {
  align-items: center;
}
@media (prefers-color-scheme: light) {
  .token--unknown {
    color: blue;
  }
}
</style>
