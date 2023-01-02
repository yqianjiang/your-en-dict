<script setup>
import { ref, reactive } from "vue";
import { userDict } from "@/utils/dict/userDict.js";
import { compare } from "@/utils/articles/counter.js";
import { getCurrentUser } from "@/services/user.js";
import { syncUserDict } from "@/services/userDict.js";
import { NButton, NTabs, NTabPane } from "naive-ui";
import Uploader from "@/components/uploader.vue";
import LoginForm from "@/components/LoginForm.vue";
import Popup from "@/components/popup.vue";
import WordList from "@/components/wordList.vue";

const msg = ref("Me");
const showUploader = ref(false);
const showUploader2 = ref(false);
const loadingRef = ref(false);
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

const isLoggedIn = ref(false);
if (getCurrentUser()) {
  isLoggedIn.value = true;
}

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
  if (data.known && data.unknown) {
    userDict.addKnownWords(data.known);
    userDict.addUnknownWords(data.unknown);
    userDict.save();
    console.log("导入成功！");
    updateDictsLen();
  }
  showUploader.value = false;
}
function addTargetWords(jsonData) {
  if (typeof jsonData === 'string') {
    try {
      jsonData = jsonData.trim().split('\n');
    } catch (error) {
      console.log('文本格式需要为每行一个单词')
    }
  } else {
    try {
      jsonData = JSON.parse(jsonData);
    } catch (error) {
      console.log(error);
    }
  }
  userDict.targetWords = jsonData;
  userDict.save();
  showUploader2.value = false;
  updateDictsLen();
}
async function syncDict() {
  loadingRef.value = true;
  const data = await syncUserDict({
    known: userDict.knownWords,
    unknown: userDict.unknownWords,
  });
  if (data) {
    console.log("从云端下载：", data);
    userDict.addKnownWords(data.known);
    userDict.addUnknownWords(data.unknown);
    userDict.save();
    console.log("同步成功！");
    updateDictsLen();
  }
  loadingRef.value = false;
}
</script>

<template>
  <h1>{{ msg }}</h1>
  <span v-if="isLoggedIn">
    <n-button :loading="loadingRef" @click="syncDict">云端同步</n-button>
  </span>
  <LoginForm @login="isLoggedIn = true" @logout="isLoggedIn = false" />
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
    <Popup btnText="目标词表">
      <template #header>
        目标词表
      </template>
      <n-tabs type="segment">
        <n-tab-pane name="0" :tab="`生词 (${targetWords.unknown.length})`">
          <WordList :words="targetWords.unknown" />
        </n-tab-pane>
        <n-tab-pane
          name="1"
          :tab="`未标记 (${targetWords.unseen.length})`"
        >
          <WordList :words="targetWords.unseen" />
        </n-tab-pane>
        <n-tab-pane name="2" :tab="`熟词 (${targetWords.known.length})`">
          <WordList :words="targetWords.known" />
        </n-tab-pane>
      </n-tabs>
    </Popup>
    <div>(共{{ dictsLen.target }}个)</div>
    <div>
      ({{ targetWords.unseen.length }}未标记，已标记掌握{{
        (
          (targetWords.known.length /
            (targetWords.known.length + targetWords.unknown.length)) *
          100
        ).toFixed(2)
      }}%)
    </div>
  </div>
</template>

<style scoped></style>
