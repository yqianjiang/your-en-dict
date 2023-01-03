<script setup>
import { ref, reactive } from "vue";
import { NTabPane, NTabs, NSelect, NSpace, NButton } from "naive-ui";
import Popup from "@/components/Popup.vue";
import WordList from "@/components/WordList.vue";

import { sortWordsOptions } from "@/utils/dict/sort.js";

const { data, onRemove } = defineProps({
  data: {
    type: Object,
  },
  onRemove: {
    type: Function,
  },
});
const wordsOrder = ref(sortWordsOptions[0].value);
const mode = reactive({
  allowRemove: false,
});
</script>

<template>
  <Popup btnText="查看词表">
    <template #header>
      <NSpace>
        词表
        <NSelect
          v-model:value="wordsOrder"
          :options="sortWordsOptions"
          placeholder="排序方式"
        />
        <NButton @click="mode.allowRemove = !mode.allowRemove">
          {{ mode.allowRemove ? "取消" : "" }}编辑
        </NButton>
      </NSpace>
    </template>
    <NTabs type="segment">
      <NTabPane name="0" :tab="`生词 (共${data.unknownWord.length}个)`">
        <WordList
          :words="data.unknownWord"
          :wordDict="data.translations"
          :selectedOrder="wordsOrder"
          :allowRemove="mode.allowRemove"
          @remove="(word) => onRemove('unknown', word)"
        />
      </NTabPane>
      <NTabPane name="1" :tab="`未标记词 (共${data.unseenWord.length}个)`">
        <WordList
          :words="data.unseenWord"
          :wordDict="data.translations"
          :selectedOrder="wordsOrder"
          :allowRemove="mode.allowRemove"
          @remove="(word) => onRemove('unseen', word)"
        />
      </NTabPane>
      <NTabPane name="2" :tab="`熟词 (共${data.knownWord.length}个)`">
        <WordList
          :words="data.knownWord"
          :wordDict="data.translations"
          :selectedOrder="wordsOrder"
          :allowRemove="mode.allowRemove"
          @remove="(word) => onRemove('known', word)"
        />
      </NTabPane>
    </NTabs>
  </Popup>
</template>
