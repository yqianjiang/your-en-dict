<script setup>
import { ref, reactive, computed } from "vue";
import { useRoute } from "vue-router";
import { articlesHelper } from "@/utils/articles/articles.js";
import { userDict } from "@/utils/dict/userDict.js";
import Uploader from "@/components/uploader.vue";
import ReadingListItem from "@/components/ReadingListItem.vue";

document.title = 'myReading - 你的定制英语词典';

const route = useRoute();
const title = ref("我的阅读");
const allArticles = reactive({
  read: [],
  marked: [],
  local: [],
});

const tag = computed(() => route.query.q);
const articles = computed(() => {
  if (tag.value) {
    return allArticles[tag.value];
  } else {
    return [...allArticles.read, ...allArticles.marked, ...allArticles.local];
  }
});

const tags = ref([
  {
    tag: "read",
    label: "正在标记",
  },
  {
    tag: "marked",
    label: "已标记",
  },
  {
    tag: "local",
    label: "本地文章",
  },
]);

const getArticles = async () => {
  allArticles.read = (await articlesHelper.getOpenedArticles(userDict)) || [];
  allArticles.marked = (await articlesHelper.getMarkedArticles(userDict)) || [];
  allArticles.local = (await articlesHelper.getLocalArticles(userDict)) || [];
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
  <div>
    筛选：
    <a v-if="tag" href="#/my-reading">All</a>
    <span v-else>All</span>
    <span v-for="item in tags" :key="item.tag">
      |
      <span v-if="tag === item.tag">{{ item.label }}</span>
      <a v-else :href="'#/my-reading?q=' + item.tag">{{ item.label }}</a>
    </span>
  </div>
  <button @click="onShowUploader">新增文章</button>
  <Uploader
    v-show="showArticleUploader"
    @submit="addArticle"
    @cancel="showArticleUploader = false"
  />
  <ReadingListItem :article="article" v-for="article in articles" :key="article.uuid"></ReadingListItem>
</template>

<style scoped></style>
