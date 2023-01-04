<script setup>
import { ref } from "vue";
import { NSpace, NButton, useMessage } from "naive-ui";
import ReadingView from "@/components/ReadingView.vue";
// import ReadingListItem from "@/components/ReadingListItem.vue";

import { userDict } from "@/utils/dict/userDict.js";
import { articlesHelper } from "@/utils/articles/articles.js";

document.title = "你的定制英语词典";
const textareaVal = ref("");
const data = ref(null);
const article = ref(null);
const loading = ref(false);
const message = useMessage();

function analyze() {
  const { stats, article: _article } = articlesHelper.analyzeArticle(
    userDict,
    textareaVal.value
  );
  data.value = stats[0];
  article.value = _article;
}

async function save() {
  loading.value = true;
  await articlesHelper.saveArticle(article.value);
  loading.value = false;
  message.success("文章已保存到本地文章列表");
}

function clear() {
  textareaVal.value = "";
  data.value = null;
  article.value = null;
}
</script>

<template>
  <p>请输入您想阅读的材料，AI会帮你高亮您的<a href="#/me">生词及目标词</a></p>
  <div v-if="!data" class="article-input-area">
    <textarea cols="30" rows="10" v-model="textareaVal"></textarea>
  </div>
  <NSpace>
    <NButton v-if="!data" @click="analyze">分析</NButton>
    <NButton v-if="data" :loading="loading" @click="save">保存</NButton>
    <NButton v-show="textareaVal" @click="clear">清空</NButton>
  </NSpace>
  <div class="stats-info" v-if="data">
    <p>
      <span>总字数{{ data.totalWords }}词</span>
      <span>
        - 词汇量{{ data.totalUniqueWords }}词(目标{{ data.targetWords.length }})
      </span>
    </p>
    <span>
      生词{{ data.unknown.length }}词(目标{{ data.unknownTargetWords.length }})
    </span>
    <span>
      - 未标记词{{ data.unseen.length }}词(目标{{
        data.unseenTargetWords.length
      }})
    </span>
  </div>
  <div class="reading-view-wrapper" v-if="article">
    <ReadingView :article="article"> </ReadingView>
  </div>
</template>

<style scoped>
.article-input-area > textarea {
  width: 100%;
}

.reading-view-wrapper {
  margin: auto;
  max-width: 720px;
  max-height: 70vh;
  overflow: auto;
  border: solid 1px gray;
}
</style>