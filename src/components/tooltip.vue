<template>
  <div class="text-over-tooltip-components">
    <slot></slot>
    <el-tooltip
      popper-class="tooltop-container"
      :effect="effect"
      :disabled="isDisabledTooltip"
      :content="content"
      :placement="placement"
    >
      <div
        class="ellipsis"
        :class="className"
        @mouseover="onMouseOver(refName)"
      >
        <span :ref="refName">{{ content }}</span>
      </div>
    </el-tooltip>
  </div>
</template>

<script>
export default {
  name: 'TextOverTooltip',
  props: {
    // 显示的文字内容
    content: String,
    // 设置父元素的样式：比如宽度字体等，需可以自己在组件内部配置样式比如字体大小
    className: String,
    // 子元素标识（如在同一页面中调用多次组件，此参数不可重复）
    refName: String,
    // 默认提供的主题 dark/light
    effect: {
      type: String,
      default: () => {
        return 'dark';
      },
    },
    // Tooltip 的出现位置top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end
    placement: {
      type: String,
      default: () => {
        return 'bottom';
      },
    },
  },
  data() {
    return {
      isDisabledTooltip: true, // 是否需要禁止提示
    };
  },
  methods: {
    // 移入事件: 判断内容的宽度contentWidth是否大于父级的宽度
    onMouseOver(str) {
      let parentWidth = this.$refs[str].parentNode.offsetWidth;
      let contentWidth = this.$refs[str].offsetWidth;
      // 判断是否禁用tooltip功能
      this.isDisabledTooltip = contentWidth <= parentWidth;
    },
  },
};
</script>
<style>
.el-tooltip__popper {
  max-width: 300px;
  background: #555 !important;
}
.el-tooltip__popper[x-placement^='bottom'] .popper__arrow::after {
  border-bottom-color: #555;
}

.el-tooltip__popper[x-placement^='bottom'] .popper__arrow {
  border-bottom-color: #555;
}
.el-tooltip__popper[x-placement^='top'] .popper__arrow::after {
  border-top-color: #555;
}

.el-tooltip__popper[x-placement^='top'] .popper__arrow {
  border-top-color: #555;
}
.el-tooltip__popper[x-placement^='left'] .popper__arrow::after {
  border-left-color: #555;
}

.el-tooltip__popper[x-placement^='left'] .popper__arrow {
  border-left-color: #555;
}
.el-tooltip__popper[x-placement^='right'] .popper__arrow::after {
  border-right-color: #555;
}

.el-tooltip__popper[x-placement^='right'] .popper__arrow {
  border-right-color: #555;
}
</style>
<style lang="scss" scoped>
.text-over-tooltip-components {
  /* 文字超出宽度显示省略号 单行 */
  .ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
