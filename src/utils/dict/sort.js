export const sortWordsOptions = [
  {
    label: "加入时间倒序",
    value: "createdAtDescending",
  },
  {
    label: "加入时间顺序",
    value: "createdAtAscending",
  },
  {
    label: "词频从高到低",
    value: "frqAscending",
  },
  {
    label: "词频从低到高",
    value: "frqDescending",
  },
];

export const sortWords = (words, option, wordDict) => {
  const sortedWords = [];
  const res = [];
  if (option === "createdAtAscending") {
    return words;
  } else if (option === "createdAtDescending") {
    for (const word of words) {
      res.unshift(word);
    }
    return res;
  }

  // 剩下两种frq排序选项
  // 没有frq信息，frq排序无效
  if (!Object.values(wordDict)[0]?.frq) {
    return words;
  }

  for (const word of words) {
    const frq = wordDict[word]?.frq;
    if (frq) {
      sortedWords.push([frq, word]);
    } else {
      res.push(word);
    }
  }
  if (option === "frqDescending") {
    sortedWords.sort((a, b) => {
      return b[0] - a[0];
    });
  } else {
    sortedWords.sort((a, b) => {
      return a[0] - b[0];
    });
  }
  return [...sortedWords.map((x) => x[1]), ...res];
};
