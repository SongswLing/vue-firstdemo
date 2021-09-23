import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const state = {
  cart: [
    {
      fonts: "yiliersdfserre",
      price: 100.5,
      conut: 1,
      checked: false,
    },
    {
      fonts: "yiliersdfserre",
      price: 100,
      conut: 1,
      checked: false,
    },
    {
      fonts: "yiliersdfserre",
      price: 100,
      conut: 1,
      checked: false,
    },
  ],
  choose: false,
};
const mutations = {
  onchange1(state, checked) {
    state.cart.forEach((item) => {
      item.checked = checked;
    });
  },
  onchange2(state) {
    const length = state.cart.filter((item) => item.checked === true).length;
    console.log(length);
    console.log(state.cart.length);
    if (length !== state.cart.length) {
      state.choose = false;
      console.log(state.choose);
    } else {
      state.choose = true;
    }
  },
};
const getters = {
  pullice(state) {
    const newArray = state.cart.filter((item) => item.checked === true);
    let price = 0;
    newArray.forEach((item) => {
      price += item.price * item.conut;
    });
    return price;
  },
};
export default new Vuex.Store({
  state,
  mutations,
  getters,
});
