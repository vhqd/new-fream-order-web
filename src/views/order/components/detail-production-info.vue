<template>
  <div class="detail-production-info">
    <Title title="生产单列表"></Title>
    <div class="invoice-table">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="name" label="生产单编号" width="145"> </el-table-column>
        <el-table-column prop="date" label="状态" width="105"> </el-table-column>
        <el-table-column prop="name" label="办理商户" width="120"> </el-table-column>
        <el-table-column prop="name" label="产品信息" width="120">
          <template slot-scope="scope">
            <p>{{ scope.row.name }}</p>
            <p>{{ scope.row.date }}</p>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="产品金额（元）" width="145"> </el-table-column>
        <el-table-column prop="name" label="优惠总金额（元）" width="145"> </el-table-column>
        <el-table-column prop="name" label="实付金额（元）" width="145"> </el-table-column>
        <el-table-column prop="name" label="退款金额（元）" width="145"> </el-table-column>
        <el-table-column prop="name" label="状态"> </el-table-column>
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
  mounted() {},
  methods: {},
};
</script>
<style lang="scss">
.detail-production-info {
}
</style>
<style lang="scss" scoped>
.detail-production-info {
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
  .invoice-table {
    margin: 0 20px 16px 20px;
  }
}
</style>
