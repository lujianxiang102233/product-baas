<template>
  <div class="home">
    <el-container>
       <nav-bar></nav-bar>
      <el-container>
        <el-header>
          <head-bar></head-bar>
        </el-header>
        <el-main>
          <main-content></main-content>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import headBar from "./headBar";
import navBar from "./navBar";
import mainContent from "./mainContent";
export default {
  components: {
    headBar,
    navBar,
    mainContent
  },
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.home {
  height: 100%;
  .el-container {
    height: 100%;
  }
  .el-header {
    padding: 0px;
  }

  .el-main {
    background-color: #fff;
    padding: 0px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .el-menu-item {
    text-align: left;
    padding-left: 30px;
  }
}
</style>
