<template>
  <div class="dialog">
    <el-button @click="click">点击</el-button>
    <div id="main4" ref="chartMap" style="width: 100%; height: 500px"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // infos: this.partInfo,
      value: '',
      chartLine: null,
      myChart: '',
      list: [
        {
          networkName: '链1',
          networkNo: 2,
          nodes: [
            {
              latitude: '116.4951',
              longitude: '40.2539',
            },
            {
              latitude: '108.4131',
              longitude: '34.8706',
            },
            {
              latitude: '91.1',
              longitude: '29.4',
            },
            {
              latitude: '92.1',
              longitude: '31.4',
            },
            {
              latitude: '115.45',
              longitude: '34.60',
            },
            {
              latitude: '120.3695',
              longitude: '36.0944',
            },
            {
              latitude: '113.0823',
              longitude: '28.2568',
            },
            {
              latitude: '118.6853',
              longitude: '28.8666',
            },
            {
              latitude: '120.498',
              longitude: '27.8119',
            },
            {
              latitude: '119.5313',
              longitude: '29.8773',
            },
            {
              latitude: '115.45',
              longitude: '34.60',
            },
            {
              latitude: '116.4651',
              longitude: '40.2539',
            },
          ],
        },
        {
          networkName: '链2',
          networkNo: 1,
          nodes: [
            {
              latitude: '116.4551',
              longitude: '40.2539',
            },
            {
              latitude: '107.1826',
              longitude: '34.3433',
            },
            {
              latitude: '113.5107',
              longitude: '23.2196',
            },
            {
              latitude: '112.3353',
              longitude: '37.9413',
            },
            {
              latitude: '87.9236',
              longitude: '43.5883',
            },
            {
              latitude: '112.8955',
              longitude: '23.1097',
            },
            {
              latitude: '115.0488',
              longitude: '39.0948',
            },
            {
              latitude: '103.5901',
              longitude: '36.3043',
            },
            {
              latitude: '118.8062',
              longitude: '31.9208',
            },
            {
              latitude: '121.1023',
              longitude: '32.1625',
            },
            {
              latitude: '118.1689',
              longitude: '24.6478',
            },
            {
              latitude: '121.1353',
              longitude: '28.6688',
            },
            {
              latitude: '117.29',
              longitude: '32.0581',
            },
            {
              latitude: '111.4124',
              longitude: '40.4901',
            },
            {
              latitude: '120.9155',
              longitude: '30.6354',
            },
            {
              latitude: '116.0046',
              longitude: '28.6633',
            },
            {
              latitude: '115.5476',
              longitude: '28.2765',
            },
          ],
        },
        {
          networkName: '链3',
          networkNo: 3,
          nodes: [
            {
              latitude: '121.4648',
              longitude: '31.2891',
            },
            {
              latitude: '113.8953',
              longitude: '22.901',
            },
            {
              latitude: '118.7073',
              longitude: '37.5513',
            },
            {
              latitude: '113.4229',
              longitude: '22.478',
            },
            {
              latitude: '111.4783',
              longitude: '36.1615',
            },
            {
              latitude: '118.3118',
              longitude: '35.2936',
            },
            {
              latitude: '124.541',
              longitude: '40.4242',
            },
            {
              latitude: '119.5642',
              longitude: '28.1854',
            },
          ],
        },
      ],
    }
  },
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    this.myChart = this.$echarts.init(this.$refs.chartMap, null, {
      devicePixelRatio: 2,
    }) // 解决图表缩放后模糊的问题
    this.myChart.setOption(this.drawMap(), true)
    this.onlyChina()
    this.myChart.on('mouseover', (params) => {
      console.log('params', params)
    })
  },
  methods: {
    onlyChina() {
      //遮罩，只显示中国
      var amap = this.myChart.getModel().getComponent('amap').getAMap()
      // operations below are the same as amap
      amap.addControl(new AMap.DistrictSearch())
      new AMap.DistrictSearch({
        extensions: 'all',
        subdistrict: 0,
      }).search('中国', function (status, result) {
        // 外多边形坐标数组和内多边形坐标数组
        var outer = [
          new AMap.LngLat(-360, 90, true),
          new AMap.LngLat(-360, -90, true),
          new AMap.LngLat(360, -90, true),
          new AMap.LngLat(360, 90, true),
        ]
        var holes = result.districtList[0].boundaries
        var pathArray = [outer]
        pathArray.push.apply(pathArray, holes)
        var polygon = new AMap.Polygon({
          pathL: pathArray,
          //线条颜色，使用16进制颜色代码赋值。默认值为#006600
          strokeColor: 'rgb(20,164,173)',
          strokeWeight: 1,
          //轮廓线透明度，取值范围[0,1]，0表示完全透明，1表示不透明。默认为0.9
          strokeOpacity: 0.5,
          //多边形填充颜色，使用16进制颜色代码赋值，如：#FFAA00
          fillColor: '#fff',
          //多边形填充透明度，取值范围[0,1]，0表示完全透明，1表示不透明。默认为0.9
          fillOpacity: 1,
          //轮廓线样式，实线:solid，虚线:dashed
          strokeStyle: 'solid，虚线',
          /*勾勒形状轮廓的虚线和间隙的样式，此属性在strokeStyle 为dashed 时有效， 此属性在
              ie9+浏览器有效 取值：
              实线：[0,0,0]
              虚线：[10,10] ，[10,10] 表示10个像素的实线和10个像素的空白（如此反复）组成的虚线
              点画线：[10,2,10]， [10,2,10] 表示10个像素的实线和2个像素的空白 + 10个像素的实
              线和10个像素的空白 （如此反复）组成的虚线*/
          strokeDasharray: [10, 2, 10],
        })
        polygon.setPath(pathArray)
        amap.add(polygon)
      })
    },
    click() {
      this.list = [
        {
          networkName: '链1',
          networkNo: 2,
          nodes: [
            {
              latitude: '116.4951',
              longitude: '40.2539',
            },
            {
              latitude: '108.4131',
              longitude: '34.8706',
            },
          ],
        },
        {
          networkName: '链2',
          networkNo: 1,
          nodes: [
            {
              latitude: '116.4551',
              longitude: '40.2539',
            },
            {
              latitude: '107.1826',
              longitude: '34.3433',
            },
          ],
        },
        {
          networkName: '链3',
          networkNo: 3,
          nodes: [
            {
              latitude: '121.4648',
              longitude: '31.2891',
            },
            {
              latitude: '113.8953',
              longitude: '22.901',
            },
            {
              latitude: '118.7073',
              longitude: '37.5513',
            },
          ],
        },
      ]
      this.$nextTick(() => {
        this.myChart.setOption(this.drawMap(), true)
        this.onlyChina()
      })
    },
    drawMap() {
      let newList = this.list.map((v) => {
        let newArr = []
        newArr[0] = v.networkName
        newArr[1] = []
        v.nodes.forEach((w) => {
          let obj = {}
          obj.value = [+w.latitude, +w.longitude]
          newArr[1].push(obj)
        })
        return newArr
      })
      const series_ = []
      newList.forEach((item, i) => {
        series_.push({
          name: item[0],
          type: 'effectScatter',
          coordinateSystem: 'amap',
          zlevel: 2,
          symbolSize: 5,
          rippleEffect: {
            brushType: 'stroke',
          },
          label: {
            normal: {
              show: true,
              position: 'bottom',
              formatter: '{b}',
            },
          },
          itemStyle: {
            normal: {
              color: this.$getColor(
                this.$colorList[i % this.$colorList.length]
              ),
            },
          },
          data: item[1],
        })
      })
      // const series_ = [
      // //闪动的线
      // {
      //   name: "上海 Top10",
      //   coordinateSystem: "amap",
      //   type: "lines",
      //   zlevel: 1,
      //   effect: {
      //     show: true,
      //     period: 6,
      //     trailLength: 0.7,
      //     color: "#2f44c8",
      //     symbolSize: 3
      //   },
      //   lineStyle: {
      //     normal: {
      //       color: "#2f44c8",
      //       width: 0,
      //       curveness: 0.2
      //     }
      //   },
      //   data: [
      //     {
      //       fromName: "上海",
      //       toName: "包头",
      //       coords: [[121.4648, 31.2891], [109.853634, 40.651412]],
      //       value: 95
      //     }
      //   ]
      // },
      // //轨迹
      // {
      //   name: "上海 Top10",
      //   coordinateSystem: "amap",
      //   type: "lines",
      //   zlevel: 2,
      //   symbol: ["none", "arrow"],
      //   symbolSize: 10,
      //   lineStyle: {
      //     normal: {
      //       color: "#a6c84c",
      //       width: 1,
      //       opacity: 0.6,
      //       curveness: 0.2
      //     }
      //   },
      //   data: [
      //     {
      //       fromName: "上海",
      //       toName: "包头",
      //       coords: [[121.4648, 31.2891], [109.853634, 40.651412]],
      //       value: 95
      //     }
      //   ]
      // },

      //包头圆点
      //   {
      //     name: '赵丽颖',
      //     type: 'effectScatter',
      //     coordinateSystem: 'amap',
      //     zlevel: 2,
      //     symbolSize: function (val) {
      //       return val[2] / 8
      //     },
      //     rippleEffect: {
      //       brushType: 'stroke',
      //     },
      //     label: {
      //       normal: {
      //         show: true,
      //         position: 'bottom',
      //         formatter: '{b}',
      //       },
      //     },
      //     itemStyle: {
      //       normal: {
      //         color: '#a6c84c',
      //       },
      //     },
      //     data: [
      //       {
      //         name: '包头',
      //         value: [109.853634, 40.651412, 95],
      //       },
      //     ],
      //   },
      //   {
      //     name: '赵丽颖',
      //     type: 'effectScatter',
      //     coordinateSystem: 'amap',
      //     zlevel: 2,
      //     symbolSize: function (val) {
      //       return val[2] / 8
      //     },
      //     rippleEffect: {
      //       brushType: 'stroke',
      //     },
      //     label: {
      //       normal: {
      //         show: true,
      //         position: 'bottom',
      //         formatter: '{b}',
      //       },
      //     },
      //     itemStyle: {
      //       normal: {
      //         color: '#a6c84c',
      //       },
      //     },
      //     data: [
      //       {
      //         name: '石家庄',
      //         value: [114.4995, 38.1006, 95],
      //       },
      //     ],
      //   },
      //   {
      //     name: '杨洋',
      //     type: 'effectScatter',
      //     coordinateSystem: 'amap',
      //     zlevel: 2,
      //     symbolSize: 12,
      //     rippleEffect: {
      //       brushType: 'stroke',
      //     },
      //     label: {
      //       normal: {
      //         show: true,
      //         position: 'bottom',
      //         formatter: '{b}',
      //       },
      //     },
      //     itemStyle: {
      //       normal: {
      //         color: '#1935ff',
      //       },
      //     },
      //     data: [
      //       {
      //         name: '抚州',
      //         value: [116.35, 27.98],
      //       },
      //     ],
      //   },
      // ]
      return {
        title: {
          left: 'center',
          textStyle: {
            color: '#1935ff',
          },
        },
        tooltip: {
          trigger: 'item',
          confing: true,
          formatter(params) {
            let str = ''
            if (params.data && params.data.value) {
              str += `${params.seriesName}<br>
                ${params.marker}${params.data.name}: ${params.data.value[2]}个`
            }
            return str
          },
        },
        legend: {
          orient: 'vertical', //图例列表的朝向
          bottom: '15%',
          right: '2%',
          // data: ["北京 Top10", "上海 Top10", "广州 Top10"],
          // inactiveColor: "green",//图例关闭时的颜色
          textStyle: {
            color: '#fff',
            lineHeight: 20,
          },
          shadowColor: '#1d2dc9', //阴影颜色
          shadowBlur: 2, //阴影的模糊大小
          padding: [26, 26],
          backgroundColor: 'rgba(216,216,216,.1)',
          borderRadius: 10,
          itemWidth: 16,
          itemHeight: 6,
          // selectedMode: "single",
        },
        amap: {
          maxPitch: 60,
          zoom: 4,
          pitch: 10,
          pitchEnable: true,
          expandZoomRange: true,
          mapStyle: 'amap://styles/0b742a48e7eee6e86b951559c1efa7f9', //地图主题
          center: [110, 37], //中心点
          rotation: 0, //顺时针旋转角度
          resizeEnable: true,
        },
        animation: false,
        series: series_,
      }
    },
  },
}
</script>
<style lang="less" scoped>
.light {
  color: red;
}
.dialog {
  background-image: linear-gradient(
    90deg,
    rgba(21, 70, 234, 0.8) 40%,
    rgba(103, 157, 255, 0.1)
  );
}
</style>
