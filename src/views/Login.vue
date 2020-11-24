<template>
  <div class="login">
    <h3 class="title">
      欢迎使用<br />
      薯片后台管理系统
    </h3>
    <div class="form">
      <h4>登录</h4>
      <el-form :model="ruleForm" status-icon ref="ruleForm" class="demo-ruleForm">
        <el-form-item prop="account">
          <el-input
            type="text"
            size="small"
            placeholder="请输入账号"
            v-model="ruleForm.account"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password" style="margin-top: -10px">
          <el-input
            type="password"
            size="small"
            placeholder="请输入密码"
            v-model="ruleForm.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-button type="primary" class="btn" data-tid="login" size="small" @click="login"
          >登录</el-button
        >
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      ruleForm: {
        account: '',
        password: '',
      },
    };
  },
  methods: {
    login() {
      if (!this.ruleForm.account || !this.ruleForm.password) {
        this.$message({
          message: '请填写完整登录信息',
          type: 'warning',
        });
      } else {
        localStorage.setItem('token', '2141');
        localStorage.setItem('userId', '2144');
        this.$router.replace({ path: '/' });
      }
    },
  },
};
</script>

<style scoped lang="scss">
.login {
  display: flex;
  position: relative;
  width: 100%;
  height: 100vh;
  background: url('../assets/images/bg.png');
  background-size: cover;
  background-position: 50%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  .el-button {
    width: 100%;
  }
  .title {
    color: #409eff;
    font-size: 36px;
    line-height: 48px;
    letter-spacing: 2px;
    text-align: center;
    min-width: 250px;
    margin-left: 200px;
  }
  .form {
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.06);
    background-color: #fff;
    padding: 10px 40px 30px 40px;
    border-radius: 6px;
    min-width: 200px;
    margin-right: 200px;
    h4 {
      text-align: center;
      color: #409eff;
      font-size: 20px;
    }
    .input {
      width: 220px;
    }
    .btn {
      width: 100%;
    }
  }
}
</style>
