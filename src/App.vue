<template>
  <div id="app">
    <p> Enter your first name: <input v-model="person.firstName" placeholder="edit me"> </p>
    <p> Enter your surname: <input v-model="person.lastName" placeholder="edit me"> </p>
    <SimpleComponent :first-name="person.firstName" :last-name="person.lastName" :person-data="person"/>
    <button v-on:click="handleButtonClick">Please click to increment</button>
    <p>The button above has been clicked {{ counter }} times.</p>
    <button v-on:click="modifyStore">Please click to modify Vuex store</button>
    <p>Store.state.count= {{this.$store.state.count}}</p>


    <p> TestBind: <input v-bind:value="testbind"> </p>
    <p>{{testbind}}</p>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
  /* eslint-disable no-console */
import axios from 'axios'
import HelloWorld from './components/HelloWorld.vue'
import SimpleComponent from './components/SimpleComponent.vue'

const handleButtonClickFunctionName = 'handleButtonClick'
const modifyStoreFunctionName = 'modifyStore';

export default {
  name: 'app',
  components: {
    HelloWorld,
    SimpleComponent,
  },
  data: function() {
    return {
      person: {
        firstName: '',
        lastName: '',
      },
      counter: 0,
      info: '',
      testbind: 'XXXX',
    }
  },
  methods: {
    [handleButtonClickFunctionName]: function () {
      alert('Click');
      this.counter += 1;
    },
    [modifyStoreFunctionName]() {
      this.$store.commit('increment');
    },

  },
  mounted() {
   console.log("store counter: " + this.$store.state.count);
   axios
     .get('https://api.coindesk.com/v1/bpi/currentprice.json')
     .then(response => (this.info = response))
   console.log("Component App is mounted");
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
