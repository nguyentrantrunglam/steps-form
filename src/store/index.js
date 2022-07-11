import { createStore } from 'vuex'

export default createStore({
  state: {
    step: 1,
    name: '',
    email: '',
    company: '',
    number: '',
    answer: '',
    isAnswer: false,
    isAgree: false,
    nameValid: false,
    emailValid: false,
    companyValid: false,
    numberValid: false,

  },
  mutations: {
    TOGGLE_PREVIOUS1(state) {
      if (state.step == 1) {
        state.step = 1
      } else {
        state.step = state.step - 1
      }
    },
    TOGGLE_NEXT1(state) {
      if ((state.nameValid && state.emailValid)) {
        if (state.step != 3) {
          state.step = state.step + 1
        } else {
          state.step = 3
        }
      }
    },
    TOGGLE_PREVIOUS2(state) {
      if (state.step == 1) {
        state.step = 1
      } else {
        state.step = state.step - 1
      }
    },
    TOGGLE_NEXT2(state) {
      if ((state.companyValid && state.numberValid)) {
        if (state.step != 3) {
          state.step = state.step + 1
        } else {
          state.step = 3
        }
      }
    },
    SET_STEP(state, step) {
      state.step = step
    },
    SET_NAME(state, inputName) {
      state.name = inputName
    },
    SET_NAMEVALID(state, nameValid) {
      state.nameValid = nameValid
    },
    SET_EMAIL(state, inputEmail) {
      state.email = inputEmail
    },
    SET_EMAILVALID(state, emailValid) {
      state.emailValid = emailValid
    },
    SET_COMPANY(state, inputCompany) {
      state.company = inputCompany
    },
    SET_COMPANYVALID(state, companyNameValid) {
      state.companyValid = companyNameValid
    },
    SET_NUMBER(state, inputNumber) {
      state.number = inputNumber
    },
    SET_NUMBERVALID(state, numberValid) {
      state.numberValid = numberValid
    },
    SET_ISAGREE(state, isAgree) {
      state.isAgree = isAgree
    },
    SET_ANSWER(state, answer) {
      state.answer = answer
    },
    SET_ISANSWER(state, isAnswer) {
      state.isAnswer = isAnswer
    }
  },
  actions: {

  },
  modules: {
  }
})
