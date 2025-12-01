<template>
  <el-container class="admin-layout">
    <!-- 侧边栏 -->
    <el-aside :width="sidebarWidth" class="admin-sidebar">
      <div class="sidebar-logo">
        <h2>TechBlog Admin</h2>
      </div>

      <el-menu :default-active="activeMenu" router class="sidebar-menu" :collapse="isCollapse"
        background-color="#304156" text-color="#bfcbd9" active-text-color="#409eff">
        <el-menu-item index="/admin/dashboard">
          <el-icon>
            <DataLine />
          </el-icon>
          <span>仪表盘</span>
        </el-menu-item>

        <el-menu-item index="/admin/articles">
          <el-icon>
            <Document />
          </el-icon>
          <span>文章管理</span>
        </el-menu-item>

        <el-sub-menu index="content">
          <template #title>
            <el-icon>
              <Folder />
            </el-icon>
            <span>内容管理</span>
          </template>
          <el-menu-item index="/admin/categories">分类管理</el-menu-item>
          <el-menu-item index="/admin/tags">标签管理</el-menu-item>
          <el-menu-item index="/admin/comments">评论管理</el-menu-item>
        </el-sub-menu>

        <el-menu-item index="/admin/users">
          <el-icon>
            <User />
          </el-icon>
          <span>用户管理</span>
        </el-menu-item>

        <el-menu-item index="/admin/settings">
          <el-icon>
            <Setting />
          </el-icon>
          <span>系统设置</span>
        </el-menu-item>
      </el-menu>
    </el-aside>

    <el-container>
      <!-- 顶部栏 -->
      <el-header class="admin-header">
        <div class="header-left">
          <el-button :icon="isCollapse ? Expand : Fold" circle @click="toggleSidebar" />
          <el-breadcrumb separator="/" class="breadcrumb">
            <el-breadcrumb-item>后台管理</el-breadcrumb-item>
            <el-breadcrumb-item>{{ currentPageTitle }}</el-breadcrumb-item>
          </el-breadcrumb>
        </div>

        <div class="header-right">
          <el-dropdown @command="handleCommand">
            <span class="user-info">
              <el-avatar :size="32" :icon="User" />
              <span class="username">管理员</span>
              <el-icon>
                <ArrowDown />
              </el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="profile">个人资料</el-dropdown-item>
                <el-dropdown-item command="settings">系统设置</el-dropdown-item>
                <el-dropdown-item divided command="logout">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </el-header>

      <!-- 主要内容 -->
      <el-main class="admin-main">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
  import { ref, computed } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import { ElMessage, ElMessageBox } from 'element-plus'
  import {
    Fold,
    Expand,
    DataLine,
    Document,
    Folder,
    User,
    Setting,
    ArrowDown
  } from '@element-plus/icons-vue'

  const route = useRoute()
  const router = useRouter()

  // 侧边栏折叠状态
  const isCollapse = ref(false)

  // 计算侧边栏宽度
  const sidebarWidth = computed(() => isCollapse.value ? '64px' : '200px')

  // 当前激活的菜单
  const activeMenu = computed(() => route.path)

  // 当前页面标题
  const currentPageTitle = computed(() => {
    const titles = {
      '/admin/dashboard': '仪表盘',
      '/admin/articles': '文章管理',
      '/admin/categories': '分类管理',
      '/admin/tags': '标签管理',
      '/admin/comments': '评论管理',
      '/admin/users': '用户管理',
      '/admin/settings': '系统设置'
    }
    return titles[route.path] || '页面'
  })

  // 切换侧边栏
  const toggleSidebar = () => {
    isCollapse.value = !isCollapse.value
  }

  // 处理下拉菜单命令
  const handleCommand = async (command) => {
    switch (command) {
      case 'profile':
        ElMessage.info('打开个人资料')
        break
      case 'settings':
        ElMessage.info('打开系统设置')
        break
      case 'logout':
        await handleLogout()
        break
    }
  }

  // 退出登录
  const handleLogout = async () => {
    try {
      await ElMessageBox.confirm('确定要退出登录吗？', '退出确认', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })

      // 清除登录信息
      localStorage.removeItem('userInfo')
      ElMessage.success('退出成功')

      // 跳转到登录页
      router.push('/admin/login')
    } catch (error) {
      ElMessage.info('取消退出', error)
    }
  }
</script>

<style scoped>
  .admin-layout {
    height: 100vh;
  }

  .admin-sidebar {
    background-color: #304156;
    transition: width 0.3s;
  }

  .sidebar-logo {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #2b3848;
  }

  .sidebar-logo h2 {
    color: #fff;
    margin: 0;
    font-size: 1.2rem;
    white-space: nowrap;
  }

  .sidebar-menu {
    border: none;
  }

  .admin-header {
    background: #fff;
    border-bottom: 1px solid #e6e6e6;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  }

  .header-left {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .breadcrumb {
    margin-left: 10px;
  }

  .header-right {
    display: flex;
    align-items: center;
  }

  .user-info {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    padding: 8px 12px;
    border-radius: 4px;
    transition: background-color 0.3s;
  }

  .user-info:hover {
    background-color: #f5f7fa;
  }

  .username {
    font-weight: 500;
  }

  .admin-main {
    background: #f5f7fa;
    padding: 20px;
    overflow-y: auto;
  }
</style>
