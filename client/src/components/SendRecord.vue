<template>
  <div class="Content">
    <h1>{{ title }}</h1>
    <form class="singleRecord">
      <h4>Send Single Record</h4>
      <div class="item">
        <label> Map Section:</label>
        <select name="MapSection" id="MapSection">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div class="item">
        <label> PosX: </label>
        <input type="text" name="PosX" id="PosX" value="0">

        <label> PosY: </label>
        <input type="text" name="PosY" id="PosY" value="0">

        <label> PosZ: </label>
        <input type="text" name="PoxZ" id="PosZ" value="0">
      </div>
      <div>
        <button v-on:click="sendSingleRecord()">Send</button>
      </div>
    </form>
  </div>
</template>

<script>
  import Controller from '@/lib/controller'
  import { mapActions, mapGetters } from 'vuex'

  class SendRecordController extends Controller {

    constructor( name, subComponentList = []) 
    {
        super( name, subComponentList )
        this.vm = {
        }
        this.props = { // props are passed in when using this component
          title: String
        }
        this.injectActions(mapActions(['doSendRecord']));
    }
    
    sendSingleRecord() {
      let current_datetime = new Date()
      let data = {
          Date: current_datetime,
          DeathInfo: [
            {
              MapSection: document.getElementById('MapSection').value,
              PosX: document.getElementById('PosX').value,
              PosY: document.getElementById('PosY').value,
              PosZ: document.getElementById('PosZ').value
            }
          ]
        }
        this.doSendRecord(data);
    }
  }

  export default new SendRecordController('sendRecord'/* , { subComponent, anotherComponent } */);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.singleRecord {
  display: flex;
  flex-direction: column;
}
.item {
  margin-bottom: 10px;
}
button {
  max-width: 100px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
