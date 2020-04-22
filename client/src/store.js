import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use( Vuex, Axios );

export default new Vuex.Store({
  state: {
    records: []
  },
  mutations: {
    setRecords: (state, newRecords) => {
      state.records = newRecords;
    }
  },
  actions: {
    doSendRecord({commit}, data) {

      Axios('http://localhost:5000/api/gcloud/', { method:'POST',         
        data: data
      })
      .then(response => response.status)
      .catch(err => console.warn(err));
    }
    ,
    doFetchRecords({commit}) {
      
      Axios('http://localhost:5000/api/gcloud/', { method:'GET'})
      .then(response => response.data)
      .then(data=> 
        {
          console.log(data);
          commit('setRecords', data);
        })
      .catch(err => console.warn(err));
    }
  },
  getters: {
    getRecords: state => state.records
  },
  modules: {
  }
})
