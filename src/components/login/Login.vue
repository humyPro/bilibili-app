<template>
  <div class="login">
    <Topbar title="手机号登陆注册" other="密码登陆" />
    <div
      class="banner"
      :style="{ 'backgroundImage': 'url(' + getBanner()+ ')','background-repeat':'no-repeat','background-size':'cover' }"
    ></div>
  </div>
</template>

<script>
import Topbar from "@/components/common/Topbar";
export default {
  components: {
    Topbar,
  },
  methods: {
    getBanner() {
      return require("@/assets/img/login-background.png");
    },
  },
};
</script>

<style>
.banner {
  height: 100px;
  width: 100%;
}
</style>
