import { ref } from "vue";

export function useOrderSelector() {
  const selectedOrder = ref("createdAtDescending");
  const orderOptions = [
    {
      label: "日期降序",
      value: "createdAtDescending",
    },
    {
      label: "日期升序",
      value: "createdAtAscending",
    },
    {
      label: "词频重要性排序",
      value: "freqScoreDescending",
    },
    {
      label: "总字数降序",
      value: "totalWordsDescending",
    },
    {
      label: "总字数升序",
      value: "totalWordsAscending",
    },
  ];

  return { selectedOrder, orderOptions };
}
