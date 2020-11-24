<template>
  <div>
    <slot></slot>
    <el-menu :default-active="activeMenu" :unique-opened="true">
      <menu-tree :menuData="menu"></menu-tree>
    </el-menu>
  </div>
</template>

<script>
import MenuTree from '@/components/menu-tree';
export default {
  name: 'SliderNav',
  props: {
    menu: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: { MenuTree },
  data() {
    return {
      activeMenu: '/home',
    };
  },
  mounted() {
    this.activeMenu = this.$route.meta.active;
  },
  methods: {},
};
</script>

<style scoped></style>
