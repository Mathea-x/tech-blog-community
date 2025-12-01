<template>
  <div class="dashboard">
    <h1 class="dashboard-title">仪表盘</h1>

    <!-- 统计卡片 -->
    <el-row :gutter="20" class="stats-cards">
      <!-- 文章总数 -->
      <el-col :span="6">
        <el-card class="stat-card" shadow="hover">
          <div class="stat-content">
            <div class="stat-icon" style="background: #409eff;">
              <el-icon>
                <Document />
              </el-icon>
            </div>
            <div class="stat-info">
              <div class="stat-value">128</div>
              <div class="stat-label">文章总数</div>
            </div>
          </div>
        </el-card>
      </el-col>

      <!-- 用户数量 -->
      <el-col :span="6">
        <el-card class="stat-card" shadow="hover">
          <div class="stat-content">
            <div class="stat-icon" style="background: #67c23a;">
              <el-icon>
                <User />
              </el-icon>
            </div>
            <div class="stat-info">
              <div class="stat-value">1,024</div>
              <div class="stat-label">用户数量</div>
            </div>
          </div>
        </el-card>
      </el-col>

      <!-- 评论数量 -->
      <el-col :span="6">
        <el-card class="stat-card" shadow="hover">
          <div class="stat-content">
            <div class="stat-icon" style="background: #e6a23c;">
              <el-icon>
                <ChatDotRound />
              </el-icon>
            </div>
            <div class="stat-info">
              <div class="stat-value">568</div>
              <div class="stat-label">评论数量</div>
            </div>
          </div>
        </el-card>
      </el-col>

      <!-- 访问总量 -->
      <el-col :span="6">
        <el-card class="stat-card" shadow="hover">
          <div class="stat-content">
            <div class="stat-icon" style="background: #f56c6c;">
              <el-icon>
                <View />
              </el-icon>
            </div>
            <div class="stat-info">
              <div class="stat-value">12,456</div>
              <div class="stat-label">访问总量</div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <!-- 图表区域 -->
    <el-row :gutter="20" class="chart-area">
      <!-- 发布趋势 -->
      <el-col :span="16">
        <el-card class="chart-card" shadow="never">
          <template #header>
            <h3>文章发布趋势</h3>
          </template>
          <div class="chart-placeholder">
            <p>📊 这里将集成 ECharts 图表</p>
            <p>显示最近30天的文章发布趋势</p>
          </div>
        </el-card>
      </el-col>

      <!-- 文章分类分布 -->
      <el-col :span="8">
        <el-card class="chart-card" shadow="never">
          <template #header>
            <h3>文章分类分布</h3>
          </template>
          <div class="chart-placeholder">
            <p>📈 这里将显示饼图</p>
            <p>展示不同分类的文章数量占比</p>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <!-- 最近文章 -->
    <el-card class="recent-articles" shadow="never">
      <!-- 顶部 -->
      <template #header>
        <h3>最近发布的文章</h3>
      </template>
      
      <!-- 表格 -->
      <el-table :data="recentArticles" style="width: 100%">
        <el-table-column prop="title" label="文章标题" min-width="200" />
        <el-table-column prop="author" label="作者" width="120" />
        <el-table-column prop="category" label="分类" width="120" />
        <el-table-column prop="publishTime" label="发布时间" width="180" />
        <el-table-column prop="views" label="阅读量" width="100" align="center" />
        <el-table-column label="状态" width="100" align="center">
          <template #default="{ row }">
            <el-tag :type="row.status === 'published' ? 'success' : 'warning'">
              {{ row.status === 'published' ? '已发布' : '草稿' }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="120" align="center">
          <template #default>
            <el-button type="primary" link>编辑</el-button>
            <el-button type="danger" link>删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import { Document, User, ChatDotRound, View } from '@element-plus/icons-vue'

  const recentArticles = ref([
    {
      title: 'Vue 3 组合式 API 深度解析',
      author: '技术达人',
      category: 'Vue.js',
      publishTime: '2024-01-15 10:30:00',
      views: 1234,
      status: 'published'
    },
    {
      title: 'React Hooks 最佳实践',
      author: '前端专家',
      category: 'React',
      publishTime: '2024-01-14 15:20:00',
      views: 856,
      status: 'published'
    },
    {
      title: 'TypeScript 类型编程指南',
      author: 'TS爱好者',
      category: 'TypeScript',
      publishTime: '2024-01-13 09:15:00',
      views: 942,
      status: 'published'
    },
    {
      title: 'Webpack 5 新特性解析',
      author: '构建专家',
      category: '构建工具',
      publishTime: '2024-01-12 14:40:00',
      views: 723,
      status: 'draft'
    }
  ])
</script>

<style scoped>
  .dashboard {
    padding: 20px;
  }

  .dashboard-title {
    margin-bottom: 24px;
    color: #303133;
    font-size: 1.5rem;
  }

  .stats-cards {
    margin-bottom: 24px;
  }

  .stat-card {
    border-radius: 8px;
  }

  .stat-content {
    display: flex;
    align-items: center;
  }

  .stat-icon {
    width: 60px;
    height: 60px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 16px;
  }

  .stat-icon .el-icon {
    font-size: 24px;
    color: white;
  }

  .stat-value {
    font-size: 1.5rem;
    font-weight: bold;
    color: #303133;
    margin-bottom: 4px;
  }

  .stat-label {
    color: #909399;
    font-size: 0.9rem;
  }

  .chart-area {
    margin-bottom: 24px;
  }

  .chart-card {
    border-radius: 8px;
  }

  .chart-placeholder {
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #909399;
    text-align: center;
  }

  .chart-placeholder p {
    margin: 8px 0;
  }

  .recent-articles {
    border-radius: 8px;
  }
</style>
