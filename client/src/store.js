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
    doUpdateRecords() {
      
      Axios('http://localhost:5000/api/gcloud/', { method:'GET'})
      .then(response => response.data)
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
