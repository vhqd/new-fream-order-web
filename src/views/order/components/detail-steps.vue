<template>
  <div class="steps-container">
    <el-steps :active="2" align-center space="156px" class="steps-status">
      <el-step title="提交订单" description="2020-07-19 15:43:23">
        <i class="step01" slot="icon"></i>
      </el-step>
      <el-step title="支付订单" description="2020-07-19 15:43:23">
        <i class="step02" slot="icon"></i>
      </el-step>
      <el-step title="处理中">
        <i class="step03" slot="icon"></i>
      </el-step>
      <el-step title="订单完成">
        <i class="step04" slot="icon"></i>
      </el-step>
      <el-step title="完成评价">
        <i class="step05" slot="icon"></i>
      </el-step>
    </el-steps>
  </div>
</template>

<script>
export default {
  components: {},

  data() {
    return {};
  },

  computed: {},

  methods: {},
};
</script>
<style lang="scss">
.steps-container {
  .el-step__head.is-finish,
  .el-step__head.is-process {
    color: #67c239;
    border-color: #67c239;
  }
  .el-step__head.is-finish {
    .el-step__line {
      background-color: #67c239;
    }
  }
  .el-step__title.is-finish,
  .el-step__title.is-process {
    color: #67c23a;
  }
  .el-step__description.is-finish,
  .el-step__description.is-process {
    color: #999;
  }
  .el-step__title.is-process {
    font-weight: 400;
  }
  .el-step__title.is-wait {
    color: #222;
  }
  .el-step__title {
    font-size: 13px;
  }
  .el-step.is-center .el-step__description {
    padding-left: 0;
    padding-right: 0;
  }
  .step02 {
    width: 20px;
    height: 20px;
    background-size: 100% 100%;
  }
  .step01,
  .step03,
  .step04,
  .step05 {
    width: 16px;
    height: 16px;
    background-size: 100% 100%;
  }
  .step01 {
    background-image: url('assets/images/notinprogress.png');
  }
  .step02 {
    background-image: url('assets/images/notinprogress.png');
  }
  .step03 {
    background-image: url('assets/images/notinprogress.png');
  }
  .step04 {
    background-image: url('assets/images/notinprogress.png');
  }
  .step05 {
    background-image: url('assets/images/notinprogress.png');
  }
  .el-step__head.is-text {
    border-style: hidden;
    background-color: transparent;
    border: none;
  }
  .el-step__icon.is-text {
    border: none;
  }
  .el-steps {
    .el-step.is-horizontal .el-step__line {
      top: 50%;
    }
    .el-step__icon {
      width: 30px;
      height: 30px;
    }
    .is-finish .step01 {
      background-image: url('assets/images/complete.png');
    }
    .is-process .step01 {
      background-image: url('assets/images/inprogress.png');
    }
    .is-wait .step01 {
      background-image: url('assets/images/notinprogress.png');
    }

    .is-finish .step02 {
      background-image: url('assets/images/complete.png');
    }
    .is-process .step02 {
      background-image: url('assets/images/inprogress.png');
    }
    .is-wait .step02 {
      background-image: url('assets/images/notinprogress.png');
    }

    .is-finish .step03 {
      background-image: url('assets/images/complete.png');
    }
    .is-process .step03 {
      background-image: url('assets/images/inprogress.png');
    }
    .is-wait .step03 {
      background-image: url('assets/images/notinprogress.png');
    }

    .is-finish .step04 {
      background-image: url('assets/images/complete.png');
    }
    .is-process .step04 {
      background-image: url('assets/images/inprogress.png');
    }
    .is-wait .step04 {
      background-image: url('assets/images/notinprogress.png');
    }

    .is-finish .step05 {
      background-image: url('assets/images/complete.png');
    }
    .is-process .step05 {
      background-image: url('assets/images/inprogress.png');
    }
    .is-wait .step05 {
      background-image: url('assets/images/notinprogress.png');
    }
  }
}
</style>
<style lang="scss" scoped>
.steps-container {
  .steps-status {
    margin-top: 18px;
    margin-bottom: 12px;
    font-size: 13px;
    justify-content: center;
  }
}
</style>
