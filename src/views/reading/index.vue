<script setup>
import { ref } from "vue";
import { articlesHelper } from "@/utils/articles/articles.js";
import { userDict } from "@/utils/dict/userDict.js";
import Uploader from "../../components/uploader.vue";

const BATCH_SIZE = 10;

const title = ref("文章列表");
const articles = ref([]);
const showLoadMore = ref(true);

const getArticles = async () => {
  const result = await articlesHelper.getArticleBatch(userDict, BATCH_SIZE);
  if (result) {
    articles.value = [...articles.value, ...result];
    if (Object.keys(result).length < BATCH_SIZE) {
      showLoadMore.value = false;
    }
  } else {
    showLoadMore.value = false;
  }
};
getArticles();

const showArticleUploader = ref(false);

const onShowUploader = () => {
  showArticleUploader.value = true;
};
const addArticle = async (text) => {
  await articlesHelper.addArticle(text);
  showArticleUploader.value = false;
  getArticles();
};
</script>

<template>
  <h1>{{ title }}</h1>
  <button @click="onShowUploader">新增文章</button>
  <Uploader
    v-show="showArticleUploader"
    @submit="addArticle"
    @cancel="showArticleUploader = false"
  />
  <div v-for="article in articles" :key="article.uuid">
    <a :href="'#/reading/' + article.uuid">{{ article.title }}</a>
    <div>
      共{{ article.totalWords }}词，生词率：{{
        (article.ratio * 100).toFixed(2)
      }}% <small>({{ article.unseen.length }}词未标注)</small>
    </div>
    <hr />
  </div>
  <button v-if="showLoadMore" @click="getArticles">加载更多</button>
</template>

<style scoped></style>
