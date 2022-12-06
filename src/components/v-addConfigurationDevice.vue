<template>
    <div v-if="isActive">
        <div class="editBox">
            <div class="projectNameTitele">添加设备</div>
            <div class="containBox">
                <span>设备类型</span>
                <select class="itemNo addcommon" v-model="curDeviceType">
                    <option value="" disabled selected>选择设备类型</option>
                    <option v-for="(item, index) in deviceType" :key="index">{{ item }}</option>
                </select>
            </div>
            <div class="containBox">
                <span>设备名称</span>
                <input class="itemNo common" />
            </div>
            <!-- <div class="containBox">
                <span>设备ID</span>
                <input class="itemNo common" />
            </div>
            <div class="containBox">
                <span>设备型号</span>
                <input class="itemNo common" />
            </div> -->
            <div class="containBox">
                <span>序列号</span>
                <select class="itemNo addcommon" v-model="curAgreementType">
                    <option value="" disabled selected>选择产品序列号</option>
                    <option v-for="(item, index) in serialNumber" :key="index">{{ item }}</option>
                </select>
            </div>
            <div class="containBox">
                <span>协议类型</span>
                <select class="itemNo addcommon" v-model="curAgreementType">
                    <option value="" disabled selected>选择协议</option>
                    <option v-for="(item, index) in agreementType" :key="index">{{ item }}</option>
                </select>
            </div>
            <div class="containBox">
                <span>上报周期</span>
                <input class="itemNo common" placeholder="单位为秒" />
            </div>
            <div class="containBox">
                <span>传感器</span>
                <button class="btn" @click="add">添加</button>
                <input class="addNumber" v-model="addNum" />
                <button class="btn" @click="(count = Number(count) + Number(addNum),num += Number(addNum))">批量添加</button>
                <span>当前数量：{{ num }}</span>
            </div>
            <ul class="describe" ref="contentBox">
                <li v-for="( item, index) in count" :key="item" ref="clearAll">
                    <div class="list">
                        <input class="addNumber" :value="`传感器-${item}`" />
                        <select class="addNumber long" @change="curData(index)" ref="curSelectData">
                            <option value="" disabled selected>选择数据类型</option>
                            <option v-for="(item, index) in dataType" :key="index">{{ item }}</option>
                        </select>
                        <select class="addNumber long" :disabled="curDataArr.includes(index) ? false : true">
                            <option value="" disabled selected>选择小数位</option>
                            <option v-for="(item, index) in decimals" :key="index">{{ `${item}(小数位)` }}</option>
                        </select>
                        <input class="addNumber" placeholder="单位" />
                        <!-- curDataArr存放的是下拉框选择为数值型的索引 如果当前索引存在则可以点击More，显示添加映射值 -->
                        <button class="btn" :disabled="curDataArr.includes(index) ? false : true"
                            @click="isShowMore(index)">More...</button>
                        <!-- 删除相应的行 -->
                        <button class="btn" @click="clear(index)">删除</button>
                    </div>
                    <ul v-if="curIndex.includes(index)" class="more">
                        <li class="mappingBox">
                            <span>映射值</span>
                            <!-- 是否显示映射值标题 -->
                            <span v-show="hasUpperValueArr.includes(index)">{{ hasUpperValueArr.includes(index) ?`(${upperValueArr[index].upperValue1},${upperValueArr[index].upperValue2}=>${upperValueArr[index].upperValue3},${upperValueArr[index].upperValue4})`: null
                            }}</span>
                            <div class="operation">
                                <span class="add" @click="showUpper(index)">添加上行映射值</span>
                                <!-- 删除映射值标题 -->
                                <span class="delete" @click="deleteCurUpperValue(index)">删除</span>
                            </div>
                            <div class="mappingValue" ref="upperValue" v-show="(addUpperArr.includes(index) && isShowUpperList)">
                                <input type="text" v-model="upperValueArr[index].upperValue1"> - <input type="text"
                                    v-model="upperValueArr[index].upperValue2"> => <input type="text"
                                    v-model="upperValueArr[index].upperValue3"> - <input type="text"
                                    v-model="upperValueArr[index].upperValue4">
                                <button @click="showUpperValue(index)">确定</button>
                            </div>
                        </li>
                        <li class="mappingBox">
                            <span>映射值</span>
                            <!-- 是否显示映射值标题 -->
                            <span v-show="hasBottomValueArr.includes(index)">{{ hasBottomValueArr.includes(index) ?`(${bottomValueArr[index].bottomValue1},${bottomValueArr[index].bottomValue2}=>${bottomValueArr[index].bottomValue3},${bottomValueArr[index].bottomValue4})`: null
                            }}</span>
                            <div class="operation">
                                <span class="add" @click="showBottom(index)">添加下行映射值</span>
                                <!-- 删除映射值标题 -->
                                <span class="delete" @click="deleteCurBottomValue(index)">删除</span>
                            </div>
                            <div class="mappingValue" ref="upperValue" v-show="(addBottomArr.includes(index) && isShowBottomList)">
                                <input type="text" v-model="bottomValueArr[index].bottomValue1"> - <input type="text"
                                    v-model="bottomValueArr[index].bottomValue2"> => <input type="text"
                                    v-model="bottomValueArr[index].bottomValue3"> - <input type="text"
                                    v-model="bottomValueArr[index].bottomValue4">
                                <button @click="showBottomValue(index)">确定</button>
                            </div>
                        </li>
                    </ul>
                </li>

            </ul>
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
    inject: ["reload"],
    data() {
        return {
            remarks: '',
            paramsObj: {},
            curDeviceType: '',
            deviceType: ['采集设备', '控制设备', '视频设备', '被控设备', '虚拟设备'],
            agreementType: ["HTTP", "MQTT", "CoAP", "TCP"],
            dataType: ["数值型", "开关型(可操作)", "定位型", "图片型", "开关型(不可操作)", "档位型", "视频型", "字符串"],
            serialNumber:[1,2,3,4,5,6,7,8],
            decimals: ["0", "1", "2", "3", "4"],
            addList: [],
            // curDataType: '',
            curAgreementType: '',
            count: 0,
            unit: '',
            addNum: 0,
            curIndex: [],
            curDataArr: [],
            showMore: false,
            isShowUpper: false,
            isShowBottom: false,
            hasUpperValueArr: [],
            upperValueArr: [{}],
            addUpperArr: [],
            addBottomArr:[],
            hasBottomValueArr: [],
            bottomValueArr: [{}],
            isShowUpperList:false,
            isShowBottomList:false,
            hasBottomValue: false,
            num:0
        };
    },
    methods: {
        cancel() {
            this.$store.commit("isShowAddBox");
            this.reload()
        },
        async submit() {

        },
        isShowMore(index) {
            // 将显示映射值的索引添加到curIndex
            this.curIndex.push(index)
            // 保证上行映射值的索引与数组中的索引相同，才能拿到准确的值
            this.$set(this.upperValueArr,index,{
                id: index,
                upperValue1: '',
                upperValue2: '',
                upperValue3: '',
                upperValue4: ''
            })
            this.$set(this.bottomValueArr,index,{
                id: index,
                bottomValue1: '',
                bottomValue2: '',
                bottomValue3: '',
                bottomValue4: ''
            })
        },
        add(){
            this.count += 1
            this.num = this.$refs.contentBox.children.length + 1
        },
        clear(index) {
            // 删除相应的行
            this.$refs.contentBox.removeChild(this.$refs.clearAll[index])
            this.num = this.$refs.contentBox.children.length
            if(this.num <= 0){
                this.count = 0
            }
        },
        showUpperValue(index) {
            if (!this.upperValueArr[index].upperValue4 || !this.upperValueArr[index].upperValue3 || !this.upperValueArr[index].upperValue2 || !this.upperValueArr[index].upperValue1) {
                this.$message({
                    message: '输入框未填写完',
                    type: 'warning'
                })
            } else {
                // 点击确定显示、修改上行映射值标题
                let res = this.hasUpperValueArr.includes(index)
                // 确保点击 添加映射值只显示一行
                if(!res){
                    this.hasUpperValueArr.push(index)
                }
            }
        },
        showBottomValue(index) {
            if (!this.bottomValueArr[index].bottomValue4 || !this.bottomValueArr[index].bottomValue3 || !this.bottomValueArr[index].bottomValue2 || !this.bottomValueArr[index].bottomValue1) {
                this.$message({
                    message: '输入框未填写完',
                    type: 'warning'
                })
            } else {
                // 点击确定显示、修改下行映射值标题
                let res = this.hasBottomValueArr.includes(index)
                if(!res){
                    this.hasBottomValueArr.push(index)
                }
            }
        },
        deleteCurUpperValue(deleteIndex){
            this.hasUpperValueArr.forEach((el,index) => {
                if(el == deleteIndex){
                    this.hasUpperValueArr.splice(index,1)
                }
            })
        },
        deleteCurBottomValue(deleteIndex){
            this.hasBottomValueArr.forEach((el,index) => {
                if(el == deleteIndex){
                    this.hasBottomValueArr.splice(index,1)
                }
            })
            
        },
        // 点击  添加上行映射值
        // 将对应点击的添加上行映值索引添加到数组，用于判断是否显示当前的上行映值输入框
        showUpper(index) {
            this.addUpperArr.push(index)
            // 控制上行映射值输入框的显示与关闭
            this.isShowUpperList = !this.isShowUpperList

        },
        // 点击  添加下行映射值
        showBottom(index) {
            this.addBottomArr.push(index)
             // 控制下行映射值输入框的显示与关闭
            this.isShowBottomList = !this.isShowBottomList

        },
        curData(index) {
            // 获取对应选择数据类型下拉框的值
            if (this.$refs.curSelectData[index].value == '数值型') {
                this.curDataArr.push(index)
            }
        }
    },
    watch: {
        curDataType() {
        }
    },
    computed: mapState({
        isActive: state => state.addBoxIsActive
    }),
};
</script>

