<template>
  <div class="mixins topo-l" oncontextmenu="return false">
    <div id="mountNode"></div>
  </div>
</template>
<script>
import GTopo from "g-topo";
import "../../assets/css/index.less";
export default {
  name: "mixins",
  data() {
    return {
      isAddModal: false,
      addItem: {
        title: "add-node",
        form: [
          {
            key: "input",
            label: "节点名称",
            paramKey: "node",
            default: ""
          }
        ]
      },
      network: null,
      data: {
        nodes: [
          {
            id: "node0",
            x: 250,
            y: 250,
            label: "node0",
            // type: "warning-node",
            icon: {
              show: true,
              img: require("../../assets/icon.png"),
              width: 40,
              height: 40
            }
            // groupId: "group1",
          },
          {
            id: "node1",
            x: 400,
            y: 150,
            label: "node1",

            icon: {
              show: true,
              img: require("../../assets/hostOn.png"),
              width: 40,
              height: 40
            }
            // groupId: 'group1',
          },
          {
            id: "node2",
            x: 400,
            y: 350,
            label: "node2",
            type: "play-warn-node",
            style: {
              fill: "transparent",
              stroke: "blue",
              lineWidth: 1
            },
            icon: {
              show: true,
              img: require("../../assets/lbassOn.png"),
              width: 40,
              height: 40
            }
            // groupId: 'group2',
          },
          {
            id: "node3",
            x: 550,
            y: 100,
            label: "node3",
            icon: {
              show: true,
              img: require("../../assets/gatewayOn.png"),
              width: 40,
              height: 40
            }
            // groupId: 'group2',
          },
          {
            id: "node4",
            x: 550,
            y: 450,
            label: "node4",
            icon: {
              show: true,
              img: require("../../assets/firewallOn.png"),
              width: 40,
              height: 40
            }
          },
          {
            id: "node5",
            x: 650,
            y: 100,
            label: "node5",
            icon: {
              show: true,
              img: require("../../assets/spineOn.png"),
              width: 40,
              height: 40
            }
          },
          {
            id: "node6",
            x: 650,
            y: 450,
            label: "node6",
            icon: {
              show: true,
              img: require("../../assets/leafOn.png"),
              width: 40,
              height: 40
            }
          },
          {
            id: "node7",
            x: 750,
            y: 350,
            label: "node7",
            icon: {
              show: true,
              img: require("../../assets/spineOn.png"),
              width: 40,
              height: 40
            }
          },
          {
            id: "node8",
            x: 750,
            y: 550,
            label: "node8",
            icon: {
              show: true,
              img: require("../../assets/firewallOn.png"),
              width: 40,
              height: 40
            }
          },
          {
            id: "node9",
            x: 750,
            y: 450,
            label: "node9",
            icon: {
              show: true,
              img: require("../../assets/leafOn.png"),
              width: 40,
              height: 40
            }
          }
        ],
        edges: [
          { id: "edge0", source: "node0", target: "node1", label: "e0-1" },
          {
            id: "edge5",
            source: "node0",
            target: "node2",
            type: "quadratic-label-edge"
          },
          {
            id: "edge1",
            source: "node1",
            target: "node3",
            type: "quadratic-label-edge"
          },
          {
            id: "edge1",
            source: "node2",
            target: "node4",
            type: "play-warn-node",
            edgeOffset: -200
          },
          {
            id: "edge1",
            source: "node3",
            target: "node5",
            type: "play-warn-node"
          },
          {
            id: "edge6",
            source: "node4",
            target: "node6",
            type: "play-warn-node"
          },
          { id: "edge2", source: "node6", target: "node7", type: "flow-edge" },
          {
            id: "edge3",
            source: "node6",
            target: "node8",
            style: { stroke: "red", lineWidth: 1 },
            type: "flow-warn-edge"
          },
          { id: "edge44", source: "node6", target: "node9" }
        ]
      }
    };
  },
  mounted() {
    let that = this;
    const config = {
      defaultEdge: {
        type: "flow-edge",
        style: {
          stroke: "green",
          lineWidth: 2
        }
      },
      layout: {}
    };
    setTimeout(() => {
      this.network = new GTopo("#mountNode", config);
      // renderData(data) 读取数据并渲染图
      this.network.renderData(this.data);
      //handleEvent(type, event, cb) 画布，节点，连线的操作类型支持画布，节点，边缘，事件：支持单击，鼠标悬停等
      this.network.handleEvent("node", "dragend", evt => {
        const { _cfg } = evt.item;
        const { id, model } = _cfg;
        //refreshPositions()当上游位置发生变化时，刷新所有上游位置，并重计算边的位置
        this.network.refreshPositions();
        const { x, y } = model;
        this.data.nodes = this.data.nodes.map(item => {
          if (id === item.id) {
            return Object.assign({}, { ...item }, { x, y });
          }
          return { ...item };
        });
      });
    }, 1000);

    window.handleContextMenu = type => {
      console.log(`你点击了${type}`);
      if (type === "addNode") {
        console.log(12);
        this.isAddModal = true;
        this.addDevice("node45", true);
      }
    };
  },
  methods: {
    addDevice(params, status) {
      if (status) {
        // done();
        const node = {
          id: params,
          x: 1000,
          y: 200,
          label: params,
          icon: {
            show: true,
            img: require("../../assets/leafOn.png"),
            width: 40,
            height: 40
          }
        };
        //Todo
        this.$set(this.data.nodes, this.data.nodes.length, node);
        console.log(this.data);
        // updateData(data) 更新数据
        this.network.updateData(this.data);
      }
    }
  }
};
</script>
<style lang="less">
.mixins {
  height: 100%;
}
.g6-tooltip {
  padding: 10px 6px;
  color: #444;
  background-color: rgba(255, 255, 255, 0.9);
  border: 1px solid #e2e2e2;
  border-radius: 4px;
}
// 右击不添加的话把框和Hover时的效果隐藏
.g6-contextmenu {
  color: #444;
  padding: 10px 0;
  background-color: rgb(45, 140, 240);
  border-radius: 4px;
  width: 100px;
  font-size: 14px;
  color: #fff;
}
.g6-contextmenu-item {
  padding: 0 6px;
  line-height: 30px;
}
.g6-contextmenu-item:hover {
  color: rgb(45, 140, 240);
  background-color: rgb(198, 229, 255);
}
/* .g6-contextmenu-item:first-child:hover {
	border-top-left-radius: 4px;
	border-top-right-radius: 4px;
}
.g6-contextmenu-item:last-child:hover {
	border-bottom-left-radius: 4px;
	border-bottom-right-radius: 4px;
} */
</style>
