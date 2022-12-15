<template>
  <div>
    <div class="decoderContain">
      <!-- 表头 -->
      <ul class="th">
        <li v-for=" (item, index) in thList" :key="index">{{ item }}</li>
        <!-- 添加按钮 -->
        <li>操作<v-addDevices addTitle="采集器解码器" :addList="editList"></v-addDevices></li>
      </ul>
      <div class="tb">
        <!-- 数据内容 -->
        <ul class="content" v-for="decoder in decoderArr" :key="decoder.id">
          <li>{{ decoder.number }}</li>
          <li>{{ decoder.name }}</li>
          <li>{{ decoder.path }}</li>
          <li>{{ decoder.port }}</li>
          <li>{{ decoder.model }}</li>
          <li>
            <div>厂商：{{ decoder.manufacturer }}</div>
            <div>协议：{{ decoder.agreement }}</div>
          </li>
          <li>{{ decoder.remarks }}</li>
          <li>
            <!-- 编辑按钮 -->
            <v-edit :editTitle="decoder.name" :editList="editList" editType="采集器解码器" :Id="decoder.id"></v-edit>
            <!-- 删除按钮 -->
            <v-delect :delectTitle="decoder.name" delectType="解码器" :deleteId="decoder.id"></v-delect>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  inject: ["reload"],

  data() {
    return {
      title: '添加解码器',
      remarks: '',
      agreement: '',
      decoderInputList: [],
      thList: ["解码器ID", "解码器名称", "解码器路径", "解码器端口", "型号", "厂商/协议", "备注"],
      showDeleComfirm: false,
      delectTitle: "解码器",
      editList: ["解码器ID", "解码器名称", "解码器路径", "解码器端口", "型号", "厂商", "协议", "备注"],
    };
  },
  methods: {
    clear() {
      this.isShowClear = true;
    },
    deleteProjrct() {
      this.showDeleComfirm = true;
    },
    editItemproject(name, id) {
      this.showEditItem = true;
      this.curDecoderId = id
      this.title = `编辑-${name}`
    },
    add() {
      this.title = '添加解码器'
    },
  },
  computed: mapState({
    decoderArr: state => state.decoder.decoderArr
  }),
  beforeMount() {
    this.$store.dispatch('decoder/findDecoder', "1")
  },

};
</script>
<style lang="scss" scoped>
.decoderContain {
  margin-top: 10px;
  margin-left: 20px;
  color: aliceblue;
}

.th {
  text-align: left;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  width: 1150px;
  color: aliceblue;
  height: 40px;
  line-height: 40px;
  font-size: 18px;
  border-top-left-radius: 6.29px;
  border-top-right-radius: 6.29px;
  background: rgba(12, 54, 122, 0.58);
  box-shadow: inset 10px 10px 20px 10px rgb(18 142 232 / 34%);

  & li:first-child {
    padding-left: 20px;
  }

  & li:last-child {
    display: flex;
  }
}

.tb {
  font-size: 15px;
  text-align: left;
  width: 1150px;
  border-bottom-left-radius: 6.29px;
  border-bottom-right-radius: 6.29px;
  height: 713px !important;
  overflow-y: scroll;
  background: rgba(5, 13, 75, 1);
  border: 2.92px solid rgba(8, 72, 138, 1);
  box-shadow: inset 0px 1.46px 29.24px 0px rgba(18, 142, 232, 0.34);

  .content {
    display: grid;
    grid-template-columns: repeat(8, 1fr);

    li {
      // height: 30px;
      line-height: 30px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap
    }

    & li:first-child {
      padding-left: 20px;
    }

    & li:last-child {
      display: flex;
      align-items: center;
    }
    & li:nth-child(7) {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      /*! autoprefixer: off*/
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
    }

  }


}

/* 自定义滚动条样式开始 */
::-webkit-scrollbar {
  width: 3px;
  /*滚动条宽度*/
  height: 10px;
  /*滚动条高度*/
}

/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
  box-shadow: 0px 1px 3px #071e4a inset;
  /*滚动条的背景区域的内阴影*/
  border-radius: 5px;
  /*滚动条的背景区域的圆角*/
  background-color: #071e4a;
  /*滚动条的背景颜色*/
}

/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  box-shadow: 0px 1px 3px #00a0e9 inset;
  /*滚动条的内阴影*/
  border-radius: 5px;
  /*滚动条的圆角*/
  background-color: #00a0e9;
  /*滚动条的背景颜色*/
}
</style>
 