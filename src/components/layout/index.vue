<template>
  <div id="layout">
    <el-container>
      <el-header v-if="!mainApp">
        <div class="header">
          <div class="header-lf">
            <div class="title">
              <img src="../../assets/images/logo.png" />
              薯片运营后台
            </div>
            <!-- <MenuNav /> -->
          </div>
          <div class="header-rt">
            <User />
          </div>
        </div>
      </el-header>
      <el-container>
        <el-aside class="sp-aside" v-if="!mainApp">
          <SliderNav />
        </el-aside>
        <el-main :class="{ 'el-main': !mainApp, 'el-mains': mainApp }">
          <!-- 第一列栅格布局 -->
          <!-- 第二列布局 -->
          <el-row>
            <el-col :span="24" class="col3" :style="{ marginTop: mainApp ? 0 : '40px' }">
              <div class="router-view">
                <router-view />
              </div>
            </el-col>
          </el-row>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import SliderNav from 'components/layout/SliderNav';
import User from 'components/layout/User';
export default {
  name: 'Default',
  components: {
    SliderNav,
    User,
  },
  computed: {
    mainApp() {
      const __mainApp__ = window.__INDEPENDENT__;
      if (__mainApp__) {
        return false;
      }
      return true;
    },
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const params = { authId: '7715741018907525120' };
      this.list = await getList(params);
    },
  },
};
</script>
<style lang="scss" scoped>
#layout {
  height: 100vh;
  padding: 0;
  .el-header {
    background-color: #545c64;
    padding: 0 15px;
  }
  .sp-aside {
    width: 200px;
  }
  .el-main {
    padding: 16px;
    padding-top: 0;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    height: 60px;
    background-color: #545c64;
    &-lf {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: row;
      .title {
        height: 60px;
        width: 200px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-size: 20px;
        font-weight: bold;
        color: #fff;
        img {
          margin-right: 10px;
        }
      }
    }
  }
}
.main-con {
  background-color: #fff;
}
.el-main {
  background-color: #f5f5f5;
}
.col1 {
  background-color: #f5f5f5;
  height: 40px;
  position: absolute;
  width: calc(100vw - 220px);
  right: 0;
  top: 0;
  z-index: 999;
}
.col3 {
  /* background-color: #fff; */
  margin-top: 40px;
}
.router-view {
  height: calc(100vh - 116px);
  overflow: auto;
}
</style>
