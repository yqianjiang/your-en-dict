<script setup>
import { ref, reactive } from "vue";
import { userDict } from "@/utils/dict/userDict.js";
import { compare } from "@/utils/articles/counter";
import Uploader from "@/components/uploader.vue";
import Popup from "@/components/popup.vue";
import WordList from "@/components/wordList.vue";

const msg = ref("Me");
const showUploader = ref(false);
const showUploader2 = ref(false);
const targetWords = reactive({
  known: [],
  unknown: [],
  unseen: [],
});
const dictsLen = reactive({
  known: 0,
  unknown: 0,
  target: 0,
});

function updateRatios() {
  const { known, unknown, unseen } = compare(
    userDict.targetWords,
    userDict.knownWords,
    userDict.unknownWords
  );
  targetWords.unknown = unknown;
  targetWords.known = known;
  targetWords.unseen = unseen;
}

function updateDictsLen() {
  dictsLen.known = userDict.knownWords.length;
  dictsLen.unknown = userDict.unknownWords.length;
  dictsLen.target = userDict.targetWords.length;
  if (dictsLen.target) {
    updateRatios();
  }
}
updateDictsLen();

const downloadLink =
  "data:text/json;charset=utf-8," +
  encodeURIComponent(
    JSON.stringify({
      known: userDict.knownWords,
      unknown: userDict.unknownWords,
    })
  );

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
function addTargetWords(jsonData) {
  userDict.targetWords = JSON.parse(jsonData);
  userDict.save();
  showUploader2.value = false;
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
    <button v-if="!showUploader2" @click="showUploader2 = true">
      上传目标词表
    </button>
    <Uploader
      v-if="showUploader2"
      @submit="addTargetWords"
      @cancel="showUploader2 = false"
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
  <div v-if="dictsLen.target">
    <Popup btnText="目标词表" title="目标词表">
      <n-tabs type="segment">
        <n-tab-pane name="0" :tab="`生词 (共${targetWords.unknown.length}个)`">
          <WordList :words="targetWords.unknown" />
        </n-tab-pane>
        <n-tab-pane
          name="1"
          :tab="`未标记词 (共${targetWords.unseen.length}个)`"
        >
          <WordList :words="targetWords.unseen" />
        </n-tab-pane>
        <n-tab-pane name="2" :tab="`熟词 (共${targetWords.known.length}个)`">
          <WordList :words="targetWords.known" />
        </n-tab-pane>
      </n-tabs>
    </Popup>
  </div>
</template>

<style scoped></style>
