<script setup>
import { NSpace, NTag, NButton } from 'naive-ui';
const props = defineProps({
  words: {
    type: Array,
  },
  wordDict: {
    type: Object,
    default: {},
  },
  showTranslations: {
    type: Boolean,
    default: true,
  },
  allowRemove: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(["remove"]);
function onRemove(word) {
  emits("remove", word);
}
</script>

<template>
  <div class="word-box" v-for="word in props.words">
    <template v-if="props.wordDict[word]?.translation">
      <n-space size="small">
        <a>{{ word }}</a
        ><n-tag type="info" size="small">{{ props.wordDict[word]?.frq }}</n-tag
        ><template v-if="props.wordDict[word]?.tag"
          ><n-tag
            size="small"
            v-for="tag in props.wordDict[word]?.tag?.split(' ')"
            >{{ tag }}</n-tag
          ></template
        >
      </n-space>
      <div class="word-translation" v-show="props.showTranslations">
        {{ props.wordDict[word]?.translation }}
      </div>
    </template>
    <div v-else class="single-word">
      <a>{{ word }}</a>
    </div>
    <n-button
      size="small"
      type="error"
      secondary
      class="button-right"
      v-if="props.allowRemove"
      @click="onRemove(word)"
    >
      移除
    </n-button>
  </div>
</template>

<style scoped>
.n-space {
  align-items: center;
  margin-bottom: 8px;
}
.word-translation {
  white-space: pre-line;
}
.word-box {
  position: relative;
  border-bottom: solid 1px gray;
  padding: 8px 0;
}
.button-right {
  position: absolute;
  right: 0;
  top: 4px;
}
</style>
