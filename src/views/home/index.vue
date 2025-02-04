<template>
  <div class="home-container">
    {{ name }}
    <h1>123123</h1>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const name = ref('homeView')

</script>

<style lang="less" scoped>
.home-container {
  color: pink;
}
</style>