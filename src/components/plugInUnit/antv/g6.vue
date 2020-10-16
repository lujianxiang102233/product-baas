<template>
  <div class="main-content-box" style="height:100%;">
    <div id="container"></div>
  </div>
</template>

<script>
import G6 from "@antv/g6";
export default {
  name: "g6demo",
  data() {
    return {
      data: {
        nodes: [
          {
            id: "0",
            label: "n0",
            class: "c0",
            x: 1000,
            y: -100,
            shape: "image",
            img: require("../../assets/images/icon_头像.png"),
            size: 100,
          },
          { id: "1", label: "n1", class: "c0", x: 300, y: -10 },
          { id: "2", label: "n2", class: "c0", x: 10, y: 10 },
          { id: "3", label: "n3", class: "c0", x: 320, y: -100 },
          { id: "4", label: "n4", class: "c3", x: 100, y: 900 },
          { id: "5", label: "n5", class: "c3", x: 120, y: 213 },
          { id: "6", label: "n6", class: "c1", x: 543, y: 12 },
          { id: "7", label: "n7", class: "c1", x: 543, y: -100 },
          { id: "8", label: "n8", class: "c7", x: 1, y: 0 },
          { id: "9", label: "n9", class: "c4", x: 0, y: -222 },
          { id: "10", label: "n10", class: "c4", x: 435, y: 69 },
          { id: "11", label: "n11", class: "c4", x: 23, y: 10 },
          { id: "12", label: "n12", class: "c1", x: -129, y: 39 },
          { id: "13", label: "n13", class: "c5", x: 234, y: 843 },
          { id: "14", label: "n14", class: "c5", x: -301, y: 129 },
          { id: "15", label: "n15", class: "c6", x: -20, y: -76 },
          { id: "16", label: "n16", class: "c6", x: 1220, y: -34 },
          { id: "17", label: "n17", class: "c2", x: -10, y: 954 },
          { id: "18", label: "n18", class: "c2", x: 492, y: 123 },
          { id: "19", label: "n19", class: "c7", x: 123, y: -241 },
        ],
        edges: [
          { source: "0", target: "1", label: "e0-1", weight: 1 },
          { source: "0", target: "2", label: "e0-2", weight: 2 },
          { source: "0", target: "3", label: "e0-3", weight: 3 },
          { source: "0", target: "4", label: "e0-4", weight: 1.4 },
          { source: "0", target: "5", label: "e0-5", weight: 2 },
          { source: "0", target: "7", label: "e0-7", weight: 2 },
          { source: "0", target: "8", label: "e0-8", weight: 2 },
          { source: "0", target: "9", label: "e0-9", weight: 1.3 },
          { source: "0", target: "10", label: "e0-10", weight: 1.5 },
          { source: "0", target: "11", label: "e0-11", weight: 1 },
          { source: "0", target: "13", label: "e0-13", weight: 10 },
          { source: "0", target: "14", label: "e0-14", weight: 2 },
          { source: "0", target: "15", label: "e0-15", weight: 0.5 },
          { source: "0", target: "16", label: "e0-16", weight: 0.8 },
          { source: "2", target: "3", label: "e2-3", weight: 1 },
          { source: "4", target: "5", label: "e4-5", weight: 1.4 },
          { source: "4", target: "6", label: "e4-6", weight: 2.1 },
          { source: "5", target: "6", label: "e5-6", weight: 1.9 },
          { source: "7", target: "13", label: "e7-13", weight: 0.5 },
          { source: "8", target: "14", label: "e8-14", weight: 0.8 },
          { source: "9", target: "10", label: "e9-10", weight: 0.2 },
          { source: "10", target: "14", label: "e10-14", weight: 1 },
          { source: "10", target: "12", label: "e10-12", weight: 1.2 },
          { source: "11", target: "14", label: "e11-14", weight: 1.2 },
          { source: "12", target: "13", label: "e12-13", weight: 2.1 },
          { source: "16", target: "17", label: "e16-17", weight: 2.5 },
          { source: "16", target: "18", label: "e16-18", weight: 3 },
          { source: "17", target: "18", label: "e17-18", weight: 2.6 },
          { source: "18", target: "19", label: "e18-19", weight: 1.6 },
        ],
      },
    };
  },
  mounted() {
    console.log(this.data);
    setTimeout(() => {
      this.getInit();
    }, 100);
  },
  methods: {
    async getInit() {
      const nodes = this.data.nodes;
      const edges = this.data.edges;
      edges.forEach((edge) => {
        if (!edge.style) {
          edge.style = {};
        }
        edge.style.lineWidth = edge.weight; // 边的粗细映射边数据中的 weight 属性数值
        edge.style.stroke = "grey";
      });
      const graph = new G6.Graph({
        container: "container", // 指定挂载容器
        width: 800, // 图的宽度
        height: 450, // 图的高度
        fitView: true, //fitView：设置是否将图适配到画布中
        fitViewPadding: [20, 40, 50, 20], //：画布上四周的留白宽度
        renderer: "svg",
        modes: {
          // 支持的 behavior
          default: ["drag-canvas", "zoom-canvas", "drag-node"],
          edit: ["click-select"],
        },
        defaultNode: {
          backgroundConfig: {
            backgroundType: "circle",
            fill: "red",
            stroke: "LightSkyBlue",
          },
          type: "flow-edge",
          size: 180, // 节点大小
          style: {
            fill: "#1989fa", // 节点填充色
            stroke: "#da2b41", // 节点描边色
            lineWidth: 4, // 节点描边粗细
          },
          labelCfg: {
            style: {
              fill: "blue", // 节点标签文字颜色
              fontSize: 20,
            },
          },
        },
        defaultEdge: {
          style: {
            stroke: "pink",
          },
          labelCfg: {
            autoRotate: true, // 边上的标签文本根据边的方向旋转
          },
        },
      });
      graph.data(this.data); // 加载远程数据
      graph.render();
      graph.on("node:click", function (evt) {
        //获取当前节点数据信息
        var id = evt.item._cfg.id;
        var label = evt.item._cfg.model.label;
        var ChildId = evt.item._cfg.model.cellid;
        var NodeState = evt.item._cfg.model.state;
        console.log(id, label, ChildId, NodeState);
      });
      // let COLOR = "#40a9ff";
      // const width = document.getElementById("container").scrollWidth * 0.7;
      // const height = document.getElementById("container").scrollHeight || 600;
      // const graph = new G6.Graph({
      //   container: "container",
      //   width,
      //   height,
      // renderer: "svg",
      // modes: {
      //   default: ["drag-canvas", "drag-node", "zoom-canvas"],
      // },
      // defaultNode: {
      //   backgroundConfig: {
      //     backgroundType: "circle",
      //     fill: COLOR,
      //     stroke: "LightSkyBlue",
      //   },
      //   type: "iconfont",
      //   size: 12,
      //   style: {
      //     fill: "#DEE9FF",
      //     stroke: "#5B8FF9",
      //   },
      //   labelCfg: {
      //     style: {
      //       fill: COLOR,
      //       fontSize: 12,
      //     },
      //   },
      // },
      // defaultEdge: {
      //   style: {
      //     stroke: "#b5b5b5",
      //   },
      // },
      // });

      // graph.data(this.data);
      // graph.render();
    },
  },
};
</script>

<style lang="less" scoped>
#container {
}
</style>
