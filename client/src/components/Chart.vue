<template>
  <div class="Content">
    <canvas class="chart" ref="canvas" width="600" height="250" style="display: inline"></canvas>
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import Controller from '@/lib/controller'
import { mapActions, mapGetters } from 'vuex'

export default {
    extends: Bar,
    mounted () {
       //The data for our dataset
        let records = this.$store.state.records;
        let data = {
            labels: ['Section1', 'Section2', 'Section3'],
            datasets: [{
                label: 'Deaths by Section',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [1, 1, 0, 10]
                }]
            };
            // Configuration options go here
            let options = {};
        this.renderChart(data, options)
  }
}
</script>

<style scoped>
.chart {
  max-width: 600px;
  max-height: 250px;
}
</style>