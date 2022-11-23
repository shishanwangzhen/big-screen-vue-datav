<template>
    <div>
        <button class="btn_delete" @click="isActive = !isActive">删除</button>
        <div class="delect_contain_" v-show="isActive">
        <div class="delect">
            <div class="tips">提示</div>
            <div class="content"><i class="iconfont icon-gantanhao" style="color:rgba(255, 195, 0, 1)"></i> 是否永久删除该{{ delectTitle }}</div>
            <div class="selctType">
                <button @click="isActive = !isActive">取消</button>
                <button @click="deleteItem(delectId)">删除</button>
            </div>
        </div>
        <v-mask :isActive="isActive"></v-mask>
    </div>
    </div>
</template>

<script>
export default {
    props:["delectTitle","delectId"],
    data(){
        return{
            isActive:false
        }
    },
    methods:{
        async deleteItem(delectId){
            await this.$store.dispatch('project/deleteProject',delectId)
            await this.$store.dispatch('project/projectList')
        }
    }
}
</script>

<style lang="scss" scoped>
.btn_delete {
    color: white;
    border-radius: 5px;
    width: 42.01px;
    height: 21.3px;
    border: none;
    margin-right: 10px;
    background: rgba(216, 40, 40, 1);
    &:active {
        box-shadow: 1px 1px 1px rgba(216, 40, 40, 1);
    }

    &:hover {
        cursor: pointer;
    }
}
.delect_contain_ {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    float: left;
    .delect {
        z-index: 9001;
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        margin: auto;
        width: 430px;
        height: 200px;
        background: url(../assets/images/operation-prompt-box.png);
        background-size:430px 298px ;
        text-align: left;

        .tips {
            height: 60px;
            margin-top: 15px;
            margin-left: 20px;
            font-size: 25px;
            font-weight: 700;
            color: rgba(255, 255, 255, 1);
        }

        .line {
            margin: 30px auto;
            width: 90%;
            height: 1px;
            opacity: 1;
            background: linear-gradient(180deg,
                    rgba(78, 146, 230, 0) 0,
                    rgba(79, 148, 230, 1) 50.77%,
                    rgba(79, 147, 228, 0) 100%);
        }

        .content {
            margin-left: 40px;
            font-size: 25px;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
            margin-bottom: 50px;
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
    }
}
</style>