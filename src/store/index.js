import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const state = {
  choose: false,
  siteinfo: [
    {
      name: "张三",
      call: 12223334355,
      site: "河南省郑州市中原区",
      id: 1,
      checked: false,
    },
    {
      name: "李四",
      call: 12223334355,
      site: "河南省郑州市中原区",
      id: 2,
      checked: false,
    },
  ],
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
  myInfo: {
    username: "",
    images: "",
    sex: "",
    birth: "",
  },
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
    newshops.old = newshop.old;
    newshops.checked = true;
    state.cart.push(newshops);
  },
  onchange4(state, sitelist) {
    state.siteinfo.push(sitelist);
    console.log(state.site);
  },
  onchange5(state, index) {
    const falsesite = state.siteinfo.filter((item) => {
      return item.id !== index;
    });
    falsesite.forEach((item) => {
      item.checked = false;
    });
  },
  onchange6(state, index) {
    state.cart.splice(index, 1);
  },
  onchange7(state, myinfo) {
    state.myInfo.username = myinfo.tel + "";
    state.myInfo.images = myinfo.imges + "";
    state.myInfo.sex = myinfo.picker + "";
    state.myInfo.birth = myinfo.brith + "";
    console.log(myinfo);
    console.log(state.myInfo);
  },
  onchange8(state, username) {
    state.myInfo.username = username;
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
  gosite(state) {
    const file = state.siteinfo.filter((item) => item.checked === true);
    return file;
  },
};
export default new Vuex.Store({
  state,
  mutations,
  getters,
});