<style lang="scss" scoped>
.editBox {
    z-index: 9001;
    width: 750px;
    height: 800px;
    background-size: 1150px 700px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: url(../assets/images/operation-prompt-box.png);
    background-size: 750px 800px;
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

        .btn {
            margin-left: 20px;
            margin-right: 20px;
            height: 30px;
            width: 100px;
            text-align: center;
            line-height: 30px;
            background: rgba(0, 0, 0, 0.6);
            color: rgba(255, 255, 255, 1);
            letter-spacing: 1px;
            border: none;

            &:active {
                font-size: 12px;
            }
        }

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


    .itemNo {
        @include commonStyle();
    }

    .describe {
        height: 400px;
        overflow-y: scroll;
        color: rgba(255, 255, 255, 1);
        padding: 10px;
        background: transparent;
        border: none;

        li {
            margin-bottom: 10px;

            .list {
                display: grid;
                grid-template-columns: repeat(6, 1fr);
                grid-column-gap: 10px;
            }

            .more {
                margin-top: 20px;
                width: 100%;
                padding: 10px;
                height: 200px;
                background: rgba(0, 0, 0, 0.4);

                .mappingBox {
                    position: relative;
                    height: 100px;

                    span {
                        font-size: 12px;
                    }

                    .operation {
                        position: absolute;
                        top: 0;
                        right: 0;

                        &:hover {
                            cursor: default;
                        }

                        & span:last-child {
                            margin-left: 20px;
                        }
                    }

                    .mappingValue {
                        margin-top: 10px;
                        position: relative;

                        input {
                            color: rgba(255, 255, 255, 1);
                            width: 100px;
                            height: 30px;
                            background: rgba(0, 0, 0, 0.6);
                            padding-left: 5px;
                        }

                        button {
                            position: absolute;
                            color: rgba(255, 255, 255, 1);
                            width: 50px;
                            height: 30px;
                            background: rgba(0, 0, 0, 0.6);
                            border: none;
                            top: 0;
                            right: 0;

                            &:active {
                                font-size: 12px;
                            }
                        }
                    }

                    &:first-child {
                        padding-bottom: 10px;
                        border-bottom: 1px solid rgba(0, 0, 0, 0.6);
                    }
                }

            }

            .btn {
                height: 30px;
                width: 50px;
                text-align: center;
                line-height: 30px;
                background: rgba(0, 0, 0, 0.6);
                color: rgba(255, 255, 255, 1);
                border: none;

                &:active {
                    font-size: 12px;
                }
            }

        }
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
        background-color: transparent;
        // backgroundr: #071e4a;
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
    font-size: 15px;
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

@mixin commonStyle {
    background: rgba(0, 0, 0, 0.6);
    color: rgba(255, 255, 255, 1);
    padding-left: 10px;
    padding-right: 10px;
    letter-spacing: 1px;
    overflow: hidden;
    margin-left: 20px;
}

.addcommon {
    width: 500px;
    @include commonStyle();
}

.addNumber {
    background: rgba(0, 0, 0, 0.6);
    color: rgba(255, 255, 255, 1);
    padding-left: 5px;
    height: 30px;
    width: 100px;
}

.long {
    width: 150px !important;
}
</style>