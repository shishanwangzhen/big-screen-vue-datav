
<template>
    <div>
        <button class="add_device" @click="decisionActive">添加</button>
        <div  v-show="isActive">
            <v-addInputList :addList="addGoupList" :addTitle="addGoupTitle"></v-addInputList>
            <v-mask :isActive="isActive"></v-mask>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    export default {
        inject: ["reload"],
        props: [ "addTitle", "addList","addGoupTitle","addGoupList"],
        data() {
            return {
            };
        },
        created() {
        },
        methods: {
            decisionActive(){
                this.$store.commit('isShowAddBox')
            }
        },
        computed:mapState({
            isActive: state =>state.addBoxIsActive
        }),
        beforeMount() {
            console.log('addTitle',this.addTitle)
        }
    };
</script>

<style lang="scss" scoped>
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
                color: rgba(255, 255, 255, 0.69)
            }
        }

        .common {
            width: 500px;
            background: rgba(0, 0, 0, 0.6);
            color: rgba(255, 255, 255, 1);
            padding-left: 10px;
            padding-right: 10px;
            letter-spacing: 1px;
            overflow: hidden;
            margin-left: 20px;
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
</style>