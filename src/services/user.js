import LC from "./lc.js";

async function register(params) {
  const user = new LC.User();

  user.setUsername(params.username);
  user.setPassword(params.password);
  // user.setEmail(params.email);
  // user.setMobilePhoneNumber(params.phone);

  // 设置其他属性的方法跟 AV.Object 一样
  user.set("gender", "secret");

  try {
    const userObj = await user.signUp();
    // 注册成功
    console.log(`注册成功。objectId：${userObj.id}`);
    return userObj;
  } catch (error) {
    // 注册失败（通常是因为用户名已被使用）
    console.log(`注册失败。error：${error}`);
    return error;
  }
}

export async function login(params) {
  try {
    const user = await LC.User.logIn(params.username, params.password);
    console.log("登录成功", user);
  } catch (error) {
    console.log(error);
  }
}

export function logout() {
  LC.User.logOut();
}

export function getCurrentUser() {
  return LC.User.current();
}
