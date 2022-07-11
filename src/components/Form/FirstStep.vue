<template>
  <div class="field">
    <p class="title">Full Name</p>
    <input v-model="inputName" @input="setName" @blur="checkName" class="inputName" type="text" />
    <span v-if="!isNameInput">The field is required!</span>
  </div>
  <div class="field">
    <p class="title">Your Email</p>
    <input v-model="inputEmail" @blur="checkEmail" class="inputEmail" type="text" />
    <span v-if="!isMailInput">The field is required!</span>
    <span v-else-if="!isMailValidate">The field must be email</span>
  </div>
  <div class="controller">
    <button class="button previous" @click="clickPrevious">PREVIOUS</button>
    <button class="button next" @click="clickNext">NEXT</button>
  </div>
</template>

<script>
export default {
  name: "FirstStep",
  data() {
    return {
      isNameInput: true,
      isMailInput: true,
      isMailValidate: true,

      borderName: "1px solid #ccc",
      boxshadowName: "",
      outlineName: "3px solid transparent",

      borderEmail: "1px solid #ccc",
      boxshadowEmail: "",
      outlineEmail: "3px solid transparent",
    };
  },
  computed: {
    step() {
      return this.$store.step;
    },
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
  },
  methods: {
    clickNext() {
      this.$store.commit("TOGGLE_NEXT1");
      this.check();
    },
    clickPrevious() {
      this.$store.commit("TOGGLE_PREVIOUS1");
    },
    check() {
      this.checkName(), this.checkEmail();
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
          this.$store.commit("SET_EMAILVALID", this.isMailValidate)
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
  padding-left: 15px;
}

input:focus {
  outline: 3px solid #36bef869;
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