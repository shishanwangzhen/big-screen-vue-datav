<template>
  <div class="home">
    <div class="container-login"></div>
    <v-symbol />
    <div class="title">
      <p class="projectName">江苏农林职业技术学院信工院物联网实训云平台</p>
      <div class="classification" @click="login">
        <p >
          <img src="../../assets/images/teacher_entrance.png" alt="教师入口" class="entrance"  data-type="teacher" >
        </p>
          <p >
          <img src="../../assets/images/student_entrance.png" alt="学生入口" class="entrance" data-type="student" >
          </p>
      </div>
    </div>
    <div class="statement">
      <p>Copyright</p>
      <img src="../../assets/images/statement.png" alt="stament" />
      <p>南京科沃信息技术有限公司 版权所有</p>
    </div>
  </div>
</template>
  
  <script>

import Symbol from "../../components/symbol.vue";
export default {
  data() {
    return {
      isShow: false,
    };
  },
  components: {
    "v-symbol": Symbol,
  },
  methods: {
    login(event) {
      let type = event.target.dataset.type
      if(type == 'teacher'){
        this.$router.push({
            name:"Login",
            params:{role:'teacher'}
        })
      this.$bus.$emit("curLoginID",type)
      }
      if(type == 'student'){
        this.$router.push({
            name:"Login",
            params:{role:'student'}
        })
        this.$bus.$emit("curLoginID",type)
      }
    },
  },
};
</script>
  
<style scoped lang="scss">
@font-face {
  font-family: myFontFamily;
  src: url("../../assets/YouSheBiaoTiHei-2.ttf");
}

.home {
  width: 1920px;
  height: 937px;
  text-align: center;
  position: relative;
  background: url("../../assets/images/background.png");
  background-color: rgb(22, 55, 139);
}
.container-login {
  width: 1920px;
  height: 937px;
  background: url(https://img.js.design/assets/img/632a8beac04bd4db3f4f6e16.png#9a4a09e446379971835b0e1dc6a9a6f3);
  background-repeat: no-repeat;
  background-size: cover;
}
.container-login .img {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 500px;
  width: 500px;
}

.title {
  left: 0;
  top: 300px;
  right: 0;
  bottom: 0;
  margin: auto;
  position: absolute;
  opacity: 1;
  letter-spacing: 2px;
  color: rgba(112, 231, 255, 1);
  .projectName {
    text-shadow: 8.52px 0px rgba(0, 0, 0, 0.25);
  }
  font-size: 70px;
  font-family: myFontFamily;
}
.classification {
  display: flex;
  margin: 160px auto;
  width: 736px;
  justify-content: space-between;
  align-content: center;
}
.entrance {
  width: 320px;
  height: 100px;

}
.entrance:hover {
  cursor: pointer;
}
.entrance:active{
  width: 310px;
  height: 90px;
}
.iconfont {
  color: rgba(166, 166, 166, 0.89);
  font-size: 50px;
}
.statement {
  border-top: 1px solid rgba(166, 166, 166, 0.89);
  position: absolute;
  height: 50px;
  width: 100vw;
  display: flex;
  top: 900px;
  color: rgba(166, 166, 166, 0.89);
  /** 文本1 */
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 20px;
}
.statement p:first-child {
  margin-left: 40vw;
}
.statement p {
  margin-top: 10px;
}
.statement img {
  height: 14px;
  width: 14px;
  margin-top: 14px;
}
</style>