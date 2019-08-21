// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes.js'
import BootstrapVue from 'bootstrap-vue'
import crud from "./crud";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.prototype.$crud = crud;
/* eslint-disable no-new */

const router = new VueRouter({
		routes: Routes,
		mode: 'history'
});

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router : router
})
