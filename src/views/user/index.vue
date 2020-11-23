<template>
  <div>
    <el-button @click="handleClick">请求数据</el-button>
    <el-table :data="list">
      <el-table-column prop="id" label="ID"> </el-table-column>
      <el-table-column prop="realName" label="姓名"> </el-table-column>
      <el-table-column prop="gender" label="性别"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  computed: {
    list() {
      return this.$store.state.user?.list;
    },
  },
  methods: {
    handleClick() {
      this.$store.dispatch('user/fetch');
    },
  },
};
</script>
