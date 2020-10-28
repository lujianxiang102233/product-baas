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
    <animation></animation>-->
    <el-date-picker
      v-model="value1"
      type="date"
      :placeholder="$t('selectDate')">
    </el-date-picker>
  </div>
</template>
<script>
// import forms from "@/components/plugInUnit/form";
// import animation from "@/components/plugInUnit/animation";
import * as components from "@/components/plugInUnit"; //引入拖拽组件
export default {
  components: {
    ...components
  },
  data() {
    return {
      value1: "",
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
