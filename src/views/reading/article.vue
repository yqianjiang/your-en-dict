<script setup>
import { onBeforeUnmount, onMounted, reactive, ref } from "vue";
import { articlesHelper } from "@/utils/articles/articles.js";
import { userDict } from "@/utils/dict/userDict.js";
import { getTranslation, getTranslationBatch } from "@/services/dict.js";
import { compare } from "@/utils/articles/counter.js";
import { useRoute } from "vue-router";
import { findLemma } from "@/utils/lemmatize.js";

const route = useRoute();
const article = ref({});
const data = reactive({
  knownWord: [],
  unseenWord: [],
  unknownWord: [],
  translations: {},
});
const mode = reactive({
  markUnknownWord: false,
  highlight: true,
  showTrans: true,
  translated: false,
});

const computeTranslation = (token) => {
  token = findLemma(token);
  const trans = data.translations[token]?.translation
    .split(".")[1]
    .split(",")[0]
    .split("\\")[0];
  return mode.showTrans && trans ? `${trans.trim()}` : "";
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

const onClickWord = async (e) => {
  let token = e.target?.getAttribute("data-token");
  if (!token) return;
  token = findLemma(token);

  // toggle生词
  if (mode.markUnknownWord) {
    if (data.unknownWord.includes(token)) {
      data.knownWord.push(token);
      data.unknownWord = data.unknownWord.filter((x) => x !== token);
      delete data.translations[token];
    } else {
      data.unknownWord.push(token);
      _findWordTrans(token);
    }
  } else {
    // toggle翻译
    if (token in data.translations) {
      delete data.translations[token];
    } else {
      _findWordTrans(token);
    }
  }
};

const onUpdateUserDict = () => {
  userDict.addKnownWords([...data.knownWord, ...data.unseenWord]);
  userDict.addUnknownWords(data.unknownWord);
  userDict.save();
  mode.markUnknownWord = false;
  data.unseenWord = [];
  console.log(data);
  console.log(userDict.unknownWords);
  console.log(userDict.knownWords);
};

onMounted(async () => {
  const uuid = route.params.id;
  article.value = await articlesHelper.getArticle(uuid);
  const { known, unknown, unseen } = compare(
    article.value.wordsUnique,
    userDict.knownWords,
    userDict.unknownWords
  );
  data.unknownWord = unknown;
  data.unseenWord = unseen;
  data.knownWord = known;

  _findWordTrans([...data.unknownWord, ...data.unseenWord]);
});

onBeforeUnmount(() => {
  userDict.addSeenWords(article.value.wordsFreq);
  userDict.save();
});
</script>

<template>
  <h2>{{ article.title }}</h2>
  <div class="sticky-top">
    <button
      v-if="Object.keys(data.translations).length"
      @click="mode.showTrans = !mode.showTrans"
    >
      {{ mode.showTrans ? "隐藏" : "显示" }}翻译
    </button>
    <button @click="mode.highlight = !mode.highlight">高亮开关</button>
    <button @click="mode.markUnknownWord = !mode.markUnknownWord">
      {{ mode.markUnknownWord ? "停止标记" : "标记生词" }}
    </button>
    <button @click="onUpdateUserDict">更新词表</button>
  </div>
  <p @click="onClickWord">
    <span
      v-for="token in article.tokens"
      :class="{
        'token--unseen':
          mode.highlight && data.unseenWord.includes(findLemma(token)),
        'token--unknown':
          mode.highlight && data.unknownWord.includes(findLemma(token)),
      }"
      ><ruby :data-token="token">
        {{ token }}<rt>{{ computeTranslation(token) }}</rt>
      </ruby>
      {{ " " }}
    </span>
  </p>
</template>

<style scoped>
.token--unseen {
  color: gray;
}
.token--unknown {
  color: yellow;
}
ruby {
  font-size: 16px;
  line-height: 180%;
}
@media (prefers-color-scheme: light) {
  .token--unknown {
    color: blue;
  }
}
</style>
