<template>
  <div class="login-container">
    {{ name }}
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const name = ref('登录')
import { useUserStore } from '@/store/user';
const userStore = useUserStore();
console.log(userStore);
</script>

<style lang="less" scoped>
.login-container {
  color: pink;
}
</style>