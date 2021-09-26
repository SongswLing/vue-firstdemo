import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const state = {
  // cart: [
  //   {
  //     fonts: "yiliersdfserre",
  //     price: 100.5,
  //     conut: 1,
  //     checked: false,
  //   },
  //   {
  //     fonts: "yiliersdfserre",
  //     price: 100,
  //     conut: 1,
  //     checked: false,
  //   },
  //   {
  //     fonts: "yiliersdfserre",
  //     price: 100,
  //     conut: 1,
  //     checked: false,
  //   },
  // ],
  choose: false,
  site: [],
  cart: [
    {
      imgurl: "../assets/home/commoditys/01(1).png",
      fonts: "哈哈哈哈哈哈哈哈哈哈哈啊哈1",
      price: 13.9,
      old: 10.9,
      conut: 1,
      id: 0,
    },
    {
      imgurl: "../assets/home/commoditys/01(1).png",
      fonts: "哈哈哈哈哈哈哈哈哈哈哈啊哈2",
      price: 10.9,
      old: 11.9,
      id: 1,
      conut: 1,
    },
    {
      imgurl: "../assets/home/commoditys/01(1).png",
      fonts: "哈哈哈哈哈哈哈哈哈哈哈啊哈3",
      price: 11.9,
      old: 12.9,
      id: 2,
      conut: 1,
    },
    {
      imgurl: "../assets/home/commoditys/01(1).png",
      fonts: "哈哈哈哈哈哈哈哈哈哈哈啊哈4",
      price: 12.9,
      old: 13.9,
      id: 3,
      conut: 1,
    },
  ],
};
const mutations = {
  onchange1(state, checked) {
    state.cart.forEach((item) => {
      item.checked = checked;
    });
  },

  onchange2(state) {
    const length = state.cart.filter((item) => item.checked === true).length;
    // console.log(length);
    // console.log(state.cart.length);
    if (length !== state.cart.length) {
      state.choose = false;
      // console.log(state.choose);
    } else {
      state.choose = true;
    }
  },
  onchange3(state, newshop) {
    let newshops = {};
    newshops.fonts = newshop.fonts;
    newshops.price = newshop.price;
    newshops.checked = true;
    state.cart.push(newshops);
  },
  onchange4(state, sitelist) {
    state.site = sitelist;
    console.log(state.site);
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
