<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

import ReadingView from "@/components/ReadingView.vue";

import { articlesHelper } from "@/utils/articles/articles.js";

const article = ref(null);
const route = useRoute();

const onUpdateUserDict = () => {
  articlesHelper.markArticle("hasMarked", article.value);
}

onMounted(async () => {
  // 获取article
  const uuid = route.params.id;
  const result = await articlesHelper.getArticle(uuid);
  article.value = result;
  document.title = result.title + " - 你的定制英语词典";
  articlesHelper.markArticle("hasOpened", article.value);
});
</script>

<template>
  <ReadingView
    v-if="article"
    :article="article"
    @update-user-dict="onUpdateUserDict"
  >
  </ReadingView>
</template>
