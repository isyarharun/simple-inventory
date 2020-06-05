import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import * as firebase from "firebase";

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyB74mxE8t5TbZhpEzt6p-G80JBptqXk9E0",
  authDomain: "simpleinventory-1acba.firebaseapp.com",
  databaseURL: "https://simpleinventory-1acba.firebaseio.com",
  projectId: "simpleinventory-1acba",
  storageBucket: "simpleinventory-1acba.appspot.com",
  messagingSenderId: "963515436020",
  appId: "1:963515436020:web:4d922a2312888aa7bf07a1",
  measurementId: "G-GN42PM9MHS"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
