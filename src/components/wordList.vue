<script setup>
const props = defineProps({
  words: {
    type: Array,
  },
  wordDict: {
    type: Object,
    default: {},
  },
});
</script>

<template>
  <div class="word-box" v-for="word in props.words">
    <template v-if="props.wordDict[word]?.translation">
      <n-space size="small">
        <a>{{ word }}</a
        ><n-tag type="info" size="small">{{ props.wordDict[word]?.frq }}</n-tag
        ><template v-if="props.wordDict[word]?.tag"><n-tag size="small" v-for="tag in props.wordDict[word]?.tag?.split(' ')">{{
          tag
        }}</n-tag></template>
      </n-space>
      <div class="word-translation">
        {{ props.wordDict[word]?.translation }}
      </div>
    </template>
    <a v-else>{{ word }}</a>
    <!-- <button class="button-right" v-if="data.allowRemove">
      移到{{ type === "known" ? "生词" : "熟词" }}
    </button> -->
    <hr />
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
}
.button-right {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
</style>
