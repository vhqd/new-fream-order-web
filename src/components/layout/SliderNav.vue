<template>
  <div>
    <el-menu :default-active="activeMenu" :unique-opened="true">
      <menu-tree :menuData="menu"></menu-tree>
    </el-menu>
  </div>
</template>

<script>
import MenuTree from './menu-tree';
export default {
  components: { MenuTree },

  data() {
    return {
      activeMenu: '/home',
      menu: [
        {
          path: '/home',
          name: '首页',
          icon: 'el-icon-s-home',
          root: true,
        },
        {
          path: '/order',
          name: '订单管理',
          icon: 'el-icon-s-order',
          children: [
            {
              path: '/order/list',
              name: '订单列表',
              icon: 'el-icon-s-order',
            },
            {
              path: '/order/setting',
              name: '订单设置',
              icon: 'el-icon-s-order',
            },
          ],
          root: true,
        },
      ],
    };
  },
  mounted() {
    this.activeMenu = this.$route.meta.active;
  },
  computed: {},

  methods: {},
};
</script>
<style lang="" scoped></style>
