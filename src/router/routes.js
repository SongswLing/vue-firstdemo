import home from "../views/home";
const cals = () => import("../views/cals");
const cart = () => import("../views/cart");
const info = () => import("../views/info");
const search = () => import("../components/search");
const newcom = () => import("../components/newCom");
import newshop from "../components/cals/newShop";
const newDrink = () => import("../components/cals/newDrink");
const products = () => import("../components/products");
const siteEditor = () => import("../components/siteEditor");
const addressEdit = () => import("../components/addressEdit");
const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: home,
  },
  {
    path: "/cals",
    component: cals,
    children: [
      {
        path: "",
        name: "newshop",
        component: newshop,
      },
      {
        path: "drink",
        component: newDrink,
      },
    ],
  },
  {
    path: "/cart",
    component: cart,
  },
  {
    path: "/info",
    component: info,
  },
  {
    path: "/search",
    component: search,
  },
  {
    path: "/newcom",
    component: newcom,
  },
  {
    path: "/products/:index",
    name: "products",
    component: products,
  },
  {
    path: "/siteEditor",
    name: "siteEditor",
    component: siteEditor,
  },
  {
    path: "/addressEdit",
    component: addressEdit,
  },
];

export default routes;
