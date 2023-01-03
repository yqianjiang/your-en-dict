<script setup>
import { reactive } from "vue";
import { NTag } from "naive-ui";
import { findLemma } from "@/utils/lemmatize.js";

const { article, data, toggleTrans, onRemove } = defineProps({
  article: {
    type: Object,
  },
  data: {
    type: Object,
  },
  toggleTrans: {
    type: Function,
  },
  onRemove: {
    type: Function,
  },
});

const emits = defineEmits(['updateUserDict']);

const onUpdateUserDict = () => {
  emits('updateUserDict');
  mode.markUnknownWord = false;
};

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

const onClickWord = async (e) => {
  let token = e.target?.getAttribute("data-token");
  if (!token) return;
  token = findLemma(token);

  if (mode.markUnknownWord) {
    // toggle生词模式
    if (data.unknownWord.includes(token)) {
      // 点击生词变熟词
      onRemove('unknown', token);
    } else if (data.knownWord.includes(token)) {
      // 点击熟词或unknown的都变生词
      onRemove('known', token);
    } else {
      onRemove('unseen', token);
    }
  } else {
    // toggle翻译模式
    toggleTrans(token);
  }
};

</script>

<template>
  <h2>{{ article.title }}</h2>
  <NTag type="info" v-if="article.tag">
      {{article.tag}}
  </NTag>
  <div class="sticky-top">
    <div class="stats-info">
      共{{ article.totalWords }}词，生词率{{
        (
          (data.unknownWord.length /
            (data.knownWord.length +
              data.unknownWord.length)) *
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
    <button @click="mode.showByTokens = !mode.showByTokens">{{ mode.showByTokens ? "显示" : "隐藏" }}句译</button>
    <!-- <button @click="mode.highlight = !mode.highlight">高亮开关</button> -->
    <button @click="mode.markUnknownWord = !mode.markUnknownWord">
      {{ mode.markUnknownWord ? "停止标记" : "开始标记" }}
    </button>
    <button @click="onUpdateUserDict">更新词表</button>
    <slot></slot>
  </div>
  <p class="article">
    <p v-for="(paragraph, idx) in article.sentences" :key="'paragraph'+idx">
      <span v-for="(sentence, idx) in paragraph" :key="sentence.sentence.slice(0, 5)+idx">
        <span class="origin-sentence" @click="onClickWord">
          <span
            v-for="token in sentence.tokens"
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
          {{ sentence.translation }}
        </div>
      </span>
    </p>
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
.n-space {
  align-items: center;
}
@media (prefers-color-scheme: light) {
  .token--unknown {
    color: blue;
  }
}
</style>
