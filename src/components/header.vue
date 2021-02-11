<template>
<div class="header">
  <img alt="myocardio logo" src="@/assets/logo.png"> 
</div>

  <div id="nav">
    <router-link style="float:left" v-bind:to="{ name: 'Home' }">Home | </router-link> 
    <router-link style="float:right" :to="{ name: 'MyGraphs'}"> My Graphs | </router-link> 
    <router-link style="float:right" :to="{ name: 'MyAccount'}"> My Account | </router-link> 
    <router-link style="float:left" :to="{ name: 'Registration'}">Registration | </router-link> 
    <router-link style="float:left" :to="{ name: 'Login'}">Login</router-link>
    <router-link style="float:left" :to="{ name: 'UploadData'}"> | Add Data</router-link>
  </div>


  <router-view/>
  </template>

  <style scoped>
#nav {
  padding: 30px;
   margin: 0;
  overflow: hidden;
  background-color:#C1272D;
  color: #f2f2f2;
}

#nav a {
  font-weight: bold;
  color: #f2f2f2;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>