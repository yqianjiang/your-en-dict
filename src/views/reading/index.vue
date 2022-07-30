<script setup>
import { ref } from "vue";
import { Articles } from "@/utils/articles/articles";
import { UserDict } from "@/utils/dict/userDict";
import Uploader from "../../components/uploader.vue";

const articlesHelper = new Articles();
const userDict = new UserDict();

const title = ref("文章列表");
const articles = ref([]);

const getArticles = async () => {
  const result = await articlesHelper.getArticleBatch(userDict);
  articles.value = [...articles.value, ...result];
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
  <Uploader v-show="showArticleUploader" @submit="addArticle" @cancel="showArticleUploader = false" />
  <div v-for="article in articles">
    <a :href="'#/reading/' + article.uuid">{{ article.title }}</a>
    <div>共{{article.totalWords}}词，生词率：{{(article.ratio*100).toFixed(2)}}% <small>({{article.unseen.length}}词未标注)</small></div>
    <hr>
  </div>
</template>

<style scoped>
hr {
  border-color: gray;
  border-width: 0.5px;
}
</style>
