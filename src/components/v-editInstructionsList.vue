<template>
    <div class="editBox">
        <div class="projectNameTitele">某个-指令编辑</div>
        <ul class="liList">
            <li>
                <span >开启指令</span>
                <div class="length">
                    <div class="itemNo common contain">
                        <div contenteditable="true" id="input1"></div>
                        <i class="iconfont icon-24gl-cross" @click="clearInput('input1')"></i>
                    </div>
                    <div class="itemNo common contain" id="input2">
                        <div contenteditable="true"></div>
                        <i class="iconfont icon-24gl-cross" @click="clearInput('input2')"></i>
                    </div>

                </div>
            </li>
            <li>
                <span>关闭指令</span>
                <div class="length">
                    <div class="itemNo common contain">
                        <div contenteditable="true" id="input3" ></div>
                        <i class="iconfont icon-24gl-cross" @click="clearInput('input3')"></i>
                    </div>
                    <div class="itemNo common contain">
                        <div contenteditable="true" id="input4"></div>
                        <i class="iconfont icon-24gl-cross" @click="clearInput('input4')"></i>
                    </div>
                </div>
            </li>
            <li>
                <span>暂停指令</span>
                <div class="length">
                    <div class="itemNo common contain">
                        <div contenteditable="true" id="input5"></div>
                        <i class="iconfont icon-24gl-cross" @click="clearInput('input5')"></i>
                    </div>
                    <div class="itemNo common contain">
                        <div contenteditable="true" id="input6"></div>
                        <i class="iconfont icon-24gl-cross" @click="clearInput('input6')"></i>
                    </div>
                </div>
            </li>
        </ul>
        <div class="containBox" >
            <span>绑定控制器</span>
            <select class="itemNo common select" required>
                <option value="" disabled selected>选择控制器</option>
            </select>
        </div>
        <div class="containBox" >
            <span>通道号</span>
            <select class="itemNo common select" required>
                <option value="" disabled selected>选择通道</option>
            </select>
        </div>
        <div class="selctType">
            <button @click="cancel">取消</button>
            <button @click="submit" id="btn">确定</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            };
        },
        methods: {
            cancel() {
                this.$store.commit("editInstructions");
            },
            async submit() {
            },
            clearInput(dom){
                let DOM = document.getElementById(dom)
                DOM.innerText = ''
            }
        }
    };
</script>

<style lang="scss" scoped>
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
            margin: 10px;
        }
        .liList{
           li{
               margin-top: 20px;
               display: flex;
               .length{
                   display: flex;
                   margin-left: 20px;
                   .contain{
                       margin-left: 10px;
                       width: 240px !important;
                       position: relative;
                       div{
                           height: 30px;
                           margin-left: 0px !important;
                           width: 200px !important;
                           overflow: hidden;
                           display: inline-block;
                       }
                       .iconfont{
                           position: absolute;
                           font-size: 20px;
                       }

                   }
               }
           }
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
        span {
            display: inline-block;
            height: 30px;
            width: 100px;
            text-align: center;
            font-size: 19px;
            color: rgba(255, 255, 255, 1);
            letter-spacing: 1px;
            margin-left: 10px;
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