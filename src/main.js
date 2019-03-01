// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuefire from 'vuefire';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App';
import router from './router';
import firebase from './service/firebase';

Vue.use(Vuefire);
Vue.use(VueAxios, axios);
Vue.config.productionTip = false;

/* eslint-disable no-new */

new Vue({
  el: '#app',
  firebase: {
    cat: firebase.database.ref('cat').orderByChild('created_at'),
  },
  router,
  template: '<App/>',
  components: { App },
});
