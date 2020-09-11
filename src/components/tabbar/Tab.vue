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
    name: String,
    path: String
  },
  data: function() {
    return { isActive: false };
  },
  watch: {
    $route(e) {
      this.isActive = e.path === this.path;
    }
  }
};
</script>

<style scope>
.active {
  color: var(--bilibili-color);
}
</style>
