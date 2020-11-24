<template>
  <div class="title-box">
    <span class="title">{{ title }}</span>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>
<style lang="scss" scoped>
.title-box {
  padding: 16px 0 12px 0;
  .title {
    color: #222;
    font-weight: bold;
    padding-left: 20px;
    border-left: 2px solid #4974f5;
    font-size: 14px;
  }
}
</style>
