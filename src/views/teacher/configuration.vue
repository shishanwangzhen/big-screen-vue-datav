<template>
    <div>
        <div class="import-container">
            <div class="table-container">
                <v-day class="realTime"></v-day>
                <div class="top">
                    <div class="left">
                        <div class="search">
                            <div placeholder="搜索设备名称" contenteditable="true" class="inp" ref="searchInput"></div>
                            <i class="iconfont icon-sousuo1" @click="searchDevice"></i>
                        </div>
                        <div class="deviceTypeContainer">
                            <select name="" class="deviceType" v-model="deviceType" @change="getDeviceList(deviceType)">
                                <option value="" disabled selected>选择设备类型</option>
                                <option value="1">采集设备</option>
                                <option value="2">控制设备</option>
                                <option value="3">被控设备</option>
                                <option value="4">监控设备</option>
                                <option value="5">虚拟设备</option>
                            </select>
                        </div>
                        <div class="importable">
                            <select class="choiceOption" v-model="curOption" @change="getCurShowList(curOption)">
                                <option value="0" selected>所有设备</option>
                                <option value="1">可导入设备</option>
                                <option value="2">已被导入设备</option>
                            </select>
                        </div>
                        <div class="addSensor" @click="confirmImport">确认导入设备</div>
                    </div>
                    <div class="right">
                        <div class="delectWays" @click="addDevice">
                            <i class="iconfont icon-zengjia"></i> 添加设备
                        </div>
                    </div>
                </div>
                <div class="table">
                    <div class="th">
                        <div class="deviceName">
                            <el-checkbox v-model="checkAll" @change="handleCheckAllChange" v-if="importable">
                            </el-checkbox>
                            <span>设备名称</span>
                        </div>
                        <div>序列号</div>
                        <div>设备协议</div>
                        <div>上报周期</div>
                        <div>设备类型</div>
                        <div>状态</div>
                        <div>所属项目</div>
                        <div>操作人</div>
                    </div>
                    <div class="td">
                        <ul class="td-content" v-for="item in deviceList" :key="item.id">
                            <li>
                                <el-checkbox v-if="importable" v-model="checkedDevice"
                                    @change="handleCheckedDeviceChange" :label="item.id"><span style="color:white">{{
                                            item.deviceName
                                    }}</span></el-checkbox>
                                <span v-else>{{ item.deviceName }}</span>
                            </li>
                            <li>{{item.deviceNo}}</li>
                            <li>{{item.linkType}}</li>
                            <li>{{item.timescale}}</li>
                            <li>{{ item.type == "1" ? '采集设备' : item.type == "2" ? "控制设备" : item.type == "3" ? "被控设备" :
                                    item.type
                                        == "4" ? "监控设备" : item.type == "5" ? "虚拟设备" : ''
                            }}</li>
                            <li>{{ item.binding == "0" ? "未配置" : item.binding == "1" ? "已配置" : '' }}</li>
                            <li>{{ item.projectName }}</li>
                            <li>{{ item.bindingName }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- 添加设备弹框组件 -->
        <v-addConfigurationDevice></v-addConfigurationDevice>
    </div>

</template>

<script>
import addConfigurationDevice from '_c/v-addConfigurationDevice'
import { mapState } from 'vuex';
export default {
    name: "importDevice",
    components: {
        'v-addConfigurationDevice': addConfigurationDevice
    },
    data() {
        return {
            checkAll: [],
            checkList: [],
            importable: false,
            deviceType: "",
            addList: ['设备名称', '设备ID', '设备型号'],
            addTitle: '设备',
            checkedDevice: [],
            curOption: '0'
        };
    },
    methods: {
        // 根据设备类型模糊搜索
        getDeviceList(type) {
            this.$refs.searchInput.innerText = ""
            if (this.curOption == "1") {
                this.$store.dispatch('device/findDevice', {
                    type,
                    binding: "0"
                })
            }
            if (this.curOption == "0") {
                this.$store.dispatch('device/findDevice', {
                    type
                })
            }
            if (this.curOption == "2") {
                this.$store.dispatch('device/findDevice', {
                    type,
                    binding: "1"
                })
            }

        },
        // 显示添加设备弹框
        addDevice() {
            this.$store.commit("isShowAddBox");
        },
        // 根据设备名称模糊搜索
        searchDevice() {
            let text = this.$refs.searchInput.innerText

            if (text) {
                // 输入了搜索条件但未选择设备类型
                if (this.curOption == "0") {
                    this.$store.dispatch('device/findDevice', {
                        name: text
                    })
                }
                if (this.curOption == "1") {
                    this.$store.dispatch('device/findDevice', {
                        binding: "0",
                        name: text
                    })
                }
                if (this.curOption == "2") {
                    this.$store.dispatch('device/findDevice', {
                        binding: "1",
                        name: text
                    })
                }
                // 输入了搜索条件但已选择设备类型
                if (this.curOption == "0" && this.deviceType !== "") {
                    this.$store.dispatch('device/findDevice', {
                        type: this.deviceType,
                        name: text
                    })
                }
                if (this.curOption == "1" && this.deviceType !== "") {
                    this.$store.dispatch('device/findDevice', {
                        binding: "0",
                        type: this.deviceType,
                        name: text
                    })
                }
                if (this.curOption == "2" && this.deviceType !== "") {
                    this.$store.dispatch('device/findDevice', {
                        binding: "1",
                        type: this.deviceType,
                        name: text
                    })
                }
            } else {
                // 未输入搜索条件
                // "0" 是所有设备情况下进行搜索 "1"是在可导入设备条件下进行查询
                if (this.curOption == "0" && this.deviceType == "") {
                    // importable为true则有复选框
                    this.importable = false
                    this.$store.dispatch('device/findDevice', {})
                }
                if (this.curOption == "1" && this.deviceType == "") {
                    this.importable = true
                    this.$store.dispatch('device/findDevice', {
                        binding: "0"
                    })
                }
                if (this.curOption == "2" && this.deviceType == "") {
                    this.importable = true
                    this.$store.dispatch('device/findDevice', {
                        binding: "1"
                    })
                }
            }
        },
        // 全选框
        handleCheckAllChange(val) {
            let deviceOption = [];
            this.deviceList.map((el) => {
                return deviceOption.push(el.id);
            });
            this.checkedDevice = val ? deviceOption : [];
        },
        // 复选框
        handleCheckedDeviceChange() {
            this.checkAll = false
            // deviceArrLength 表格所有元素的数组长度
            let deviceArrLength = this.deviceList.length
            // this.checkedDevice当前选中的元素的数组集合
            if (this.checkedDevice.length == deviceArrLength) {
                // 全选
                this.checkAll = true
            }

        },
        // 获取当前下拉框选项 所有设备 、可导入设备 、未导入设备
        getCurShowList(value) {
            this.$refs.searchInput.innerText = ""
            this.deviceType = ""
            if (value == "0") {
                this.importable = false
                this.$store.dispatch('device/findDevice', {})
            }
            if (value == "1") {
                this.importable = true
                this.$store.dispatch('device/findDevice', {
                    binding: "0"
                })
            }
            if (value == "2") {
                this.importable = false
                this.$store.dispatch('device/findDevice', {
                    binding: "1"
                })
            }
        },
        // 确认导入设备
        async confirmImport() {
            if (this.checkedDevice.length > 0) {
                await this.$store.dispatch("device/updateDeviceBinding", {
                    binding: '1',
                    ids: this.checkedDevice,
                    projectId: this.$route.query.projectId,
                    bindingId: sessionStorage.getItem("teacherId")
                })
                await this.$store.dispatch('device/findDevice', {
                    binding: "0"
                })
                this.$message({
                    message: "导入成功",
                    type: "success",
                })
            } else {
                this.$message({
                    message: "未选中设备",
                    type: "warning",
                })
            }

        }
    },
    computed: mapState({
        // 设备列表
        deviceList: state => state.device.deviceList
    }),
    beforeMount() {
        // 查询所有设备
        this.$store.dispatch('device/findDevice', {})
    }
};
</script>

<style scoped lang="scss">
@mixin inputStyle {
    width: 300px;
    height: 36.96px;
    border-radius: 6px;
    background: rgba(119, 165, 255, 0.33);
    font-size: 15px;
    color: white;
}

$content: attr(placeholder);

.import-container {
    display: flex;
    margin-left: 40px;

    .table-container {
        .realTime {
            float: right;
            margin-top: 20px;
            margin-bottom: 20px;
        }

        .top {
            margin: 30px auto;
            width: 100%;
            display: flex;
            justify-content: space-between;

            .left {
                display: grid;
                grid-template-columns: 350px 300px 180px 200px;
                grid-gap: 30px;
            }

            .deviceTypeContainer {
                height: 50px;
                width: 300px;
                background: url("../../assets/images/rectangle2.png") no-repeat;
                background-size: 300px 50px;
                line-height: 50px;

                .deviceType {
                    padding: 10px;
                    width: 250px;
                    color: rgba(0, 213, 255, 1);
                    font-size: 20px;
                    border: none;
                    background: transparent;
                }
            }

            @mixin ways {
                height: 50px;
                font-size: 20px;
                line-height: 50px;
                text-align: center;
            }

            .addSensor {
                @include ways();
                margin-left: 10px;
                width: 200px;
                background: url("../../assets/images/rectangle2.png") no-repeat;
                background-size: 200px 50px;
                color: rgba(0, 213, 255, 1);

                &:hover {
                    cursor: pointer;
                }

                &:active {
                    font-size: 18px
                }

            }

            .importable {
                @include ways();
                width: 180px;
                margin-left: 10px;
                background: url("../../assets/images/rectangle.png");
                background-size: 180px 50px;

                .choiceOption {
                    font-size: 20px;
                    color: rgba(0, 213, 255, 1);
                    border: none;
                    background: transparent
                }

            }

            .search {
                @include ways();
                width: 350px;
                display: flex;
                justify-content: space-between;
                padding-left: 20px;
                padding-right: 20px;
                background: url("../../assets/images/rectangle.png") no-repeat;
                background-size: 350px 50px;
                color: rgba(0, 213, 255, 1);

                .inp {
                    width: 80%;
                    overflow: hidden;
                    white-space: nowrap;
                    text-align: left;
                }

                .inp:empty::before {
                    content: $content;
                }

                .iconfont {
                    font-size: 20px;

                    &:hover {
                        cursor: pointer;
                    }
                }

            }

            .delectWays {
                @include ways();
                background: url("../../assets/images/rectangle2.png") no-repeat;
                margin-left: 60px;
                color: rgba(0, 213, 255, 1);

                &:active {
                    font-size: 18px;
                }

                width: 237px;
                background-size: 237px 50px;
            }
        }

        .table {
            margin: 20px auto;
            color: aliceblue;
            border-radius: 6.29px;
        }

        .th {
            display: grid;
            grid-template-columns: repeat(9, 1fr);
            background: rgba(12, 54, 122, 0.58);
            box-shadow: inset 10px 10px 20px 10px rgb(18 142 232 / 34%);
            text-align: center;
            width: 1805.7px;
            height: 30px;
            line-height: 30px;
            font-size: 18px;
            border-top-left-radius: 6.29px;
            border-top-right-radius: 6.29px;

            .deviceName {
                text-align: left;
                padding-left: 20px;

                span {
                    padding-left: 5px;
                }
            }

        }

        .td {
            width: 1805.7px;
            border-bottom-left-radius: 6.29px;
            border-bottom-right-radius: 6.29px;
            height: 650px;
            overflow-y: scroll;
            background: rgba(5, 13, 75, 1);
            border: 2.92px solid rgba(8, 72, 138, 1);
            box-shadow: inset 0px 1.46px 29.24px 0px rgba(18, 142, 232, 0.34);
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

        .td-content {
            display: grid;
            grid-template-columns: repeat(9, 1fr);
            text-align: center;

            li {
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                height: 40px;
                line-height: 40px;

                &:first-child {
                    padding-left: 20px;
                    text-align: left;
                }
            }
        }
    }
}
</style>
