<template>
  <div>
    <el-row>
      <el-col :span="3">
        <div class="demo">
          <tooltip refName="toolTipName" content="鼠标放到我这里。可以看到完整内容"
            ><p>溢出提示</p></tooltip
          >
        </div>
      </el-col>
      <el-col :span="4">
        <selectMore>
          <p>下拉分页</p>
        </selectMore>
      </el-col>
      <el-col :span="4"> </el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
  </div>
</template>

<script>
//import { spHeader } from '$ui';
//import TableColumn from '@/components/order/TableColumn';
import tooltip from 'components/tooltip.vue';
import selectMore from 'components/select-more';
export default {
  name: 'home',
  components: {
    tooltip,
    selectMore,
    //spHeader,
    //TableColumn,
  },
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
              children: [
                {
                  path: '/order/list',
                  name: '订单列表',
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
                },
                {
                  path: '/order/setting',
                  name: '订单设置',
                  icon: 'el-icon-s-order',
                },
              ],
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
  mounted() {},
  methods: {},
};
</script>
<style scoped lang="scss">
.demo {
  width: 120px;
  height: 100%;
}
</style>
