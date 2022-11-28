<template>
  <div class="msg-reminder-contain" v-show="showAplication">
    <div class="msg-reminder-box">
      <div class="top_title">
        <span>消息提醒</span>
        <i class="iconfont icon-24gl-cross" @click="cancelShowMsg"></i>
      </div>
      <div class="content">
        <table>
          <thead style="width: 100%"></thead>
          <tbody>
            <tr v-for="user in aplicationList" :key="user.id">
              <td>用户{{ user.account }}申请注册账户</td>
              <td>联系方式：{{ user.phone }}</td>
              <td>
                <button class="agree" @click="agree(user.id)">同意</button>
                <button class="refuse" @click="refuse(user.id)">拒绝</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <v-mask :isActive="showAplication"></v-mask>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  inject: ["reload"],
  props: ["showMsg"],
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    cancelShowMsg() {
      this.$store.commit('application')
    },
    async agree(id) {
      await this.$store.dispatch('user/updateAplicationList',{id,status:1})
      await this.$store.dispatch('user/aplicationList',{status:0})
    },
    async refuse(id) {
      await this.$store.dispatch('user/updateAplicationList',{id,status:2})
      await this.$store.dispatch('user/aplicationList',{status:0})
    },
  },
  watch: {
    showMsg: {
      handler(newshowMsg) {
        this.isShow = newshowMsg;
      },
    },
  },
  computed:mapState({
    showAplication: state => state.showAplication,
    aplicationList: state => state.user.aplicationList,
  }),
};
</script>

<style lang="scss" scoped>
.msg-reminder-contain {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  float: left;

  .msg-reminder-box {
    z-index: 9001;
    background-image: url(../assets/images/operation-prompt-box.png);
    width: 1150px;
    height: 700px;
    background-size: 1150px 700px;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: auto;

    .top_title {
      margin-top: 50px;
      span {
        font-size: 35px;
        font-weight: 400;
        letter-spacing: 0px;
        line-height: 0px;
        color: rgba(255, 255, 255, 1);
        float: left;
        padding-left: 20px;
      }

      i {
        color: rgba(196, 196, 196, 1);
        text-align: right;
        font-size: 35px;
        font-weight: 400;
        float: right;
        padding-right: 20px;
      }
    }

    .content {
      margin-top: 150px;
      margin-left: 150px;
    }
  }
}

tbody {
  overflow-y: scroll;
  display: block;
  min-height: 430px;
  max-height: 430px;
  overflow-x: hidden;
}

tbody tr {
  display: table;
  width: 100%;
  table-layout: fixed;
}

table tbody tr td {
  font-size: 25px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  padding-right: 30px;
  padding-bottom: 50px;
  //   width:350px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

::-webkit-scrollbar {
  width: 5px;
  /*滚动条宽度*/
  height: 18px;
  /*滚动条高度*/
}

/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
  box-shadow: 0px 1px 3px rgb(6, 79, 112) inset;
  /*滚动条的背景区域的内阴影*/
  border-radius: 10px;
  /*滚动条的背景区域的圆角*/
  background-color: rgb(6, 79, 112);
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

@mixin btn {
  color: rgba(255, 255, 255, 1);
  width: 50px;
  height: 30px;
  border-radius: 10.5px;
  border: none;
  margin-right: 10px;
}

.refuse {
  background: rgba(216, 40, 40, 1);
  @include btn();
  &:active {
    box-shadow: inset 0px -7px 4.67px 0px rgba(255, 255, 255, 0.25);
  }
}

.agree {
  background: rgba(0, 186, 173, 1);
  @include btn();
  &:active {
    box-shadow: inset 0px -7px 4.67px 0px rgba(255, 255, 255, 0.25);
  }
}
</style>