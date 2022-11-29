<template>
  <div class="tips">
          <div class="tipsTop">
            <i class="iconfont icon-horn"></i>
            <span style="padding-left: 10px">最新消息</span>
          </div>
          <div id="wrap">
            <div id="inner">
              <div id="first">本店主营拉面,刀削面,烩面,盖浇饭</div>
              <div id="second">本店主营拉面,刀削面,烩面,盖浇饭</div>
            </div>
          </div>
        </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.tips {
    padding: 10px;
    color: #fff;
    width: 320px;
    height: 73px;
    margin-bottom: 10px;
    .tipsTop {
      color: rgba(255, 235, 59, 1);
    }
  }
  #wrap {
    width: 320px;
    height: 50px;
    overflow: hidden;
    position: relative;
    margin-top: 20px;
    white-space: nowrap;
  }

  #inner {
    position: absolute;
    animation: slide 5s linear infinite;
  }

  #first {
    display: inline-block;
  }

  #second {
    display: inline-block;
    padding-left: 10px;
  }

  @keyframes slide {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

</style>