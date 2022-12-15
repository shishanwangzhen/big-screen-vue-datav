<template>
    <div>
        <span class="tainqi">
            {{ nowYear }}{{ nowDate }} {{ nowWeek }} <span>{{ datetime }}</span>
        </span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            datetime: "",
            nowDate: "",
            nowYear: "",
            nowWeek: "",
        }
    },
    methods: {
        getTime() {
            setInterval(() => {
                let date = new Date();
                // 获取时间：时分秒
                const hour =
                    date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
                const minute =
                    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
                const secound =
                    date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
                this.datetime = hour + ":" + minute + ":" + secound;
                // 获取日期：年月日
                const year = date.getFullYear();
                const month = date.getMonth() + 1;
                const day = date.getDate();
                this.nowDate = month + "-" + day;
                this.nowYear = year + "-";
                // 获取星期几
                const weeks = new Array(
                    "周日",
                    "周一",
                    "周二",
                    "周三",
                    "周四",
                    "周五",
                    "周六"
                );
                this.nowWeek = weeks[new Date().getDay()];
            }, 1000);
        },
    },
    beforeMount() {
        this.getTime()
    },

}
</script>

<style lang="scss" scoped>
.tainqi {
    color: rgb(255, 255, 255);
    span {
        font-size: 16px;
        font-weight: 400;
    }
}


span span:nth-child(1) {
    color: rgba(102, 255, 255, 1);
}

span span:nth-child(2) {
    font-size: 20px;
    font-weight: 500;
    color: rgba(102, 255, 255, 1);
}
</style>