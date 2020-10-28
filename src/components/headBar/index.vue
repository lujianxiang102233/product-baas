<template>
  <div class="headBar" :style="{backgroundColor:color}">
     <i :class="isCollapse?'el-icon-s-unfold':'el-icon-s-fold'" @click="open"></i>
    <div class="fr user">
      <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
        语言<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="zh_CN">中文</el-dropdown-item>
          <el-dropdown-item command="en_US">英文</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <!-- 主题：<el-color-picker v-model="color"  size="mini"></el-color-picker> -->
      <span>{{user}}</span>
      <i class="el-icon-user"></i>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      user: ""
    };
  },
  computed: {
    color: {
      get() {
        return this.$store.state.app.color;
      },
      set(value) {
        localStorage.setItem("themeColor", value);
        this.$store.commit("changeColor", value);
      }
    },
    isCollapse: {
      get() {
        return this.$store.state.app.isCollapse;
      },
      set(value) {
        this.$store.commit("changeisCollapse");
      }
    }
  },
  methods: {
    handleCommand(command) {
      this.$i18n.locale = command;
      // localStorage.setItem('locale',command)
    },
    // 侧边栏收缩和展开
    open() {
      this.isCollapse = !this.isCollapse;
    }
  },
  mounted() {
    this.user = sessionStorage.getItem("user");
  }
};
</script>
<style lang="less" scoped>
.headBar {
  width: 100%;
  height: 60px;
  line-height: 60px;
  padding: 0px 20px;
  box-sizing: border-box;
  color: #fff;
  i:not(.el-icon-arrow-down) {
    font-size: 30px;
    line-height: 60px;
  }
  .user {
    font-size: 16px;
    .el-dropdown {
      margin-right: 20px;
      color: #fff;
    }
  }
}
</style>
