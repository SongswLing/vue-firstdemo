import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";

import store from "../store";
Vue.use(VueRouter);
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};
const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  const auth = store.state.myInfo.username;
  const nextRoute = ["myInfo"];
  //  to()
  if (nextRoute.indexOf(to.name) >= 0) {
    if (!auth && to.path !== "/signIn") {
      next({ name: "signIn" });
    }
  } else {
    // next();
  }
  next();
});

export default router;
