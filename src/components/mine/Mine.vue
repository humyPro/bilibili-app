<template>
  <div class="mine">
    <div class="my-info-card">
      <div class="wrapper icons flex-row-end">
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
      <div class="wrapper flex-row-around" @click="loginPage">
        <div class="circular head-photo ring">
          <img class="circular" :src="headPhoto" />
        </div>
        <div class="wrapper flex-column row-text">
          <div class="nick-name">败给阿库娅也太可惜了吧</div>
          <div class="tag">年度大会员</div>
          <div class="coin">B币:0.0 硬币:1194</div>
        </div>
        <div class="wrapper flex-center">
          <div>空间</div>
          <div class="icon-small-x">
            <img src="@/assets/icon/right.svg" />
          </div>
        </div>
      </div>
      <div class="wrapper card fans flex-center">
        <div class="wrapper flex-column flex-center item">
          <div>18</div>
          <div>动态</div>
        </div>
        <div class="spliter"></div>
        <div class="wrapper flex-column flex-center item">
          <div>114</div>
          <div>关注</div>
        </div>
        <div class="spliter"></div>
        <div class="wrapper flex-column flex-center item">
          <div>114</div>
          <div>粉丝</div>
        </div>
      </div>
      <div class="vip-card"></div>
    </div>
    <div class="function-card">ddd</div>
  </div>
</template>

<script>
import constant from "@/constant"
export default {
  methods: {
    loginPage: function () {
      this.$router.push(constant.path.loginPath);
    },
  },
  computed: {
    headPhoto: function () {
      return require("../../assets/videoImg/head.jpg");
    },
  },
};
</script>

<style>
.mine {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.card {
  padding: 5px 0;
}
.my-info-card {
  background-color: var(--bilibili-color);
  color: white;
  display: flex;
  flex-direction: column;
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
.icons.wrapper .icon-small {
  margin: 10px;
}
.my-info-card .tag {
  font-size: 0.6em;
  background-color: white;
  color: var(--bilibili-color);
  border-radius: 5px;
  padding: 0 5px;
}
.my-info-card .coin {
  font-size: 0.9em;
}
.flex-row-around {
  justify-content: space-around;
}
.flex-row-end {
  justify-content: flex-end;
}
.row-text {
  justify-content: space-around;
  align-items: flex-start;
}
.spliter {
  background-color: rgb(192, 186, 186);
  height: 20px;
  width: 0.5px;
}
.fans {
  margin: 10px 0;
}
.fans .item {
  flex-basis: 33%;
}
.vip-card {
  width: 90%;
  height: 50px;
  align-self: center;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 5px 5px 0 0;
}
</style>
