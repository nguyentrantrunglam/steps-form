<template>
  <div class="field">
    <p class="title">From Where did you hear about us</p>
    <p v-if="answer == ''" @click="toggle" @blur="checkAnswer" class="inputAnswer">-- Choose answer --</p>
    <p v-if="answer != ''" @click="toggle" class="inputAnswer">{{ answer }}</p>
    <div class="form">
      <input type="radio" id="Friend" value="Friend" v-model="answer">
      <label @click="toggle" for="Friend">
        <p class="form-text">Friend</p>
      </label>
      <input type="radio" id="Facebook" value="Facebook" v-model="answer">
      <label @click="toggle" for="Facebook">
        <p class="form-text">Facebook</p>
      </label>
      <input type="radio" id="Website" value="Website" v-model="answer">
      <label @click="toggle" for="Website">
        <p class="form-text">Website</p>
      </label>
    </div>

    <span v-if="!isAnswer">The field is required!</span>
  </div>
  <div class="field-check">

    <input id="agree" v-model="isAgree" class="inputAgree" type="checkbox" />
    <label style="width:737px" for="agree">
      <p class="title">I accept terms & conditions</p>
    </label>
    <span v-if="!isCheckAgree">The field is required!</span>
  </div>
  <div class="controller">
    <button class="button previous" @click="clickReset">RESET</button>
    <button class="button next" @click="check">SEND</button>
  </div>
</template>

<script>
export default {
  name: "SecondStep",
  data() {
    return {
      displayForm: 'none',
      isAnswer: true,
      isCheckAgree: true,

      borderAnswer: "1px solid #ccc",
      boxshadowAnswer: "",
      outlineAnswer: "3px solid transparent",

      borderAgree: "1px solid #ccc",
      boxshadowAgree: "",
      outlineAgree: "3px solid transparent",
    };
  },
  computed: {
    step() {
      return this.$store.step;
    },
    answer: {
      get() {
        return this.$store.state.answer;
      },
      set(value) {
        this.$store.commit("SET_ANSWER", value);
      },
    },
    isAgree: {
      get() {
        return this.$store.state.isAgree;
      },
      set(value) {
        this.$store.commit("SET_ISAGREE", value);
      },
    },
  },
  watch: {
    answer: {
      handler() {
        this.checkAnswer();
      },
      deep: true,
    },
    isAgree: {
      handler() {
        this.checkIsAgree();
      },
      deep: true,
    },
  },
  methods: {
    toggle() {
      if (this.displayForm == 'none') {
        this.displayForm = 'block'
      } else {
        this.displayForm = 'none'
        this.checkAnswer()
      }
    },
    clickNext() {
      this.$store.commit("TOGGLE_NEXT2");
      this.check();
    },
    clickReset() {
      this.$store.commit("SET_STEP", 1);
      this.$store.commit("SET_NAME", "");
      this.$store.commit("SET_EMAIL", "");
      this.$store.commit("SET_COMPANY", "");
      this.$store.commit("SET_NUMBER", "");
      this.$store.commit("SET_ANSWER", "");
      this.$store.commit("SET_ISAGREE", false);
      this.$store.commit("SET_ISANSWER", false);
      this.$store.commit("SET_NAMEVALID", false);
      this.$store.commit("SET_EMAILVALID", false);
      this.$store.commit("SET_COMPANYVALID", false);
      this.$store.commit("SET_NUMBERVALID", false);
    },
    check() {
      this.checkAnswer(), this.checkIsAgreeSend();
    },
    checkAnswer() {
      console.log("Changed answer");
      if (this.answer == '') {
        console.log(1);
        this.isAnswer = false;
        this.$store.commit("SET_ISANSWER", this.isAnswer);
        this.borderAnswer = "1px solid #aa4651";
        this.boxshadowAnswer = "0 0 4px #f4b6c1";
      } else {
        this.isAnswer = true;
        this.$store.commit("SET_ISANSWER", this.isAnswer);
        this.borderAnswer = "1px solid #ccc";
        this.boxshadowAnswer = "";
      }
    },
    checkIsAgree() {
      if (this.isAgree == true) {
        this.isCheckAgree = true;
        this.$store.commit("SET_ISAGREE", this.isCheckAgree);
        this.borderAgree = "1px solid #ccc";
        this.boxshadowAgree = "";
      }
    },
    checkIsAgreeSend() {
      if (this.isAgree == false) {
        this.isCheckAgree = false;
        this.$store.commit("SET_ISAGREE", this.isCheckAgree);
        this.borderAgree = "1px solid #aa4651";
        this.boxshadowAgree = "0 0 4px #f4b6c1";
      } else {
        this.isCheckAgree = true;
        this.$store.commit("SET_ISAGREE", this.isCheckAgree);
        this.borderAgree = "1px solid #ccc";
        this.boxshadowAgree = "";
      }
    },
  },
};
</script>

<style scoped>
input[type="radio"] {
  display: none;
}

.field {
  margin-bottom: 10px;
}

.field-check {
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
}

.title {
  font-size: 16px;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  background: #fff;
  margin-bottom: 6px !important;
  margin-top: 0px;
  width: 97%;
}

.inputAnswer {
  color: #2f4052;
  height: 28px;
  width: 95%;
  font-size: 16px !important;
  font-family: Arial, Helvetica, sans-serif;
  box-shadow: v-bind(boxshadowAnswer);
  border: v-bind(borderAnswer);
  outline: v-bind(outlineAnswer);
  border-radius: 5px;
  background: #fff;
  font-size: 16px;
  margin-bottom: 5px;
  transition: all 0.2s ease;
  padding-left: 15px;
  padding-top: 10px;
  cursor: pointer;
}

input:focus {
  outline: 3px solid #36bef869;
}

.inputAgree {
  height: 15px;
  width: 15px;
  box-shadow: v-bind(boxshadowAgree);
  border: v-bind(borderAgree);
  outline: v-bind(outlineAgree);
  border-radius: 5px;
  background: #fff;
  font-size: 16px;
  margin-bottom: 5px;
  transition: all 0.2s ease;
  padding-left: 15px;

}

.form {
  display: v-bind(displayForm);
  transition: display 3s ease-in;
  position: absolute;
  width: 833px;
  border-radius: 5px;
  border: 1px solid #ccc;

  background-color: #fff;
  padding: 12px 0;
  box-shadow: 0 4px 8px rgb(0 0 0 / 20%);
  border-radius: 12px;

}

.form-text {
  color: #2f4052;
  width: 814px;
  margin-top: 0px;
  margin-bottom: 0px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  padding: 8px 3px 3px 16px;
  transition: background 0.3s ease-in;
  height: 25px;
  cursor: pointer;
}

.form-text:hover {
  background: #ccc;
}

span {
  color: #bc8896;
  background: #fff;
  margin-bottom: 10px;
  font-size: 12px;
}

div {
  background: #fff;
}

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

.controller {
  margin-top: 20px;
}

.inputAnswer * {
  height: 30px;
}
</style>