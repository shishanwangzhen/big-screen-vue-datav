<template>
    <div class="sensorContain">
        <div class="top">
            <div class="search">
                <select name="" class="configure">
                    <option value="" selected>采集设备</option>
                    <option value="">控制设备</option>
                    <option value="">视频设备</option>
                    <option value="">监控设备</option>
                </select>
            </div>
            <!-- <div class="addSensor">复制所选控制器通道</div> -->
            <div class="delectWays">删除所选通道</div>
        </div>

        <table class="table">
            <thead>
                <tr>
                    <th>
                        <el-checkbox v-model="checkAll" @change="handleCheckAllChange">
                            <span style="color: white">通道 </span>
                        </el-checkbox>
                    </th>
                    <th>通道名</th>
                    <th>开启指令</th>
                    <th>关闭指令 </th>
                    <th>
                        操作
                        <v-addDevice></v-addDevice>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in passagewayList" :key="index">
                    <td>
                        <el-checkbox v-model="checkedPassageway" @change="handleCheckedPassagewayChange"
                            :label="item.passageway">
                            <span style="color: white">{{ item.passageway }}</span>
                        </el-checkbox>
                    </td>
                    <td>{{ item.passagewayName }}</td>
                    <td>{{ item.openCommand }}</td>
                    <td>{{ item.closeCommand }}</td>
                    <td class="record">
                        <v-edit :editTitle="editTitle" :editType="editType" :editList="editList"></v-edit>
                        <v-delect :delectTitle="delectTitle"></v-delect>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "app",
    components: {},
    data() {
        return {
            delectTitle: "通道",
            editTitle: "通道信息",
            editType: "通道配置",
            editList: ['通道名', '开启指令', '关闭指令'],
            checkAll: false,
            checkedPassageway: [],
            label: '',
            passagewayList: [
                {
                    passageway: '1',
                    passagewayName: '通道',
                    openCommand: 'FE 05 00 00 FF 00 98 35',
                    closeCommand: 'FE 05 00 00 00 00 D9 C5'
                },
                {
                    passageway: '3',
                    passagewayName: '通道2',
                    openCommand: 'FE 05 00 00 FF 00 98 35',
                    closeCommand: 'FE 05 00 00 00 00 D9 C5'
                }
            ],
            isCheckItem: false,
            hasNoSel: false,
            showDeleComfirm: false,
            showEditItem: false,
        };
    },
    methods: {
        itemCheck() {
            let itemBoxArray = this.$refs.checkItem;
            // index当前选中表格的索引
            itemBoxArray.forEach((element, index) => {
                if (element.checked) {
                    console.log(index);
                    this.hasNoSel = true;
                }
            });
        },
        delect() {
            this.showDeleComfirm = true;
        },
        edit() {
            this.showEditItem = true;
        },
        handleCheckAllChange(val) {
            let passagewayOption = [];
            this.passagewayList.map((el) => {
                return passagewayOption.push(el.passageway);
            });
            this.checkedPassageway = val ? passagewayOption : [];
        },
        handleCheckedPassagewayChange(value) {
            console.log('value', value)
            console.log(this.checkedPassageway)
            this.checkAll = false
            // passagewayArrLength 表格所有元素的数组长度
            let passagewayArrLength = this.passagewayList.length
            // this.checkedPassageway当前选中的元素的数组集合
            if (this.checkedPassageway.length == passagewayArrLength) {
                // 全选
                this.checkAll = true
            }

        }
    },
};
</script>

<style scoped lang="scss">
body {
    background: rgb(4, 7, 47);
}

.table {
    margin-top: 20px;
    width: 1160px;
    color: #fff !important;
    border-collapse: collapse;
    table-layout: fixed;
}

thead {
    text-align: left;
    background: rgba(12, 54, 122) !important;
    box-shadow: inset 0px 8.73px 20.37px 0px rgba(79, 111, 163, 0.8) !important;
}

thead tr th {
    padding-left: 15px;
}

