<template>
  <div id="foot" class="foot">
    <Tab v-for="item in getTabs()" :key="item.name" :imgUrl="item.imgUrl" :name="item.name"/>
  </div>
</template>

<script>
import Tab from "./Tab"
export default {
  components:{Tab},
  methods:{
    getTabs:function(){
      return [
        {
          imgUrl:require("../../assets/icon/home.svg"),
          name:"主页"
        },
        {
          imgUrl:require("../../assets/icon/channel.svg"),
          name:"频道"
        },
        {
          imgUrl:require("../../assets/icon/news.svg"),
          name:"动态"
        },
        {
          imgUrl:require("../../assets/icon/shopping.svg"),
          name:"会员购"
        },
        {
          imgUrl:require("../../assets/icon/bilibili-line.svg"),
          name:"我的"
        }
      ]
    }
  }
};
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
  display: flex;
  font-size: 70%;
  color: #707070;
}
.foot .foot-tab {
  flex-basis: 20%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
