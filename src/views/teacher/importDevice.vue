<template>
        <div class="import-container">
            <fieldset>
                <legend class="title">导入设备</legend>
                <ul class="importMsg">
                    <li>
                        <div>选择设备类型</div>
                        <select>
                            <option>采集设备</option>
                            <option>控制设备</option>
                            <option>被控设备</option>
                            <option>虚拟设备</option>
                        </select>
                    </li>
                    <li>
                        <div>设备名称</div>
                        <input type="text"/>
                    </li>
                    <li>
                        <div>设备ID</div>
                        <input type="text"/>
                    </li>
                    <li>
                        <div>解码器</div>
                        <select>
                            <option>解码器</option>
                            <option>解码器</option>
                            <option>解码器</option>
                            <option>解码器</option>
                        </select>
                    </li>
                    <li>
                        <div>选择厂商</div>
                        <select>
                            <option>厂商</option>
                            <option>厂商</option>
                            <option>厂商</option>
                            <option>厂商</option>
                        </select>
                    </li>
                    <li>
                        <button @click="back">返回</button>
                        <button>确定</button>
                    </li>
                </ul>
            </fieldset>
            <div class="table-container">
                <fieldset>
                    <legend class="title">采集设备</legend>
                    <div class="table">
                        <div class="th">
                            <div>已导入设备名称</div>
                            <div>设备id</div>
                            <div>操作人</div>
                            <div>导入日期</div>
                        </div>
                        <div class="td">
                            <div class="td-content" v-for="item in caiji" :key="item.id">
                                <div class="item">{{item.name}}</div>
                                <div class="item">{{item.id}}</div>
                                <div class="item">{{item.userName}}</div>
                                <div class="item">{{item.date}}</div>
                            </div>
                        </div>
                    </div>
                </fieldset>
                <fieldset>
                    <legend class="title">控制设备</legend>
                    <div class="table">
                        <div class="th">
                            <div>已导入设备名称</div>
                            <div>设备id</div>
                            <div>操作人</div>
                            <div>导入日期</div>
                        </div>
                        <div class="td">
                            <div class="td-content" v-for="item in caiji" :key="item.id">
                                <div class="item">{{item.name}}</div>
                                <div class="item">{{item.id}}</div>
                                <div class="item">{{item.userName}}</div>
                                <div class="item">{{item.date}}</div>
                            </div>
                        </div>
                    </div>
                </fieldset>
                <fieldset>
                    <legend class="title">被控设备</legend>
                    <div class="table">
                        <div class="th">
                            <div>已导入设备名称</div>
                            <div>设备id</div>
                            <div>操作人</div>
                            <div>导入日期</div>
                        </div>
                        <div class="td">
                            <div class="td-content" v-for="item in caiji" :key="item.id">
                                <div class="item">{{item.name}}</div>
                                <div class="item">{{item.id}}</div>
                                <div class="item">{{item.userName}}</div>
                                <div class="item">{{item.date}}</div>
                            </div>
                        </div>
                    </div>
                </fieldset>
                <fieldset>
                    <legend class="title">虚拟设备</legend>
                    <div class="table">
                        <div class="th">
                            <div>已导入设备名称</div>
                            <div>设备id</div>
                            <div>操作人</div>
                            <div>导入日期</div>
                        </div>
                        <div class="td">
                            <div class="td-content" v-for="item in caiji" :key="item.id">
                                <div class="item">{{item.name}}</div>
                                <div class="item">{{item.id}}</div>
                                <div class="item">{{item.userName}}</div>
                                <div class="item">{{item.date}}</div>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </div>
        </div>
</template>

<script>
    export default {
        name: "importDevice",
        data(){
            return{
                caiji:[
                    {
                        name:'采集器1',
                        id:'001',
                        userName:'王小二',
                        date:'2022-11-21'
                    },
                    {
                        name:'采集器2',
                        id:'002',
                        userName:'王小二',
                        date:'2022-11-21'
                    },
                    {
                        name:'采集器3',
                        id:'003',
                        userName:'王小二',
                        date:'2022-11-21'
                    },
                    {
                        name:'采集器4',
                        id:'004',
                        userName:'王小二',
                        date:'2022-11-21'
                    },
                ]
            }

        },
        methods:{
            back(){
                this.$router.push({
                    path:'/teacherPage/projectTable'
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    @mixin inputStyle{
        width: 300px;
        height: 36.96px;
        border-radius: 6px;
        background: rgba(119, 165, 255, 0.33);
        font-size: 15px;
        color: white;
    }
    .import-container{
        display: flex;
        margin-left: 30px;
        .importMsg{
            width: 500px;
            height: 750px;
            margin-right: 20px;
            border-radius: 12px;
            box-shadow:inset 0px 1.46px 29.24px 0px rgba(18, 142, 232, 0.34);
            background: rgba(5, 13, 75, 1);
            position: relative;
            &::before{
                content: '';
                position: absolute;
                width: 300px;
                height:400px;
                background-image: url("../../assets/images/bg1.png");
                background-repeat: no-repeat;
                right: -75px;
                bottom: 40px;
            }
            li{
                text-align: left;
                padding: 20px;
                div{
                    color: white;
                    padding: 10px;
                    font-size: 20px;
                    font-weight: 500;
                    margin-bottom: 5px;
                }
                input{
                    @include inputStyle();
                    padding: 5px;
                    outline: none;
                }
                select{
                    @include inputStyle();
                }
                button{
                    margin-right: 20px;
                    width: 71.11px;
                    height: 36.06px;
                    font-size: 18px;
                    color: white;
                    font-weight: 500;
                    border-radius: 11.67px;
                    box-shadow:inset 0px -7.78px 5.19px 0px rgba(255, 255, 255, 0.25);
                    &:first-child{
                        background: rgba(216, 40, 40, 1);
                    }
                    &:last-child{
                        background: rgba(0, 186, 173, 1);
                    }
                    &:active{
                        font-size: 15px;
                    }
                }
                &:last-child{
                    bottom: 0;
                    right: 0;
                    position: absolute;
                }
            }
        }
        .table-container{
            display: grid;
            width: 1300px;
            grid-template-columns: 1fr 1fr ;
            grid-template-rows: 1fr 1fr;

            .table {
                color: aliceblue;
                display: grid;
                width: 600px;
            }
            .th {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr 1fr;
                background: rgba(12, 54, 122, 0.58);
                box-shadow: inset 10px 10px 20px 10px rgb(18 142 232 / 34%) ;
                text-align: center;
                line-height: 30px;
            }
            .td {
                height: 300px;
                overflow-y: scroll;
                background: rgba(5, 13, 75, 1);
                border: 2.92px solid rgba(8, 72, 138, 1);
                box-shadow:inset 0px 1.46px 29.24px 0px rgba(18, 142, 232, 0.34);
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
                grid-template: minmax(40px, auto) /1fr 1fr 1fr 1fr;
                text-align: center;
            }

            .item {
                display: grid;
                justify-content: center;
                align-items: center;
                /* border: 1px solid #aaa; */
                border-top: none;
            }
        }
    }
    .title{
        font-size: 20px;
        height: 40px;
        line-height: 40px;
        font-weight: 700;
        padding-left: 10px;
        color: aliceblue;
    }
    fieldset {
        margin-left: 20px;
        margin-top: 10px;
        padding: 10px;
    }
</style>
