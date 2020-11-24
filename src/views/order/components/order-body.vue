<template>
  <div class="table-body-container">
    <div class="product-one" v-for="(pItem, pIndex) in data.orderSkuList" :key="pIndex">
      <el-row class="row">
        <el-col :span="4">
          <span class="table-body product"
            ><p class="product-text">
              <tooltip refName="product-text" :content="pItem['spuName']"></tooltip>
            </p>
            <p class="area">
              <tooltip refName="area" :content="pItem['skuPropertyVname']"></tooltip>
            </p>
          </span>
        </el-col>
        <el-col :span="3">
          <span class="table-body num-area"
            >x{{ pItem['skuCount'] }}【{{ pItem['skuSaleCityCode'] }}】</span
          >
        </el-col>
        <el-col :span="5">
          <span class="table-body flex pricing"
            ><span> 定价：</span>
            <span class="price-w">
              <tooltip refName="pricing" :content="pItem['skuTotalPrice']"></tooltip> </span
          ></span>
          <p class="area flex">
            <span class="discounts"> 优惠：</span
            ><span class="price-w discounts">
              <tooltip refName="area" :content="pItem['skuDiscountTotalMoney']"></tooltip
            ></span>
          </p>
        </el-col>
        <!--   <el-col :span="4">
          <span class="table-body flex discounts"
            ><span>优惠：</span>
            <span class="price-w"
              ><tooltip
                refName="discounts"
                :content="pItem['skuDiscountTotalMoney']"
              ></tooltip></span
          ></span>
        </el-col> -->
        <el-col :span="5">
          <span class="table-body flex due"
            ><span>应付：</span>
            <span class="price-w"
              ><tooltip refName="due" :content="pItem['skuPayableTotalMoney']"></tooltip></span
          ></span>
        </el-col>
        <el-col :span="5">
          <span class="table-body flex actually-paid"
            ><span>实付：</span>
            <span class="price-w"
              ><tooltip refName="actually-paid" :content="pItem['skuPaidMoney']"></tooltip></span
          ></span>
        </el-col>
        <el-col :span="1">
          <span class="table-body blue">查看</span>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import tooltip from 'components/tooltip.vue';
export default {
  props: {
    data: {
      type: Object,
      defulat: {},
    },
    prop: {
      type: Array,
      defulat: [],
    },
  },
  components: { tooltip },

  data() {
    return {};
  },
  mounted() {},
  computed: {},

  methods: {},
};
</script>
<style lang="scss" scoped>
.table-body-container {
  span {
    font-size: 14px;
    color: #222;
  }
  .area {
    color: #999;
  }
  .product-one {
    padding: 14px 16px;
    display: flex;
    align-items: center;
    .row {
      width: 100%;
      display: flex;
      align-items: center;
      .el-col-1 {
        width: 5.166667%;
      }
      .el-col-3 {
        width: 16.632%;
      }
      .el-col-4 {
        width: 17.666667%;
      }
    }
    .price-w {
      width: 70%;
      display: inline-block;
    }
    .discounts {
      color: #999;
    }
  }
  .product-one:not(:last-child) {
    border-bottom: 1xp solid #e5e5e5;
  }
  .blue {
    color: #4974f5;
    cursor: pointer;
  }
  .table-body {
    display: inline-block;
  }
  .product {
    width: 170px;
    .product-text,
    .area {
      /* width: 176px; */
      margin-right: 18px;
    }
  }
  /* .num-area {
    width: 112px;
  } */
  /* .pricing {
    width: 150px;
  } */
  .discounts {
    /* width: 132px; */
  }
  /* .due {
    width: 158px;
  }
  .actually-paid {
    width: 148px;
  } */
  .order-index {
    text-align: center;
    display: inline-block;
    min-width: 30px;
  }
  .flex {
    display: flex;
  }
}
</style>
