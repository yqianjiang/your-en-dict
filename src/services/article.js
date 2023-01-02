import LC from "./lc.js";

/**
 * 获取一页数据
 * @param {{tag: string; skip: number; batchSize: number}} params 查询条件，tag为文章标签，skip为从第几行开始，batchSize默认一次获取10条。
 * @returns
 */
export async function fetchArticleBatch(params) {
  const query = new LC.Query("Article");

  // 分类获取
  if (params.tag) {
    query.equalTo("tag", params.tag);
  }

  // 获取一页数据
  query.limit(params.batchSize || 10);
  query.skip(params.startIdx || 0); // 会消耗查询时间
  if (params.orderBy === "createdAtDescending") {
    query.addDescending("createdAt");
  }
  if (params.orderBy === "freqScoreDescending") {
    query.addDescending("freqScore");
  }
  if (params.orderBy === "totalWordsDescending") {
    query.addDescending("totalWords");
  }
  if (params.orderBy === "totalWordsAscending") {
    query.addAscending("totalWords");
  }

  try {
    const res = await query.find();
    return res.map((x) => x.toJSON());
  } catch (error) {
    console.log(error);
    return error;
  }
}

/**
 * 获取一篇文章
 * @param {*} uuid
 * @returns 文章相关信息的json
 */
export async function fetchArticle(uuid) {
  const query = new LC.Query("Article");
  try {
    const article = await query.get(uuid);
    return article?.toJSON();
  } catch (error) {
    console.log(error);
  }
}

/**
 * 新增一篇文章（往Article表新增一行数据）
 * @param {object} params 每个key:value是改行数据的字段和值
 */
export async function uploadArticle(params) {
  const Article = LC.Object.extend("Article");
  const article = new Article();

  // 关联用户
  const author = LC.User.current();
  article.set("author", author);

  for (const key in params) {
    article.set(key, params[key]);
  }

  try {
    await article.save();
    console.log("保存成功！");
  } catch (error) {
    console.log(error);
  }
}

/**
 * 更新一篇文章
 * @param {string} uuid
 * @param {object} params 每个key:value是要更新的字段及更新值
 */
export async function updateArticle(uuid, params) {
  const article = LC.Object.createWithoutData("Article", uuid);
  for (const key in params) {
    article.set(key, params[key]);
  }
  try {
    await article.save();
    console.log("更新成功！");
  } catch (error) {
    console.log(error);
  }
}

export async function delArticle(uuid) {}