.record {
    display: flex;

    button {
        color: white;
        border-radius: 5px;
        width: 42.01px;
        height: 21.3px;
        border: none;
        margin-right: 10px;

        &:first-child {
            background: rgba(0, 186, 173, 1);
        }

        &:last-child {
            background: rgba(216, 40, 40, 1);
        }
    }

    .btn_edit {
        &:active {
            box-shadow: 1px 1px 1px rgba(0, 186, 173, 1);
        }

        &:hover {
            cursor: pointer;
        }
    }

    .btn_delete {
        &:active {
            box-shadow: 1px 1px 1px rgba(216, 40, 40, 1);
        }

        &:hover {
            cursor: pointer;
        }
    }
}

tbody {
    overflow-y: scroll;
    display: block;
    max-height: 645px;
    min-height: 645px;
    overflow-x: hidden;
    text-align: left;
    background: rgba(5, 13, 75) !important;
    box-shadow: inset 0px 1px 20px 0px rgba(18, 142, 232, 0.34) !important;
}

tbody tr td {
    padding: 15px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

table thead,
tbody tr,
tfoot tr,
thead tr {
    display: table;
    height: 40px;
    width: 100%;
    table-layout: fixed;
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
    box-shadow: 0px 1px 3px #00a0e9 inset;
    /*滚动条的内阴影*/
    border-radius: 10px;
    /*滚动条的圆角*/
    background-color: #00a0e9;
    /*滚动条的背景颜色*/
}

.add_device {
    margin-left: 10px;
    font-size: 11px;
    font-weight: 400;
    color: #fff;
    width: 37px;
    height: 18px;
    line-height: 18px;
    opacity: 1;
    border-radius: 5px;
    background: rgba(6, 8, 31, 1);
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
}

.add_device:hover {
    cursor: pointer;
}

.add_device:active {
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
}

@mixin status {
    width: 37px;
    height: 18px;
    border-radius: 5px;
    font-size: 9px;
    font-weight: 400;
    line-height: 15px;
    color: rgba(255, 255, 255, 1);
}

.on-line {
    background: rgba(67, 207, 124, 1);
    @include status();
}

.off-line {
    @include status();
    background: rgba(212, 48, 48, 1);
}

.unbound {
    background: rgba(255, 141, 26, 1);
    width: 45px !important;
    @include status();
}

.sensorContain {
    margin-top: 10px;
    margin-left: 20px;

    .top {
        display: flex;

        // .searchContain{
        //   height: 52px;
        //   width: 602px;
        //   padding: 1px;
        //   background: linear-gradient(180deg, transparent 10%, #36f7ff 90%, #36f7ff 100%);
        //   clip-path: polygon(5% 0,100% 0,100% 100%,0 100%,0 30%);
        // }
        .search {
            height: 50px;
            width: 600px;
            background: url("../../../../assets/images/searchBgImg.png");
            background-size: 600px 50px;
            padding: 10px;
            // clip-path: polygon(5% 0,100% 0,100% 100%,0 100%,0 30%);
            // background: linear-gradient(270deg, rgba(0, 213, 255, 0.01) 0%, rgba(0, 213, 255, 0.3) 49.03%, rgba(0, 213, 255, 0.01) 100%);
        }

        @mixin ways {
            height: 50px;
            background: url("../../../../assets/images/addSensorImg.png") no-repeat;
            margin-left: 10px;
            font-size: 20px;
            line-height: 50px;
            text-align: center;
            cursor: pointer;
        }

        .addSensor {
            @include ways();
            width: 200px;
            background-size: 200px 50px;
            color: rgba(0, 213, 255, 1);
        }


        .addSensor:active {
            font-size: 18px;
        }

        .delectWays {
            color: red;
            @include ways();

            &:active {
                font-size: 18px;
            }

            width:150px;
            background-size: 150px 50px;
        }
    }
}

.configure {
    height: 30px;
    width: 500px;
    color: rgba(0, 213, 255, 1);
    font-size: 20px;
    border: none;
    background: transparent;
}
</style>
