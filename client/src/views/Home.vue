<template>
  <div class="home">
    <img class="logo" alt="vfs-logo" src="../assets/vfs_logo.jpg">
    <h1>Welcome to PG17vitor Telemetry App</h1>
    <chart></chart>
    <records title="Death's History"></records>
  </div>
</template>

<script>
// @ is an alias to /src
import Records from '@/components/Records.vue'
import Chart from '@/components/Chart.vue'


export default {
  name: 'Home',
  components: {
    Records,
    Chart
  },
  //extends: Bar,
}
</script>

<style scoped>
.logo {
  max-width: 200px;
}
</style>
