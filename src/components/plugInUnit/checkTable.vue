<template>
  <div class="checkTable">
    <kt-table
      :data="tableData"
      page="checkTable"
      :columns="tableKey"
      :selectShow="true"
    ></kt-table>
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
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
      ],
    }
  },
  computed: {
    tableKey() {
      return [
        {
          prop: 'date',
          label: this.$t('date'),
        },
        {
          prop: 'name',
          label: this.$t('name'),
        },
        {
          prop: 'address',
          label: this.$t('address'),
        },
      ]
    },
  },
  methods: {},
}
</script>
<style lang="less" scoped>
</style>
