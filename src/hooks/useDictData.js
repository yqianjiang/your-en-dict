import { getTranslation, getTranslationBatch } from "@/services/dict.js";
import { reactive, onBeforeUnmount } from "vue";
import { compare } from "@/utils/articles/counter.js";
import { userDict } from "@/utils/dict/userDict.js";

export const useDictData = (wordsUnique) => {
  const data = reactive({
    knownWord: [],
    unseenWord: [],
    unknownWord: [],
    translations: {},
  });

  const updateUserDict = () => {
    userDict.addKnownWords([...data.knownWord, ...data.unseenWord]);
    userDict.addUnknownWords(data.unknownWord);
    userDict.save();
    data.unseenWord = [];

    // console.log(data);
    // console.log(userDict.unknownWords);
    // console.log(userDict.knownWords);
  };

  function onRemove(type, word) {
    if (type === "unknown") {
      data.knownWord.push(word);
      data.unknownWord = data.unknownWord.filter((x) => x !== word);
      // 熟词不用显示翻译了
      delete data.translations[word];
    } else if (type === "known") {
      data.unknownWord.push(word);
      data.knownWord = data.knownWord.filter((x) => x !== word);
      // 生词需要增加翻译
      _findWordTrans(word);
    } else {
      // unseen, 暂时移到生词...
      data.unknownWord.push(word);
      data.unseenWord = data.unseenWord.filter((x) => x !== word);
    }
  }

  const toggleTrans = (token) => {
    if (token in data.translations) {
      delete data.translations[token];
    } else {
      _findWordTrans(token);
    }
  };

  const _findWordTrans = async (words) => {
    if (typeof words === "string") {
      const trans = await getTranslation(words);
      data.translations[words] = trans;
      console.log(trans);
    } else {
      const trans = await getTranslationBatch({ words });
      Object.assign(data.translations, trans);
      console.log(trans);
    }
  };

  onBeforeUnmount(() => {
    // userDict.addSeenWords(article.wordsFreq);
    userDict.save();
  });

  const _initUserData = () => {
    // 更新data
    const { known, unknown, unseen } = compare(
      wordsUnique,
      userDict.knownWords,
      userDict.unknownWords
    );
    data.unknownWord = unknown;
    data.unseenWord = unseen;
    data.knownWord = known;
    toggleTrans([...data.unknownWord, ...data.unseenWord]);
  };
  _initUserData(wordsUnique);

  return { data, toggleTrans, updateUserDict, onRemove };
};
