import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(Vuelidate)



firebase.initializeApp({
  apiKey: "AIzaSyC4en-Glbi1ZHHMMV_YtoMQhlW4d4NNvlk",
  authDomain: "biopj-ed792.firebaseapp.com",
  databaseURL: "https://biopj-ed792.firebaseio.com",
  projectId: "biopj-ed792",
  storageBucket: "biopj-ed792.appspot.com",
  messagingSenderId: "558676226664",
  appId: "1:558676226664:web:7a53aefb453becd3be01dd",
  measurementId: "G-88Z4P6BN3T"
})

let app

firebase.auth().onAuthStateChanged(()=>{
  if(!app){
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})

