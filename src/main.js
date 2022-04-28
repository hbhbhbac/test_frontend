import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import '@mdi/font/css/materialdesignicons.css'
import axios from 'axios'

Vue.prototype.$axios = axios
Vue.config.productionTip = false;

axios.defaults.baseURL = 'http://101.42.224.73:8000/';

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
