<script setup>
import { NTag } from "naive-ui";
import { computed } from "vue";
const { article } = defineProps({
  article: {
    type: Object,
  },
});
const stats = computed(() => {
  const nUnknown = article.unknown.length;
  const nUnseen = article.unseen.length;
  const nTotal = article.totalUniqueWords;
  const nUnknownTarget = article.unknownTargetWords.length;
  const nUnseenTarget = article.unseenTargetWords.length;
  return {
    unknownRatio: (((nUnknown + nUnseen) / nTotal) * 100).toFixed(2),
    targetRatio: ((article.targetWords.length / nTotal) * 100).toFixed(2),
    nUnknown,
    nUnseen,
    nTotal,
    nUnknownTarget,
    nUnseenTarget,
  };
});
</script>

<template>
  <div>
    <a :href="'#/reading/' + article.uuid">{{ article.title }}</a>
    <n-tag type="info" v-if="article.tag">
      {{ article.tag }}
    </n-tag>
    <div class="stats-info">
      {{ article.totalWords }}词
      <span :style="stats.nUnseen ? 'color: gray;' : ''">
        - {{ stats.unknownRatio }}% 生词 ({{ stats.nUnknown }})
        <small v-if="stats.nUnseen">({{ stats.nUnseen }}未标注)</small>
      </span>
    </div>
    <div class="stats-info">
      {{ stats.targetRatio }}%目标词({{ article.targetWords.length }})
      <small :style="stats.nUnseenTarget ? 'color: gray;' : ''">
        ({{ stats.nUnknownTarget }}生词<span v-if="stats.nUnseenTarget"
          >, {{ stats.nUnseenTarget }} 未标注)</span
        >
        <span v-else>)</span>
      </small>
    </div>
    <hr />
  </div>
</template>
