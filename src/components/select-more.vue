<template>
  <div>
    <slot></slot>
    <el-select
      v-model="value"
      placeholder="请选择"
      filterable
      v-el-select-scroll="selectScroll"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script>
function createOptions(len, start = 0) {
  return Array(len)
    .fill(0)
    .map((_, index) => ({
      value: `选项${start + index}`,
      label: `我是${start + index}`,
    }));
}
export default {
  components: {},
  data() {
    return {
      options: createOptions(10),
      value: '',
      pageIndex: 0,
    };
  },
  mounted() {
    this.options = createOptions(10);
  },
  methods: {
    selectScroll() {
      console.log('selectScroll');
      // Select 滚动到底部 执行该方法
      // 这里可以做一些懒加载之类的事情，eg：
      this.pageIndex++;
      this.options.push(...createOptions(10, 10 * this.pageIndex));
    },
  },
};
</script>
<style scoped lang="scss"></style>
