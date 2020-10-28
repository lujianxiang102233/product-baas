<template>
  <div class="animation">
    <ul>
      <li v-for="(item,index) in list" :key="index">
        <img :src="item.img" alt class="top" />
        <div class="card">
          <div class="titles" :title="item.title">{{item.title}}</div>
          <div class="des" :title="item.dex">{{item.des}}</div>
          <el-button class="btn">了解详情</el-button>
        </div>
      </li>
    </ul>
    <div>本页面中没有msg，按照mixins中的默认值开始算{{msg}}</div>
    <el-button @click="foo">mixins按钮</el-button>
  </div>
</template>
<script>
import mixin from '@/mixins/mixins.js'
export default {
  mixins: [mixin],
  data() {
    return {
      msg: 10,
      list: [
        {
          img: require('@/assets/firewallOff.png'),
          title: '某电力投资集团',
          des:
            '银行针对核心企业资金流动性压力较大，资金成本上升、供应商分散全国、供应链管理复杂、集团财务公司开展金融业务受限、独立开发系统成本高、设计产品难度大等痛点，建设了供应链应收账款服务平台-好链平台，针对特定核心企业供应链内上中中小微企业，提供线上赢收账款转让及管理服务。平台上，具有优质闪屏商业信用的核心企业对到期的付款责任进行确认，各级供应商可将确认后的应收账款转让予上一级供应商抵偿债务，或转让予机构受让方获取融资。',
        },
      ],
    }
  },
  methods: {
    //点击菜单项触发的事件回调
    handleCommand(command) {
      this.dropName = this.dropList.find((item) => item.index === command).name
    },
  },
  mounted() {
    console.log('animation say hi') //先输出
  },
}
</script>
<style lang="less" scoped>
.animation {
  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    li {
      position: relative;
      width: 378px;
      height: 415px;
      margin-right: 32px;
      background-color: #ccc;
      border-radius: 6px;
      overflow: hidden;
      &:last-child {
        margin-right: 0;
      }
      img.top {
        display: block;
        width: 100%;
        height: 146px;
        background-color: #ccc;
        transition: height 0.5s;
      }
      &:hover {
        img.top {
          height: 0;
        }
        .card {
          cursor: pointer;
          .des {
            -webkit-line-clamp: 9;
            height: 243px;
          }
          .btn {
            background-image: linear-gradient(90deg, #ffaa20 2%, #ff710e 100%);
            border-color: transparent;
            color: #fff;
          }
        }
      }
      .card {
        padding: 32px;
        .titles {
          font-size: 20px;
          color: rgba(0, 0, 0, 0.85);
          letter-spacing: 0;
          margin-bottom: 16px;
        }
        .des {
          font-size: 16px;
          color: rgba(0, 0, 0, 0.45);
          letter-spacing: 0;
          line-height: 27px;
          height: 80px;
          overflow: hidden;
          display: -webkit-box;
          flex-direction: column;
          -webkit-line-clamp: 3;
          transition: height 0.5s;
        }
        .btn {
          color: #f26b0d;
          background-color: white;
          border-color: #f26b0d;
          outline: 0;
          width: 116px;
          height: 40px;
          font-size: 16px;
          margin: 0 auto;
          display: block;
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }
  }
}
</style>
