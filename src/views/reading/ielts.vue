<script setup>
import { watch, computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useOrderSelector } from "./hooks/useOrderSelector.js";
import { articlesHelper } from "@/utils/articles/articles.js";
import { userDict } from "@/utils/dict/userDict.js";
import { NSelect, NSpin } from "naive-ui";
import ReadingListItem from "@/components/ReadingListItem.vue";

const route = useRoute();
const router = useRouter();
const { selectedOrder, orderOptions } = useOrderSelector();

const BATCH_SIZE = 10;
let pageIdx = 0;

const title = ref("雅思文章");
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

function reGetArticles() {
  articles.value = [];
  pageIdx = 0;
  getArticles();
}

watch(tag, reGetArticles);
watch(selectedOrder, () => {
  if (selectedOrder.value !== route.query.selectedOrder) {
    router.push(
      {
        query: {
          ...route.query,
          selectedOrder: selectedOrder.value,
        }
      }
    );
    reGetArticles();
  }
});

// const showArticleUploader = ref(false);

// const onShowUploader = () => {
//   showArticleUploader.value = true;
// };
// const addArticle = async (text) => {
//   await articlesHelper.addArticle(text);
//   showArticleUploader.value = false;
//   getArticles();
// };

if (route.query.selectedOrder) {
  selectedOrder.value = route.query.selectedOrder;
}
getArticles();

</script>

<template>
  <h1>{{ title }}</h1>
  <div>
    根据标签筛选：
    <router-link v-if="tag" :to="{query:{...route.query,tag: ''}}">All</router-link>
    <span v-else>All</span>
    <span v-for="item in tags" :key="item.tag">
      |
      <span v-if="tag === item.tag">{{ item.label }}</span>
      <router-link v-else :to="{query:{...route.query,tag: item.tag}}">{{ item.label }}</router-link>
    </span>
  </div>
  <n-select
    v-model:value="selectedOrder"
    :options="orderOptions"
    placeholder="请选择文章排序"
  />
  <ReadingListItem :article="article" v-for="article in articles" :key="article.uuid"></ReadingListItem>
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
