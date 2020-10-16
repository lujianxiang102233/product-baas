<template>
  <div class="ktTable">
    <el-table
      ref="multipleTable"
      :data="data"
      tooltip-effect="dark"
      style="width: 100%"
      highlight-current-row
      @sort-change="tableSortChange"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" v-if="selectShow" width="55"></el-table-column>
      <el-table-column
        v-for="columns in columns"
        :prop="columns.prop"
        :label="columns.label"
        :sortable="columns.sortable?'custom':null"
        :key="columns.index"
      ></el-table-column>
      <el-table-column label="操作" width="100">
        <template slot-scope="scope">
          <!-- <el-button v-if="page === 'checkTable'" type="text" size="small">查看</el-button>
        <el-button v-if="page === 'sortTable' " type="text" size="small">编辑</el-button>
          <el-button v-if="page === 'complexTable' " type="text" size="small">删除角色</el-button>-->
          <kt-button v-if="page === 'checkTable'" label="查看" />
          <kt-button v-if="page === 'sortTable'" label="编辑" />
          <kt-button v-if="page === 'complexTable'" label="删除角色" />
        </template>
      </el-table-column>
    </el-table>
    <div style="margin-top: 20px" v-if="selectShow && page === 'checkTable'">
      <el-button @click="toggleSelection([data[1], data[2]])">切换第二、第三行的选中状态</el-button>
      <el-button @click="toggleSelection()">取消选择</el-button>
    </div>
  </div>
</template>
<script>
import ktButton from "../core/ktButton";
export default {
  components: {
    ktButton
  },
  props: {
    data: Array,
    selectShow: {
      type: Boolean,
      default: false
    },
    columns: Array,
    page: String
  },
  data() {
    return {
      multipleSelection: []
    };
  },
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          //toggleRowSelection	用于多选表格，切换某一行的选中状态，如果使用了第二个参数，则是设置这一行选中与否（selected 为 true 则选中）
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        //clearSelection用于多选表格，清空用户的选择
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      //当选择项发生变化时会触发该事件
      // this.multipleSelection = val;
    },
    formatter(row, column) {
      // formatter属性，它用于格式化指定列的值，接受一个Function，会传入两个参数：row和column，可以根据自己的需求进行处理
      return row.address;
    },
    tableSortChange(column) {
      //向接口请求排序后的表格数据
      console.log(column);
    }
  }
};
</script>
<style lang="less" scoped>
.ktTable {
  /deep/.el-table {
    .el-table__row .cell {
      padding-left: 10px;
    }
    // .has-gutter .cell .caret-wrapper {
    //   height: 16px;
    // }
  }
}
</style>
