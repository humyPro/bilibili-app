<template>
  <div id="home">
    <HomeHead></HomeHead>
    <HomeBody></HomeBody>
  </div>
</template>

<script>
import HomeHead from "./head/HomeHead";
import HomeBody from "./body/HomeBody";
export default {
  components: { HomeHead, HomeBody },
};
</script>

<style>
#home {
  height: 100%;
  width: 100%;
}
</style>