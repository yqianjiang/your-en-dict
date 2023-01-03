<script setup>
import { ref } from "vue";

const emits = defineEmits(["submit", "cancel"]);

const textareaVal = ref("");

async function parseJsonFile(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.onload = (event) => resolve(event.target.result);
    fileReader.onerror = (error) => reject(error);
    fileReader.readAsText(file);
  });
}

const uploadFile = async (event) => {
  const file = event.target.files[0];
  const object = await parseJsonFile(file);
  textareaVal.value = object;
};

const submit = () => {
  emits("submit", textareaVal.value);
};
</script>

<template>
  <div class="uploader-wrap">
    <div>
      <input type="file" @change="uploadFile" />
    </div>
    <div>
      <div>
        <textarea cols="30" rows="10" v-model="textareaVal"></textarea>
      </div>
      <button @click="emits('cancel')">取消</button>
      <button @click="submit">确定添加</button>
    </div>
  </div>
</template>

<style scoped>
.uploader-wrap {
  border: solid 1px #fff;
  border-radius: 8px;
  padding: 8px;
  width: fit-content;
  margin: auto;
}
</style>
