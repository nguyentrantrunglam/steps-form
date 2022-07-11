<template>
  <div class="App">
    <StatusBar class="statusBar" />
    <StepBar class="stepBar"></StepBar>
    <FormInput class="formInput"></FormInput>
  </div>
</template>

<script>
import StatusBar from "./components/StatusBar.vue";
import StepBar from "./components/StepBar.vue";
import FormInput from "./components/Form/FormInput.vue";
export default {
  name: "App",
  components: {
    StatusBar,
    StepBar,
    FormInput,
  },
};
</script>

<style>
* {
  background: #fff;
}
.App {
  width: 900px;
  height: 410px;
  margin-left: 25%;
  margin-top: 60px;
  background: #fff;
}
.statusBar {
  width: 100%;
  height: 18px;
  background-color: #f3eded;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 15px;
}
.stepBar {
  width: 100%;
  height: 84px;
  background: rgb(255, 255, 255);
  box-shadow: 0 4px 10px rgb(0 0 0 / 20%), 6px 12px 20px rgb(0 0 0 / 10%);
  margin-bottom: 15px;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
}

.formInput {
  width: 860px;
  height: fit-content;
  background: rgb(255, 255, 255);
  box-shadow: 0 4px 10px rgb(0 0 0 / 20%), 6px 12px 20px rgb(0 0 0 / 10%);
  margin-bottom: 50px;
  border-radius: 12px;
  padding: 20px 20px 20px 20px;
}

</style>
