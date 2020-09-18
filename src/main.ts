/* eslint-disable @typescript-eslint/no-explicit-any */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;
const ignoreWarnMessage =
  "The .native modifier for v-on is only valid on components but it was used on <div>.";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
Vue.config.warnHandler = function(msg, vm, trace) {
  // `trace` is the component hierarchy trace
  if (msg === ignoreWarnMessage) {
    msg = null as any;
    vm = null as any;
    trace = null as any;
  }
};

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
