<template>
    <div class="editBox">
        <div class="projectNameTitele">编辑-{{ editTitle }}</div>
        <div class="containBox" v-for="(list, index) in editList" :key="index">
            <span>{{ list }}</span>
            <input class="itemNo editcommon" ref="getValue" />
        </div>
        <div class="containBox" v-if="isShowProjectItem">
            <span>管理员</span>
            <select class="itemNo editcommon selectadmin" v-model="selectAdmin" required>
                <option value="" disabled selected>管理员选择</option>
                <option :value="adminId">{{ curCreator }}</option>
            </select>
        </div>
        <div class="containBox" v-if="editType == '采集器'">
            <span>解码器</span>
            <select class="itemNo editcommon " v-model="decoderId">
                <option value="" disabled selected>选择解码器</option>
                <option v-for="item in decoderArr" :key="item.id" :value="item.id">{{ item.name }}</option>
            </select>
        </div>
        <div class="containBox" v-show="despBox">
            <span>描述</span>
            <textarea class="describe editcommon" v-model="remarks"></textarea>
        </div>
        <div class="selctType">
            <button @click="cancel">取消</button>
            <button @click="submit">确定</button>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: "v-editList",
    props: ["editType", "editTitle", "editList", "Id"],
    inject: ["reload"],
    data() {
        return {
            despBox: false,
            selectOption: false,
            isShowProjectItem: false,
            curCreator: sessionStorage.getItem("teacherAccount"),
            adminId: sessionStorage.getItem("teacherId"),
            curProjectId: sessionStorage.getItem('projectId'),
            selectAdmin: '',
            decoderId: '',
            remarks: '',
            addListArr: [],
            addListObj: {},
            fn: function (addListObj, addListArr) {
                //获取添加的输入框节点
                // 将数组的值一一填到对象中
                Object.keys(addListObj).map((i, index) => {
                    return (addListObj[i] = addListArr[index]);
                });
            }
        }
    },
    methods: {
        cancel() {
            this.$emit('handelShow', false)
        },
        async submit() {
            this.addListArr = [];
            let dom = this.$refs.getValue
            dom.forEach(element => {
                this.addListArr.push(element.value)
            });
            if (this.editType == '项目') {
                this.addListObj = {
                    name: '',
                    number: '',
                    creatorId: ' ',
                    info: '',
                    id: '',
                }
                this.fn(this.addListObj, this.addListArr)
                this.addListObj["creatorId"] = this.adminId;
                this.addListObj["id"] = this.Id
                this.addListObj['info'] = this.remarks
                await this.$store.dispatch('project/updateProject', this.addListObj)
                this.$emit('handelShow', false)
                await this.$store.dispatch('project/projectList')

            }
            if (this.editType == '项目组') {
                this.addListObj = {
                    name: '',
                    number: '',
                    info: '',
                    id: '',
                    creatorId: ' ',
                    projectId: '',
                }
                this.fn(this.addListObj, this.addListArr)
                this.addListObj["creatorId"] = this.adminId;
                this.addListObj["projectId"] = this.curProjectId
                this.addListObj["id"] = this.Id
                this.addListObj['info'] = this.remarks
                await this.$store.dispatch('userManagement/updateGroup', this.addListObj)
                this.$emit('handelShow', false)
                await this.$store.dispatch('userManagement/findGroup', {
                    creatorId: this.adminId,
                    projectId: this.projectId
                })
            }
            if (this.editType == '采集器') {
                this.addListObj = {
                    name: '',
                    number: '',
                    model: '',
                    remarks: '',
                    decoderId: '',
                    creatorId: '',
                    projectId: '',
                    id: ''
                }
                this.fn(this.addListObj, this.addListArr)
                this.addListObj["decoderId"] = this.decoderId
                this.addListObj["remarks"] = this.remarks
                this.addListObj["creatorId"] = sessionStorage.getItem("teacherId")
                this.addListObj["projectId"] = sessionStorage.getItem("projectId")
                this.addListObj["id"] = this.Id
                await this.$store.dispatch("device/updateDevice", this.addListObj)
                await this.$store.dispatch('device/findDevice', {
                    type: "1",
                    binding: "1",
                    bindingId: sessionStorage.getItem("teacherId"),
                    projectId: sessionStorage.getItem("projectId")
                })
                this.reload()
            }
            if (this.editType == '控制器解码器') {
                this.addListObj = {
                    number: '',
                    name: '',
                    path: '',
                    port: '',
                    model: '',
                    manufacturer: '',
                    agreement: '',
                    remarks: ''
                }
                this.fn(this.addListObj, this.addListArr)
                this.addListObj["type"] = "2"
                this.addListObj["id"] = this.Id
                await this.$store.dispatch("decoder/updateDecoder", this.addListObj)
                this.addListArr = []
                this.reload()
            }
            if (this.editType == '采集器解码器') {
                console.log('this.addListArr',this.addListArr)
                console.log("采集器解码器")
                this.addListObj = {
                    number: '',
                    name: '',
                    path: '',
                    port: '',
                    model: '',
                    manufacturer: '',
                    agreement: '',
                    remarks: ''
                }
                this.fn(this.addListObj, this.addListArr)
                this.addListObj["type"] = "1"
                this.addListObj["id"] = this.Id
                await this.$store.dispatch("decoder/updateDecoder", this.addListObj)
                this.addListArr = []
                this.reload()
                // await this.$store.dispatch('decoder/findDecoder', "1")
                // if (this.decoderObj["name"] !== "") {
                //     this.title = `编辑-${this.addListObj["name"]}`
                // }
                
            }
        },
    },
    computed: mapState({
        decoderArr: state => state.decoder.decoderArr,
    }),
    mounted() {
        if (this.editType == '项目') {
            this.isShowProjectItem = true
            this.despBox = true
        } else if (this.editType == '项目组') {
            this.despBox = true
        } else if (this.editType == '采集器') {
            // 查询当前项目下采集器的解码器
            this.$store.dispatch('decoder/findDecoder', "1")
            this.despBox = true
        } else if (this.editType == '控制器') {
            // 查询当前项目下采集器的解码器
            this.$store.dispatch('decoder/findDecoder', "2")
            this.despBox = true
        } else {
            this.despBox = false
        }
    }
}
</script>

