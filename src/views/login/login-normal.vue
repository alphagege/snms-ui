<template>
  <div class="page-login">
    <!-- 气泡层 -->
    <div class="page-login--layer page-login--layer-area">
      <ul class="circles">
        <li :key="n" v-for="n in 10"></li>
      </ul>
    </div>
    <div class="page-login--layer page-login--layer-time" flex="main:center cross:center">{{time}}</div>
    <div class="page-login--layer">
      <div class="page-login--content" flex="dir:top main:justify cross:center box:justify">
        <div class="page-login--content-header">
          <p class="page-login--content-header-motto">
            时间是一切财富中最宝贵的财富。
            <span>—— 德奥弗拉斯多</span>
          </p>
        </div>
        <div class="page-login--content-main" flex="dir:top main:center cross:center">
          <!-- logo -->
          <div class="bruce flex-ct-x">
            <h1 class="gradient-text">Coframe</h1>
          </div>
          <!-- <img class="page-login--logo" src="@/assets/logo@2x.png" /> -->
          <!-- 表单 -->
          <div class="page-login--form">
            <el-card shadow="never">
              <el-form
                :model="formLogin"
                :rules="rules"
                label-position="top"
                ref="loginForm"
                size="default"
              >
                <el-form-item prop="username">
                  <el-input
                    @keypress.enter.native="handleLogin"
                    autocomplete="off"
                    placeholder="用户名"
                    type="text"
                    v-model="formLogin.username"
                  >
                    <i class="el-icon-user" slot="prepend"></i>
                  </el-input>
                </el-form-item>
                <el-form-item prop="password">
                  <el-input
                    @keypress.enter.native="handleLogin"
                    autocomplete="off"
                    placeholder="密码"
                    type="password"
                    v-model="formLogin.password"
                  >
                    <i class="el-icon-lock" slot="prepend"></i>
                  </el-input>
                </el-form-item>
                <el-button
                  :loading="loading"
                  @click="handleLogin"
                  class="button-login"
                  size="default"
                  type="primary"
                >登录</el-button>
              </el-form>
            </el-card>
            <!-- <p class="page-login--options" flex="main:justify cross:center">
              <span>
                <d2-icon name="question-circle" />
                忘记密码
              </span>
              <span>注册用户</span>
            </p>-->
          </div>
        </div>
        <div class="page-login--content-footer">
          <p class="page-login--content-footer-options">
            <a href="#">帮助</a>
            <a href="#">隐私</a>
            <a href="#">条款</a>
          </p>
          <p class="page-login--content-footer-copyright">2020 coframe Projects 普元信息技术股份有限公司</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import qs from 'qs'
