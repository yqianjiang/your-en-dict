import LC from "./lc.js";

// 获取云端数据
async function fetchUserDict() {
  const query = new LC.Query("UserDict");

  // 获取当前用户的数据
  const user = LC.User.current();
  query.equalTo("user", user);

  try {
    const res = await query.find();
    return res.map((x) => x.toJSON());
  } catch (error) {
    console.log(error);
    return error;
  }
}

/**
 * 上传一批词到云端
 * @param {*} words
 */
async function uploadUserDict(words) {
  const UserDict = LC.Object.extend("UserDict");
  const userDict = new UserDict();

  // 关联用户
  const user = LC.User.current();
  userDict.set("user", user);

  userDict.set("unknown", words.unknown);
  userDict.set("known", words.known);

  try {
    await userDict.save();
    console.log("保存成功！");
  } catch (error) {
    console.log(error);
  }
}

/**
 * 把一批词更新同步到云端
 * @param {*} words
 */
async function updateUserDict(words, uuid) {
  const userDict = LC.Object.createWithoutData("UserDict", uuid);

  // 如果数组中不包含指定对象，则将该对象加入数组。对象的插入位置是随机的
  userDict.addUnique("unknown", words.unknown);
  userDict.addUnique("known", words.known);

  try {
    await userDict.save();
    console.log("更新成功！");
  } catch (error) {
    console.log(error);
  }
}

function getDiff(clouds, locals) {
  const toCloud = {};
  const toLocal = [];

  for (const local of locals) {
    toCloud[local] = 1;
  }
  for (const cloud of clouds) {
    if (!toCloud[cloud]) {
      toLocal.push(cloud);
    }
    delete toCloud[cloud];
  }

  return {
    toCloud: Object.keys(toCloud),
    toLocal,
  };
}

/**
 * 比较words和云端的数据，互相同步
 * @param {*} words
 */
export async function syncUserDict(words) {
  const res = await fetchUserDict();
  console.log(res);
  if (!res.length) {
    // 云端无数据，把本地数据提交到云端
    await uploadUserDict(words);
    return;
  }
  // 云端有数据，和云端的数据对比，更新本地 & 更新云端
  const known = getDiff(res[0].known, words.known);
  const unknown = getDiff(res[0].unknown, words.unknown);

  await updateUserDict(
    { known: known.toCloud, unknown: unknown.toCloud },
    res[0].objectId
  );

  return {
    known: known.toLocal,
    unknown: unknown.toLocal,
  };
}
