<template>
  <div id="foot" class="foot">
    <div class="foot-tab">首页</div>
    <div class="foot-tab">频道</div>
    <div class="foot-tab">动态</div>
    <div class="foot-tab">会员购</div>
    <div class="foot-tab">我的</div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.foot {
  height: 7%;
  background-color: white;
  opacity: 0.97;
  display: flex;
  align-items: center;
  width: 100%;
  position: fixed;
  bottom: 0;
}
.foot .foot-tab {
  flex-basis: 20%;
  text-align: center;
}
</style>