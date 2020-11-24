<template>
  <div class="detail-tracking-info">
    <Title title="订单信息"></Title>
    <div class="invoice-table">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="name" label="发票号码" width="90"> </el-table-column>
        <el-table-column prop="name" label="产品信息" width="230">
          <template slot-scope="scope">
            <p>{{ scope.row.name }}</p>
            <p>{{ scope.row.date }}</p>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="状态" width="80"> </el-table-column>
        <el-table-column prop="name" label="办理商户" width="90"> </el-table-column>
        <el-table-column prop="name" label="产品金额（元）" width="130"> </el-table-column>
        <el-table-column prop="name" label="优惠总金额（元）" width="145"> </el-table-column>
        <el-table-column prop="name" label="实付金额（元）" width="130"> </el-table-column>
        <el-table-column prop="name" label="退款金额（元）"> </el-table-column>
        <el-table-column fixed="right" label="操作" align="center" width="120" type="expand">
          <template>
            <el-timeline>
              <el-timeline-item
                v-for="(activity, index) in activities"
                :key="index"
                :icon="activity.icon"
                :type="activity.type"
                :color="activity.color"
                :size="activity.size"
                :timestamp="activity.timestamp"
              >
                {{ activity.content }}
              </el-timeline-item>
            </el-timeline>
          </template>
        </el-table-column>
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
      activities: [
        {
          content: '支持使用图标',
          timestamp: '2018-04-12 20:46',
          size: 'large',
          type: 'primary',
          icon: 'el-icon-more',
        },
        {
          content: '支持自定义颜色',
          timestamp: '2018-04-03 20:46',
          color: '#67C239',
        },
        {
          content: '支持自定义尺寸',
          timestamp: '2018-04-03 20:46',
          size: 'large',
        },
        {
          content: '默认样式的节点',
          timestamp: '2018-04-03 20:46',
        },
      ],
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
  methods: {
    deleteRow(index, rows) {
      console.log(index, rows);
    },
  },
};
</script>
<style lang="scss">
.detail-tracking-info {
  .el-table th {
    padding: 1px 0;
    font-weight: bold;
  }
}
</style>
<style lang="scss" scoped>
.detail-tracking-info {
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
