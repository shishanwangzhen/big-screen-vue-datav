<template>
  <div class="tecPage">
    <div class="contain">
      <v-symbol></v-symbol>
      <div class="loginContain" :class="active ? 'topStyle' : ''">
        <div class="title">欢迎登录{{ systemName }}系统</div>
        <img src="../../assets/images/loginImg.png" alt="登录框" class="img" />
        <div class="login_box">
          <div class="account_number">
            <i class="iconfont icon-zerenren"></i>
            <div
              class="input"
              contenteditable="true"
              placeholder="请输入账号"
              @blur="getAccountIput"
              @keydown="fn"
            ></div>
          </div>
          <div class="account_number">
            <i class="iconfont icon-24gf-lock"></i>
            <div
              class="input2"
              contenteditable="true"
              placeholder="请输入密码"
              @blur="getPsdIput"
              @keydown="fn"
              type="password"
            ></div>
          </div>
          <div class="login" @click="sureLogin">
            <div>登录</div>
          </div>
          <div class="login_bottom">
            <div class="left" v-show="applicationShowText">
              <span>没有账号？</span><span @click="application">立即申请</span>
            </div>
            <div class="right" @click="backToCover">
              <i class="iconfont icon-toLeft"></i>
              <span>返回</span>
            </div>
          </div>
        </div>
      </div>
      <div class="application_box" v-show="application_box">
        <div class="content_left"></div>
        <div class="content_right">
          <div class="contentContain">
            <div class="right_title">用户账号申请</div>
            <div class="account inp_box">
              <i class="iconfont icon-renwu-ren"></i>
              <div
                class="inp"
                contenteditable="true"
                placeholder="请输入姓名"
              ></div>
            </div>
            <div class="school inp_box">
              <i class="iconfont icon-shuyi_xuexiaoguanli"></i>
              <div
                class="inp"
                contenteditable="true"
                placeholder="请输入学校"
              ></div>
            </div>
            <div class="major inp_box">
              <i class="iconfont icon-boshimao1"></i>
              <div
                class="inp"
                contenteditable="true"
                placeholder="请输入专业"
              ></div>
            </div>
            <div class="studentID inp_box">
              <i class="iconfont icon-xuehaoguanli"></i>
              <div
                class="inp"
                contenteditable="true"
                placeholder="请输入学号"
              ></div>
            </div>
            <div class="phone inp_box">
              <i class="iconfont icon-top_lianxifangshi"></i>
              <div
                class="inp"
                contenteditable="true"
                placeholder="请输入联系方式"
              ></div>
            </div>
            <div class="password inp_box">
              <i class="iconfont icon-mima"></i>
              <div
                class="inp"
                contenteditable="true"
                placeholder="请输入密码"
              ></div>
            </div>
            <div class="email inp_box">
              <i class="iconfont icon-youxiang"></i>
              <div
                class="inp"
                contenteditable="true"
                placeholder="请输入邮箱"
              ></div>
            </div>
            <div class="teacher inp_box">
              <i class="iconfont icon-laoshi"></i>
              <select name="" class="selects inp" placeholder="" v-model="curId" required>
                <option selected disabled  value="">请选择教师</option>
                <option v-for="item in list" :key="item.id" :value="item.id">{{item.name}}</option>
              </select>
            </div>
            <div class="operation">
              <div class="clear" @click="clearText">清空</div>
              <div class="back" @click="backLogin">返回</div>
            </div>
            <div class="submit_application" @click="submit">提交申请</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Symbol from "../../components/symbol.vue";
import { mapState } from 'vuex'

