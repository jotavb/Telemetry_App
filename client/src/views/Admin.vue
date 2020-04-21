<template>
  <div class="admin">
    <img alt="vfs-logo" src="../assets/vfs_logo.jpg">
    <SendRecord title="Welcome to PG17vitor Admin Page"/>
  </div>
</template>

<script>
// @ is an alias to /src
import SendRecord from '@/components/SendRecord.vue'

export default {
  name: 'Admin',
  components: {
    SendRecord
  }
}
</script>