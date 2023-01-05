<script setup>
import { ref } from "vue";
import { NSpace, NButton, NInput, useMessage } from "naive-ui";
import ReadingView from "@/components/ReadingView.vue";
// import ReadingListItem from "@/components/ReadingListItem.vue";

import { userDict } from "@/utils/dict/userDict.js";
import { articlesHelper } from "@/utils/articles/articles.js";

document.title = "你的定制英语词典";
const title = ref("");
const textareaVal = ref("");
const data = ref(null);
const article = ref(null);
const loading = ref(false);
const message = useMessage();

function analyze() {
  const { stats, article: _article } = articlesHelper.analyzeArticle(
    userDict,
    textareaVal.value,
    title.value,
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
}

function back() {
  data.value = null;
  article.value = null;
}
</script>

<template>
  <div v-if="!data">
    <p>请输入您想阅读的材料，软件会帮您高亮您的<a href="#/me">生词及目标词</a></p>
    <NSpace vertical class="article-input-area">
      <!-- <NInput v-model:value="title" type="text" placeholder="标题" /> -->
      <NInput v-model:value="textareaVal" type="textarea" placeholder="" />
      <NSpace>
        <NButton @click="analyze" :disabled="!textareaVal">分析</NButton>
        <NButton v-show="textareaVal" @click="clear">清空</NButton>
      </NSpace>
    </NSpace>
  </div>
  <div class="stats-info" v-if="data">
    <NSpace>
      <NButton :loading="loading" @click="save">保存</NButton>
      <NButton @click="back">返回</NButton>
    </NSpace>
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
.article-input-area {
  text-align: left;
}
.reading-view-wrapper {
  margin: auto;
  max-width: 720px;
  max-height: 70vh;
  overflow: auto;
  border: solid 1px gray;
}
</style>