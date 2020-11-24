<template>
  <div class="detail-financial-info">
    <Title title="费用概览"></Title>
    <div class="financial-info">
      <el-row class="row">
        <el-col :span="12"
          ><span class="left">优惠总额：</span> <span class="text">￥6000.00</span></el-col
        >
        <el-col :span="12"
          ><span class="left">优惠券：</span> <span class="text">￥0.00</span></el-col
        >
      </el-row>
      <el-row class="row">
        <el-col :span="12"
          ><span class="left">折扣券：</span> <span class="text">￥0.00</span></el-col
        >
        <el-col :span="12"><span class="left">促销优惠：</span> <span class="text">-</span></el-col>
      </el-row>
      <el-row class="row">
        <el-col :span="12"
          ><span class="left">积分抵扣：</span> <span class="text">￥0.00</span></el-col
        >
        <el-col :span="12"
          ><span class="left">红包抵扣：</span> <span class="text">￥6000.00</span></el-col
        >
      </el-row>
      <el-row class="row">
        <el-col :span="12"
          ><span class="left">余额优惠：</span> <span class="text">￥0.00</span></el-col
        >
        <el-col :span="12"
          ><span class="left">商务优惠：</span> <span class="text">￥0.00</span></el-col
        >
      </el-row>
    </div>
    <Title title="合同申请记录"></Title>
    <div class="contract-table">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="合同信息" width="315">
          <template slot-scope="scope">
            <p><span>发票编号：</span><span class="blue">FP2020102900061</span></p>
            <p><span>发票编码：</span><span>3300183130</span></p>
            <p>
              <span>发票号码：</span><span>{{ scope.row.date }}</span>
            </p>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="甲方信息" width="275">
          <template slot-scope="scope">
            <p><span>甲方名称：</span><span class="blue">FP2020102900061</span></p>
            <p><span>联系人：</span><span>3300183130</span></p>
            <p>
              <span>联系电话：</span><span>{{ scope.row.date }}</span
              ><span class="iconfont iconview"></span>
            </p>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="商户" width="290">
          <p><span>签单主体：</span>顶呱呱跑的快科技有限公司</p>
        </el-table-column>
        <el-table-column prop="date" label="合同时间" width="255">
          <template slot-scope="scope">
            <p><span>创建时间：</span><span class="blue">2020-07-19 14:48:38</span></p>
            <p><span>申请时间：</span><span>2020-07-19 14:48:38</span></p>
            <p>
              <span>签署时间：</span><span>{{ scope.row.date }}</span
              ><span class="iconfont iconview"></span>
            </p>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="合同类型 " width="105"> </el-table-column>
        <el-table-column prop="name" label="合同状态"> </el-table-column>
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
    console.log('财务信息');
  },
  methods: {},
};
</script>
<style lang="scss">
.detail-financial-info {
}
</style>
<style lang="scss" scoped>
.detail-financial-info {
  .blue {
    color: #4974f5;
    cursor: pointer;
  }
  .financial-info {
    margin: 0 20px 0 20px;
    border-bottom: 1px solid #e5e5e5;
    .row {
      margin-bottom: 12px;
    }
    .row:last-child {
      margin-bottom: 16px;
    }
    .left {
      width: 116px;
      display: inline-block;
    }
    .note-left {
      display: inline-block;
      .note {
        margin-right: 73px;
      }
    }
    .text {
      font-size: 14px;
      color: #222;
    }
  }
  .contract-table {
    margin: 0 20px 16px 20px;
    .iconfont {
      color: #4974f5;
      margin-left: 8px;
      cursor: pointer;
    }
  }
}
</style>
