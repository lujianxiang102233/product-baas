<template>
  <div class="sortTable">
    <!-- default-sort默认的排序列的 prop 和顺序。它的prop属性指定默认的排序的列，order指定默认排序的顺序 -->
    <!-- <el-table
    :data="tableData"
    style="width: 100%"
    :default-sort = "{prop: 'date', order: 'ascending'}"
    @sort-change="tableSortChange"
    >
    <el-table-column
      prop="date"
      label="日期"
     sortable="custom"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      sortable="custom"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      :formatter="formatter">
    </el-table-column>
    </el-table>-->
    <kt-table page="sortTable" :data="tableData" :columns="tableKey"></kt-table>
  </div>
</template>
<script>
import ktTable from '../core/ktTable'
export default {
  components: {
    ktTable,
  },
  data() {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
        },
      ],
      tableKey: [
        {
          prop: 'date',
          label: '日期 ',
          sortable: true,
        },
        {
          prop: 'name',
          label: '名字 ',
          sortable: true,
        },
        {
          prop: 'address',
          label: '地址 ',
        },
      ],
    }
  },
  methods: {
    formatter(row, column) {
      // formatter属性，它用于格式化指定列的值，接受一个Function，会传入两个参数：row和column，可以根据自己的需求进行处理
      return row.address
    },
    tableSortChange(column) {
      //向接口请求排序后的表格数据
      console.log(column)
    },
  },
}
</script>
<style lang="less" scoped>
.sortTable {
  /deep/.el-table {
    .has-gutter .cell .caret-wrapper {
      height: 16px;
    }
  }
}
</style>
