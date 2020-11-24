<template>
  <div class="order-setting" :class="{ 'is-limit-width': !isResponse }">
    <div class="setting-container">
      <div class="title">下单配置</div>
      <el-form
        :model="ruleForm"
        :rules="rules"
        label-position="left"
        ref="ruleForm"
        label-width="128px"
        class="setting-form"
        size="medium"
      >
        <el-form-item label="订单下单：" prop="name">
          <el-switch v-model="ruleForm.delivery"></el-switch>
        </el-form-item>
        <el-form-item label="秒杀订单通过：" prop="name">
          <el-input placeholder="请输入内容" v-model="ruleForm.name">
            <template slot="append">分</template>
          </el-input>
          <span class="tip"> 未付款，订单自动关闭 </span>
        </el-form-item>
        <el-form-item label="正常订单通过：" prop="name">
          <el-input placeholder="请输入内容" v-model="ruleForm.name">
            <template slot="append">分</template>
          </el-input>
          <span class="tip"> 未付款，订单自动关闭 </span>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >更新</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      ruleForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' },
        ],
        date1: [
          {
            type: 'date',
            required: true,
            message: '请选择日期',
            trigger: 'change',
          },
        ],
        date2: [
          {
            type: 'date',
            required: true,
            message: '请选择时间',
            trigger: 'change',
          },
        ],
        type: [
          {
            type: 'array',
            required: true,
            message: '请至少选择一个活动性质',
            trigger: 'change',
          },
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' },
        ],
        desc: [{ required: true, message: '请填写活动形式', trigger: 'blur' }],
      },
    };
  },

  computed: {
    word: function () {
      if (this.show3 == false) {
        //对文字进行处理
        return '展开';
      } else {
        return '收起';
      }
    },
    isResponse() {
      return this.$store.state.order.isResponse;
    },
  },

  methods: {
    onSubmit() {
      console.log('submit!');
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
  },
};
</script>
<style lang="scss">
.order-setting {
  .el-form-item__content .el-input-group {
    width: 234px;
  }
  .el-input-group__append,
  .el-input-group__prepend {
    padding: 0 12px;
  }
}
</style>
<style lang="scss" scoped>
.is-limit-width {
  width: 1004px;
  box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.1);
}

.order-setting {
  background: #fff;
  .setting-container {
    padding: 16px 20px;
    .title {
      font-size: 16px;
      color: #000;
      font-weight: bold;
      margin-bottom: 30px;
    }
    .setting-form {
      .el-form-item {
        margin-bottom: 16px;
      }
    }
  }
}
.marketplace_aside_b .marketplace_aside_show_that {
  height: 35px;
  line-height: 35px;
  font-size: 14px;
  padding-left: 33px;
  transition: all 0.5s ease;
}
.marketplace_aside_b .marketplace_aside_show_that:hover {
  background-color: #4393fd;
  cursor: pointer;
  color: #fff;
}
.marketplace_aside_b .marketplace_show_more {
  width: 101px;
  height: 38px;
  background-color: #4393fd;
  color: #fff;
  text-align: center;
  margin-left: 70px;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 20px;
}
</style>
