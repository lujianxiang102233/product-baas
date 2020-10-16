<template>
  <div class="echarts" ref="echarts">
    <map-echart ref="profile"></map-echart>
    <div class="outbox" style="display: flex">
      <div style="flex: 2">
        <line-bar ref="lineBar"></line-bar>
      </div>
      <div style="flex: 1">
        <map-pie></map-pie>
      </div>
    </div>
    <json-viewer
      theme
      :value="nodes"
      :expand-depth="4"
      copyable
      sort
    ></json-viewer>
  </div>
</template>
<script>
import mapEchart from './echarts/map'
import lineBar from './echarts/lineBar'
import mapPie from './echarts/pie'
export default {
  components: {
    mapEchart,
    lineBar,
    mapPie,
  },
  data() {
    return {
      infos: false,
      input: '',
      value: 'sgageba',
      json: '',
      nodes: [
        { id: 2, cname: '第一级1', ipid: 0, ccode: '1' },
        { id: 3, cname: '第一级1', ipid: 2, ccode: '1' },
        { id: 4, cname: '第一级1', ipid: 2, ccode: '1' },
        { id: 5, cname: '第一级1', ipid: 4, ccode: '1' },
        { id: 6, cname: '第一级1', ipid: 3, ccode: '1' },
        { id: 7, cname: '第一级1', ipid: 0, ccode: '1' },
      ],
    }
  },
  methods: {
    handleInfo(val) {
      this.$refs.profile.getInfo(val)
    },
  },
  created() {},
}
</script>
<style lang="less" scoped>
.del {
  font-size: 18px;
}
.del .icon {
  display: inline-block;
  width: 16px;
  height: 24px;
  margin-right: 5px;
  background: url('../../assets/images/copy.png') no-repeat center;
  background-size: 100%;
}
.del span {
  vertical-align: middle;
}
</style>
