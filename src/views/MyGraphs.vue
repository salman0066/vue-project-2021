<template>
  <p></p>
  <div>
    <bar-chart class="center"></bar-chart>
  </div>
  


</template>

<script>

// import {ref} from 'vue';
import BarChart from "@/components/barChart.vue";


// import {ref} from 'vue';
export default {
  components: {
    BarChart,
  },
  setup(){


    return {}
  }
};
</script>

<style scoped>
.center {
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
</style>