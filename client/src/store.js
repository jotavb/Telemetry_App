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
    doSendRecord() {

      let current_datetime = new Date()
      Axios('http://localhost:5000/api/gcloud/', { method:'POST',         
        data:{
          Date: current_datetime,
          DeathInfo: [
            {
              MapSection: '1',
              PosX: '-23.67',
              PosY: '34.87',
              PosZ: '67.02'
            }
          ]
        }
      })
      //.then(response => response.status)
      .then(data=> console.log(data))
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
