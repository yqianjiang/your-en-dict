<script setup>
import { watch, computed, ref } from "vue";
import { useRoute } from "vue-router";
import { useOrderSelector } from "./hooks/useOrderSelector.js";
import { articlesHelper } from "@/utils/articles/articles.js";
import { userDict } from "@/utils/dict/userDict.js";
// import Uploader from "../../components/uploader.vue";

const route = useRoute();
const { selectedOrder, orderOptions } = useOrderSelector();

const BATCH_SIZE = 10;
let pageIdx = 0;

const title = ref("文章列表");
const loading = ref(true);
const tag = computed(() => route.query.tag);
const tags = ref([
  {
    tag: "ielts-reading",
    label: "雅思阅读",
  },
  {
    tag: "ielts-listening",
    label: "雅思听力",
  },
]);
const articles = ref([]);
const showLoadMore = ref(true);

const getArticles = async () => {
  loading.value = true;
  const result = await articlesHelper.getArticleBatch(
    userDict,
    tag.value,
    pageIdx,
    BATCH_SIZE,
    selectedOrder.value
  );
  if (result) {
    articles.value = [...articles.value, ...result];
    if (Object.keys(result).length < BATCH_SIZE) {
      showLoadMore.value = false;
    }
    pageIdx += BATCH_SIZE;
  } else {
    showLoadMore.value = false;
  }
  loading.value = false;
};
getArticles();

function reGetArticles() {
  articles.value = [];
  pageIdx = 0;
  getArticles();
}

watch(tag, reGetArticles);
watch(selectedOrder, reGetArticles);

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
  <div>
    根据标签筛选：
    <a v-if="tag" href="#/reading">All</a>
    <span v-else>All</span>
    <span v-for="item in tags" :key="item.tag">
      |
      <span v-if="tag === item.tag">{{ item.label }}</span>
      <a v-else :href="'#/reading?tag=' + item.tag">{{ item.label }}</a>
    </span>
  </div>
  <n-select
    v-model:value="selectedOrder"
    :options="orderOptions"
    placeholder="请选择文章排序"
  />
  <!-- <button @click="onShowUploader">新增文章</button> -->
  <!-- <Uploader
    v-show="showArticleUploader"
    @submit="addArticle"
    @cancel="showArticleUploader = false"
  /> -->
  <div v-for="article in articles" :key="article.uuid">
    <a :href="'#/reading/' + article.uuid">{{ article.title }}</a><n-tag type="info">
      {{article.tag}}
    </n-tag>
    <div>
      {{ article.totalWords }}词 <span :style="article.unseen.length? 'color: gray;': ''">
        - {{ (article.ratio * 100).toFixed(2) }}% 生词
        <small v-if="article.unseen.length">({{ article.unseen.length }}未标注)</small>
      </span>
    </div>
    <hr />
  </div>
  <div>
    <n-spin :show="loading" size="small">
      <button v-if="showLoadMore" @click="getArticles">加载更多</button>
    </n-spin>
  </div>
</template>

<style scoped>
.n-tag {
  margin-left: 8px;
}
</style>
