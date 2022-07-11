<template>
  <div>
    <button class="button previous" @click="clickPrevious">PREVIOUS</button>
    <button class="button next" @click="clickNext">NEXT</button>
  </div>
</template>

<script>
export default {
  name: "StepController",
  computed: {
    step() {
      return this.$store.step;
    },
  },
  methods: {
    clickNext() {
      this.$store.commit("TOGGLE_NEXT");
      this.check();
    },
    clickPrevious() {
      this.$store.commit("TOGGLE_PREVIOUS");
    },
  },
};
</script>

<style>
.button {
  display: inline-block;
  border: unset;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  color: #fff;
  padding: 8px 24px;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 1px 1px 10px rgb(0 0 0 / 40%);
  transition: box-shadow 0.35s ease-out;
}
.button:hover {
  box-shadow: 2px 2px 20px rgb(0 0 0 / 60%);
}
.previous {
  background-color: #72e6b1;
}
.next {
  background-color: #1e68cf;
  margin-left: 16px;
}
</style>