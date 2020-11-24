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
        {
          path: '/components',
          name: '公共组件',
          icon: 'el-icon-notebook-1',
          children: [
            {
              path: '/components/tooltip',
              name: '溢出提示',
            },
            {
              path: '/components/selectLoadMore',
              name: '下拉分页',
            },
            {
              path: '/components/silderNav',
              name: '左侧菜单',
            },
          ],
          root: true,
        },
      ],
    };
  },

  computed: {},

  methods: {},
};
</script>
<style lang="" scoped></style>
