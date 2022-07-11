<template>
  <div>
    
    <div v-if="title == 'Full Name'">
      <input
        v-model="inputName"
        @input="setName"
        @blur="checkName"
        class="inputName"
        :type="typeInput"
      />
      <span v-if="!isNameInput">The field is required!</span>
    </div>
    <div v-if="title == 'Your Email'">
      <input
        v-model="inputEmail"
        @blur="checkEmail"
        class="inputEmail"
        :type="typeInput"
      />
      <span v-if="!isMailInput">The field is required!</span>
      <span v-else-if="!isMailValidate">The field must be email</span>
    </div>
    <div v-if="title == 'Your Company Name'">
      <input
        v-model="inputCompany"
        @blur="checkCompany"
        class="inputCompany"
        :type="typeInput"
      />
      <span v-if="!isCompanyInput">The field is required!</span>
    </div>
    <div v-if="title == 'Number of Employees'">
      <input
        v-model="inputNumber"
        @blur="checkNumber"
        class="inputNumber"
        :type="typeInput"
      />
      <span v-if="!isNumberInput">The field is required!</span>
      <span v-else-if="!isNumberValidate">The field must be number</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "InputField",
  props: ["title", "typeInput"],

  data() {
    return {
      isNameInput: true,
      isMailInput: true,
      isMailValidate: true,
      isCompanyInput: true,
      isNumberInput: true,
      isNumberValidate: true,

      borderName: "1px solid #ccc",
      boxshadowName: "",
      outlineName: "3px solid transparent",

      borderEmail: "1px solid #ccc",
      boxshadowEmail: "",
      outlineEmail: "3px solid transparent",

      borderCompany: "1px solid #ccc",
      boxshadowCompany: "",
      outlineCompany: "3px solid transparent",

      borderNumber: "1px solid #ccc",
      boxshadowNumber: "",
      outlineNumber: "3px solid transparent",
    };
  },
  computed: {
    inputName: {
      get() {
        return this.$store.state.name;
      },
      set(value) {
        this.$store.commit("SET_NAME", value);
      },
    },
    inputEmail: {
      get() {
        return this.$store.state.email;
      },
      set(value) {
        this.$store.commit("SET_EMAIL", value);
      },
    },
    inputCompany: {
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
    inputName: {
      handler() {
        this.checkName();
      },
      deep: true,
    },
    inputEmail: {
      handler() {
        this.checkEmail();
      },
      deep: true,
    },
    inputCompany: {
      handler() {
        this.checkCompany();
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
    check() {
      this.checkName()
      this.checkEmail()
    },
    checkName() {
      if (this.inputName == "") {
        this.isNameInput = false;
        this.$store.commit("SET_NAMEVALID", this.isNameInput);

        this.borderName = "1px solid #aa4651";
        this.boxshadowName = "0 0 4px #f4b6c1";
      } else {
        this.isNameInput = true;
        this.$store.commit("SET_NAMEVALID", this.isNameInput);
        this.borderName = "1px solid #ccc";
        this.boxshadowName = "";
      }
    },
    checkEmail() {
      if (this.inputEmail == "") {
        this.isMailInput = false;
        this.isMailValidate = true;
        this.borderEmail = "1px solid #aa4651";
        this.boxshadowEmail = "0 0 4px #f4b6c1";
      } else {
        var mailformat =
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (this.inputEmail.match(mailformat)) {
          this.isMailValidate = true;
          this.isMailInput = true;
          this.borderEmail = "1px solid #ccc";
          this.boxshadowEmail = "";
        } else {
          this.isMailValidate = false;
          this.isMailInput = true;
          this.borderEmail = "1px solid #aa4651";
          this.boxshadowEmail = "0 0 4px #f4b6c1";
        }
      }
    },
    checkCompany() {
      if (this.inputCompany == "") {
        this.isCompanyInput = false;
        this.borderCompany = "1px solid #aa4651";
        this.boxshadowCompany = "0 0 4px #f4b6c1";
      } else {
        this.isCompanyInput = true;
        this.borderCompany = "1px solid #ccc";
        this.boxshadowCompany = "";
      }
    },
    checkNumber() {
      console.log(this.inputNumber);
      if (this.inputNumber == "") {
        this.isNumberInput = false;
        this.isNumberValidate = true;
        this.borderNumber = "1px solid #aa4651";
        this.boxshadowNumber = "0 0 4px #f4b6c1";
      } else {
        var numberformat = /^\d+/;
        if (this.inputNumber.match(numberformat)) {
          this.isNumberValidate = true;
          this.isNumberInput = true;
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

<style>
.title {
  font-size: 16px;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  background: #fff;
  margin-bottom: 6px !important;
  margin-top: 0px;
}
.inputName {
  height: 30px;
  width: 99%;
  box-shadow: v-bind(boxshadowName);
  border: v-bind(borderName);
  outline: v-bind(outlineName);
  border-radius: 5px;
  background: #fff;
  font-size: 16px;
  margin-bottom: 5px;
  transition: all 0.2s ease;
}

.inputEmail {
  height: 30px;
  width: 99%;
  box-shadow: v-bind(boxshadowEmail);
  border: v-bind(borderEmail);
  outline: v-bind(outlineEmail);
  border-radius: 5px;
  background: #fff;
  font-size: 16px;
  margin-bottom: 5px;
  transition: all 0.2s ease;
}

.inputCompany {
  height: 30px;
  width: 99%;
  box-shadow: v-bind(boxshadowCompany);
  border: v-bind(borderCompany);
  outline: v-bind(outlineCompany);
  border-radius: 5px;
  background: #fff;
  font-size: 16px;
  margin-bottom: 5px;
  transition: all 0.2s ease;
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
}

span {
  color: #bc8896;
  background: #fff;
  margin-bottom: 10px;
  font-size: 12px;
}
input[type="text"] {
  padding-left: 15px;
}
input[type="email"] {
  padding-left: 15px;
}
div {
  background: #fff;
}
</style>