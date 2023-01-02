<script setup>
import { ref } from "vue";
import { userDict } from "@/utils/dict/userDict.js";
import { articlesHelper } from "@/utils/articles/articles.js";
import { NSpace, NButton, useMessage } from "naive-ui";

const textareaVal = ref("");
const data = ref(null);
const loading = ref(false);
const message = useMessage();

function analyze() {
  data.value = articlesHelper.analyzeArticle(userDict, textareaVal.value)[0];
  console.log(data.value);
}

async function save() {
  loading.value = true;
  await articlesHelper.addArticle(textareaVal.value);
  loading.value = false;
  message.success('文章已保存，请到My Reading的本地文章查看');
}

function clear() {
  textareaVal.value = "";
}
</script>

<template>
    <div class="article-input-area">
      <textarea cols="30" rows="10" v-model="textareaVal"></textarea>
    </div>
    <NSpace>
      <NButton @click="analyze">分析</NButton>
      <NButton :loading="loading" @click="save">保存</NButton>
      <NButton @click="clear">清空</NButton>
    </NSpace>
    <div class="stats-info" v-if="data">
      <p>总字数{{ data.totalWords }}词</p>
      <p
        >词汇量{{ data.totalUniqueWords }}词(目标{{
          data.targetWords.length
        }})</p
      >
      <p>生词{{ data.unknown.length }}词(目标{{ data.unknownTargetWords.length }})</p>
      <p>未标记词{{ data.unseen.length }}词(目标{{ data.unseenTargetWords.length }})</p>
    </div>
</template>