export default {
  data() {
    return {
      systemName: "",
      role: "",
      applicationShowText: true,
      application_box: false,
      active: false,
      account: "",
      psd: "",
      teacherList:[],
      curId:''
    };
  },
  components: {
    "v-symbol": Symbol,
  },
  methods: {
    // 不允许回车换行
    fn() {
      if (window.event && window.event.keyCode == 13) {
        window.event.returnValue = false;
      }
    },
    // 获取用户密码
    getPsdIput(event) {
      this.psd = event.target.innerText.trim();
      console.log("this.psd", this.psd);
    },
    // 获取账号
    getAccountIput(event) {
      this.account = event.target.innerText.toString().trim();
      console.log("this.account", this.account);
    },
    async sureLogin() {
      // 跳转教师登录页
      if (this.role == "teacher") {
        this.systemName = "教师后台管理";
        this.applicationShowText = false;
        try {
          const { account, psd } = this;
          if (account && psd) {
            await this.$store.dispatch("user/teacherLogin", {
              account: account,
              password: psd,
            });
            this.$router.push({
              path: "/teacherPage",
            });
          }
        } catch (err) {
          alert("账号/密码错误");
          console.log("err", err);
        }
      }
      // 跳转学生登录页
      if (this.role == "student") {
        this.systemName = "学生实训操作";
        this.applicationShowText = true;
        try {
          const { account, psd } = this;
          if (account && psd) {
            await this.$store.dispatch("user/studentLogin", {
              account: account,
              password: psd,
            });
            // 普通学生
            // this.$router.push({
            //   path: "/studentPage",
            // });
            // 学生组长
            this.$router.push({
              path: "/superStudentPage",
            });
          }
        } catch (err) {
          alert("账号/密码错误");
          console.log("err", err);
        }
      }
    },
    backToCover() {
      // 返回封面
      this.$router.push({
        path: "/cover",
      });
    },
    application() {
      this.application_box = true;
      this.active = true;
    },
    backLogin() {
      this.application_box = false;
      this.active = false;
    },
    clearText() {
      let dom = document.getElementsByClassName("inp");
      dom.forEach((el) => {
        el.innerText = "";
      });
    },
    async submit() {
      let dom = document.getElementsByClassName("inp_box");
      let msgObj = {};
      dom.forEach((el) => {
        msgObj[el.classList[0]] = el.innerText;
        
      })
      Reflect.deleteProperty(msgObj,'teacher')
      msgObj.teacherId = this.curId
      
      if (msgObj.account == "" || msgObj.phone == "" || msgObj.password == "" || msgObj.teacher == '') {
        this.$message({
          message: "账号、手机号、密码、教师是必填",
          // type 取值 ‘success’(成功) /warning(警告)/info(消息)/error(错误)/;
          type: "warning",
        });
      } else {
        try {
          await this.$store.dispatch("user/registerStudent", JSON.stringify(msgObj));
          this.$message({
            message: "申请成功，24小时后再登录，如果登录不成功请联系任课老师",
            type: "success",
          });
        } catch (err) {
          this.$message({
            message: "申请失败，可能由于该账号已申请过，请勿再次申请",
            type: "error",
          });
        }
      }
    },
    async getTeacherList(){
      await this.$store.dispatch('user/teacherList')
    }
  }, 
  computed:mapState({
    list:state => state.user.findTeacherList
  }),
   watch: {
    systemName: {
      handler(oldsystemName, newsystemName) {
        console.log("old", oldsystemName);
        console.log("new", newsystemName);
      },
    },
    role: {
      handler(oldsyrole, newsyrole) {
        console.log("old", oldsyrole);
        console.log("new", newsyrole);
      },
    },
    curValue: {
      handler(first){
        console.log('first',first)
      }
    }
  },
  beforeMount () {
    this.role = this.$route.params.role;
    if (this.role == "teacher") {
      this.systemName = "教师后台管理";
      this.applicationShowText = false;
    }
    if (this.role == "student") {
      this.systemName = "学生实训操作";
      this.applicationShowText = true;
    }
  },
  created(){
    this.getTeacherList()
  },
};
</script>

<style lang="scss" scoped>
$content: attr(placeholder);

@mixin boxStyle {
  width: 650px;
  height: 50px;
  white-space: nowrap;
  overflow: hidden;
  background: linear-gradient(
    200deg,
    rgba(0, 213, 255, 0.01) 0%,
    rgba(0, 213, 255, 0.3) 99%
  );
  font-size: 17.93px;
  font-weight: 400;
  clip-path: polygon(15px 0, 100% 0, 100% 100%, 0px 100%, 0 15px);
  color: rgba(0, 213, 255, 1);
}

.tecPage {
  background: url("../../assets/images/background.png");
  background-color: rgb(22, 55, 139);
  width: 1920px;
  height: 937px;
  position: relative;
}

