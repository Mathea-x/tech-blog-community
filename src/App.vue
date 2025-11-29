<template>
  <div id="app">
    <el-container>
      <el-header class="app-header">
        <h1>TechBlog Community</h1>
        <el-button type="primary" :icon="Search">测试按钮</el-button>
      </el-header>

      <el-main>
        <router-view />
      </el-main>

      <el-footer class="app-footer">
        <p>&copy; 2024 TechBlog Community. All rights reserved.</p>
      </el-footer>
    </el-container>
  </div>
</template>

<script setup>
  // 这里会自动导入 Search 图标，因为我们在 vite.config.js 中配置了自动导入
</script>

<style scoped>
  .app-header {
    background-color: #2c3e50;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  }

  .app-header h1 {
    margin: 0;
    font-size: 24px;
  }

  .app-footer {
    background-color: #f8f9fa;
    text-align: center;
    padding: 20px;
    margin-top: auto;
  }
</style>
