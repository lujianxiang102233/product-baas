<template>
  <div class="mixins">
    <h2>全局方法 Vue.use()使用mixin的全局过滤器</h2>
    <div>{{typeStatus | $_filterType('aa','dd','cc')}}</div>
    <div>{{'2019'| filterTime}}</div>
    <h2>使用mixin的全局过滤器</h2>
    <div>{{typeStatus | $_filterData}}</div>
    <vuedemoNpmPractice :propData="initData"></vuedemoNpmPractice>
    <!-- <div>{{msg | capitalize('YYYY/MM/DD hh-mm-ss')}}</div> -->
    <!-- <forms></forms>
    <dropdown></dropdown>-->
  </div>
</template>
<script>
// import forms from "@/components/plugInUnit/form";
// import dropdown from "@/components/plugInUnit/dropdown";
import * as components from "@/components/plugInUnit"; //引入拖拽组件
export default {
  components: {
    ...components
  },
  data() {
    return {
      typeStatus: "3",
      msg: "1528094422381",
      initData: "哈哈123123"
      // propData: "11111111111111111111"
    };
  },
  filters: {
    filterTime: function(value) {
      return value + "年";
    }
  },
  created() {}
};
</script>
<style lang="less">
</style>