.contain {
  width: 1920px;
  height: 937px;
  background-image: url("../../assets/images/bg2.png");
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.loginContain {
  height: 560px;
  width: 720px;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  margin: auto;
  img{
    height: 560px;
    width: 720px;
  }
}

.title {
  // padding-left: 70px;
  padding-bottom: 50px;
  text-shadow: 2px 2px 3px rgba(112, 231, 255, 1);
  /** 文本1 */
  font-size: 46.09px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 0px;
  color: rgba(112, 231, 255, 1);
}

.account_number {
  display: flex;
  line-height: 50px;
  margin-bottom: 20px;
  margin-top: 30px;
  @include boxStyle;
}

.login_box {
  .iconfont {
    padding-left: 20px;
  }
}

.input {
  text-align: left;
  padding-left: 20px;
}

.input2 {
  text-align: left;
  padding-left: 20px;
}

.input:empty::before {
  content: $content;
}

.input2:empty::before {
  content: $content;
}

.login {
  @include boxStyle;
  margin-top: 50px;
  text-align: center;
  line-height: 50px;

  &:hover {
    cursor: pointer;
  }

  &:active {
    box-shadow: 2px 2px 3px rgba(26, 113, 153, 0.171);
    font-size: 19px;
  }
}

.login_box {
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%,-50%);
}

.login_bottom {
  cursor: default;
  margin-top: 20px;

  .right {
    color: rgba(0, 213, 255, 1);
    font-size: 15px;
    float: right;

    i {
      padding-right: 15px;
    }

    span {
      color: rgba(0, 213, 255, 1);
    }
  }

  .left {
    float: left;

    span {
      font-size: 15px;
    }

    span:first-child {
      color: rgba(229, 229, 229, 1);
    }

    span:last-child {
      color: rgba(0, 119, 255, 1);
    }
  }
}

.application_box {
  display: flex;
  width: 1620px;
  height: 750px;
  position: absolute;
  left: 50%;
  top: 55%;
  transform: translate(-50%, -50%);

  .content_left {
    border-radius: 30px 0px 0px 30px;
    width: 810px;
    height: 750px;
    background: url(../../assets/images/applicationImg.jpg) no-repeat;
    background-size: 810px 750px;
    z-index: 100;
    transition: all 0.2s ease;
    backdrop-filter: saturate(180%) blur(1px);
  }

  .content_right {
    border-radius: 0px 30px 30px 0px;
    background: rgba(255, 255, 255, 0.8);
    width: 810px;
    height: 750px;
    position: relative;
    .contentContain{
      position: absolute;
      top: 50%;
      left:50%;
      transform: translate(-50%,-50%);
    }

    .right_title {
      width: 411px;
      height: 75px;
      line-height: 75px;
      text-align: center;
      font-size: 30px;
      font-weight: 500;
      color: rgba(45, 81, 173, 1);
    }

    .inp_box {
      display: flex;
      padding-left: 15px;
      font-size: 20px;
      width: 427px;
      height: 48px;
      line-height: 48px;
      opacity: 1;
      border-radius: 4px;
      background: rgba(255, 255, 255, 1);
      border: 1px solid rgba(45, 81, 173, 1);
      margin-bottom: 20px;
      white-space: nowrap;
      overflow: hidden;

      .iconfont {
        color: rgba(45, 81, 173, 1);
      }

      .inp {
        padding-left: 10px;
        font-size: 15px;
        width: 100%;
        color: rgb(55, 113, 180);

        &:empty::before {
          content: $content;
        }
      }
      .selects {
        border: none;
      }
    }

    @mixin operation_child_style {
      // width: 72px;
      height: 38px;
      opacity: 1;
      font-size: 25px;
      font-weight: 500;
      line-height: 38px;
      letter-spacing: 5px;
      color: rgba(0, 47, 166, 1);
      border-bottom: 1px solid rgba(0, 47, 166, 1);
      text-align: center;
      cursor: default;
    }

    .operation {
      width: 429px;
      display: flex;
      justify-content: space-between;
      padding: 10px;

      .clear {
        @include operation_child_style();
      }

      .back {
        @include operation_child_style();
      }
    }

    .submit_application {
      margin-top: 10px;
      width: 430px;
      height: 48px;
      opacity: 1;
      border-radius: 2px;
      background: rgba(45, 81, 173, 1);
      text-align: center;
      color: aliceblue;
      line-height: 48px;
      cursor: default;
    }
  }
}

.center2 {
  width: 50px;
  height: 50px;
  background-color: #7fffd4;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -25px;
  margin-top: -25px;
}

/* 结合 calc 计算*/
.center2 {
  width: 50px;
  height: 50px;
  background-color: #7fffd4;
  position: absolute;
  left: calc(50% - 25px);
  top: calc(50% - 25px);
}

/* 结合 transform */
.center2 {
  width: 50px;
  height: 50px;
  background-color: #7fffd4;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.topStyle {
  left: -880px;
}
</style>