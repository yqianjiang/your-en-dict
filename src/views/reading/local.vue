<script setup>
import { ref } from "vue";
import { articlesHelper } from "@/utils/articles/articles.js";
import { userDict } from "@/utils/dict/userDict.js";
// import Uploader from "@/components/uploader.vue";
import ReadingListItem from "@/components/ReadingListItem.vue";

document.title = '本地文章 - 你的定制英语词典';

const title = ref("本地文章");

const articles = ref([]);

const getArticles = async () => {
  articles.value = (await articlesHelper.getLocalArticles(userDict)) || [];
};
getArticles();

// const showArticleUploader = ref(false);

// const onShowUploader = () => {
//   showArticleUploader.value = true;
// };
// const addArticle = async (text) => {
//   await articlesHelper.addArticle(text);
//   showArticleUploader.value = false;
//   getArticles();
// };
</script>

<template>
  <h1>{{ title }}</h1>
  <!-- <button @click="onShowUploader">新增文章</button>
  <Uploader
    v-show="showArticleUploader"
    @submit="addArticle"
    @cancel="showArticleUploader = false"
  /> -->
  <ReadingListItem :article="article" v-for="article in articles" :key="article.uuid"></ReadingListItem>
</template>
