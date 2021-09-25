import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/css/normal.css";
import "amfe-flexible";
import "postcss-pxtorem";
Vue.config.productionTip = false;
import {
  Button,
  Icon,
  Image as VanImage,
  Tabbar,
  TabbarItem,
  NavBar,
  Swipe,
  SwipeItem,
  Lazyload,
  Search,
  Toast,
  Checkbox,
  CheckboxGroup,
  Stepper,
  SubmitBar,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  AddressList,
  AddressEdit,
  Area,
} from "vant";
Vue.use(Button);
Vue.use(Icon);
Vue.use(VanImage);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(NavBar);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
Vue.use(Search);
Vue.use(Toast);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Stepper);
Vue.use(SubmitBar);
Vue.use(GoodsAction);
Vue.use(GoodsActionIcon);
Vue.use(GoodsActionButton);
Vue.use(AddressList);
Vue.use(AddressEdit);
Vue.use(Area);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
