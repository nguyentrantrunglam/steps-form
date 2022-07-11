<template>
  <div>
    <div class="loading"></div>
  </div>
</template>

<script>
export default {
  name: "StatusBar",
  computed: {
    width() {
      return this.$store.state.step * 300 + 'px';
    },
  },
};
</script>

<style>
.loading {
  height: 100%;
  width: v-bind(width);
  background: #437fe8;
  border-radius: 12px;
  transition: width 0.35s ease-out;
  ;
}
</style>