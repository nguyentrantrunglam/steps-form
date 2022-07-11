<template>
  <div>
    <!-- <InputField
      v-if="step == 1"
      title="Full Name"
      typeInput="text"
      class="inputField"
      ref="step1"
    ></InputField>
    <InputField
      v-if="step == 1"
      title="Your Email"
      typeInput="email"
      class="inputField"
      ref="step1"
    ></InputField>
    <StepController @check="check"></StepController> -->
    <FirstStep v-if="step == 1"></FirstStep>
    <SecondStep v-if="step == 2"></SecondStep>
    <ThirdStep v-if="step == 3"></ThirdStep>
  </div>
</template>

<script>
import FirstStep from "./FirstStep.vue";
import SecondStep from "./SecondStep.vue";
import ThirdStep from "./ThirdStep.vue";

export default {
  name: "FormInput",
  computed: {
    step() {
      return this.$store.state.step;
    },
  },
  components: {
    FirstStep,
    SecondStep,
    ThirdStep,
  },
  methods: {
    check() {
      this.$refs.step1.check();
    },
  },
};
</script>

<style>
.inputField {
  background: #fff;
  height: fit-content;
  margin-bottom: 10px;
}
.controller {
  width: 100%;
  height: 34px;
  display: flex;
  justify-content: center;
}
</style>