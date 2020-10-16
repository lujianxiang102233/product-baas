<template>
  <div class="lineBar" ref="lineBar">
    <el-radio-group v-model="radio" @change="change">
      <el-radio-button :label="1">柱形图</el-radio-button>
      <el-radio-button :label="0">折线图</el-radio-button>
    </el-radio-group>
    <div
      id="chartLine"
      ref="chartLine"
      style="width: 100%; height: 290px"
    ></div>
    <el-button @click="open" type="primary" plain>开灯</el-button>
    <el-button @click="close" type="success" plain>关灯</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radio: 0,
      chartLine: null,
      dimensions: ['product', '赵丽颖', '杨洋', '郑爽'],
      source: [
        {
          product: '2019-06',
          赵丽颖: 34.4,
          杨洋: 85.4,
          郑爽: 63.4,
        },
        {
          product: '2019-07',
          赵丽颖: 62.4,
          杨洋: 188.4,
          郑爽: 54.4,
        },
        {
          product: '2019-08',
          赵丽颖: 72.4,
          杨洋: 64.4,
          郑爽: 83.4,
        },
        {
          product: '2019-09',
          赵丽颖: 84.4,
          杨洋: 63.4,
          郑爽: 24.4,
        },
        {
          product: '2019-10',
          赵丽颖: 84.4,
          杨洋: 63.4,
          郑爽: 24.4,
        },
      ],
      series: [],
    }
  },
  methods: {
    open() {
      this.$parent.handleInfo(true)
    },
    close() {
      this.$parent.handleInfo(false)
    },
    change(val) {
      this.radio = val
      this.series = []
      this.chartLine.setOption(this.initChartLine(), true)
    },
    initChartLine() {
      this.dimensions.forEach((v, i) => {
        if (i > 0) {
          this.series.push({
            type: !this.radio ? 'line' : 'bar',
            barMaxWidth: 10, //柱子宽度
            smooth: true, //平滑过渡
            itemStyle: {
              barBorderRadius: [15, 15, 0, 0], //柱子圆角
              color: this.$getColor(
                this.$colorList[(i - 1) % this.$colorList.length]
              ),
            },
            areaStyle: {
              //平滑过渡颜色
              color: this.$getColor([
                this.$colorList[(i - 1) % this.$colorList.length][1],
                '#fff',
              ]),
              opacity: 0.3,
            },
          })
        }
      })
      return {
        title: {
          // text: "折线图堆叠"
        },
        tooltip: {
          trigger: 'axis',
          confine: true,
          axisPointer: {
            type: !this.radio ? 'line' : 'shadow',
            lineStyle: {
              color: '#3146d4',
            },
            shadowStyle: {
              color: this.$getColor([
                'rgba(49,70,212,0)',
                'rgba(49,70,212,0.15)',
              ]),
            },
          },
          padding: 12, //提示框内边距
          textStyle: {
            color: '#fff', //提示框内部文字颜色
          },
          backgroundColor: 'rgba(0,0,0,.7)',
          extraCssText: 'box-shadow:0 3px 11px 0 rgba(169,179,211,0.5)', //提示框边框阴影
          formatter: function (params) {
            let str = `<div style='font-weight:900'>${params[0].name}</div>`
            params.forEach((v) => {
              let value = v.value
                ? v.value[v.seriesName]
                  ? v.value[v.seriesName]
                  : v.value[1]
                : null
              str += `<div style='line-height:30px'><span style='text-align:left;display:inline-block;width:100px;'>${v.seriesName}</span><span style='text-align:right;display:inline-block;width:100px;'>${value}个</span></div>`
            })
            return str
          },
        },
        legend: {
          bottom: 0,
          itemGap: 15,
          textStyle: {
            color: '#4a4c5b',
            fontSize: 12,
          },
          itemWidth: 16,
          itemHeight: !this.radio ? '10' : '6',
        },
        grid: {
          left: 'left',
          right: 50,
          top: 45,
          containLabel: true,
        },
        dataset: {
          dimensions: this.dimensions,
          source: this.source,
        },
        xAxis: {
          type: 'category',
          boundaryGap: !!this.radio,
          axisLine: {
            show: false, //x轴不显示
            lineStyle: {
              color: '#878aa9',
            },
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            interval: 'auto',
          },
        },
        yAxis: {
          type: 'value',
          name: '单位：个',
          axisLine: {
            show: false,
            lineStyle: {
              color: '#878aa9',
            },
          },
          splitLine: {
            lineStyle: {
              color: '#ccc', //分割线颜色
              type: 'dashed',
            },
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            interval: 'auto',
          },
        },
        series: this.series,
      }
    },
  },
  mounted() {
    this.chartLine = this.$echarts.init(this.$refs.chartLine, null, {
      renderer: 'svg',
    })
    this.chartLine.setOption(this.initChartLine(), true)
  },
}
</script>
