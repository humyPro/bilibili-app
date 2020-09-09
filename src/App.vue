<template>
  <div id="app">
    <div class="container">
      <Home></Home>
    </div>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from "./components/tabbar/Tabbar";
import Home from "./components/home/Home";
export default {
  name: "App",
  components: { Tabbar, Home },
  mounted: function () {
    let foot = document.getElementById("foot");
    let app = document.getElementById("app");
    foot.style.width = window.getComputedStyle(app).width;
    window.onresize = () => {
      foot.style.width = window.getComputedStyle(app).width;
    };
  },
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
}
html,
body {
  height: 100%;
}
.head {
  min-height: 98px;
}
.foot {
  min-height: 57px;
}
#app {
  height: 100%;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  min-width: 300px;
}
.container {
  height: 100%;
}
</style>
