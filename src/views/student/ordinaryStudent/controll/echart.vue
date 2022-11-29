<template>
    <div class="bottom_contain">
        <div class="line">
            <!-- <div class="line_title">
                <i class="iconfont icon-jurassic_broken-line"></i>
                <span>实时曲线-{{ lines.curData }}</span>
            </div>
            <div class="x-axis-dataType" @click="curTargrt">
                <div class="month" ref="month">月</div>
                <div class="week" ref="week">周</div>
                <div class="day" ref="day">日</div>
            </div>
            <div id="stu_echart" class="echart"></div> -->
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            lines: {
                curData: "二氧化碳浓度",
                color: 'rgba(166, 166, 166, 1)'
            },
            option: {
                color: ["rgba(255, 141, 26, 1)"],
                tooltip: {
                    trigger: "axis",
                    axisPointer: {
                        type: "line"
                    }
                },
                xAxis: {
                    type: "category",
                    boundaryGap: false,
                    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: "rgba(166, 166, 166, 1)",
                        },
                        fontSize: 16,
                        fontWeight: 400,
                        lineHeight: 40
                    },
                },
                yAxis: {
                    type: "value",
                    splitLine: {
                        //分割线配置
                        show: true,
                        lineStyle: {
                            color: "rgba(255, 255, 255, 0.15)",
                        },
                    },
                    axisLine: {
                        show: false, //是否显示轴线
                        lineStyle: {
                            color: "rgba(255, 255, 255, 0.15)", //刻度线的颜色
                        },
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: "rgba(166, 166, 166, 1)",
                        },
                        fontSize: 16,
                        fontWeight: 400,
                        // lineHeight:60,
                        padding: [0, 5, 0, 0]

                    },
                },
                series: [
                    {
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
                        type: "line",
                        areaStyle: {},
                        lineHeight: 30,
                    },
                ],
            },
            xAxis_day: ["0:00", "3:00", "6:00", "9:00", "12:00", "15:00", "18:00", "21:00", "24:00"],
            xAxis_week: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            xAxis_month: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]
        };
    },
    mounted() {
        var Echart = this.$echarts.init(document.getElementById("stu_echart"));
        Echart.setOption(this.option);
    },
    methods: {
        curTargrt(e) {
            let curDayTarget = e.target.className
            if (curDayTarget == 'month') {
                this.$refs.month.setAttribute('id', 'removebackgound')
                this.$refs.week.setAttribute('id', 'setbackground')
                this.$refs.day.setAttribute('id', 'setbackground')
                let Echart = this.$echarts.init(document.getElementById("stu_echart"));
                Echart.setOption({
                    xAxis: {
                        data: this.xAxis_month
                    }
                })
            }
            if (curDayTarget == 'week') {
                this.$refs.month.setAttribute('id', 'setbackground')
                this.$refs.week.setAttribute('id', 'removebackgound')
                this.$refs.day.setAttribute('id', 'setbackground')
                let Echart = this.$echarts.init(document.getElementById("stu_echart"));
                Echart.setOption({
                    xAxis: {
                        data: this.xAxis_week
                    }
                })
            }
            if (curDayTarget == 'day') {
                this.$refs.month.setAttribute('id', 'setbackground')
                this.$refs.week.setAttribute('id', 'setbackground')
                this.$refs.day.setAttribute('id', 'removebackgound')
                let Echart = this.$echarts.init(document.getElementById("stu_echart"));
                Echart.setOption({
                    xAxis: {
                        data: this.xAxis_day
                    }
                })
            }
        },
        getrealTime(e) {
            let res = e.target.dataset.realtimes
            this.lines.curData = res
            if (res == '空气温度') this.lines.color = 'rgba(67, 207, 124, 1)'
            if (res == '空气湿度') this.lines.color = 'rgba(0, 186, 173, 1)'
            if (res == '光照度') this.lines.color = 'rgba(255, 235, 59, 1)'
            if (res == '二氧化碳浓度') this.lines.color = 'rgba(255, 141, 26, 1)'
            if (res == '基质温度') this.lines.color = 'rgba(67, 71, 0, 1)'
            if (res == '基质湿度') this.lines.color = 'rgba(56, 56, 56, 1)'
            if (res == '基质pH值') this.lines.color = 'rgba(110, 22, 22, 1)'
            if (res == '基质EC值') this.lines.color = 'rgba(212, 48, 48, 1)'
            let Echart = this.$echarts.init(document.getElementById("stu_echart"));
            Echart.setOption({
                color: [this.lines.color]
            })
        }
    },
    watch: {
        option: {
            handler(old, newData) {
                console.log(old)
                console.log(newData)

            }
        }
    }
};
</script>

<style lang="scss" scoped>
.bottom_contain {
    margin-left: 10px;
    margin-top: 10px;
    display: flex;

    .line {
        margin-left: 10px;
        background-image: url(../../../../assets/images/echart.png);
        background-repeat: no-repeat;
        width: 1080px;
        height: 300px;
        background-size: 1080px 300px;

        .line_title {
            float: left;
            padding: 20px;

            i {
                color: rgba(102, 255, 255, 1);
                font-size: 25px;
            }

            span {
                font-size: 23px;
                font-weight: 700;
                padding-left: 5px;
                letter-spacing: -0.02px;
                color: rgba(255, 255, 255, 1);
            }
        }

        .x-axis-dataType {
            margin: 20px;
            float: right;
            width: 90px;
            display: grid;
            border: 1px solid #000;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: 1fr;

            div {
                font-size: 20px;
                color: rgba(102, 255, 255, 1);
                height: 40px;
                text-align: center;
                line-height: 40px;
                background: linear-gradient(180deg,
                        rgba(20, 62, 146, 1) 0,
                        rgb(0, 0, 0, 1) 50%,
                        rgba(20, 62, 146, 1) 100%);

                &:hover {
                    cursor: default;
                }
            }

            .week {
                background: transparent;
            }
        }
    }

    .echart {
        width: 1100px;
        height: 270px;
        margin: 50px auto;
    }
}

#setbackground {
    background: linear-gradient(180deg,
            rgba(20, 62, 146, 1) 0,
            rgb(0, 0, 0, 1) 50%,
            rgba(20, 62, 146, 1) 100%) !important;
}

#removebackgound {
    background: transparent !important;
}
</style>