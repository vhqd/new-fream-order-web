<template>
  <div>
    <template v-for="menu in menuData">
      <el-submenu :key="menu.path" :index="menu.path" v-if="menu.children">
        <template slot="title">
          <i :class="menu.icon"></i>
          <span slot="title">{{ menu.name }}</span>
        </template>
        <MenuTree :menuData="menu.children"></MenuTree>
      </el-submenu>
      <template v-else>
        <el-menu-item
          :key="menu.path"
          :index="menu.path"
          @click="redirectNav(menu)"
        >
          <i v-if="menu.root" :class="menu.icon"></i>
          <span slot="title">{{ menu.name }}</span>
        </el-menu-item>
      </template>
    </template>
  </div>
</template>

<script>
export default {
  name: 'MenuTree',
  props: ['menuData'],
  components: {},
  setup(props) {
    return {
      props,
    };
  },
  methods: {
    redirectNav(menu) {
      this.$router.push(menu.path);
    },
  },
};
</script>
<style lang="" scoped></style>
