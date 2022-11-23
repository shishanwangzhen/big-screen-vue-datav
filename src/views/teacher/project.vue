<template>
  <div style="background-color: rgb(4, 7, 47); width: 100%; height: 100%">
    <div class="top">
      <div class="systemName_contain">
        <div class="systemName">
          <span>江苏农林职业技术学院信工院物联网实训云平台</span>
        </div>
      </div>

      <div class="stick"></div>
      <div class="left">
        <div @click="toProject">
          项目管理
          <i class="iconfont icon-quanxianfuzhi" style="padding-left: 10px; font-size: 20px"></i>
        </div>
      </div>
      <div class="right">
        <div class="userName">
          <img src="../../assets/images/head_portrait.png" alt="头像" />
          <span class="roleName">{{ userName }}</span>
        </div>
        <div>
          <img src="../../assets/images/information.png" alt="信息" @click="getaplicationlist" />
          <img src="../../assets/images/sign_out.png" alt="退出" @click="logout" />
        </div>
      </div>
    </div>
    <msg-reminder></msg-reminder>
    <router-view></router-view>
  </div>
</template>
  
<script>
import msgreminder from "../../components/msg-reminder.vue";
export default {
  inject: ["reload"],
  data() {
    return {
      showMsg: false,
      showSelect: false,
      userName: ''
    };
  },
  components: {
    "msg-reminder": msgreminder,
  },
  methods: {
    logout() {
      try {
        this.$store.dispatch('user/logout')
        this.$router.push("/cover");
      } catch {
        alert('退出失败')
      }
    },
 
    isShowMsg() {

    },
    toProject() {
      // this.reload()
      this.$router.push({
        path: "/teacherPage/projectTable",
      });
    },
    async getaplicationlist() {
      this.$store.commit('application')
      await this.$store.dispatch('user/aplicationList', { status: 0 })
    }
  },
  beforeMount() {
    this.userName = sessionStorage.getItem('teacherAccount')
  },
  watch: {
    // $route(to, from) {
    //   let toPath = to.path
    //   if (toPath.includes("/teacherPage/projectDetails/")) {
    //     this.showSelect = true
    //   }
    //   if (toPath.includes("/teacherPage/projectTable")) {
    //     this.showSelect = false
    //   }
    // }
  }
  // },
};
</script>
  
<style lang="scss" scoped>
.systemName_contain {
  width: 1920px;
  height: 93px;
  background: linear-gradient(180deg,
      transparent 10%,
      rgba(54, 247, 255, 1) 90%,
      rgba(54, 247, 255, 1) 100%);
  clip-path: polygon(0 0,
      100% 0,
      100% 40%,
      85% 40%,
      82.5% 100%,
      60% 100%,
      59% 90%,
      41% 90%,
      40% 100%,
      17.5% 100%,
      15% 40%,
      0 40%);
}

.systemName {
  text-align: center;
  line-height: 90.75px;
  width: 1920px;
  height: 90.75px;
  opacity: 1;
  background: linear-gradient(180deg,
      rgb(5, 34, 91) 0%,
      rgba(14, 95, 255, 1) 100%);
  clip-path: polygon(0 0,
      100% 0,
      100% 40%,
      85% 40%,
      82.5% 100%,
      60% 100%,
      59% 90%,
      41% 90%,
      40% 100%,
      17.5% 100%,
      15% 40%,
      0 40%);

  span {
    font-size: 45px;
    font-weight: 900;
    letter-spacing: 5px;
    color: rgba(255, 255, 255, 1);
  }
}

.stick {
  margin: -5px 785px;
  width: 350px;
  height: 5px;
  opacity: 1;
  border-radius: 2.5px;
  background: linear-gradient(90deg,
      rgba(0, 173, 189, 1) 0%,
      rgba(0, 255, 199, 1) 54.14%,
      rgba(0, 182, 199, 1) 100%);
}

@mixin diamond {
  width: 170px;
  height: 53px;
  background: linear-gradient(180deg, rgb(5, 34, 91) 0%, rgb(5, 49, 135) 100%);
}

.left {
  margin-top: -52px;

  div {
    cursor: pointer;
    text-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
    /** 文本1 */
    font-size: 25px;
    font-weight: 700;
    text-align: center;
    line-height: 53px;
    color: rgba(102, 255, 255, 1);
    clip-path: polygon(0 0, 87% 0, 100% 100%, 13% 100%);
    display: inline-block;
    width: 320px;
    height: 53px;
    background: linear-gradient(180deg,
        rgba(14, 95, 255, 1) 0%,
        rgba(14, 95, 255, 0.43) 100%);
  }

  .member {
    margin-right: -20px;
    margin-left: 5px;
  }
}

.right {
  margin-top: -53px;
  margin-left: 1590px;

  div {
    text-align: center;
    line-height: 75px;
    clip-path: polygon(25% 0, 100% 0, 75% 100%, 0 100%);
    display: inline-block;
    @include diamond();

    img {
      width: 35px;
      height: 35px;
      margin-right: 10px;
    }
  }

  .userName {
    vertical-align: bottom;
    line-height: 53px;
    margin-right: -20px;
    margin-left: 5px;
    color: rgba(2, 122, 255, 1);

    img {
      vertical-align: middle;
    }
  }
}



#text {
  color: rgba(102, 255, 255, 1);
  background: linear-gradient(180deg,
      rgba(14, 95, 255, 1) 0%,
      rgba(14, 95, 255, 0.43) 100%);
}

#text2 {
  color: white;
  background: linear-gradient(180deg, rgb(5, 34, 91) 0%, rgb(5, 49, 135) 100%);
}

.projectSelection {
  width: 657px;
  height: 47px;
  // border: 1px solid rgb(19, 201, 150);
  background-image: url(../../assets/images/selectbg.png);
  background-repeat: no-repeat;
  background-size: 675px 47px;
  margin-left: 640px;
  margin-top: 10px;
  display: inline-block;
  text-align: center;
  padding-top: 10px;
}
</style>