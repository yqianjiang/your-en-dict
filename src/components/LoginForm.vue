<script setup>
import { reactive, ref } from "vue";
import { NForm, NFormItem, NModal, NCard, NButton, NSpace, NInput } from "naive-ui";
import { login, logout, getCurrentUser } from "@/services/user.js";

const emit = defineEmits(["login", "logout"]);

const formRef = ref(null);
const showLoginModal = ref(false);
const loadingRef = ref(false);
const isLoggedIn = ref(false);
if (getCurrentUser()) {
  isLoggedIn.value = true;
}

const formValue = ref({
  username: "",
  password: "",
});
const rules = reactive({
  username: {
    required: true,
    message: "请输入用户名",
    trigger: "blur",
  },
  password: {
    required: true,
    message: "请输入密码",
    trigger: "blur",
  },
});

function onClickLogin(e) {
  e.preventDefault();
  loadingRef.value = true;
  formRef.value?.validate(async (errors) => {
    if (errors) {
      console.log(errors);
    }
    try {
      await login(formValue.value);
      emit("login");
      showLoginModal.value = false;
    } catch (error) {
      console.log(error);
    }
    loadingRef.value = false;
  });
}

function onLogout() {
  logout();
  isLoggedIn.value = false;
  emit("logout");
}
</script>

<template>
  <button v-if="isLoggedIn" @click="onLogout">登出</button>
  <button v-else @click="showLoginModal = true">登录</button>
  <NModal v-model:show="showLoginModal">
    <NCard role="dialog" style="max-width: 400px; margin: auto">
      <NForm
        ref="formRef"
        :label-width="80"
        :model="formValue"
        :rules="rules"
        size="medium"
      >
        <NFormItem label="用户名" path="username">
          <NInput
            v-model:value="formValue.username"
            placeholder="输入用户名"
          />
        </NFormItem>
        <NFormItem label="密码" path="password">
          <NInput
            v-model:value="formValue.password"
            type="password"
            placeholder="输入密码"
          />
        </NFormItem>
        <NFormItem>
          <NSpace>
            <NButton :loading="loadingRef" @click="onClickLogin"
              >登录</NButton
            >
            <NButton @click="showLoginModal = false">取消</NButton>
          </NSpace>
        </NFormItem>
      </NForm>
    </NCard>
  </NModal>
</template>
