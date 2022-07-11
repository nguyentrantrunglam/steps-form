<template>
  <div class="field">
    <p class="title">Your Company Name</p>
    <input v-model="inputCompanyName" @input="setCompanyName" @blur="checkCompanyName" class="inputCompanyName"
      type="text" />
    <span v-if="!isCompanyNameInput">The field is required!</span>
  </div>
  <div class="field">
    <p class="title">Number of Employees</p>
    <input v-model="inputNumber" @blur="checkNumber" class="inputNumber" type="text" />
    <span v-if="!isNumberInput">The field is required!</span>
    <span v-else-if="!isNumberValidate">The field must be number</span>
  </div>
  <div class="controller">
    <button class="button previous" @click="clickPrevious">PREVIOUS</button>
    <button class="button next" @click="clickNext">NEXT</button>
  </div>
</template>

<script>
export default {
  name: "SecondStep",
  data() {
    return {
      isCompanyNameInput: true,
      isNumberInput: true,
      isNumberValidate: true,

      borderCompanyName: "1px solid #ccc",
      boxshadowCompanyName: "",
      outlineCompanyName: "3px solid transparent",

      borderNumber: "1px solid #ccc",
      boxshadowNumber: "",
      outlineNumber: "3px solid transparent",
    };
  },
  computed: {
    step() {
      return this.$store.step;
    },
    inputCompanyName: {
      get() {
        return this.$store.state.company;
      },
      set(value) {
        this.$store.commit("SET_COMPANY", value);
      },
    },
    inputNumber: {
      get() {
        return this.$store.state.number;
      },
      set(value) {
        this.$store.commit("SET_NUMBER", value);
      },
    },
  },
  watch: {
    inputCompanyName: {
      handler() {
        this.checkCompanyName();
      },
      deep: true,
    },
    inputNumber: {
      handler() {
        this.checkNumber();
      },
      deep: true,
    },
  },
  methods: {
    clickNext() {
      this.$store.commit("TOGGLE_NEXT2");
      this.check();
    },
    clickPrevious() {
      this.$store.commit("TOGGLE_PREVIOUS2");
    },
    check() {
      this.checkCompanyName(), this.checkNumber();
    },
    checkCompanyName() {
      if (this.inputCompanyName == "") {
        this.isCompanyNameInput = false;
        this.$store.commit("SET_COMPANYVALID", this.isCompanyNameInput);

        this.borderCompanyName = "1px solid #aa4651";
        this.boxshadowCompanyName = "0 0 4px #f4b6c1";
      } else {
        this.isCompanyNameInput = true;
        this.$store.commit("SET_COMPANYVALID", this.isCompanyNameInput);
        this.borderCompanyName = "1px solid #ccc";
        this.boxshadowCompanyName = "";
      }
    },
    checkNumber() {
      if (this.inputNumber == "") {
        this.isNumberInput = false;
        this.isNumberValidate = true;
        this.borderNumber = "1px solid #aa4651";
        this.boxshadowNumber = "0 0 4px #f4b6c1";
      } else {
        var Numberformat = /^\d+/;
        if (this.inputNumber.match(Numberformat)) {
          this.isNumberValidate = true;
          this.isNumberInput = true;
          this.$store.commit("SET_NUMBERVALID", this.isNumberValidate);
          this.borderNumber = "1px solid #ccc";
          this.boxshadowNumber = "";
        } else {
          this.isNumberValidate = false;
          this.isNumberInput = true;
          this.borderNumber = "1px solid #aa4651";
          this.boxshadowNumber = "0 0 4px #f4b6c1";
        }
      }
    },
  },
};
</script>

<style scoped>
.field {
  margin-bottom: 10px;
}

.title {
  font-size: 16px;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  background: #fff;
  margin-bottom: 6px !important;
  margin-top: 0px;
}

.inputCompanyName {
  height: 30px;
  width: 99%;
  box-shadow: v-bind(boxshadowCompanyName);
  border: v-bind(borderCompanyName);
  outline: v-bind(outlineCompanyName);
  border-radius: 5px;
  background: #fff;
  font-size: 16px;
  margin-bottom: 5px;
  transition: all 0.2s ease;
  padding-left: 15px;
}

input:focus {
  outline: 3px solid #36bef869;
}

.inputNumber {
  height: 30px;
  width: 99%;
  box-shadow: v-bind(boxshadowNumber);
  border: v-bind(borderNumber);
  outline: v-bind(outlineNumber);
  border-radius: 5px;
  background: #fff;
  font-size: 16px;
  margin-bottom: 5px;
  transition: all 0.2s ease;
  padding-left: 15px;
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
</style>