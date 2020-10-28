<template>
  <div class="echarts">
    <div>父传过来的{{ value }}</div>
    <div :class="{ light: partInfo }">我是一盏灯（通过父传子、子传父实现 子组件之间的传参）</div>
    <li @click="$parent.$refs.lineBar.$refs.lineBar.scrollIntoView(true)">通过js获取非父子组件之间的锚点定位</li>
    <div id="main4" ref="chartMap" style="width: 100%; height: 500px; background: #0918ae"></div>
  </div>
</template>
<script>
// import cityMap from "../mapJson/china-main-city-map";
// import cityMap from '../mapJson/area'
let json = require('../mapJson/100000.json')

export default {
  data() {
    return {
      // infos: this.partInfo,
      partInfo: false,
      value: '',
      chartLine: null,
      myChart: '',
      geoCoordMap: {
        上海: [121.4648, 31.2891],
        东莞: [113.8953, 22.901],
        东营: [118.7073, 37.5513],
        中山: [113.4229, 22.478],
        临汾: [111.4783, 36.1615],
        临沂: [118.3118, 35.2936],
        丹东: [124.541, 40.4242],
        丽水: [119.5642, 28.1854],
        乌鲁木齐: [87.9236, 43.5883],
        佛山: [112.8955, 23.1097],
        保定: [115.0488, 39.0948],
        兰州: [103.5901, 36.3043],
        包头: [110.3467, 41.4899],
        北京: [116.4551, 40.2539],
        北海: [109.314, 21.6211],
        南京: [118.8062, 31.9208],
        南宁: [108.479, 23.1152],

        南通: [121.1023, 32.1625],
        厦门: [118.1689, 24.6478],
        台州: [121.1353, 28.6688],
        合肥: [117.29, 32.0581],
        呼和浩特: [111.4124, 40.4901],
        咸阳: [108.4131, 34.8706],
        哈尔滨: [127.9688, 45.368],
        唐山: [118.4766, 39.6826],
        嘉兴: [120.9155, 30.6354],
        大同: [113.7854, 39.8035],
        大连: [122.2229, 39.4409],
        天津: [117.4219, 39.4189],
        太原: [112.3352, 37.9413],
        威海: [121.9482, 37.1393],
        宁波: [121.5967, 29.6466],
        宝鸡: [107.1826, 34.3433],
        宿迁: [118.5535, 33.7775],
        常州: [119.4543, 31.5582],
        广州: [113.5107, 23.2196],
        廊坊: [116.521, 39.0509],
        延安: [109.1052, 36.4252],
        张家口: [115.1477, 40.8527],
        徐州: [117.5208, 34.3268],
        德州: [116.6858, 37.2107],
        惠州: [114.6204, 23.1647],
        成都: [103.9526, 30.7617],
        扬州: [119.4653, 32.8162],
        承德: [117.5757, 41.4075],
        拉萨: [91.1865, 30.1465],
        无锡: [120.3442, 31.5527],
        日照: [119.2786, 35.5023],
        昆明: [102.9199, 25.4663],
        杭州: [119.5313, 29.8773],
        枣庄: [117.323, 34.8926],
        柳州: [109.3799, 24.9774],
        株洲: [113.5327, 27.0319],
        武汉: [114.3896, 30.6628],
        汕头: [117.1692, 23.3405],
        江门: [112.6318, 22.1484],
        沈阳: [123.1238, 42.1216],
        沧州: [116.8286, 38.2104],
        河源: [114.917, 23.9722],
        泉州: [118.3228, 25.1147],
        泰安: [117.0264, 36.0516],
        泰州: [120.0586, 32.5525],
        济南: [117.1582, 36.8701],
        济宁: [116.8286, 35.3375],
        海口: [110.3893, 19.8516],
        淄博: [118.0371, 36.6064],
        淮安: [118.927, 33.4039],
        深圳: [114.5435, 22.5439],
        清远: [112.9175, 24.3292],
        温州: [120.498, 27.8119],
        渭南: [109.7864, 35.0299],
        湖州: [119.8608, 30.7782],
        湘潭: [112.5439, 27.7075],
        滨州: [117.8174, 37.4963],
        潍坊: [119.0918, 36.524],
        烟台: [120.7397, 37.5128],
        玉溪: [101.9312, 23.8898],
        珠海: [113.7305, 22.1155],
        盐城: [120.2234, 33.5577],
        盘锦: [121.9482, 41.0449],
        石家庄: [114.4995, 38.1006],
        福州: [119.4543, 25.9222],
        秦皇岛: [119.2126, 40.0232],
        绍兴: [120.564, 29.7565],
        聊城: [115.9167, 36.4032],
        肇庆: [112.1265, 23.5822],
        舟山: [122.2559, 30.2234],
        苏州: [120.6519, 31.3989],
        莱芜: [117.6526, 36.2714],
        菏泽: [115.6201, 35.2057],
        营口: [122.4316, 40.4297],
        葫芦岛: [120.1575, 40.578],
        衡水: [115.8838, 37.7161],
        衢州: [118.6853, 28.8666],
        西宁: [101.4038, 36.8207],
        西安: [109.1162, 34.2004],
        贵阳: [106.6992, 26.7682],
        连云港: [119.1248, 34.552],
        邢台: [114.8071, 37.2821],
        邯郸: [114.4775, 36.535],
        郑州: [113.4668, 34.6234],
        鄂尔多斯: [108.9734, 39.2487],
        重庆: [107.7539, 30.1904],
        金华: [120.0037, 29.1028],
        铜川: [109.0393, 35.1947],
        银川: [106.3586, 38.1775],
        镇江: [119.4763, 31.9702],
        长春: [125.8154, 44.2584],
        长沙: [113.0823, 28.2568],
        长治: [112.8625, 36.4746],
        阳泉: [113.4778, 38.0951],
        青岛: [120.4651, 36.3373],
        韶关: [113.7964, 24.7028],
        南昌: [116.0046, 28.6633],
        宜春: [115.5476, 28.2765],
        // 省
        山西: [112.3352, 37.9413], // 太原
        河北: [114.4995, 38.1006], // 石家庄
        辽宁: [123.1238, 42.1216], // 沈阳
        吉林: [125.8154, 44.2584], // 长春
        江苏: [118.8062, 31.9208], // 南京
        安徽: [117.29, 32.0581], // 合肥
        山东: [117.1582, 36.8701], // 济南
        浙江: [119.5313, 29.8773], // 杭州
        黑龙江: [127.9688, 45.368], // 哈尔滨
        江西: [116.0046, 28.6633], // 南昌
        福建: [119.4543, 25.9222], // 福州
        湖南: [113.0823, 28.2568], // 长沙
        湖北: [114.3896, 30.6628], // 武汉
        河南: [113.4668, 34.6234], // 郑州
        广东: [113.5107, 23.2196], // 广州
        广西: [108.479, 23.1152], // 南宁
        海南: [110.3893, 19.8516], // 海口
        贵州: [106.6992, 26.7682], // 贵阳
        云南: [102.9199, 25.4663], // 昆明
        四川: [103.9526, 30.7617], // 成都
        陕西: [109.1162, 34.2004], // 西安
        甘肃: [103.5901, 36.3043], // 兰州
        宁夏: [106.3586, 38.1775], // 银川
        青海: [101.4038, 36.8207], // 西宁
        新疆: [87.9236, 43.5883], // 乌鲁木齐
        西藏: [91.1865, 30.1465], // 拉萨
        内蒙古: [111.4124, 40.4901], // 呼和浩特
      },
      planePath:
        'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z',
      LCData: [
        [
          {
            name: '聊城',
          },
          {
            name: '珠海',
            value: 95,
          },
        ],
      ],
      PJData: [
        [
          {
            name: '盘锦',
          },
          {
            name: '福州',
            value: 95,
          },
        ],
      ],
      SXData: [
        [
          {
            name: '绍兴',
          },
          {
            name: '延安',
            value: 95,
          },
        ],
      ],
      CZData: [
        [
          {
            name: '常州',
          },
          {
            name: '呼和浩特',
            value: 95,
          },
        ],
      ],
      BJData: [
        [
          {
            name: '北京',
          },
          {
            name: '甘肃',
            value: 95,
          },
        ],
      ],
      HZData: [
        [
          {
            name: '湖州',
          },
          {
            name: '苏州',
            value: 95,
          },
        ],
      ],
      ZJZData: [
        [
          {
            name: '石家庄',
          },
          {
            name: '湘潭',
            value: 125,
          },
        ],
      ],
      QHDData: [
        [
          {
            name: '秦皇岛',
          },
          {
            name: '舟山',
            value: 55,
          },
        ],
      ],
      SZDData: [
        [
          {
            name: '苏州',
          },
          {
            name: '滨州',
            value: 195,
          },
        ],
      ],
      NCData: [
        [
          {
            name: '南昌',
          },
          {
            name: '银川',
            value: 95,
          },
        ],
        [
          {
            name: '南昌',
          },
          {
            name: '拉萨',
            value: 195,
          },
        ],
      ],
      SHData: [
        [
          {
            name: '上海',
          },
          {
            name: '拉萨',
            value: 95,
          },
        ],
      ],
      GZData: [
        [
          {
            name: '广州',
          },
          {
            name: '福州',
            value: 95,
          },
        ],
        [
          {
            name: '广州',
          },
          {
            name: '葫芦岛',
            value: 95,
          },
        ],
      ],
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
              latitude: '118.7073',
              longitude: '37.5513',
            },
            {
              latitude: '114.0610',
              longitude: '22.5285',
            },
            {
              latitude: '114.1610',
              longitude: '22.5285',
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
      nodeInfo: {
        belongToChannel: 'aa',
        commonName: '平安银行',
        league: '产业税务联盟链',
        nodeType: 'peer节点',
        onlineStatus: '当前在线',
      },
      // flag: true,
    }
  },
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    // this.$echarts.registerMap('china', json)
    this.myChart = this.$echarts.init(this.$refs.chartMap, null, {
      devicePixelRatio: 2,
    }) // 解决图表缩放后模糊的问题
    this.myChart.setOption(this.drawMap(), true)
    this.myChart.on('mouseover', (params) => {
      console.log('params', params.data)
    })
  },
  methods: {
    getInfo(val) {
      this.partInfo = val
    },
    drawMap() {
      // 飞机小图标
      // var series = []
      // ;[
      //   ['赵丽颖', this.BJData],
      //   ['杨洋', this.SHData],
      //   ['郑爽', this.GZData],
      //   ['赵薇', this.NCData],
      //   ['林心如', this.SZDData],
      //   ['王艳', this.QHDData],
      //   ['苏有朋', this.ZJZData],
      //   ['童谣', this.HZData],
      //   ['马苏', this.CZData],
      //   ['刘涛', this.SXData],
      //   ['王俊凯', this.PJData],
      //   ['胡歌', this.LCData],
      // ].forEach((item, i) => {
      //   series.push(
      //     {
      //       //飞线效果
      //       name: item[0],
      //       type: 'lines',
      //       zlevel: 1,
      //       effect: {
      //         show: false,
      //       },
      //       lineStyle: {
      //         normal: {
      //           color: this.$getColor(
      //             this.$colorList[i % this.$colorList.length]
      //           ),
      //           width: 0,
      //           curveness: 0.2,
      //         },
      //       },
      //       // data: convertData(item[1]),
      //       animation: false,
      //     },
      //     {
      //       //两点连线样式
      //       name: item[0],
      //       type: 'lines',
      //       zlevel: 2,
      //       symbol: ['circle', 'none'],
      //       symbolSize: 6,
      //       effect: {
      //         show: true,
      //         period: 6,
      //         trailLength: 0,
      //         symbol: this.planePath,
      //         symbolSize: 12,
      //       },
      //       lineStyle: {
      //         normal: {
      //           color: this.$getColor(
      //             this.$colorList[i % this.$colorList.length]
      //           ),
      //           width: 1,
      //           opacity: 0.6,
      //           curveness: 0.2,
      //         },
      //       },
      //       data: convertData(item[1], this.geoCoordMap),
      //       animation: false,
      //     },
      //     {
      //       //终点样式
      //       name: item[0],
      //       type: 'effectScatter',
      //       coordinateSystem: 'geo',
      //       zlevel: 2,
      //       rippleEffect: {
      //         brushType: 'stroke',
      //       },
      //       label: {
      //         normal: {
      //           show: true,
      //           position: 'right',
      //           formatter: '{b}',
      //         },
      //       },
      //       symbolSize: function (val) {
      //         return val[2] / 8
      //       },
      //       itemStyle: {
      //         normal: {
      //           color: this.$getColor(
      //             this.$colorList[i % this.$colorList.length]
      //           ),
      //         },
      //       },
      //       data: item[1].map((dataItem) => {
      //         return {
      //           name: dataItem[1].name,
      //           value: this.geoCoordMap[dataItem[1].name].concat([
      //             dataItem[1].value,
      //           ]),
      //         }
      //       }),
      //       animation: false,
      //     }
      //   )
      // })
      // console.log('443', series)
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
      console.log(136, newList)
      const series = []
      newList.forEach((item, i) => {
        series.push({
          name: item[0],
          type: 'effectScatter',
          coordinateSystem: 'geo',
          zlevel: 2,
          rippleEffect: {
            brushType: 'stroke',
          },
          label: {
            normal: {
              show: true,
              position: 'right',
              formatter: '{b}',
            },
          },
          symbolSize: 5,
          itemStyle: {
            normal: {
              color: this.$getColor(
                this.$colorList[i % this.$colorList.length]
              ),
            },
          },
          data: item[1],
          animation: false,
        })
      })
      return {
        textStyle: {
          fontSize: 12,
        },
        tooltip: {
          trigger: 'item',
          confing: true,
          formatter: (params) => {
            let {
              belongToChannel,
              commonName,
              league,
              nodeType,
              onlineStatus,
            } = this.nodeInfo
            let str = ''
            str += `所属联盟：${league}<br>节点结构：${commonName}<br>节点类型：${nodeType}<br>在线状态：${onlineStatus}<br>所属通道：${belongToChannel}`
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
        geo: {
          map: 'china',
          left: '20%',
          label: {
            show: false,
            emphasis: {
              show: true, //鼠标移入是否显示省名称
              color: '#fff',
            },
          },
          roam: true, // 图表内拖拽
          itemStyle: {
            // areaColor: "#242C57", //地图颜色
            areaColor: {
              type: 'linear-gradient',
              x: 1000,
              y: 0,
              x2: 0,
              y2: 0,
              colorStops: [
                {
                  offset: 0,
                  color: 'rgba(103,157,255,.7)', // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: 'rgba(21,70,234,0.7)', // 50% 处的颜色16638d
                },
              ],
              global: true, // 缺省为 false
            },
            borderColor: '#1989FA', //省之间分界线颜色
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 12,
            },
            itemStyle: {
              areaColor: 'transparent', //鼠标hover时的省内颜色
            },
          },
        },
        series: series,
      }
    },
  },
}
function convertData(data, geoCoordMap) {
  var res = []
  for (var i = 0; i < data.length; i++) {
    var dataItem = data[i]
    var fromCoord = geoCoordMap[dataItem[0].name] // 起点坐标
    var toCoord = geoCoordMap[dataItem[1].name] // 终点坐标
    if (fromCoord && toCoord) {
      res.push({
        fromName: dataItem[0].name,
        toName: dataItem[1].name,
        coords: [fromCoord, toCoord],
      })
    }
  }
  return res
}
</script>
<style lang="less" scoped>
.light {
  color: red;
}
</style>
