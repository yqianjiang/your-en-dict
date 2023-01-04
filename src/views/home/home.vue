<script setup>
import { ref } from "vue";
import { NSpace, NButton, useMessage } from "naive-ui";
import ReadingView from "@/components/ReadingView.vue";

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
  <div v-if="!data" class="article-input-area">
    <textarea cols="30" rows="10" v-model="textareaVal"></textarea>
  </div>
  <NSpace>
    <NButton v-if="!data" @click="analyze">分析</NButton>
    <NButton v-if="data" :loading="loading" @click="save">保存</NButton>
    <NButton v-show="textareaVal" @click="clear">清空</NButton>
  </NSpace>
  <div class="stats-info" v-if="data">
    <p>总字数{{ data.totalWords }}词</p>
    <p>
      词汇量{{ data.totalUniqueWords }}词(目标{{ data.targetWords.length }})
    </p>
    <p>
      生词{{ data.unknown.length }}词(目标{{ data.unknownTargetWords.length }})
    </p>
    <p>
      未标记词{{ data.unseen.length }}词(目标{{
        data.unseenTargetWords.length
      }})
    </p>
  </div>
  <ReadingView v-if="article" :article="article"> </ReadingView>
</template>
