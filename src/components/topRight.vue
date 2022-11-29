<template>
  <div class="container">
    <div class="top_right">
      <div class="drop_down_box">
        <el-select
          class="select"
          v-model="value"
          placeholder="请选择"
          filterable
          default-first-option
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="curOption">
        <div class="member" @click="Switch" data-Switch="成员管理">成员管理2</div>
        <p class="dotted_line"></p>
        <div class="device" @click="Switch" data-Switch="设备管理">设备管理</div>
      </div>
      <div class="basic_functions">
        <img src="../assets/images/head_portrait.png" alt="头像" />
        <div class="roleName">管理员</div>
        <img src="../assets/images/sign_out.png" alt="退出" @click="logOut"/>
      </div>
    </div>
  </div>
</template>

<script >
export default {
  inject:['reload'],
  data() {
    return {
      activeName: "second",
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value: "",
      toDevicePage:'false',
    };
  },
  methods: {
    // handleClick(tab, event) {
    //     console.log(tab, event);
    // }
    Switch(event){
      if(event.target.dataset.switch == "成员管理"){
        sessionStorage.setItem("key", "成员管理");
        // this.reload()
      }else{
        this.toDevicePage = true
        this.$bus.$emit('deviceAdministration',this.toDevicePage)
        sessionStorage.setItem("key", "设备管理");
        // this.reload()
      }
    },
    logOut(){
      this.$router.push('/cover')
    }
  },
};
</script >

<style scope lang="scss">
body {
  position: relative;
  font-family: siyuanheiti;
}
@font-face {
  font-family: siyuanheiti;
  src: url("../assets/SourceHanSerifCN-Medium-6.ttf");
}

@keyframes roll {
  from {
    background-position-x: 0;
  }

  to {
    background-position-x: 50vw;
  }
}
@keyframes roll2 {
  from {
    background-position-x: 0vw;
  }

  to {
    background-position-x:50vw;
  }
}

@mixin path {
  clip-path: polygon(6% 0, 100% 0, 100% 100%, 80% 100%, 75% 85%, 1% 85%);
}

.container {
  clip-path: polygon(5.5% 0, 100% 0, 100% 100%, 80% 100%, 76% 86%, 0 86%);
  height: 94px;
  width: 50vw;
  background: linear-gradient(
    to right,
    transparent 10%,
    rgb(0, 132, 255) 90%,
    rgb(0, 132, 255) 100%
  );
  animation: roll2 3s linear infinite;
}

.top_right {
  // justify-content: center;
  //   align-items: center;
  display: flex;
  @include path;
  height: 90px;
  width: 49.8vw;
  background: linear-gradient(
    90deg,
    rgb(11, 72, 194) 0%,
    rgb(14, 29, 85) 84.73%,
    rgb(15, 32, 93) 100%
  );
}

.drop_down_box {
  font-size: 26px;
  .el-select-dropdown {
    border: none;
    background-color: rgba(1, 28, 82, 0.8);
  }

  //输入框
  .el-input__inner {
    color: rgba(102, 255, 255, 1);
    border-color: #00fff6;
    background-color: rgba(1, 28, 82, 0.8);
  }

  //聚焦时的样式
  .el-select .el-input.is-focus .el-input__inner {
    border-color: #0b61aa;
    background-color: rgba(1, 28, 82, 0.8);
    color: #00d3e9;
  }

  //下拉框选中
  .el-select-dropdown__item {
    color: #eee;
  }

  //鼠标经过下拉框
  .el-select-dropdown__item.hover,
  .el-select-dropdown__item:hover {
    color: #00d3e9;
    background-color: #d9dbdd;
  }
}

.select {
  // background-color: rgb(43, 32, 32);
  width: 150px;
  /*margin-left: 5vw;*/
  /*margin-top: 20px;*/
}
.curOption {
  display: flex;
  margin-left: 20px;
  margin-top: 0;
}
@mixin boxStyle {
}
.curOption div {
  margin: 25px;
  text-align: center;
  line-height: 32.54px;
  height: 32.54px;
  width: 142.17px;
  background: rgb(48, 101, 185);
  /** 文本1 */
  font-size: 19.06px;
  font-weight: 400;
  letter-spacing: 0px;
  color: rgb(3, 166, 241);
  border-radius: 3px;
  border-bottom: 4px solid rgb(19, 130, 206);
  cursor: pointer;
}

.curOption div:active {
  color: #00fff6;
  box-shadow: 2px 1px 2px rgba(36, 124, 225, 1);
}
.dotted_line {
  margin-top: 25px;
  width: 0;
  height: 32.54px;
  border-right: 3px dotted rgb(36, 124, 225);
}
.basic_functions {
  text-align: center;
  display: flex;
  margin-top: 20px;
  margin-left: 50px;
  img {
    width: 48px;
    height: 48px;
    &:hover {
      cursor: pointer;
    }
    &:active {
      width: 49px;
      height: 49px;
    }
  }
  .roleName {
    width: 60px;
    margin: 12px 20px 10px 5px;
    font-size: 16px;
    font-weight: 900;
    letter-spacing: 0px;
    color: rgba(2, 122, 255, 1);
  }
}
</style>