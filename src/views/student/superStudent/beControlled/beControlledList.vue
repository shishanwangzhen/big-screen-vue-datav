<template>
  <div class="sensorContain">
    <div class="top">
      <div class="search">
        <select name="" class="configure">
          <option value="" selected>联通控制器1</option>
          <option value="">2</option>
          <option value="">2</option>
          <option value="">2</option>
        </select>
      </div>
      <div class="addSensor">所有设备</div>
      <div class="delectWays" @click="addBecontrol">
        <i class="iconfont icon-zengjia"></i> 添加设备
      </div>
    </div>
    <div class="becontrolListContainer">
      <div class="becontrolListItemContainer">
        <div class="becontrolListItem" v-for="num in length" :key="num">
          <ul class="itemTop">
            <li :class="
              type == '在线' ? 'on-line' : type == '离线' ? 'off-line' : ''
            "></li>
            <li>种植槽升降架1号</li>
            <li><i class="iconfont icon-close"></i></li>
          </ul>
          <!-- 控制 -->
          <div v-show="curIndexArr.includes(`${num}-0`)?true:false" class="common">
            <ul class="instructions">
              <li v-for="(item, index) in instructions" :key="index">
                {{ item }}
              </li>
            </ul>
            <div class="img">
              <img src="../../../../assets/images/becontrolImg.png" alt="" />
            </div>
          </div>
          <!-- 指令 -->
          <div v-show="curIndexArr.includes(`${num}-1`)?true:false" class="common">
            <ul class="instructionsContent">
              <li>开启指令：2-关闭 1-开启</li>
              <li>关闭指令：1-关闭 2-开启</li>
              <li>暂停指令：1-关闭 2-关闭</li>
              <li>所属控制器：联通控制器</li>
              <li>通道号：通道1</li>
              <li>
                <span @click="isshowInstructions">
                  <i class="iconfont icon-xiezi"></i>
                  指令
                </span>
                <span @click="unbinding">
                  <i class="iconfont icon-lajitong1"></i>
                  解绑
                </span>
              </li>
            </ul>
          </div>
          <!-- 详情 -->
            <ul v-show="curIndexArr.includes(`${num}-2`)?true:false" class="common details">
              <li>设备DI：</li>
              <li>设备型号：</li>
              <li>所属控制器：</li>
              <li>通道号：</li>
              <li>备注：</li>
            </ul>
          <div class="basicContent">
            <span v-for="(item, index) in spanContent" :key="index"
              :class="curIndexArr.includes(`${num}-${index}`) ? 'item' : ''" @click="getIndex(index, num)">
              {{ item }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <v-editInstructions></v-editInstructions>
    <v-unbinding></v-unbinding>
    <v-addBecontrol :addList="addList" :addTitle="addTitle"></v-addBecontrol>
  </div>
</template>
      
<script>
  import addBecontrol from '_c/v-addBecontrol'
  export default {
  name: "app",
  components: {
    'v-addBecontrol':addBecontrol
  },
  inject:['reload'],
  data() {
    return {
      type: "在线",
      length: 15,
      spanContent: ["控制", "指令", "详情"],
      instructions: ["开启", "关闭", "暂停"],
      addList:['设备名称','设备ID','设备型号'],
      addTitle:'被控设备',
      curIndexArr: [],
      showCtronll:true,
      showInstructions:false,
      showDetails:false,
      curNum:'2'
    };
  },
  methods: {
    getIndex(index, num) {
      this.curNum = num
      // 如果想这样写，watch监听不到数组的变化this.curIndexArr[num - 1] = `${num}-${index}`;
      // 得用this.$set
      // 如果操作对象是数组，改变数组的值用Vue的$set方法，
      // 改变数组的长度用数组的splice方法使数组变化变成可监听的。
      // 如果操作对象是对象。如果操作的属性是对象内已经有的值，使用$watch,加上关键字deep深度监听对象，
      // 如果操作的属性是对象内没有的新属性。使用$set使对象变成可监听的！
      this.$set(this.curIndexArr,num - 1,`${num}-${index}`)
    },
    isshowInstructions(){
      this.$store.commit('editInstructions')
    },
    unbinding(){
      this.$store.commit('unbinding')
    },
    addBecontrol(){
      this.$store.commit("isShowAddBox");
    }
  },
  mounted() {
    for (let i = 1; i <= this.length; i++) {
      this.curIndexArr.push(`${i}-0`);
    }
  },
  watch: {
    curIndexArr(newArr, oldArr) {
        console.log("监控curIndexArr");
        console.log("oldArr", oldArr, "newArr", newArr);
      },
    deep: true, // 是否开启深度监听
    immediate: true, // 是否初始化时就执行一次
    },
};
</script>
      
<style scoped lang="scss">
.sensorContain {
  margin-top: 10px;
  margin-left: 20px;

  .top {
    display: flex;

    .search {
      height: 50px;
      width: 600px;
      background: url("../../../../assets/images/searchBgImg.png");
      background-size: 600px 50px;
      padding: 10px;
    }

    @mixin ways {
      height: 50px;
      background: url("../../../../assets/images/addSensorImg.png") no-repeat;
      font-size: 20px;
      line-height: 50px;
      text-align: center;
      cursor: pointer;
    }

    .addSensor {
      @include ways();
      margin-left: 10px;
      width: 200px;
      background-size: 200px 50px;
      color: rgba(0, 213, 255, 1);
    }

    .addSensor:active {
      font-size: 18px;
    }

    .delectWays {
      @include ways();
      margin-left: 60px;
      color: rgba(0, 213, 255, 1);

      &:active {
        font-size: 18px;
      }

      width: 237px;
      background-size: 237px 50px;
    }
  }
}

.configure {
  height: 30px;
  width: 500px;
  color: rgba(0, 213, 255, 1);
  font-size: 20px;
  border: none;
  background: transparent;
}

.becontrolListContainer {
  margin-top: 10px;
  width: 1475px;
  height: 700px;
  opacity: 1;
  border-radius: 8.73px;
  background: rgba(5, 13, 75, 1);
  border: 1.94px solid rgba(8, 72, 138, 1);
  box-shadow: inset 0px 0.97px 19.4px 0px rgba(18, 142, 232, 0.34);
  position: relative;

  .becontrolListItemContainer {
    padding-top: 10px;
    padding-left: 20px;
    padding-bottom: 5px;
    position: absolute;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    width: 100%;
    grid-row-gap: 10px;

    .becontrolListItem {
      width: 248px;
      height: 300px;
      opacity: 1;
      border-radius: 4.29px;
      background: linear-gradient(180deg,
          rgba(0, 102, 255, 0.8) 0%,
          rgba(0, 10, 37, 0) 49.98%,
          rgba(0, 102, 255, 0.9) 100%);
      border: 1.28px solid rgba(0, 102, 255, 1);

      .img {
        text-align: center;

        img {
          width: 140px;
          height: 165px;
        }
      }

      .itemTop {
        padding: 10px;
        width: 100%;
        display: flex;
        justify-content: space-between;

        &>li:first-child {
          width: 20px;
          height: 20px;
          border-radius: 50%;
        }

        &>li:nth-child(2) {
          padding-top: 20px;
          font-size: 18px;
          font-weight: 400;
          letter-spacing: 3px;
          color: rgba(255, 255, 255, 1);
        }

        &>li:last-child {
          font-size: 20px;
          color: rgba(255, 87, 51, 1);
        }

        .on-line {
          background: rgba(9, 226, 248, 1);
        }
      }

      .basicContent {
        margin-left: 5px;
        width: 232px;
        height: 38px;
        background-size: cover;
        background: url(../../../../assets/images/bottom.png) no-repeat;
        display: flex;
        justify-content: space-between;
        padding-left: 5px;
        padding-right: 5px;

        span {
          margin-top: 5px;
          display: inline-block;
          width: 70px;
          height: 30px;
          line-height: 30px;
          text-align: center;
          font-size: 16px;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          cursor: default;
        }

        .item {
          background: linear-gradient(180deg,
              rgba(5, 226, 230, 1) 0%,
              rgba(16, 94, 158, 0.48) 52.37%,
              rgba(5, 226, 230, 1) 100%);
          clip-path: polygon(0 20%,
              25% 0,
              80% 0,
              100% 20%,
              100% 80%,
              80% 100%,
              25% 100%,
              0 80%);
        }
      }

      .instructions {
        display: flex;
        justify-content: center;
        margin-bottom: 5px;

        li {
          cursor: default;
          margin: 0 10px;
          width: 49px;
          text-align: center;
          height: 25px;
          font-size: 15px;
          font-weight: 400;
          line-height: 25px;
          color: rgba(229, 229, 229, 1);
          border-radius: 18px;
          background: linear-gradient(180deg,
              rgba(133, 192, 212, 0.01) 0%,
              rgba(98, 124, 191, 1) 100%);

          &:hover {
            cursor: pointer;
          }

          &:active {
            box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
          }
        }
      }
    }

    & {
      height: 690px;
      overflow-y: scroll;
    }
  }
}

/* 自定义滚动条样式开始 */
::-webkit-scrollbar {
  width: 5px;
  /*滚动条宽度*/
  height: 18px;
  /*滚动条高度*/
}

/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
  box-shadow: 0px 1px 3px #071e4a inset;
  /*滚动条的背景区域的内阴影*/
  border-radius: 10px;
  /*滚动条的背景区域的圆角*/
  background-color: #071e4a;
  /*滚动条的背景颜色*/
}

/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  box-shadow: 0px 1px 3px #00a0e9 inset;
  /*滚动条的内阴影*/
  border-radius: 10px;
  /*滚动条的圆角*/
  background-color: #00a0e9;
  /*滚动条的背景颜色*/
}

.common {
  height: 195px;
}
@mixin commonStyle{
  margin-left: 20px;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 1px;
  color: rgba(255, 255, 255, 1);
}
.instructionsContent {
  @include commonStyle();
  li {
    line-height: 30px;

    &:last-child {
      cursor: default;
      text-align: right;
      span {
        padding-right: 10px;
      }
    }
  }
}
.details{
  line-height: 30px;
  @include commonStyle()
}
</style>
      