<template>
  <div class="main_contain">
    <div class="left">
      <div class="_top">
        <div class="left_title"></div>
        <div class="title_name">成员列表</div>
      </div>
      <div class="card_contain">
        <div class="card" v-for="(item, index) in basic_msg" :key="index">
          <div class="card_top">
            <div class="card_head_portrait">
              <el-avatar
                :size="70"
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                @error="errorHandler"
              >
                <img
                  src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
                />
              </el-avatar>
            </div>
            <div class="operation">
              <div class="delete" @click="_delete">
                <i class="iconfont icon-lajitong"></i>
              </div>
              <div class="edit" @click="_isEdit"><i class="iconfont icon-tianxie"></i></div>
            </div>
          </div>
          <ul class="basic_information">
            <li v-for="(i, _index) in item" :key="_index">{{ i }}</li>
          </ul>
          <div></div>
          <div class="card_bottom">
            <p style="color: rgba(255, 255, 255, 1)">绑定设备：</p>
            <p>
              <span
                v-for="(item, index) in device_details"
                :key="index"
                style="color: rgba(255, 255, 255, 1)"
                >{{ item }}</span
              >
            </p>
            <p
              style="
                color: rgba(255, 255, 255, 1);
                text-decoration: underline;
                cursor: pointer;
              "
            >
              查看详情
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="edit_top">
        <div
          class="left_title msg_edit"
          style="width: 18.48px; height: 28.49px"
        ></div>
        <div class="title_edit">编辑</div>
      </div>
      <ul class="edit_student_msg">
        <li>
          <span>输入账号：</span>
          <div :contenteditable=contenteditable @keydown="fn" class="input"></div>
        </li>
        <li>
          <span>输入密码：</span>
          <div :contenteditable=contenteditable @keydown="fn" class="input"></div>
        </li>
        <li>
          <span>选择用户组：</span>
          <select name="" class="select_user_group narrow" ref="select">
            <option value="">组1</option>
            <option value="">组2</option>
            <option value="">组3</option>
            <option value="">组4</option>
            <option value="">组5</option>
          </select>
        </li>
        <li>
          <span>选择角色：</span>
          <select name="" class="select_user_group" ref="select2">
            <option value="">组1</option>
            <option value="">组2</option>
            <option value="">组3</option>
            <option value="">组4</option>
            <option value="">组5</option>
          </select>
        </li>
        <li>
          <span>手机号码：</span>
          <div :contenteditable=contenteditable @keydown="fn" class="input"></div>
        </li>
        <li>
          <span>绑定设备：</span>
          <select name="" class="select_user_group" ref="select3">
            <option value="">组1</option>
            <option value="">组2</option>
            <option value="">组3</option>
            <option value="">组4</option>
            <option value="">组5</option>
          </select>
        </li>
      </ul>
      <div class="remarks">
        <p>备注：</p>
        <div :contenteditable=contenteditable class="remarks_content"></div>
      </div>
      <div class="sureEdit">确认修改</div>
    </div>
    <v-deleteBox :showBox="showDeleComfirm" :delectType="sendType" v-if="showDeleComfirm"></v-deleteBox>
  </div>
</template>
<script>
  // import deleteBox from "../../components/deleteBox.vue"
