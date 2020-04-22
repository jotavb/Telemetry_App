<template>
  <div class="home">
    <h1>Welcome to PG17vitor Telemetry App</h1>
    <records title="Number of Deaths by Section"></records>
  </div>
</template>

<script>
// @ is an alias to /src
import Records from '@/components/Records.vue'

export default {
  name: 'Home',
  components: {
    Records
  }
}
</script>
