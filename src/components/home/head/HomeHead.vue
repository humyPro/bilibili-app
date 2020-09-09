<template>
  <div class="head">
    <div class="profile">
      <div class="head-item profile-photo icon-small">
        <img v-bind:src="getProfilePhoto()" />
      </div>
      <div class="head-item search-box">
        <div class="icon-small-x">
          <img src="@/assets/icon/search.svg" />
        </div>
      </div>
      <div class="head-item game-btn icon-small">
        <img src="@/assets/icon/game.svg" />
      </div>
      <div class="head-item message-btn icon-small">
        <img src="@/assets/icon/message.svg" />
      </div>
    </div>
    <div class="catagory">
      <div class="catagory-item">直播</div>
      <div class="catagory-item">推荐</div>
      <div class="catagory-item">热门</div>
      <div class="catagory-item">追番</div>
      <div class="catagory-item">影视</div>
      <div class="catagory-item">游戏</div>
      <div class="catagory-item">说唱</div>
      <div class="catagory-item">抗击肺炎</div>
      <div class="catagory-item">小康</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tophead",
  methods: {
    getProfilePhoto: function() {
      return require("@/assets/videoImg/head.jpg");
    }
  }
};
</script>

<style>
.head {
  height: 12%;
  background-color: var(--bilibili-color);
  display: flex;
  flex-direction: column;
}
.head .profile {
  flex: 2;
}
.head .catagory {
  flex: 1;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
  overflow-x: auto; /*可滑动*/
}
.head .catagory::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}

.catagory .catagory-item {
  text-align: center;
  flex-basis: 20%;
  flex-shrink: 0;
}
.profile {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.profile .profile-photo {
  height: 45px;
  width: 45px;
  border-radius: 50%;
}

.profile-photo img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.profile .search-box {
  width: 55%;
  height: 30px;
  background-color: rgb(255, 255, 255, 0.2);
  border-radius: 15px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.profile .search-box .icon-small-x {
  margin-left: 5px;
}
</style>
