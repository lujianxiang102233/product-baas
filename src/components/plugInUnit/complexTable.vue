<template>
  <div class="complexTable">
    <kt-table :data="tableData" page="complexTable"  :columns="tableKey" :selectShow="true"></kt-table>
  </div>
</template>
<script>
import ktTable from "../core/ktTable";
export default {
  components: {
    ktTable
  },
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      tableKey: [
        {
          prop: "date",
          label: "日期 ",
          sortable: true
        },
        {
          prop: "name",
          label: "名字 ",
          sortable: true
        },
        {
          prop: "address",
          label: "地址 "
        }
      ]
    };
  },
  methods: {}
};
</script>
<style lang="less" scoped>
.complexTable {
  /deep/.el-table {
    .has-gutter .cell .caret-wrapper {
      height: 16px;
    }
  }
}
</style>
