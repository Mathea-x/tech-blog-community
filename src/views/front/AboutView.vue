<template>
  <div class="about">
    <el-container>
      <el-main>
        <el-card class="about-card">
          <h1>关于 TechBlog Community</h1>
          <div class="about-content">
            <p>TechBlog Community 是一个专注于技术分享和交流的社区平台。</p>

            <h2>我们的使命</h2>
            <p>为开发者提供一个高质量的技术内容分享平台，促进技术交流和知识传播。</p>

            <h2>主要功能</h2>
            <ul>
              <li>📝 技术文章发布和阅读</li>
              <li>🏷️ 文章分类和标签管理</li>
              <li>💬 评论和互动交流</li>
              <li>📊 数据统计和分析</li>
              <li>🎨 响应式设计，支持多设备</li>
            </ul>

            <h2>技术栈</h2>
            <el-row :gutter="20">
              <el-col :span="12">
                <h3>前端</h3>
                <ul>
                  <li>Vue 3 - 渐进式 JavaScript 框架</li>
                  <li>Vite - 下一代前端构建工具</li>
                  <li>Element Plus - 桌面端组件库</li>
                  <li>Vue Router - 官方路由管理器</li>
                  <li>Pinia - 状态管理库</li>
                </ul>
              </el-col>
              <el-col :span="12">
                <h3>工具 & 部署</h3>
                <ul>
                  <li>ESLint - 代码质量检查</li>
                  <li>Prettier - 代码格式化</li>
                  <li>Git - 版本控制</li>
                  <li>Vercel - 部署平台</li>
                </ul>
              </el-col>
            </el-row>
          </div>
        </el-card>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
  // 关于页面逻辑
</script>

<style scoped>
  .about {
    max-width: 1000px;
    margin: 0 auto;
  }

  .about-card {
    padding: 30px;
  }

  .about-content h1 {
    text-align: center;
    margin-bottom: 30px;
    color: #333;
  }

  .about-content h2 {
    color: #409eff;
    margin: 30px 0 15px 0;
    border-bottom: 2px solid #f0f0f0;
    padding-bottom: 8px;
  }

  .about-content h3 {
    color: #666;
    margin: 20px 0 10px 0;
  }

  .about-content ul {
    padding-left: 20px;
  }

  .about-content li {
    margin-bottom: 8px;
    line-height: 1.6;
  }
</style>
