<template>
  <div class="tabs">
    <el-tabs
      v-model="mainTabsActiveName"
      type="card"
      closable
      @tab-remove="removeTab"
      @tab-click="selectTabHandle"
    >
      <el-tab-pane v-for="item in mainTabs" :key="item.name" :label="item.name" :name="item.name">
        <span slot="label">
          <i :class="item.icon"></i>
          {{item.name}}
        </span>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    mainTabs: {
      get() {
        return this.$store.state.tab.mainTabs;
      },
      set(val) {
        this.$store.commit("updateMainTabs", val);
      },
    },
    mainTabsActiveName: {
      get() {
        return this.$store.state.tab.mainTabsActiveName;
      },
      set(val) {
        this.$store.commit("updateMainTabsActiveName", val);
      },
    },
  },
  methods: {
    //点击 tab 移除按钮后触发
    removeTab(tabName) {
      this.mainTabs = this.mainTabs.filter((item) => item.name !== tabName);
      if (this.mainTabs.length >= 1) {
        if (tabName === this.mainTabsActiveName) {
          this.$router.push(
            { name: this.mainTabs[this.mainTabs.length - 1].name },
            () => {
              this.mainTabsActiveName = this.$route.name;
            }
          );
        }
      } else {
        this.$router.push("/sm2");
      }
    },
    //tab 被选中时触发
    selectTabHandle(tab) {
      tab = this.mainTabs.filter((item) => item.name === tab.name);
      if (tab.length >= 1) {
        this.$router.push({ name: tab[0].name });
      }
    },
  },
};
</script>
<style lang="less" scoped>
.el-form {
  width: 800px;
}
</style>
