<template>
  <div class="topbar">
    <div class="icon-small" @click="back">
      <img src="@/assets/icon/left.svg" />
    </div>
    <div>{{title}}</div>
    <div>{{other}}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    other: {
      type: String
    }
  },
  methods: {
    back: function() {
      this.$router.back();
    }
  }
};
</script>

<style>
.topbar {
  display: flex;
  justify-content: space-around;
  background-color: var(--bilibili-color);
  height: 50px;
  align-items: center;
  color: white;
}
.topbar div:nth-child(2) {
  flex-basis: 60%;
}
.topbar div:nth-child(3) {
  font-size: 0.8em;
}
</style>
