<template>
  <div class="article-management">
    <div class="page-header">
      <h1>文章管理</h1>
      <el-button type="primary" :icon="Plus" @click="handleCreate">
        新建文章
      </el-button>
    </div>

    <!-- 搜索和筛选 -->
    <el-card class="filter-card" shadow="never">
      <el-form :model="filterForm" inline>
        <el-form-item label="文章标题">
          <el-input v-model="filterForm.title" placeholder="请输入文章标题" clearable style="width: 200px;" />
        </el-form-item>

        <el-form-item label="文章分类">
          <el-select v-model="filterForm.category" placeholder="请选择分类" clearable>
            <el-option v-for="category in categories" :key="category.value" :label="category.label"
              :value="category.value" />
          </el-select>
        </el-form-item>

        <el-form-item label="发布状态">
          <el-select v-model="filterForm.status" placeholder="请选择状态" clearable>
            <el-option label="已发布" value="published" />
            <el-option label="草稿" value="draft" />
          </el-select>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" :icon="Search" @click="handleSearch">
            搜索
          </el-button>
          <el-button :icon="Refresh" @click="handleReset">
            重置
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <!-- 文章列表 -->
    <el-card class="table-card" shadow="never">
      <el-table :data="articleList" style="width: 100%">
        <el-table-column type="selection" width="55" />

        <el-table-column prop="title" label="文章标题" min-width="200">
          <template #default="{ row }">
            <div class="article-title-cell">
              <span class="title-text">{{ row.title }}</span>
              <el-tag v-if="row.isTop" type="danger" size="small">置顶</el-tag>
            </div>
          </template>
        </el-table-column>

        <el-table-column prop="category" label="分类" width="120" />

        <el-table-column prop="author" label="作者" width="120" />

        <el-table-column prop="publishTime" label="发布时间" width="180" />

        <el-table-column prop="views" label="阅读量" width="100" align="center" />

        <el-table-column prop="likes" label="点赞数" width="100" align="center" />

        <el-table-column label="状态" width="100" align="center">
          <template #default="{ row }">
            <el-tag :type="row.status === 'published' ? 'success' : ''">
              {{ row.status === 'published' ? '已发布' : '草稿' }}
            </el-tag>
          </template>
        </el-table-column>

        <el-table-column label="操作" width="200" fixed="right">
          <template #default="{ row }">
            <el-button type="primary" link size="small" @click="handleEdit(row)">
              编辑
            </el-button>
            <el-button type="success" link size="small" @click="handleView(row)">
              查看
            </el-button>
            <el-button type="danger" link size="small" @click="handleDelete(row)">
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页 -->
      <div class="pagination-container">
        <el-pagination v-model:current-page="pagination.current" v-model:page-size="pagination.size"
          :page-sizes="[10, 20, 50, 100]" :total="pagination.total" layout="total, sizes, prev, pager, next, jumper"
          @size-change="handleSizeChange" @current-change="handleCurrentChange" />
      </div>
    </el-card>
  </div>
</template>

<script setup>
  import { ref, reactive } from 'vue'
  import { ElMessage, ElMessageBox } from 'element-plus'
  import { Plus, Search, Refresh } from '@element-plus/icons-vue'

  // 筛选表单
  const filterForm = reactive({
    title: '',
    category: '',
    status: ''
  })

  // 分类选项
  const categories = ref([
    { label: 'Vue.js', value: 'vue' },
    { label: 'React', value: 'react' },
    { label: 'JavaScript', value: 'javascript' },
    { label: 'TypeScript', value: 'typescript' },
    { label: 'Node.js', value: 'nodejs' }
  ])

  // 分页配置
  const pagination = reactive({
    current: 1,
    size: 10,
    total: 50
  })

  // 文章列表数据
  const articleList = ref([
    {
      id: 1,
      title: 'Vue 3 组合式 API 深度解析',
      category: 'Vue.js',
      author: '技术达人',
      publishTime: '2024-01-15 10:30:00',
      views: 1234,
      likes: 89,
      status: 'published',
      isTop: true
    },
    {
      id: 2,
      title: 'React Hooks 最佳实践',
      category: 'React',
      author: '前端专家',
      publishTime: '2024-01-14 15:20:00',
      views: 856,
      likes: 45,
      status: 'published',
      isTop: false
    },
    {
      id: 3,
      title: 'TypeScript 类型编程指南',
      category: 'TypeScript',
      author: 'TS爱好者',
      publishTime: '2024-01-13 09:15:00',
      views: 942,
      likes: 67,
      status: 'published',
      isTop: false
    },
    {
      id: 4,
      title: 'Webpack 5 新特性解析',
      category: '构建工具',
      author: '构建专家',
      publishTime: '2024-01-12 14:40:00',
      views: 723,
      likes: 34,
      status: 'draft',
      isTop: false
    }
  ])

  // 搜索处理
  const handleSearch = () => {
    ElMessage.info('执行搜索操作')
    // 实际项目中这里会调用API
  }

  // 重置搜索
  const handleReset = () => {
    Object.assign(filterForm, {
      title: '',
      category: '',
      status: ''
    })
    ElMessage.info('已重置筛选条件')
  }

  // 新建文章
  const handleCreate = () => {
    ElMessage.info('跳转到新建文章页面')
  }

  // 编辑文章
  const handleEdit = (row) => {
    ElMessage.info(`编辑文章: ${row.title}`)
  }

  // 查看文章
  const handleView = (row) => {
    ElMessage.info(`查看文章: ${row.title}`)
  }

  // 删除文章
  const handleDelete = async (row) => {
    try {
      await ElMessageBox.confirm(
        `确定要删除文章 "${row.title}" 吗？`,
        '删除确认',
        {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }
      )

      ElMessage.success('删除成功')
      // 实际项目中这里会调用删除API
    } catch (error) {
      ElMessage.info('取消删除', error)
    }
  }

  // 分页大小改变
  const handleSizeChange = (size) => {
    pagination.size = size
    // 重新加载数据
  }

  // 当前页改变
  const handleCurrentChange = (current) => {
    pagination.current = current
    // 重新加载数据
  }
</script>

<style scoped>
  .article-management {
    padding: 20px;
  }

  .page-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  .page-header h1 {
    margin: 0;
    color: #303133;
  }

  .filter-card {
    margin-bottom: 20px;
    border-radius: 8px;
  }

  .table-card {
    border-radius: 8px;
  }

  .article-title-cell {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .title-text {
    flex: 1;
  }

  .pagination-container {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
  }
</style>
