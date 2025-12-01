<template>
  <div class="home">
    <el-container>
      <!-- 顶部 -->
      <el-header class="home-header">
        <h1>欢迎来到 TechBlog Community</h1>
        <p>分享技术，交流思想，共同成长</p>
      </el-header>

      <!-- 主要内容 -->
      <el-main class="home-main">
        <el-row :gutter="20">
          <!-- 精选文章 -->
          <el-col :span="16">
            <div class="featured-articles">
              <h2>精选文章</h2>
              <el-card v-for="n in 3" :key="n" class="article-card" shadow="hover">
                <div class="article-header">
                  <h3>Vue 3 组合式 API 深度解析 {{ n }}</h3>
                  <el-tag type="primary">Vue.js</el-tag>
                </div>
                <p class="article-excerpt">
                  本文将深入探讨 Vue 3 组合式 API 的使用方法和最佳实践...
                </p>
                <div class="article-meta">
                  <span class="author">作者：技术达人</span>
                  <span class="date">2024-01-15</span>
                </div>
              </el-card>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="sidebar">
              <!-- 社区统计 -->
              <el-card class="stats-card">
                <h3>社区统计</h3>
                <div class="stat-item">
                  <span>文章总数</span>
                  <strong>128</strong>
                </div>
                <div class="stat-item">
                  <span>用户数量</span>
                  <strong>1,024</strong>
                </div>
                <div class="stat-item">
                  <span>今日访问</span>
                  <strong>256</strong>
                </div>
              </el-card>

              <!-- 热门标签 -->
              <el-card class="tags-card">
                <h3>热门标签</h3>
                <div class="tags">
                  <el-tag v-for="tag in tags" :key="tag" class="tag">
                    {{ tag }}
                  </el-tag>
                </div>
              </el-card>
            </div>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  const tags = ref(['Vue.js', 'React', 'JavaScript', 'TypeScript', 'Node.js', 'CSS', 'Webpack', '算法'])
</script>

<style scoped>
  .home-header {
    text-align: center;
    padding: 40px 0;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
  }

  .home-header h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
  }

  .home-header p {
    font-size: 1.2rem;
    opacity: 0.9;
  }

  .home-main {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }

  .article-card {
    margin-bottom: 20px;
    cursor: pointer;
    transition: transform 0.3s ease;
  }

  .article-card:hover {
    transform: translateY(-2px);
  }

  .article-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 10px;
  }

  .article-header h3 {
    margin: 0;
    flex: 1;
    margin-right: 15px;
  }

  .article-excerpt {
    color: #666;
    line-height: 1.6;
    margin-bottom: 15px;
  }

  .article-meta {
    display: flex;
    justify-content: space-between;
    font-size: 0.9rem;
    color: #999;
  }

  .stat-item {
    display: flex;
    justify-content: space-between;
    padding: 8px 0;
    border-bottom: 1px solid #f0f0f0;
  }

  .stat-item:last-child {
    border-bottom: none;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .tag {
    cursor: pointer;
  }

  .sidebar .el-card {
    margin-bottom: 20px;
  }
</style>
