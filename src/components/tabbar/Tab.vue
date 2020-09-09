<template>
  <div class="foot-tab" v-bind:class="{active:isActive}">
    <div class="icon-small">
      <img v-bind:src="imgUrl" />
    </div>
    <div>{{name}}</div>
  </div>
</template>

<script>
export default {
  props: {
    imgUrl: String,
    isActive: {
      type: Boolean,
      default: false,
    },
    name: String,
  },
};
</script>

<style>
</style>
