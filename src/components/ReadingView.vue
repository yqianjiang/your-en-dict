<script setup>
import { reactive, ref } from "vue";
import { NTabPane, NTabs, NTag, NSelect, NSpace, NButton } from "naive-ui";
import { sortWordsOptions } from "@/utils/dict/sort.js";
import { findLemma } from "@/utils/lemmatize.js";
import Popup from "@/components/Popup.vue";
import WordList from "@/components/WordList.vue";

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
  allowRemove: false,
});
const wordsOrder = ref(sortWordsOptions[0].value);

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
    <div>
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
    <Popup btnText="查看词表">
      <template #header>
        <NSpace>
          词表
          <NSelect
            v-model:value="wordsOrder"
            :options="sortWordsOptions"
            placeholder="排序方式"
          />
          <NButton @click="mode.allowRemove = !mode.allowRemove">
            {{ mode.allowRemove ? "取消" : "" }}编辑
          </NButton>
        </NSpace>
      </template>
      <NTabs type="segment">
        <NTabPane name="0" :tab="`生词 (共${data.unknownWord.length}个)`">
          <WordList :words="data.unknownWord" :wordDict="data.translations" :selectedOrder="wordsOrder" :allowRemove="mode.allowRemove" @remove="(word)=>onRemove('unknown', word)" />
        </NTabPane>
        <NTabPane name="1" :tab="`未标记词 (共${data.unseenWord.length}个)`">
          <WordList :words="data.unseenWord" :wordDict="data.translations" :selectedOrder="wordsOrder" :allowRemove="mode.allowRemove" @remove="(word)=>onRemove('unseen', word)"/>
        </NTabPane>
        <NTabPane name="2" :tab="`熟词 (共${data.knownWord.length}个)`">
          <WordList :words="data.knownWord" :wordDict="data.translations" :selectedOrder="wordsOrder" :allowRemove="mode.allowRemove" @remove="(word)=>onRemove('known', word)" />
        </NTabPane>
      </NTabs>
    </Popup>
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
