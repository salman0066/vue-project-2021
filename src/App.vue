<template>

  <div class="layout">
    <appHeader></appHeader>
    <appFooter></appFooter>
  </div>

</template>
<script>
// @ is an alias to /src
import footer from '@/components/footer.vue'
import header from '@/components/header.vue'

export default {
  components: {
    appFooter: footer,
    appHeader: header
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.layout {
  justify-content: space-between;
}

</style>
