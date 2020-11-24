<template>
  <el-dropdown @command="menuClick">
    <div class="user-con">
      <img src="../../assets/images/avatar.jpeg" alt="" class="avatar" />
      <a class="ant-dropdown-link user-name"> 小瓜仔 </a>
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item command="1">
        <el-switch v-model="limitWidthStatus" active-text="响应式"> </el-switch>
      </el-dropdown-item>
      <el-dropdown-item command="1"> <i class="el-icon-user"></i>个人信息 </el-dropdown-item>
      <el-dropdown-item command="2"> <i class="el-icon-lock"></i>修改密码 </el-dropdown-item>
      <el-dropdown-item command="3"> <i class="el-icon-switch-button"></i>退出 </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapState, mapMutations } = createNamespacedHelpers('order');
export default {
  name: 'User',
  props: ['isEixt'],
  data() {
    return {
      limitWidthStatus: false,
    };
  },
  computed: {
    ...mapState(['isResponse']),
  },
  watch: {
    limitWidthStatus(val) {
      this.SET_isResponse(val);
    },
  },
  methods: {
    ...mapMutations(['SET_isResponse']),
    eixt() {
      sessionStorage.clear();
      localStorage.clear();
      this.$router.replace({ path: '/login' });
    },
    menuClick(command) {
      if (command == 3) {
        this.eixt();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.user-con {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  color: #fff;
  cursor: pointer;
  .avatar {
    width: 45px;
    height: 45px;
    border-radius: 22.5px;
  }
  .user-name {
    color: #fff;
    margin-left: 10px;
  }
  .line {
    border-top: 1px solid #f5f5f5;
  }
}
</style>
