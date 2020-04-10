import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use( Vuex, Axios );

export default new Vuex.Store({
  state: {
    name: 'AFloat'
  },
  mutations: {
  },
  actions: {
    doGenericPost() {
      Axios('http://localhost:5000/api/generic/test', { method:'POST',         
        data:{
          name: 'Vitor'
        },
        headers: {  
          'Content-Type': 'application/json',
        }
      })
      //.then(response => response.status)
      .then(data=> console.log(data))
      .catch(err => console.warn(err));
    }
  },
  getters: {
    getName: state => state.player
  },
  modules: {
  }
})
