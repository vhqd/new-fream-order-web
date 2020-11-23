<template>
  <el-table :data="list">
    <el-table-column prop="id" label="ID"> </el-table-column>
    <el-table-column prop="realName" label="姓名"> </el-table-column>
    <el-table-column prop="gender" label="性别"> </el-table-column>
  </el-table>
</template>

<script>
import { getList } from 'api/user';

export default {
  data() {
    return {
      list: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const params = { authId: '7715741018907525120' };
      this.list = await getList(params);
    },
  },
};
</script>
