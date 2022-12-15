<template>
  <div>
    <ul class="th">
      <li v-for="item in thList" :key="item">{{ item }}</li>
      <li class="operationBtn">
        操作
        <v-addDevices></v-addDevices>
      </li>
    </ul>
    <div class="tbBox">
      <ul class="tb" v-for="item in 30" :key="item">
        <li>张梦雅</li>
        <li>组员</li>
        <li>2022年12/6日11:06新添加的成员,2022年12/6日11:06新添加的成员,2022年12/6日11:06新添加的成员</li>
        <li class="operation">
          <v-edit></v-edit>
          <v-delect></v-delect>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      thList: ["组员", "角色", "描述"]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../../assets/scss/scroll.scss';

@mixin common {
  color: whitesmoke;
  display: grid;
  grid-template-columns: 1fr 1fr 3fr 1fr;
  text-align: left;
  font-size: 18px;
  padding-left: 30px;
}

.th {
  @include common();
  width: 1380px;
  margin-left: 30px;
  margin-top: 15px;
  height: 40px;
  line-height: 40px;
  border-top-left-radius: 6.29px;
  border-top-right-radius: 6.29px;
  background: rgba(12, 54, 122, 0.58);
  box-shadow: inset 10px 10px 20px 10px rgb(18 142 232 / 34%);

  .operationBtn {
    display: flex
  }
}

.tbBox {
  width: 1380px;
  height: 710px;
  overflow-y: scroll;
  border-bottom-left-radius: 6.29px;
  border-bottom-right-radius: 6.29px;
  background: rgba(5, 13, 75, 1);
  border: 2.92px solid rgba(8, 72, 138, 1);
  box-shadow: inset 0px 1.46px 29.24px 0px rgba(18, 142, 232, 0.34);
  margin-left: 30px;
  &::before {
      content: "";
      width: 500px;
      height: 500px;
      position: absolute;
      top: 400px;
      right: 100px;
      opacity: 0.5;
      background: url(../../../../assets/images/roleTableImg.png );
      background-size: 500px 500px;
      opacity: 0.5;
    }
  .tb {
    // position: relative;
    @include common();

    li {
      height: 40px;
      line-height: 40px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    .operation {
      display: flex;
    }

  }
}
</style>