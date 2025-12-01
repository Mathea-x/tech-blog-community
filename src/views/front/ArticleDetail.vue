<template>
  <!-- 根页面 -->
  <div class="article-detail">
    <el-container>
      <el-main>
        <el-card class="article-card">
          <!-- 顶部 -->
          <template #header>
            <!-- 文章标题 -->
            <h1 class="article-title">{{ article.title }}</h1>

            <!-- 文章属性 -->
            <div class="article-meta">
              <span class="author">作者：{{ article.author }}</span>
              <span class="date">发布时间：{{ article.publishTime }}</span>
              <span class="views">阅读：{{ article.views }}</span>
            </div>

            <!-- 文章标签 -->
            <div class="article-tags">
              <el-tag v-for="tag in article.tags" :key="tag" type="primary" class="tag">
                {{ tag }}
              </el-tag>
            </div>
          </template>

          <!-- 文章内容 -->
          <div class="article-content">
            <p>这里是文章的详细内容...</p>
            <p>在实际开发中，这里会从后端获取真实的文章内容，支持 Markdown 渲染。</p>
            <!-- 后续会集成富文本编辑器内容 -->
          </div>

          <!-- 底栏 -->
          <template #footer>
            <!-- 操作栏 -->
            <div class="article-actions">
              <!-- 点赞 -->
              <el-button type="primary" :icon="Thumb">点赞 ({{ article.likes }})</el-button>

              <!-- 收藏 -->
              <el-button :icon="Star">收藏 ({{ article.collections }})</el-button>

              <!-- 分享 -->
              <el-button :icon="Share">分享</el-button>
            </div>
          </template>
        </el-card>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import { Thumb, Star, Share } from '@element-plus/icons-vue'

  const article = ref({
    title: 'Vue 3 组合式 API 深度解析',
    author: '技术达人',
    publishTime: '2024-01-15 10:30:00',
    views: 1234,
    likes: 89,
    collections: 45,
    tags: ['Vue.js', '前端', 'JavaScript']
  })
</script>

<style scoped>
  .article-detail {
    max-width: 1000px;
    margin: 0 auto;
  }

  .article-title {
    font-size: 2rem;
    margin-bottom: 15px;
    color: #333;
  }

  .article-meta {
    display: flex;
    gap: 20px;
    margin-bottom: 15px;
    font-size: 0.9rem;
    color: #666;
  }

  .article-tags {
    margin-bottom: 10px;
  }

  .tag {
    margin-right: 8px;
  }

  .article-content {
    line-height: 1.8;
    font-size: 1.1rem;
  }

  .article-content p {
    margin-bottom: 15px;
  }

  .article-actions {
    display: flex;
    gap: 10px;
  }
</style>
