<template>
  <div class="login-container">
    <div class="login-background"></div>
    <div class="login-form-container">
      <el-card class="login-card" shadow="always">
        <!-- 顶部标题 -->
        <template #header>
          <h2 class="login-title">TechBlog Community</h2>
          <p class="login-subtitle">后台管理系统</p>
        </template>

        <!-- 登录输入表单 -->
        <el-form :model="loginForm" :rules="loginRules" ref="loginFormRef" @submit.prevent="handleLogin">
          <!-- 用户名 -->
          <el-form-item prop="username">
            <el-input v-model="loginForm.username" placeholder="请输入用户名" size="large" :prefix-icon="User" />
          </el-form-item>

          <!-- 密码 -->
          <el-form-item prop="password">
            <el-input v-model="loginForm.password" type="password" placeholder="请输入密码" size="large" :prefix-icon="Lock"
              show-password />
          </el-form-item>

          <!-- 登录按钮 -->
          <el-form-item>
            <el-button type="primary" size="large" :loading="loading" @click="handleLogin" style="width: 100%;">
              {{ loading ? '登录中...' : '登录' }}
            </el-button>
          </el-form-item>
        </el-form>

        <!-- 提示 -->
        <div class="login-tips">
          <p>提示：可以使用任意用户名和密码登录演示系统</p>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script setup>
  import { ref, reactive } from 'vue'
  import { useRouter } from 'vue-router'
  import { ElMessage } from 'element-plus'
  import { User, Lock } from '@element-plus/icons-vue'

  const router = useRouter()
  const loginFormRef = ref()
  const loading = ref(false)

  // 登录表单
  const loginForm = reactive({
    username: '',
    password: ''
  })

  // 验证规则
  const loginRules = {
    username: [
      { required: true, message: '请输入用户名', trigger: 'blur' },
      { min: 2, max: 20, message: '用户名长度在 2 到 20 个字符', trigger: 'blur' }
    ],
    password: [
      { required: true, message: '请输入密码', trigger: 'blur' },
      { min: 6, max: 20, message: '密码长度在 6 到 20 个字符', trigger: 'blur' }
    ]
  }

  // 登录操作
  const handleLogin = async () => {
    if (!loginFormRef.value) return

    const valid = await loginFormRef.value.validate()
    if (!valid) return

    loading.value = true

    // 模拟登录请求
    setTimeout(() => {
      loading.value = false

      // 在实际项目中，这里会调用登录接口
      // 现在我们模拟登录成功
      ElMessage.success('登录成功！')

      // 存储用户信息（后续会移到状态管理）
      localStorage.setItem('userInfo', JSON.stringify({
        username: loginForm.username,
        loginTime: new Date().toISOString()
      }))

      // 跳转到后台首页
      router.push('/admin/dashboard')
    }, 1000)
  }
</script>

<style scoped>
  .login-container {
    min-height: 100vh;
    display: flex;
    background: #f5f7fa;
  }

  .login-background {
    flex: 1;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  }

  .login-form-container {
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }

  .login-card {
    width: 100%;
    max-width: 360px;
  }

  .login-title {
    text-align: center;
    color: #303133;
    margin-bottom: 8px;
  }

  .login-subtitle {
    text-align: center;
    color: #909399;
    margin: 0;
  }

  .login-tips {
    margin-top: 20px;
    padding: 12px;
    background-color: #f4f4f5;
    border-radius: 4px;
    text-align: center;
  }

  .login-tips p {
    margin: 0;
    font-size: 0.85rem;
    color: #909399;
  }
</style>
