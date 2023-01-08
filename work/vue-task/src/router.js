import Vue from "vue";
import VueRouter from "vue-router";
import SignIn from "./components/SignIn";

Vue.use(VueRouter)

export const router = new VueRouter({
  routes: [{
    path: "/login",
    component: SignIn
  }],
  mode: "history"
})
