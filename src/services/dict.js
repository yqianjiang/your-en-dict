import LC from "./lc.js";

function format(_meaning) {
  for (const key in _meaning) {
    if (typeof _meaning[key] === "string") {
      _meaning[key] = _meaning[key].replaceAll("\\n", "\n");
    }
  }
  return _meaning;
}

export async function getTranslationBatch(params) {
  const query = new LC.Query("Dict");
  query.containedIn("word", params.words);
  if (params.onlyTranslation) {
    query.select(["translation", "word"]);
  }
  try {
    const res = await query.find();
    const resObj = {};
    for (const x of res) {
      resObj[x.attributes.word] = format(x.attributes);
    }
    return resObj;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function getTranslation(word, onlyTranslation) {
  const query = new LC.Query("Dict");
  query.equalTo("word", word);
  if (onlyTranslation) {
    query.select(["translation"]);
  }
  try {
    const res = await query.first();
    const _meaning = res?.attributes;
    format(_meaning || {});
    return _meaning;
  } catch (error) {
    console.log(error);
    return error;
  }
}

// async function test() {
//   // const res1 = await getTranslation("psychology", true);
//   // console.log("psychology", res1);
//   const res = await getTranslationBatch({
//     words: ["nonword", "apple"],
//     // onlyTranslation: true,
//   });
//   console.log("word list", res);
// }
