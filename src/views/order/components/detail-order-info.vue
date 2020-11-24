<template>
  <div class="detail-order-info">
    <Title title="订单信息"></Title>
    <div class="order-info">
      <el-row class="row">
        <el-col :span="12"
          ><span class="left">服务类型：</span> <span class="text">服务订单</span></el-col
        >
        <el-col :span="12"
          ><span class="left">签单主体：</span> <span class="blue">四川顶泰律师事务所</span></el-col
        >
      </el-row>
      <el-row class="row">
        <el-col :span="12"
          ><span class="left">订单来源：</span> <span class="text">企大顺</span></el-col
        >
        <el-col :span="12"><span class="left">合同编号：</span> <span class="text">-</span></el-col>
      </el-row>
      <el-row class="row">
        <el-col :span="12"
          ><span class="left">下单方式：</span> <span class="text">推单</span></el-col
        >
        <el-col :span="12"
          ><span class="left">产品合计金额：</span> <span class="text">￥6000.00</span></el-col
        >
      </el-row>
      <el-row class="row">
        <el-col :span="12"
          ><span class="left">签单人员：</span>
          <span class="text">李尔王39990888 (四川xxx信息有限公司)</span></el-col
        >
        <el-col :span="12"
          ><span class="left">优惠总金额：</span> <span class="text">￥0.00</span></el-col
        >
      </el-row>
      <el-row class="row">
        <el-col :span="12"
          ><span class="left">用户名称：</span> <span class="blue">陈鹏</span></el-col
        >
        <el-col :span="12"
          ><span class="left">订单金额：</span> <span class="text">￥6000.00</span></el-col
        >
      </el-row>
      <el-row class="row">
        <el-col :span="12"
          ><span class="left">用户账号：</span> <span class="text">186****3111</span
          ><span class="iconfont iconview"></span
        ></el-col>
        <el-col :span="12"
          ><span class="left">已付金额：</span> <span class="text">￥0.00</span></el-col
        >
      </el-row>
      <el-row class="row">
        <el-col :span="12"
          ><span class="left">下单区域：</span> <span class="text">陈鹏</span></el-col
        >
        <el-col :span="12"
          ><span class="left">待付金额：</span> <span class="text">￥6000.00</span></el-col
        >
      </el-row>
      <el-row class="row">
        <el-col :span="12"
          ><span class="left">下单时间：</span>
          <span class="text">2020-07-19 14:48:38</span></el-col
        >
        <el-col :span="12"><span class="left">完成时间：</span> <span class="text">-</span></el-col>
      </el-row>
      <el-row class="row">
        <el-col :span="24"><span class="left">付款时间：</span><span class="text">-</span></el-col>
      </el-row>
      <el-row class="row">
        <el-col :span="24">
          <span class="note-left">
            <span class="note">备注：</span>
            <span class="text"
              >客户下单的时候写的备注信息客户下单的时候写的备注信息客户下单的时候写的备注信息客户下单的时候写的备注信息客户下单的时候写的备注信息客户下单的时候写的备注信息</span
            >
          </span>
        </el-col>
      </el-row>
    </div>
    <Title title="订单产品"></Title>
    <div class="product-table">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="产品编号" width="145"> </el-table-column>
        <el-table-column prop="name" label="产品信息" width="175"> </el-table-column>
        <el-table-column prop="name" label="产品地区  " width="95"> </el-table-column>
        <el-table-column prop="date" label="数量" width="80"> </el-table-column>
        <el-table-column prop="name" label="折扣券" width="90"> </el-table-column>
        <el-table-column prop="name" label="促销优惠" width="105"> </el-table-column>
        <el-table-column prop="date" label="积分抵扣" width="102"> </el-table-column>
        <el-table-column prop="name" label="红包抵扣"> </el-table-column>
        <el-table-column prop="name" label="余额优惠"> </el-table-column>
        <el-table-column prop="date" label="产品编号"> </el-table-column>
        <el-table-column prop="name" label="商务优惠"> </el-table-column>
        <el-table-column prop="address" label="小计（元）" width="100 "> </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import Title from 'views/order/components/title';
export default {
  components: { Title },

  data() {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '-￥0.00',
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '-￥0.00',
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '-￥0.00',
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '-￥0.00',
        },
      ],
    };
  },

  computed: {},
  mounted() {
    console.log('订单信息');
  },
  methods: {},
};
</script>
<style lang="scss">
.detail-order-info {
}
</style>
<style lang="scss" scoped>
.detail-order-info {
  .blue {
    color: #4974f5;
    cursor: pointer;
  }
  .order-info {
    margin: 0 20px 0 20px;
    border-bottom: 1px solid #e5e5e5;
    .row {
      margin-bottom: 12px;
      .iconfont {
        color: #4974f5;
        margin-left: 8px;
        cursor: pointer;
      }
    }
    .row:last-child {
      margin-bottom: 16px;
    }
    .left {
      width: 116px;
      display: inline-block;
    }
    .note-left {
      display: flex;
      .note {
        display: inline-block;
        flex: 0 0 116px;
      }
    }
    .text {
      font-size: 14px;
      color: #222;
    }
  }
  .product-table {
    margin: 0 20px 16px 20px;
  }
}
</style>
