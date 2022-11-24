<template>
    <table class="tableLeft">
        <thead>
        <tr>
            <th>
                <span style="margin-left: 30px"></span>
                组名
            </th>
            <th>组编号</th>
            <th>组描述</th>
            <th>
                操作
                <v-addDevices addTitle="项目组" :addList="addList"></v-addDevices>
            </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(group, index) in groupArr" :key="group.id" :id="index === curIndex? 'bgs':''" @click="getCurindex(group.id,index)">
            <td>
                <span style="padding-right: 10px">{{ index + 1 }}</span>
                {{ group.groupName }}
            </td>
            <td>{{ group.groudID }}</td>
            <td>{{ group.groupDesp }}</td>
            <td class="record">
                <v-edit :editTitle="group.groupName" editType="项目组" :editList="editList" :Id="group.id"></v-edit>
                <v-delect :delectTitle="group.groupName" :delectId="group.id" delectType="项目组"></v-delect>
                <button class="details">详情</button>
            </td>
        </tr>
        </tbody>
    </table>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "v-groupsTable",
        components:{
        },
        data(){
            return{
                addList:['组名','组编号'],
                editList:['组名','组编号'],
                curIndex:0,
                curGroupId:''
            }
        },
        methods:{
            async getCurindex(groupId,index){
                sessionStorage.setItem('groupId',groupId)
                await this.$store.dispatch('userManagement/studentList',[
                    {type:'addList'},
                    {
                        status:1,
                        groupId:groupId,
                        projectId:sessionStorage.getItem('projectId')
                    }
                ])
                this.curIndex = index
            },
        },
        computed:mapState({
            groupArr:state => state.userManagement.groupArr,
        })
    }
</script>

<style scoped lang="scss">

    .top {
        display: flex;
    }
    @mixin table {
        /* border-radius: 20px !important; */
        /* border-radius: 20px ; */
        width: 720px;
        height: 400px;
        color: #fff !important;
        border-collapse: collapse;
        table-layout: fixed;
        margin: 20px 10px 20px 20px;
    }
    .tableLeft {
        @include table();
    }
    .tableRight {
        @include table();

    }
    thead {
        text-align: left;
        background: rgba(12, 54, 122) !important;
        box-shadow: inset 10px 10px 20px 10px rgba(18, 142, 232, 0.34) !important;
    }

    thead tr th {
        padding-left: 10px;
        line-height: 55px;
        &:last-child {
            display: flex;
        }
    }

    .record {
        display: flex;
        button {
            color: white;
            border-radius: 5px;
            width: 40.01px;
            height: 20.3px;
            border: none;
            margin-right: 10px;
        }
        .details{
            background: rgba(255, 141, 26, 1);
            &:active{
                box-shadow: 1px 1px 1px rgba(255, 141, 26, 1);            }
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
        max-height: 400px;
        min-height: 400px;
        overflow-x: hidden;
        text-align: left;
        background: rgba(5, 13, 75) !important;
        box-shadow: inset 0px 1px 20px 0px rgba(18, 142, 232, 0.34) !important;
    }
    // 1、-webkit-line-clamp:2; (用来限制在一个块元素显示的文本的行数,2表示最多显示2行。 为了实现该效果，它需要组合其他的WebKit属性)

    // 2、display: -webkit-box; (和1结合使用，将对象作为弹性伸缩盒子模型显示 )

    // 3、-webkit-box-orient:vertical;( 和1结合使用 ，设置或检索伸缩盒对象的子元素的排列方式 。)

    // 4、overflow:hidden; (顾名思义超出限定的宽度就隐藏内容)

    // 5、text-overflow: ellipsis;(规定当文本溢出时显示省略符号来代表被修剪的文本)
    tbody tr td {
        margin: 15px;
    }
    tbody tr td:first-child {
        padding-left: 15px;
    }
    tbody tr td:nth-child(3) {
        /*display: -webkit-box;*/
        /*text-overflow: ellipsis;*/
        /*-webkit-box-orient: vertical;*/
        /*-webkit-line-clamp: 3;*/
        /*overflow: hidden;*/
    }
    .tableLeft tbody tr {
        margin-top: 5px;
        background: linear-gradient(
                        90deg,
                        rgba(74, 106, 150, 1) 0%,
                        rgba(210, 227, 250, 0) 100%
        );
    }

    tbody tr,
    tfoot tr,
    thead tr {
        display: table;
        height: 40px;
        width: 100%;
        table-layout: fixed;
    }
    table thead {
        display: table;
        width: 100%;
        table-layout: fixed;
        height: 55px;
        line-height: 55px;
        font-size: 20px;
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
    .operation {
        button {
            color: #fff;
            width: 40px;
            height: 33px;
            line-height: 25px;
            border-radius: 9px;
            margin: 3px;
            padding: 2px;
            &:active {
                box-shadow: inset -3px -4px 10px 0px rgba(255, 255, 255, 0.25);
            }
            i {
                font-size: 20px;
            }
        }
        .btn_lajitong {
            background: rgba(214, 30, 30, 1);
        }
        .btn_tianxie {
            background: rgba(0, 186, 173, 1);
        }
        .btn_gantanhao {
            background: rgba(255, 141, 26, 1);
        }
    }
    $textColor: white;
    .msg {
        margin-left: 20px;
        & > li {
            padding: 20px;
            color: $textColor;
            font-size: 20px;
            font-weight: 400;
        }
        & > li:first-child {
            color: $textColor;
            font-size: 25px;
            font-weight: 500;
            .jpgImg {
                display: inline-block;
                text-align: center;
                line-height: 20px;
                width: 35px;
                height: 25px;
                opacity: 1;
                border-radius: 10px;
                background: rgba(255, 141, 26, 1);
                box-shadow: inset -3px -4px 10px 0px rgba(255, 255, 255, 0.25);
                i {
                    font-size: 20px;
                }
            }
        }
    }
#bgs{
    background: linear-gradient(90deg, rgba(0, 201, 188, 1) 0%, rgba(210, 227, 250, 0) 100%);
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
}
</style>
