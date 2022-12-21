<template>
    <div v-if="isActive">
        <div class="editBox">
            <div class="projectNameTitele">添加{{ addTitle }}</div>
            <!-- <div class="containBox" v-for="(list, index) in addList" :key="index">
                <span>{{ list }}</span>
                <input contenteditable="true" class="itemNo common" ref="inputList" />
            </div> -->
            <div class="containBox">
                <span>传感器名称</span>
                <input contenteditable="true" class="itemNo common" v-model="sensorName" />
            </div>
            <div class="containBox">
                <span>传感器类型</span>
                <select class="itemNo common" v-model="sensorType">
                    <option value="" disabled selected>选择传感器类型</option>
                <option :value="(index+1)" v-for="(item,index) in sensorTypeArr" :key="index">{{ item }}</option>
            </select>
            </div>
            <div class="containBox">
                <span>小数位</span>
                <select class="itemNo common" v-model="decimals"  :disabled="sensorType == 1? false:true">
                <option :value="item" v-for="item in decimalsArr" :key="item">{{item}}（位小数）</option>
                <!-- <option value="0">0（位小数）</option>
                <option value="1">1（位小数）</option>
                <option value="2">2（位小数）</option>
                <option value="3">3（位小数）</option>
                <option value="4">4（位小数）</option> -->
            </select>
            </div>
            <div class="containBox">
                <span>单位</span>
                <input contenteditable="true" class="itemNo common" v-model="unit" :disabled="sensorType == 1? false:true"/>
            </div>
            <!-- <div class="containBox">
                <span>设备类型</span>
                <select name="" id="" class="itemNo common" v-if="addTitle == '设备'" v-model="deviceType">
                    <option selected disabled>设备类型选择</option>
                    <option value="1">采集设备</option>
                    <option value="2">控制设备</option>
                    <option value="3">被控设备</option>
                    <option value="4">监控设备</option>
                    <option value="5">虚拟设备</option>
                </select>
            </div> -->
            <!-- <div class="containBox">
                <span>描述</span>
                <textarea class="describe common" v-model="remarks"></textarea>
            </div> -->
            <div class="selctType">
                <button @click="cancel">取消</button>
                <button @click="submit" id="btn">确定</button>
            </div>
        </div>
        <v-mask :isActive="isActive"></v-mask>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    props: ["addTitle", "addList"],
    inject: ["reload"],
    data() {
        return {
            remarks: '',
            paramsObj: {},
            deviceType: '',
            sensorName:'',
            sensorType:'',
            decimals:0,
            unit:'',
            sensorTypeArr: ["数值型", "开关型(可操作)", "定位型", "图片型", "开关型(不可操作)", "档位型", "视频型", "字符串"],
            decimalsArr:[0,1,2,3,4]
        };
    },
    methods: {
        cancel() {
            this.$store.commit("isShowAddBox");
        },
        async submit() {

        },
    },
    computed: mapState({
        isActive: state => state.addBoxIsActive
    }),
};
</script>

<style lang="scss" scoped>
.editBox {
    z-index: 9001;
    width: 695px;
    height: 400px;
    background-size: 695px 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: url(../assets/images/operation-prompt-box.png);
    background-repeat: no-repeat;

    .projectNameTitele {
        height: 60px;
        margin-top: 20px;
        margin-left: 20px;
        font-size: 25px;
        font-weight: 700;
        color: rgba(255, 255, 255, 1);
    }

    .containBox {
        font-size: 15px;
        font-weight: 400;
        display: flex;
        margin: 10px;
    }

    .selectadmin {
        width: 500px !important;

        option:disabled {
            color: rgba(255, 255, 255, 0.69);
        }
    }

    @mixin commonStyle {
        background: rgba(0, 0, 0, 0.6);
        color: rgba(255, 255, 255, 1);
        padding-left: 10px;
        padding-right: 10px;
        letter-spacing: 1px;
        overflow: hidden;
        margin-left: 20px;
    }

    .common {
        width: 500px;
        @include commonStyle()
    }

    .selectDecoder {
        width: 240px;
        @include commonStyle()
    }

    @mixin commonStyle {
        white-space: nowrap;
        height: 30px;
        line-height: 30px;
    }

    .groupName {
        @include commonStyle();
    }

    .itemNo {
        @include commonStyle();
    }

    .describe {
        height: 126.35px;
        white-space: wrap;
        overflow-y: scroll;
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
        box-shadow: 0px 1px 3px rgb(6, 79, 112) inset;
        /*滚动条的内阴影*/
        border-radius: 10px;
        /*滚动条的圆角*/
        background-color: rgb(6, 79, 112);
        /*滚动条的背景颜色*/
    }

    span {
        display: inline-block;
        height: 30px;
        width: 100px;
        text-align: center;
        line-height: 30px;
        background: rgba(0, 0, 0, 0.6);
        color: rgba(255, 255, 255, 1);
        letter-spacing: 1px;
    }
}

@mixin button {
    font-size: 15 px;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    border: none;
    width: 50px;
    height: 25px;
    border-radius: 9px;
    margin: 20px;
}

.selctType {
    margin-right: 10px;
    text-align: right;

    button:first-child {
        @include button();
        background: rgba(0, 186, 173, 1);
    }

    button:last-child {
        @include button();
        background: rgba(216, 40, 40, 1);
    }

    button:active {
        font-size: 18px;
        box-shadow: inset 0px -6px 4px 0px rgba(255, 255, 255, 0.25);
    }
}
</style>