export default {
  components:{
    // "v-deleteBox":deleteBox
  },
  data() {
    return {
      contenteditable:false,
      showBox:'',
      sendType:'用户',
      isShow: false,
      isActive: false,
      value: "",
      basic_msg: [
        {
          userName: "张晓花",
          user_role: "江苏农林1号实训台管理员",
          training_platform: "江苏农林1号实训台",
          phone: "电话：+ (123) 1800-567",
        },
        {
          userName: "张晓花",
          user_role: "江苏农林1号实训台管理员",
          training_platform: "江苏农林1号实训台",
          phone: "电话：+ (123) 1800-567",
        },
        {
          userName: "张晓花",
          user_role: "江苏农林1号实训台管理员",
          training_platform: "江苏农林1号实训台",
          phone: "电话：+ (123) 1800-567",
        },
        {
          userName: "张晓花",
          user_role: "江苏农林1号实训台管理员",
          training_platform: "江苏农林1号实训台",
          phone: "电话：+ (123) 1800-567",
        },
        {
          userName: "张晓花",
          user_role: "江苏农林1号实训台管理员",
          training_platform: "江苏农林1号实训台",
          phone: "电话：+ (123) 1800-567",
        },
      ],
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
      device_details: [
        "设备1",
        "设备2",
        "设备1",
        "设备2",
        "设备1",
        "设备2",
        "设备1",
        "设备2",
        "设备1",
        "设备2",
        "设备1",
        "设备2",
        "设备1",
        "设备2",
        "设备1",
        "设备2",
        "设备1",
        "设备1",
        "设备2",
        "设备1",
        "设备2",
        "设备1",
        "设备2",
        "设备1",
        "设备2",
        "设备1",
        "设备2",
        "设备1",
        "设备2",
        "设备1",
        "设备2",
        "设备1",
        "设备2",
        "设备1",
        "设备2",
        "设备1",
        "设备2",
      ],
      showDeleComfirm:false
    };
  },
  mounted(){
    this.$refs.select.setAttribute("disabled",true)
    this.$refs.select2.setAttribute("disabled",true)
    this.$refs.select3.setAttribute("disabled",true)
  },
  methods: {
    errorHandler() {
      return true;
    },
    fn() {
      if (window.event && window.event.keyCode == 13) {
        window.event.returnValue = false;
      }
    },
    _delete() {
      this.showDeleComfirm = true
    },
    _isEdit(){
      this.$refs.select.removeAttribute("disabled")
      this.$refs.select2.removeAttribute("disabled")
      this.$refs.select3.removeAttribute("disabled")
      this.contenteditable = true
    }
    // open() {
    //   this.$alert("这是一段内容", "设备详情", {
    //     confirmButtonText: "确定",
    //     callback: () => {
    //       // this.$message({
    //       //   type: "info",
    //       //   message: `action: ${action}`,
    //       // });
    //     },
    //   });
    // },
  },
};
</script>
<style lang="scss" scoped>
.main_contain {
  display: flex;
  // justify-content: space-between;
}
.left {
  position: relative;
  margin-left: 20px;
  margin-top: 20px;
  width: 1500px;
  height: 760px;
  background-image: url("../../assets/images/menberBg.png");
  background-repeat: no-repeat;
  background-size: 1432px 760px;
}
.right {
  margin-top: 20px;
  margin-right: 20px;
  margin-left: 20px;
  width: 450px;
  height: 760px;
  border-radius: 9px;
  background: rgba(5, 13, 75, 1);
  border: 2px solid rgba(8, 72, 138, 1);
  box-shadow: inset 0px 1px 20px 0px rgba(18, 142, 232, 0.34);
}
@mixin _top {
  display: flex;
  align-items: center;
  margin: 40px 10px 20px 50px;
}
._top {
  @include _top();
}
.edit_top {
  @include _top();
  margin-bottom: 40px;
  margin-left: 20px;
}
.left_title {
  width: 38px;
  height: 38px;
  clip-path: polygon(0 0, 40% 0, 80% 50%, 40% 100%, 0 100%);
  background-color: rgba(102, 255, 255, 1);
}
@mixin title {
  font-weight: 700;
  letter-spacing: -0.02px;
  color: rgba(255, 255, 255, 1);
  margin-left: 10px;
}
.left .title_name {
  font-size: 35px;
  @include title();
}
.title_edit {
  font-size: 28.29px;
  @include title();
}
.card_contain {
  display: grid;
  grid-template-columns:  repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap:10px;
  padding-left: 30px;
  padding-right: 30px;
}
.card {
  margin: 5px;
  width: 300px;
  height: 310px;
  opacity: 1;
  border-radius: 4.29px;
  background: linear-gradient(
    180deg,
    rgba(0, 102, 255, 0.8) 0%,
    rgba(0, 10, 37, 0) 49.98%,
    rgba(0, 102, 255, 0.9) 100%
  );
  border: 1.28px solid rgba(0, 102, 255, 1);
}
.card_top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}
@mixin operationStyle {
  cursor: pointer;
  text-align: center;
  line-height: 36.07px;
  font-size: 25px;
  color: #fff;
  width: 46.67px;
  height: 36.07px;
  opacity: 1;
  border-radius: 10.6px;
}
.operation {
  display: flex;
  .delete {
    background: rgba(214, 30, 30, 1);
    @include operationStyle();
    margin-right: 10px;
    &:hover {
      cursor: pointer;
    }
    &:active {
      box-shadow: inset -3px -4px 10px 0px rgba(255, 255, 255, 0.25);
    }
  }
  .edit {
    background: rgba(0, 186, 173, 1);
    @include operationStyle();
    &:hover {
      cursor: pointer;
    }
    &:active {
      box-shadow: inset -3px -4px 10px 0px rgba(255, 255, 255, 0.25);
    }
  }
}

