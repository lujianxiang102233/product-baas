<template>
  <div class="login">
    <div class="padding20 marginBottom20 login-input">
      <!-- <img src="../assets/images/logo_登录页logo.png" alt> -->
      <!-- <i class="marginBottom20 login-border"></i> -->
      <div class="marginBottom20 login-wel">欢迎来到</div>
      <h1 class="company-tit">增值云方案平台</h1>
      <el-form
        :model="form"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item prop="loginName" class="loginName">
          <el-input
            v-model.trim="form.loginName"
            placeholder="请输入用户名称"
            class="user"
          ></el-input>
          <i
            style="color: #ccc"
            v-show="form.loginName.length > 0"
            class="el-icon-circle-close"
            @click="clear"
          ></i>
        </el-form-item>
        <el-form-item prop="password" class="password">
          <el-input
            @keyup.enter.native="login('ruleForm')"
            v-model="form.password"
            placeholder="请输入登录密码"
            :clearable="true"
            class="psd"
            :type="cut"
          ></el-input>
          <span
            :class="{ show: isShow, hide: isHide }"
            v-show="form.password.length > 0"
            @click="pwsShow"
          ></span>
        </el-form-item>
        <el-form-item>
          <el-button
            class="login-btn"
            type="primary"
            style="width: 100%"
            @click="login('ruleForm')"
            :disabled="disabled"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
    <div class="alignCenter login-txt">
      copyright &#169; appropolis.com.cn, All Rights Reserved.
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShow: false,
      isHide: true,
      cut: 'password',
      form: {
        loginName: 'EX-LUJIANXIANG001',
        password: 'lujianxiang102233',
      },
      rules: {
        loginName: [
          { required: true, message: '请输入用户名称', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入登录密码', trigger: 'blur' },
        ],
      },
      code: {
        companyCode: 'CP01',
      },
      disabled: false,
    }
  },
  methods: {
    login(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          this.$cookie.set('token', 'token')
          sessionStorage.setItem('user', this.form.loginName)
          this.$router.push('/gaudMap')
        } else {
          return false
        }
      })
    },
    clear() {
      this.form.loginName = ''
    },
    pwsShow() {
      if (this.cut === 'password') {
        this.cut = ''
        this.isShow = true
        this.isHide = false
      } else {
        this.cut = 'password'
        this.isShow = false
        this.isHide = true
      }
    },
  },
}
</script>

<style lang="less">
.login {
  background: url(../assets/images/1.png);
  background-size: cover;
  height: 100%;
  overflow: hidden;
  position: relative;
  .login-input {
    height: 379;
    width: 444px;
    position: absolute;
    left: 50%;
    margin-left: -222px;
    top: 165px;
    background-color: #fff;
    text-align: center;
    .login-wel {
      font-size: 26px;
      color: #3e3f42;
    }
    .login-border {
      display: inline-block;
      width: 365px;
      margin: 20px 20px 40px 20px;
      height: 0;
      border-top: 1px solid #eaedf3;
    }
    .company-tit {
      font-size: 18px;
      color: #9ea0a5;
      font-weight: normal;
    }
    .el-form {
      width: 365px;
      margin: 30px auto;
      // background-size: cover;
      .el-form-item__content {
        margin-left: 0 !important;
        .el-input__inner {
          height: 40px;
          padding-left: 51px;
        }
      }
      .user {
        position: relative;
        &::before {
          width: 18px;
          height: 18px;
          content: '';
          background: url(../assets/images/copy.png);
          display: inline-block;
          position: absolute;
          top: 11px;
          left: 20px;
        }
      }
      .psd {
        position: relative;
        &::before {
          width: 16px;
          height: 18px;
          content: '';
          background: url(../assets/images/icon_sign_lock.png);
          display: inline-block;
          position: absolute;
          top: 11px;
          left: 20px;
        }
      }
      .el-button {
        height: 50px;
      }
      .loginName {
        position: relative;
        .el-icon-circle-close {
          position: absolute;
          top: 12px;
          right: 22px;
        }
      }
      .password {
        position: relative;
        .hide {
          position: absolute;
          top: 11px;
          right: 40px;
          background: url(../assets/images/untitled_89a26e01.svg) no-repeat;
          height: 14px;
          width: 21px;
        }
        .show {
          position: absolute;
          top: 11px;
          right: 40px;
          background: url(../assets/images/untitled_b4b45d06.svg) no-repeat;
          height: 19px;
          width: 21px;
        }
      }
      .login-btn {
        height: 40px;
        padding: 0;
        span {
          display: inline-block;
          height: 40px;
          line-height: 40px;
          font-weight: normal;
        }
      }
    }
  }
  .login-txt {
    width: 100%;
    color: #fff;
    font-size: 14px;
    position: absolute;
    top: 705px;
  }
}
</style>
