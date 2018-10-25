import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

new Vue({
  render: h => h(App),
  store,
  mounted(){
    //alert('App is mounted: ' + this.appName);
    //console.log('App is mounted: ' + this.appName);
    store.commit('increment');
    console.log("Logging store: Store.state.count===" + store.state.count);
  },
  data: {
    appName: 'HelloTutorial',
  }
}).$mount('#app')

