<template>
  <div class="Content">
    <h2>{{ title }}</h2>
    <p>
      PG17vitor - Cloud Computing - VFS
    </p>
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
