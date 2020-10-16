<template>
  <div class="pie">
    <div id="chartPie" ref="chartPie" style="width:100%;height:290px"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      chartPie: null,
      chartRightDimensions: ["product", "allCount"],
      chartRightSource: [
        {
          product: "赵丽颖",
          allCount: 43.4
        },
        {
          product: "杨洋",
          allCount: 63.4
        },
        {
          product: "郑爽",
          allCount: 65.4
        },
        {
          product: "赵薇",
          allCount: 24.4
        },
        {
          product: "林心如",
          allCount: 14.4
        },
        {
          product: "王艳",
          allCount: 66.4
        },
        {
          product: "苏有朋",
          allCount: 76.4
        },
        {
          product: "童谣",
          allCount: 45.4
        },
        {
          product: "马苏",
          allCount: 63.4
        },
        {
          product: "刘涛",
          allCount: 44.4
        },
        {
          product: "王俊凯",
          allCount: 74.4
        },
        {
          product: "胡歌",
          allCount: 54.4
        }
      ]
    };
  },
  methods: {
    initchartPie() {
      return {
        title: {
          // text: "折线图堆叠"
        },
        tooltip: {
          trigger: "item",
          confine: true,
          padding: 12, //提示框内边距
          textStyle: {
            color: "#fff" //提示框内部文字颜色
          },
          backgroundColor: "rgba(0,0,0,.7)",
          extraCssText: "box-shadow:0 3px 11px 0 rgba(169,179,211,0.5)", //提示框边框阴影
          formatter: params => {
            let data = this.chartRightSource;
            let total = 0;
            let target;
            this.chartRightSource.forEach((v, i) => {
              total += v.allCount;
              if (v.product === params.value[params.dimensionNames[0]]) {
                target = v.allCount;
              }
            });
            return `${
              params.value[params.dimensionNames[0]]
            }&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${
              params.value[params.dimensionNames[1]]
            }个(${conversion(target, total)}%)`;
          }
        },
        legend: {
          // orient: "vertical",
          bottom: 0,
          // itemGap: 20,
          itemWidth: 16,
          itemHeight: 12,
          formatter: params => {
            for (var i = 0; i < this.chartRightSource.length; i++) {
              if (this.chartRightSource[i]["product"] === params) {
                return `{a|${params}}{b|${
                  this.chartRightSource[i]["allCount"]
                }个}`;
              }
            }
          },
          textStyle: {
            color: "#4a4c5b",
            fontSize: 12,
            rich: {
              a: {
                align: "left",
                width: 30
              },
              b: {
                align: "center",
                width: 80
              }
            }
          }
        },
        grid: {
          left: 30,
          right: 0,
          top: 45
        },
        dataset: {
          dimensions: this.chartRightDimensions,
          source: this.chartRightSource
        },
        series: [
          {
            type: "pie",
            radius: ["35%", "50%"],
            center: ["50%", "25%"],
            label: {
              show: false, //图形上文字不显示
              position: "center"
            },
            emphasis: {
              label: {
                show: true,
                color: "#505459",
                fontSize: "20",
                formatter: params => {
                  let total = 0;
                  this.chartRightSource.forEach(v => {
                    total += v.allCount;
                  });
                  return `${conversion(params.data.allCount, total)}%`;
                }
              }
            },
            itemStyle: {
              borderWidth: "2", //每个块之间缝隙的宽度
              borderColor: "#fff", //每个块之间缝隙的颜色
              color: params => {
                return this.$getColor(
                  this.$colorList[params.dataIndex % this.$colorList.length]
                );
              }
            }
          }
        ]
      };
    }
  },
  mounted() {
    this.chartPie = this.$echarts.init(this.$refs.chartPie, null, {});
    this.chartPie.setOption(this.initchartPie(), true);
  }
};
//保留2位小数点且不四舍五入
function conversion(allCount, total) {
  let mulNum = (allCount / total) * 100;
  let percent = parseInt(mulNum * 100) / 100;
  if (!percent) {
    return 0.01;
  } else {
    return percent;
  }
}
</script>
