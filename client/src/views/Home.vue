<template>
  <div class="home">
    <img alt="vfs-logo" src="../assets/vfs_logo.jpg">
    <SimpleRecord msg="Welcome to PG17vitor Telemetry App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import SimpleRecord from '@/components/SimpleRecord.vue'

export default {
  name: 'Home',
  components: {
    SimpleRecord
  }
}
</script>
