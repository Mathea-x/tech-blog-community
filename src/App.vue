<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script setup>
  // 这里会自动导入 Search 图标，因为我们在 vite.config.js 中配置了自动导入
  // 应用入口，所有逻辑都在路由和组件中处理
</script>

<style scoped>
  /* 全局样式已经在 main.js 中引入 */
</style>
