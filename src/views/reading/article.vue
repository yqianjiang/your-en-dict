<script setup>
import { onBeforeUnmount, onMounted, reactive, ref } from "vue";
import { articlesHelper } from "@/utils/articles/articles.js";
import { userDict } from "@/utils/dict/userDict.js";
import { getTranslation, getTranslationBatch } from "@/services/dict.js";
import { compare } from "@/utils/articles/counter.js";
import { useRoute } from "vue-router";
import { findLemma } from "@/utils/lemmatize.js";
import Popup from "@/components/popup.vue";
import WordList from "@/components/wordList.vue";
import { NTabPane, NTabs } from "naive-ui";

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
  showTrans: false,
  showByTokens: true,
});

const computeTranslation = (token) => {
  token = findLemma(token);
  const trans = data.translations[token]?.translation
    ?.split(".")[1]
    ?.split(",")[0]
    ?.split("\\")[0];
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

  console.log(article.value);

  _findWordTrans([...data.unknownWord, ...data.unseenWord]);
});

onBeforeUnmount(() => {
  // userDict.addSeenWords(article.value.wordsFreq);
  userDict.save();
});
</script>

<template>
  <h2>{{ article.title }}</h2>
  <div class="sticky-top">
    <div>
      共{{ article.totalWords }}词，生词率{{
        (
          ((data.unknownWord.length + data.unseenWord.length) /
            (data.knownWord.length +
              data.unknownWord.length +
              data.unseenWord.length)) *
          100
        ).toFixed(2)
      }}%
    </div>
    <button
      v-if="Object.keys(data.translations).length"
      @click="mode.showTrans = !mode.showTrans"
    >
      {{ mode.showTrans ? "隐藏" : "显示" }}词译
    </button>
    <button @click="mode.showByTokens = !mode.showByTokens">模式切换</button>
    <button @click="mode.highlight = !mode.highlight">高亮开关</button>
    <button @click="mode.markUnknownWord = !mode.markUnknownWord">
      {{ mode.markUnknownWord ? "停止标记" : "标记生词" }}
    </button>
    <button @click="onUpdateUserDict">更新词表</button>
    <Popup btnText="显示词表" title="词表">
      <n-tabs type="segment">
        <n-tab-pane name="0" :tab="`生词 (共${data.unknownWord.length}个)`">
          <WordList :words="data.unknownWord" :wordDict="data.translations" />
        </n-tab-pane>
        <n-tab-pane name="1" :tab="`未标记词 (共${data.unseenWord.length}个)`">
          <WordList :words="data.unseenWord" :wordDict="data.translations" />
        </n-tab-pane>
        <n-tab-pane name="2" :tab="`熟词 (共${data.knownWord.length}个)`">
          <WordList :words="data.knownWord" :wordDict="data.translations" />
        </n-tab-pane>
      </n-tabs>
    </Popup>
  </div>
  <p class="article">
    <span v-for="item in article.sentence">
      <span class="origin-sentence" @click="onClickWord">
        <span
          v-for="token in article.tokens.slice(item.span[0], item.span[1] + 1)"
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
      </span>
      <div class="translate-sentence" v-show="!mode.showByTokens">
        {{ item.translation }}
      </div>
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
.article {
  white-space: pre-wrap;
  font-size: 1.5em;
  line-height: 200%;
}
.translate-sentence {
  font-size: 0.75em;
  margin-bottom: 30px;
}
@media (prefers-color-scheme: light) {
  .token--unknown {
    color: blue;
  }
}
</style>
