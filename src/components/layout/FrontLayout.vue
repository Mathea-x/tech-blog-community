<template>
  <div class="front-layout">
    <!-- 顶部导航 -->
    <el-header class="front-header">
      <div class="header-content">
        <div class="logo">
          <h1>TechBlog Community</h1>
        </div>

        <el-menu :default-active="activeMenu" mode="horizontal" router class="nav-menu">
          <el-menu-item index="/">首页</el-menu-item>
          <el-menu-item index="/about">关于我们</el-menu-item>
        </el-menu>

        <div class="header-actions">
          <el-button type="primary" @click="goToAdmin">
            后台管理
          </el-button>
        </div>
      </div>
    </el-header>

    <!-- 主要内容 -->
    <main class="front-main">
      <router-view />
    </main>

    <!-- 底部 -->
    <el-footer class="front-footer">
      <div class="footer-content">
        <p>&copy; 2024 TechBlog Community. 所有权利保留。</p>
        <p>Built with Vue 3 & Element Plus</p>
      </div>
    </el-footer>
  </div>
</template>

<script setup>
  import { computed } from 'vue'
  import { useRoute, useRouter } from 'vue-router'

  const route = useRoute()
  const router = useRouter()

  const activeMenu = computed(() => route.path)

  const goToAdmin = () => {
    router.push('/admin/login')
  }
</script>

<style scoped>
  .front-layout {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .front-header {
    background: #fff;
    border-bottom: 1px solid #e6e6e6;
    padding: 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .header-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    height: 100%;
  }

  .logo h1 {
    margin: 0;
    font-size: 1.5rem;
    color: #2c3e50;
  }

  .nav-menu {
    border-bottom: none;
    flex: 1;
    justify-content: center;
  }

  .front-main {
    flex: 1;
    background: #f5f7fa;
  }

  .front-footer {
    background: #2c3e50;
    color: #fff;
    text-align: center;
    padding: 20px;
  }

  .footer-content p {
    margin: 5px 0;
  }
</style>
