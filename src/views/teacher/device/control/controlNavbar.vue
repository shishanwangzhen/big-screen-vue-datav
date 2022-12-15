<template>
  <div class="navContain">
    <div>
      <ul class="nav" ref="navList">
        <li v-for="(item, index) in navArr" :key="index" :class="{ active: index === curenIndex }"
          @click="itemClick(index)">
          {{ item }}
        </li>
      </ul>
      <dv-border-box-12 class="dv-contain_caozuo" v-show="isShowDV12">
        <div class="caozuo">
          <i class="iconfont icon-caozuojilu"></i><span>操作记录</span>
        </div>
        <div class="record_content">
          <div class="open">
            <i class="iconfont icon-circle open_icon"></i>
            <span>张小花打开设备操作成功</span>&nbsp;&nbsp;
            <span>2022-09-22 10:00:03</span>
          </div>
          <div class="close">
            <i class="iconfont icon-circle close_icon"></i>
            <span>张小花打开设备操作成功</span>&nbsp;&nbsp;
            <span>2022-09-22 10:00:03</span>
          </div>
          <div class="open">
            <i class="iconfont icon-circle open_icon"></i>
            <span>张小花打开设备操作成功</span>&nbsp;&nbsp;
            <span>2022-09-22 10:00:03</span>
          </div>
          <div class="close">
            <i class="iconfont icon-circle close_icon"></i>
            <span>张小花打开设备操作成功</span>&nbsp;&nbsp;
            <span>2022-09-22 10:00:03</span>
          </div>
          <div class="open">
            <i class="iconfont icon-circle open_icon"></i>
            <span>张小花打开设备操作成功</span>&nbsp;&nbsp;
            <span>2022-09-22 10:00:03</span>
          </div>
          <div class="close">
            <i class="iconfont icon-circle close_icon"></i>
            <span>张小花打开设备操作成功</span>&nbsp;&nbsp;
            <span>2022-09-22 10:00:03</span>
          </div>
          <div class="close">
            <i class="iconfont icon-circle close_icon"></i>
            <span>张小花打开设备操作成功</span>&nbsp;&nbsp;
            <span>2022-09-22 10:00:03</span>
          </div>
          <div class="close">
            <i class="iconfont icon-circle close_icon"></i>
            <span>张小花打开设备操作成功</span>&nbsp;&nbsp;
            <span>2022-09-22 10:00:03</span>
          </div>
        </div>
      </dv-border-box-12>
    </div>

    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navArr: ["控制器设备", "解码器", "配置通道"],
      curenIndex: 0,
      isShowDV12: 'true'
    };
  },
  methods: {
    itemClick(index) {
      this.curenIndex = index;
      if (this.curenIndex === 0) {
        let resDom = this.$refs.navList
        resDom.removeAttribute("id")
        this.isShowDV12 = true
        this.$router.push({
          path: '/teacherPage/projectDetails/curProject/control/controlItemTable',
          query: {
            projectName: this.$route.query.projectName,
            projectId: this.$route.query.projectId,
            deviceType: this.$route.query.deviceType
          }
        });
      }
      if (this.curenIndex === 1) {
        let resDom = this.$refs.navList
        resDom.setAttribute('id', "changeheight")
        console.log('resDom', resDom)
        this.isShowDV12 = false
        this.$router.push({
          path: '/teacherPage/projectDetails/curProject/control/controlDecoder',
          query: {
            projectName: this.$route.query.projectName,
            projectId: this.$route.query.projectId,
            deviceType: this.$route.query.deviceType
          }
        });
      }
      if (this.curenIndex === 2) {
        this.isShowDV12 = false
        let resDom = this.$refs.navList
        resDom.setAttribute('id', "changeheight")
        this.$router.push({
          path: '/teacherPage/projectDetails/curProject/control/passageway',
          query: {
            projectName: this.$route.query.projectName,
            projectId: this.$route.query.projectId,
            deviceType: this.$route.query.deviceType
          }
        });
      }
    },
  },
};
</script>
   
<style lang="scss" scoped>
.navContain {
  margin-top: 10px;
  display: flex;
  width: 310px;
  margin-left: 20px;
}

.nav {
  border-radius: 9px;
  padding-top: 10px;
  width: 310px;
  height: 500px;
  background: rgba(5, 13, 75, 1);
  box-shadow: inset 0px 1px 19.99px 0px rgba(18, 142, 232, 0.34);

  li {
    text-align: left;
    margin: 0 20px 20px 0;
    padding-left: 20px;
    line-height: 39.26px;
    color: rgba(255, 255, 255, 0.69);
    font-size: 16px;
    height: 39.26px;
    width: 100%;
    cursor: default;

    &:first-child {
      margin-top: 20px;
    }
  }
}

.active {
  background: linear-gradient(90deg,
      rgba(103, 255, 255, 0.6) 0%,
      rgba(137, 251, 255, 0.26) 41.47%,
      rgba(163, 248, 255, 0) 100%);
}

.caozuo {
  padding: 10px;

  span {
    padding: 5px;
    font-size: 20px;
    color: white;
    font-weight: 700;
  }

  .icon-caozuojilu {
    font-size: 20px;
    color: #5cd9e8;
  }
}

@mixin font {
  font-size: 10px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  text-align: left;
  vertical-align: top;
  padding: 5px;
  display: contents;
}

@mixin box {
  padding: 10px;
  height: 20px;
  line-height: 20px;
}

.open {
  @include box();

  span {
    @include font();
  }

  .open_icon {
    font-size: 10px;
    padding-right: 10px;
    color: rgba(27, 158, 79, 1);
  }
}

.close {
  @include box();

  span {
    @include font();
  }

  .close_icon {
    font-size: 10px;
    padding-right: 10px;
    color: rgba(212, 48, 48, 1);
  }
}

.record_content {
  height: 70%;
  overflow-y: scroll;
}

/* 自定义滚动条样式开始 */
::-webkit-scrollbar {
  width: 5px;
  /*滚动条宽度*/
  height: 15px;
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

#changeheight {
  height: 760px;
}

.dv-contain_caozuo {
  height: 245px;
  width: 320px;
  margin-top: 10px;
}
</style> 