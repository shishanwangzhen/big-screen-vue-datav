<template>
  <div class="project_box">
    <div class="project">
      <span>江苏农林职业技术学院信工院物联网实训云平台</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@keyframes roll {
  from {
    background-position-x: 0;
  }
  to {
    background-position-x: 50vw;
  }
}
@mixin box {
  clip-path: polygon(0 0, 100% 0, 95% 60%, 90% 60%, 85% 100%, 0 100%);
}
.project_box {
  @include box;
  height: 80px;
  width: 50vw;
  background: linear-gradient(
    to right,
    transparent 10%,
    rgba(54, 247, 255, 1) 90%,
    rgba(54, 247, 255, 1) 100%
  );
  animation: roll 3s linear infinite;
}
.project {
  @include box;
  height: 76px;
  width: 49.8vw;
  background: linear-gradient(to bottom,rgba(14, 95, 255, 1) 0%, rgb(18, 63, 155) 41.5%, rgba(14, 95, 255, 1) 100%);
  text-align: left;
  line-height: 80px;
  padding-left: 20px;
}
.project span {
  font-size: 35px;
  font-weight: 900;
  letter-spacing: 5.14px;
  line-height: 0px;
  color: rgba(255, 255, 255, 1);
}
</style>