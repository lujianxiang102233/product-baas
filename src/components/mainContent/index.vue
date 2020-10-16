<template>
  <div class="mainContent">
    <kt-tab></kt-tab>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>
<script>
import ktTab from "../plugInUnit/tabs";
export default {
  components: {
    ktTab,
  },
  data() {
    return {
      activeName: "second",
      editableTabsValue: "2",
      editableTabs: [
        {
          title: "Tab 1",
          name: "1",
          content: "Tab 1 content",
        },
        {
          title: "Tab 2",
          name: "2",
          content: "Tab 2 content",
        },
      ],
      tabIndex: 2,
    };
  },
  methods: {},
};
</script>
<style lang="less" scoped>
.mainContent {
  height: 100%;
  .content {
    height: calc(100% - 56px);
    padding: 10px;
    box-sizing: border-box;
  }
}
</style>
