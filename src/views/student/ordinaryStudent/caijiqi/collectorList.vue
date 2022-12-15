<template>
    <div class="collectorContain">
        <div class="collectorGrid">
            <div class="collectorCar" v-for="(item, index) in 9" :key="index">
                <ul class="content">
                    <li class="collectorName">台创园采集器</li>
                    <li class="detail btn"><span>详情信息</span></li>
                    <li class="decoder btn"><span>解码器</span></li>
                    <li class="status"></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.collectorContain {
    margin-top: 10px;
    margin-left: 20px;

    .collectorGrid {
        padding: 10px;
        height: 450px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 20px 20px;
        background: rgba(5, 13, 75, 1);
        border: 2px solid rgba(8, 72, 138, 1);
        box-shadow: inset 0px 1px 19.99px 0px rgba(18, 142, 232, 0.34);
        border-radius: 9px;
        overflow-y: scroll;

        .collectorCar {
            position: relative;
            height: 150px;
            width: 250px;
            opacity: 1;
            border-radius: 4.29px;
            background: linear-gradient(180deg,
                    rgba(0, 102, 255, 0.8) 0%,
                    rgba(0, 10, 37, 0) 49.98%,
                    rgba(0, 102, 255, 0.9) 100%);
            border: 1.28px solid rgba(0, 102, 255, 1);

            .content {
                height: 150px;
                position: absolute;
                top: 10px;
                right: 10px;
                text-align: center;

                li {
                    margin-bottom: 10px;
                }

                .collectorName {
                    font-size: 18px;
                    font-weight: 400;
                    color: rgba(255, 255, 255, 1);
                }

                .btn {
                    width: 100px;
                    height: 30px;
                    font-size: 13px;
                    font-weight: 400;
                    line-height: 30px;
                    color: rgba(229, 229, 229, 0.76);
                    background: url(../../../../assets/images/btnImg.png);
                    background-repeat: no-repeat;
                    background-size: 100px 30px;

                    &:active {
                        font-size: 10px;
                    }
                }

                .status {
                    position: absolute;
                    bottom: 7px;
                    right: 2px;
                    width: 26px;
                    height: 26px;
                    border-radius: 50%;
                    background: rgba(107, 255, 184, 1);
                }
            }

            &::after {
                content: "";
                position: absolute;
                width: 100px;
                height: 100px;
                top: 20px;
                left: 10px;
                background: url(../../../../assets/images/collectorImg.png);
                background-size: 100px 100px;
                background-repeat: no-repeat;
            }
        }
    }

    /* 自定义滚动条样式开始 */
    ::-webkit-scrollbar {
        width: 3px;
        /*滚动条宽度*/
        height: 5px;
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
        box-shadow: 0px 1px 3px #071e4a inset;
        /*滚动条的内阴影*/
        border-radius: 5px;
        /*滚动条的圆角*/
        background-color: #0b2b64;
        /*滚动条的背景颜色*/
    }
}
</style>