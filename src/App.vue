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

#nav a.router-link-exact-active {
  color: #42b983;
}

.el-button{
    width:80%;
    height:auto;
    margin:50px auto 0;
    position:relative;
    padding:16px;
    background-color:#ffff;
    border-radius:2px;
    box-shadow:0 2px 8px rgba(0,0,0,0.3);
    box-sizing:border-box;
}
</style>
