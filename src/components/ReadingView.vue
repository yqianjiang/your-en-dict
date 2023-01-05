<script setup>
import { reactive, ref } from "vue";
import { NSpace, NTag, NSwitch, NSelect, NButton } from "naive-ui";
import { findLemma } from "@/utils/lemmatize.js";
import { useDictData } from '@/hooks/useDictData';
import WordListPopup from "@/components/WordListPopup.vue";

const { article } = defineProps({
  article: {
    type: Object,
  },
});

const emits = defineEmits(['updateUserDict']);

console.log('article', article);
console.log('article.wordsUnique', article.wordsUnique);
const { data, toggleTrans, updateUserDict, onRemove } = useDictData(article.wordsUnique);

const onUpdateUserDict = () => {
  emits('updateUserDict');
  updateUserDict();
  mode.markUnknownWord = false;
};

const mode = reactive({
  markUnknownWord: false,
  showTrans: false,
  showSentenceTrans: false,
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
  } else if (mode.showTrans) {
    // toggle翻译模式
    toggleTrans(token);
  }
};

const highlightList = ref(['unknown', 'unseen', 'target']);
const highlightOptions = [{label: '生词', value: 'unknown'}, {label: '未标记词(下划线)', value: 'unseen'}, {label: '目标词', value: 'target'}];
</script>

<template>
  <h2>{{ article.title }}</h2>
  <NTag type="info" v-if="article.tag"> {{ article.tag }} </NTag>
  <div class="sticky-top">
    <div class="stats-info"> 共{{ article.totalWords }}词，生词率{{ ((data.unknownWord.length / article.wordsUnique.length) * 100).toFixed(2) }}%，目标词率{{ ((data.targetWord.length / article.wordsUnique.length) * 100).toFixed(2) }}% </div>
    <NSpace vertical class="toolbar">
      <NSpace> 显示设置： <NSwitch v-if="Object.keys(data.translations).length" v-model:value="mode.showTrans">
          <template #checked> 单词翻译 </template>
          <template #unchecked> 单词翻译 </template>
        </NSwitch>
        <NSwitch v-if="article.sentences[0][0].translation" v-model:value="mode.showSentenceTrans">
          <template #checked> 整句翻译 </template>
          <template #unchecked> 整句翻译 </template>
        </NSwitch>
      </NSpace>
      <NSpace> 高亮选项：
        <NSelect v-model:value="highlightList" multiple :options="highlightOptions" />
      </NSpace>
      <NSpace>
        <NButton @click="mode.markUnknownWord = !mode.markUnknownWord"> {{ mode.markUnknownWord ? "停止标记" : "开始标记" }}
        </NButton>
        <NButton @click="onUpdateUserDict">更新词表</NButton>
        <WordListPopup :data="data" :onRemove="onRemove" />
      </NSpace>
    </NSpace>
  </div>
  <p class="article">
  <p v-for="(paragraph, idx) in article.sentences" :key="'paragraph' + idx">
    <span v-for="(sentence, idx) in paragraph" :key="sentence.sentence.slice(0, 5) + idx">
      <span class="origin-sentence" @click="onClickWord">
        <span v-for="token in sentence.tokens">
          <span :class="{
            'token--unseen':
              highlightList.includes('unseen') && data.unseenWord.includes(findLemma(token)),
            'token--unknown':
              highlightList.includes('unknown') && data.unknownWord.includes(findLemma(token)),
            'token--ignore':
              highlightList.includes('target') && !data.targetWord.includes(findLemma(token))
          }">
            <ruby :data-token="token"> {{ token }}<rt>{{ computeTranslation(token) }}</rt>
            </ruby></span>
          <!-- TODO: 若下一个词是标点符号，则不必了显示空格了。 -->
          <span>{{ " " }}</span>
        </span>
      </span>
      <div class="translate-sentence" v-show="mode.showSentenceTrans"> {{ sentence.translation }} </div>
    </span>
  </p>
  </p>
</template>

<style scoped>
.toolbar {
  max-width: 430px;
  margin: auto;
}
.n-select {
  min-width: 120px;
}
.token--unknown {
  color: yellow;
}

.token--ignore {
  opacity: 0.5;
  font-weight: 300;
}

.token--unseen {
  text-decoration: underline;
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
