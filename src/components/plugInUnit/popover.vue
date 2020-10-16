<template>
  <div class="popover">
    <el-row>
      <el-col :span="4">
        <el-popover placement="right-start" title="标题" width="200" trigger="click">
          弹窗内容
          <!-- placement:显示位置 -->
          <el-input slot="reference" :readonly="true" v-model="input" placeholder="请输入内容"></el-input>
        </el-popover>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: "单击提示"
    };
  }
};
</script>
<style lang="less" scoped>
</style>
