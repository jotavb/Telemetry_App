<template>
  <div class="Content">
    <h1>{{ msg }}</h1>
    <p>
      PG17vitor - Cloud Computing - VFS
    </p>
    <button v-on:click="myFunction">Click Me</button>
  </div>
</template>

<script>
  import Controller from '@/lib/controller'
  import { mapActions, mapGetters } from 'vuex'

  class SimpleRecordController extends Controller {

    constructor( name, subComponentList = []) 
    {
        super( name, subComponentList )
        this.vm = {
        }
        this.props = { // props are passed in when using this component
          msg: String
        } 
        this.injectActions(mapActions(['doGenericPost']));
        //this.injectGetters(mapGetters(['getState']));
    }        
  }

  export default new SimpleRecordController('simpleRecord'/* , { subComponent, anotherComponent } */);
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
