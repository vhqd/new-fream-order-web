<template>
  <el-container>
    <el-menu :default-openeds="['dashboard', 'user']">
      <el-submenu index="dashboard">
        <template slot="title"><i class="el-icon-s-data"></i>工作台</template>
        <el-menu-item index="dashboard">
          <router-link to="/dashboard" tag="div">工作台</router-link>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="user">
        <template slot="title"><i class="el-icon-user"></i>用户</template>
        <el-menu-item index="user">
          <router-link to="/user" tag="div">用户管理</router-link>
        </el-menu-item>
      </el-submenu>
    </el-menu>

    <el-container>
      <el-header>
        <!-- 引入图片的两种方式 -->
        <img :src="logo" />
        <img src="../../assets/images/logo.png" />
        <span>admin</span>
        <el-dropdown>
          <i class="el-icon-s-operation"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>登出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>

      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import logo from 'assets/images/logo.png';

export default {
  data() {
    return {
      logo,
    };
  },
};
</script>

<style lang="less">
html,
body,
#app,
.el-container,
.el-aside,
.el-menu {
  height: 100%;
}

.el-header {
  border-bottom: 1px solid #e6e6e6;
  line-height: 60px;
  text-align: right;

  &:hover {
    cursor: pointer;
  }

  svg {
    width: 24px;
    height: 24px;
  }

  img,
  svg {
    vertical-align: middle;
  }
}
</style>