<style scoped lang="scss">
.select {
    width: 240px !important;
    margin-top: 0px;

    option:disabled {
        color: rgba(255, 255, 255, 0.69)
    }
}

.editBox {
    z-index: 9001;
    width: 695px;
    height: 465px;
    background-size: 1150px 700px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: url(../assets/images/operation-prompt-box.png);
    background-repeat: no-repeat;

    .projectNameTitele {
        text-align: left;
        height: 60px;
        margin-top: 25px;
        margin-left: 20px;
        font-size: 25px;
        font-weight: 700;
        color: rgba(255, 255, 255, 1);
    }

    .containBox {
        display: flex;
        margin: 10px;
        text-align: left;
    }

    .editcommon {
        width: 500px;
        background: rgba(0, 0, 0, 0.6);
        color: rgba(255, 255, 255, 1);
        letter-spacing: 1px;
        overflow: hidden;
        margin-left: 20px;
        padding-left: 5px;
    }

    @mixin commonStyle {
        white-space: nowrap;
        height: 30px;
        line-height: 30px;
    }

    .groupName {
        @include commonStyle();
        padding-left: 5px
    }

    .itemNo {
        @include commonStyle();
    }

    .describe {
        height: 126.35px;
        white-space: wrap;
        padding: 5px;
        text-align: left;
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

.selectadmin {
    width: 500px !important;

    option:disabled {
        color: rgba(255, 255, 255, 0.69);
    }
}
</style>
