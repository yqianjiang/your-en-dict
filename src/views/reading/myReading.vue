<script setup>
import { ref, reactive, computed } from "vue";
import { useRoute } from "vue-router";
import { articlesHelper } from "@/utils/articles/articles.js";
import { userDict } from "@/utils/dict/userDict.js";
import ReadingListItem from "@/components/ReadingListItem.vue";

document.title = '正在读的文章 - 你的定制英语词典';

const route = useRoute();
const title = ref("正在读的文章");
const allArticles = reactive({
  read: [],
  marked: [],
});

const tag = computed(() => route.query.q);
const articles = computed(() => {
  if (tag.value) {
    return allArticles[tag.value];
  } else {
    return [...allArticles.read, ...allArticles.marked];
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
]);

const getArticles = async () => {
  allArticles.read = (await articlesHelper.getOpenedArticles(userDict)) || [];
  allArticles.marked = (await articlesHelper.getMarkedArticles(userDict)) || [];
};
getArticles();
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
  <ReadingListItem :article="article" v-for="article in articles" :key="article.uuid"></ReadingListItem>
</template>

<style scoped></style>
