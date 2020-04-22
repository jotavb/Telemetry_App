<template>
  <div class="content">
    <h2>{{ title }}</h2>
    <table>
        <tbody>
            <tr class="tableHeader">  
                <td> Date </td>
                <td class="tableHeaderMid"> Map Section </td>
                <td> Position </td>
            </tr>
            <tr class="tableContent" v-for="(item, index) in getRecords" :key="index">
                <td>{{ item['Date'] }}</td>
                <td class="tableContentMid">{{ item['MapSection'] }}</td>
                <td>({{ item['PosX'] }}, {{ item['PosY'] }}, {{ item['PosZ'] }})</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
  import Controller from '@/lib/controller'
  import { mapActions, mapGetters } from 'vuex'

  class RecordsController extends Controller {

    constructor( name, subComponentList = []) 
    {
        super( name, subComponentList )
        this.vm = {
            records: []
        }
        this.props = { // props are passed in when using this component
          title: String
        } 
        this.injectActions(mapActions(['doFetchRecords']));
        this.injectGetters(mapGetters(['getRecords']));
    }

    onBeforeMount() {
        this.doFetchRecords();
    }
  }

  export default new RecordsController('records'/* , { subComponent, anotherComponent } */);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tableHeader {
    background: rgb(41, 30, 255);
}
.tableHeaderMid {
    background: rgb(13, 0, 255);
}
.tableContent {
    background: rgb(255, 140, 0);
}
.tableContentMid {
    background: rgb(255, 155, 33);
}
table, th, td {
    color: white;
  /* border: 1px solid black;
  border-collapse: collapse; */
}
table {
    margin-left:auto; 
    margin-right:auto;
    border-spacing: 0px;
}
td {
    padding: 10px;
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
