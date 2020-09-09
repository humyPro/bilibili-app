<template>
  <div class="mine">
    <div class="my-info-card">
      <div class="wrapper flex-end">
        <div class="icon-small">
          <img src="@/assets/icon/scan.svg" />
        </div>
        <div class="icon-small">
          <img src="@/assets/icon/palette.svg" />
        </div>
        <div class="icon-small">
          <img src="@/assets/icon/moon.svg" />
        </div>
      </div>
      <div class="wrapper flex-around">
        <div class="circular head-photo ring">
          <img class="circular" :src="headPhoto" />
        </div>
        <div class="wrapper flex-column">
          <div class="nick-name">败给阿库娅也太可惜了吧</div>
          <div class="tag">年度大会员</div>
          <div class="Coin">B币:0.0 硬币:1194</div>
        </div>
        <div class="icon-link">空间</div>
      </div>
    </div>
    <div class="function-card">ddd</div>
  </div>
</template>

<script>
export default {
  computed: {
    headPhoto: function() {
      return require("../../assets/videoImg/head.jpg");
    }
  }
};
</script>

<style>
.mine {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.my-info-card {
  background-color: var(--bilibili-color);
}
.mine .head-photo {
  height: 60px;
  width: 60px;
}
.ring {
  border: 3px solid white;
}
.mine .head-photo .wrapper {
  display: flex;
}
.wrapper .icon-small {
  margin: 10px;
}
</style>