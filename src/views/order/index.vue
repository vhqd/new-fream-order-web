<template>
  <div class="order-container" :class="{ 'is-limit-width': !isResponse }">
    <div class="order-status" ref="refOrderStatus" :class="{ 'full-screen': isResponse }">
      <!-- S 订单状态 -->
      <el-menu
        :default-active="activeTab"
        mode="horizontal"
        text-color="#222"
        active-text-color="#4974F5"
        @select="handleSelect"
      >
        <el-menu-item index="ALL">全部订单</el-menu-item>
        <el-menu-item index="UNPAID">未付款</el-menu-item>
        <el-menu-item index="PROGRESSING">处理中</el-menu-item>
        <el-menu-item index="COMPLETED">已完成</el-menu-item>
        <el-menu-item index="CANCELLED">已取消</el-menu-item>
      </el-menu>
      <!-- E 订单状态 -->

      <!-- S 过滤条件 -->
      <el-form :inline="true" :model="orderForm" class="form-inline form-base" size="medium">
        <el-form-item label="用户名称:">
          <el-input
            v-model="orderForm.userName"
            placeholder="请输入用户名称"
            maxLength="50"
          ></el-input>
        </el-form-item>
        <el-form-item label="用户电话:">
          <el-input
            v-model="orderForm.userPhone"
            placeholder="请输入电话"
            maxLength="11"
          ></el-input>
        </el-form-item>
        <el-form-item label="编号查询:">
          <el-input
            v-model="orderForm.orderSn"
            placeholder="客户单编号/订单编号"
            maxLength="50"
          ></el-input>
        </el-form-item>
        <el-form-item label="合同编号:">
          <el-input v-model="orderForm.contractNo" placeholder="合同编号" maxLength="50"></el-input>
        </el-form-item>
        <el-form-item label="产品类型:">
          <el-select v-model="orderForm.classifyId" placeholder="全部">
            <el-option
              v-for="(item, index) in prductType"
              :key="index"
              :label="item.name"
              :value="item.code"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          label="订单状态:"
          v-show="
            showFilter &&
            activeTabTemp != 'UNPAID' &&
            activeTabTemp != 'COMPLETED' &&
            activeTabTemp != 'CANCELLED'
          "
        >
          <el-select v-model="orderForm.order_status_no" placeholder="全部">
            <el-option
              v-for="(item, index) in orderStatus"
              :key="index"
              :label="item.name"
              :value="item.code"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="完成时间:" v-show="activeTabTemp === 'COMPLETED'">
          <el-date-picker
            v-model="orderForm.orderCompleteTime"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="选择日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item
          label="取消时间:"
          value-format="yyyy-MM-dd"
          v-show="activeTabTemp === 'CANCELLED'"
        >
          <el-date-picker v-model="orderForm.orderCancelTime" type="date" placeholder="选择日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="合同主体:" v-show="showFilter">
          <el-select v-model="orderForm.orderSplitSubjectId" placeholder="全部">
            <el-option
              v-for="(item, index) in contract"
              :key="index"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="下单区域:" v-show="showFilter">
          <el-select v-model="orderForm.orderArea" placeholder="全部">
            <el-option
              v-for="(item, index) in placingArea"
              :key="index"
              :label="item.name"
              :value="item.code"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="产品区域:" v-show="showFilter">
          <el-select v-model="orderForm.saleArea" placeholder="全部">
            <el-option
              v-for="(item, index) in productAreas"
              :key="index"
              :label="item.name"
              :value="item.code"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="下单时间:" v-show="showFilter">
          <el-date-picker
            v-model="orderForm.orderCreateTime"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="选择日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="付款时间:" v-show="showFilter">
          <el-date-picker
            v-model="orderForm.orderFirstPayTime"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="选择日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="签单人:" v-show="showFilter">
          <el-input v-model="orderForm.signer" placeholder="姓名/工号" maxLength="50"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询结果</el-button>
          <el-button @click="resetFilter">重置</el-button>
        </el-form-item>
      </el-form>
      <!-- E 过滤条件 -->

      <div class="line">
        <el-divider @click="showAll"
          >{{ filterText
          }}<i class="el-icon-d-arrow-left fix-down" :class="{ 'fix-up': showFilter }"></i
        ></el-divider>
      </div>
    </div>
    <!-- S 订单列表 -->
    <order-customer ref="refOrder" :orderList="cusOrderList"> </order-customer>
    <!-- E 订单列表 -->
  </div>
</template>

<script>
import { order, getList, getProductType } from 'api/order';
import orderCustomer from './components/order-customer';
import { animation } from 'utils/animation';
import throttle from 'utils/throttle';

