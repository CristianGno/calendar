import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from "firebase/app";
import "firebase/firestore";

import VueTextareaAutosize from "vue-textarea-autosize";
Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyD1u8lm-y4oigxeMV-0OKx_9nVPvhRaMrM",
  authDomain: "calendario-f7e7f.firebaseapp.com",
  databaseURL: "https://calendario-f7e7f.firebaseio.com",
  projectId: "calendario-f7e7f",
  storageBucket: "calendario-f7e7f.appspot.com",
  messagingSenderId: "636708775574",
  appId: "1:636708775574:web:4fd684df9bf39a161384b7"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
