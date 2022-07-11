<template>
  <div>
    <div class="step firstStep">
      <div class="number">1</div>
      <div class="content">About You</div>
    </div>
    <div class="step secondStep">
      <div class="number">2</div>
      <div class="content">About your Company</div>
    </div>
    <div class="step thirdStep">
      <div class="number">3</div>
      <div class="content">Finishing Up</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StepBar",
  data() {
    return {
      border1: "2px solid #9fbcd7",
      border2: "none",
      border3: "none",
    };
  },
  computed: {
    step() {
      return this.$store.state.step;
    },
    isAnswer() {
      return this.$store.state.isAnswer;
    },
    isAgree() {
      return this.$store.state.isAgree;
    }

  },
  watch: {
    step: {
      handler() {
        if (this.step == 1) {
          this.border1 = "2px solid #9fbcd7";
          this.border2 = "none";
          this.border3 = "none";
        }
        if (this.step == 2) {
          this.border1 = "2px solid #32683c";
          this.border2 = "2px solid #9fbcd7";
          this.border3 = "none";
        }
        if (this.step == 3) {
          this.border1 = "2px solid #32683c";
          this.border2 = "2px solid #32683c";
          this.border3 = "2px solid #9fbcd7";
        }
      },
      deep: true,
    },
    isAnswer: {
      handler() {
        if (this.isAgree && this.isAnswer) {
          this.border1 = "2px solid #32683c";
          this.border2 = "2px solid #32683c";
          this.border3 = "2px solid #32683c";
        } else {
          this.border1 = "2px solid #32683c";
          this.border2 = "2px solid #32683c";
          this.border3 = "2px solid #9fbcd7";
        }
      },
      deep: true
    },
    isAgree: {
      handler() {
        if (this.isAgree && this.isAnswer) {
          this.border1 = "2px solid #32683c";
          this.border2 = "2px solid #32683c";
          this.border3 = "2px solid #32683c";
        } else {
          this.border1 = "2px solid #32683c";
          this.border2 = "2px solid #32683c";
          this.border3 = "2px solid #9fbcd7";
        }
      },
      deep: true
    }

  },
};
</script>

<style>
.firstStep {
  border: v-bind(border1);
}

.secondStep {
  border: v-bind(border2);
}

.thirdStep {
  border: v-bind(border3);
}

.step {
  height: 44px;
  border-radius: 12px;
  background-color: #f3f3f3;
  margin-top: 15px;
  display: flex;
  justify-content: space-evenly;
  font-weight: 400;
  font-family: "Poppins", sans-serif;
  margin-right: 20px;
  margin-left: 20px;
}

.number {
  height: 24px;
  width: 24px;
  background: #969899;
  border-radius: 50%;
  color: #f4efe7;
  text-align: center;
  font-size: 16px;
  margin-top: 8px;
  margin-left: 20px;
  padding: 2px 2px 2px 2px;
}

.content {
  color: #969899;
  background: #f3f3f3;
  margin-top: 12px;
  margin-right: 20px;
  margin-left: 10px;
  font-size: 14px;
}
</style>