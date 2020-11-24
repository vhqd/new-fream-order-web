<template>
  <div class="order-container">
    <div class="handel-container">
      <!-- S 订单操作按钮 -->
      <div class="handel-order">
        <el-button @click="closeOrder">关闭订单</el-button>
        <el-button>移交订单</el-button>
        <el-button>导出订单</el-button>
      </div>
      <!-- E 订单操作按钮 -->

      <!-- S 订单排序方式 -->
      <el-dropdown class="order-short" :hide-on-click="false">
        <span class="el-dropdown-link">
          排序方式<i class="el-icon-caret-bottom el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>下单时间</el-dropdown-item>
          <el-dropdown-item>付款时间</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <!-- E 订单排序方式 -->
    </div>
    <div class="order-table" v-loading="loading">
      <!-- S 表头 -->
      <span class="all-check">
        <el-checkbox-group @change="handleCheckAllChange" v-model="allCheck">
          <el-checkbox label="全选" name="type"></el-checkbox> </el-checkbox-group
      ></span>
      <!-- E 表头 -->

      <!-- S 客户单 -->
      <div v-for="(item, index) in orderList" :key="index" class="customer-container">
        <!-- S 客户单头信息 -->
        <div class="customer-info">
          <div class="infos">
            <el-row class="row">
              <el-col :span="1">
                <el-checkbox-group
                  class="order-check"
                  @change="handleCheck"
                  v-model="item.ischecked"
                >
                  <el-checkbox name="type"></el-checkbox>
                </el-checkbox-group>
              </el-col>
              <el-col :span="3">
                <p class="one">
                  客户单：<el-button type="danger" size="mini" plain>未付款</el-button>
                </p>
                <p class="one">
                  下单：<span class="origin-area"
                    ><tooltip refName="origin-area" content="推单/石家庄"></tooltip
                  ></span>
                </p>
              </el-col>
              <el-col :span="6">
                <p class="two"><span class="blue">KH930295050</span></p>
                <p class="two">
                  应付/已付：<span class="money"
                    ><tooltip refName="money" content="￥20000.00/￥20000000"></tooltip>
                  </span>
                </p>
              </el-col>
              <el-col :span="7">
                <p class="three">
                  用户：<span class="blue">张三丰</span>/182******22<span
                    class="iconfont iconview"
                  ></span>
                </p>

                <p class="three">下单时间：2020-07-19 12:12:21</p>
              </el-col>
              <el-col :span="8">
                <p class="four">
                  规划师：<span class="user-name"
                    ><tooltip refName="user-name" content="张文文文文文文"></tooltip></span
                  >/
                  <span class="user-num"
                    ><tooltip refName="user-num" content="3030174"></tooltip
                  ></span>
                </p>
                <p class="four">付款时间：2020-07-19 12:12:21</p>
              </el-col>
              <el-col :span="1">
                <div class="handle">
                  <p class="blue handle-btn">关闭</p>
                  <p class="blue handle-btn" @click="detail">详情</p>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
        <!-- E 客户单头信息 -->

        <!-- S 订单信息 -->
        <order-product :orderList="item.orderList"></order-product>
        <!-- E 订单信息 -->
      </div>
      <!-- E 客户单 -->
      <el-pagination
        class="pagination-container"
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[10, 20, 50, 100, 200]"
        :page-size="10"
        layout="total, prev, pager, next, sizes, jumper"
        :total="400"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import OrderProduct from './order-product';
import tooltip from 'components/tooltip.vue';

export default {
  name: 'TablelOrder',
  props: {
    //客户单数据
    orderList: {
      type: Array,
      defulat: [],
    },
  },
  components: { OrderProduct, tooltip },

  data() {
    return {
      loading: false,
      orderCheck: false,
      allCheck: false,
      currentPage4: 1,
    };
  },
  mounted() {},
  computed: {
    /**
     * @description 订单列表全部取消选中
     */
    allIsNotChecked() {
      return this.orderList.every((item) => {
        return item.ischecked === false;
      });
    },
    /**
     * @description 订单列表全部选中
     */
    checkAll() {
      return this.orderList.every((item) => {
        return item.ischecked === true;
      });
    },
    /**
     * @description 订单列表有一个没有选中
     */
    notCheck() {
      return this.orderList.some((element) => {
        return element.ischecked === false;
      });
    },
  },

  methods: {
    /**
     * @description 全选
     */
    handleCheckAllChange() {
      this.orderList.forEach((element) => {
        element.ischecked = this.allCheck;
      });
    },
    handleCheck() {
      this.changeCheckedStatus();
    },
    /**
     * @description 关闭订单
     */
    closeOrder() {
      this.$message('这是一条消息提示');
    },
    /**
     * @description 修改全选状态
     */
    changeCheckedStatus() {
      if (this.allIsNotChecked || this.notCheck) {
        this.allCheck = false;
      }
      if (this.checkAll) {
        this.allCheck = true;
      }
    },
    detail() {
      this.$router.push({ path: '/order/customer', query: { id: '2' } });
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
};
</script>
<style lang="scss" scoped>
.order-container {
  position: relative;
  .handel-container {
    width: 100%;
    margin: 16px 0 10px 0;
    display: inline-block;
    .handel-order {
      float: left;
    }
    .order-short {
      margin-top: 8px;
      float: right;
    }
  }
  .order-table {
    background: #ffffff;
    padding: 20px;
    box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.1);
    .el-button--mini {
      padding: 3px 6px;
    }
    .all-check {
      display: inline-block;
      min-width: 30px;
      margin-left: 16px;
    }
    .blue {
      color: #4974f5;
      cursor: pointer;
    }
    .customer-container {
      margin: 16px 0;
      box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.1);
    }
    .customer-info {
      padding: 16px;
      background: #f2faff;
      display: flex;
      justify-content: center;
      align-items: center;
      .order-check {
        height: 46px;
        margin-right: 20px;
        display: flex;
        align-items: center;
      }
      .handle {
        margin-right: 18px;
        .handle-btn {
          width: 30px;
        }
      }
      .infos {
        width: 100%;
        .iconfont {
          color: #4974f5;
          margin-left: 8px;
          cursor: pointer;
        }
        .row {
          display: flex;
          align-items: center;
          .el-col-1 {
            width: 3.8%;
          }
          .el-col-3 {
            width: 14.485%;
          }
          .el-col-6 {
            width: 24.142%;
          }
          .el-col-7 {
            width: 26.825%;
          }
          .el-col-8 {
            width: 25.752%;
          }
        }
        > span {
          color: #222222;
          display: inline-block;
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
        }
        .one {
          display: flex;
          width: 135px;
          .origin-area {
            width: 90px;
          }
        }
        .two {
          display: flex;
          width: 225px;
          > span {
            display: inline-block;
          }
          .money {
            width: 130px;
          }
        }
        .three {
          width: 250px;
        }
        .four {
          display: flex;
          width: 240px;
          > span {
            display: inline-block;
          }
          .user-name {
            width: 82px;
          }
          .user-num {
            width: 75px;
          }
        }
      }
    }
    .pagination-container {
      text-align: center;
    }
  }
}
</style>
