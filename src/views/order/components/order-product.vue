<template>
  <div>
    <div class="single-order" v-for="(childItem, childIndex) in orderList" :key="childIndex">
      <!-- S 订单头信息 -->
      <div class="order-status">
        <el-row class="row">
          <el-col :span="6"
            ><span class="info"
              >订单信息：<el-button type="danger" size="mini" plain>未付款</el-button
              ><el-button type="info" size="mini" plain>服务订单</el-button></span
            ></el-col
          >
          <el-col :span="4">
            <span class="d-no"><span class="blue">D4892237489</span></span>
          </el-col>
          <el-col :span="5">
            <span class="ht-no"><span class="blue">HT8493284390</span></span>
          </el-col>
          <el-col :span="8">
            <span class="subject">
              <tooltip
                class="blue subject-text"
                refName="subject-text"
                content="四川顶泰律师四川顶泰律事务asfdasdfasdf1111所四四川顶泰律师四川顶泰律事务asfdasdfasdf1111所四四川顶泰律师四川顶泰律事务asfdasdfasdf1111所四四川顶泰律师四川顶泰律事务asfdasdfasdf1111所四四川顶泰律师四川顶泰律事务asfdasdfasdf1111所四四川顶泰律师四川顶泰律事务asfdasdfasdf1111所四"
              ></tooltip>
            </span>
          </el-col>
          <el-col :span="1">
            <span class="blue" @click="detail">详情</span>
          </el-col>
        </el-row>
      </div>
      <!-- E 订单头信息 -->

      <!-- S 订单体信息 -->
      <order-body :data="childItem"> </order-body>
      <!-- E 订单体信息 -->
    </div>
  </div>
</template>

<script>
import OrderBody from './order-body';
import tooltip from 'components/tooltip.vue';

export default {
  props: {
    orderList: {
      type: Array,
      defulat: [],
    },
  },
  components: { OrderBody, tooltip },

  data() {
    return {};
  },

  computed: {},

  methods: {
    detail() {
      this.$router.push({ path: '/order/detail', query: { id: '2' } });
    },
  },
};
</script>
<style lang="scss" scoped>
.order-status {
  background: #f2f2f2;
  color: #666;
  box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.1);
  padding: 15px 16px;
  .row {
    display: flex;
    align-items: center;
    .el-col-6 {
      width: 25.752%;
    }
    .el-col-4 {
      width: 16.31%;
    }
    .el-col-5 {
      width: 17.705%;
    }
    .el-col-8 {
      width: 35.194%;
    }
  }
  .el-button--mini {
    padding: 4px 6px;
  }
  .el-button--info.is-plain {
    color: #fff;
    background: #bfbfbf;
    border-radius: 2px;
    border: none;
  }
  .blue {
    color: #4974f5;
    cursor: pointer;
  }
  > span {
    display: inline-block;
  }
  .info {
    width: 240px;
  }
  .d-no {
    width: 152px;
  }
  .ht-no {
    width: 165px;
  }
  .subject {
    width: 328px;
    line-height: 1;
    .subject-text {
      /* width: 176px; */
      margin-right: 162px;
    }
  }
}
</style>