export default {
  name: 'OrderList',
  components: {
    orderCustomer,
  },
  data() {
    return {
      filterText: '展开',
      showFilter: false, //是否展开查询条件
      singleLine: 52, //单行高
      notResponseHeight: 220, //固定宽度过滤条件动画基本高度
      isResponseHeight: 272, //响应式过滤条件动画基础高度
      heightTmp: 0, //记录上一次动画高度
      activeTab: 'ALL', //触发的订单状态tab
      activeTabTemp: 'ALL',
      timer: null,
      isFull: false,
      //过滤条件
      orderForm: {
        order_status_no: '', //订单状态编号 默认全部 未付款：UNPAID,进行中：PROGRESSING,已完成：COMPLETED,已取消：CANCELLED
        userName: '', //用户名称
        userPhone: '', //用户电话
        orderSn: '', //客户单编号/订单编号
        contractNo: '', //合同编号
        classifyId: '', //产品类型（产品分类+产品类型）
        signer: '', //签单人工号/姓名
        orderSplitSubjectId: '', //合同主体（拆单主体）
        orderArea: '', //下单区域（省+市）
        saleArea: '', //产品区域（省+市）
        orderCreateTime: '', //下单时间
        orderFirstPayTime: '', //付款时间
        orderCompleteTime: '', //完成时间（配合客户订单状态为已完成）
        orderCancelTime: '', //取消时间（配合客户订单状态为已取消）
      },
      page: { pageNo: 1, pageSize: 10 }, //分页参数
      cusOrderList: [], //订单列表
      orderStatus: [], //订单状态
      prductType: [], //产品类型
      contract: [], //合同主体
      placingArea: [], //下单区域
      productAreas: [], //产品区域
    };
  },
  mixins: [throttle],
  mounted() {
    this.isFull = this.$store.state.order.isResponse;
    this.getProductType();
    this.getList();
  },
  computed: {
    closeFitlterHeightNotFull() {
      return this.notResponseHeight + this.singleLine;
    },
    opendedFitlterHeightNotFull() {
      return this.notResponseHeight + 3 * this.singleLine;
    },
    closeFitlterHeightFull() {
      return this.isResponseHeight - this.singleLine;
    },
    isCompletedCancelled() {
      return this.activeTab == 'COMPLETED' || this.activeTab == 'CANCELLED';
    },
    isUnpaid() {
      return this.activeTab == 'UNPAID';
    },
    isResponse() {
      return this.$store.state.order.isResponse;
    },
  },
  watch: {
    //切换是否响应状态重置高度、展开收起文字和过滤条件状态
    isResponse() {
      this.showFilter = false;
      this.handelText();
      this.$refs.refOrderStatus.removeAttribute('style');
      this.setHeight();
    },
  },
  methods: {
    /**
     * @description 获取订单列表数据
     */
    async getList() {
      this.$refs.refOrder.loading = true;
      const params = { authId: '7715741018907525120' };
      let res = await getList(params);
      let result = this.HANDEL(res);
      if (result) {
        let cusOrderList = result.cusOrderList;
        cusOrderList.forEach((element) => {
          element.ischecked = false;
        });
        this.cusOrderList = cusOrderList;
        this.$refs.refOrder.loading = false;
      } else {
        this.$refs.refOrder.loading = false;
      }
    },

    /**
     * @description 获取产品类型
     */
    async getProductType() {
      let res = await getProductType();
      let result = this.HANDEL(res);
      if (result) {
        this.orderStatus = result['订单状态'];
        this.prductType = result['产品类型'];
        this.contract = result['合同主体'];
        this.placingArea = result['下单区域'];
        this.productAreas = result['产品区域'];
      }
    },

    /**
     * @description 展开过滤条件
     */
    showAll() {
      this.showFilter = !this.showFilter;
      this.handelText();
      this.setHeight();
      //收起更多过滤条件清空查询数据
      if (!this.showFilter) {
        this.clearMoreFilter();
      }
    },

    /**
     * @description 处理文字
     */
    handelText() {
      this.filterText = this.showFilter ? '收起' : '展开';
    },

    /**
     * @description 重置表单数据
     */
    resetFilter() {
      let orderForm = this.orderForm;
      for (const key in orderForm) {
        orderForm[key] = '';
      }
    },

    /**
     * @description 收起更多筛选条件数据时清空数据
     */
    clearMoreFilter() {
      this.orderForm.order_status_no = ''; //清空订单状态
      this.orderForm.orderSplitSubjectId = ''; //清空合同主体
      this.orderForm.orderArea = ''; //清空下单区域
      this.orderForm.saleArea = ''; //清空产品区域
      this.orderForm.orderCreateTime = ''; //清空下单时间
      this.orderForm.orderFirstPayTime = ''; //清空付款时间
      this.orderForm.signer = ''; //清空签单人
      this.clearShowFilter();
    },

    /**
     * @description 清空订单状态、完成时间和取消时间
     */
    clearShowFilter() {
      //未付款、已完成或者已取消状态清空订单状态
      if (
        this.activeTab == 'UNPAID' ||
        this.activeTab == 'COMPLETED' ||
        this.activeTab == 'CANCELLED'
      ) {
        this.orderForm.order_status_no = '';
      } else {
        this.orderForm.orderCompleteTime = ''; //清空完成时间
        this.orderForm.orderCancelTime = ''; //清空取消时间
      }
      //已完成状态清空取消时间
      if (this.activeTab == 'COMPLETED') {
        this.orderForm.orderCancelTime = '';
      }
      //已取消状态清空完成时间
      if (this.activeTab == 'CANCELLED') {
        this.orderForm.orderCompleteTime = '';
      }
    },

    /**
     * @description 查询订单
     */
    onSubmit() {
      console.log(this.orderForm);
      this.throttleGetList();
    },
    /**
     * @description 防抖处理获取列表数据
     */
    throttleGetList() {
      // 对查询做防抖处理
      this.$refs.refOrder.loading = true;
      this.throttle(() => {
        this.getList();
      });
    },

    /**
     * @description 设置触发tab
     * @param {key} 触发的key
     * @param {keyPath} 触发的keyPath
     */
    handleSelect(key, keyPath) {
      this.activeTab = key;
      this.$refs.refOrder.allCheck = false;
      this.resetFilter();
      this.setHeight();
      console.log(key, keyPath);
      this.getList();
    },

    /**
     * @description 执行收起展开动画
     */
    collapseTransition(height) {
      let interval = 10,
        sp = 0.08,
        refDom = this.$refs.refOrderStatus;
      //记录高度相同不执行动画
      if (this.heightTmp == height) {
        return;
      }
      if (height < this.heightTmp) {
        animation(refDom, { height }, interval, sp, () => {
          this.activeTabTemp = this.activeTab;
          this.heightTmp = height;
        });
        return;
      }
      this.activeTabTemp = this.activeTab;
      this.heightTmp = height;
      animation(refDom, { height }, interval, sp);
    },

    /**
     * @description  订单状态过滤条件展开关闭高度动画
     */
    setHeight() {
      //响应式
      if (this.isResponse) {
        //展开
        this.showFilter
          ? this.collapseTransition(this.isResponseHeight)
          : this.collapseTransition(this.closeFitlterHeightFull);
      } else {
        this.setCompletedCancelledHeight();
      }
    },
    /**
     * @description 设置已完成已取消状态高度
     */
    setCompletedCancelledHeight() {
      if (this.isCompletedCancelled) {
        this.showFilter
          ? this.collapseTransition(this.opendedFitlterHeightNotFull)
          : this.collapseTransition(this.closeFitlterHeightNotFull);
      } else {
        this.setAllUnpaidProgressingHeight();
      }
    },
    /**
     * @description 设置未付款状态高度（没有订单状态过滤条件）
     */
    setUnpaidHeight() {
      //未付款动态没有订单状态过滤条件
      this.isUnpaid
        ? this.collapseTransition(this.opendedFitlterHeightNotFull - this.singleLine)
        : this.collapseTransition(this.opendedFitlterHeightNotFull);
    },
    /**
     * @description 设置全部未付款处理中状态收起展开高度
     */
    setAllUnpaidProgressingHeight() {
      this.showFilter
        ? this.setUnpaidHeight()
        : this.collapseTransition(this.closeFitlterHeightNotFull - this.singleLine);
    },
  },
};
</script>
<style lang="scss">
.is-limit-width {
  width: 1004px;
}
.el-table .hovered-row {
  background: #f5f7fa;
}
.order-status {
  .el-menu--horizontal > .el-menu-item {
    height: 48px;
    line-height: 48px;
    margin: 0 20px;
    padding: 0;
  }
  .el-input--medium .el-input__inner {
    width: 223px;
  }
  .el-form-item {
    margin-bottom: 16px;
  }
  .el-divider--horizontal {
    margin: 14px 0 32px 0;
  }
  .el-collapse-item__header {
    display: none;
  }
  .el-form-item--medium .el-form-item__content {
    width: 223px;
  }
  .more-collapse {
    .el-collapse-item__wrap {
      border: none;
    }
    .el-collapse-item__content {
      padding-bottom: 0;
    }
  }
  .el-collapse {
    border: none;
  }
}
</style>
<style scoped lang="scss">
.sp-width {
  width: 200px;
  margin-top: 16px;
  margin-left: 16px;
}
.order-status {
  height: 220px; // 展开折叠动画需要设值初始高度
  background: #fff;
  overflow: hidden;
  box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.1);
  .el-menu {
    .el-menu-item {
      font-weight: 600;
    }
  }
  .form-inline {
    padding: 16px 20px;
  }
  .form-base {
    padding-bottom: 0;
  }
  .form-more {
    min-height: 160px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .line {
    margin: 0 16px;
    overflow: hidden;
    .fix-down {
      margin-left: 6px;
      transform: rotate(-90deg);
    }
    .fix-up {
      transform: rotate(90deg);
    }
    .el-divider__text {
      color: #4974f5;
    }
    .is-center {
      cursor: pointer;
    }
  }
}
.order-status.full-screen {
  height: 220px; // 展开折叠动画需要设值初始高度（响应式高度）
}
</style>
