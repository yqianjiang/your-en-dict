<script setup>
import { onBeforeUnmount, onMounted, reactive, ref } from "vue";
import { Articles } from "@/utils/articles/articles";
import { UserDict } from "@/utils/dict/userDict";
import { Dict } from "@/utils/dict/dict";
import { compare } from "@/utils/articles/counter";
import { useRoute } from "vue-router";
import { findLemma } from "@/utils/lemmatize";

const articlesHelper = new Articles();
const userDict = new UserDict();
const dict = new Dict();

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
});

const onClickWord = async (e) => {
  let token = e.target?.getAttribute("data-token");
  if (!token) return;
  token = findLemma(token);
  if (mode.markUnknownWord) {
    if (data.unknownWord.includes(token)) {
      data.knownWord.push(token);
      data.unknownWord = data.unknownWord.filter((x) => x !== token);
    } else {
      data.unknownWord.push(token);
    }
  }
  if (token in data.translations) {
    delete data.translations[token];
    return;
  }
  const trans = await dict.query(token);
  data.translations[token] = trans;
  console.log(trans);
};

const onHighlightWords = () => {
  mode.highlight = !mode.highlight;
};

const getTranslation = (token) => {
  token = findLemma(token);
  const trans = data.translations[token]?.translation
    .split(".")[1]
    .split(",")[0];
  return trans ? `(${trans.trim()}) ` : "";
};

const onUpdateUserDict = () => {
  userDict.addKnownWords([...data.knownWord, ...data.unseenWord]);
  userDict.addUnknownWords(data.unknownWord);
  userDict.save();
  mode.markUnknownWord = false;
  data.unknownWord = [];
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
});

onBeforeUnmount(() => {
  userDict.addSeenWords(article.value.wordsFreq);
  userDict.save();
});
</script>

<template>
  <h1>{{ article.title }}</h1>
  <div>
    <button v-if="mode.markUnknownWord" @click="onUpdateUserDict">
      更新词表
    </button>
    <button v-else @click="mode.markUnknownWord = true">标记生词</button>
    <button @click="onHighlightWords">高亮开关</button>
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
        {{ token }}<rt>{{ getTranslation(token) }}</rt>
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
</style>