import { login } from '@/api/login.js'
export default {
  data () {
    return {
      // 时间定时器
      timeInterval: null,
      // 背景时间
      time: dayjs().format('HH:mm:ss'),
      loading: false,
      // 表单
      formLogin: {
        username: 'R411',
        password: '000000'
      },
      // 校验
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  mounted () {
    this.timeInterval = setInterval(() => {
      this.refreshTime()
    }, 1000)
  },
  beforeDestroy () {
    clearInterval(this.timeInterval)
  },
  methods: {
    /**
     *  @description 刷新当前时间方法
    */
    refreshTime () {
      this.time = dayjs().format('HH:mm:ss')
    },

    /**
     *  @description 提交登陆表单
    */
    handleLogin () {
      this.$refs.loginForm.validate(async valid => {
        if (valid) {
          this.loading = true
          login(qs.stringify(this.formLogin)).then(response => {
            if (response.status === 200) {
              this.$message({
                message: '登录成功!',
                type: 'success'
              })
              this.loading = false
              this.$router.push({ path: '/' })
            }
          }).catch(e => {
            this.$message({
              message: '登录失败!',
              type: 'error'
            })
            this.loading = false
          })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.page-login {
  @extend %unable-select;
  $backgroundColor: #f0f2f5;
  background-color: $backgroundColor;
  height: 100%;
  position: relative;
  // 层
  .page-login--layer {
    @extend %full;
    overflow: auto;
  }
  .page-login--layer-area {
    overflow: hidden;
  }
  // 时间
  .page-login--layer-time {
    font-size: 30em;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.03);
    overflow: hidden;
  }
  // 登陆页面控件的容器
  .page-login--content {
    height: 100%;
    min-height: 500px;
  }
  // header
  .page-login--content-header {
    padding: 1.5em 0;
    .page-login--content-header-motto {
      margin: 0px;
      padding: 0px;
      color: $color-text-normal;
      text-align: center;
      font-size: 12px;
      span {
        color: $color-text-sub;
      }
    }
  }
  // main
  .page-login--logo {
    width: 240px;
    margin-bottom: 2em;
    margin-top: -2em;
  }
  // 登录表单
  .page-login--form {
    width: 280px;
    // 卡片
    .el-card {
      margin-bottom: 15px;
    }
    // 登录按钮
    .button-login {
      width: 100%;
    }
    // 输入框左边的图表区域缩窄
    .el-input-group__prepend {
      padding: 0px 14px;
    }
    .login-code {
      height: 40px - 2px;
      display: block;
      margin: 0px -20px;
      border-top-right-radius: 2px;
      border-bottom-right-radius: 2px;
    }
    // 登陆选项
    .page-login--options {
      margin: 0px;
      padding: 0px;
      font-size: 14px;
      color: $color-primary;
      margin-bottom: 15px;
      font-weight: bold;
    }
    .page-login--quick {
      width: 100%;
    }
  }
  // footer
  .page-login--content-footer {
    padding: 1.5em 0;
    .page-login--content-footer-options {
      padding: 0px;
      margin: 0px;
      margin-bottom: 10px;
      font-size: 14px;
      text-align: center;
      a {
        color: $color-text-normal;
        margin: 0 1.5em;
      }
    }
    .page-login--content-footer-copyright {
      padding: 0px;
      margin: 0px;
      font-size: 12px;
      color: $color-text-normal;
      a {
        color: $color-text-normal;
      }
    }
  }
  // 背景
  .circles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    li {
      position: absolute;
      display: block;
      list-style: none;
      width: 20px;
      height: 20px;
      background: #fff;
      animation: animate 25s linear infinite;
      bottom: -200px;
      @keyframes animate {
        0% {
          transform: translateY(0) rotate(0deg);
          opacity: 1;
          border-radius: 0;
        }
        100% {
          transform: translateY(-1000px) rotate(720deg);
          opacity: 0;
          border-radius: 50%;
        }
      }
      &:nth-child(1) {
        left: 15%;
        width: 80px;
        height: 80px;
        animation-delay: 0s;
      }
      &:nth-child(2) {
        left: 5%;
        width: 20px;
        height: 20px;
        animation-delay: 2s;
        animation-duration: 12s;
      }
      &:nth-child(3) {
        left: 70%;
        width: 20px;
        height: 20px;
        animation-delay: 4s;
      }
      &:nth-child(4) {
        left: 40%;
        width: 60px;
        height: 60px;
        animation-delay: 0s;
        animation-duration: 18s;
      }
      &:nth-child(5) {
        left: 65%;
        width: 20px;
        height: 20px;
        animation-delay: 0s;
      }
      &:nth-child(6) {
        left: 75%;
        width: 150px;
        height: 150px;
        animation-delay: 3s;
      }
      &:nth-child(7) {
        left: 35%;
        width: 200px;
        height: 200px;
        animation-delay: 7s;
      }
      &:nth-child(8) {
        left: 50%;
        width: 25px;
        height: 25px;
        animation-delay: 15s;
        animation-duration: 45s;
      }
      &:nth-child(9) {
        left: 20%;
        width: 15px;
        height: 15px;
        animation-delay: 2s;
        animation-duration: 35s;
      }
      &:nth-child(10) {
        left: 85%;
        width: 150px;
        height: 150px;
        animation-delay: 0s;
        animation-duration: 11s;
      }
    }
  }
}
</style>
