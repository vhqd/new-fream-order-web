<template>
  <div class="tab-container">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="订单信息" name="detail-order-info"></el-tab-pane>
      <el-tab-pane label="财务信息" name="detail-financial-info"></el-tab-pane>
      <el-tab-pane label="生产信息" name="detail-production-info"></el-tab-pane>
      <el-tab-pane label="订单跟踪" name="detail-tracking-info"></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  props: {
    query: {
      type: Object,
      defulat: {},
    },
  },
  components: {},

  data() {
    return { activeName: 'detail-order-info' };
  },

  computed: {},
  mounted() {
    this.activeName = this.$route.path.split('/')[3];
  },
  methods: {
    handleClick() {
      this.$router.push({
        path: '/order/detail/' + this.activeName,
        query: this.query,
      });
    },
  },
};
</script>
<style lang="scss">
.tab-container {
  margin: 0 20px;
  .el-tabs__header {
    margin: 0;
  }
  .el-tabs__item {
    font-weight: bold;
  }
  .el-tabs__nav-wrap::after {
    height: 1px;
  }
}
</style>
<style lang="scss" scoped></style>
