<template>
  <div class="tooltip">
    <el-tooltip class="item" effect="dark" content="Top Left 提示文字" :placement="placement">
      <el-button>黑色主题提示</el-button>
    </el-tooltip>
    <el-tooltip class="item" effect="light" content="Top Left 提示文字" :placement="placement">
      <el-button>白色主题提示</el-button>
    </el-tooltip>
  </div>
</template>
<script>
export default {
  data() {
    return {
      placement: "top-start"
    };
  }
};
</script>
<style lang="less" scoped>
.tooltip {
  padding: 100px 200px;
}
</style>