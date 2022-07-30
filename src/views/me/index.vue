<script setup>
import { ref } from "vue";
import { UserDict } from "@/utils/dict/userDict";
import Uploader from "../../components/uploader.vue";

const userDict = new UserDict();
const msg = ref("Me");
const showUploader = ref(false);
const dicts = {
  known: userDict.knownWords,
  unknown: userDict.unknownWords,
};
const downloadLink =
  "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(dicts));

function addWordsFromJson(jsonData) {
  const data = JSON.parse(decodeURIComponent(jsonData));
  if (data.known && data.unknown);
  userDict.addKnownWords(data.known);
  userDict.addUnknownWords(data.unknown);
  userDict.save();
  console.log('导入成功！')
}

</script>

<template>
  <h1>{{ msg }}</h1>
  <button v-if="!showUploader" @click="showUploader=true">导入词表</button>
  <Uploader v-show="showUploader" @submit="addWordsFromJson" @cancel="showUploader=false" />
  <a download="myDict.json" :href="downloadLink">
    <button>导出词表</button>
  </a>
  <ul>
    <li>
      <a href="#/me/word-list?q=known">我的熟词</a> (共{{dicts.known.length}}个)
    </li>
    <li>
      <a href="#/me/word-list?q=unknown">我的生词</a> (共{{dicts.unknown.length}}个)
    </li>
  </ul>
</template>

<style scoped></style>
