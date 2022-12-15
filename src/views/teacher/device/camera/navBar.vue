<template>
    <div style="display: flex">
        <div class="navCamera">
            <div class="cameraList">
                <div class="cameraListContainer" v-for="(i,index) in 5" :key="index">
                    <ul class="cameraMsg">
                        <li>名称：</li>
                        <li>ID：</li>
                        <li>型号：</li>
                        <li>解码器：</li>
                    </ul>
                    <button class="btn">详情信息</button>
                    <button class="btn">配置信息</button>
                    <div id="delete" @click="deleteCamera">
                        <i class="iconfont icon-24gl-cross" ></i>
                    </div>

                </div>
            </div>
            <button class="addCamera" @click="showAddCamera">
                <i class="iconfont icon-tianjia1"></i>
                添加
            </button>
        </div>
        <v-cameraPlayback></v-cameraPlayback>
        <v-addCamera addTitle="监控设备" :addList="addList"></v-addCamera>
        <v-deleteVCamera></v-deleteVCamera>
    </div>
</template>

<script>
    import cameraPlayback from './camera_playback'
    import  addCamera from '_c/v-addCamera'
    import deleteVCamera from '_c/v-deleteCamer'
    export default {
        data(){
            return{
                addList:['设备名称','设备ID','设备型号']
            }
        },
        components:{
            'v-cameraPlayback':cameraPlayback,
            'v-addCamera':addCamera,
            'v-deleteVCamera':deleteVCamera
        },
        methods:{
            showAddCamera(){
                this.$store.commit("isShowAddBox")
            },
            deleteCamera(){
                this.$store.commit('deletCamera')
            }
        }
    }
</script>

<style scoped lang="scss">
    .navCamera{
        position: relative;
        margin-top: 10px;
        margin-left: 20px;
        width: 370.25px;
        height: 756px;
        opacity: 1;
        border-radius: 8.64px;
        background: rgba(5, 13, 75, 1);
        border: 1.92px solid rgba(8, 72, 138, 1);
        box-shadow:inset 0px 0.96px 19.2px 0px rgba(18, 142, 232, 0.34);
        .cameraList{
            padding: 10px;
            height: 670px;
            overflow-y: scroll;
            max-height: 670px;
            min-height: 670px;
            overflow-x: hidden;
            .cameraListContainer{
                margin-bottom: 10px;
                padding: 10px;
                position: relative;
                width: 325px;
                height: 203px;
                opacity: 1;
                border-radius: 10px;
                color:  rgba(227, 59, 98, 1);
                background: linear-gradient(45deg, rgba(101, 145, 235, 1) 0%, rgb(38, 87, 226) 60%, rgba(0, 85, 255, 0.01) 100%);
                .cameraMsg{
                    li{
                        height: 27px;
                        line-height: 27px;
                        font-size: 18px;
                        font-weight: 400;
                        color: rgba(255, 255, 255, 1);
                        text-align: left;
                        vertical-align: top;
                    }
                }
                .btn{
                    display: block;
                    color: rgb(171,216,233);
                    font-size: 18px;
                    margin-top: 5px;
                    width: 96px;
                    height: 31px;
                    border-radius: 12px;
                    border: none;
                    background: linear-gradient(180deg, rgba(3, 200, 255, 0.01) 0%, rgb(63, 145, 230) 100%);
                    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
                    &:active{
                        font-size: 15px;
                    }
                }
                &::before{
                    content: "";
                    width: 100px;
                    height:150px;
                    position: absolute;
                    background-image: url("../../../../assets/images/cameraImg.png") ;
                    background-repeat: no-repeat;
                    background-size: 100px 150px;
                    bottom: 0;
                    right: 5px;
                }
                #delete{
                    position: absolute;
                    font-size: 20px;
                    top: 5px;
                    right: 10px;
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
        .addCamera{
            position: absolute;
            width: 120px;
            height: 47px;
            opacity: 1;
            text-align: center;
            border-radius: 11px;
            background: rgba(84, 136, 227, 0.58);
            font-size: 22px;
            font-weight: 400;
            line-height: 47px;
            color: rgba(229, 229, 229, 1);
            vertical-align: top;
            bottom: 10px;
            right: 10px;
            &:active{
                font-size: 20px;
            }
        }
    }
</style>