.basic_information {
  li {
    margin: 10px 20px 10px 20px;
    color: rgba(255, 255, 255, 1);
    font-size: 15px;
    font-weight: 400;
    letter-spacing: 0px;
    text-align: left;
    vertical-align: top;
  }
  & li:first-child {
    font-size: 25px;
    font-weight: 500;
    color: rgba(0, 255, 244, 1);
    text-align: left;
    vertical-align: top;
  }
}
.card_bottom {
  margin: 10px 20px 10px 20px;
  width: 260px;
  height: 85px;
  clip-path: polygon(
    20% 0,
    80% 0,
    100% 10%,
    100% 90%,
    80% 100%,
    20% 100%,
    0 90%,
    0 10%
  );
  background: linear-gradient(
    90deg,
    rgba(52, 103, 208, 1) 0%,
    rgba(0, 0, 0, 0.5) 50.35%,
    rgba(55, 111, 224, 1) 100%
  );
}
.card_bottom {
  position: relative;
  font-size: 10px;
}
.card_bottom {
  p:last-child {
    position: absolute;
    bottom: 5px;
    right: 10px;
  }
  p:first-child {
    padding-top: 5px;
    
  }
}
.card_bottom p:nth-child(2) {
  color: rgba(255, 255, 255, 1);
  margin-left: 5px;
  height: 40px;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  span {
    font-size: 10px;
  }
}
@mixin font {
  width: 121px;
  height: 35px;
  opacity: 1;
  /** 文本1 */
  font-size: 23px;
  font-weight: 400;
  // letter-spacing: 0px;
  line-height: 35px;
  color: rgba(255, 255, 255, 1);
  text-align: left;
  vertical-align: top;
}
.edit_student_msg {
  li {
    margin: 20px 10px 20px 25px;
    span {
      @include font();
    }
    .input {
      vertical-align: top;
      padding: 5px;
      color: rgba(255, 255, 255, 1);
      display: inline-block;
      width: 237px;
      height: 30px;
      opacity: 1;
      background: rgba(119, 165, 255, 0.33);
    }
  }
}
.remarks p {
  @include font();
  margin: 20px 10px 20px 25px;
}
.remarks_content {
  font-size: 20px;
  margin: 20px 20px 20px 25px;
  height: 200px;
  opacity: 1;
  background: rgba(119, 165, 255, 0.33);
  color: rgba(255, 255, 255, 1);
  border-radius: 3px;
  letter-spacing: 5px;
  padding: 10px;
}
.sureEdit {
  color: rgba(255, 255, 255, 1);
  margin:10px;
  font-size: 20px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  background: linear-gradient(
    to bottom,
    rgba(14, 95, 255, 1) 0%,
    rgb(18, 63, 155) 41.5%,
    rgba(14, 95, 255, 1) 100%
  );
}
// a:active
.sureEdit:active {
  font-size: 18px;
  box-shadow: inset -3px -4px 5px 5px rgba(255, 255, 255, 0.25);
}
.sureEdit:hover {
  cursor: pointer;
}
.select_user_group {
  width: 237px;
  height: 30px;
  background-color: rgb(42, 63, 134);
  border: none;
  color: rgba(255, 255, 255, 1);
  padding: 5px;
  font-size: 15px;
}

</style> 