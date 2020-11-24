<template>
  <div
    class="detail-container"
    :class="{ 'is-limit-width': !$store.state.order.isResponse }"
  >
    <!-- S 订单进度 -->
    <div class="progress-status">
      <steps></steps>
    </div>
    <!-- E 订单进度 -->
    <div class="content">
      <div class="info">
        <span>订单编号: <span class="no">C2011212000001</span></span>
        <span class="one"
          >订单状态：<el-button type="danger" size="mini" plain
            >未付款</el-button
          ></span
        ><span class="one"
          >支付状态：<el-button type="danger" size="mini" plain
            >未付款</el-button
          ></span
        >
      </div>

      <!-- S 订单状态 -->
      <detail-tab :query="$route.query"></detail-tab>
      <!-- E 订单状态 -->

      <!-- S 订单详情-->
      <!-- 订单信息(detail-order-info)
            财务信息(detail-financial-info)
            生产信息(detail-production-info)
            基本信息(detail-base-info)
            底单信息(detail-atTheEndOfSingleInfo)
            备注&记录(detail-remarks-record) -->
      <router-view />
      <!-- E 订单详情-->
    </div>
  </div>
</template>

<script>
import Steps from './components/detail-steps';
import DetailTab from './components/detail-tab';
export default {
  components: { Steps, DetailTab },

  data() {
    return {};
  },

  computed: {},
  mounted() {},
  methods: {},
};
</script>
<style lang="scss">
.detail-container {
  .el-button--mini {
    padding: 3px 6px;
  }
  .el-table th {
    padding: 11.9px 0;
    font-weight: bold;
  }
}
</style>
<style lang="scss" scoped>
.detail-container {
  .progress-status {
    background: #fff;
    overflow: hidden;
    min-height: 90px;
    margin-bottom: 16px;
    box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.1);
  }
  .content {
    background: #fff;
    box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.1);
    .info {
      height: 48px;
      display: flex;
      padding: 0 20px;
      color: #999;
      align-items: center;
      border-bottom: 1px solid #e5e5e5;
      .no {
        color: #222;
        font-weight: bold;
      }
      > span:not(:first-child) {
        margin-left: 24px;
      }
    }
  }
}
.is-limit-width {
  width: 1004px;
}
</style>
