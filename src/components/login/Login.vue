<template>
  <div class="login">
    <Topbar title="手机号登陆注册" other="密码登陆" />
    <div
      class="banner"
      :style="{ 'backgroundImage': 'url(' + getBanner()+ ')','background-repeat':'no-repeat','background-size':'cover' }"
    ></div>
    <form class="form">
      <div class="line">
        <div>中国大陆</div>
        <div class="icon-small">
          <img src="@/assets/icon/right-707070.svg" />
        </div>
      </div>
      <div class="line">
        <div></div>
      </div>
    </form>
  </div>
</template>

<script>
import Topbar from "@/components/common/Topbar";
export default {
  components: {
    Topbar
  },
  data: function() {
    return {};
  },
  methods: {
    getBanner() {
      return require("@/assets/img/login-background.png");
    }
  }
};
</script>

<style>
.banner {
  height: 100px;
  width: 100%;
}
.form {
  display: flex;
  flex-direction: column;
}
.form .line {
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
  align-items: center;
  height: 40px;
}
</style>
