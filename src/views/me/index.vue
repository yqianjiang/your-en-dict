<script setup>
import { ref, reactive } from "vue";
import { userDict } from "@/utils/dict/userDict.js";
import Uploader from "../../components/uploader.vue";

const msg = ref("Me");
const showUploader = ref(false);
const dicts = {
  known: userDict.knownWords,
  unknown: userDict.unknownWords,
};
const dictsLen = reactive({
  known: 0,
  unknown: 0,
});

function updateDictsLen() {
  dictsLen.known = userDict.knownWords.length;
  dictsLen.unknown = userDict.unknownWords.length;
}
updateDictsLen();

const downloadLink =
  "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(dicts));

function addWordsFromJson(jsonData) {
  const data = JSON.parse(decodeURIComponent(jsonData));
  if (data.known && data.unknown);
  userDict.addKnownWords(data.known);
  userDict.addUnknownWords(data.unknown);
  userDict.save();
  console.log("导入成功！");
  showUploader.value = false;
  updateDictsLen();
}
</script>

<template>
  <h1>{{ msg }}</h1>
  <div>
    <button v-if="!showUploader" @click="showUploader = true">导入词表</button>
    <Uploader
      v-if="showUploader"
      @submit="addWordsFromJson"
      @cancel="showUploader = false"
    />
    <a download="myDict.json" :href="downloadLink">
      <button>导出词表</button>
    </a>
  </div>
  <div>
    <a href="#/me/word-list?q=known">我的熟词</a> (共{{ dictsLen.known }}个)
    <hr />
  </div>
  <div>
    <a href="#/me/word-list?q=unknown">我的生词</a> (共{{ dictsLen.unknown }}个)
    <hr />
  </div>
</template>

<style scoped></style>
