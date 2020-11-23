<template>
  <div id="foot" class="foot">
    <router-link v-for="item in getTabs()" :key="item.name" :to="item.router" tag="div">
      <Tab :imgUrl="item.imgUrl" :name="item.name" :path="item.router" />
    </router-link>
  </div>
</template>

<script>
import Tab from "./Tab"
import {path} from "@/constant"
export default {
  components: { Tab },
  methods: {
    getTabs: function() {
      return [
        {
          imgUrl: require("../../assets/icon/home.svg"),
          name: "主页",
          router: path.home
        },
        {
          imgUrl: require("../../assets/icon/channel.svg"),
          name: "频道",
          router: path.channel
        },
        {
          imgUrl: require("../../assets/icon/news.svg"),
          name: "动态",
          router: path.news
        },
        {
          imgUrl: require("../../assets/icon/shopping.svg"),
          name: "会员购",
          router: path.vip
        },
        {
          imgUrl: require("../../assets/icon/bilibili-line.svg"),
          name: "我的",
          router: path.mine
        }
      ];
    }
  }
};
</script>

<style scope>
.foot {
  height: 7%;
  background-color: white;
  opacity: 0.97;
  display: flex;
  align-items: center;
  width: 100%;
  position: fixed;
  bottom: 0;
  display: flex;
  font-size: 70%;
  color: #707070;
  justify-content: space-around;
}

.foot .router-link-active {
  text-decoration: none;
}
.foot-tab {
  flex-basis: 20%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
